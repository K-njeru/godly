"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const partnerTypes = [
  {
    number: "1",
    title: "Financial Partners",
    description:
      "Support our mission financially, enabling us to provide quality Christian education and expand our reach across Kenya.",
    color: "from-sky-400 to-sky-500 dark:from-sky-500 dark:to-sky-600",
    hover: "hover:from-sky-500 hover:to-sky-600 dark:hover:from-sky-400 dark:hover:to-sky-500",
  },
  {
    number: "2",
    title: "Institutional Partners",
    description:
      "Partner with us to cultivate Godly wisdom, empowering us to inspire, educate, and transform lives through faith-driven knowledge exchange.",
    color: "from-orange-400 to-orange-500 dark:from-orange-500 dark:to-orange-600",
    hover: "hover:from-orange-500 hover:to-orange-600 dark:hover:from-orange-400 dark:hover:to-orange-500",
  },
  {
    number: "3",
    title: "B/s Incubation Hub Partners",
    description:
      "Partner with us to nurture entrepreneurial talent and support sustainable business development God's way.",
    color: "from-amber-400 to-amber-500 dark:from-amber-500 dark:to-amber-600",
    hover: "hover:from-amber-500 hover:to-amber-600 dark:hover:from-amber-400 dark:hover:to-amber-500",
  },
  {
    number: "4",
    title: "Volunteer Partners",
    description:
      "Contribute your time and skills to our various programs, from teaching to mentoring and community outreach.",
    color: "from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700",
    hover: "hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600",
  },
  {
    number: "5",
    title: "Prayer Partners",
    description:
      "Join our prayer network to support our mission spiritually, participating in regular prayer meetings and spiritual guidance.",
    color: "from-gray-100 to-white dark:from-gray-200 dark:to-gray-100",
    hover: "hover:from-white hover:to-gray-100 dark:hover:from-gray-100 dark:hover:to-white",
    textColor: "text-gray-900", // Special text color for light background
  },
  {
    number: "6",
    title: "Mission Partners",
    description:
      "Collaborate with us in spreading Christ's message through education and community development initiatives.",
    color: "from-stone-400 to-stone-500 dark:from-stone-500 dark:to-stone-600",
    hover: "hover:from-stone-500 hover:to-stone-600 dark:hover:from-stone-400 dark:hover:to-stone-500",
  },
]

export default function PartnersSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-white dark:bg-[hsl(220_56%_13%)] transition-colors" id="Partners">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Partners</h2>
          <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl">
            Join us in our mission to transform lives through Christ-centered education. Choose how you&apos;d like to
            partner with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="relative aspect-square md:aspect-auto md:h-full rounded-lg overflow-hidden">
            <Image
              alt="Students engaged in learning"
              className="object-cover"
              fill
              src="/partners.jpg?auto=format&fit=crop&q=80"
              priority
            />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      shadow-lg min-h-[200px] md:h-[330px] flex flex-col justify-between
                    `}
                  >
                    {/* Large Number */}
                    <span className="absolute -top-6 -left-5 text-[120px] font-bold opacity-20 text-blue-700">
                      {type.number}
                    </span>

                    <div className="relative z-10">
                      <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${type.textColor || "text-white"}`}>
                        {type.title}
                      </h3>
                      <p className={`text-lg mb-6 ${type.textColor ? "text-gray-700" : "text-white/90"}`}>
                        {type.description}
                      </p>
                    </div>

                    <Link
                      href={`/partners#${type.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`inline-flex items-center ${type.textColor ? "text-gray-900" : "text-white"} hover:underline mt-auto`}
                    >
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>

                    {/* Decorative Corner */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}