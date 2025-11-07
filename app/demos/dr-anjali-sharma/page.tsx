'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, MapPin, Stethoscope, HeartPulse, Bone, Baby, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const services = [
  { icon: <Stethoscope className="h-8 w-8 text-cyan-600" />, name: 'General Consultation' },
  { icon: <HeartPulse className="h-8 w-8 text-red-500" />, name: 'Cardiac Care' },
  { icon: <Bone className="h-8 w-8 text-gray-500" />, name: 'Orthopedics' },
  { icon: <Baby className="h-8 w-8 text-pink-500" />, name: 'Pediatrics' },
];

const testimonials = [
  { quote: 'Dr. Sharma is incredibly patient and knowledgeable. She took the time to explain everything clearly.', author: 'Priya S.' },
  { quote: 'The clinic is clean, modern, and the staff is very professional. Highly recommended.', author: 'Rohan M.' },
  { quote: 'Booking an appointment was so easy, and there was almost no waiting time.', author: 'Aisha K.' },
];

export default function DrAnjaliSharmaPage() {
  const handleAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Appointment request sent! Our team will call you to confirm the time slot.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-cyan-800">Dr. Anjali Sharma <span className="block text-sm font-normal text-gray-500">MD, General Physician</span></div>
          <nav className="hidden md:flex gap-6 font-medium text-gray-600">
            <Link href="#about" className="hover:text-cyan-700">About</Link>
            <Link href="#services" className="hover:text-cyan-700">Services</Link>
            <Link href="#testimonials" className="hover:text-cyan-700">Testimonials</Link>
          </nav>
          <Button asChild className="bg-cyan-700 hover:bg-cyan-800">
            <Link href="#appointment">Book Appointment</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center">
          <div className="py-12 md:py-24">
            <h1 className="text-4xl md:text-6xl font-bold text-cyan-900">Compassionate & <br/>Expert Medical Care</h1>
            <p className="text-lg text-gray-700 mt-4">Your health is our priority. Providing personalized care for you and your family.</p>
            <Button asChild size="lg" className="mt-8 bg-cyan-700 hover:bg-cyan-800 text-lg py-7 px-8">
              <Link href="#appointment">Book an Appointment <Calendar className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <img src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Dr. Anjali Sharma" className="rounded-l-full"/>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <img src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Dr. Anjali Sharma" className="rounded-lg shadow-lg"/>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-cyan-900 mb-4">About Dr. Anjali Sharma</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Dr. Anjali Sharma is a board-certified General Physician with over 15 years of experience in patient care. She completed her MD from the prestigious All India Institute of Medical Sciences (AIIMS), Delhi. She is dedicated to providing holistic and evidence-based medical care.</p>
            <p className="text-gray-700 leading-relaxed">Her approach is patient-centric, focusing on not just treating illnesses but also on promoting wellness and preventive care.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-cyan-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {services.map(service => (
              <div key={service.name} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="font-semibold text-gray-800">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-cyan-900 mb-12">What Our Patients Say</h2>
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-lg italic text-gray-700">"{t.quote}"</p>
                <footer className="mt-4 font-semibold text-cyan-800">- {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-20 bg-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
          <p className="text-cyan-100 mb-8">Fill out the form below and our team will call you back to confirm.</p>
          <form onSubmit={handleAppointment} className="grid sm:grid-cols-2 gap-4 text-left">
            <Input placeholder="Full Name *" required className="bg-cyan-600 border-cyan-500 placeholder:text-cyan-200" />
            <Input type="tel" placeholder="Phone Number *" required className="bg-cyan-600 border-cyan-500 placeholder:text-cyan-200" />
            <Input type="date" required className="bg-cyan-600 border-cyan-500 placeholder:text-cyan-200" />
            <Textarea placeholder="Reason for visit..." className="sm:col-span-2 bg-cyan-600 border-cyan-500 placeholder:text-cyan-200" />
            <div className="sm:col-span-2 text-center">
              <Button type="submit" size="lg" className="bg-white text-cyan-800 hover:bg-gray-200 font-bold text-lg py-6 px-10">Request Appointment</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div className="text-lg font-bold text-white">Dr. Anjali Sharma's Clinic</div>
            <div className="flex items-center gap-.3"><MapPin className="h-5 w-5 text-cyan-400"/><span>456 Health Ave, Pune, MH</span></div>
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-cyan-400"/><span>+91 91234 56789</span></div>
            <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-cyan-400"/><span>contact@drasharma.in</span></div>
        </div>
      </footer>
    </div>
  );
}
