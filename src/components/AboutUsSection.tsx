"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Book, Users, Heart, ChevronDown, ChevronUp } from "lucide-react"

const values = [
  {
    icon: Book,
    title: "Christ-Centered Education",
    description: "We integrate faith and learning, nurturing both spiritual and academic growth.",
  },
  {
    icon: Users,
    title: "Community Leadership",
    description: "We empower students to become servant leaders in their communities and beyond.",
  },
  {
    icon: Heart,
    title: "Compassionate Service",
    description: "We instill a heart for service, encouraging students to make a positive impact in the world.",
  },
]

export default function AboutUsSection() {
  const [expandedValue, setExpandedValue] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedValue(expandedValue === index ? null : index)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">About Godly Wisdom</h2>

        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/man-reading.avif"
              alt="Students engaged in learning"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6">
              At Godly Wisdom, we are dedicated to nurturing faith, developing talent, and inspiring service through
              Christ-centered education. Our goal is to empower the next generation of leaders in Kenya with a strong
              spiritual foundation and excellent academic skills.
            </p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-xl font-medium text-primary"> “Transforming lives through faith and education”</p>
            </motion.div>
          </div>
        </div>

        <h3 className="text-3xl font-semibold text-center mb-8">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="p-6">
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600 mb-4">
                  {expandedValue === index ? value.description : `${value.description.slice(0, 70)}...`}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-primary flex items-center focus:outline-none"
                >
                  {expandedValue === index ? (
                    <>
                      Read less <ChevronUp className="ml-1 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Read more <ChevronDown className="ml-1 w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Join Us in Our Mission</h3>
          <p className="text-lg text-gray-700 mb-6">
            Together, we can make a lasting impact on the lives of students and communities across Kenya.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-primary/90 transition duration-300"
          >
            Get Involved
          </motion.button>
        </div>
      </div>
    </section>
  )
}

