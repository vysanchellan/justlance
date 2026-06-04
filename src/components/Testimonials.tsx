"use client"

import { motion } from "framer-motion"
import { TESTIMONIALS } from "@/lib/config"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-violet block mb-4">
            Client Voices
          </span>
          <h2 className="font-display font-light text-[clamp(32px,5vw,64px)] text-text-primary">
            What They Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border-t-2 border-[rgba(155,89,245,0.3)] pt-8"
            >
              <p className="font-display font-light italic text-[22px] text-text-primary leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <span className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-violet block">
                {item.attribution}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
