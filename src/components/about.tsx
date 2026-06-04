"use client"

import { motion } from "framer-motion"
import { SectionLabel } from "@/components/ui/section-label"

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <SectionLabel>INTRODUCING DJ LANCE</SectionLabel>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-display text-5xl md:text-7xl text-accent-cyan mb-8 leading-tight">
              Consumate Beat Bringer.
            </h2>
            <p className="font-body text-lg text-foreground/80 max-w-[480px] leading-relaxed mb-10">
              With over 30 years of experience in entertainment, Just Lance is not only highly knowledgeable but also
              incredibly passionate about the industry he has dedicated his life to.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent-magenta text-white font-body font-bold px-8 py-4 rounded-full text-base hover:scale-105 transition-all duration-300"
            >
              Find Out More
              <span>→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-accent-cyan/20 rounded-sm blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&q=80"
                alt="Just Lance DJ"
                className="w-full h-auto rounded-sm relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
