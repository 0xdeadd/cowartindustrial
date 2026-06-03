import { NextResponse } from "next/server"
import { Resend } from "resend"

// Sends from the Resend-verified zanysparties.com domain (shared Resend
// account; cowartind.com isn't verified there). Only Steve sees this internal
// application email, so the from-domain is immaterial. Switch to a
// cowartind.com sender only if that domain is ever verified in Resend.
const FROM_ADDRESS = "Cowart Careers <careers@zanysparties.com>"

const MAX_RESUME_BYTES = 4 * 1024 * 1024 // 4MB, under Vercel's 4.5MB request-body cap
const ALLOWED_RESUME_EXT = [".pdf", ".doc", ".docx"]

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
  phone: string
  position?: string | null
  experience?: string | null
  message?: string | null
  resumeName?: string | null
}): string {
  const row = (label: string, value: string | null | undefined) =>
    value
      ? `<tr><td style="padding:6px 14px 6px 0;color:#3A3D44;font-family:ui-monospace,Menlo,monospace;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;vertical-align:top;white-space:nowrap;">${label}</td><td style="padding:6px 0;color:#0E1A2B;font-family:Georgia,serif;font-size:15px;">${escapeHtml(value)}</td></tr>`
      : ""

  const block = (label: string, value: string | null | undefined) =>
    value
      ? `<tr><td style="padding:0 28px 24px;"><div style="font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#B8252F;margin-bottom:8px;">${label}</div><div style="white-space:pre-wrap;line-height:1.55;font-family:Georgia,serif;color:#0E1A2B;">${escapeHtml(value)}</div></td></tr>`
      : ""

  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#F2EEE5;color:#0E1A2B;font-family:Georgia,serif;">
    <table cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #C9C2B0;">
      <tr>
        <td style="padding:24px 28px;border-bottom:1px solid #C9C2B0;">
          <div style="font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#B8252F;">New Job Application</div>
          <h1 style="margin:8px 0 0;font-family:Georgia,serif;font-weight:500;font-size:24px;color:#0E1A2B;">${escapeHtml(fields.name)}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 28px;">
          <table cellpadding="0" cellspacing="0" width="100%">
            ${row("Position", fields.position)}
            ${row("Email", fields.email)}
            ${row("Phone", fields.phone)}
            ${row("Resume", fields.resumeName || "Not attached")}
          </table>
        </td>
      </tr>
      ${block("Experience, CDL & Endorsements", fields.experience)}
      ${block("Why Cowart", fields.message)}
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
    const formData = await request.formData()

    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const phone = String(formData.get("phone") ?? "").trim()
    const position = String(formData.get("position") ?? "").trim()
    const experience = String(formData.get("experience") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 },
      )
    }

    // Resume is optional, but validate it if present
    const resume = formData.get("resume")
    let attachment: { filename: string; content: Buffer } | null = null
    if (resume instanceof File && resume.size > 0) {
      const lowerName = resume.name.toLowerCase()
      if (!ALLOWED_RESUME_EXT.some((ext) => lowerName.endsWith(ext))) {
        return NextResponse.json(
          { error: "Resume must be a PDF or Word document" },
          { status: 400 },
        )
      }
      if (resume.size > MAX_RESUME_BYTES) {
        return NextResponse.json({ error: "Resume must be under 4MB" }, { status: 400 })
      }
      const buffer = Buffer.from(await resume.arrayBuffer())
      attachment = { filename: resume.name, content: buffer }
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
          subject: `New job application, ${name}${position ? ` (${position})` : ""}`,
          html: renderEmailHtml({
            name,
            email,
            phone,
            position,
            experience,
            message,
            resumeName: attachment?.filename ?? null,
          }),
          attachments: attachment ? [attachment] : undefined,
        })
        if (result.error) {
          console.error("[apply] Resend returned error:", result.error)
        } else {
          emailSent = true
        }
      } catch (emailError) {
        console.error("[apply] Resend send threw:", emailError)
      }
    }

    if (!emailSent) {
      console.warn(
        "[apply] Application received but email NOT sent. Submission:",
        JSON.stringify({
          name,
          email,
          phone,
          position,
          experience,
          message,
          resume: attachment?.filename ?? null,
        }),
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[apply] submission failed:", error)
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 })
  }
}
