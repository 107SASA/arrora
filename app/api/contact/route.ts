import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json()

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    // Log every enquiry to Vercel / server logs so nothing is lost
    console.log(
      '[Contact Enquiry]',
      JSON.stringify({ name, email, phone, service, message, at: new Date().toISOString() }),
    )

    // TODO: add email delivery — set SMTP_HOST / SMTP_USER / SMTP_PASS / SMTP_PORT in
    // Vercel env vars, then uncomment the nodemailer block below.
    //
    // const nodemailer = await import('nodemailer')
    // const t = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT ?? 587),
    //   secure: process.env.SMTP_SECURE === 'true',
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // })
    // await t.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: process.env.CONTACT_EMAIL ?? 'trademarks@vsarora.com',
    //   replyTo: email,
    //   subject: `New Enquiry: ${service || 'General'} — ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\nService: ${service || '—'}\n\n${message || '(no message)'}`,
    // })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
