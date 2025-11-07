'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Re-using the same data structure for consistency
const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Platform for Fashion Brand',
    description: 'Developed a scalable e-commerce solution with custom product configurators and seamless payment integration.',
    image: 'https://via.placeholder.com/600x400/000000/FFFFFF?text=Fashion+E-commerce',
    link: '/case-studies/fashion-ecommerce',
    category: 'E-commerce',
    tags: ['Next.js', 'Stripe', 'Vercel'],
  },
  {
    id: 2,
    title: 'AI-Powered Chatbot for Customer Support',
    description: 'Implemented an intelligent chatbot using natural language processing to automate customer inquiries and improve response times.',
    image: 'https://via.placeholder.com/600x400/000000/FFFFFF?text=AI+Chatbot',
    link: '/case-studies/ai-chatbot',
    category: 'AI/ML',
    tags: ['Python', 'Dialogflow', 'Kubernetes'],
  },
  {
    id: 3,
    title: 'Mobile Banking App with Biometric Authentication',
    description: 'Designed and built a secure and user-friendly mobile banking application for iOS and Android, featuring biometric login.',
    image: 'https://via.placeholder.com/600x400/000000/FFFFFF?text=Mobile+Banking',
    link: '/case-studies/mobile-banking',
    category: 'Mobile App',
    tags: ['React Native', 'Firebase', 'Security'],
  },
  {
    id: 4,
    title: 'Data Analytics Dashboard for Logistics',
    description: 'Created a real-time data visualization dashboard to track shipments, optimize routes, and reduce operational costs.',
    image: 'https://via.placeholder.com/600x400/000000/FFFFFF?text=Analytics+Dashboard',
    link: '/case-studies/analytics-dashboard',
    category: 'Data & Analytics',
    tags: ['Tableau', 'Redshift', 'AWS'],
  },
  {
    id: 5,
    title: 'Headless CMS for a Media Company',
    description: 'Migrated a legacy CMS to a modern headless architecture, improving performance and content management workflows.',
    image: 'https://via.placeholder.com/600x400/000000/FFFFFF?text=Headless+CMS',
    link: '/case-studies/headless-cms',
    category: 'Web Development',
    tags: ['Contentful', 'GraphQL', 'Next.js'],
  },
  {
    id: 6,
    title: 'IoT Platform for Smart Home Devices',
    description: 'Built a cloud-based IoT platform to manage and monitor thousands of connected smart home devices in real-time.',
    image: 'https://via.placeholder.com/600x400/000000/FFFFFF?text=IoT+Platform',
    link: '/case-studies/iot-platform',
    category: 'IoT',
    tags: ['MQTT', 'Node.js', 'Azure'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="pt-16 bg-gray-900">
        {/* Page Header */}
        <section className="py-16 md:py-20 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300">
              See how we've transformed businesses with our innovative solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {caseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  variants={itemVariants}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2"
                >
                  <Link href={study.link}>
                    <div className="relative">
                      <img src={study.image} alt={study.title} className="w-full h-56 object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all"></div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-medium text-electric-blue mb-1">{study.category}</p>
                      <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map(tag => (
                          <span key={tag} className="text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{study.description}</p>
                      <div className="text-white font-semibold flex items-center group-hover:text-electric-blue transition-colors">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
