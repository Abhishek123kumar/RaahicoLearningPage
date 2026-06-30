'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import ForEveryone from '@/components/ForEveryone';
import Safety from '@/components/Safety';
import Coverage from '@/components/Coverage';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <ForEveryone />
      <Safety />
      <Coverage />
      <Testimonials />
      <FAQ />
      <Contact />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
