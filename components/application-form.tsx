"use client"

import { useRef, useState } from "react"
import { ArrowUpRight, RotateCcw, AlertTriangle, Paperclip, X } from "lucide-react"
import type { Position } from "@/lib/positions"

const inputBase =
  "w-full bg-transparent border-b border-[#0E1A2B] focus:border-[#B8252F] focus:outline-none px-0 py-3 text-[#0E1A2B] placeholder:text-[#3A3D44] placeholder:opacity-50 transition-colors text-base"

const labelBase = "label-mono text-[#3A3D44] mb-2 flex items-center gap-2"

const MAX_RESUME_BYTES = 4 * 1024 * 1024 // 4MB, stays under Vercel's 4.5MB request-body cap
const ALLOWED_RESUME_EXT = [".pdf", ".doc", ".docx"]
const RESUME_ACCEPT =
  ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"

function resumeError(file: File): string | null {
  const name = file.name.toLowerCase()
  if (!ALLOWED_RESUME_EXT.some((ext) => name.endsWith(ext))) {
    return "Resume must be a PDF or Word document (.pdf, .doc, .docx)."
  }
  if (file.size > MAX_RESUME_BYTES) {
    return "Resume is too large. Keep it under 4MB."
  }
  return null
}

export function ApplicationForm({
  positions,
  initialCode,
}: {
  positions: Position[]
  initialCode?: string
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [fileError, setFileError] = useState<string | null>(null)
  const [resume, setResume] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const initialTitle = positions.find((p) => p.code === initialCode)?.title ?? ""

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null
    if (!file) {
      setResume(null)
      setFileError(null)
      return
    }
    const err = resumeError(file)
    if (err) {
      setFileError(err)
      setResume(null)
      if (fileInputRef.current) fileInputRef.current.value = ""
      return
    }
    setFileError(null)
    setResume(file)
  }

  function clearFile() {
    setResume(null)
    setFileError(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (resume) {
      const err = resumeError(resume)
      if (err) {
        setFileError(err)
        return
      }
    }
    setStatus("loading")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      })
      if (!res.ok) throw new Error("Failed to send")
      setStatus("success")
      form.reset()
      clearFile()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[#0E1A2B] bg-[#E8E2D3]/40 p-10">
        <div className="label-mono text-[#B8252F] mb-4">Application 01 / Received</div>
        <h3 className="display-serif text-3xl text-[#0E1A2B] leading-tight mb-3">
          Application received.
        </h3>
        <p className="text-[#3A3D44] leading-relaxed font-light mb-8 max-w-md">
          Thanks for applying to Cowart. We review every application and respond within one business
          day. For anything urgent, call{" "}
          <a href="tel:770-834-2158" className="text-[#B8252F] underline">
            770.834.2158
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="group flex items-center gap-3 label-mono text-[#0E1A2B] hover:text-[#B8252F] transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Submit Another Application
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {status === "error" && (
        <div className="border border-[#B8252F] bg-[#B8252F]/10 px-4 py-3 flex items-center gap-3">
          <AlertTriangle className="h-4 w-4 text-[#B8252F] shrink-0" />
          <span className="text-sm text-[#0E1A2B]">
            Something went wrong. Please call{" "}
            <a href="tel:770-834-2158" className="underline">
              770.834.2158
            </a>{" "}
            or email{" "}
            <a href="mailto:info@cowartind.com" className="underline">
              info@cowartind.com
            </a>
            .
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label htmlFor="name" className={labelBase}>
            <span className="text-[#B8252F]">01</span>
            <span>Name</span>
            <span className="text-[#B8252F] opacity-70">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Carter"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelBase}>
            <span className="text-[#B8252F]">02</span>
            <span>Phone</span>
            <span className="text-[#B8252F] opacity-70">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(770) 555-0100"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>
            <span className="text-[#B8252F]">03</span>
            <span>Email</span>
            <span className="text-[#B8252F] opacity-70">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@email.com"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="position" className={labelBase}>
            <span className="text-[#B8252F]">04</span>
            <span>Position</span>
            <span className="text-[#B8252F] opacity-70">*</span>
          </label>
          <select
            id="position"
            name="position"
            required
            defaultValue={initialTitle}
            className={inputBase + " appearance-none cursor-pointer"}
          >
            <option value="" disabled>
              Select a position
            </option>
            {positions.map((p) => (
              <option key={p.code} value={p.title}>
                {p.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="experience" className={labelBase}>
          <span className="text-[#B8252F]">05</span>
          <span>Experience, CDL &amp; Endorsements</span>
        </label>
        <textarea
          id="experience"
          name="experience"
          rows={3}
          placeholder="Years in the field, CDL class, tanker/hazmat endorsements, certifications (HAZWOPER, OSHA), equipment you've run…"
          className={inputBase + " resize-none"}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          <span className="text-[#B8252F]">06</span>
          <span>Why Cowart?</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a bit about yourself and why you want to work here. Optional, but it helps."
          className={inputBase + " resize-none"}
        />
      </div>

      {/* Resume upload */}
      <div>
        <label className={labelBase}>
          <span className="text-[#B8252F]">07</span>
          <span>Resume</span>
          <span className="text-[#3A3D44] opacity-60 normal-case tracking-normal">
            PDF or Word, up to 4MB
          </span>
        </label>
        <input
          ref={fileInputRef}
          type="file"
          id="resume"
          name="resume"
          accept={RESUME_ACCEPT}
          onChange={handleFileChange}
          className="sr-only"
        />
        {resume ? (
          <div className="flex items-center justify-between border border-[#0E1A2B] bg-[#E8E2D3]/40 px-4 py-3">
            <div className="flex items-center gap-3 min-w-0">
              <Paperclip className="h-4 w-4 text-[#B8252F] shrink-0" />
              <span className="text-[#0E1A2B] truncate">{resume.name}</span>
              <span className="label-mono text-[#3A3D44] opacity-60 shrink-0">
                {(resume.size / 1024).toFixed(0)} KB
              </span>
            </div>
            <button
              type="button"
              onClick={clearFile}
              className="group flex items-center gap-1.5 label-mono text-[#3A3D44] hover:text-[#B8252F] transition-colors shrink-0 ml-4"
            >
              <X className="h-3.5 w-3.5" />
              Remove
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="group flex items-center gap-3 border border-[#0E1A2B] hover:border-[#B8252F] hover:bg-[#E8E2D3]/40 px-4 py-3 transition-colors w-full md:w-auto"
          >
            <Paperclip className="h-4 w-4 text-[#B8252F]" />
            <span className="label-mono text-[#0E1A2B] group-hover:text-[#B8252F] transition-colors">
              Attach Resume
            </span>
          </button>
        )}
        {fileError && (
          <div className="mt-2 flex items-center gap-2 text-sm text-[#B8252F]">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
            {fileError}
          </div>
        )}
      </div>

      <div className="pt-6 border-t border-[#0E1A2B]">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group w-full md:w-auto flex items-center justify-between gap-12 bg-[#B8252F] hover:bg-[#8C1F1F] text-[#F2EEE5] px-8 py-5 transition-colors disabled:opacity-60"
        >
          <span className="label-mono">
            {status === "loading" ? "Sending…" : "Submit Application"}
          </span>
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
        <div className="mt-4 label-mono text-[#3A3D44] opacity-60">
          We respond within 1 business day · Or call 770.834.2158
        </div>
      </div>
    </form>
  )
}
