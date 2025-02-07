"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const SLIDE_INTERVAL = 15000 // 15 seconds
const SLIDES = [
  {
    image: "/pray.jpg",
    title: "Nurturing Faith",
    description: "Developing strong spiritual foundations through Christ-centered education in Kenya",
  },
  {
    image: "/man-reading.avif",
    title: "Building Leaders",
    description: "Empowering the next generation of Christian leaders to make a positive impact",
  },
  {
    image: "/holding-hands.jpg",
    title: "Serving Community",
    description: "Making a lasting difference through compassionate service and mission work",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
  }, [])

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(nextSlide, SLIDE_INTERVAL)
    return () => clearInterval(interval)
  }, [autoplay, nextSlide])

  return (
    <section className="relative min-h-[600px] w-full md:min-h-[700px] bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Content Section (Left on large screens, overlay on small screens) */}
        <div className="relative z-10 w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center md:bg-gray-100 md:m-4 md:rounded-lg">
          <div className="max-w-xl mx-auto md:mx-0">
            {/* Static Content */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">Godly Wisdom</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Growing in faith, talent, and service through Christ-centered education
            </p>

            {/* Dynamic Content */}
            <div className="space-y-6">
              <div className="transition-opacity duration-300">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{SLIDES[currentSlide].title}</h2>
                <p className="text-lg text-muted-foreground mb-8">{SLIDES[currentSlide].description}</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section (Right on large screens, background on small screens) */}
        <div className="absolute inset-0 md:static md:w-1/2 h-full">
          <div
            className="absolute inset-0 transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {SLIDES.map((slide, index) => (
              <div key={index} className="relative w-full h-full min-w-full">
                {/* Gradient Overlay for small screens */}
                <div className="absolute inset-0 bg-black/40 md:hidden z-10" />

                {/* Image */}
                <div className="absolute inset-0 md:relative md:h-full md:m-4">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover object-center md:rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-4">
          <button
            onClick={() => {
              previousSlide()
              setAutoplay(false)
            }}
            className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-900" />
          </button>
          <button
            onClick={() => {
              nextSlide()
              setAutoplay(false)
            }}
            className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-900" />
          </button>
        </div>
      </div>
    </section>
  )
}