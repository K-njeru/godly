"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Gift} from 'lucide-react';

const conferenceDetails = {
  title: "Transforming Faith 2025",
  date: "March 15-17, 2025",
  theme: "Empowering Believers for Kingdom Impact",
  description: "Join us for three transformative days of spiritual growth, practical wisdom, and powerful networking with fellow believers. Experience dynamic speakers, interactive workshops, and life-changing moments of worship.",
  highlights: [
    "Dynamic Keynote Speakers",
    "Interactive Workshops",
    "Networking Opportunities",
    "Worship Sessions",
    "Prayer & Ministry Time"
  ],
  schedule: [
    {
      day: "Day 1",
      focus: "Foundation & Vision",
      highlights: "Opening Ceremony, Keynote Address, Vision Casting"
    },
    {
      day: "Day 2",
      focus: "Growth & Development",
      highlights: "Workshops, Panel Discussions, Breakout Sessions"
    },
    {
      day: "Day 3",
      focus: "Implementation & Launch",
      highlights: "Action Planning, Commissioning, Closing Ceremony"
    }
  ]
};

{/* const speakers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Biblical Studies Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Pastor Michael Chen",
    role: "Leadership Coach",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    name: "Rev. David Williams",
    role: "Ministry Development",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  }
];
*/}

export default function ConferenceSection() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'register' | 'sponsor'>('register');
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-03-15T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to avoid delay

    return () => clearInterval(timer);
  }, []);

  const openModal = (type: 'register' | 'sponsor') => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <section className="relative min-h-screen bg-gray-50/50 dark:bg-[hsl(220_56%_15%)] py-16 overflow-hidden" id='Conference'>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 mb-6">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Save the Date: {conferenceDetails.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {conferenceDetails.title}
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              {conferenceDetails.theme}
            </p>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {conferenceDetails.description}
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16"
          >
            {Object.entries(countdown).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-white dark:bg-[hsl(220_56%_17%)] p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 capitalize">
                  {unit}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <button
              onClick={() => openModal('register')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Users className="w-5 h-5" />
              Register Now
            </button>
            <button
              onClick={() => openModal('sponsor')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
            >
              <Gift className="w-5 h-5" />
              Become a Sponsor
            </button>
          </motion.div>

          {/* Conference Schedule */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {conferenceDetails.schedule.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-[hsl(220_56%_17%)] p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{day.day}</h3>
                <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{day.focus}</div>
                <p className="text-gray-600 dark:text-gray-400">{day.highlights}</p>
              </motion.div>
            ))}
          </div>

          {/* Speakers Section 
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-[hsl(220_56%_17%)] rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{speaker.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{speaker.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
            */}

        </div>
      </div>

      {/* Registration/Sponsor Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-[hsl(220_56%_17%)] rounded-xl p-8 max-w-md w-full relative"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              ×
            </button>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {modalType === 'register' ? 'Register for Conference' : 'Become a Sponsor'}
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
              
              <input
                type="text"
                placeholder="Profession"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                required
              />
              
              {modalType === 'register' ? (
                <textarea
                  placeholder="What are you seeking to learn?"
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                  required
                />
              ) : (
                <textarea
                  placeholder="How would you like to contribute as a sponsor?"
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[hsl(220_56%_20%)] dark:text-white"
                  required
                />
              )}
              
              <button
                type="submit"
                className={`w-full py-3 rounded-lg text-white font-semibold ${
                  modalType === 'register'
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-emerald-600 hover:bg-emerald-700'
                } transition-colors`}
              >
                {modalType === 'register' ? 'Complete Registration' : 'Submit Sponsorship Interest'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}