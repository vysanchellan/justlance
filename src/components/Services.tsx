"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Private Events",
    description:
      "Intimate soirées, yacht parties, villa celebrations. Every detail tuned to the occasion.",
  },
  {
    title: "Corporate Events",
    description:
      "Product launches, brand activations, and executive entertaining that leaves an impression.",
  },
  {
    title: "Venue Residencies",
    description:
      "From Dubai's rooftop lounges to the UAE's most exclusive hotel venues, Lance holds court.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-violet block mb-4">
            What Just Lance Offers
          </span>
          <h2 className="font-display font-light text-[clamp(32px,5vw,64px)] text-text-primary">
            Crafted for Every Occasion
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-10 bg-[rgba(13,11,24,0.6)] border border-border hover:border-[rgba(155,89,245,0.25)] transition-all duration-500"
            >
              <div className="w-8 h-[2px] bg-violet mb-8" />
              <h3 className="font-body text-lg font-semibold text-text-primary mb-4">
                {service.title}
              </h3>
              <p className="font-body font-light text-sm text-text-secondary leading-relaxed mb-8">
                {service.description}
              </p>
              <button
                onClick={() => {
                  const el = document.getElementById("booking")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-violet hover:underline underline-offset-4 transition-all"
              >
                Enquire →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
