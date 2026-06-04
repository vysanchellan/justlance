"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, Headphones, Mic, X } from "lucide-react"
import { SOCIAL, NAV_ITEMS } from "@/lib/config"
import { cn } from "@/lib/utils"

const socialLinks = [
  { icon: Camera, href: SOCIAL.instagram, label: "Instagram" },
  { icon: Headphones, href: SOCIAL.soundcloud, label: "SoundCloud" },
  { icon: Mic, href: SOCIAL.mixcloud, label: "Mixcloud" },
]

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
}

const menuItemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
}

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:scale-110 transition-transform"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="font-display text-2xl tracking-widest text-white">JUST LANCE</span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 text-white hover:text-accent-cyan transition-colors"
            aria-label="Menu"
          >
            <span className="font-display text-2xl">{isOpen ? <X size={28} /> : "+"}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center"
          >
            <motion.div className="absolute top-8 left-1/2 -translate-x-1/2">
              <span className="font-display text-2xl tracking-widest text-white">JUST LANCE</span>
            </motion.div>

            <nav className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item.label}
                  variants={menuItemVariants}
                  href={item.href}
                  className="group relative font-display text-7xl md:text-8xl text-white hover:text-accent-cyan transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-accent-cyan font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    —
                  </span>
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-cyan group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-accent-cyan transition-colors"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
