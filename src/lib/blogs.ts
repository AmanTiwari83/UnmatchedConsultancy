import { google } from "googleapis";

export const createSlug = (title: string) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export const calculateReadTime = (content: string) => {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
};

export async function getBlogBySlug(slug: string) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_BLOG_SHEET_ID!,
    range: "A2:G",
  });

  const rows = response.data.values || [];

  const blogs = rows.map((row) => {
    const title = row[0] || "";
    const content = row[6] || "";

    return {
      slug: createSlug(title),
      title,
      image: row[1] || "/images/blogs/blog-1.png",
      date: row[2] ? new Date(row[2]).toISOString().split("T")[0] : "",
      publishedBy: row[3] || "",
      category: row[4] || "",
      readTime: calculateReadTime(content),
      excerpt: row[5] || "",
      content,
    };
  });

  return blogs.find((b) => b.slug === slug) || null;
}