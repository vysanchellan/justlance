import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Just Lance | Dubai's Premier DJ",
  description:
    "With over 30 years of experience commanding rooms across the Middle East's most exclusive venues, Just Lance is the definitive name in luxury entertainment.",
  openGraph: {
    title: "Just Lance | Dubai's Premier DJ",
    description:
      "With over 30 years of experience commanding rooms across the Middle East's most exclusive venues.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} font-body antialiased bg-bg text-text-primary`}
      >
        {children}
      </body>
    </html>
  )
}
