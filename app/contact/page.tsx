'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    value: 'support@raahico.com',
    href: 'mailto:support@raahico.com',
    description: 'Response within 24 hours',
    color: 'bg-blue-500',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 80 4567 8900',
    href: 'tel:+918045678900',
    description: 'Mon-Sat, 9am-6pm',
    color: 'bg-primary',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+91 98765 43210',
    href: 'https://wa.me/919876543210',
    description: 'Instant support',
    color: 'bg-green-500',
  },
];

const departments = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'support', label: 'Customer Support' },
  { value: 'partnership', label: 'Partnership Opportunities' },
  { value: 'press', label: 'Press & Media' },
  { value: 'careers', label: 'Careers' },
];

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'general',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', department: 'general', subject: '', message: '' });
    }, 3000);
  };

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
          <motion.h1
            variants={staggerItem}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg text-secondary-600 max-w-2xl mx-auto"
          >
            Have questions, feedback, or want to partner with us? We&apos;d love to hear from you. Our team is here to help.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {contactMethods.map((method) => (
              <motion.a
                key={method.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-surface rounded-2xl p-6 border border-gray-100 hover:shadow-card transition-all"
              >
                <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center mb-4`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-1">
                  {method.title}
                </h3>
                <p className="text-primary font-medium mb-1">{method.value}</p>
                <p className="text-sm text-secondary-500">{method.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Office */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-elevated border border-gray-100">
                <h2 className="font-heading text-2xl font-bold text-secondary-900 mb-6">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-secondary-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-secondary-600">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Department
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        {departments.map((dept) => (
                          <option key={dept.value} value={dept.value}>
                            {dept.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Office & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office */}
              <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-1">
                      Our Office
                    </h3>
                    <p className="text-secondary-600">
                      91 Springboard, Outer Ring Road
                      <br />
                      Mahadevapura, Bengaluru 560048
                      <br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-secondary-600">
                      Monday - Saturday
                      <br />
                      9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
                <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-6">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, href: 'https://instagram.com/raahico', label: 'Instagram', bg: 'bg-gradient-to-br from-purple-500 to-pink-500' },
                    { icon: Linkedin, href: 'https://linkedin.com/company/raahico', label: 'LinkedIn', bg: 'bg-blue-600' },
                    { icon: Twitter, href: 'https://twitter.com/raahico', label: 'Twitter', bg: 'bg-sky-500' },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.bg} rounded-xl flex items-center justify-center text-white`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
