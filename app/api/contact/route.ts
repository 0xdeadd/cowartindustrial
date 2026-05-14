import { NextResponse } from "next/server"
import { Resend } from "resend"

const FROM_ADDRESS = "Cowart Leads <leads@cowartind.com>"

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function renderEmailHtml(fields: {
  name: string
  email: string
  phone?: string | null
  company?: string | null
  service?: string | null
  message: string
}): string {
  const row = (label: string, value: string | null | undefined) =>
    value
      ? `<tr><td style="padding:6px 14px 6px 0;color:#3A3D44;font-family:ui-monospace,Menlo,monospace;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;vertical-align:top;white-space:nowrap;">${label}</td><td style="padding:6px 0;color:#0E1A2B;font-family:Georgia,serif;font-size:15px;">${escapeHtml(value)}</td></tr>`
      : ""

  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#F2EEE5;color:#0E1A2B;font-family:Georgia,serif;">
    <table cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #C9C2B0;">
      <tr>
        <td style="padding:24px 28px;border-bottom:1px solid #C9C2B0;">
          <div style="font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#B8252F;">— New Quote Request</div>
          <h1 style="margin:8px 0 0;font-family:Georgia,serif;font-weight:500;font-size:24px;color:#0E1A2B;">${escapeHtml(fields.name)}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 28px;">
          <table cellpadding="0" cellspacing="0" width="100%">
            ${row("Email", fields.email)}
            ${row("Phone", fields.phone)}
            ${row("Company", fields.company)}
            ${row("Service", fields.service)}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 28px 24px;">
          <div style="font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#B8252F;margin-bottom:8px;">— Message</div>
          <div style="white-space:pre-wrap;line-height:1.55;font-family:Georgia,serif;color:#0E1A2B;">${escapeHtml(fields.message)}</div>
        </td>
      </tr>
      <tr>
        <td style="padding:14px 28px;border-top:1px solid #C9C2B0;background:#F2EEE5;font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:0.12em;color:#3A3D44;">
          Reply to this email to respond to ${escapeHtml(fields.name)} directly.
        </td>
      </tr>
    </table>
  </body>
</html>`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    const toAddress = process.env.CONTACT_EMAIL
    let emailSent = false

    if (apiKey && toAddress) {
      const resend = new Resend(apiKey)
      try {
        const result = await resend.emails.send({
          from: FROM_ADDRESS,
          to: toAddress,
          replyTo: email,
          subject: `New quote request — ${name}${service ? ` (${service})` : ""}`,
          html: renderEmailHtml({ name, email, phone, company, service, message }),
        })
        if (result.error) {
          console.error("[contact] Resend returned error:", result.error)
        } else {
          emailSent = true
        }
      } catch (emailError) {
        console.error("[contact] Resend send threw:", emailError)
      }
    }

    if (!emailSent) {
      console.warn(
        "[contact] Lead received but email NOT sent. Submission:",
        JSON.stringify({ name, email, phone, company, service, message }),
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[contact] submission failed:", error)
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 },
    )
  }
}
