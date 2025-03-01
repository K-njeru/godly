"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Clock, ArrowRight, DollarSign} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Navbar from "@/components/Navbar"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import { compassResources, compassCourses } from "@/data/compassResources";

function CompassPageContent() {
    const [activeTab, setActiveTab] = useState("courses")

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-background transition-colors">
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/leader.jpg?height=1080&width=1920"
                            alt="Compass Financial Ministry"
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Compass Financial Ministry</h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
                            Equipping God&apos;s people worldwide to faithfully apply His financial principles
                        </p>
                    </motion.div>

                    {/* Breadcrumb Navigation */}
                    <div className="absolute bottom-4 left-4 z-10 text-white text-md flex items-center">
                        <Link href="/" className="cursor-pointer text-white hover:text-gray-500">
                            Home
                        </Link>
                        <ArrowRight className="mx-2 w-4 h-4" />
                        <Link href="/compass" className="cursor-pointer text-blue-400 hover:text-blue-800">
                            Compass
                        </Link>
                    </div>
                </section>

                {/* About Compass Section */}
                <section className="py-12 bg-white dark:bg-[hsl(220_56%_17%)]">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                    About Compass Financial Ministry
                                </h2>

                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Since 1985, Compass Financial Ministry has been teaching people of all ages how to handle money God&apos;s
                                    way. We believe that true financial freedom comes from understanding and applying biblical principles
                                    to every financial decision.
                                </p>

                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    The vision is to see everyone, everywhere, faithfully living by God&apos;s financial principles in every
                                    area of their lives.
                                </p>


                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="relative rounded-xl overflow-hidden shadow-xl h-80"> {/* Fixed height */}
                                    <Image
                                        src="/Dayton_Howard.webp?height=300&width=600"
                                        alt="Compass Financial Ministry"
                                        width={600}
                                        height={300}
                                        className="object-cover w-full h-full" // Ensure the image covers the container
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                        <p className="text-white font-medium italic">
                                            &quot;God owns everything. We&apos;re just managers or stewards of what He has entrusted to us.&quot;
                                        </p>
                                        <p className="text-gray-300 text-sm mt-2">— Howard Dayton, Founder</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Offerings Section */}
                <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-[hsl(220_56%_15%)] transition-colors">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        {/* Page Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">Compass Offerings</h1>
                            <p className="text-gray-600 dark:text-gray-400 md:text-xl max-w-2xl mx-auto">
                                Explore their range of biblically-based financial courses, resources, and tools.
                            </p>
                        </div>

                        {/* Tab Selection */}
                        <div className="flex justify-center mb-12">
                            <div className="inline-flex rounded-md shadow-sm" role="group">
                                <button
                                    onClick={() => setActiveTab("courses")}
                                    className={`px-6 py-3 text-sm font-medium rounded-l-lg ${activeTab === "courses"
                                        ? "bg-blue-600 text-white"
                                        : "bg-white dark:bg-[hsl(220_56%_17%)] text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[hsl(220_56%_19%)]"
                                        }`}
                                >
                                    Courses & Workshops
                                </button>
                                <button
                                    onClick={() => setActiveTab("resources")}
                                    className={`px-6 py-3 text-sm font-medium rounded-r-lg ${activeTab === "resources"
                                        ? "bg-blue-600 text-white"
                                        : "bg-white dark:bg-[hsl(220_56%_17%)] text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[hsl(220_56%_19%)]"
                                        }`}
                                >
                                    Books & Resources
                                </button>
                            </div>
                        </div>

                        {/* Courses Tab Content */}
                        {activeTab === "courses" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {compassCourses.map((course, index) => (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="bg-white dark:bg-[hsl(220_56%_17%)] rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={course.image || "/placeholder.svg"}
                                                alt={course.title}
                                                width={350}
                                                height={200}
                                                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{course.title}</h2>
                                            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{course.description}</p>

                                            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                                                <Clock className="w-4 h-4" />
                                                <span>{course.duration}</span>
                                                <span className="mx-2">•</span>
                                                <span className="capitalize">{course.mode.join(" / ")}</span>
                                                <span className="mx-2">•</span>
                                                <div className="flex items-center">
                                                    <DollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                    <span className="font-semibold text-blue-600 dark:text-blue-400">{course.cost}</span>
                                                </div>
                                            </div>

                                            <Link
                                                href={`/compass/courses/${course.id}`} // Updated href to point to the dynamic route
                                                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                View Details
                                                <ArrowUpRight className="w-4 h-4 ml-1" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Resources Tab Content */}
                        {activeTab === "resources" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {compassResources.map((resource, index) => (
                                    <motion.div
                                        key={resource.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="bg-white dark:bg-[hsl(220_56%_17%)] rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden"
                                    >
                                        <div className="flex justify-center p-6 bg-gray-50 dark:bg-gray-800/50">
                                            <Image
                                                src={resource.image || "/placeholder.svg"}
                                                alt={resource.title}
                                                width={150}
                                                height={200}
                                                className="object-contain h-48"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <div className="inline-block px-2 py-1 mb-2 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                                                {resource.type}
                                            </div>

                                            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{resource.title}</h2>

                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">By {resource.author}</p>

                                            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                                                {resource.description}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <DollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                    <span className="font-semibold text-blue-600 dark:text-blue-400">{resource.cost}</span>
                                                </div>

                                                <Link
                                                    href={`/compass/resources/${resource.id}`} // Updated href to point to the dynamic route
                                                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                                                >
                                                    Details
                                                    <ArrowUpRight className="w-4 h-4 ml-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-blue-600 dark:bg-blue-800">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Financial Life?</h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Join thousands of others who have discovered the freedom and peace that comes from handling money God&apos;s
                                way.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default function CompassPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CompassPageContent />
        </Suspense>
    )
}

