'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'E-commerce Seller',
    location: 'Koramangala',
    rating: 5,
    text: 'Raahico has transformed how I deliver products to my local customers. What used to take 2 days with courier services now takes just a few hours. My customers are happier, and I save over 60% on delivery costs!',
    avatar: 'PS',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    role: 'Delivery Partner',
    location: 'Whitefield',
    rating: 5,
    text: 'I commute from Whitefield to Marathahalli every day for work. Raahico lets me earn extra money by delivering packages on my existing route. Easy ₹4-5k per month with zero extra effort!',
    avatar: 'RK',
    gradient: 'from-primary to-primary-600',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    role: 'Working Professional',
    location: 'HSR Layout',
    rating: 5,
    text: 'Needed to send documents to my lawyer in Indiranagar urgently. Raahico found me a verified partner within 10 minutes traveling the exact route. Package delivered in under an hour. Incredible!',
    avatar: 'AP',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Small Business Owner',
    location: 'Electronic City',
    rating: 5,
    text: 'As a small business, every rupee counts. Raahico has cut our delivery costs dramatically while improving our delivery times. The live tracking feature gives my customers peace of mind.',
    avatar: 'VS',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    role: 'Student',
    location: 'BTM Layout',
    rating: 5,
    text: 'Left my phone charger at home during exam week! Used Raahico and got it delivered within 2 hours by someone traveling from my hometown. So much better than courier services!',
    avatar: 'SR',
    gradient: 'from-teal-500 to-cyan-600',
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-accent/30 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={scrollReveal}
          initial="offscreen"
          animate={isInView ? 'onscreen' : 'offscreen'}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Loved by <span className="text-primary">5,000+</span> Users
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Real stories from real people using Raahico to send packages and earn on their routes.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main testimonial card */}
            <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-elevated border border-gray-100">
              {/* Quote icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg lg:text-xl text-secondary-700 leading-relaxed mb-8">
                  &quot;{testimonials[activeIndex].text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${testimonials[activeIndex].gradient} rounded-xl flex items-center justify-center text-white font-bold`}>
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-secondary-600">
                      {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation buttons */}
              <div className="absolute right-8 bottom-8 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === activeIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust metrics */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '50K+', label: 'Deliveries' },
            { value: '5K+', label: 'Happy Users' },
            { value: '98%', label: 'Would Recommend' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center bg-white rounded-2xl p-6 shadow-card border border-gray-100"
            >
              <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-secondary-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
