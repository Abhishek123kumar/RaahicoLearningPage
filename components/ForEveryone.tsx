'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Package,
  IndianRupee,
  MapPin,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Calendar,
  Wallet,
  Award,
  ArrowRight,
  Check,
  Sparkles,
  Bike,
  Car,
} from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const customerBenefits = [
  {
    icon: Package,
    title: 'Hyperlocal Delivery',
    description: 'Perfect for packages within your city. From document to large parcels.',
  },
  {
    icon: IndianRupee,
    title: '50-70% Cheaper',
    description: 'Pay only for the route distance. No premium courier charges.',
  },
  {
    icon: Clock,
    title: 'Same-Day Delivery',
    description: 'Often within hours. Same route means faster arrival.',
  },
  {
    icon: MapPin,
    title: 'Live GPS Tracking',
    description: 'Watch your package move in real-time on the map.',
  },
  {
    icon: Shield,
    title: 'Verified Partners',
    description: 'Every delivery partner is KYC verified with background checks.',
  },
  {
    icon: Award,
    title: 'Trust Score',
    description: 'See ratings and trust scores before choosing a partner.',
  },
];

const partnerBenefits = [
  {
    icon: IndianRupee,
    title: 'Earn on Your Route',
    description: 'Make money while travelling routes you already take daily.',
  },
  {
    icon: TrendingUp,
    title: 'Weekly Earnings',
    description: 'Average partners earn ₹3,000-8,000 per month part-time.',
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'No commitments. Accept deliveries when it suits you.',
  },
  {
    icon: Users,
    title: 'Zero Extra Trips',
    description: 'No detours required. Deliver on your existing route.',
  },
  {
    icon: Wallet,
    title: 'Weekly Payouts',
    description: 'Get paid directly to your bank account every week.',
  },
  {
    icon: Award,
    title: 'Performance Bonuses',
    description: 'Top-rated partners earn extra rewards and priority access.',
  },
];

const earningsData = [
  { trips: 2, earnings: '₹600-1,200' },
  { trips: 5, earnings: '₹1,500-3,000' },
  { trips: 10, earnings: '₹3,000-6,000' },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [spring, value, isInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="font-bold">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default function ForEveryone() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState<'customer' | 'partner'>('customer');

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-surface overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={scrollReveal}
          initial="offscreen"
          animate={isInView ? 'onscreen' : 'offscreen'}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
            For Everyone
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            One Platform, <span className="text-primary">Two Ways</span> to Win
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Whether you need to send a package or want to earn while travelling, Raahico has something for you.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-card border border-gray-100">
            <button
              onClick={() => setActiveTab('customer')}
              className={`relative px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'customer'
                  ? 'text-white'
                  : 'text-secondary-600 hover:text-secondary-800'
              }`}
            >
              {activeTab === 'customer' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Package className="w-5 h-5" />
                For Customers
              </span>
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              className={`relative px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'partner'
                  ? 'text-white'
                  : 'text-secondary-600 hover:text-secondary-800'
              }`}
            >
              {activeTab === 'partner' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                For Partners
              </span>
            </button>
          </div>
        </motion.div>

        {/* Content Panels */}
        <div className="relative min-h-[500px]">
          {/* Customers Panel */}
          <motion.div
            initial={false}
            animate={{
              opacity: activeTab === 'customer' ? 1 : 0,
              x: activeTab === 'customer' ? 0 : -20,
              pointerEvents: activeTab === 'customer' ? 'auto' : 'none',
            }}
            transition={{ duration: 0.3 }}
            className={activeTab === 'customer' ? 'relative' : 'absolute inset-0'}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Visual */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="relative order-2 lg:order-1"
              >
                <div className="relative bg-gradient-to-br from-accent to-white rounded-3xl p-8 shadow-card">
                  {/* Phone mockup */}
                  <div className="relative w-64 mx-auto">
                    <div className="bg-secondary-900 rounded-[2.5rem] p-2 shadow-elevated">
                      <div className="bg-white rounded-[2rem] overflow-hidden">
                        {/* Status bar */}
                        <div className="bg-surface px-4 py-2 flex justify-between items-center text-xs text-secondary-500">
                          <span>9:41</span>
                          <div className="flex gap-1">
                            <div className="w-4 h-2 bg-secondary-300 rounded-sm" />
                            <div className="w-4 h-2 bg-secondary-300 rounded-sm" />
                            <div className="w-6 h-3 bg-primary rounded-sm" />
                          </div>
                        </div>
                        {/* App content */}
                        <div className="p-4 space-y-4">
                          <div className="text-center">
                            <p className="text-xs text-secondary-500">Your delivery is</p>
                            <p className="text-2xl font-bold text-primary">On the way</p>
                          </div>
                          {/* Progress */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-secondary-800">Picked up</p>
                                <p className="text-xs text-secondary-500">10:30 AM</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse">
                                <Bike className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-secondary-800">In transit</p>
                                <p className="text-xs text-primary">ETA: 15 mins</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 opacity-40">
                              <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                                <MapPin className="w-4 h-4 text-secondary-400" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-secondary-600">Delivered</p>
                                <p className="text-xs text-secondary-400">Pending</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="order-1 lg:order-2"
              >
                <motion.div variants={staggerItem} className="mb-8">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
                    Send packages affordably & safely
                  </h3>
                  <p className="text-secondary-600">
                    Perfect for documents, parcels, gifts, and anything that needs to reach someone on your route.
                  </p>
                </motion.div>

                <div className="grid gap-4">
                  {customerBenefits.slice(0, 4).map((benefit, idx) => (
                    <motion.div
                      key={benefit.title}
                      variants={staggerItem}
                      className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-800 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-secondary-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={staggerItem} className="mt-8">
                  <Link
                    href="#download"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Download the app
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Partners Panel */}
          <motion.div
            initial={false}
            animate={{
              opacity: activeTab === 'partner' ? 1 : 0,
              x: activeTab === 'partner' ? 0 : 20,
              pointerEvents: activeTab === 'partner' ? 'auto' : 'none',
            }}
            transition={{ duration: 0.3 }}
            className={activeTab === 'partner' ? 'relative' : 'absolute inset-0'}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Earnings Calculator */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary to-primary-600 rounded-3xl p-8 text-white shadow-elevated">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Potential Earnings</p>
                      <p className="text-2xl font-bold">Monthly Estimate</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {earningsData.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 bg-white/10 rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <Car className="w-5 h-5 opacity-60" />
                          <span className="text-white/90">
                            {item.trips} trips/week
                          </span>
                        </div>
                        <span className="text-lg font-bold">{item.earnings}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                      Top partners earn up to ₹12,000/month
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right - Benefits */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={staggerItem} className="mb-8">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
                    Turn your commute into cash
                  </h3>
                  <p className="text-secondary-600">
                    Already travelling? Why not earn on the way? No extra trips, no extra fuel costs.
                  </p>
                </motion.div>

                <div className="grid gap-4">
                  {partnerBenefits.slice(0, 4).map((benefit, idx) => (
                    <motion.div
                      key={benefit.title}
                      variants={staggerItem}
                      className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-800 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-secondary-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={staggerItem} className="mt-8">
                  <Link
                    href="/partner"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
                  >
                    Become a Partner
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
