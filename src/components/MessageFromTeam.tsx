"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Pastor Michael M. Wamache",
    role: "Co-founder",
    avatar: "/m-avatar.jpg",
    message:
      "As co-founders, we are deeply committed to spreading Godly wisdom and transforming lives through Christ-centered education. Together, we can make a lasting impact.",
  },
  {
    name: "Pastor Anna K. Wamache",
    role: "Co-founder",
    avatar: "/f-avatar.jpg",
    message:
      "Our mission is to empower individuals with the knowledge and faith they need to thrive. We are grateful for your support and partnership in this journey.",
  },
  {
    name: "Joy N. Nderitu",
    role: "Executive Assistant",
    avatar: "/f1-avatar.jpg",
    message:
      "It’s a privilege to support this incredible team and mission. Together, we are building a community rooted in faith, love, and service.",
  },
];

export default function MessageFromTeam() {
  return (
    <section className="py-16 bg-white dark:bg-[hsl(220_56%_13%)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Message from the Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the passionate individuals leading our mission to transform lives through Christ-centered education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-[hsl(220_56%_15%)] border border-gray-200 dark:border-gray-800 transition-colors p-6 rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Name and Role */}
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>
                {/* Message */}
                <p className="text-gray-700 dark:text-gray-300 italic">
                  &ldquo;{member.message}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}