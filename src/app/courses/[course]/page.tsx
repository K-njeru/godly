"use client"; // Mark this as a client-side component

import { Calendar, Clock, DollarSign } from "lucide-react";
import { courses } from '../page'; // Explicitly import the `courses` array

// Define the Course interface
interface Course {
  title: string;
  description: string;
  teachingMode?: string[]; // Optional, as it might not always be present
  moreContent?: string; // Optional, as it might not always be present
  intakes: string[];
  schedule: string;
  duration: string; // Added based on the sample
  cost: string;
}

const CourseDetailsPage = ({ params }: { params: { course: string } }) => {
  const { course } = params; // Access the dynamic route parameter from `params`

  // Find the selected course
  const selectedCourse = courses.find(
    (c: Course) => c.title.toLowerCase().replace(/ /g, "-") === course
  );

  if (!selectedCourse) {
    return <div>Course not found</div>; // If no course is found, show an error message
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-[hsl(220_56%_15%)] transition-colors">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Course Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            {selectedCourse.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 md:text-xl max-w-2xl mx-auto mt-4">
            {selectedCourse.description}
          </p>
        </div>

        {/* Course Details */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Teaching Mode
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {selectedCourse.teachingMode || "Online"} {/* Adjust teaching mode if available */}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              More About the Course
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {selectedCourse.moreContent || "This course includes in-depth lessons, practical workshops, and real-world applications of Christian leadership and mission strategies."}
            </p>
          </div>

          {/* More Course Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">
                Intakes: {selectedCourse.intakes.join(", ")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">
                Schedule: {selectedCourse.schedule}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">
                Cost: {selectedCourse.cost}
              </span>
            </div>
          </div>
        </div>

        {/* Enrollment Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => alert('Enrollment process will be added soon!')}
            className="w-full px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPage;