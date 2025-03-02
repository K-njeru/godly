"use client"

import { motion } from "framer-motion"
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ChevronRight,
  Landmark,
  Building2,
  TreePine,
  Camera,
  
} from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Link from "next/link"

const tracks = [
  {
    id: 'track-1',
    title: 'Track A: Learn',
    letter: 'A',
    icon: '⏳', // Use an icon (e.g., hourglass) instead of an alphabet
    description: 'Maximize those short free moments during the day to learn and share God\'s word on finances.',
    sessions: [
      {
        title: 'Session 1: Learn About Finances God\'s Way',
        speakers: ['Donald Wray', 'Jennifer Winborn'],
      },
      {
        title: 'Session 2: Building a Strong Financial Foundation',
        speakers: ['John Doe', 'Jane Smith'],
      },
      {
        title: 'Session 3: Practical Steps to Financial Freedom',
        speakers: ['Alice Johnson', 'Bob Brown'],
      },
    ],
  },
  {
    id: 'track-2',
    title: 'Track B: Apply',
    letter: 'B',
    icon: '🌱', // Use an icon (e.g., sprout) instead of an alphabet
    description: 'Grow in your relationship with the Lord and with others as you dig deeper into our financial discipleship materials.',
    sessions: [
      {
        title: 'Session 1: Applying Biblical Principles to Your Finances',
        speakers: ['Rhea Fix', 'Ivy Mawuko'],
      },
      {
        title: 'Session 2: Staying Focused on Your Financial Goals',
        speakers: ['Michael Green', 'Sarah Lee'],
      },
      {
        title: 'Session 3: Overcoming Financial Challenges',
        speakers: ['David Clark', 'Emily White'],
      },
    ],
  },
  {
    id: 'track-3',
    title: 'Track C: Multiply',
    letter: 'C',
    icon: '🚶‍♂️', // Use an icon (e.g., walking person) instead of an alphabet
    description: 'Do you feel called to use your experience, gifts, and passion to help others on a larger scale? See what opportunities there are to impact your church, community, city, and more through serving with us.',
    sessions: [
      {
        title: 'Session 1: Multiplying Your Impact in Your Community',
        speakers: ['Gary Montgomery', 'Kirk Bennett'],
      },
      {
        title: 'Session 2: Leading Financial Discipleship Programs',
        speakers: ['Patrick Sassou', 'Laura Taylor'],
      },
      {
        title: 'Session 3: Expanding Your Reach Beyond Your City',
        speakers: ['Chris Evans', 'Olivia Brown'],
      },
    ],
  },
];

const speakers = [
  {
    name: "Dr. Sarah Kimani",
    role: "Financial Expert & Biblical Teacher",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    topic: "Biblical Principles for Financial Freedom",
  },
  {
    name: "Pastor James Omondi",
    role: "Senior Pastor & Financial Coach",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    topic: "Stewardship in Modern Times",
  },
  {
    name: "Prof. David Mutua",
    role: "Economics Professor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    topic: "Economic Challenges & Biblical Solutions",
  },
]

const schedule = [
  {
    day: "Day 1",
    date: "May 15, 2025",
    events: [
      {
        time: "8:00 AM - 9:00 AM",
        title: "Registration & Breakfast",
      },
      {
        time: "9:00 AM - 10:30 AM",
        title: "Opening Keynote: Biblical Financial Principles",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Workshop Sessions",
      },
      {
        time: "2:00 PM - 5:00 PM",
        title: "Breakout Sessions & Networking",
      },
    ],
  },
  {
    day: "Day 2",
    date: "May 16, 2025",
    events: [
      {
        time: "9:00 AM - 10:30 AM",
        title: "Morning Keynote: Stewardship",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Panel Discussion",
      },
      {
        time: "2:00 PM - 5:00 PM",
        title: "Interactive Workshops",
      },
    ],
  },
  {
    day: "Day 3",
    date: "May 17, 2025",
    events: [
      {
        time: "9:00 AM - 10:30 AM",
        title: "Final Keynote: Implementation",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Action Planning",
      },
      {
        time: "2:00 PM - 4:00 PM",
        title: "Closing Ceremony",
      },
    ],
  },
]

const tourismSpots = [
  {
    name: "Nairobi National Park",
    description: "Experience wildlife in their natural habitat just minutes from the city center.",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
  },
  {
    name: "Giraffe Centre",
    description: "Get up close with endangered Rothschild's giraffes at this conservation center.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1547472529-e19b1fa60e0d",
  },
  {
    name: "Karen Blixen Museum",
    description: "Visit the former home of the famous Out of Africa author.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1590047698485-a1a15bd2c5b7",
  },
  {
    name: "Bomas of Kenya",
    description: "Experience traditional Kenyan culture through dance and music.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
  },
]

/* const partnershipLevels = [
  {
    level: "Gold Partner",
    benefits: ["Premium exhibition space", "5 conference passes", "Logo on all materials", "Speaking opportunity"],
  },
  {
    level: "Silver Partner",
    benefits: ["Exhibition space", "3 conference passes", "Logo on website", "Promotional materials"],
  },
  {
    level: "Bronze Partner",
    benefits: ["Small exhibition space", "2 conference passes", "Logo on website"],
  },
] */

export default function ConferencePage() {
  const [activeTrack, setActiveTrack] = useState(tracks[0].id); // Set the first track as active on load
  const [attendees, setAttendees] = useState(1)

  const handleCheckout = () => {
    // Implement your checkout logic here
    alert(`Proceeding to checkout with ${attendees} attendees.`)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="Pan Afric Hotel Nairobi"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>

          <div className="absolute inset-0 " />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              YOUR MONEY COUNTS
              <span className="text-blue-400">2025</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-8">COMPASS EAST AFRICA CONFERENCE</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-5 h-5" />
                <span>May 15-17, 2025</span>
              </div>
              <div className="hidden md:block text-white">|</div>
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <span>Pan Afric Hotel, Nairobi</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Host Message Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  alt="Conference Host"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <Badge className="mb-4">Welcome Message</Badge>
                <h2 className="text-3xl font-bold mb-6">A Message from Your Conference Host</h2>
                <p className="text-gray-600 mb-6">
                  This year, we are excited to bring together believers from across East Africa for three transformative
                  days of learning, fellowship, and spiritual growth. Our focus will be on experiencing biblical
                  contentment and financial wisdom in today&apos;s challenging economic environment.
                </p>
                <p className="text-gray-600 mb-6">
                  Our carefully selected speakers and workshop leaders will guide you through practical applications of
                  biblical financial principles, helping you become a better steward of God&apos;s resources.
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                    alt="Host Signature"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">John Kariuki</p>
                    <p className="text-sm text-gray-600">Conference Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="mb-4">Featured Speakers</Badge>
              <h2 className="text-3xl font-bold mb-4">Learn from the Experts</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Join our distinguished speakers as they share biblical wisdom and practical insights for financial
                stewardship.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <motion.div
                  key={speaker.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-foreground text-xl font-bold mb-2">{speaker.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{speaker.role}</p>
                    <p className="text-sm text-gray-500">Speaking on: {speaker.topic}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="mb-4">Conference Schedule</Badge>
              <h2 className="text-3xl font-bold mb-4">Three Days of Transformation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Plan your conference experience with our comprehensive schedule of events.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {schedule.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-2">{day.day}</h3>
                  <p className="text-gray-600 mb-4">{day.date}</p>
                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="border-l-2 border-blue-500 pl-4">
                        <p className="text-sm text-gray-500">{event.time}</p>
                        <p className="font-medium">{event.title}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Sessions Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                Discover Easy Ways to Share Compass with Others
              </h2>
            </div>

            {/* Tracks Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {tracks.map((track) => (
                <div
                  key={track.id}
                  className="text-center cursor-pointer flex items-center flex-row p-4 rounded-lg bg-card"
                  onClick={() => setActiveTrack(track.id)}
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-4 mb-4">
                    <span className="text-white text-2xl">{track.icon}</span> {/* Use the icon here */}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                </div>
              ))}
            </div>

            {/* Track Content */}
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              {tracks.map((track) => (
                <div key={track.id} className={`${activeTrack === track.id ? 'block' : 'hidden'}`}>
                  <div className="flex">
                    {/* Blue Left Banner */}
                    <div className="w-16 bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold transform origin-center">
                        {track.letter}
                      </span>
                    </div>

                    {/* Track Content */}
                    <div className="flex-1 px-8 py-6 border-t border-gray-200 dark:border-gray-700">
                      {/* Track Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{track.description}</p>

                      {/* Sessions */}
                      <div className="space-y-8">
                        {track.sessions.map((session, index) => (
                          <div key={index}>
                            <h4 className="text-xl font-bold mb-2">{session.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 italic">
                              Speakers: {session.speakers.join(', ')}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Registration Section */}
        <section className="py-16 md:py-24 bg-blue-600 dark:bg-blue-800 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="text-center md:text-left mb-12">
                  <h2 className="text-3xl font-bold mb-4">Join Us in Nairobi</h2>
                  <p className="max-w-2xl mx-auto md:mx-0 mb-8">
                    Don&apos;t miss this opportunity to learn, grow, and connect with like-minded believers passionate about
                    biblical financial principles.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8 max-w-3xl">
                    <div>
                      <Users className="w-8 h-8 mx-auto mb-4" />
                      <h3 className="font-bold mb-2">300+ Attendees</h3>
                      <p className="text-blue-100">From across East Africa</p>
                    </div>
                    <div>
                      <Clock className="w-8 h-8 mx-auto mb-4" />
                      <h3 className="font-bold mb-2">3 Full Days</h3>
                      <p className="text-blue-100">Of intensive learning</p>
                    </div>
                    <div>
                      <MapPin className="w-8 h-8 mx-auto mb-4" />
                      <h3 className="font-bold mb-2">Prime Location</h3>
                      <p className="text-blue-100">In the heart of Nairobi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ticket Calculator */}
              <div className="bg-background rounded-xl p-6 text-gray-900 dark:text-white">
                <h3 className="text-2xl font-bold mb-6">Calculate Your Registration</h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Attendees</label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setAttendees(Math.max(1, attendees - 1))}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="text-xl font-bold">{attendees}</span>
                      <button
                        onClick={() => setAttendees(attendees + 1)}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span>Conference Fee (per person)</span>
                      <span>KES 25,000</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Number of Attendees</span>
                      <span>× {attendees}</span>
                    </div>
                    <div className="flex justify-between font-bold text-xl border-t pt-4">
                      <span>Total Amount</span>
                      <span>KES {(25000 * attendees).toLocaleString()}</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Early bird discount of 10% available until March 31, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Conference Venue</Badge>
                <h2 className="text-3xl font-bold mb-6">Pan Afric Hotel Nairobi</h2>
                <p className="text-gray-600 mb-6">
                  Located in the heart of Nairobi, the Pan Afric Hotel offers world-class conference facilities and
                  comfortable accommodations for all attendees.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-600">Kenyatta Avenue, Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Capacity</h3>
                      <p className="text-gray-600">300+ conference attendees</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                  alt="Pan Afric Hotel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section 
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="mb-4">Partnership</Badge>
              <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Join us in transforming lives through biblical financial principles. Partner with Compass East Africa
                Conference 2025.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {partnershipLevels.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{level.level}</h3>
                  <ul className="space-y-3 mb-6">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/partners"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Handshake className="w-5 h-5" />
                Learn more about partnership opportunities
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
          */}

        {/* Tourism Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="mb-4">Explore Kenya</Badge>
              <h2 className="text-3xl font-bold mb-4">Places to Visit</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Make the most of your trip to Kenya by visiting these amazing attractions near Nairobi.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tourismSpots.map((spot, index) => (
                <motion.div
                  key={spot.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <div className="relative h-64">
                    <Image
                      src={spot.image || "/placeholder.svg"}
                      alt={spot.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <spot.icon className="w-5 h-5 text-white" />
                      <h3 className="text-lg font-bold text-white">{spot.name}</h3>
                    </div>
                    <p className="text-sm text-gray-200">{spot.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="https://magicalkenya.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Discover more about Kenya
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

