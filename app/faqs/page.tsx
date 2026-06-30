'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DownloadCTA from '@/components/DownloadCTA';
import { ChevronDown, HelpCircle, MessageCircle, Search } from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const allFaqs = [
  {
    category: 'Getting Started',
    icon: '1',
    questions: [
      {
        q: 'What is Raahico?',
        a: 'Raahico is a community logistics platform that connects people who are already travelling with people who need to send packages on the same route. Think of it as ride-sharing for packages - faster, cheaper, and more community-driven than traditional courier services.',
      },
      {
        q: 'Is Raahico available in my city?',
        a: 'We are currently live in Bengaluru, covering all major tech corridors including Mahadevapura, Marathahalli, Bellandur, HSR Layout, Electronic City, Indiranagar, Whitefield, and more. We are expanding to Hyderabad, Chennai, Pune, and Delhi NCR soon.',
      },
      {
        q: 'Is Raahico free to use?',
        a: 'Yes, downloading and using the app is completely free with no ads. You only pay when you send a package, and you earn when you deliver as a partner. No subscription fees, no hidden charges.',
      },
    ],
  },
  {
    category: 'For Customers',
    icon: '2',
    questions: [
      {
        q: 'How do I send a package?',
        a: 'Download the app, create an account, enter pickup and drop locations, describe your package (size, weight, contents), and submit your request. Our algorithm matches you with verified partners traveling that route. Review their profile, accept, and they will pick up your package.',
      },
      {
        q: 'How much does delivery cost?',
        a: 'Pricing is based on route distance, not weight or package size. A typical 10-15 km delivery costs ₹40-80, compared to ₹150+ with traditional couriers. You see the price upfront before confirming. No surge pricing, no hidden fees.',
      },
      {
        q: 'How fast is delivery?',
        a: 'Since packages travel on existing routes, delivery often happens within hours, not days. Same-route packages typically arrive within 2-4 hours during peak commute times. You can track progress in real-time on the map.',
      },
      {
        q: 'What items can I send?',
        a: 'Documents, electronics, clothing, gifts, food items (sealed), e-commerce packages, and most legal items. Prohibited items include hazardous materials, illegal goods, cash, and explosives. Our partners verify package contents at pickup.',
      },
      {
        q: 'What if my package is damaged or lost?',
        a: 'Every delivery is insured up to ₹5,000. Partners take verification photos at pickup and delivery. In case of damage, contact support within 24 hours with photos. We investigate and provide full refund plus compensation where applicable.',
      },
    ],
  },
  {
    category: 'For Delivery Partners',
    icon: '3',
    questions: [
      {
        q: 'How do I become a delivery partner?',
        a: 'Download the app, tap "Become a Partner", submit your Aadhaar and PAN for verification. Complete a quick profile with your regular routes and vehicle type. Approval takes 24-48 hours. Once verified, you can start accepting delivery requests immediately.',
      },
      {
        q: 'Do I need a vehicle?',
        a: 'Not necessarily. While bikes and cars are common, even public transport commuters can deliver small packages. The key is that you travel some route regularly and can safely carry a package.',
      },
      {
        q: 'How much can I earn?',
        a: 'Earnings depend on how many deliveries you accept. A single 10-15 km delivery earns ₹60-150. Active partners doing 5-10 deliveries per week earn ₹3,000-8,000 per month. Top performers earn ₹12,000+ with bonuses.',
      },
      {
        q: 'Do I need to make detours?',
        a: 'No. You only receive requests on routes you are already traveling. Accept only when convenient. We never ask you to go out of your way. That is the whole point - leveraging existing travel.',
      },
      {
        q: 'When do I get paid?',
        a: 'Earnings are transferred to your bank account every Monday. Maintain a rating above 4.5 to unlock faster payouts (same-day for top partners). View your earnings breakdown in the app anytime.',
      },
    ],
  },
  {
    category: 'Safety & Trust',
    icon: '4',
    questions: [
      {
        q: 'How do you verify partners?',
        a: 'Every partner completes KYC verification using Aadhaar and PAN. We conduct automated background checks and verify phone numbers. Only verified partners with valid government ID can carry packages. Profiles show verification badges.',
      },
      {
        q: 'Can I see the partner details before accepting?',
        a: 'Absolutely. When matched, you see the partner\'s name, photo, vehicle type, ratings, number of deliveries completed, and verification status. You can accept or decline based on their profile.',
      },
      {
        q: 'What safety measures are in place?',
        a: 'KYC verification, photo verification at pickup and delivery, real-time GPS tracking, in-app SOS button, 24/7 support, two-way rating system, trust scores, and insurance coverage up to ₹5,000 per package.',
      },
      {
        q: 'What if something goes wrong?',
        a: 'Use the in-app SOS button for immediate help. Our 24/7 support team responds within minutes. All packages are insured. We investigate all complaints and take action against violators, including banning from the platform.',
      },
    ],
  },
  {
    category: 'Technical & App',
    icon: '5',
    questions: [
      {
        q: 'Is the app available on iOS and Android?',
        a: 'Android app is available now on Google Play. iOS app is coming soon - join our waitlist to get notified when it launches.',
      },
      {
        q: 'Does the app work in the background?',
        a: 'Yes. Partners can share location even when the app is in the background, enabling continuous real-time tracking. This requires location permission and helps customers track packages accurately.',
      },
      {
        q: 'How much data does the app use?',
        a: 'Minimal. The app is optimized for low data usage. Typical delivery tracking uses less than 10MB per hour. Location sharing is similarly efficient.',
      },
    ],
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-secondary-900 group-hover:text-primary transition-colors pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-primary' : 'text-gray-400'}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-secondary-600 leading-relaxed pr-8">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const [openFaqs, setOpenFaqs] = useState<Record<string, number | null>>({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleQuestion = (category: string, index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  const filteredFaqs = searchQuery
    ? allFaqs.map((cat) => ({
        ...cat,
        questions: cat.questions.filter(
          (q) =>
            q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.a.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter((cat) => cat.questions.length > 0)
    : allFaqs;

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
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
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6"
          >
            <HelpCircle className="w-8 h-8 text-primary" />
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6"
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg text-secondary-600 max-w-2xl mx-auto mb-8"
          >
            Find answers to common questions about Raahico. Can not find what you are looking for? Contact our support team.
          </motion.p>

          {/* Search */}
          <motion.div variants={staggerItem} className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-secondary-600">No results found for &quot;{searchQuery}&quot;</p>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {filteredFaqs.map((category) => (
                <motion.div
                  key={category.category}
                  variants={staggerItem}
                  className="bg-white rounded-3xl p-6 lg:p-8 shadow-card border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-bold">
                      {category.icon}
                    </div>
                    <h2 className="font-heading text-xl font-bold text-secondary-900">
                      {category.category}
                    </h2>
                  </div>
                  <div>
                    {category.questions.map((item, idx) => (
                      <FAQItem
                        key={idx}
                        question={item.q}
                        answer={item.a}
                        isOpen={openFaqs[category.category] === idx}
                        onToggle={() => toggleQuestion(category.category, idx)}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-surface rounded-3xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-secondary-900">Still have questions?</h3>
                <p className="text-secondary-600 text-sm">Our support team is here to help.</p>
              </div>
            </div>
            <a
              href="/contact"
              className="px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-600 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <DownloadCTA />
      <Footer />
    </main>
  );
}
