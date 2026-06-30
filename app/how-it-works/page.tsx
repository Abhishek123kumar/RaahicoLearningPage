'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DownloadCTA from '@/components/DownloadCTA';
import {
  Smartphone,
  Search,
  UserCheck,
  Package,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Download,
  Sparkles,
} from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const senderSteps = [
  {
    number: '01',
    title: 'Open App & Request',
    description: 'Open the Raahico app, enter pickup and drop locations, and describe your package size and type.',
    icon: Smartphone,
  },
  {
    number: '02',
    title: 'Get Instant Matches',
    description: 'Our algorithm finds verified partners traveling your exact route. See their profiles and ratings.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Choose Your Partner',
    description: 'Review ratings, trust scores, and past deliveries. Accept the partner you feel comfortable with.',
    icon: UserCheck,
  },
  {
    number: '04',
    title: 'Quick Pickup',
    description: 'Partner arrives at your location. Simple handoff with photo verification of the package.',
    icon: Package,
  },
  {
    number: '05',
    title: 'Track Live',
    description: 'Watch your package move on the map in real-time. Get updates at every checkpoint.',
    icon: MapPin,
  },
  {
    number: '06',
    title: 'Delivery Confirmed',
    description: 'Package reaches destination. Receiver confirms with photo and OTP. Rate your experience.',
    icon: CheckCircle2,
  },
];

const partnerSteps = [
  { number: '01', title: 'Set Your Route', description: 'Tell us where you travel regularly.' },
  { number: '02', title: 'Get Notified', description: 'Receive delivery requests on your route.' },
  { number: '03', title: 'Accept & Pickup', description: 'Collect package at your convenience.' },
  { number: '04', title: 'Deliver & Earn', description: 'Drop off and get paid. Easy.' },
];

export default function HowItWorksPage() {
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
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple Process</span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6"
          >
            How Raahico Works
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg text-secondary-600 max-w-2xl mx-auto"
          >
            From package pickup to delivery in just a few taps. Send packages faster, cheaper, and with complete peace of mind.
          </motion.p>
        </motion.div>
      </section>

      {/* Sender Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={scrollReveal}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              For <span className="text-primary">Senders</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Six simple steps to send your package on its way.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/20 -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-0">
              {senderSteps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative lg:flex items-center ${
                    idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${idx % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <div className="bg-surface rounded-2xl p-6 border border-gray-100 inline-block">
                      <span className="text-sm text-primary font-medium mb-2 block">Step {step.number}</span>
                      <h3 className="font-heading text-xl font-bold text-secondary-900 mb-2">{step.title}</h3>
                      <p className="text-secondary-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Mobile icon */}
                  <div className="lg:hidden w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Steps */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={scrollReveal}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              For <span className="text-primary">Delivery Partners</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Already travelling? Here is how to earn on your route.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerSteps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  {idx < partnerSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center h-full">
                    <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold mx-auto mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-heading font-semibold text-secondary-900 mb-2">{step.title}</h3>
                    <p className="text-secondary-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partner CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="/partner"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary to-primary-600 rounded-3xl p-8 lg:p-10 text-white text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
                Average Delivery: Under 2 Hours
              </h3>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Same-route delivery means packages arrive within hours, not days. During peak commute times, delivery can be even faster.
              </p>
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-xl"
              >
                <Download className="w-5 h-5" />
                Download the App
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <DownloadCTA />
      <Footer />
    </main>
  );
}
