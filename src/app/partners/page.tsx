"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, DollarSign, HandCoins, Heart, Lightbulb, Globe, BookOpen, SquareCheckBig } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/Navbar"
import { Footer } from "@/components/footer"

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
        image: "/giving1.jpg",
    },
    {
        id: "institutional-partners",
        title: "Institutional Partners",
        description:
            "Partner with us to cultivate Godly wisdom, empowering us to inspire, educate, and transform lives through faith-driven knowledge exchange.",
        color: "from-orange-400 to-orange-500",
        icon: BookOpen,
        content:
            "Institutional Partners collaborate with us to enhance our educational offerings and reach. This partnership involves:",
        bulletPoints: [
            "Curriculum development and exchange",
            "Joint research initiatives",
            "Faculty and student exchange programs",
            "Shared resources and expertise",
        ],
        image: "/institutional-partner.jpg",
    },
    {
        id: "bs-incubation-hub-partners",
        title: "B/s Incubation Hub Partners",
        description:
            "Partner with us to nurture entrepreneurial talent and support sustainable business development God's way.",
        color: "from-amber-400 to-amber-500",
        icon: Lightbulb,
        content:
            "Our B/s Incubation Hub is dedicated to fostering Christian entrepreneurship. As a partner, you'll contribute to:",
        bulletPoints: [
            "Mentorship programs for budding entrepreneurs",
            "Providing resources and workspace for startups",
            "Organizing workshops and seminars on faith-based business practices",
            "Creating networking opportunities within the Christian business community",
        ],
        image: "/incubation-hub.jpg",
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
        image: "/volunteer-partner.jpg",
    },
    {
        id: "prayer-partners",
        title: "Prayer Partners",
        description:
            "Join our prayer network to support our mission spiritually, participating in regular prayer meetings and spiritual guidance.",
        color: "from-gray-100 to-white dark:from-gray-700 dark:to-gray-600",
        icon: Heart,
        content: "Prayer Partners form the spiritual foundation of our mission. Your commitment involves:",
        bulletPoints: [
            "Participating in regular prayer meetings (online or in-person)",
            "Receiving and praying for specific prayer requests from our community",
            "Offering spiritual encouragement and guidance",
            "Joining in fasting and special prayer initiatives",
        ],
        image: "/prayer-partner.jpg",
    },
    {
        id: "mission-partners",
        title: "Mission Partners",
        description:
            "Collaborate with us in spreading Christ's message through education and community development initiatives.",
        color: "from-stone-400 to-stone-500",
        icon: Globe,
        content: "Mission Partners work alongside us to extend our impact beyond the classroom. This partnership includes:",
        bulletPoints: [
            "Participating in local and international mission trips",
            "Supporting community development projects",
            "Assisting in the establishment of new educational centers",
            "Engaging in cross-cultural exchanges and learning experiences",
        ],
        image: "/mission-partner.jpg",
    },
]

export default function PartnersPage() {
    return (
        <main className="overflow-hidden">
            <Navbar />
            <div className="min-h-screen bg-background transition-colors">
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden" id='Partners-hero'>
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="/partner.jpg?auto=format&fit=crop&q=80"
                            alt="Partners working together"
                            fill
                            className="object-cover brightness-[0.7] dark:brightness-[0.4]"
                            priority
                        />
                    </div>
                    <motion.div
                        className="relative z-10 text-center text-white px-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Partner With Us</h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
                            Join our mission to transform lives through Christ-centered education
                        </p>
                    </motion.div>
                    {/* Breadcrumb Navigation */}
                    <div className="absolute bottom-4 left-4 z-10 text-white text-md flex items-center">
                        <Link href="/" className="cursor-pointer text-white hover:text-gray-300">
                            Home
                        </Link>
                        <ArrowRight className="mx-2 w-4 h-4" />
                        <Link href="/partners" className="cursor-pointer text-blue-400 hover:text-blue-300">
                            Partners
                        </Link>
                    </div>
                </section>

                {/* Partner Types Section */}
                <motion.div

                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center align-center p-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Ways to partner</h1>
                </motion.div>

                {/* Detailed Partner Information */}
                {partnerTypes.map((type, index) => (
                    <section
                        key={type.id}
                        id={type.id}
                        className={`m-2 rounded-lg py-16 ${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}`}
                    >
                        <div className="container mx-auto px-4">
                            <div className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""} items-center gap-12`}>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="lg:w-1/2 space-y-6 p-8 border border-blue-500 rounded-lg"
                                >
                                    <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400">{type.title}</h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300">{type.content}</p>
                                    <ul className="space-y-2">
                                        {type.bulletPoints.map((point, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <SquareCheckBig className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-4">
                                        <div className="flex justify-center w-full">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button className="w-full md:w-1/2 flex items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-md text-white font-bold hover:bg-transparent hover:text-foreground hover:border hover:border-blue-500">
                                                        Become a {type.title.slice(0, -1)}
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Become a {type.title.slice(0, -1)}</DialogTitle>
                                                    </DialogHeader>
                                                    <PartnerForm partnerType={type.title} />
                                                </DialogContent>
                                            </Dialog>
                                        </div>

                                        <div className="flex justify-center w-full">
                                            {type.id === "financial-partners" && (
                                                <Button className="w-full m-4 md:w-1/2 flex items-center justify-center rounded-md bg-foreground text-background hover:bg-transparent hover:text-foreground hover:border hover:border-blue-500">
                                                    <HandCoins className="mr-2 h-4 w-4" />
                                                    Donate Now
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="lg:w-1/2"
                                >
                                    <div className="relative h-[400px] rounded-xl overflow-hidden">
                                        <Image src={type.image || "/placeholder.svg"} alt={type.title} fill className="object-cover" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                ))}

                {/* Testimonials Section */}
                <section className="py-16">
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

                {/* Call to Action */}
                <section className="bg-blue-700 mx-[1%] rounded-lg mb-8 py-20 dark:bg-blue-900 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto "
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join us as a partner</h2>
                            <p className="text-xl mb-8">
                                {`We're looking forward to having you as our partner soon and embarking on this journey of faith, growth, and impact together.`}
                            </p>
                            <Link
                                className="inline-flex px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-transparent hover:text-white hover:border hover:border-blue-500 transition-colors flex items-center"
                                href="#Partners-hero"
                            >
                                Explore Partners <ArrowUpRight className="ml-2" />
                            </Link>

                        </motion.div>
                    </div>
                </section>
                {/* Cover the margin with the same background color */}
                <div className="bg-background h-8 -mt-8 mx-[1%]"></div>
            </div>
            <Footer />
        </main>
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
        <div className="bg-gray-50 dark:bg-[hsl(220_56%_15%)] rounded-lg border border-gray-200 dark:border-gray-800 transition-colors p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">&ldquo;{quote}&rdquo;</p>
            <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-blue-700 dark:text-blue-400">{role}</p>
                </div>
            </div>
        </div>
    )
}

