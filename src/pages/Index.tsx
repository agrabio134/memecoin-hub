import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/ThinkNavbar";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { TokenomicsSection } from "@/components/TokenomicsSection";
import { HowToBuySection } from "@/components/HowToBuySection";
import { CommunitySection } from "@/components/CommunitySection";
import { ThinkFooter } from "@/components/ThinkFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Marquee />
      <Navbar />
      <HeroSection />
      <StorySection />
      <TokenomicsSection />
      <HowToBuySection />
      <CommunitySection />
      <ThinkFooter />
    </div>
  );
};

export default Index;
