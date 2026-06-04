"use client"

import { useState, useCallback } from "react"
import { AnimatePresence } from "framer-motion"
import { LoadingScreen } from "@/components/LoadingScreen"
import { FloatingPaths } from "@/components/ui/background-paths"
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
        <div key="main" className="relative bg-neutral-950">
          <div className="fixed inset-0 z-0">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
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
