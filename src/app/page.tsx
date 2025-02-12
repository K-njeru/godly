
import Navbar from '@/components/Navbar'
import HeroSection from "@/components/HeroSection";
import { Footer } from '@/components/footer';
import AboutSection from '@/components/AboutSection';
import PartnersSection from '@/components/PartnersSection';


export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <Footer />
      
    </>
  )
}

