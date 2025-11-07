'use client';

import { motion } from 'framer-motion';

const logos = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'InnovateIO', logo: 'IO' },
  { name: 'GrowthLab', logo: 'GL' },
  { name: 'ScaleUp', logo: 'SU' },
  { name: 'NextGen', logo: 'NG' },
  { name: 'FutureWorks', logo: 'FW' },
];

const testimonials = [
  {
    quote: "SpicyBeats delivered our mobile app 3 weeks ahead of schedule. The quality exceeded expectations.",
    author: "Sarah Chen",
    role: "CTO, TechCorp",
    rating: 5
  },
  {
    quote: "Their AI implementation saved us 40+ hours weekly. ROI was positive within 2 months.",
    author: "Mike Rodriguez", 
    role: "CEO, GrowthLab",
    rating: 5
  },
  {
    quote: "Professional, fast, and excellent communication throughout the entire project.",
    author: "Emily Zhang",
    role: "Founder, InnovateIO", 
    rating: 5
  }
];

export function SocialProof() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
            Trusted by fast-growing businesses
          </p>
          
          {/* Client Logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center mb-16">
            {logos.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-2 hover:bg-gray-200 transition-colors">
                  <span className="text-lg font-bold text-gray-600">
                    {company.logo}
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl p-6 text-left"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-navy">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}