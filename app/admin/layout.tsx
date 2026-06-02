import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
}

// Admin route group has its own layout, no public header/footer, no
// LocalBusiness JSON-LD, no analytics. Just the admin UI.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
