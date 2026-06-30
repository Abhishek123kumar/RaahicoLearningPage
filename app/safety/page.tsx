'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DownloadCTA from '@/components/DownloadCTA';
import {
  Shield,
  UserCheck,
  FileCheck,
  Camera,
  Star,
  Phone,
  AlertTriangle,
  Lock,
  BadgeCheck,
  Eye,
  HeadphonesIcon,
  CheckCircle2,
  Fingerprint,
  Smartphone,
  MapPin,
} from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const safetyFeatures = [
  {
    icon: UserCheck,
    title: 'KYC Verification',
    description: 'Every delivery partner completes government ID verification (Aadhaar and PAN) before onboarding. No verification, no deliveries.',
    color: 'bg-blue-500',
  },
  {
    icon: FileCheck,
    title: 'Background Checks',
    description: 'Automated background checks verify identity and flag any red flags. Regular re-verification ensures continued trust.',
    color: 'bg-indigo-500',
  },
  {
    icon: Camera,
    title: 'Package Verification',
    description: 'Photos at pickup and delivery create an immutable record. Both sender and receiver can verify package condition.',
    color: 'bg-purple-500',
  },
  {
    icon: Star,
    title: 'Trust Score System',
    description: 'Two-way ratings build community trust. Poor performers are automatically flagged and may be suspended.',
    color: 'bg-amber-500',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: '256-bit encryption for all transactions. Partners receive direct bank transfers with no manual handling.',
    color: 'bg-green-500',
  },
  {
    icon: Eye,
    title: 'Real-time Monitoring',
    description: '24/7 system monitors for anomalies like route deviations, significant delays, or suspicious activity.',
    color: 'bg-teal-500',
  },
  {
    icon: MapPin,
    title: 'Live GPS Tracking',
    description: 'Watch your package move in real-time. Know exactly where it is at any moment during transit.',
    color: 'bg-rose-500',
  },
  {
    icon: Fingerprint,
    title: 'Delivery Confirmation',
    description: 'Photo proof and OTP verification at drop ensure package reaches the right person.',
    color: 'bg-orange-500',
  },
];

const verificationSteps = [
  {
    step: '01',
    icon: Smartphone,
    title: 'Apply with ID Proof',
    description: 'Partner submits Aadhaar and PAN cards through secure in-app upload.',
  },
  {
    step: '02',
    icon: FileCheck,
    title: 'Automated Verification',
    description: 'System validates IDs with government databases (24-48 hours).',
  },
  {
    step: '03',
    icon: BadgeCheck,
    title: 'Background Check',
    description: 'Cross-reference with public records for any red flags.',
  },
  {
    step: '04',
    icon: CheckCircle2,
    title: 'Verification Badge',
    description: 'Verified partner receives badge and can start delivering.',
  },
];

export default function SafetyPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-white to-white" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isHeroInView ? 'visible' : 'hidden'}
          className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center"
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6"
          >
            <Shield className="w-10 h-10 text-primary" />
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6"
          >
            Your Safety is Our
            <br />
            <span className="text-primary">Top Priority</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg text-secondary-600 max-w-2xl mx-auto"
          >
            Every package is protected by multiple layers of security and verification. We have built India&apos;s safest community logistics platform.
          </motion.p>
        </motion.div>
      </section>

      {/* Trust Stats */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '100%', label: 'Partners Verified' },
              { value: '4.9', label: 'Average Trust Score' },
              { value: '₹5,000', label: 'Insurance per Package' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center bg-surface rounded-2xl p-6 border border-gray-100"
              >
                <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-secondary-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={scrollReveal}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
              Partner Verification
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Rigorous Verification Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Every partner goes through a multi-step verification before they can carry a single package.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {verificationSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <step.icon className="w-5 h-5 text-primary" />
                          <h3 className="font-heading font-semibold text-secondary-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-secondary-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
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
              Safety at Every Step
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              From onboarding to delivery, we have implemented multiple safety measures.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {safetyFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-surface rounded-2xl p-6 border border-gray-100 hover:shadow-card transition-all"
              >
                <div
                  className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-secondary-900 to-secondary-800 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="font-heading text-2xl font-bold mb-2">24/7 Emergency Support</h3>
                  <p className="text-gray-300">
                    Report issues anytime. Our safety team responds within minutes.
                  </p>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-white text-secondary-900 font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5" />
                Contact Support
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
                Protection
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Every Package is Insured
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                We understand that your packages matter. That&apos;s why every delivery is automatically insured up to ₹5,000 at no extra cost to you.
              </p>
              <div className="space-y-4">
                {[
                  'Automatic coverage for every delivery',
                  'Up to ₹5,000 insurance value',
                  'Quick claim process within 24 hours',
                  'Full refund plus compensation',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-secondary-700">{item}</span>
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
              <div className="bg-gradient-to-br from-primary/10 to-accent rounded-3xl p-8 lg:p-10 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-12 h-12 text-primary" />
                </div>
                <p className="text-5xl font-bold text-primary mb-2">₹5,000</p>
                <p className="text-secondary-600 font-medium">Insurance Coverage per Package</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <DownloadCTA />
      <Footer />
    </main>
  );
}
