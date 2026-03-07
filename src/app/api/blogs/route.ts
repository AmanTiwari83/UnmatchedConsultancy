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
    // console.log("API route hit: /api/blogs/[slug]");
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    // console.log("Auth object created:", auth);

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    // console.log("Google Sheets client created:", sheets);
    // console.log(process.env.GOOGLE_BLOG_SHEET_ID, "Spreadsheet ID");

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_BLOG_SHEET_ID!,
      range: "A2:H",
    });

    // console.log(response, "response from google sheets");

    const rows = response.data.values || [];

    // console.log(rows, "rows from google sheets");

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

    console.log(blogs, "blogs array created from google sheets");
    return NextResponse.json({
      success: true,
      data: blogs,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}