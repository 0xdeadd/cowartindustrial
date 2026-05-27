"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const next = params.get("next") || "/admin"
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        setError(body.error || "Login failed")
        setSubmitting(false)
        return
      }
      router.push(next)
      router.refresh()
    } catch {
      setError("Network error")
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="label-mono text-[#C9C2B0] block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          className="w-full bg-[#08111E] border border-[#1F2D40] px-4 py-3 text-[#F2EEE5] focus:outline-none focus:border-[#B8252F]"
        />
      </div>
      {error && <div className="label-mono text-[#B8252F]">{error}</div>}
      <button
        type="submit"
        disabled={submitting || !password}
        className="w-full bg-[#B8252F] hover:bg-[#8C1F1F] disabled:opacity-50 text-[#F2EEE5] px-4 py-3 label-mono transition-colors"
      >
        {submitting ? "Signing in…" : "Sign In"}
      </button>
    </form>
  )
}

export default function AdminLogin() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#0E1A2B] text-[#F2EEE5]">
      <div className="w-full max-w-sm">
        <div className="label-mono text-[#B8252F] mb-4">— Admin / Login</div>
        <h1 className="display-serif text-3xl mb-8">Cowart SEO Dashboard</h1>
        <Suspense fallback={<div className="label-mono text-[#C9C2B0]">Loading…</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  )
}
