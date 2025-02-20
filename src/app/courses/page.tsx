"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Book, Users, HandCoins, Clock } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";

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

 const courses = {
  "biblical-teaching": [
    {
      id: "biblical-topical-teaching",
      title: "Biblical Topical Teaching",
      description: "In-depth study of specific biblical topics and themes",
      duration: "12 weeks",
      mode: ["online", "physical"],
      cost: "$499",
      outcomes: [
        "Deep understanding of biblical themes and doctrines",
        "Ability to interpret scripture in context",
        "Skills in biblical research and study methods",
        "Application of biblical principles in daily life"
      ],
      requirements: [
        "Basic understanding of Christian faith",
        "Access to a study Bible",
        "Commitment to weekly study sessions",
        "Basic computer literacy for online mode"
      ]
    },
    {
      id: "speaking-engagements",
      title: "Speaking Engagements",
      description: "Training in effective biblical communication and preaching",
      duration: "8 weeks",
      mode: ["physical"],
      cost: "$399",
      outcomes: [
        "Confident public speaking skills",
        "Effective sermon preparation techniques",
        "Understanding of different preaching styles",
        "Practical experience in message delivery"
      ],
      requirements: [
        "Active church involvement",
        "Basic public speaking experience",
        "Willingness to practice regularly",
        "Recording device for feedback sessions"
      ]
    },
    {
      id: "publishing-christian-books",
      title: "Publishing Christian Books",
      description: "Learn to write and publish Christian literature",
      duration: "16 weeks",
      mode: ["online"],
      cost: "$699",
      outcomes: [
        "Understanding of Christian publishing industry",
        "Manuscript preparation skills",
        "Knowledge of publishing processes",
        "Marketing strategies for Christian books"
      ],
      requirements: [
        "Strong writing skills",
        "Basic computer proficiency",
        "Original manuscript idea",
        "Dedication to writing practice"
      ]
    },
    {
      id: "christian-books-distribution",
      title: "Sale and Distribution of Christian Books",
      description: "Strategies for Christian literature distribution",
      duration: "4 weeks",
      mode: ["online", "physical"],
      cost: "$299",
      outcomes: [
        "Understanding of book distribution channels",
        "Sales and marketing techniques",
        "Inventory management skills",
        "Customer relationship building"
      ],
      requirements: [
        "Basic business knowledge",
        "Interest in Christian literature",
        "Good communication skills",
        "Basic math skills"
      ]
    },
  ],
  "economic-empowerment": [
    {
      id: "business-training",
      title: "Business Training & Startups",
      description: "Comprehensive business startup guidance and training",
      duration: "12 weeks",
      mode: ["online", "physical"],
      cost: "$599",
      outcomes: [
        "Business plan development skills",
        "Understanding of market analysis",
        "Financial planning competency",
        "Strategic business management"
      ],
      requirements: [
        "Basic computer literacy",
        "Business idea or concept",
        "Commitment to learning",
        "Basic math skills"
      ]
    },
    {
      id: "financial-literacy",
      title: "Financial Literacy & Business Growth",
      description: "Essential financial management and business scaling strategies",
      duration: "8 weeks",
      mode: ["online"],
      cost: "$449",
      outcomes: [
        "Financial statement analysis",
        "Budgeting and forecasting skills",
        "Investment strategy understanding",
        "Risk management knowledge"
      ],
      requirements: [
        "Basic accounting knowledge",
        "Access to spreadsheet software",
        "Business experience",
        "Internet connectivity"
      ]
    },
    {
      id: "business-incubation",
      title: "Business Incubation & Networking",
      description: "Mentorship and networking opportunities for entrepreneurs",
      duration: "16 weeks",
      mode: ["physical"],
      cost: "$799",
      outcomes: [
        "Mentorship relationships",
        "Business network development",
        "Access to resources and support",
        "Growth strategy implementation"
      ],
      requirements: [
        "Existing business or solid plan",
        "Commitment to networking",
        "Regular attendance",
        "Open to feedback and guidance"
      ]
    },
    {
      id: "agribusiness",
      title: "Agribusiness",
      description: "Agricultural business development and management",
      duration: "12 weeks",
      mode: ["physical"],
      cost: "$549",
      outcomes: [
        "Agricultural business planning",
        "Farm management skills",
        "Market analysis abilities",
        "Supply chain understanding"
      ],
      requirements: [
        "Interest in agriculture",
        "Access to farming resources",
        "Physical capability",
        "Basic business knowledge"
      ]
    },
    {
      id: "income-generating-activities",
      title: "Income Generating Activities",
      description: "Practical strategies for sustainable income generation",
      duration: "6 weeks",
      mode: ["online", "physical"],
      cost: "$349",
      outcomes: [
        "Income diversification strategies",
        "Small business management",
        "Market opportunity identification",
        "Resource optimization skills"
      ],
      requirements: [
        "Entrepreneurial mindset",
        "Time for practical activities",
        "Basic business understanding",
        "Willingness to start small"
      ]
    },
  ],
  "discipleship": [
    {
      id: "bible-studies",
      title: "Bible Studies",
      description: "Group-based biblical studies for various demographics",
      duration: "Ongoing",
      mode: ["online", "physical"],
      cost: "$199",
      outcomes: [
        "Deep scripture understanding",
        "Community building skills",
        "Leadership development",
        "Spiritual growth practices"
      ],
      requirements: [
        "Personal Bible",
        "Commitment to group meetings",
        "Willingness to participate",
        "Open to spiritual growth"
      ]
    },
    {
      id: "second-chance",
      title: "Second Chance",
      description: "Restoration and renewal through biblical principles",
      duration: "12 weeks",
      mode: ["physical"],
      cost: "$299",
      outcomes: [
        "Personal healing and growth",
        "Biblical restoration principles",
        "Life skills development",
        "Community support network"
      ],
      requirements: [
        "Commitment to change",
        "Regular attendance",
        "Openness to counseling",
        "Support system participation"
      ]
    },
    {
      id: "consistent-bible-reading",
      title: "Consistent Bible Reading",
      description: "Developing healthy Bible reading habits",
      duration: "8 weeks",
      mode: ["online"],
      cost: "$149",
      outcomes: [
        "Bible reading discipline",
        "Scripture meditation skills",
        "Personal devotion habits",
        "Biblical application methods"
      ],
      requirements: [
        "Personal Bible",
        "Daily time commitment",
        "Reading comprehension",
        "Digital device access"
      ]
    },
    {
      id: "generosity-discipleship",
      title: "Generosity Discipleship",
      description: "Understanding and practicing biblical generosity",
      duration: "6 weeks",
      mode: ["online", "physical"],
      cost: "$249",
      outcomes: [
        "Biblical stewardship principles",
        "Generous living practices",
        "Financial management skills",
        "Kingdom impact understanding"
      ],
      requirements: [
        "Open heart for giving",
        "Basic financial stability",
        "Willingness to serve",
        "Community involvement"
      ]
    },
  ],
};

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const programFromUrl = searchParams.get("program");
  
  // Find the program ID based on the program name from URL
  const getProgramId = (programName: string | null) => {
    if (!programName) return programs[0].id;
    const program = programs.find(p => 
      p.title.toLowerCase() === programName.toLowerCase()
    );
    return program ? program.id : programs[0].id;
  };

  const [selectedProgram, setSelectedProgram] = useState(getProgramId(programFromUrl));

  // Update selected program when URL changes
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

export { courses }