'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail, Building, Bath, BedDouble, Car, Trees, Dumbbell, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const amenities = [
  { icon: <Trees className="h-8 w-8 text-green-500" />, name: 'Landscaped Gardens' },
  { icon: <Dumbbell className="h-8 w-8 text-blue-500" />, name: 'Modern Gym' },
  { icon: <Building className="h-8 w-8 text-purple-500" />, name: 'Clubhouse' },
  { icon: <Car className="h-8 w-8 text-gray-500" />, name: 'Covered Parking' },
  { icon: <ShieldCheck className="h-8 w-8 text-red-500" />, name: '24/7 Security' },
];

const floorPlans = {
  '2bhk': { name: '2 BHK', area: '1250 sq.ft.', image: 'https://via.placeholder.com/800x600/f0f0f0/333333?text=2+BHK+Floor+Plan' },
  '3bhk': { name: '3 BHK', area: '1650 sq.ft.', image: 'https://via.placeholder.com/800x600/e0e0e0/333333?text=3+BHK+Floor+Plan' },
  '4bhk': { name: '4 BHK Penthouse', area: '2500 sq.ft.', image: 'https://via.placeholder.com/800x600/d0d0d0/333333?text=4+BHK+Floor+Plan' },
};

const gallery = [
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

export default function AuraHomesPage() {
  const [activePlan, setActivePlan] = useState('3bhk');

  const handleBrochureDownload = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! The brochure will be sent to your email shortly.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <div className="text-3xl font-bold text-blue-900">AURA HOMES</div>
          <nav className="hidden md:flex gap-6 font-medium text-gray-700">
            <Link href="#highlights" className="hover:text-blue-700">Highlights</Link>
            <Link href="#amenities" className="hover:text-blue-700">Amenities</Link>
            <Link href="#plans" className="hover:text-blue-700">Floor Plans</Link>
            <Link href="#gallery" className="hover:text-blue-700">Gallery</Link>
          </nav>
          <Button asChild className="bg-blue-800 hover:bg-blue-900">
            <Link href="#contact">Enquire Now</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen relative flex items-center">
        <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Modern Apartment Building" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white text-balance">Experience Modern Living</h1>
            <p className="text-2xl text-blue-200 mt-4">2, 3 & 4 BHK Luxury Apartments in Pune</p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
                <h3 className="text-4xl font-bold text-blue-800">5 Acres</h3>
                <p className="text-gray-600">Lush Green Campus</p>
            </div>
            <div className="p-6">
                <h3 className="text-4xl font-bold text-blue-800">10+</h3>
                <p className="text-gray-600">World-Class Amenities</p>
            </div>
            <div className="p-6">
                <h3 className="text-4xl font-bold text-blue-800">2 Towers</h3>
                <p className="text-gray-600">Exclusively Designed</p>
            </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Project Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {amenities.map(item => (
              <div key={item.name} className="text-center p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-700">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section id="plans" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Floor Plans</h2>
          <div className="flex justify-center mb-8 border-b">
            {Object.keys(floorPlans).map(plan => (
              <button key={plan} onClick={() => setActivePlan(plan)} className={`px-6 py-3 font-medium text-lg transition-colors ${activePlan === plan ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500'}`}>
                {floorPlans[plan as keyof typeof floorPlans].name}
              </button>
            ))}
          </div>
          <div className="text-center">
            <img src={floorPlans[activePlan as keyof typeof floorPlans].image} alt={`${floorPlans[activePlan as keyof typeof floorPlans].name} Floor Plan`} className="mx-auto rounded-lg shadow-lg"/>
            <p className="mt-4 text-xl font-semibold">Area: {floorPlans[activePlan as keyof typeof floorPlans].area}</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-lg"><img src={src} alt={`Site image ${i+1}`} className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"/></div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Download Brochure</h2>
          <p className="text-blue-200 mb-8">Get complete project details, payment plans, and special offers.</p>
          <form onSubmit={handleBrochureDownload} className="grid sm:grid-cols-3 gap-4">
            <Input placeholder="Full Name *" required className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300" />
            <Input type="email" placeholder="Email *" required className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300" />
            <Button type="submit" className="sm:col-span-3 bg-white text-blue-900 hover:bg-gray-200 font-bold text-lg py-6">Download Now</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
