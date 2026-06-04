"use client"

import { motion } from "framer-motion"
import { MockPlayer } from "@/components/MockPlayer"
import { MIXES } from "@/lib/config"

export function Mixes() {
  return (
    <section id="mixes" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-violet block mb-4">
            Selected Works
          </span>
          <h2 className="font-display font-light text-[clamp(32px,5vw,64px)] text-text-primary">
            Listen In
          </h2>
        </motion.div>

        <div className="space-y-8">
          {MIXES.map((mix, i) => (
            <motion.div
              key={mix.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <MockPlayer
                id={mix.id}
                title={mix.title}
                subtitle={mix.subtitle}
                duration={mix.duration}
                genre={mix.genre}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
