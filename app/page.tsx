"use client";

import  Hero  from '@/components/website/home/hero';
import  { HowItWorksSection }  from '@/components/website/home/howitworks';
import InspiringBooksSection from '@/components/website/home/inspiringbooks';
import   { DreamBookSection }   from '@/components/website/home/storybegan';



export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorksSection />
      <DreamBookSection />
      <InspiringBooksSection />
    </div>
  );
}
