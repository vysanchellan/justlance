"use client"

import { motion } from "framer-motion"
import { SectionLabel } from "@/components/ui/section-label"
import { MIXES } from "@/lib/config"

export function Mixes() {
  return (
    <section id="booking" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <SectionLabel>LISTEN UP!</SectionLabel>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MIXES.map((mix, index) => (
            <motion.div
              key={mix.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-surface border border-border rounded-lg overflow-hidden"
            >
              <div className="p-4 border-b border-border">
                <p className="font-body text-sm text-foreground/80 truncate">{mix.title}</p>
                <p className="font-mono text-xs text-text-muted mt-1">{mix.duration}</p>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={mix.embedUrl}
                  title={mix.title}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
