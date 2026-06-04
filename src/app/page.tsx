"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ParticleTextEffect } from "@/components/ui/particle-text-effect"
import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Mixes } from "@/components/mixes"
import { Footer } from "@/components/footer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[999] bg-[#0A0A0A] flex items-center justify-center"
        >
          <div className="w-full max-w-[1000px] px-4">
            <ParticleTextEffect words={["JUST LANCE", "DJ", "DUBAI", "NIGHTLIFE"]} />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Nav />
          <Hero />
          <About />
          <Mixes />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
