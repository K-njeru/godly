"use client";

import { motion } from 'framer-motion';
import { Handshake, MoveUpRight } from 'lucide-react';
import Link from 'next/link';

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
        <section className="relative min-h-screen bg-gray-50/50 dark:bg-[hsl(220_56%_15%)] pt-16 pb-8 overflow-hidden" id='Compass'>

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


                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative w-full group"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-8 md:w-2/3">
                                Together, we&apos;re committed to transforming lives through biblical financial principles,
                                empowering believers to become faithful stewards of God&apos;s resources.
                            </p>
                            <Link
                                href="/compass"
                                className="w-full md:w-1/3 flex items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-md text-white font-bold hover:bg-transparent hover:text-foreground hover:border hover:border-blue-500"
                            >
                                Discover Compass <MoveUpRight className="ml-4"/>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CompassSection;