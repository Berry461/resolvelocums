import { AboutHeroSection } from '@/components/AboutHeroSection';
import AboutContent from '@/components/AboutContent';
import LeadershipAvatars from '@/components/LeadershipAvatars';

export default function AboutPage() {
  return (
    <div className="relative">
      <AboutHeroSection title="//// ABOUT" />
      <AboutContent />
      <LeadershipAvatars />
    </div>
  );
}