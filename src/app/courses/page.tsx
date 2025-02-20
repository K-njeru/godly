"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Book, Users, HandCoins, Clock } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import { courses } from "@/data/courses";
import { Suspense } from "react"; // Import Suspense

const programs = [
  {
    id: "biblical-teaching",
    title: "Biblical Teaching",
    icon: Book,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    description: "Comprehensive biblical education and teaching programs",
  },
  {
    id: "economic-empowerment",
    title: "Economic Empowerment",
    icon: HandCoins,
    color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    description: "Business and financial literacy training programs",
  },
  {
    id: "discipleship",
    title: "Discipleship",
    icon: Users,
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    description: "Spiritual growth and discipleship programs",
  },
];

function CoursesPageContent() {
  const searchParams = useSearchParams();
  const programFromUrl = searchParams.get("program");

  const getProgramId = (programName: string | null) => {
    if (!programName) return programs[0].id;
    const program = programs.find((p) =>
      p.title.toLowerCase() === programName.toLowerCase()
    );
    return program ? program.id : programs[0].id;
  };

  const [selectedProgram, setSelectedProgram] = useState(getProgramId(programFromUrl));

  useEffect(() => {
    setSelectedProgram(getProgramId(programFromUrl));
  }, [programFromUrl]);

  return (
    <>
      <Navbar />
      <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-[hsl(220_56%_15%)] transition-colors">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
              Our Programs & Courses
            </h1>
            <p className="text-gray-600 dark:text-gray-400 md:text-xl max-w-2xl mx-auto">
              Transform your spiritual journey with our comprehensive Christian education programs.
            </p>
          </div>

          {/* Program Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {programs.map((program) => (
              <motion.button
                key={program.id}
                onClick={() => setSelectedProgram(program.id)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  selectedProgram === program.id
                    ? "bg-white dark:bg-[hsl(220_56%_17%)] shadow-lg scale-105"
                    : "bg-gray-100 dark:bg-[hsl(220_56%_13%)] hover:bg-white dark:hover:bg-[hsl(220_56%_17%)]"
                }`}
                whileHover={{ scale: selectedProgram === program.id ? 1.05 : 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${program.color}`}>
                    <program.icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {program.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses[selectedProgram as keyof typeof courses].map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-[hsl(220_56%_17%)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {course.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                  <span className="mx-2">•</span>
                  <span className="capitalize">{course.mode.join(" / ")}</span>
                  <span className="mx-2">•</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{course.cost}</span>
                </div>

                <Link
                  href={`/courses/${course.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Details
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoursesPageContent />
    </Suspense>
  );
}