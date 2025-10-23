import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhySQLGuruSection from '@/components/WhySQLGuruSection';
import CrisisSection from '@/components/CrisisSection';
import ApproachSection from '@/components/ApproachSection';
import CoreInnovationsSection from '@/components/CoreInnovationsSection';
import WhoBenefitsSection from '@/components/WhoBenefitsSection';
import HowWorksSection from '@/components/HowWorksSection';
import RoadmapSection from '@/components/RoadmapSection';
import TeamSection from '@/components/TeamSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900 text-white">
      <Navigation />
      <HeroSection />
      <WhySQLGuruSection />
      <CrisisSection />
      <ApproachSection />
      <CoreInnovationsSection />
      <WhoBenefitsSection />
      <HowWorksSection />
      <RoadmapSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
}