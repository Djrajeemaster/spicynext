'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const projects = [
  { id: 1, title: 'Minimalist Mumbai Apartment', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, title: 'Bohemian Bangalore Villa', image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, title: 'Modern Delhi Farmhouse', image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 4, title: 'Corporate Office, Gurgaon', image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const processSteps = [
  { num: '01', title: 'Consultation', desc: 'We start by understanding your vision, lifestyle, and requirements.' },
  { num: '02', title: 'Design & Planning', desc: 'Our team creates detailed 3D renderings and floor plans for your approval.' },
  { num: '03', title: 'Execution', desc: 'Our skilled craftsmen and project managers bring the design to life.' },
  { num: '04', title: 'Handover', desc: 'We add the final touches and present you with your dream space.' },
];

export default function StudioVerdePage() {
  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your inquiry! We will get in touch with you shortly.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-gray-100 text-gray-900 font-light">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
          <Link href="#" className="text-3xl font-serif font-bold text-green-900">Studio Verde</Link>
          <nav className="hidden md:flex gap-8 text-lg tracking-wider">
            <Link href="#portfolio" className="hover:text-green-700">Portfolio</Link>
            <Link href="#process" className="hover:text-green-700">Process</Link>
            <Link href="#about" className="hover:text-green-700">About</Link>
          </nav>
          <Button asChild variant="outline" className="border-green-800 text-green-800 hover:bg-green-800 hover:text-white">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen relative flex items-end">
        <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Elegant Interior" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-white">Creating spaces that <br/>tell your story.</h1>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-green-900 mb-12">Our Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(p => (
              <div key={p.id} className="group">
                <div className="overflow-hidden"><img src={p.image} alt={p.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"/></div>
                <h3 className="text-2xl font-serif mt-4">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-green-900 mb-16">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8 border-t pt-12">
            {processSteps.map(step => (
              <div key={step.num}>
                <p className="text-6xl font-serif text-green-200">{step.num}</p>
                <h3 className="text-2xl font-serif mt-2">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://images.pexels.com/photos/4100678/pexels-photo-4100678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Riya Kapoor, Founder of Studio Verde" className="w-full rounded-lg shadow-lg"/>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif text-green-900 mb-4">Meet the Founder</h2>
            <p className="text-lg text-gray-700 mb-4">Studio Verde was founded by Riya Kapoor, an award-winning designer with a passion for creating beautiful, functional, and sustainable spaces. With over a decade of experience, Riya believes that good design can truly enhance one's quality of life.</p>
            <Button variant="link" className="p-0 text-lg text-green-800">Learn More <ArrowRight className="ml-2"/></Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">Start Your Project</h2>
          <form onSubmit={handleInquiry} className="grid md:grid-cols-2 gap-6">
            <Input placeholder="Full Name *" required className="bg-green-800 border-green-700 placeholder:text-green-200" />
            <Input type="email" placeholder="Email *" required className="bg-green-800 border-green-700 placeholder:text-green-200" />
            <Textarea placeholder="Tell us about your project..." rows={5} className="md:col-span-2 bg-green-800 border-green-700 placeholder:text-green-200" />
            <div className="md:col-span-2 text-center">
              <Button type="submit" size="lg" className="bg-white text-green-900 hover:bg-gray-200 font-bold text-lg py-6 px-12">Submit Inquiry</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p className="text-2xl font-serif font-bold text-green-900 mb-4">Studio Verde</p>
          <div className="flex justify-center gap-6 mb-6">
            <Instagram/> <Linkedin/>
          </div>
          <p>&copy; {new Date().getFullYear()} Studio Verde. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
