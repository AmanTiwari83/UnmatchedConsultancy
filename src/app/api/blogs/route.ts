import { NextResponse } from "next/server";
import { google } from "googleapis";

const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_BLOG_SHEET_ID!,
      range: "A2:H",
    });

    const rows = response.data.values || [];

    const blogs = rows.map((row, index) => {
      const title = row[0] || "";

      return {
        id: index + 1,
        title,
        image: row[1] || "/images/blogs/blog-1.png",
        date: row[2] ? new Date(row[2]).toISOString().split("T")[0] : "",
        publishedBy: row[3] || "",
        excerpt: row[5] || "",
        slug: createSlug(title),
      };
    });

    return NextResponse.json({
      success: true,
      data: blogs,
    });
  } catch (error: any) {
    console.error("BLOG API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}