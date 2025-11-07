'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowRight, Play, Star, Users, Zap, Smartphone, Globe, Bot } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Faster TTM', value: '3x', icon: Zap },
  { label: 'Client NPS', value: '92', icon: Star },
  { label: 'Uptime SLA', value: '99.9%', icon: Globe },
  { label: 'Apps Shipped', value: '200+', icon: Smartphone },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full opacity-5">
          <div className="w-96 h-96 rounded-full bg-electric-blue animate-pulse" />
        </div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full opacity-5">
          <div className="w-80 h-80 rounded-full bg-lime animate-pulse animation-delay-400" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Bot className="h-4 w-4 mr-2 text-electric-blue" />
              Now powered by AI-assisted development
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance mb-6">
              Build apps and websites that{' '}
              <span className="text-electric-blue">convert</span>—fast.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-balance leading-relaxed">
              Enterprise web & mobile app development, AI integrations, and product launches. 
              Ship faster with measurable results.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-4 text-lg font-medium">
                <Link href="/get-quote" className="flex items-center">
                  Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>SpicyBeats Demo</DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="flex items-center justify-center mt-6 text-sm text-gray-300">
              <Users className="h-4 w-4 mr-2" />
              Trusted by 50+ businesses • 5-star rated • No setup fees
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    variants={itemVariants}
                    className="text-center group"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-2 group-hover:bg-white/15 group-hover:shadow-lg transition-all">
                      <Icon className="h-8 w-8 text-electric-blue mx-auto mb-3" />
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-300">
                        {metric.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Service Highlights */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What we build
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From MVPs to enterprise platforms—we deliver solutions that grow with your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web & Mobile Apps',
                description: 'React Native, Next.js, headless CMS, e-commerce platforms',
                icon: Smartphone,
              },
              {
                title: 'AI Integrations',
                description: 'RAG systems, workflow automation, intelligent chatbots',
                icon: Bot,
              },
              {
                title: 'Product Launches',
                description: 'End-to-end development, testing, deployment, and scaling',
                icon: Zap,
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all group"
                  whileHover={{ y: -8, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                >
                  <Icon className="h-12 w-12 text-electric-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}