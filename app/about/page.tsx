'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Target,
  Users,
  MapPin,
  Leaf,
  Globe,
  Heart,
  Award,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import DownloadCTA from '@/components/DownloadCTA';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const values = [
  {
    icon: Users,
    title: 'Community First',
    description: 'We believe in the power of community. Every delivery partner is a neighbor, not just a provider.',
  },
  {
    icon: Target,
    title: 'Efficiency',
    description: 'Unused capacity is wasted opportunity. We unlock value hidden in everyday travel.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Zero extra trips means zero extra emissions. Better for the planet, better for everyone.',
  },
  {
    icon: Heart,
    title: 'Trust',
    description: 'Verification, ratings, and transparency build the trust that makes our community thrive.',
  },
];

const timeline = [
  { year: '2024', event: 'Raahico founded in Bengaluru', milestone: 'The Beginning' },
  { year: '2024', event: '1,000+ deliveries completed', milestone: 'Early Traction' },
  { year: '2025', event: '5,000+ verified partners on board', milestone: 'Community Growth' },
  { year: '2025', event: 'Expanding to 4 more cities', milestone: 'National Expansion' },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-white to-white" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isHeroInView ? 'visible' : 'hidden'}
          className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center"
        >
          <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Raahico</span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6"
          >
            Building India&apos;s Largest
            <br />
            <span className="text-primary">Decentralized Logistics Network</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg text-secondary-600 max-w-2xl mx-auto"
          >
            We&apos;re on a mission to transform how packages move within cities. By connecting people already travelling with people who need to send, we create value for everyone while reducing emissions.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Every day, millions of Indians travel from point A to point B. Their vehicles, bags, and pockets have unused space. Meanwhile, millions of packages need to move across the same routes.
              </p>
              <p className="text-lg text-secondary-600 mb-8">
                Raahico bridges this gap. We&apos;re creating a community where every traveller can become a delivery partner, every package finds the fastest route, and every delivery costs less while earning someone on the way.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: 'Decentralized', desc: 'Community-powered' },
                  { icon: Leaf, label: 'Eco-friendly', desc: 'Zero extra emissions' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900">{item.label}</p>
                      <p className="text-sm text-secondary-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-primary-700 rounded-3xl p-8 lg:p-10 text-white shadow-elevated">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>

                  <blockquote className="text-xl lg:text-2xl font-heading font-medium mb-6 leading-relaxed">
                    &quot;People travel every day. We simply harness that unused capacity to create India&apos;s most efficient hyperlocal delivery network.&quot;
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="font-bold text-lg">R</span>
                    </div>
                    <div>
                      <p className="font-semibold">Raahico Team</p>
                      <p className="text-white/70 text-sm">Bengaluru, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={scrollReveal}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={scrollReveal}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              From an idea to India&apos;s fastest-growing community logistics platform.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />

              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex gap-6 mb-8 last:mb-0"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 z-10">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-sm text-primary font-medium mb-1">{item.year}</p>
                    <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-1">
                      {item.milestone}
                    </h3>
                    <p className="text-secondary-600">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50K+', label: 'Deliveries' },
              { value: '5K+', label: 'Partners' },
              { value: '10+', label: 'Areas Covered' },
              { value: '4.9', label: 'Average Rating' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <p className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DownloadCTA />
      <Footer />
    </main>
  );
}
