// Ensure this API route runs in the Node.js runtime (required by nodemailer)
export const runtime = 'nodejs';

import * as nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.EMAIL_TO || user;

    if (!user || !pass) {
      return NextResponse.json({ success: false, error: 'SMTP credentials not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user, pass }
    });

    // Verify SMTP connection before attempting to send
    try {
      await transporter.verify();
    } catch (verifyErr: any) {
      console.error('SMTP verify failed:', verifyErr);
      return NextResponse.json(
        { success: false, error: 'SMTP verification failed', details: verifyErr?.message || String(verifyErr) },
        { status: 502 }
      );
    }

    const mailBody = `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nService: ${service || '-'}\n\nMessage:\n${message}`;

    const info = await transporter.sendMail({
      from: `${name} <${user}>`,
      to,
      subject: `Contact form — ${name}`,
      text: mailBody,
      html: `<pre style="font-family:inherit">${mailBody}</pre>`
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return NextResponse.json({ success: false, error: err?.message || 'Unknown error' }, { status: 500 });
  }
}
