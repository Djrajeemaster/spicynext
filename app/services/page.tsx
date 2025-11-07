import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Services } from '@/components/sections/services';
import { CTA } from '@/components/sections/cta';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Services - Web & Mobile Development, AI Implementation',
  description: 'Enterprise web development, mobile app development, and AI implementation services. From concept to launch with measurable results.',
  openGraph: {
    title: 'Services - SpicyBeats Development',
    description: 'Enterprise web development, mobile app development, and AI implementation services.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SpicyBeats Development Services",
          "provider": {
            "@type": "Organization",
            "name": "SpicyBeats"
          },
          "serviceType": ["Web Development", "Mobile App Development", "AI Implementation"],
          "description": "Enterprise development services including web applications, mobile apps, and AI implementation."
        }}
      />
      
      <Header />
      <main className="pt-16">
        <div className="bg-navy py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Development Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From MVPs to enterprise platforms—we build digital products that drive real business results.
            </p>
          </div>
        </div>
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}