"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

const scrollToBooking = () => {
  const el = document.getElementById("booking")
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function Hero() {
  const [showreelOpen, setShowreelOpen] = useState(false)

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(155,89,245,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-violet block mb-8"
          >
            ——— Dubai · UAE ———
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="font-display font-light text-[clamp(80px,12vw,160px)] leading-[0.9] text-text-primary mb-6"
          >
            JUST LANCE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="font-display font-light italic text-[clamp(24px,4vw,48px)] text-text-secondary mb-8"
          >
            Architect of Sound. Curator of Experience.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="font-body font-light text-base text-text-dim max-w-[480px] mx-auto leading-relaxed mb-12"
          >
            30 years of commanding rooms across the Middle East&apos;s most exclusive venues.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToBooking}
              className="px-8 py-3.5 rounded-full border border-[rgba(155,89,245,0.4)] bg-[rgba(155,89,245,0.1)] text-violet font-body text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[rgba(155,89,245,0.2)] hover:border-violet transition-all duration-300"
            >
              Book a Private Event
            </button>
            <button
              onClick={() => setShowreelOpen(true)}
              className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-text-secondary hover:text-text-primary transition-colors"
            >
              Watch Showreel
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[8px] tracking-[0.3em] uppercase text-text-dim">
            SCROLL
          </span>
          <div className="w-px h-10 bg-violet/40 animate-pulse" />
        </motion.div>
      </section>

      {showreelOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setShowreelOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-surface border border-border rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowreelOpen(false)}
              className="absolute top-4 right-4 z-10 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Close showreel"
            >
              <X size={24} />
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-body text-sm text-text-dim">Showreel embed placeholder</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
