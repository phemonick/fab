import { Hero } from '@/components/Hero';
import { StatStrip } from '@/components/sections/StatStrip';
import { AboutStrip } from '@/components/sections/AboutStrip';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { SectorsTeaser } from '@/components/sections/SectorsTeaser';
import { Pillars } from '@/components/sections/Pillars';
import { GovernmentCapability } from '@/components/sections/GovernmentCapability';
import { ClosingCTA } from '@/components/sections/ClosingCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatStrip />
      <FeaturedProjects />
      <AboutStrip />
      <SectorsTeaser />
      <Pillars />
      <GovernmentCapability />
      <ClosingCTA />
    </>
  );
}
