"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Camera, MapPin } from "lucide-react"

export function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    eventType: "",
    eventDate: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="booking" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-violet block mb-4">
            Work With Lance
          </span>
          <h2 className="font-display font-light text-[clamp(32px,5vw,64px)] text-text-primary">
            Book a Private Event
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body font-light text-sm text-text-secondary leading-relaxed mb-8">
              Whether you&apos;re planning an intimate gathering or a grand-scale production, Lance
              brings the same level of care and mastery to every event.
            </p>

            <div className="w-[60px] h-px bg-violet/60 mb-8" />

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <Mail size={16} className="text-violet/60 flex-shrink-0" />
                <span className="font-body text-sm text-text-secondary">bookings@justlance.me</span>
              </div>
              <div className="flex items-center gap-4">
                <Camera size={16} className="text-violet/60 flex-shrink-0" />
                <span className="font-body text-sm text-text-secondary">@justlanceoffical</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={16} className="text-violet/60 flex-shrink-0" />
                <span className="font-body text-sm text-text-secondary">Dubai, UAE · Available Worldwide</span>
              </div>
            </div>

            <p className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-text-dim mt-8">
              Response within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-[rgba(155,89,245,0.3)] bg-[rgba(155,89,245,0.05)] p-8 text-center"
              >
                <p className="font-body text-sm text-text-primary leading-relaxed">
                  Thank you. Lance will be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-[rgba(13,11,24,0.6)] border border-border rounded-sm px-4 py-3.5 text-text-primary font-body font-light text-sm placeholder:text-text-dim focus:outline-none focus:border-[rgba(155,89,245,0.5)] transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-[rgba(13,11,24,0.6)] border border-border rounded-sm px-4 py-3.5 text-text-primary font-body font-light text-sm placeholder:text-text-dim focus:outline-none focus:border-[rgba(155,89,245,0.5)] transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <select
                    name="eventType"
                    required
                    value={form.eventType}
                    onChange={handleChange}
                    className="w-full bg-[rgba(13,11,24,0.6)] border border-border rounded-sm px-4 py-3.5 text-text-primary font-body font-light text-sm placeholder:text-text-dim focus:outline-none focus:border-[rgba(155,89,245,0.5)] transition-colors appearance-none"
                  >
                    <option value="" disabled>Event Type</option>
                    <option value="private">Private Event</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="residency">Venue Residency</option>
                    <option value="other">Other</option>
                  </select>
                  <input
                    type="date"
                    name="eventDate"
                    value={form.eventDate}
                    onChange={handleChange}
                    className="w-full bg-[rgba(13,11,24,0.6)] border border-border rounded-sm px-4 py-3.5 text-text-primary font-body font-light text-sm placeholder:text-text-dim focus:outline-none focus:border-[rgba(155,89,245,0.5)] transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your event..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-[rgba(13,11,24,0.6)] border border-border rounded-sm px-4 py-3.5 text-text-primary font-body font-light text-sm placeholder:text-text-dim focus:outline-none focus:border-[rgba(155,89,245,0.5)] transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[rgba(155,89,245,0.15)] border border-violet text-violet font-body text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-[rgba(155,89,245,0.25)] transition-all duration-300"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
