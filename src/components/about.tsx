"use client"

import { motion } from "framer-motion"
import { STATS } from "@/lib/config"

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-gold block mb-6">
              INTRODUCING JUST LANCE
            </span>

            <h2 className="font-display font-light text-[clamp(40px,6vw,80px)] leading-[1.1] text-text-primary mb-8">
              Consummate
              <br />
              Beat Bringer.
            </h2>

            <p className="font-body font-light text-base text-text-secondary leading-relaxed max-w-[520px] mb-8">
              With over three decades of experience shaping the sonic identity of Dubai&apos;s most
              exclusive gatherings, Just Lance has become the definitive name in luxury entertainment
              across the Middle East. His sets are not performances — they are carefully orchestrated
              journeys, each one bespoke to the room, the crowd, and the moment.
            </p>

            <div className="w-20 h-px bg-gold/60 mb-8" />

            <div className="flex gap-12">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <span className="font-display font-light text-4xl text-gold block">
                    {stat.value}
                  </span>
                  <span className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-text-dim mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group aspect-[3/4] overflow-hidden">
              <div className="absolute inset-0 border border-[rgba(201,168,76,0.3)] group-hover:border-gold/60 transition-colors duration-500 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&q=80"
                alt="Just Lance DJ"
                className="w-full h-full object-cover rotate-[-1deg] scale-105 group-hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
