"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export function Banner() {
    return (
        <section className="relative w-full h-[400px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/bible2.jpg?auto=format&fit=crop&q=80"
                    alt="Peaceful church interior"
                    fill
                    className="object-cover brightness-[0.85]"
                    priority
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                            Walking in Faith Together
                        </h2>
                        <p className="text-lg text-white/90 font-light">
                            &quot;For where two or three gather in my name, there am I with them.&quot;
                            <span className="block mt-2 text-sm">Matthew 18:20</span>
                        </p>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="flex items-center space-x-4">
                        <div className="h-[1px] w-12 bg-white/60" />
                        <div className="w-3 h-3 rounded-full bg-white/80" />
                        <div className="h-[1px] w-12 bg-white/60" />
                    </div>
                </div>
            </div>
        </section>
    );
}