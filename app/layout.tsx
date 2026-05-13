import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Social Media Account Planner - AI-Powered Growth",
  description: "Create a winning TikTok/Social Media strategy with AI assistance. From name generation to content planning in 3 steps.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "Social Media Account Planner",
    description: "AI-powered social media account planning wizard",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-950">
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Social Media Account Planner - AI-Powered Growth",
  description: "Create a winning TikTok/Social Media strategy with AI assistance. From name generation to content planning in 3 steps.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "Social Media Account Planner",
    description: "AI-powered social media account planning wizard",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-950">
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}
