import { Hero } from './home/Hero';
import { SocialProof } from './home/SocialProof';
import { Hook } from './home/Hook';
import { HowItWorks } from './home/HowItWorks';
import { GamesShowcase } from './home/GamesShowcase';
import { FeaturedGame } from './home/FeaturedGame';
import { PricingSection } from './home/PricingSection';
import { Testimonials } from './home/Testimonials';
import { GiftSection } from './home/GiftSection';
import { FAQ } from './home/FAQ';
import { FinalCTA } from './home/FinalCTA';
import { TemplateShowcase } from './home/TemplateShowcase';
import { CoupleGoalsFeed } from '../components/ui/CoupleGoalsFeed';
import { RoohLetter } from '../components/ui/RoohLetter';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SocialProof />
      <Hook />
      <HowItWorks />
      <FeaturedGame />
      <GamesShowcase />
      <TemplateShowcase />
      <GiftSection />
      <PricingSection />
      <Testimonials />
      <CoupleGoalsFeed />
      <FAQ />
      <RoohLetter />
      <FinalCTA />
    </div>
  );
}
