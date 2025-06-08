import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "InfluencerFlow AI - Automate Influence. Accelerate Growth.",
  description:
    "From discovery to payment, run end-to-end influencer campaigns 5× faster with Opraah FX's InfluencerFlow AI Platform.",
  keywords: "influencer marketing, AI automation, creator discovery, campaign management, India",
  openGraph: {
    title: "InfluencerFlow AI - AI-Automated Influencer Marketing",
    description: "Save 80% of campaign admin time and cut go-live from weeks to hours.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "InfluencerFlow AI - AI-Automated Influencer Marketing",
    description: "Save 80% of campaign admin time and cut go-live from weeks to hours.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('keydown', function(e) {
                if (e.key === 'd' || e.key === 'D') {
                  if (!e.target.matches('input, textarea, [contenteditable]')) {
                    e.preventDefault();
                    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
