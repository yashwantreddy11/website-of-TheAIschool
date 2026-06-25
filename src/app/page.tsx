import { ArrowRight, MessageCircle, Sparkles, TrendingUp, Users, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import HomeHero from "@/components/home/HomeHero";
import BentoGrid from "@/components/BentoGrid";
import MagneticButton from "@/components/MagneticButton";
import PartnersSection from "@/components/PartnersSection";
import LearningJourney from "@/components/LearningJourney";
import EcosystemOrbit from "@/components/EcosystemOrbit";
import MentorCarousel from "@/components/MentorCarousel";
import XRayTransform from "@/components/XRayTransform";
import PlacementJourney from "@/components/PlacementJourney";
import FAQAccordion from "@/components/FAQAccordion";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

// Layout metrics cards details
const METRICS = [
  { value: "4.9★", label: "Mentor Rating", icon: Sparkles },
  { value: "10,000+", label: "Engineers Trained", icon: Users },
  { value: "100%", label: "Hands-on Internships", icon: CheckCircle },
  { value: "3x", label: "Career Acceleration", icon: TrendingUp },
];

export default function Home() {

  return (
    <main className="relative min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />

      {/* 1. New Redesigned Homepage Hero */}
      <HomeHero />

      {/* 2. Program & Ecosystem Partners */}
      <PartnersSection />

      {/* 2.5. Student Learning Journey */}
      <LearningJourney />

      {/* 2.6. The AI School Ecosystem */}
      <EcosystemOrbit />

      {/* 3. X-Ray Transform Grid (Friction & Antidote) */}
      <XRayTransform />

      {/* 4. Course Tracks Matrix */}
      <BentoGrid />

      {/* 5. Performance Data Matrix (Metrics Section) */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {METRICS.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className="text-center flex flex-col items-center">
                  <div className="p-3 bg-red-50 text-[#EE1C25] rounded-2xl mb-4 shadow-sm border border-red-100/50">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-extrabold font-heading text-[#171717] mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Founders & Mentors Carousel */}
      <MentorCarousel />

      {/* 7. Placement Journey Cards */}
      <PlacementJourney />

      {/* 8. FAQ Accordion Layer */}
      <FAQAccordion />

      {/* 9. Minimalist Registration Form */}
      <RegistrationForm />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating CTA */}
      <a
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 active:scale-95 hover:rotate-[8deg] transition-all duration-200 z-[1000]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </main>
  );
}
