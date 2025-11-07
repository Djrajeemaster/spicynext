'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function StickyContact() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 mb-4 w-80"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-electric-blue/10 rounded-lg">
                  <Zap className="h-6 w-6 text-electric-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Need help?</h4>
                  <p className="text-sm text-gray-600">Get instant support</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                <a href="https://wa.me/1555SPICY" className="flex items-center justify-center">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Chat
                </a>
              </Button>
              
              <Button variant="outline" asChild className="w-full">
                <Link href="/get-quote" className="flex items-center justify-center">
                  Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Usually responds in &lt; 5 minutes
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-electric-blue text-white p-4 rounded-full shadow-2xl hover:bg-electric-blue/90 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isExpanded ? { rotate: 45 } : { rotate: 0 }}
      >
        {isExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        )}
      </motion.button>
    </div>
  );
}