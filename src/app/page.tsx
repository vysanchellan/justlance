"use client"

import { useState, useCallback } from "react"
import { AnimatePresence } from "framer-motion"
import { LoadingScreen } from "@/components/LoadingScreen"
import { Boxes } from "@/components/ui/background-boxes"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/Services"
import { Mixes } from "@/components/mixes"
import { Testimonials } from "@/components/Testimonials"
import { Booking } from "@/components/Booking"
import { Footer } from "@/components/footer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  const handleLoadComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loader" onComplete={handleLoadComplete} />
      ) : (
        <div key="main" className="relative bg-bg min-h-screen">
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 w-full h-full bg-bg z-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,transparent_40%,black)] pointer-events-none" />
            <Boxes />
          </div>
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Mixes />
            <Testimonials />
            <Booking />
            <Footer />
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
