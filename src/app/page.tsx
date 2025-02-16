
import Navbar from '@/components/Navbar'
import HeroSection from "@/components/HeroSection";
import { Footer } from '@/components/footer';
import AboutSection from '@/components/AboutSection';
import PartnersSection from '@/components/PartnersSection';
import { Banner } from '@/components/Banner';
import ProgramsSection from '@/components/ProgramsSection';
import MessageFromTeam from '@/components/MessageFromTeam';


export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <Banner />
      <PartnersSection />
      <MessageFromTeam />
      <Footer />
      
    </>
  )
}

