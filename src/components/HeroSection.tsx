"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, BookOpen, HandCoins, Users, PersonStanding } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const PROGRAMS = [
  {
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070",
    title: "Biblical Teaching",
    description: "Discipling believers through Christ-centered teachings, transforming them from new Christians to mature fruit-bearing disciples in God's Kingdom.",
    cta: "Donate",
    color: "from-purple-600 to-purple-800",
    textColor: "text-purple-600",
    icon: BookOpen,
    lightColor: "bg-purple-100",
    overlayColor: "bg-purple-600/20"
  },
  {
    image: "/empower.jpg",
    title: "Economic Empowerment",
    description: "Developing God-given talents and resources within our community to create profitable stewards in God's Kingdom.",
    cta: "Donate",
    color: "from-emerald-600 to-emerald-800",
    textColor: "text-emerald-600",
    icon: HandCoins,
    lightColor: "bg-emerald-100",
    overlayColor: "bg-emerald-600/20"
  },
  {
    image: "/leader.jpg",
    title: "Equipping Ministry Leaders",
    description: "Supporting church workers and pastoral teams in organizational development, administration, and governance.",
    cta: "Donate",
    color: "from-blue-600 to-blue-800",
    textColor: "text-blue-600",
    icon: Users,
    lightColor: "bg-blue-100",
    overlayColor: "bg-blue-600/20"
  },
  {
    image: "/child.jpg",
    title: "Discipleship",
    description: "Partnering with Christ-centered organizations to fulfill the Great Commission through training and equipping disciples.",
    cta: "",
    color: "from-orange-600 to-orange-800",
    textColor: "text-orange-600",
    icon: PersonStanding,
    lightColor: "bg-orange-100",
    overlayColor: "bg-orange-600/20"
  }
]

const SLIDE_INTERVAL = 15000 // 15 seconds

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % PROGRAMS.length)
  }, [])

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + PROGRAMS.length) % PROGRAMS.length)
  }, [])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(nextSlide, SLIDE_INTERVAL)
    return () => clearInterval(interval)
  }, [autoplay, nextSlide])

  return (
    <main>
      <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden" id="Hero">
        {/* Dynamic Content */}
        <div className="w-full flex flex-col items-center justify-center text-center pt-36 pb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Godly Wisdom Ministry
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Growing in faith, talent, and service through Christ-centered education
          </p>
        </div>

        {/* Programs Section */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center h-[50vh]">
          {/* Large Screens - All Programs in a Row */}
          <div className="hidden md:flex flex-row items-center justify-center gap-12 w-full px-12">
            {PROGRAMS.map((program, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <Link href="#Programs" className={`text-2xl font-bold ${program.textColor} mb-4 hover:underline`}>
                  {program.title}
                </Link>
                <div className="w-64 h-64 relative">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Small Screens - Slides */}
          <div className="md:hidden w-full h-full">
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 transition-transform duration-500 ease-in-out flex"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {PROGRAMS.map((program, index) => (
                  <div key={index} className="relative w-full h-full min-w-full flex flex-col items-center justify-start text-center">
                    <Link href="#Programs" className={`text-2xl font-bold ${program.textColor} mb-4 hover:underline`}>
                      {program.title}
                    </Link>
                    <div className="w-64 h-64 relative">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-8 left-8 flex items-center gap-4">
              <button
                onClick={() => {
                  previousSlide()
                  setAutoplay(false)
                }}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm border text-white border-current hover:bg-blue-600 hover:border-transparent transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => {
                  nextSlide()
                  setAutoplay(false)
                }}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm border text-white border-current hover:bg-blue-600 hover:border-transparent transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}