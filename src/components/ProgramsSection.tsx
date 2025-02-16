"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp, ArrowDownRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const programs = [
  {
    title: "Biblical Teaching",
    description:
      "Discipleship in the knowledge and revelation of Jesus Christ, transforming believers from spiritual infancy to maturity.",
    spiritualBenefits: [
      { percentage: "95%", benefit: "Report stronger faith foundation" },
      { percentage: "90%", benefit: "Experience deeper biblical understanding" },
    ],
    practicalBenefits: [
      { percentage: "88%", benefit: "Apply scripture in daily life" },
      { percentage: "85%", benefit: "Engage in effective Bible study" },
    ],
  },
  {
    title: "Economic Empowerment",
    description:
      "Application of knowledge and skills to make believers profitable stewards in God's Kingdom.",
    spiritualBenefits: [
      { percentage: "80%", benefit: "Grow in stewardship mindset" },
      { percentage: "75%", benefit: "Develop gratitude for God's provision" },
    ],
    practicalBenefits: [
      { percentage: "85%", benefit: "Improve financial management skills" },
      { percentage: "80%", benefit: "Start sustainable income-generating activities" },
    ],
  },
  {
    title: "Equipping Ministry Leaders",
    description:
      "Building church workers and institutions in areas of administration, governance, and ministry development.",
    spiritualBenefits: [
      { percentage: "90%", benefit: "Strengthen leadership in faith" },
      { percentage: "85%", benefit: "Deepen commitment to serving God" },
    ],
    practicalBenefits: [
      { percentage: "88%", benefit: "Improve church administration skills" },
      { percentage: "82%", benefit: "Enhance organizational development" },
    ],
  },
  {
    title: "Discipleship",
    description:
      "Training and equipping believers to make disciples in response to the Great Commission.",
    spiritualBenefits: [
      { percentage: "92%", benefit: "Grow in personal discipleship" },
      { percentage: "87%", benefit: "Develop a heart for evangelism" },
    ],
    practicalBenefits: [
      { percentage: "89%", benefit: "Lead others to Christ effectively" },
      { percentage: "84%", benefit: "Mentor new believers" },
    ],
  },
];

export default function ProgramsSection() {
  const [activeProgram, setActiveProgram] = useState<number>(0);
  const [showBenefitsMobile, setShowBenefitsMobile] = useState<number | null>(null);

  const toggleBenefits = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (showBenefitsMobile === index) {
      setShowBenefitsMobile(null);
    } else {
      setShowBenefitsMobile(index);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-[hsl(220_56%_15%)] transition-colors" id="Programs">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary relative inline-block mx-auto">
            Our Programs
          </h2>
          <p className="text-gray-600 dark:text-gray-400 md:text-xl max-w-2xl mx-auto">
          Godly Wisdom Ministry works with partners to accomplish what God has called us to do through four key programmes
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  relative flex flex-col min-h-[200px] md:min-h-[280px] p-6 rounded-lg shadow-md transition-all
                  bg-white dark:bg-[hsl(220_56%_17%)]
                  md:hover:bg-blue-50 md:dark:hover:bg-[hsl(220_56%_20%)]
                  ${activeProgram === index ? 'md:bg-blue-50 md:dark:bg-[hsl(220_56%_20%)]' : ''}
                  ${activeProgram === index ? 'md:border-2 md:border-blue-500 md:scale-105' : 'border border-transparent'}
                  md:cursor-pointer
                `}
                onClick={() => setActiveProgram(index)}
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{program.description}</p>
                </div>
                
                <div className="mt-auto pb-2">
                  <Link
                    href="/courses"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    Explore Courses <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <button
                    className="md:hidden mt-4 w-full flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400"
                    onClick={(e) => toggleBenefits(index, e)}
                  >
                    {showBenefitsMobile === index ? "Hide Impacts" : "View Impacts"}
                    {showBenefitsMobile === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </motion.div>

              {/* Mobile Benefits */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: showBenefitsMobile === index ? 1 : 0,
                  height: showBenefitsMobile === index ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden mt-4"
              >
                {showBenefitsMobile === index && (
                  <div className="space-y-4">
                    {/* Spiritual Growth Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400">Spiritual Growth</h3>
                        <ArrowUpRight className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                      </div>
                      <div className="space-y-4">
                        {program.spiritualBenefits.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="bg-blue-900/10 dark:bg-blue-900/30 px-2 py-1 rounded">
                              <span className="text-lg font-bold text-blue-700 dark:text-blue-400">{item.percentage}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{item.benefit}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Practical Application Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400">Practical Application</h3>
                        <ArrowDownRight className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                      </div>
                      <div className="space-y-4">
                        {program.practicalBenefits.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="bg-blue-900/10 dark:bg-blue-900/30 px-2 py-1 rounded">
                              <span className="text-lg font-bold text-blue-700 dark:text-blue-400">{item.percentage}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{item.benefit}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Desktop Benefits Section */}
        <div className="hidden md:block mt-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeProgram === index ? 1 : 0,
                height: activeProgram === index ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`overflow-hidden ${activeProgram === index ? "block" : "hidden"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Spiritual Growth Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Spiritual Growth</h3>
                    <ArrowUpRight className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                  </div>
                  <div className="space-y-6">
                    {program.spiritualBenefits.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="bg-blue-900/10 dark:bg-blue-900/30 px-3 py-2 rounded">
                          <span className="text-xl font-bold text-blue-700 dark:text-blue-400">{item.percentage}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mt-1">{item.benefit}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Practical Application Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Practical Application</h3>
                    <ArrowDownRight className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                  </div>
                  <div className="space-y-6">
                    {program.practicalBenefits.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="bg-blue-900/10 dark:bg-blue-900/30 px-3 py-2 rounded">
                          <span className="text-xl font-bold text-blue-700 dark:text-blue-400">{item.percentage}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mt-1">{item.benefit}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}