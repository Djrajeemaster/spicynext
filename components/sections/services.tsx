'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Smartphone, 
  Bot, 
  Rocket, 
  ArrowRight, 
  CheckCircle,
  Clock,
  DollarSign,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Website Development',
    subtitle: 'Marketing sites, headless CMS, e-commerce',
    description: 'Lightning-fast websites that convert visitors into customers. From landing pages to complex e-commerce platforms.',
    problem: 'Your current website is slow, hard to update, or not converting leads.',
    approach: 'Modern stack (Next.js, headless CMS), performance-first design, conversion optimization.',
    deliverables: ['Responsive web application', 'Content management system', 'Analytics dashboard', 'Performance monitoring'],
    timeline: '4-12 weeks',
    pricing: 'From $15k',
    badge: 'Most Popular',
    color: 'electric-blue'
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'App Development',
    subtitle: 'iOS, Android, React Native, web apps',
    description: 'Native and cross-platform mobile applications that users love. Scalable architecture, smooth UX.',
    problem: 'Need a mobile app but concerned about cost and complexity of native development.',
    approach: 'React Native for cross-platform efficiency, native modules where needed, thorough testing.',
    deliverables: ['iOS & Android apps', 'Backend API', 'Admin dashboard', 'App store deployment'],
    timeline: '8-20 weeks',
    pricing: 'From $35k',
    badge: 'Enterprise Ready',
    color: 'lime'
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI Implementation',
    subtitle: 'Workflows, RAG, automations, chatbots',
    description: 'Integrate AI to automate workflows, enhance user experience, and unlock new capabilities for your business.',
    problem: 'Manual processes eating up time, or need intelligent features in your product.',
    approach: 'Custom AI models, RAG systems, workflow automation, seamless integrations.',
    deliverables: ['AI-powered features', 'Automated workflows', 'Custom chatbots', 'Training & documentation'],
    timeline: '6-16 weeks',
    pricing: 'From $25k',
    badge: 'Future-Proof',
    color: 'electric-blue'
  },
  {
    id: 'launch',
    icon: Rocket,
    title: 'Product Launch',
    subtitle: 'End-to-end product development',
    description: 'Take your idea from concept to market. Complete product development, testing, and go-to-market strategy.',
    problem: 'Have a great idea but need technical expertise to bring it to life.',
    approach: 'Agile development, user testing, iterative feedback, scalable infrastructure.',
    deliverables: ['MVP development', 'User testing', 'Launch strategy', 'Post-launch support'],
    timeline: '12-24 weeks',
    pricing: 'From $50k',
    badge: 'Full Service',
    color: 'lime'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0, 0, 0.2, 1] }, // Changed 'easeOut' to cubic-bezier array
  },
};

export function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              What we do best
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we build digital products that drive real business results. 
              No fluff, just measurable outcomes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id} variants={itemVariants}>
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors`}>
                            <Icon className={`h-8 w-8 text-${service.color}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-navy mb-1">
                              {service.title}
                            </h3>
                            <p className="text-gray-600">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>
                        <Badge className={`bg-${service.color}/10 text-${service.color} hover:bg-${service.color}/20`}>
                          {service.badge}
                        </Badge>
                      </div>

                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-6">
                        <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-200">
                          <h4 className="font-semibold text-red-800 mb-2">Problem</h4>
                          <p className="text-red-700 text-sm">{service.problem}</p>
                        </div>

                        <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">Our Approach</h4>
                          <p className="text-green-700 text-sm">{service.approach}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-navy mb-3 flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                              Deliverables
                            </h4>
                            <ul className="space-y-2">
                              {service.deliverables.map((item, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-center">
                                  <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <div className="flex items-center text-sm">
                              <Clock className="h-4 w-4 mr-2 text-gray-400" />
                              <span className="text-gray-600">Timeline: </span>
                              <span className="font-semibold ml-1">{service.timeline}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                              <span className="text-gray-600">Starting: </span>
                              <span className="font-semibold ml-1">{service.pricing}</span>
                            </div>
                          </div>
                        </div>

                        <Button asChild className="w-full bg-navy hover:bg-navy/90 group/btn">
                          <Link href={`/services#${service.id}`}>
                            Learn More About {service.title}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <div className="flex items-center justify-center mb-6">
                <Users className="h-12 w-12 text-electric-blue" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">
                Not sure which service fits your needs?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a free 30-minute strategy call. We'll analyze your requirements and recommend the best approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue/90">
                  <Link href="/consultation">
                    Book Free Consultation
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/get-quote">
                    Get Custom Quote
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}