export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mixes", href: "#mixes" },
  { label: "Events", href: "#services" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#booking" },
] as const

export const SOCIAL = {
  instagram: "https://instagram.com/justlance",
  soundcloud: "https://soundcloud.com/justlance",
  mixcloud: "https://mixcloud.com/justlance",
} as const

export const MIXES = [
  {
    id: "01",
    title: "@HOME | PRIVATE AFFAIR",
    subtitle: "Mixed by Just Lance",
    duration: "2:03:25",
    genre: "Deep House · Melodic",
  },
  {
    id: "02",
    title: "JUST LANCE — OPEN FORMAT",
    subtitle: "Live Recording, Dubai 2024",
    duration: "2:04:01",
    genre: "Open Format · House",
  },
] as const

export const TESTIMONIALS = [
  {
    quote: "Lance doesn't just play music — he curates a world. Our guests still talk about it months later.",
    attribution: "Private Client, Dubai Marina",
  },
  {
    quote: "We've worked with DJs across five continents. None of them brought what Lance brings to a room.",
    attribution: "Event Director, Burj Al Arab",
  },
  {
    quote: "The perfect soundtrack to a perfect evening. Effortless, elegant, unforgettable.",
    attribution: "Lifestyle Brand Activation, DIFC",
  },
] as const

export const STATS = [
  { value: "30+", label: "Years Experience" },
  { value: "500+", label: "Private Events" },
  { value: "15+", label: "Countries" },
] as const
