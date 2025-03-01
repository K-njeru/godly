"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Book, CheckCircle2, DollarSign } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { compassResources } from "@/data/compassResources";

export default function ResourceDetailsPage() {
  const { resourceId } = useParams();
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  // Find the resource in the compassResources array
  const resource = compassResources.find((r) => r.id === resourceId);

  if (!resource) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Resource Not Found</h1>
          <Link
            href="/compass"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-[hsl(220_56%_15%)] transition-colors">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/compass"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Resources
        </Link>

        {/* Resource Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[hsl(220_56%_17%)] rounded-xl p-8 shadow-lg mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {resource.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {resource.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Book className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">{resource.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">{resource.cost}</span>
            </div>
          </div>
        </motion.div>

        {/* Resource Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Long Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-[hsl(220_56%_17%)] rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                About This Resource
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{resource.longDescription}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-[hsl(220_56%_17%)] rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Features
              </h2>
              <ul className="space-y-3">
                {resource.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Purchase Card */}
            <div className="bg-white dark:bg-[hsl(220_56%_17%)] rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Purchase Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Cost: {resource.cost}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Book className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Format: {resource.format}
                  </span>
                </div>
              </div>
            </div>

            {/* Purchase Button */}
            <button
              onClick={() => setShowPurchaseModal(true)}
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Purchase Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Purchase Modal */}
      {showPurchaseModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-[hsl(220_56%_17%)] rounded-xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Purchase {resource.title}
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                required
              />
              <select
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                required
              >
                <option value="">Select Format</option>
                {resource.format.split(", ").map((format, index) => (
                  <option key={index} value={format}>
                    {format}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Confirm Purchase
              </button>
            </form>
            <button
              onClick={() => setShowPurchaseModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              ×
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}