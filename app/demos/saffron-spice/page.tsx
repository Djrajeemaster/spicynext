'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChefHat, UtensilsCrossed, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const menu = {
  appetizers: [
    { name: 'Paneer Tikka Shashlik', description: 'Cottage cheese, bell peppers, and onions marinated in yogurt and spices.', price: '₹350' },
    { name: 'Hara Bhara Kebab', description: 'Spinach, peas, and potato patties, spiced and shallow-fried.', price: '₹300' },
  ],
  main_course: [
    { name: 'Dal Makhani', description: 'Black lentils slow-cooked in a creamy tomato gravy.', price: '₹450' },
    { name: 'Shaahi Paneer', description: 'Cottage cheese in a rich, creamy, and nutty gravy.', price: '₹550' },
  ],
  desserts: [
    { name: 'Gulab Jamun with Rabri', description: 'Soft milk solids dumplings in sugar syrup, served with thickened sweet milk.', price: '₹250' },
    { name: 'Moong Dal Halwa', description: 'Rich and decadent lentil pudding cooked in ghee.', price: '₹300' },
  ],
};

const galleryImages = [
  'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

export default function SaffronSpicePage() {
  const [activeTab, setActiveTab] = useState('main_course');

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Reservation request sent! We will confirm via phone shortly.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-stone-900 text-white font-serif">
      {/* Hero Section */}
      <motion.section 
        className="h-screen bg-cover bg-center flex items-center justify-center text-center relative"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold tracking-wider text-amber-300"
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
          >
            Saffron Spice
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mt-4 text-stone-200"
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}
          >
            An Exquisite Journey Through Indian Culinary Art
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-400 mb-6">Our Story</h2>
          <p className="text-lg text-stone-300 leading-relaxed">
            Saffron Spice is more than a restaurant; it's a celebration of India's rich culinary heritage. Our chefs, trained in the royal kitchens of Rajasthan, bring you timeless recipes passed down through generations, prepared with the purest ingredients and a modern touch.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-stone-800/50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-400 mb-12">Our Menu</h2>
          <div className="flex justify-center mb-8 border-b border-amber-800">
            {Object.keys(menu).map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`capitalize px-6 py-3 text-lg font-medium transition-colors ${activeTab === tab ? 'text-amber-300 border-b-2 border-amber-300' : 'text-stone-400'}`}>
                {tab.replace('_', ' ')}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {menu[activeTab as keyof typeof menu].map(item => (
                <div key={item.name} className="p-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-2xl font-semibold text-stone-100">{item.name}</h3>
                    <p className="text-xl font-mono text-amber-300">{item.price}</p>
                  </div>
                  <p className="text-stone-400 mt-1">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center text-amber-400 mb-12">A Feast for the Eyes</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div key={index} className="overflow-hidden rounded-lg shadow-lg" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-20 bg-stone-800/50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-400 mb-12">Reserve a Table</h2>
          <form onSubmit={handleReservation} className="grid md:grid-cols-2 gap-6">
            <Input placeholder="Full Name *" required className="bg-stone-800 border-stone-700" />
            <Input type="email" placeholder="Email Address *" required className="bg-stone-800 border-stone-700" />
            <Input type="tel" placeholder="Phone Number *" required className="bg-stone-800 border-stone-700" />
            <Input type="number" placeholder="Number of Guests *" min="1" required className="bg-stone-800 border-stone-700" />
            <Input type="date" required className="bg-stone-800 border-stone-700" />
            <Input type="time" required className="bg-stone-800 border-stone-700" />
            <Textarea placeholder="Special requests..." className="md:col-span-2 bg-stone-800 border-stone-700" />
            <div className="md:col-span-2 text-center">
              <Button type="submit" size="lg" className="bg-amber-600 hover:bg-amber-700 text-stone-900 font-bold px-10 py-6 text-lg">
                Send Request
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-400 mb-12">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="flex items-center gap-3">
              <MapPin className="h-8 w-8 text-amber-400" />
              <p className="text-lg">123, Spice Street, Bengaluru, KA</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-8 w-8 text-amber-400" />
              <p className="text-lg">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-8 w-8 text-amber-400" />
              <p className="text-lg">contact@saffronspice.in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
