"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { MouseEvent, ReactNode } from "react"

// A "Request Quote" / "Get in Touch" CTA that always lands the user on the
// contact form. From another page it is a normal client-side link to
// /contact#quote. When the user is already on /contact, it intercepts the
// click and scrolls to the form directly: no router round-trip (which felt
// like a hesitation) and no history push (which piled up #quote#quote#quote
// on repeated clicks). The header offset is handled by scroll-padding-top on
// <html> in globals.css, so scrollIntoView lands the form below the header.
export function QuoteLink({
  className,
  children,
  onClick,
}: {
  className?: string
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}) {
  const pathname = usePathname()

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e)

    // Let modified clicks (open in new tab, etc.) and any handler that already
    // opted out behave natively.
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return
    }

    // Cross-page clicks fall through to Next's client-side navigation, which
    // lands on /contact and scrolls to the form via scroll-padding-top.
    if (pathname !== "/contact") return
    if (!document.getElementById("quote")) return

    e.preventDefault()

    // Defer so any state update from onClick (e.g. closing the mobile menu) is
    // committed and the layout has settled before we scroll; otherwise the
    // still-open menu's height throws off where we land. setTimeout (rather
    // than requestAnimationFrame) so it still runs if the tab is backgrounded.
    setTimeout(() => {
      const target = document.getElementById("quote")
      if (!target) return

      target.scrollIntoView({ block: "start" })

      // Move focus to the form so keyboard and screen-reader users land there
      // too, not just sighted users. The heading is not focusable by default,
      // so make it programmatically focusable; preventScroll keeps focus from
      // fighting the scroll we just did.
      const focusTarget =
        target.querySelector<HTMLElement>("h2") ?? target
      focusTarget.setAttribute("tabindex", "-1")
      focusTarget.focus({ preventScroll: true })

      // Reflect the anchor in the URL once, without stacking history entries.
      if (window.location.hash !== "#quote") {
        window.history.replaceState(null, "", "/contact#quote")
      }
    }, 0)
  }

  return (
    <Link href="/contact#quote" onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}
