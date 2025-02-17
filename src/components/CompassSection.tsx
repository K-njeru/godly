"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Handshake, Globe, ArrowUpRight,  Star, Heart } from 'lucide-react';

const achievements = [
  {
    number: "5+",
    label: "Years of Partnership",
    description: "Working together to transform lives through biblical financial principles"
  },
  {
    number: "1000+",
    label: "Lives Impacted",
    description: "Students equipped with godly financial wisdom and practical skills"
  },
  {
    number: "100%",
    label: "Alignment in Values",
    description: "Shared commitment to Christ-centered financial education"
  }
];

const CompassSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[hsl(220_56%_13%)] dark:to-[hsl(220_56%_15%)] py-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 mb-6">
              <Handshake className="w-4 h-4" />
              <span className="text-sm font-medium">Proud Affiliate Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Together with{' '}
              <span className="text-blue-600 dark:text-blue-400">Compass</span>
              {' '}Financial Ministry
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We&apos;re honored to partner with Compass Financial Ministry in their mission to equip 
              God&apos;s people with biblical financial wisdom.
            </p>
          </motion.div>

          {/* Partnership Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white dark:bg-[hsl(220_56%_17%)] rounded-3xl p-8 md:p-12 mb-16 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call-to-Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-3xl p-8 md:p-12 overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Experience Financial Freedom
                </h3>
                <p className="text-white/90 max-w-md">
                  Join thousands of believers who have transformed their financial future through 
                  Compass Financial Ministry&apos;s proven biblical principles.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://compassfinancialministry.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Visit Compass
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://compassfinancialministry.org/courses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-400 transition-colors"
                >
                  Explore Courses
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Partnership Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 mb-8">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">United in Purpose</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-40 h-40 group"
              >
                <Image
                  src="/c-logo.png"
                  alt="Compass Financial Ministry Logo"
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </motion.div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full" />
                <Star className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full" />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-40 h-40 group"
              >
                <Globe className="w-full h-full text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-105" />
                <span className="block text-lg font-medium text-gray-600 dark:text-gray-400 mt-4">
                  Godly Wisdom Ministry
                </span>
              </motion.div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-8">
              Together, we&apos;re committed to transforming lives through biblical financial principles, 
              empowering believers to become faithful stewards of God&apos;s resources.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompassSection;