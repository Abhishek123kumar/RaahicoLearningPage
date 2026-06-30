'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Smartphone,
  Search,
  UserCheck,
  Package,
  MapPin,
  CheckCircle2,
  ArrowDown,
  Sparkles,
} from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const steps = [
  {
    number: '01',
    title: 'Request Pickup',
    description: 'Enter pickup and drop locations. Describe your package size and type.',
    icon: Smartphone,
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    number: '02',
    title: 'Instant Matching',
    description: 'Our algorithm matches you with verified partners travelling the same route.',
    icon: Search,
    color: 'bg-indigo-500',
    bgColor: 'bg-indigo-50',
  },
  {
    number: '03',
    title: 'Partner Accepts',
    description: 'Review profiles, ratings, and choose your delivery partner.',
    icon: UserCheck,
    color: 'bg-violet-500',
    bgColor: 'bg-violet-50',
  },
  {
    number: '04',
    title: 'Package Pickup',
    description: 'Partner arrives at your location. Quick handoff with package verification.',
    icon: Package,
    color: 'bg-primary',
    bgColor: 'bg-primary/10',
  },
  {
    number: '05',
    title: 'Live Tracking',
    description: 'Track your package in real-time. Get instant updates at every checkpoint.',
    icon: MapPin,
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
  },
  {
    number: '06',
    title: 'Delivered',
    description: 'Package delivered safely. Rate your experience and earn trust points.',
    icon: CheckCircle2,
    color: 'bg-green-500',
    bgColor: 'bg-green-50',
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={scrollReveal}
          initial="offscreen"
          animate={isInView ? 'onscreen' : 'offscreen'}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6"
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            How Raahico Works
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            From pickup to delivery in just a few taps. Here&apos;s your package&apos;s journey with Raahico.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full" />
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
              className="absolute inset-x-0 top-0 bg-primary rounded-full"
              style={{ originY: 0 }}
            />
          </div>

          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full" />
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute inset-x-0 top-0 bg-primary rounded-full"
              style={{ originY: 0 }}
            />
          </div>

          {/* Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-12 lg:space-y-0"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className={`relative lg:flex items-center ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div
                  className={`lg:w-1/2 ${
                    idx % 2 === 0
                      ? 'lg:pr-16 lg:text-right'
                      : 'lg:pl-16 lg:text-left'
                  } pl-24 lg:pl-0`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="inline-block bg-white rounded-3xl p-8 shadow-card border border-gray-100 hover:shadow-card-hover transition-all"
                  >
                    <span className="text-sm font-medium text-primary mb-2 block">
                      Step {step.number}
                    </span>
                    <h3 className="font-heading text-xl lg:text-2xl font-bold text-secondary-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-secondary-600">{step.description}</p>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    delay: 0.3 + idx * 0.15,
                  }}
                  className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 z-10"
                >
                  <div
                    className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 ring-4 ring-white`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Mobile arrow */}
                {idx < steps.length - 1 && (
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="lg:hidden absolute left-1/2 -translate-x-1/2 -bottom-8 opacity-40"
                  >
                    <ArrowDown className="w-5 h-5 text-primary" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quick Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-20 lg:mt-32 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-accent rounded-2xl">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-secondary-700 font-medium">
              Average delivery time:{' '}
              <span className="text-primary font-bold">Under 2 hours</span> for same-route packages
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
