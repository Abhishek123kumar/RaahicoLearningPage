'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  MapPin,
  Bike,
  Car,
  Bus,
  Users,
  Package,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const areas = [
  { name: 'Mahadevapura', active: true, deliveries: '1,200+' },
  { name: 'Marathahalli', active: true, deliveries: '950+' },
  { name: 'Bellandur', active: true, deliveries: '800+' },
  { name: 'HSR Layout', active: true, deliveries: '700+' },
  { name: 'Electronic City', active: true, deliveries: '600+' },
  { name: 'Indiranagar', active: true, deliveries: '1,100+' },
  { name: 'Koramangala', active: true, deliveries: '850+' },
  { name: 'Whitefield', active: true, deliveries: '900+' },
  { name: 'BTM Layout', active: true, deliveries: '650+' },
  { name: 'JP Nagar', active: true, deliveries: '550+' },
];

const travelModes = [
  { icon: Bike, label: 'Bike Riders', count: '2,500+', color: 'text-orange-500' },
  { icon: Car, label: 'Car Owners', count: '1,800+', color: 'text-blue-500' },
  { icon: Bus, label: 'Bus Travellers', count: '700+', color: 'text-purple-500' },
];

function AreaPoint({ area, index }: { area: typeof areas[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  // Position areas on a rough Bangalore map layout
  const positions: Record<string, { top: string; left: string }> = {
    'Mahadevapura': { top: '25%', left: '65%' },
    'Marathahalli': { top: '35%', left: '70%' },
    'Bellandur': { top: '45%', left: '65%' },
    'HSR Layout': { top: '55%', left: '60%' },
    'Electronic City': { top: '75%', left: '50%' },
    'Indiranagar': { top: '30%', left: '40%' },
    'Koramangala': { top: '45%', left: '45%' },
    'Whitefield': { top: '20%', left: '80%' },
    'BTM Layout': { top: '65%', left: '45%' },
    'JP Nagar': { top: '70%', left: '40%' },
  };

  const position = positions[area.name] || { top: '50%', left: '50%' };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
      className="absolute z-10"
      style={{ top: position.top, left: position.left }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Pulse effect */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
          className="absolute inset-0 w-4 h-4 bg-primary rounded-full"
        />
        {/* Main dot */}
        <div className="relative w-4 h-4 bg-primary rounded-full shadow-lg cursor-pointer hover:scale-125 transition-transform" />
        {/* Tooltip */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-6 whitespace-nowrap bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-100"
          >
            <p className="font-semibold text-secondary-900 text-sm">{area.name}</p>
            <p className="text-xs text-primary">{area.deliveries} deliveries</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Coverage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const [selectedMode, setSelectedMode] = useState<number | null>(null);

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-surface overflow-hidden"
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
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
            Coverage
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Bangalores Busiest Corridors
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Were live in major tech corridors and growing fast. Find partners on the routes you travel daily.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.3 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] bg-gradient-to-br from-accent to-white rounded-3xl shadow-card overflow-hidden border border-gray-100">
              {/* Map background */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <defs>
                    <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0F9D58" strokeWidth="0.3" opacity="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                  {/* Route lines */}
                  <motion.path
                    d="M 260 60 Q 280 100 270 140 T 200 225"
                    fill="none"
                    stroke="#0F9D58"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                  <motion.path
                    d="M 160 70 Q 140 100 180 135 T 180 195"
                    fill="none"
                    stroke="#0F9D58"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 3"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                  />
                  <motion.path
                    d="M 320 60 L 280 80"
                    fill="none"
                    stroke="#0F9D58"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 2"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                  />
                </svg>
              </div>

              {/* Animated dots moving along routes */}
              <motion.div
                animate={{ x: [0, 60, 0], y: [0, 50, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute"
                style={{ top: '22%', left: '60%' }}
              >
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Bike className="w-4 h-4 text-white" />
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 2 }}
                className="absolute"
                style={{ top: '30%', left: '38%' }}
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg border border-gray-200">
                  <Car className="w-4 h-4 text-blue-500" />
                </div>
              </motion.div>

              {/* Area points */}
              {areas.map((area, idx) => (
                <AreaPoint key={area.name} area={area} index={idx} />
              ))}

              {/* Bangalore label */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-sm">
                <p className="text-xs text-secondary-500">Currently serving</p>
                <p className="font-semibold text-secondary-900">Bengaluru</p>
              </div>
            </div>
          </motion.div>

          {/* Stats and Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2"
          >
            {/* Travel modes */}
            <motion.div variants={staggerItem} className="mb-10">
              <h3 className="font-heading text-xl font-bold text-secondary-900 mb-4">
                Delivery Partners by Mode
              </h3>
              <div className="flex flex-wrap gap-4">
                {travelModes.map((mode, idx) => (
                  <motion.div
                    key={mode.label}
                    variants={staggerItem}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-card border border-gray-100"
                  >
                    <div className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center`}>
                      <mode.icon className={`w-5 h-5 ${mode.color}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900">{mode.count}</p>
                      <p className="text-xs text-secondary-500">{mode.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Area list */}
            <motion.div variants={staggerItem}>
              <h3 className="font-heading text-xl font-bold text-secondary-900 mb-4">
                Active Coverage Areas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {areas.slice(0, 6).map((area, idx) => (
                  <motion.div
                    key={area.name}
                    variants={staggerItem}
                    className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-colors cursor-pointer"
                  >
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-secondary-800">{area.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={staggerItem} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-medium rounded-xl hover:bg-primary-600 transition-colors"
              >
                Check Your Area
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="/partner"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary-100 text-secondary-800 font-medium rounded-xl hover:bg-secondary-200 transition-colors"
              >
                Partner with Us
              </a>
            </motion.div>

            {/* Coming soon */}
            <motion.p variants={staggerItem} className="mt-6 text-sm text-secondary-500">
              Coming soon to: Hyderabad, Chennai, Pune, Delhi NCR
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
