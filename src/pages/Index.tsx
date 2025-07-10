
import HeroSection from '@/components/HeroSection';
import TestimonialSection from '@/components/TestimonialSection';
import EssentialSkillsSection from '@/components/EssentialSkillsSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import VisualBeforeAfterSection from '@/components/VisualBeforeAfterSection';
import TransformationSection from '@/components/TransformationSection';
import ProductShowcase from '@/components/ProductShowcase';
import BonusSection from '@/components/BonusSection';
import ReadyToStartSection from '@/components/ReadyToStartSection';
import FinalCTA from '@/components/FinalCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TestimonialSection />
      <BeforeAfterSection />
      <EssentialSkillsSection />
      
      <VisualBeforeAfterSection />
      <TransformationSection />
      <ProductShowcase />
      <BonusSection />
      <ReadyToStartSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
