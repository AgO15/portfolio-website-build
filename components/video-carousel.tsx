"use client"

import { useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface VideoItem {
  id: string
  title: string
  label: string
}

const videos: VideoItem[] = [
  {
    id: "exieAhW_YOA",
    title: "Life OS — New Neumorphic Design",
    label: "New Neumorphic Design",
  },
  {
    id: "TSz5jLH9tEY",
    title: "Life OS — Original Demo 1",
    label: "Original UX (Demo 1)",
  },
  {
    id: "If2cHTHEdw0",
    title: "Life OS — Original Demo 2",
    label: "Original UX (Demo 2)",
  },
]

export function VideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % videos.length)
  }, [])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }, [])

  const getIndex = (offset: number) =>
    (activeIndex + offset + videos.length) % videos.length

  const leftIndex = getIndex(-1)
  const rightIndex = getIndex(1)

  return (
    <div className="relative w-full mb-12">
      {/* Carousel container */}
      <div className="flex items-center justify-center gap-4 md:gap-6 py-4">
        {/* Left (previous) video — small, faded */}
        <div className="hidden md:block w-[180px] lg:w-[220px] flex-shrink-0 opacity-40 scale-90 transition-all duration-500 ease-in-out">
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-md">
            <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                src={`https://www.youtube.com/embed/${videos[leftIndex].id}`}
                title={videos[leftIndex].title}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                tabIndex={-1}
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2 truncate">
            {videos[leftIndex].label}
          </p>
        </div>

        {/* Center (active) video — large, prominent */}
        <div className="w-[280px] sm:w-[320px] lg:w-[360px] flex-shrink-0 transition-all duration-500 ease-in-out">
          <div className="rounded-[2rem] overflow-hidden border-2 border-primary/30 shadow-2xl ring-1 ring-primary/10">
            <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videos[activeIndex].id}`}
                title={videos[activeIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-sm font-medium text-foreground text-center mt-3">
            {videos[activeIndex].label}
          </p>
        </div>

        {/* Right (next) video — small, faded */}
        <div className="hidden md:block w-[180px] lg:w-[220px] flex-shrink-0 opacity-40 scale-90 transition-all duration-500 ease-in-out">
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-md">
            <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                src={`https://www.youtube.com/embed/${videos[rightIndex].id}`}
                title={videos[rightIndex].title}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                tabIndex={-1}
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2 truncate">
            {videos[rightIndex].label}
          </p>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Previous video"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Next video"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

    </div>
  )
}
