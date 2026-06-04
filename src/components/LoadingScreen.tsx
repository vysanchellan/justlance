"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progressWidth, setProgressWidth] = useState(0)
  const [showLabel, setShowLabel] = useState(false)

  useEffect(() => {
    setShowLabel(true)
    const progressTimer = setTimeout(() => setProgressWidth(100), 100)
    const completeTimer = setTimeout(() => onComplete(), 7000)
    return () => {
      clearTimeout(progressTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] w-screen h-screen bg-bg flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-12"
      >
        <span className="font-display text-6xl md:text-8xl tracking-[0.15em] text-text-primary">
          JUST LANCE
        </span>

        <div className="w-48 md:w-64 h-[2px] bg-surface-2 overflow-hidden">
          <motion.div
            className="h-full bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: `${progressWidth}%` }}
            transition={{ duration: 6.5, ease: "easeInOut" }}
          />
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: showLabel ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-[10px] tracking-[0.3em] text-text-dim uppercase"
        >
          Loading Experience
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
