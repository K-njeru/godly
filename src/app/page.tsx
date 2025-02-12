
import Navbar from '@/components/Navbar'
import HeroSection from "@/components/HeroSection";
import { Footer } from '@/components/footer';
import AboutSection from '@/components/AboutSection';
import PartnersSection from '@/components/PartnersSection';
import CoursesSection from '@/components/CoursesSection';
import { Banner } from '@/components/Banner';


export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <Banner />
      <PartnersSection />
      <Footer />
      
    </>
  )
}

