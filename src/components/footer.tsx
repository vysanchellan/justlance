import { Camera, Headphones, Mic } from "lucide-react"
import { SOCIAL, NAV_ITEMS } from "@/lib/config"

const socialLinks = [
  { icon: Camera, href: SOCIAL.instagram, label: "Instagram" },
  { icon: Headphones, href: SOCIAL.soundcloud, label: "SoundCloud" },
  { icon: Mic, href: SOCIAL.mixcloud, label: "Mixcloud" },
]

const scrollToSection = (href: string) => {
  if (typeof document === "undefined") return
  const id = href.replace("#", "")
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function Footer() {
  return (
    <footer className="py-14 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        <span className="font-display text-2xl tracking-[0.15em] text-text-primary/80">
          JUST LANCE
        </span>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-text-dim hover:text-violet transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-violet hover:scale-110 transition-all"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-border" />

        <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
          <p className="font-body text-[10px] text-text-dim tracking-wider">
            © 2025 Just Lance. All rights reserved.
          </p>
          <span className="hidden sm:inline text-text-dim">·</span>
          <button
            onClick={() => scrollToSection("#home")}
            className="font-body text-[10px] text-text-dim tracking-wider hover:text-violet transition-colors"
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  )
}
