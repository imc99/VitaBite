import BenefitsSection from '@/components/sections/BenefitsSection';
import CTASection from '@/components/sections/CTASection';
import FlavorsSection from '@/components/sections/FlavorsSection';
import HeroSection from '@/components/sections/HeroSection';
import ReviewsSection from '@/components/sections/ReviewsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FlavorsSection />
      <ReviewsSection />
      <CTASection />
    </>
  );
}
