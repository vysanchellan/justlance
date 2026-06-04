"use client"

import { useState, useMemo } from "react"
import { Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

interface MockPlayerProps {
  id: string
  title: string
  subtitle: string
  duration: string
  genre: string
}

export function MockPlayer({ id, title, subtitle, duration, genre }: MockPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const bars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => {
        const seed = (i * 16807 + 1) % 2147483647
        const pseudoRandom = (seed % 1000) / 1000
        return {
          height: 8 + pseudoRandom * 32,
          key: i,
        }
      }),
    []
  )

  const handlePlay = () => {
    if (isPlaying) {
      setIsPlaying(false)
      return
    }
    setIsPlaying(true)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 35) {
          clearInterval(interval)
          setIsPlaying(false)
          return 35
        }
        return prev + 0.5
      })
    }, 150)
  }

  return (
    <div className="bg-[rgba(17,17,17,0.9)] border border-border rounded-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[30%] aspect-square md:aspect-auto relative flex-shrink-0">
          <div
            className="w-full h-full min-h-[160px]"
            style={{
              background:
                "linear-gradient(135deg, #0f0b1a 0%, #1a1030 50%, #0f0b1a 100%)",
            }}
          />
          <span className="absolute top-4 left-4 font-display font-light text-5xl text-text-dim/30">
            {id}
          </span>
        </div>

        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-body text-base font-semibold text-text-primary">
                  {title}
                </h3>
                <p className="font-body font-light text-xs text-text-secondary mt-1">
                  {subtitle}
                </p>
              </div>
              <span className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-text-dim flex-shrink-0">
                {duration}
              </span>
            </div>
            <span className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-violet/60">
              {genre}
            </span>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-1 h-10 items-end">
              {bars.map((bar) => (
                <div
                  key={bar.key}
                  className={cn(
                    "w-[3px] transition-all duration-300",
                    bar.key / 80 < progress / 100
                      ? "bg-violet/80"
                      : "bg-text-dim/20"
                  )}
                  style={{
                    height: `${bar.height}px`,
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handlePlay}
                className="w-[52px] h-[52px] rounded-full border border-[rgba(155,89,245,0.4)] flex items-center justify-center text-violet hover:bg-[rgba(155,89,245,0.1)] hover:border-violet transition-all flex-shrink-0"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
              </button>

              <div className="flex-1 h-1 bg-[#222] rounded-full overflow-hidden">
                <div
                  className="h-full bg-violet/60 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Production: replace with actual SoundCloud oEmbed iframe */}
    </div>
  )
}
