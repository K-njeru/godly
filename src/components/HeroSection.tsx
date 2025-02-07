"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const SLIDE_INTERVAL = 15000 // 15 seconds
const SLIDES = [
  {
    image: "/public/holding-hands.jpg",
    title: "Nurturing Faith",
    description: "Developing strong spiritual foundations through Christ-centered education",
  },
  {
    image: "/public/pray.jpg",
    title: "Building Leaders",
    description: "Empowering the next generation of Christian leaders in Kenya",
  },
  {
    image: "/public/man-reading.avif",
    title: "Serving Community",
    description: "Making a lasting impact through service and mission work",
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
    <section className="relative min-h-[600px] bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50 md:via-background/80 md:to-transparent z-10" />
      </div>

      {/* Static Content - Always Visible */}
      <div className="relative z-20 container mx-auto px-4 py-12 md:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Godly Wisdom</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[40ch] mb-8">
          Growing in faith, talent, and service through Christ-centered education
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative h-full">
        <div
          className="relative h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="absolute inset-0 flex">
            {SLIDES.map((slide, index) => (
              <div key={index} className="relative min-w-full flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="relative z-20 w-full md:w-1/2 px-4 md:px-8 py-8 md:py-24">
                  <div className="max-w-xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">{slide.title}</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8">{slide.description}</p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Learn More
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[calc(100%-2rem)] mt-4 md:my-4">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover rounded-lg"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 left-4 md:left-8 z-30 flex items-center gap-4">
          <button
            onClick={() => {
              previousSlide()
              setAutoplay(false)
            }}
            className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => {
              nextSlide()
              setAutoplay(false)
            }}
            className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

