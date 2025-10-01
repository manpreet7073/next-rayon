import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import formidable from "formidable-serverless";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const EMAIL_USER = process.env.EMAIL_USER || "rayonwebsolutions@gmail.com";
const EMAIL_PASS = process.env.EMAIL_PASS || "admubkeunwdrhxgi";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let subject: string, message: string, replyTo: string | undefined;

    if (contentType.includes("application/json")) {
      const body = await req.json();
      subject = body.subject;
      message = body.message;
      replyTo = body.email;
    } else if (contentType.includes("multipart/form-data")) {
      const form = new formidable.IncomingForm();
      const formData = await new Promise<{ fields: any; files: any }>((resolve, reject) => {
        form.parse(req as any, (err, fields, files) => {
          if (err) reject(err);
          else resolve({ fields, files });
        });
      });
      subject = formData.fields.subject;
      message = formData.fields.message;
      replyTo = formData.fields.email;
    } else {
      return NextResponse.json({ message: "Unsupported Content-Type" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject,
      text: message,
      replyTo,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err: any) {
    console.error("Email error:", err);
    return NextResponse.json({ message: "Failed to send email", error: err.message }, { status: 500 });
  }
}
