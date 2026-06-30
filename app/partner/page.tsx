'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  IndianRupee,
  Calendar,
  Wallet,
  Award,
  TrendingUp,
  Users,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Bike,
  Car,
  Bus,
  Sparkles,
  Zap,
} from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const benefits = [
  {
    icon: IndianRupee,
    title: 'Earn on Your Route',
    description: 'Make money while travelling routes you already take daily. No extra trips, no extra fuel.',
    color: 'bg-green-500',
  },
  {
    icon: TrendingUp,
    title: 'Weekly Earnings',
    description: 'Average partners earn ₹3,000-8,000 per month part-time. Top performers earn even more.',
    color: 'bg-blue-500',
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'No commitments. No minimum hours. Accept deliveries when it suits your schedule.',
    color: 'bg-purple-500',
  },
  {
    icon: Wallet,
    title: 'Weekly Payouts',
    description: 'Get paid directly to your bank account every Monday. No waiting, no hassle.',
    color: 'bg-orange-500',
  },
  {
    icon: Users,
    title: 'Zero Extra Trips',
    description: 'Only receive requests on routes you\'re already travelling. No detours.',
    color: 'bg-teal-500',
  },
  {
    icon: Award,
    title: 'Performance Bonuses',
    description: 'Top-rated partners unlock exclusive rewards, priority matching, and bonus earnings.',
    color: 'bg-amber-500',
  },
];

const vehicleTypes = [
  { icon: Bike, label: 'Bike', description: 'Perfect for quick deliveries', color: 'text-orange-500' },
  { icon: Car, label: 'Car', description: 'Ideal for larger packages', color: 'text-blue-500' },
  { icon: Bus, label: 'Public Transport', description: 'Travel while commuting', color: 'text-purple-500' },
];

const steps = [
  {
    number: '01',
    title: 'Download & Apply',
    description: 'Download the Raahico app and complete your profile with basic details.',
  },
  {
    number: '02',
    title: 'KYC Verification',
    description: 'Submit your Aadhaar and PAN for quick verification (24-48 hours).',
  },
  {
    number: '03',
    title: 'Set Your Routes',
    description: 'Tell us the routes you travel regularly. We\'ll match you with packages.',
  },
  {
    number: '04',
    title: 'Start Earning',
    description: 'Accept delivery requests on your route and start earning immediately.',
  },
];

const earnings = [
  { trips: 2, weekly: '₹600-1,200', monthly: '₹2,400-4,800' },
  { trips: 5, weekly: '₹1,500-3,000', monthly: '₹6,000-12,000' },
  { trips: 10, weekly: '₹3,000-6,000', monthly: '₹12,000-24,000' },
];

export default function PartnerPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-white to-white" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isHeroInView ? 'visible' : 'hidden'}
          className="relative max-w-7xl mx-auto px-6 lg:px-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Partner Program</span>
              </motion.div>

              <motion.h1
                variants={staggerItem}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight"
              >
                Turn Your Commute
                <br />
                <span className="text-primary">Into Cash</span>
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="text-lg text-secondary-600 mb-8 max-w-lg mx-auto lg:mx-0"
              >
                Already travelling? Why not earn on the way? Join thousands of verified delivery partners making money on their daily routes.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <motion.a
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="#apply"
                  className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/25"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#earnings"
                  className="flex items-center gap-2 px-8 py-4 bg-white text-secondary-700 font-medium rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition-colors"
                >
                  See Earnings
                </motion.a>
              </motion.div>
            </div>

            {/* Vehicle Types */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-elevated border border-gray-100">
                <h3 className="font-heading text-xl font-bold text-secondary-900 mb-6 text-center">
                  Any Vehicle Works
                </h3>
                <div className="grid gap-6">
                  {vehicleTypes.map((type, idx) => (
                    <motion.div
                      key={type.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className="flex items-center gap-6 p-5 bg-surface rounded-2xl"
                    >
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <type.icon className={`w-8 h-8 ${type.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 text-lg">{type.label}</h4>
                        <p className="text-secondary-600">{type.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-xl text-center">
                  <p className="text-sm text-secondary-600">
                    <span className="font-semibold text-primary">No vehicle requirements.</span>
                    <br />
                    Even public transport commuters can deliver small packages!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={scrollReveal}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Why Partner with Raahico?
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Join a platform that respects your time and rewards your effort.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="p-6 bg-surface rounded-2xl border border-gray-100 hover:shadow-card transition-all"
              >
                <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Earnings Section */}
      <section id="earnings" className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={scrollReveal}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
              Earnings
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Potential Earnings
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Your earnings depend on how often you travel. Here&apos;s a realistic breakdown.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-elevated"
            >
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Deliveries/Week</th>
                      <th className="px-6 py-4 text-left font-semibold">Weekly Earnings</th>
                      <th className="px-6 py-4 text-left font-semibold">Monthly Earnings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {earnings.map((row, idx) => (
                      <motion.tr
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-5">
                          <span className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <span className="font-bold text-primary">{row.trips}</span>
                            </div>
                            <span className="text-secondary-700">deliveries</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 font-semibold text-secondary-900">{row.weekly}</td>
                        <td className="px-6 py-5 font-bold text-primary text-lg">{row.monthly}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-accent border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-sm text-secondary-600">
                    <span className="font-semibold text-secondary-900">Bonus tip:</span> Peak hours (morning/evening commute) have 1.5x earning potential. Top partners also unlock exclusive high-value deliveries.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section id="apply" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={scrollReveal}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
              Get Started
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              How to Become a Partner
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Simple process. Start earning within 48 hours of verification.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="relative"
              >
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                <div className="bg-surface rounded-2xl p-6 border border-gray-100 hover:shadow-card transition-all h-full">
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold mb-4 shadow-lg shadow-primary/20">
                    {step.number}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-primary to-primary-600 rounded-3xl">
              <div className="text-white text-center sm:text-left">
                <h3 className="font-heading text-xl font-bold mb-1">Ready to start earning?</h3>
                <p className="text-white/80">Download the app and apply today.</p>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#download"
                className="flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-xl shadow-lg"
              >
                Download App
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
                Requirements
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                What You Need
              </h2>
              <p className="text-secondary-600 mb-8">
                Minimal requirements. Most everyday commuters already qualify.
              </p>

              <div className="space-y-4">
                {[
                  'Valid Aadhaar Card',
                  'Valid PAN Card',
                  'Smartphone with internet',
                  'Bank account for payouts',
                  '18+ years of age',
                ].map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-secondary-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-elevated border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-secondary-900 mb-4">
                Safety & Trust
              </h3>
              <p className="text-secondary-600 mb-6">
                Verification is mandatory for both partners and customers. This creates a trusted community where everyone feels safe.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'KYC Verified', value: '100%' },
                  { label: 'Trust Score', value: '4.8+' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-surface rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-secondary-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
