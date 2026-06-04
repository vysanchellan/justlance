import { Camera, Headphones, Mic } from "lucide-react"
import { SOCIAL } from "@/lib/config"

const socialLinks = [
  { icon: Camera, href: SOCIAL.instagram, label: "Instagram" },
  { icon: Headphones, href: SOCIAL.soundcloud, label: "SoundCloud" },
  { icon: Mic, href: SOCIAL.mixcloud, label: "Mixcloud" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <span className="font-display text-xl tracking-widest text-white/60">JUST LANCE</span>

        <div className="flex items-center gap-6">
          <a href="#contact" className="font-body text-sm text-text-muted hover:text-accent-cyan transition-colors">
            Contact
          </a>
          <span className="text-text-muted">·</span>
          <a href="#" className="font-body text-sm text-text-muted hover:text-accent-cyan transition-colors">
            Privacy Policy
          </a>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-cyan hover:scale-110 transition-all"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <p className="font-body text-xs text-text-muted">
          © 2025 Just Lance. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
