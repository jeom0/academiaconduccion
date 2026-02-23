import HeaderSticky from '@/components/HeaderSticky'
import HeroSection3D from '@/components/sections/HeroSection3D'
import TrustBarAnimated from '@/components/sections/TrustBarAnimated'
import Services3DGrid from '@/components/sections/Services3DGrid'
import CaleWarning3DSection from '@/components/sections/CaleWarning3DSection'
import ProcessTimelineAnimated from '@/components/sections/ProcessTimelineAnimated'
import CRCMedicalSection from '@/components/sections/CRCMedicalSection'
import VehiclesShowcase3D from '@/components/sections/VehiclesShowcase3D'
import Testimonials3D from '@/components/sections/Testimonials3D'
import LocationsSection from '@/components/sections/LocationsSection'
import FinalCTA from '@/components/sections/FinalCTA'
import ContactFormSection from '@/components/sections/ContactFormSection'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <HeaderSticky />
      <HeroSection3D />
      <TrustBarAnimated />
      <Services3DGrid />
      <CaleWarning3DSection />
      <ProcessTimelineAnimated />
      <CRCMedicalSection />
      <VehiclesShowcase3D />
      <Testimonials3D />
      <LocationsSection />
      <FinalCTA />
      <ContactFormSection />

      <FloatingWhatsApp />
      <Footer />
    </main>
  )
}
