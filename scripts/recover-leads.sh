#!/usr/bin/env bash
#
# Pulls any contact-form submissions that landed in Vercel logs because the
# Resend email send failed (cowartind.com not yet verified in Resend, etc.).
# Outputs them as CSV to stdout.
#
# Usage:
#   ./scripts/recover-leads.sh                  # last hour of logs
#   ./scripts/recover-leads.sh --since 24h      # last 24 hours
#   ./scripts/recover-leads.sh > leads.csv      # save to file
#
# Requires:
#   - `vercel` CLI logged in (`vercel login`)
#   - `jq` installed (`brew install jq`)
#
# Once Resend's cowartind.com is verified, leads stop landing in logs and start
# arriving in info@cowartind.com directly. At that point this script becomes
# nostalgic.

set -euo pipefail

SINCE_FLAG=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    --since)
      SINCE_FLAG="--since $2"
      shift 2
      ;;
    -h|--help)
      sed -n '3,18p' "$0"
      exit 0
      ;;
    *)
      echo "unknown arg: $1" >&2
      exit 1
      ;;
  esac
done

if ! command -v vercel >/dev/null 2>&1; then
  echo "vercel CLI not found. Install with: npm i -g vercel" >&2
  exit 1
fi

if ! command -v jq >/dev/null 2>&1; then
  echo "jq not found. Install with: brew install jq" >&2
  exit 1
fi

# Header
echo "timestamp,name,email,phone,company,service,message"

# Pull logs as JSON, filter for the "Lead received" marker, extract the JSON payload.
# The log message format is: "[contact] Lead received but email NOT sent. Submission: {...}"
# Vercel nests function-level console.warn/error inside parent log's .logs[] array,
# so we flatten and search both the top-level .message and the nested ones.
vercel logs --query "Lead received but email NOT sent" --json $SINCE_FLAG --no-branch 2>/dev/null \
  | jq -rs '
    [
      .[]
      | (.timestamp // 0) as $ts
      | ([.message] + ([.logs[]?.message] // []))
      | .[]
      | select(. | test("Lead received but email NOT sent"))
      | capture("Submission: (?<json>\\{.*\\})") | .json | fromjson
      | . + {_ts: ($ts | tostring)}
    ]
    # de-dupe by email + timestamp + message (parent message and nested logs[] often duplicate)
    | unique_by([._ts, .email, .message])
    | .[]
    | [
        ._ts,
        (.name // ""),
        (.email // ""),
        (.phone // ""),
        (.company // ""),
        (.service // ""),
        ((.message // "") | gsub("\n"; " | "))
      ]
    | @csv
  '
