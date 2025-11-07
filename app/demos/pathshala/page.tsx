'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, UserCheck, Award, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const courses = [
  { name: 'IIT-JEE Foundation (Class 9-10)', desc: 'Building strong fundamentals for future success.' },
  { name: 'NEET-UG Preparation (Class 11-12)', desc: 'Comprehensive coaching for medical aspirants.' },
  { name: 'JEE Main & Advanced (12th & Dropper)', desc: 'Intensive program for top engineering colleges.' },
  { name: 'Olympiads & NTSE', desc: 'Specialized training for competitive school exams.' },
];

const faculty = [
  { name: 'Dr. R. Sharma', subject: 'Physics', qualification: 'PhD, IIT Bombay', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Prof. S. Verma', subject: 'Chemistry', qualification: 'M.Sc, Delhi University', image: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Mr. A. Khan', subject: 'Mathematics', qualification: 'B.Tech, IIT Kanpur', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Ms. P. Reddy', subject: 'Biology', qualification: 'M.Phil, JNU', image: 'https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function PathshalaPage() {
  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your inquiry! Our admission counselor will contact you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <Link href="#" className="text-3xl font-extrabold text-orange-600">PATHSHALA</Link>
          <nav className="hidden md:flex gap-8 font-semibold text-gray-700">
            <Link href="#courses" className="hover:text-orange-600">Courses</Link>
            <Link href="#faculty" className="hover:text-orange-600">Faculty</Link>
            <Link href="#results" className="hover:text-orange-600">Results</Link>
          </nav>
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="#inquiry">Admission Inquiry</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-orange-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center">
          <div className="py-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-orange-900">Shape Your Future, <br/>Achieve Your Dreams.</h1>
            <p className="text-xl text-gray-700 mt-6">India's leading coaching institute for competitive exams. Join us to unlock your potential.</p>
            <Button asChild size="lg" className="mt-8 bg-orange-600 hover:bg-orange-700 text-lg py-7 px-9">
              <Link href="#courses">Explore Courses</Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Student studying"/>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
          <div className="p-4">
            <UserCheck className="h-12 w-12 text-orange-600 mx-auto mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Expert Faculty</h3>
            <p className="text-gray-600">Learn from experienced teachers from top institutes.</p>
          </div>
          <div className="p-4">
            <Award className="h-12 w-12 text-orange-600 mx-auto mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Proven Results</h3>
            <p className="text-gray-600">Consistent track record of top ranks in JEE, NEET, and Olympiads.</p>
          </div>
          <div className="p-4">
            <BookOpen className="h-12 w-12 text-orange-600 mx-auto mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Comprehensive Material</h3>
            <p className="text-gray-600">Well-researched and updated study material.</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-orange-900 mb-12">Courses Offered</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map(course => (
              <div key={course.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-orange-800">{course.name}</h3>
                <p className="text-gray-600 mt-2">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-orange-900 mb-12">Our Expert Faculty</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {faculty.map(f => (
              <div key={f.name} className="text-center">
                <img src={f.image} alt={f.name} className="rounded-full w-32 h-32 mx-auto mb-4 shadow-lg object-cover"/>
                <h3 className="text-xl font-bold">{f.name}</h3>
                <p className="text-orange-700 font-semibold">{f.subject}</p>
                <p className="text-gray-500">{f.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section id="inquiry" className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Admission Inquiry</h2>
          <p className="text-orange-100 mb-8">Have questions? Fill out the form and our counselor will get in touch.</p>
          <form onSubmit={handleInquiry} className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Student Name *" required className="bg-orange-500 border-orange-400 placeholder:text-orange-200" />
            <Input placeholder="Parent Name *" required className="bg-orange-500 border-orange-400 placeholder:text-orange-200" />
            <Input type="tel" placeholder="Phone Number *" required className="bg-orange-500 border-orange-400 placeholder:text-orange-200" />
            <Input type="email" placeholder="Email Address *" required className="bg-orange-500 border-orange-400 placeholder:text-orange-200" />
            <div className="sm:col-span-2 text-center">
              <Button type="submit" size="lg" className="bg-white text-orange-600 hover:bg-gray-200 font-bold text-lg py-6 px-12">Submit</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-bold text-white mb-4">PATHSHALA</p>
          <div className="flex justify-center gap-8 mb-4">
            <div className="flex items-center gap-2"><Phone className="h-5 w-5 text-orange-400"/> +91-9988776655</div>
            <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-orange-400"/> admissions@pathshala.in</div>
          </div>
          <p>&copy; {new Date().getFullYear()} Pathshala Education. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
