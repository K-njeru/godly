"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Globe, Zap, HeartHandshake, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";


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
                <Footer />
        </main>
    );
}