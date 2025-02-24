"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, BookOpen, HeartHandshake, Globe, Target, Eye, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

const stats = [
  { number: "10+", label: "Years of Service" },
  { number: "1000+", label: "Students Mentored" },
  { number: "50+", label: "Ministry Programs" },
  { number: "20+", label: "Global Partnerships" },
];

const historyTimeline = [
  {
    year: "2010",
    title: "The Beginning",
    description: "Founded with a small group of believers committed to biblical teaching and discipleship.",
    icon: <BookOpen className="w-8 h-8 text-blue-500" />,
  },
  {
    year: "2015",
    title: "Expansion",
    description: "Launched our first online platform to reach a global audience.",
    icon: <Globe className="w-8 h-8 text-blue-500" />,
  },
  {
    year: "2020",
    title: "Innovation",
    description: "Introduced innovative learning programs to make biblical education accessible to all.",
    icon: <Zap className="w-8 h-8 text-blue-500" />,
  },
  {
    year: "2023",
    title: "Global Impact",
    description: "Partnered with 20+ ministries worldwide to spread the Gospel.",
    icon: <HeartHandshake className="w-8 h-8 text-blue-500" />,
  },
];

export default function AboutPage() {
  return (
    <main className='overflow-hidden'>
      <Navbar />
      <div className="min-h-screen bg-background transition-colors">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/transform.jpg?auto=format&fit=crop&q=80"
              alt="Church interior"
              fill
              className="object-cover brightness-[0.7] dark:brightness-[0.4]"
              priority
            />
          </div>

          {/* Animated Content */}
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
          {/* Breadcrumb Navigation */}
          <div className="absolute bottom-4 left-4 z-10 text-white text-md flex items-center">
            <Link
              href="/" className="cursor-pointer text-white hover:text-gray-500">Home
            </Link>
            <ArrowRight className="mx-2 w-4 h-4" /> {/* Arrow icon */}
            <Link href="/about" className="cursor-pointer text-blue-400 hover:text-blue-800">About</Link>
          </div>
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
        <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-900 dark:to-blue-950 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Target className="w-8 h-8 text-blue-300" />
                  <div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                    <p className="text-gray-200">
                      To equip and disciple believers of Jesus Christ in their faith and knowledge of the truth that leads to godliness. (Titus 1:1)
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-[500px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/mission.jpg?auto=format&fit=crop&q=80"
                  alt="Mission"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gray-50 dark:bg-[hsl(220_56%_13%)] transition-colors">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-[500px] rounded-xl overflow-hidden order-2 md:order-1"
              >
                <Image
                  src="/vision.jpg?auto=format&fit=crop&q=80"
                  alt="Vision"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8 order-1 md:order-2"
              >
                <div className="flex items-center gap-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Eye className="w-8 h-8 text-blue-300" />
                  <div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                    <p className="text-gray-200">
                      A body of believers equipped and commended by God for Kingdom business.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-white dark:bg-[hsl(220_56%_15%)] transition-colors">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Our History
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
              >
                From humble beginnings to a global ministry impacting lives through faith and truth.
              </motion.p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {historyTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-8 bg-gray-50 dark:bg-[hsl(220_56%_13%)] rounded-xl shadow-lg text-center"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Ministry Section */}
        <section className="py-20 bg-gray-50 dark:bg-[hsl(220_56%_13%)] transition-colors">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/ministry1.jpg?auto=format&fit=crop&q=80"
                    alt="Ministry Image 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/ministry2.jpg?auto=format&fit=crop&q=80"
                    alt="Ministry Image 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden col-span-2">
                  <Image
                    src="/ministry3.jpg?auto=format&fit=crop&q=80"
                    alt="Ministry Image 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">About the Ministry</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We are dedicated to nurturing spiritual growth, fostering community, and impacting lives globally. Our ministry is built on the foundation of biblical truth and a commitment to making disciples of all nations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-700 mx-[1%] rounded-lg mb-8 py-20 dark:bg-blue-900 text-white">
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
              <Link className="px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-transparent hover:text-white hover:border hover:border-blue-500 transition-colors"
                href='/courses'>
                Start Your Journey
              </Link>
            </motion.div>
          </div>
        </section>
        {/* Cover the margin with the same background color */}
        <div className="bg-background h-8 -mt-8 mx-[1%]"></div>
      </div>
      <Footer />
    </main>
  );
}