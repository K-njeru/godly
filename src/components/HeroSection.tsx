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
    <section className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Mobile Background Images */}
      <div className="md:hidden absolute inset-0">
        <div
          className="absolute inset-0 transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {SLIDES.map((slide, index) => (
            <div key={index} className="relative w-full h-full min-w-full">
              <div className="absolute inset-0 bg-background/40 z-10" />
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex md:flex-row min-h-screen">
        {/* Content Section */}
        <div className="relative z-10 w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center md:bg-background">
          <div className="max-w-xl mx-auto md:ml-auto md:mr-0 md:pr-8">
            {/* Static Content */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Godly Wisdom</h1>
            <p className="text-lg md:text-xl text-foreground/90 md:text-muted-foreground mb-12">
              Growing in faith, talent, and service through Christ-centered education
            </p>

            {/* Dynamic Content */}
            <div className="space-y-6">
              <div className="transition-opacity duration-300">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground md:text-foreground mb-4">
                  {SLIDES[currentSlide].title}
                </h2>
                <p className="text-lg text-white/90 md:text-muted-foreground mb-8">
                  {SLIDES[currentSlide].description}
                </p>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 md:bg-primary md:text-white md:hover:bg-primary/90"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Images Section */}
        <div className="hidden md:block relative w-1/2">
          <div
            className="absolute inset-0 transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {SLIDES.map((slide, index) => (
              <div key={index} className="relative w-full h-full min-w-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4">
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

