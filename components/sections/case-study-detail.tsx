'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// This component receives the specific case study data as a prop
export function CaseStudyDetail({ study }: { study: any }) {
  if (!study) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-16 bg-gray-900 text-white">
        {/* Header */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={itemVariants}
          className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center overflow-hidden"
        >
          <img src={study.image} alt={study.title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="relative z-10 p-4">
            <p className="text-lg font-semibold text-electric-blue mb-2">{study.category}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">{study.title}</h1>
          </div>
        </motion.section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Back Button & Live Link */}
          <motion.div initial="hidden" animate="visible" variants={itemVariants} className="flex justify-between items-center mb-8">
            <Button asChild variant="outline" className="border-gray-600 hover:bg-gray-800">
              <Link href="/case-studies" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            <Button asChild className="bg-electric-blue hover:bg-electric-blue/90">
              <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                View Live Project <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column (Details) */}
            <motion.div initial="hidden" animate="visible" variants={itemVariants} className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-lg text-gray-300 leading-relaxed">{study.overview}</p>
              </div>

              {/* Challenges */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Challenges</h2>
                <ul className="space-y-3">
                  {study.challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-lime mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Solution</h2>
                <ul className="space-y-4">
                  {study.solutions.map((solution: string, index: number) => (
                    <li key={index} className="bg-gray-800 p-4 rounded-lg flex items-start">
                      <div className="bg-electric-blue/10 p-2 rounded-full mr-4">
                        <CheckCircle className="h-6 w-6 text-electric-blue" />
                      </div>
                      <span className="text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column (Results & Info) */}
            <motion.div initial="hidden" animate="visible" variants={itemVariants} className="lg:col-span-1 space-y-8">
              <div className="bg-gray-800 p-6 rounded-lg sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-4">Key Results</h3>
                <div className="space-y-4">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center bg-gray-700 p-3 rounded-md">
                      <span className="font-semibold text-gray-300">{key}</span>
                      <span className="text-2xl font-bold text-lime">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag: string) => (
                    <span key={tag} className="text-sm text-gray-200 bg-gray-700 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
