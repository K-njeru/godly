"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, DollarSign, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea" 

const partnerTypes = [
  {
    id: "financial-partners",
    title: "Financial Partners",
    description:
      "Support our mission financially, enabling us to provide quality Christian education and expand our reach across Kenya.",
    color: "from-sky-400 to-sky-500",
    icon: DollarSign,
    content:
      "As a Financial Partner, you play a crucial role in sustaining and expanding our mission. Your contributions directly impact:",
    bulletPoints: [
      "Scholarships for underprivileged students",
      "Expansion of our educational facilities",
      "Development of new educational programs",
      "Support for our dedicated staff and educators",
    ],
  },
  {
    id: "institutional-partners",
    title: "Institutional Partners",
    description:
      "Partner with us to cultivate Godly wisdom, empowering us to inspire, educate, and transform lives through faith-driven knowledge exchange.",
    color: "from-orange-400 to-orange-500",
    icon: ArrowRight,
    content:
      "Institutional Partners collaborate with us to enhance our educational offerings and reach. This partnership involves:",
    bulletPoints: [
      "Curriculum development and exchange",
      "Joint research initiatives",
      "Faculty and student exchange programs",
      "Shared resources and expertise",
    ],
  },
  {
    id: "bs-incubation-hub-partners",
    title: "B/s Incubation Hub Partners",
    description:
      "Partner with us to nurture entrepreneurial talent and support sustainable business development God's way.",
    color: "from-amber-400 to-amber-500",
    icon: ArrowRight,
    content:
      "Our B/s Incubation Hub is dedicated to fostering Christian entrepreneurship. As a partner, you'll contribute to:",
    bulletPoints: [
      "Mentorship programs for budding entrepreneurs",
      "Providing resources and workspace for startups",
      "Organizing workshops and seminars on faith-based business practices",
      "Creating networking opportunities within the Christian business community",
    ],
  },
  {
    id: "volunteer-partners",
    title: "Volunteer Partners",
    description:
      "Contribute your time and skills to our various programs, from teaching to mentoring and community outreach.",
    color: "from-purple-500 to-purple-600",
    icon: Heart,
    content: "Volunteer Partners are the heartbeat of our community engagement. Your involvement can include:",
    bulletPoints: [
      "Teaching and tutoring in various subjects",
      "Mentoring students in personal and spiritual growth",
      "Assisting with community outreach programs",
      "Supporting administrative tasks and event organization",
    ],
  },
  {
    id: "prayer-partners",
    title: "Prayer Partners",
    description:
      "Join our prayer network to support our mission spiritually, participating in regular prayer meetings and spiritual guidance.",
    color: "from-gray-100 to-white dark:from-gray-700 dark:to-gray-600",
    icon: ArrowRight,
    content: "Prayer Partners form the spiritual foundation of our mission. Your commitment involves:",
    bulletPoints: [
      "Participating in regular prayer meetings (online or in-person)",
      "Receiving and praying for specific prayer requests from our community",
      "Offering spiritual encouragement and guidance",
      "Joining in fasting and special prayer initiatives",
    ],
  },
  {
    id: "mission-partners",
    title: "Mission Partners",
    description:
      "Collaborate with us in spreading Christ's message through education and community development initiatives.",
    color: "from-stone-400 to-stone-500",
    icon: ArrowRight,
    content: "Mission Partners work alongside us to extend our impact beyond the classroom. This partnership includes:",
    bulletPoints: [
      "Participating in local and international mission trips",
      "Supporting community development projects",
      "Assisting in the establishment of new educational centers",
      "Engaging in cross-cultural exchanges and learning experiences",
    ],
  },
]

export default function PartnersPage() {
  const [activePartner, setActivePartner] = useState(partnerTypes[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Partner With Us</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Join our mission to transform lives through Christ-centered education
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Partner Type Navigation */}
          <nav className="lg:w-1/4">
            <ul className="space-y-2">
              {partnerTypes.map((type) => (
                <li key={type.id}>
                  <Button
                    variant={activePartner.id === type.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActivePartner(type)}
                  >
                    <type.icon className="mr-2 h-4 w-4" />
                    {type.title}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Partner Type Content */}
          <div className="lg:w-3/4">
            <motion.div
              key={activePartner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-4">{activePartner.title}</h2>
              <p className="text-lg mb-6">{activePartner.description}</p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">What it entails:</h3>
                <p className="mb-4">{activePartner.content}</p>
                <ul className="list-disc list-inside space-y-2">
                  {activePartner.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Become a {activePartner.title.slice(0, -1)}</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Become a {activePartner.title.slice(0, -1)}</DialogTitle>
                    </DialogHeader>
                    <PartnerForm partnerType={activePartner.title} />
                  </DialogContent>
                </Dialog>
                {activePartner.id === "financial-partners" && (
                  <Button variant="outline">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Donate Now
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="bg-gray-100 dark:bg-gray-700 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Partner Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="John Doe"
              role="Financial Partner"
              quote="Supporting this mission has been incredibly rewarding. I've seen firsthand how my contributions are making a difference in students' lives."
            />
            <TestimonialCard
              name="Jane Smith"
              role="Volunteer Partner"
              quote="Volunteering here has been a blessing. The impact we're making on these young minds is truly inspiring."
            />
            <TestimonialCard
              name="David Johnson"
              role="Institutional Partner"
              quote="Our partnership has led to amazing innovations in faith-based education. Together, we're shaping the future."
            />
          </div>
        </div>
      </section>

      {/* Impact Visualization */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact Together</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImpactCard number="1000+" label="Students Educated" />
            <ImpactCard number="50+" label="Community Projects" />
            <ImpactCard number="200+" label="Volunteers Engaged" />
            <ImpactCard number="5" label="Countries Reached" />
          </div>
        </div>
      </section>
    </div>
  )
}

function PartnerForm({ partnerType }: { partnerType: string }) {
  return (
    <form className="space-y-4">
      <Input placeholder="Your Name" />
      <Input placeholder="Email" type="email" />
      <Input placeholder="Phone Number" type="tel" />
      <Textarea placeholder={`How would you like to contribute as a ${partnerType}?`} />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  )
}

function TestimonialCard({ name, role, quote }: { name: string; role: string; quote: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <p className="text-lg mb-4">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  )
}

function ImpactCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold mb-2">{number}</h3>
      <p className="text-xl">{label}</p>
    </div>
  )
}

