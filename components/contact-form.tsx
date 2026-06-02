"use client"

import { useState } from "react"
import { ArrowUpRight, RotateCcw, AlertTriangle } from "lucide-react"
import { allCategoryIds, categories, getServicesByCategory } from "@/lib/services"

const inputBase =
  "w-full bg-transparent border-b border-[#0E1A2B] focus:border-[#B8252F] focus:outline-none px-0 py-3 text-[#0E1A2B] placeholder:text-[#3A3D44] placeholder:opacity-50 transition-colors text-base"

const labelBase = "label-mono text-[#3A3D44] mb-2 flex items-center gap-2"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Failed to send")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[#0E1A2B] bg-[#E8E2D3]/40 p-10">
        <div className="label-mono text-[#B8252F] mb-4">Form 01 / Submitted</div>
        <h3 className="display-serif text-3xl text-[#0E1A2B] leading-tight mb-3">
          Message received.
        </h3>
        <p className="text-[#3A3D44] leading-relaxed font-light mb-8 max-w-md">
          Thanks for reaching out. We&apos;ll respond within one business day. For urgent needs,
          call <a href="tel:770-834-2158" className="text-[#B8252F] underline">770.834.2158</a>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="group flex items-center gap-3 label-mono text-[#0E1A2B] hover:text-[#B8252F] transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Send Another Message
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
            or try again.
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
            placeholder="Jane Smith"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelBase}>
            <span className="text-[#B8252F]">02</span>
            <span>Company</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Acme Manufacturing"
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
            placeholder="jane@acme.com"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelBase}>
            <span className="text-[#B8252F]">04</span>
            <span>Phone</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(770) 555-0100"
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelBase}>
          <span className="text-[#B8252F]">05</span>
          <span>Service Interested In</span>
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className={inputBase + " appearance-none cursor-pointer"}
        >
          <option value="" disabled>
            Select a service
          </option>
          {allCategoryIds.map((catId) => (
            <optgroup key={catId} label={categories[catId].title}>
              {getServicesByCategory(catId).map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </optgroup>
          ))}
          <option value="Other / Not sure">Other / Not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          <span className="text-[#B8252F]">06</span>
          <span>Project Details</span>
          <span className="text-[#B8252F] opacity-70">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about the job, facility type, scope, timing, anything urgent…"
          className={inputBase + " resize-none"}
        />
      </div>

      <div className="pt-6 border-t border-[#0E1A2B]">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group w-full md:w-auto flex items-center justify-between gap-12 bg-[#B8252F] hover:bg-[#8C1F1F] text-[#F2EEE5] px-8 py-5 transition-colors disabled:opacity-60"
        >
          <span className="label-mono">
            {status === "loading" ? "Sending…" : "Send Message"}
          </span>
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
        <div className="mt-4 label-mono text-[#3A3D44] opacity-60">
          We respond within 1 business day · 24-hr emergency: 770.834.2158
        </div>
      </div>
    </form>
  )
}
