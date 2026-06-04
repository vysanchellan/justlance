"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ParticleTextEffect } from "@/components/ui/particle-text-effect"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      setTimeout(onComplete, 1000)
    }, 7500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] w-screen h-screen bg-black overflow-hidden"
    >
      <ParticleTextEffect words={["JUST LANCE", "DJ", "DUBAI", "NIGHTLIFE"]} />
    </motion.div>
  )
}
