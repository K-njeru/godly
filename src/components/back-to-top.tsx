'use client'

import { ChevronsUp } from 'lucide-react'
import { useEffect, useState } from "react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed bottom-4 right-4 rounded-full bg-blue-500 dark:bg-blue-900 text-white p-3 shadow-lg transition-opacity z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-900 focus:ring-offset-2`}
      aria-label="Back to top"
    >
      <ChevronsUp className="h-6 w-6" />
    </button>
  )
}
