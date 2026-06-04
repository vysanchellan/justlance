export const BRAND = {
  bg: "#0A0A0A",
  surface: "#111111",
  accent: {
    cyan: "#00D4FF",
    magenta: "#FF2D87",
  },
  text: {
    primary: "#F5F5F5",
    muted: "#666666",
  },
  border: "rgba(255,255,255,0.08)",
} as const

export const SOCIAL = {
  instagram: "https://instagram.com/justlance",
  soundcloud: "https://soundcloud.com/justlance",
  mixcloud: "https://mixcloud.com/justlance",
} as const

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" },
] as const

export const MIXES = [
  {
    title: "@HOME | PRIVATEAFFAIR | Mixed by Just Lance",
    duration: "2:03:25",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/placeholder1&color=%2300D4FF&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  },
  {
    title: "Deep House Session | Mixed by Just Lance",
    duration: "1:45:00",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/placeholder2&color=%2300D4FF&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  },
] as const
