'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingBag, 
  Calculator, 
  ExternalLink, 
  Bell, 
  MapPin, 
  CreditCard,
  BarChart,
  Users,
  Smartphone,
  ArrowRight,
  Star,
  Calendar
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'saversdream',
    icon: ShoppingBag,
    title: 'SaversDream',
    subtitle: 'Local deals platform—verified, mobile-first, alert-driven',
    status: 'Ready to Launch',
    statusColor: 'green',
    website: 'saversdream.com',
    description: 'Connect customers with local businesses through verified deals, real-time alerts, and mobile-first experience.',
    features: [
      { icon: MapPin, text: 'Location-based deal discovery' },
      { icon: Bell, text: 'Real-time deal alerts & notifications' },
      { icon: Smartphone, text: 'Mobile-optimized browsing' },
      { icon: Star, text: 'Verified business partnerships' }
    ],
    metrics: [
      { label: 'Businesses Ready', value: '150+' },
      { label: 'Beta Users', value: '1.2k+' },
      { label: 'Avg. Savings', value: '$45' }
    ],
    tech: ['React Native', 'Next.js', 'Supabase', 'Push Notifications'],
    cta: 'Request Early Access',
    ctaLink: '/products/saversdream',
    image: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'budgetking',
    icon: Calculator,
    title: 'BudgetKing',
    subtitle: 'No-nonsense budgeting for families and SMBs—clean dashboards, smart reminders',
    status: 'In Development',
    statusColor: 'blue',
    description: 'Intelligent budgeting app that simplifies financial management for families and small businesses with automated insights.',
    features: [
      { icon: BarChart, text: 'Smart budget categorization' },
      { icon: Bell, text: 'Intelligent spending alerts' },
      { icon: CreditCard, text: 'Multi-account sync' },
      { icon: Users, text: 'Family & team collaboration' }
    ],
    metrics: [
      { label: 'Expected Launch', value: 'Q2 2025' },
      { label: 'Pre-orders', value: '500+' },
      { label: 'Target Savings', value: '25%+' }
    ],
    tech: ['React Native', 'Plaid API', 'AI Insights', 'Bank-level Security'],
    cta: 'Join Waitlist',
    ctaLink: '/products/budgetking',
    image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function Products() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              Our Products
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Built for growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real products solving real problems. See how we build scalable solutions 
              that users love and businesses profit from.
            </p>
          </motion.div>

          <div className="space-y-16">
            {products.map((product, index) => {
              const Icon = product.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div key={product.id} variants={itemVariants}>
                  <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className={`grid lg:grid-cols-2 ${!isEven ? 'lg:grid-cols-2' : ''}`}>
                      {/* Content */}
                      <div className={`p-8 lg:p-12 ${!isEven ? 'lg:order-2' : ''}`}>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="p-3 bg-electric-blue/10 rounded-xl">
                            <Icon className="h-8 w-8 text-electric-blue" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-3xl font-bold text-navy">
                                {product.title}
                              </h3>
                              <Badge 
                                className={`${
                                  product.statusColor === 'green' 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-blue-100 text-blue-700'
                                }`}
                              >
                                {product.status}
                              </Badge>
                            </div>
                            <p className="text-gray-600 text-lg">
                              {product.subtitle}
                            </p>
                            {product.website && (
                              <a 
                                href={`https://${product.website}`}
                                className="inline-flex items-center text-electric-blue hover:underline mt-2"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {product.website}
                                <ExternalLink className="ml-1 h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>

                        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Features */}
                        <div className="mb-8">
                          <h4 className="font-semibold text-navy mb-4">Key Features</h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {product.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <feature.icon className="h-5 w-5 text-electric-blue flex-shrink-0" />
                                <span className="text-gray-600">{feature.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="mb-8">
                          <h4 className="font-semibold text-navy mb-4">Metrics</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {product.metrics.map((metric, idx) => (
                              <div key={idx} className="text-center">
                                <div className="text-2xl font-bold text-electric-blue">
                                  {metric.value}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-8">
                          <h4 className="font-semibold text-navy mb-4">Technology</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.tech.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue/90">
                            <Link href={product.ctaLink} className="flex items-center">
                              {product.cta}
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                          </Button>
                          <Button variant="outline" size="lg" asChild>
                            <Link href="/demo" className="flex items-center">
                              <Calendar className="mr-2 h-5 w-5" />
                              Schedule Demo
                            </Link>
                          </Button>
                        </div>
                      </div>

                      {/* Image */}
                      <div className={`relative ${!isEven ? 'lg:order-1' : ''}`}>
                        <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-navy/20 z-10" />
                          <img
                            src={product.image}
                            alt={`${product.title} preview`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Demo Request CTA */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="bg-gradient-to-r from-navy to-navy/90 text-white">
              <CardContent className="p-8 lg:p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">
                  Want to see how we built these products?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Book a demo to see the full development process, architecture decisions, 
                  and business results from our product builds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/90">
                    <Link href="/demo" className="flex items-center">
                      Request Demo
                      <Calendar className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                    <Link href="/case-studies">
                      View Case Studies
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}