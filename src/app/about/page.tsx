"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Dribbble as Bible, Lightbulb,  Globe } from "lucide-react";
import Navbar from "@/components/Navbar";

const stats = [
  { number: "10+", label: "Years of Service" },
  { number: "1000+", label: "Students Mentored" },
  { number: "50+", label: "Ministry Programs" },
  { number: "20+", label: "Global Partnerships" },
];

const pillars = [
  {
    icon: Bible,
    title: "Biblical Teaching",
    description: "Grounded in scripture, our teachings provide a solid foundation for spiritual growth and understanding."
  },
  {
    icon: Lightbulb,
    title: "Innovative Learning",
    description: "Modern approaches to biblical education that make ancient wisdom relevant for today's world."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Extending our reach globally through digital platforms and international partnerships."
  },
];

export default function AboutPage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 dark:bg-[hsl(220_56%_13%)] transition-colors">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/transform.jpg?auto=format&fit=crop&q=80"
            alt="Church interior"
            fill
            className="object-cover brightness-[0.7] dark:brightness-[0.4]"
            priority
          />
        </div>
        <motion.div 
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transforming Lives Through Faith</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
            Empowering individuals with spiritual wisdom and practical knowledge for a purpose-driven life
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-[hsl(220_56%_15%)] transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-4xl font-bold text-blue-700 dark:text-blue-400">{stat.number}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50 dark:bg-[hsl(220_56%_13%)] transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At Godly Wisdom, we are committed to nurturing spiritual growth while fostering academic excellence. Our mission is to equip individuals with both biblical knowledge and practical wisdom, preparing them to make a positive impact in their communities and beyond.
              </p>
              <div className="space-y-4">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <pillar.icon className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{pillar.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{pillar.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-xl overflow-hidden"
            >
              <Image
                src="/crusade.jpg?auto=format&fit=crop&q=80"
                alt="Students studying together"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-700 dark:bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community of Faith</h2>
            <p className="text-xl mb-8">
              Take the first step towards a transformative journey of faith, learning, and growth.
            </p>
            <button className="px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}