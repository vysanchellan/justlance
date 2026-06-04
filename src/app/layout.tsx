import type { Metadata } from "next"
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Just Lance | DJ | Dubai Nightlife",
  description:
    "With over 30 years of experience in entertainment, Just Lance is a stalwart DJ of the Dubai Scene.",
  openGraph: {
    title: "Just Lance | DJ | Dubai Nightlife",
    description:
      "With over 30 years of experience in entertainment, Just Lance is a stalwart DJ of the Dubai Scene.",
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
        className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable} font-body antialiased bg-[#0A0A0A] text-[#F5F5F5]`}
      >
        {children}
      </body>
    </html>
  )
}
