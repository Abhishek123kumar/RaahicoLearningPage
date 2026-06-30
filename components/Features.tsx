'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Zap,
  MapPin,
  Shield,
  Clock,
  Navigation,
  Brain,
  Package,
  Star,
  Smartphone,
} from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const features = [
  {
    icon: Zap,
    title: 'Instant Match',
    description: 'Our algorithm finds the best delivery partner travelling your route in seconds.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: MapPin,
    title: 'Live Tracking',
    description: 'Track your package in real-time with GPS accuracy. Know exactly where it is.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    icon: Shield,
    title: 'Verified Users',
    description: 'Every partner goes through KYC verification. Your packages are in safe hands.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    gradient: 'from-primary to-primary-600',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Same-route means same-day. Often within hours, not days.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: Navigation,
    title: 'Background Location',
    description: 'Partners share location even when app is in background for continuous tracking.',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
    gradient: 'from-teal-400 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'Smart Matching',
    description: 'AI-powered matching considers route efficiency, ratings, and delivery history.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
    gradient: 'from-indigo-400 to-violet-500',
  },
  {
    icon: Package,
    title: 'Secure Delivery',
    description: 'Package verification photos at pickup and delivery. Proof of delivery included.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    gradient: 'from-orange-400 to-red-500',
  },
  {
    icon: Star,
    title: 'Ratings & Trust Score',
    description: 'Two-way ratings build trust. Highly-rated partners get priority matching.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    gradient: 'from-amber-400 to-yellow-500',
  },
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-surface overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={scrollReveal}
          initial="offscreen"
          animate={isInView ? 'onscreen' : 'offscreen'}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
            Features
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Built for <span className="text-primary">Speed & Trust</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Every feature designed to make package delivery seamless, safe, and reliable for both senders and delivery partners.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="h-full bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  {/* Decorative blur */}
                  <div
                    className={`absolute -inset-2 bg-gradient-to-br ${feature.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}
                  />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-3xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 lg:mt-24"
        >
          <div className="relative bg-gradient-to-r from-primary to-primary-600 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-center lg:text-left flex-1">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-3">
                  Everything you need in one app
                </h3>
                <p className="text-primary-100 text-lg max-w-xl">
                  From requesting a pickup to tracking your package to rating your delivery partner, all features are just a tap away.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0"
              >
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  Download Now
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
