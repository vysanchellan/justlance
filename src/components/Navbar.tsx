"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { NAV_ITEMS } from "@/lib/config"
import { cn } from "@/lib/utils"

const scrollToSection = (href: string) => {
  const id = href.replace("#", "")
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-400",
          scrolled
            ? "bg-[rgba(8,8,8,0.75)] backdrop-blur-[20px] border-b border-[rgba(201,168,76,0.15)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <button
            onClick={() => scrollToSection("#home")}
            className="font-display text-2xl tracking-[0.15em] text-text-primary hover:text-gold transition-colors"
          >
            JUST LANCE
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="group relative font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("#booking")}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.1)] text-gold font-body text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[rgba(201,168,76,0.2)] hover:border-gold transition-all duration-300"
          >
            Book Now
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-text-secondary hover:text-gold transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[rgba(8,8,8,0.97)] backdrop-blur-[40px] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-text-secondary hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => {
                    setMobileOpen(false)
                    setTimeout(() => scrollToSection(item.href), 200)
                  }}
                  className="font-body text-2xl font-light tracking-[0.15em] uppercase text-text-secondary hover:text-gold transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
