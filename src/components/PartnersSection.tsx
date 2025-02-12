"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const partnerTypes = [
  {
    number: "1",
    title: "Prayer Partners",
    description:
      "Join our prayer network to support our mission spiritually, participating in regular prayer meetings and spiritual guidance.",
    color: "from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700",
    hover: "hover:from-emerald-600 hover:to-emerald-700 dark:hover:from-emerald-500 dark:hover:to-emerald-600",
  },
  {
    number: "2",
    title: "Financial Partners",
    description:
      "Support our mission financially, enabling us to provide quality Christian education and expand our reach across Kenya.",
    color: "from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700",
    hover: "hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-500 dark:hover:to-blue-600",
  },
  {
    number: "3",
    title: "Volunteer Partners",
    description:
      "Contribute your time and skills to our various programs, from teaching to mentoring and community outreach.",
    color: "from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700",
    hover: "hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600",
  },
  {
    number: "4",
    title: "Mission Partners",
    description:
      "Collaborate with us in spreading Christ's message through education and community development initiatives.",
    color: "from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700",
    hover: "hover:from-indigo-600 hover:to-indigo-700 dark:hover:from-indigo-500 dark:hover:to-indigo-600",
  },
]

export default function PartnersSection() {
  return (
<section className="w-full py-12 md:py-24 bg-white dark:bg-[hsl(220_56%_13%)] transition-colors" id="Partners">
<div className="container px-4 md:px-6">
    <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Partners</h2>
        <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl">
        Join us in our mission to transform lives through Christ-centered education. Choose how youd like to
        partner with us.
        </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
    <div className="relative aspect-square md:aspect-auto md:h-full rounded-lg overflow-hidden">
            <Image
                alt="Students engaged in learning"
                className="object-cover"
                fill
                src="/bible1.jpg?height=800&width=600"
                priority
            />
        </div>
        <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className={`
                  relative overflow-hidden rounded-lg p-8 
                  bg-gradient-to-br ${type.color} ${type.hover}
                  transition-all duration-300 transform group-hover:scale-[1.02]
                  shadow-lg
                `}
              >
                {/* Large Number */}
                <span className="absolute -top-6 -left-5 text-[120px] font-bold opacity-20 text-white">
                  {type.number}
                </span>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-white/90 text-lg mb-6">{type.description}</p>
                  <Link
                    href={`/partners#${type.title.toLowerCase().replace(" ", "-")}`}
                    className="inline-flex items-center text-white hover:underline"
                  >
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>

                {/* Decorative Corner */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
              </div>
            </motion.div>
          ))}
            </div>
            <div className="flex justify-center">
            <Link
              href="/partners#become-partner"
              className="
                inline-flex items-center justify-center gap-2 
                px-8 py-4 text-lg font-semibold
                bg-transparent text-foreground rounded-full
                shadow-lg shadow-foreground/50
                transform transition-all duration-300
                hover:shadow-xl hover:shadow-foreground/60 hover:-translate-y-1 hover:bg-blue-500
              "
            >
              Become a Partner
              <ArrowRight className="h-5 w-5" />
            </Link>
            </div>
        </div>
    </div>
</div>
</section>
  )
}

