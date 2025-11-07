import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Products } from '@/components/sections/products';
import { SocialProof } from '@/components/sections/social-proof';
import { CaseStudies } from '@/components/sections/case-studies';
import { Demos } from '@/components/sections/demos';
import { CTA } from '@/components/sections/cta';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { StickyContact } from '@/components/ui/sticky-contact';
import { JsonLd } from '@/components/seo/json-ld';

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SpicyBeats",
          "url": "https://spicybeats.com",
          "logo": "https://spicybeats.com/logo.svg",
          "description": "Enterprise web & mobile app development, AI implementation, and product launches.",
          "foundingDate": "2024",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-SPICY",
            "contactType": "sales",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://twitter.com/spicybeats",
            "https://linkedin.com/company/spicybeats"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Development Services",
            "itemListElement": [
              {
                "@type": "OfferCatalog",
                "name": "Web Development",
                "description": "Marketing sites, headless CMS, e-commerce solutions"
              },
              {
                "@type": "OfferCatalog", 
                "name": "Mobile App Development",
                "description": "iOS, Android, React Native, and web applications"
              },
              {
                "@type": "OfferCatalog",
                "name": "AI Implementation",
                "description": "Workflows, RAG systems, automations, and chatbots"
              }
            ]
          }
        }}
      />
      
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Products />
        <CaseStudies />
        <Demos />
        <CTA />
      </main>
      <Footer />
      <StickyContact />
    </>
  );
}