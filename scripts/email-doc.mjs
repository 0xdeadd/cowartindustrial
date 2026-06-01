// Email an arbitrary markdown doc via Resend (e.g. an SEO audit or action kit).
// Sends the markdown as text + a monospace HTML rendering that preserves
// tables, code blocks, and checklists.
//
//   node --env-file=.env scripts/email-doc.mjs <file.md> [recipient] [subject]
//
// Needs RESEND_API_KEY (in .env). Sends from the Resend-verified
// zanysparties.com domain (same shared account the contact form uses).

import { readFile } from "node:fs/promises"
import { basename } from "node:path"
import { Resend } from "resend"

const [, , file, to = "clintdotphillips@gmail.com", subjectArg] = process.argv

if (!file) {
  console.error("usage: node --env-file=.env scripts/email-doc.mjs <file.md> [recipient] [subject]")
  process.exit(1)
}
const apiKey = process.env.RESEND_API_KEY
if (!apiKey) {
  console.error("RESEND_API_KEY not set (run with --env-file=.env)")
  process.exit(1)
}

const md = await readFile(file, "utf8")
const subject = subjectArg || `Cowart SEO — ${basename(file)}`
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
const html =
  `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,sans-serif;max-width:800px;margin:0 auto;color:#14161A">` +
  `<pre style="white-space:pre-wrap;word-wrap:break-word;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;line-height:1.5">${esc(md)}</pre>` +
  `</div>`

const resend = new Resend(apiKey)
const { error } = await resend.emails.send({
  from: "Cowart SEO <seo@zanysparties.com>",
  to,
  subject,
  text: md,
  html,
})
if (error) {
  console.error("Email error:", error)
  process.exit(1)
}
console.log(`Emailed ${file} → ${to}`)
