"use client"

import { Shield, GraduationCap, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const values = [
  {
    icon: Shield,
    title: "Faith-Based Foundation",
    description:
      "Our Christ-centered approach ensures spiritual growth alongside academic excellence, fostering strong moral values and character development.",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "We provide high-quality education that prepares students for success while maintaining a strong spiritual foundation.",
  },
  {
    icon: Heart,
    title: "Compassionate Service",
    description:
      "Students learn to serve others with love and empathy, making a positive impact in their communities through mission work.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description:
      "Our close-knit community of educators, students, and families creates an environment where everyone grows together in faith.",
  },
]

export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-white dark:bg-[hsl(220_56%_13%)] transition-colors">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Values</h2>
          <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl">
            At Godly Wisdom, we cultivate an environment where faith, learning, and service come together to shape
            tomorrows leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 p-6 bg-gray-50 dark:bg-[hsl(220_56%_15%)] rounded-lg border border-gray-200 dark:border-gray-800 transition-colors"
                >
                  <div className="p-2 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Learn More About Our Mission
              </Button>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-full rounded-lg overflow-hidden">
            <Image
              alt="Students engaged in learning"
              className="object-cover"
              fill
              src="/placeholder.svg?height=800&width=600"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

