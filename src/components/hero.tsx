"use client"

import { motion } from "framer-motion"
import { FloatingPaths } from "@/components/ui/background-paths"

const headline = "Just Lance is a stalwart DJ of the Dubai Scene".split(" ")

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 opacity-30">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-cyan/5 blur-[120px] animate-glow-pulse pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-display text-6xl sm:text-8xl md:text-[120px] leading-[0.9] text-white mb-8"
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              variants={item}
              className="inline-block mr-[0.15em] last:mr-0"
            >
              {word}
              {word === "DJ" && (
                <span className="inline-block w-2 h-2 bg-accent-cyan rounded-full ml-2 align-middle" />
              )}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-start"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-accent-cyan text-black font-body font-bold px-8 py-4 rounded-full text-lg hover:scale-105 hover:glow-cyan transition-all duration-300"
          >
            Book a Consultation
            <span className="text-xl">🎵</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
