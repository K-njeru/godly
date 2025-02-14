"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, DollarSign, User } from "lucide-react";
import Link from "next/link";
import { useRef, useMemo, useState } from "react";

export const courses = [
    {
        title: "Biblical Studies",
        description: "Deep dive into scripture interpretation and theological understanding.",
        intakes: ["January", "May", "September"],
        schedule: "Mon & Wed, 6:00 PM - 8:00 PM",
        teachingMode: ["online", "physical"],
        duration: "3 months",
        moreContent: "This course covers in-depth biblical history, exegesis, and hermeneutics.",
        cost: "$499",
    },
    {
        title: "Christian Leadership",
        description: "Develop servant leadership skills grounded in biblical principles.",
        intakes: ["February", "June", "October"],
        schedule: "Tue & Thu, 7:00 PM - 9:00 PM",
        teachingMode: ["online"],
        duration: "6 months",
        moreContent: "This course covers in-depth biblical history, exegesis, and hermeneutics.",
        cost: "$599",
    },
    {
        title: "Mission & Outreach",
        description: "Learn effective evangelism and community service approaches.",
        intakes: ["March", "July", "November"],
        schedule: "Sat, 10:00 AM - 1:00 PM",
        teachingMode: ["online", "physical"],
        duration: "2 weeks",
        moreContent: "This course covers in-depth biblical history, exegesis, and hermeneutics.",
        cost: "$399",
    },
];

export default function CoursesPage() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [selectedCourse, setSelectedCourse] = useState<string>("");

    const getAvailableIntakes = (courseIntakes: string[]) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth(); // 0-11

        const monthToNumber: { [key: string]: number } = {
            January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
            July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
        };

        return courseIntakes.map(month => {
            const monthNum = monthToNumber[month];
            let year = currentYear;
            
            if (monthNum <= currentMonth) {
                year = currentYear + 1;
            }

            return `${month} ${year}`;
        }).sort((a, b) => {
            const [monthA, yearA] = a.split(' ');
            const [monthB, yearB] = b.split(' ');
            const dateA = new Date(parseInt(yearA), monthToNumber[monthA]);
            const dateB = new Date(parseInt(yearB), monthToNumber[monthB]);
            return dateA.getTime() - dateB.getTime();
        });
    };

    const openModal = (courseTitle: string) => {
        setSelectedCourse(courseTitle);
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    const closeModal = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    const availableIntakes = useMemo(() => {
        if (!selectedCourse) return [];
        const course = courses.find(c => c.title === selectedCourse);
        return course ? getAvailableIntakes(course.intakes) : [];
    }, [selectedCourse]);

    return (
        <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-[hsl(220_56%_15%)] transition-colors">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                        Explore Our Courses
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 md:text-xl max-w-2xl mx-auto mt-4">
                        Transform your spiritual journey with our comprehensive Christian education programs.
                    </p>
                </div>

                {/* Courses Listing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-[hsl(220_56%_17%)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                {course.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">{course.description}</p>

                            {/* Course Details */}
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <span className="text-gray-700 dark:text-gray-300">
                                        Intakes: {course.intakes.join(", ")}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <span className="text-gray-700 dark:text-gray-300">
                                        Duration: {course.duration}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <span className="text-gray-700 dark:text-gray-300">
                                        Schedule: {course.schedule}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <span className="text-gray-700 dark:text-gray-300">Cost: {course.cost}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <span className="text-gray-700 dark:text-gray-300 capitalize">
                                        Mode: {course.teachingMode.join(" / ")}
                                    </span>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col gap-3">
                                <Link
                                    href={`/courses/${course.title.toLowerCase().replace(/ /g, "-")}`}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
                                >
                                    <span>More Details</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                                <button
                                    onClick={() => openModal(course.title)}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white transition-colors"
                                >
                                    <span>Enroll Now</span>
                                    <User className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Enrollment Modal */}
            <dialog
                ref={dialogRef}
                className="bg-white dark:bg-[hsl(220_56%_17%)] p-8 rounded-lg shadow-lg max-w-md w-full relative"
            >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Course Enrollment</h3>
                <form className="space-y-6">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                                required
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            pattern="[0-9]{10}"
                            title="Please enter a valid 10-digit phone number"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                            required
                        />
                        <select
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                            required
                        >
                            <option value="">Select Intake</option>
                            {availableIntakes.map((intake, index) => (
                                <option key={index} value={intake}>
                                    {intake}
                                </option>
                            ))}
                        </select>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                            required
                        >
                            <option value="">Select Mode of Study</option>
                            {selectedCourse && 
                                courses
                                    .find(c => c.title === selectedCourse)
                                    ?.teachingMode.map((mode, index) => (
                                        <option key={index} value={mode} className="capitalize">
                                            {mode}
                                        </option>
                                    ))
                            }
                        </select>
                        <textarea
                            placeholder="Additional Details (Optional)"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                            rows={3}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
                    >
                        Submit Enrollment
                    </button>
                </form>
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                    ×
                </button>
            </dialog>
        </section>
    );
}