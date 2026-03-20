import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    await db.contactSubmission.create({
      data: { name, email, phone, company, service, message },
    })

    // TODO: Add Resend email notification here

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    )
  }
}
