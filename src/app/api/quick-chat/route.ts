import { NextResponse } from "next/server";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  email: string;
  phoneNo: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as SheetForm;

    // 1️⃣ Google Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // 2️⃣ Sheets client
    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    // 3️⃣ Append row
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_QUICK_CHAT_SHEET_ID!,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          body.name,
          body.email,
          body.phoneNo,
          body.message,
        ]],
      },
    });

    return NextResponse.json({
      success: true,
      data: response.data,
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
