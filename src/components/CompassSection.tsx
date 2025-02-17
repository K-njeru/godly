"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DollarSign, BookOpen, Users, Heart, ArrowUpRight, Sparkles } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: "Financial Freedom",
    description: "Break free from debt and build lasting wealth with biblical principles",
    color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
  },
  {
    icon: BookOpen,
    title: "Biblical Wisdom",
    description: "Learn God's perspective on money and stewardship",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a community of believers on the same financial journey",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  },
  {
    icon: Heart,
    title: "Generous Living",
    description: "Discover the joy of giving and making an eternal impact",
    color: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400",
  },
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
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Transforming Lives Through Financial Wisdom</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Your Journey to{' '}
              <span className="text-blue-600 dark:text-blue-400">Financial Freedom</span>
              {' '}Begins Here
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Join forces with Compass Financial Ministry and Godly Wisdom Ministry 
              to transform your relationship with money through biblical principles.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-white dark:bg-[hsl(220_56%_17%)] rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

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
                  Ready to Start Your Journey?
                </h3>
                <p className="text-white/90 max-w-md">
                  Explore Compass Financial Ministry&apos;s transformative courses and take the first step towards financial freedom.
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

          {/* Ministry Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Proudly Partnering Together</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="relative w-40 h-40">
                <Image
                  src="/c-logo.png"
                  alt="Compass Financial Ministry Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              </div>
              <div className="relative w-40 h-40">
              <Image
                  src="/godly-logo.png"
                  alt="Compass Financial Ministry Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompassSection;