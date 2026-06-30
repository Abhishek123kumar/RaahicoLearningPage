'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Truck,
  Clock,
  IndianRupee,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  XCircle,
} from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const problems = [
  {
    icon: IndianRupee,
    title: 'Expensive',
    description: 'Traditional couriers charge premium rates for same-city delivery',
    stat: '₹150+',
    statLabel: 'minimum charge',
  },
  {
    icon: Clock,
    title: 'Slow',
    description: 'Same-day delivery is expensive, next-day takes too long',
    stat: '24-48h',
    statLabel: 'average time',
  },
  {
    icon: AlertTriangle,
    title: 'Inflexible',
    description: 'Fixed pickup windows, faraway drop points, no live tracking',
    stat: '0%',
    statLabel: 'real-time updates',
  },
  {
    icon: Truck,
    title: 'Limited Options',
    description: 'Few hyperlocal options, friends are often unavailable',
    stat: '2-3',
    statLabel: 'major players only',
  },
];

const solutions = [
  {
    icon: IndianRupee,
    title: 'Affordable',
    description: 'Pay only for the route distance, not premium courier rates',
    stat: '50-70%',
    statLabel: 'cost savings',
  },
  {
    icon: Clock,
    title: 'Fast',
    description: 'Same-route delivery means hours, not days',
    stat: '< 2h',
    statLabel: 'avg delivery time',
  },
  {
    icon: CheckCircle2,
    title: 'Flexible',
    description: 'Pickup from your location, track in real-time, instant delivery confirmation',
    stat: '100%',
    statLabel: 'live tracking',
  },
  {
    icon: Truck,
    title: 'Community Network',
    description: 'Thousands of verified partners travelling your route every day',
    stat: '5000+',
    statLabel: 'active partners',
  },
];

export default function ProblemSolution() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 bg-surface overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          variants={scrollReveal}
          initial="offscreen"
          animate={isInView ? 'onscreen' : 'offscreen'}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
            The Challenge
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Sending packages shouldn&apos;t be this hard
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Traditional courier services were built for long-distance, not hyperlocal delivery.
            Here&apos;s what&apos;s wrong with the current system.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {problems.map((problem, idx) => (
            <motion.div
              key={problem.title}
              variants={staggerItem}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-red-100/50 hover:border-red-200 transition-all hover:shadow-card-hover">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary-800 mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-secondary-600 mb-4">{problem.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-red-500">{problem.stat}</span>
                  <span className="text-xs text-secondary-500">{problem.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transformation Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center mb-20"
        >
          <div className="relative">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-elevated">
              <ArrowRight className="w-8 h-8 text-white rotate-90" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-primary/20 rounded-full"
            />
          </div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          variants={scrollReveal}
          initial="offscreen"
          animate={isInView ? 'onscreen' : 'offscreen'}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
            The Solution
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
              Raahico
            </span>{' '}
            changes everything
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            We tap into unused travel capacity. People are already travelling every day.
            We simply connect them with packages going the same way.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((solution, idx) => (
            <motion.div
              key={solution.title}
              variants={staggerItem}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-card-hover hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary-800 mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-secondary-600 mb-4">{solution.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary">{solution.stat}</span>
                  <span className="text-xs text-secondary-500">{solution.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
