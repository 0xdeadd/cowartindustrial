#!/usr/bin/env node
// One-time OAuth refresh-token capture.
//
// Reads the OAuth Client JSON that you downloaded from Google Cloud Console
// (Desktop app type), opens a browser to Google's auth page, captures the
// callback to a local HTTP listener, exchanges the code for tokens, and
// prints the refresh token + env vars you need to add to .env.local and
// Vercel.
//
// Run once:
//   node scripts/oauth-capture.mjs /path/to/client_secret_xxx.json
//
// The refresh token only stays valid long-term if the OAuth app is published
// to "In production" (Google Cloud Console, Google Auth Platform, Audience).
// While the app is in "Testing" status, Google expires the refresh token after
// 7 days, which silently breaks the weekly SEO report every Monday once a week
// has passed. If you re-run this, confirm the app is In production first; see
// docs/gsc-api-setup.md. Once published, the token lasts until you revoke it or
// Google revokes for 6 months of inactivity.

import { exec } from "node:child_process"
import { readFile } from "node:fs/promises"
import { createServer } from "node:http"
import { google } from "googleapis"

const PORT = 8765
const REDIRECT_URI = `http://localhost:${PORT}`
const SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]

const RED = "\x1b[31m"
const GREEN = "\x1b[32m"
const DIM = "\x1b[2m"
const BOLD = "\x1b[1m"
const RESET = "\x1b[0m"

async function main() {
  const path = process.argv[2]
  if (!path) {
    console.error(`${RED}error:${RESET} pass the client_secret JSON path as an argument`)
    console.error(`       e.g. node scripts/oauth-capture.mjs ~/Downloads/client_secret_xxx.json`)
    process.exit(1)
  }

  const raw = await readFile(path, "utf8")
  const parsed = JSON.parse(raw)
  const creds = parsed.installed || parsed.web
  if (!creds?.client_id || !creds?.client_secret) {
    console.error(`${RED}error:${RESET} JSON doesn't look like an OAuth client credential file`)
    process.exit(1)
  }

  const oauth2 = new google.auth.OAuth2(creds.client_id, creds.client_secret, REDIRECT_URI)

  const authUrl = oauth2.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES,
  })

  const code = await new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      const url = new URL(req.url ?? "/", REDIRECT_URI)
      const got = url.searchParams.get("code")
      const err = url.searchParams.get("error")

      if (err) {
        res.writeHead(400, { "Content-Type": "text/html" })
        res.end(`<h1>Auth error</h1><p>${err}</p><p>You can close this tab.</p>`)
        server.close()
        reject(new Error(err))
        return
      }

      if (got) {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(
          `<!doctype html><html><head><title>Authenticated</title><style>body{font-family:-apple-system,sans-serif;padding:40px;max-width:600px}h1{color:#0a7c2f}</style></head>` +
            `<body><h1>Authentication successful</h1>` +
            `<p>You can close this tab and return to your terminal.</p></body></html>`,
        )
        server.close()
        resolve(got)
      }
    })

    server.listen(PORT, () => {
      console.log()
      console.log(`${BOLD}Listening on ${REDIRECT_URI}${RESET}`)
      console.log()
      console.log(`${BOLD}If a browser tab doesn't open automatically, paste this URL into your browser:${RESET}`)
      console.log()
      console.log(authUrl)
      console.log()
      console.log(`${DIM}Waiting for the OAuth redirect to come back to localhost:${PORT}…${RESET}`)
      console.log(`${DIM}(Press Ctrl-C to cancel.)${RESET}`)
      const opener =
        process.platform === "darwin" ? "open" : process.platform === "win32" ? "start" : "xdg-open"
      exec(`${opener} "${authUrl}"`, (err) => {
        if (err) {
          console.log(`${DIM}(couldn't auto-open browser; copy the URL above)${RESET}`)
        }
      })
    })
    server.on("error", (err) => {
      console.error(`${RED}server error:${RESET}`, err.message)
      if (err.code === "EADDRINUSE") {
        console.error(
          `       Port ${PORT} is already in use. A previous run may still be active.\n` +
            `       Run: lsof -ti:${PORT} | xargs kill -9\n` +
            `       Then re-run this script.`,
        )
      }
      reject(err)
    })
  })

  console.log(`${DIM}Exchanging code for tokens…${RESET}`)
  const { tokens } = await oauth2.getToken(code)

  if (!tokens.refresh_token) {
    console.error(
      `${RED}error:${RESET} no refresh token returned. This usually means you've previously\n` +
        `       authorized this client. To force a fresh refresh token:\n` +
        `       1. Revoke at https://myaccount.google.com/permissions\n` +
        `          (find "Cowart SEO Dashboard" and remove)\n` +
        `       2. Re-run this script`,
    )
    process.exit(1)
  }

  console.log()
  console.log(`${GREEN}${BOLD}=== Refresh token captured ===${RESET}`)
  console.log()
  console.log(`${BOLD}Add these to .env.local:${RESET}`)
  console.log()
  console.log(`GSC_OAUTH_CLIENT_ID=${creds.client_id}`)
  console.log(`GSC_OAUTH_CLIENT_SECRET=${creds.client_secret}`)
  console.log(`GSC_OAUTH_REFRESH_TOKEN=${tokens.refresh_token}`)
  console.log()
  console.log(
    `${DIM}For production: add the same three env vars to your Vercel project settings.${RESET}`,
  )
  console.log()
}

main().catch((e) => {
  console.error(`${RED}error:${RESET}`, e.message)
  process.exit(1)
})
