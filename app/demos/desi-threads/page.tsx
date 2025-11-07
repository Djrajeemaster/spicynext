'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const featuredProducts = [
  { id: 1, name: 'The Royal Kurta', price: '₹4,999', image: 'https://images.pexels.com/photos/4355620/pexels-photo-4355620.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, name: 'Jaipur Garden Saree', price: '₹8,499', image: 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, name: 'Urban Nomad Jacket', price: '₹6,299', image: 'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, name: 'Silk Blend Sherwani', price: '₹15,999', image: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const collections = [
  { id: 1, name: "Festive '24", image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, name: 'Summer Breeze', image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, name: 'Wedding Vows', image: 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const lookbookImages = [
    'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2765547/pexels-photo-2765547.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function DesiThreadsPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-3xl font-bold tracking-wider">DESI THREADS</div>
            <nav className="hidden md:flex gap-8 text-lg font-medium">
              <Link href="#" className="hover:text-rose-500 transition-colors">New Arrivals</Link>
              <Link href="#" className="hover:text-rose-500 transition-colors">Collections</Link>
              <Link href="#" className="hover:text-rose-500 transition-colors">Lookbook</Link>
              <Link href="#" className="hover:text-rose-500 transition-colors">About</Link>
            </nav>
            <div className="flex items-center gap-4">
              <ShoppingBag className="h-7 w-7 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Video */}
      <section className="h-screen relative overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/4355620/pexels-photo-4355620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <source src="https://cdn.pixabay.com/video/2023/07/29/173828-849130245.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-4 text-balance"
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
          >
            Wear Your Story
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-2xl mb-8"
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}
          >
            Discover modern ethnic wear that blends timeless tradition with contemporary style.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }}>
            <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-10 py-6 text-lg rounded-full">
              Shop New Collection
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="group text-center">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img src={product.image} alt={product.name} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-lg text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Shop by Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map(collection => (
              <div key={collection.id} className="relative overflow-hidden rounded-lg group h-96">
                <img src={collection.image} alt={collection.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white border-4 border-white p-4">{collection.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">#DesiThreads Lookbook</h2>
          <p className="text-lg text-gray-600 mb-8">Follow us on Instagram for style inspiration.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {lookbookImages.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-lg aspect-square">
                <img src={src} alt={`Lookbook image ${i+1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">DESI THREADS</h3>
            <p className="text-gray-400">Crafting stories in every thread.</p>
            <div className="flex gap-4 mt-4">
              <Instagram className="h-6 w-6 cursor-pointer" />
              <Facebook className="h-6 w-6 cursor-pointer" />
              <Twitter className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">New Arrivals</Link></li>
              <li><Link href="#">Men</Link></li>
              <li><Link href="#">Women</Link></li>
              <li><Link href="#">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">Our Story</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Get 10% off your first order.</p>
            <div className="flex">
              <Input placeholder="Enter your email" className="bg-gray-800 border-gray-700 rounded-r-none" />
              <Button className="bg-rose-500 hover:bg-rose-600 rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
