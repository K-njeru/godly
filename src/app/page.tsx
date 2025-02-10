
import Navbar from '@/components/Navbar'
import HeroSection from "@/components/HeroSection";
import { Footer } from '@/components/footer';
import AboutUsSection from '@/components/AboutUsSection';
import AboutSection from '@/components/AboutSection';


export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <AboutSection />
      <Footer />
      
    </>
  )
}

