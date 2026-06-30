'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Raahico?',
        a: 'Raahico is a community logistics platform that connects people who are already travelling with people who need to send packages on the same route. Think of it as ride-sharing for packages.',
      },
      {
        q: 'How is Raahico different from courier services?',
        a: 'Traditional couriers charge premium rates and take 1-3 days for local delivery. Raahico uses unused travel capacity, making it 50-70% cheaper and delivering within hours for same-route packages.',
      },
      {
        q: 'Is Raahico available in my city?',
        a: 'We&apos;re currently live in Bengaluru, covering all major tech corridors. We&apos;re expanding to Hyderabad, Chennai, Pune, and Delhi NCR soon. Join our waitlist to get notified!',
      },
    ],
  },
  {
    category: 'For Customers',
    questions: [
      {
        q: 'How do I send a package?',
        a: 'Download the app, enter pickup and drop locations, describe your package, and submit. Our algorithm will match you with verified partners traveling the same route. Choose your partner, and they&apos;ll pick up your package.',
      },
      {
        q: 'How much does it cost?',
        a: 'You pay based on route distance, not weight or size. A typical 10-15 km route costs ₹40-80, compared to ₹150+ with traditional couriers. No surge pricing, no hidden fees.',
      },
      {
        q: 'How do I track my package?',
        a: 'Once your package is picked up, you can track it in real-time on the map. You&apos;ll get notifications at every milestone: pickup, in-transit updates, and delivery confirmation.',
      },
      {
        q: 'What if my package is damaged?',
        a: 'Every delivery is insured. Partners take verification photos at pickup and delivery. In case of damage, contact support within 24 hours with photos for a full refund and compensation.',
      },
    ],
  },
  {
    category: 'For Partners',
    questions: [
      {
        q: 'How do I become a delivery partner?',
        a: 'Apply through our app with your Aadhaar and PAN card. Complete a quick background verification (24-48 hours), and you&apos;re ready to start earning. No vehicle requirements - bike, car, or public transport all work!',
      },
      {
        q: 'How much can I earn?',
        a: 'Partners typically earn ₹600-1,200 for a single package delivery on a 10-15 km route. Active partners doing 5-10 deliveries per week earn ₹3,000-8,000 monthly on the side.',
      },
      {
        q: 'Do I need to make extra trips?',
        a: 'No! That&apos;s the beauty of Raahico. You only receive requests on routes you&apos;re already traveling. Accept only when convenient. No detours, no extra fuel costs.',
      },
      {
        q: 'When and how do I get paid?',
        a: 'Earnings are transferred directly to your bank account every Monday. Maintain a rating above 4.5 to unlock faster payouts and bonus opportunities.',
      },
    ],
  },
  {
    category: 'Safety',
    questions: [
      {
        q: 'How do you verify partners?',
        a: 'Every partner completes KYC verification (Aadhaar + PAN), undergoes background checks, and has their photo and vehicle verified. Only verified partners with valid ID can carry packages.',
      },
      {
        q: 'What if something goes wrong?',
        a: 'Our 24/7 support team responds within minutes to any issues. Emergency support is available in the app with one-tap SOS. All packages are insured up to ₹5,000.',
      },
    ],
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      variants={staggerItem}
      className="border-b border-gray-100 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-heading font-medium text-secondary-900 group-hover:text-primary transition-colors pr-8">
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
            <p className="pb-6 text-secondary-600 leading-relaxed pr-8">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const [openCategories, setOpenCategories] = useState<Record<string, number | null>>({});

  const toggleQuestion = (category: string, index: number) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <section
      id="faqs"
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={scrollReveal}
          initial="offscreen"
          animate={isInView ? 'onscreen' : 'offscreen'}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Everything you need to know about Raahico. Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto space-y-8"
        >
          {faqs.map((category) => (
            <motion.div
              key={category.category}
              variants={staggerItem}
              className="bg-surface rounded-3xl p-6 lg:p-8 border border-gray-100"
            >
              <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                {category.category}
              </h3>
              <div>
                {category.questions.map((item, idx) => (
                  <FAQItem
                    key={idx}
                    question={item.q}
                    answer={item.a}
                    isOpen={openCategories[category.category] === idx}
                    onToggle={() => toggleQuestion(category.category, idx)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-accent rounded-2xl">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-primary" />
              <span className="text-secondary-700">Still have questions?</span>
            </div>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-primary text-white font-medium rounded-xl hover:bg-primary-600 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
