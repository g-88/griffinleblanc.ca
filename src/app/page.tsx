import { FeaturedWork } from "@/components/featured-work";
import { HeroSection } from "@/components/hero-section";
import { OperatingStyle } from "@/components/operating-style";
import { ProofStrip } from "@/components/proof-strip";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProofStrip />
        <FeaturedWork />
        <OperatingStyle />
      </main>
      <SiteFooter />
    </>
  );
}
