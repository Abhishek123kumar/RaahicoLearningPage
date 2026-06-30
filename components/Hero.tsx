'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  Download,
  Play,
  MapPin,
  Package,
  Bike,
  Car,
  Bus,
  ArrowRight,
  Star,
  Shield,
  Clock,
  TrendingUp,
} from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, heroTextItem } from '@/lib/animations';

const floatingElements = [
  { icon: Package, delay: 0, x: '5%', y: '15%', rotate: -10, size: 'lg' },
  { icon: Bike, delay: 0.5, x: '85%', y: '20%', rotate: 15, size: 'md' },
  { icon: Car, delay: 1, x: '10%', y: '70%', rotate: -5, size: 'lg' },
  { icon: MapPin, delay: 1.5, x: '80%', y: '65%', rotate: 10, size: 'sm' },
];

const stats = [
  { value: '5000+', label: 'Active Partners', icon: TrendingUp },
  { value: '50K+', label: 'Deliveries', icon: Package },
  { value: '4.9', label: 'App Rating', icon: Star },
  { value: '<2h', label: 'Avg. Delivery', icon: Clock },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-accent/30 via-white to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Floating blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent rounded-full blur-3xl opacity-60" />

        {/* Animated dots */}
        <div className="absolute inset-0 bg-dots opacity-30" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingElements.map((el, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + el.delay, duration: 0.8 }}
            className="absolute"
            style={{ left: el.x, top: el.y }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [el.rotate, el.rotate + 5, el.rotate],
              }}
              transition={{
                duration: 4 + idx,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: el.delay,
              }}
              className={`relative ${
                el.size === 'lg' ? 'w-20 h-20' : el.size === 'md' ? 'w-16 h-16' : 'w-12 h-12'
              }`}
            >
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl" />
              <div className="relative w-full h-full bg-white rounded-2xl shadow-card border border-primary/10 flex items-center justify-center">
                <el.icon className={`text-primary ${el.size === 'lg' ? 'w-8 h-8' : el.size === 'md' ? 'w-6 h-6' : 'w-5 h-5'}`} />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16 lg:pt-36 lg:pb-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">
                India&apos;s Decentralized Logistics Network
              </span>
            </motion.div>

            {/* Hero Heading */}
            <motion.h1
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-900 leading-tight mb-6"
            >
              <motion.span variants={heroTextItem} className="block">
                Deliver Smarter.
              </motion.span>
              <motion.span variants={heroTextItem} className="block">
                <span className="bg-gradient-to-r from-primary via-primary-600 to-primary-700 bg-clip-text text-transparent">
                  Together.
                </span>
              </motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-secondary-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Raahico connects people already travelling with people who need to send packages
              safely on the same route. Fast, affordable, community-powered delivery.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <motion.div variants={staggerItem}>
                <Link
                  href="#download"
                  className="group flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-2xl shadow-elevated hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Download className="w-5 h-5" />
                  <span>Download App</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Link
                  href="/partner"
                  className="group flex items-center gap-3 px-8 py-4 bg-white text-secondary-800 font-semibold rounded-2xl border-2 border-secondary-200 hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-card"
                >
                  <span>Become a Partner</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-secondary-600">
                        {String.fromCharCode(65 + i)}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-secondary-600">
                  <span className="font-semibold text-secondary-800">5,000+</span> delivery partners
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-sm text-secondary-600 ml-1">
                  <span className="font-semibold text-secondary-800">4.9</span> rating
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main Hero Illustration */}
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-3xl transform scale-110" />

              {/* Main card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative bg-white rounded-3xl shadow-elevated p-8 border border-gray-100"
              >
                {/* Route visualization */}
                <div className="relative h-80 bg-gradient-to-br from-accent to-white rounded-2xl overflow-hidden">
                  {/* Map background */}
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0F9D58" strokeWidth="0.5" opacity="0.3" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* Animated route line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                    <motion.path
                      d="M 80 220 Q 150 180 200 150 T 320 80"
                      fill="none"
                      stroke="#0F9D58"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}
                    />
                    {/* Dotted overlay */}
                    <motion.path
                      d="M 80 220 Q 150 180 200 150 T 320 80"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="8 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.5, ease: 'easeInOut', delay: 1.5 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#16A34A" />
                        <stop offset="100%" stopColor="#0F9D58" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Start point */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                    className="absolute left-12 bottom-14"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-lg shadow-md text-xs font-medium text-secondary-700">
                        Pickup Point
                      </div>
                    </div>
                  </motion.div>

                  {/* Delivery partner moving */}
                  <motion.div
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{
                      x: [0, 100, 180],
                      y: [0, -30, -50],
                      opacity: 1,
                    }}
                    transition={{
                      duration: 3,
                      delay: 1.5,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="absolute left-16 bottom-16"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 border-primary"
                    >
                      <Bike className="w-7 h-7 text-primary" />
                    </motion.div>
                  </motion.div>

                  {/* End point */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                    className="absolute right-16 top-16"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-lg shadow-md text-xs font-medium text-secondary-700">
                        Destination
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating package */}
                  <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-primary" />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom stats */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[
                    { label: 'Distance', value: '12 km' },
                    { label: 'Est. Time', value: '35 min' },
                    { label: 'Cost', value: '₹45' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      className="text-center p-3 bg-accent/50 rounded-xl"
                    >
                      <p className="text-xs text-secondary-500 mb-1">{stat.label}</p>
                      <p className="font-semibold text-secondary-800">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-4 p-4 lg:p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-bold text-secondary-900">{stat.value}</p>
                  <p className="text-sm text-secondary-500">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-secondary-300 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
