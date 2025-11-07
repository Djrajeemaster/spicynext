'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const demoProjects = [
  {
    title: 'Saffron Spice',
    description: 'A modern, elegant website for an upscale Indian restaurant.',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/demos/saffron-spice',
    tags: ['Restaurant', 'UI/UX', 'Reservations'],
  },
  {
    title: 'Desi Threads',
    description: 'A stylish e-commerce store for a modern Indian fashion brand.',
    image: 'https://images.pexels.com/photos/4355620/pexels-photo-4355620.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/demos/desi-threads',
    tags: ['E-commerce', 'Fashion', 'Video Banner'],
  },
  {
    title: 'Aura Homes',
    description: 'A premium website for a modern real estate project.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/demos/aura-homes',
    tags: ['Real Estate', 'Lead Gen', 'Gallery'],
  },
  {
    title: 'Dr. Anjali Sharma',
    description: 'A clean and trustworthy website for a healthcare professional.',
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/demos/dr-anjali-sharma',
    tags: ['Healthcare', 'Appointments', 'Professional'],
  },
  {
    title: 'Studio Verde',
    description: 'A sophisticated portfolio for an interior design studio.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/demos/studio-verde',
    tags: ['Portfolio', 'Creative', 'Interior Design'],
  },
  {
    title: 'Pathshala',
    description: 'An informative website for an educational coaching institute.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/demos/pathshala',
    tags: ['Education', 'Institute', 'Admissions'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export function Demos() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Live Demo Showcase
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our interactive, ready-to-use website templates.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {demoProjects.map((demo) => (
            <motion.div
              key={demo.title}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative">
                <img src={demo.image} alt={demo.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{demo.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 h-12">{demo.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {demo.tags.map(tag => (
                        <span key={tag} className="text-xs font-semibold text-gray-700 bg-gray-200 px-2 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
                <Button asChild size="lg" className="w-full bg-gray-800 hover:bg-gray-900 text-white">
                  <Link href={demo.link} target="_blank">
                    <Eye className="mr-2 h-5 w-5" />
                    View Live Demo
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
