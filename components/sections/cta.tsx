'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-navy to-navy/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Let's discuss your project. Get a detailed proposal within 24 hours—no sales pressure, 
            just honest technical assessment and clear next steps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue/90 px-8 py-4">
              <Link href="/get-quote" className="flex items-center">
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4">
              <Link href="/consultation" className="flex items-center">
                Free Consultation
              </Link>
            </Button>
          </div>

          {/* Quick Contact Strip */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.a
              href="https://wa.me/1555SPICY"
              className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="h-6 w-6 text-green-400" />
              <div className="text-left">
                <div className="text-white font-medium">WhatsApp</div>
                <div className="text-gray-300 text-sm">Instant response</div>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
            </motion.a>

            <motion.a
              href="tel:+1555SPICY"
              className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="h-6 w-6 text-electric-blue" />
              <div className="text-left">
                <div className="text-white font-medium">Call Us</div>
                <div className="text-gray-300 text-sm">+1-555-SPICY</div>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
            </motion.a>

            <motion.a
              href="mailto:hello@spicybeats.com"
              className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="h-6 w-6 text-lime" />
              <div className="text-left">
                <div className="text-white font-medium">Email</div>
                <div className="text-gray-300 text-sm">hello@spicybeats.com</div>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
            </motion.a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              ⚡ Typical response time: &lt; 2 hours • 🚀 Project starts: within 1 week • ✅ 100% satisfaction guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}