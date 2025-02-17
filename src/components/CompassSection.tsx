import Image from 'next/image';
import Link from 'next/link';

const CompassSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Compass Logo */}
          <div className="mb-8">
            <Image
              src="https://compassfinancialministry.org/logo.png"
              alt="Compass Financial Ministry Logo"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>

          {/* Section Title */}
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Discover Godly Wisdom with Compass Financial Ministry
          </h2>

          {/* Section Description */}
          <p className="text-lg text-gray-600 mb-8">
            At <strong className="text-gray-900">Godly Wisdom Ministry</strong>, we are proud to be an affiliate of{' '}
            <strong className="text-gray-900">Compass Financial Ministry</strong>, a beacon of light in the world of
            financial stewardship. Together, we are committed to helping individuals and families navigate their
            financial journeys with faith, wisdom, and purpose.
          </p>

          <p className="text-lg text-gray-600 mb-8">
            Compass Financial Ministry offers transformative courses designed to align your finances with biblical
            principles. Whether you&apos;re looking to get out of debt, save for the future, or give generously, Compass
            provides the tools and guidance you need to thrive.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <Link
              href="https://compassfinancialministry.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Visit Compass Website
            </Link>
            <Link
              href="https://compassfinancialministry.org/courses"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Explore Compass Courses
            </Link>
          </div>

          {/* Godly Wisdom Logo */}
          <div className="mt-8">
            <Image
              src="/globe.svg"
              alt="Godly Wisdom Ministry Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
            <p className="text-gray-500 mt-2">
              Proudly affiliated with <strong className="text-gray-700">Godly Wisdom Ministry</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompassSection;