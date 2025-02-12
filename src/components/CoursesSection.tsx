"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    title: "Biblical Studies",
    description: "Deep dive into scripture interpretation and theological understanding",
  },
  {
    title: "Christian Leadership",
    description: "Develop servant leadership skills grounded in biblical principles",
  },
  {
    title: "Mission & Outreach",
    description: "Learn effective evangelism and community service approaches",
  },
]

const spiritualBenefits = [
  {
    percentage: "95%",
    benefit: "Report stronger faith foundation",
  },
  {
    percentage: "87%",
    benefit: "Experience spiritual growth and maturity",
  },
  {
    percentage: "82%",
    benefit: "Develop deeper prayer life",
  },
]

const practicalBenefits = [
  {
    percentage: "91%",
    benefit: "Apply biblical principles in daily life",
  },
  {
    percentage: "85%",
    benefit: "Improve leadership capabilities",
  },
  {
    percentage: "78%",
    benefit: "Engage more effectively in ministry",
  },
]

export default function CoursesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-[hsl(220_56%_15%)] transition-colors">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary relative inline-block mx-auto">
            Our Courses
            {/* Decorative Underline */}
            <svg
              className="absolute -bottom-4 left-0 w-full h-4 text-blue-500 dark:text-blue-400"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8.5C20 3.5 40 11.5 60 8.5C80 5.5 100 3.5 119 8.5C140 11.5 160 3.5 180 8.5C200 11.5 220 5.5 199 8.5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 md:text-xl max-w-2xl mx-auto">
            Transform your spiritual journey with our comprehensive Christian education programs.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[hsl(220_56%_17%)] p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{course.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{course.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Spiritual Growth Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg"
          >
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Spiritual Growth</h3>
              <ArrowUpRight className="w-6 h-6 text-blue-700 dark:text-blue-400" />
            </div>
            <div className="space-y-6">
              {spiritualBenefits.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-blue-900/10 dark:bg-blue-900/30 px-3 py-2 rounded">
                    <span className="text-xl font-bold text-blue-700 dark:text-blue-400">{item.percentage}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">{item.benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Practical Application Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg"
          >
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Practical Application</h3>
              <ArrowDownRight className="w-6 h-6 text-blue-700 dark:text-blue-400" />
            </div>
            <div className="space-y-6">
              {practicalBenefits.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-blue-900/10 dark:bg-blue-900/30 px-3 py-2 rounded">
                    <span className="text-xl font-bold text-blue-700 dark:text-blue-400">{item.percentage}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">{item.benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/courses"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Explore All Courses
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

