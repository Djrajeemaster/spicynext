import Link from 'next/link';
import { Zap, Twitter, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerNavigation = {
  services: [
    { name: 'Website Development', href: '/services#web' },
    { name: 'App Development', href: '/services#mobile' },
    { name: 'AI Implementation', href: '/services#ai' },
    { name: 'Product Launch', href: '/services#launch' },
  ],
  products: [
    { name: 'SaversDream', href: '/products/saversdream' },
    { name: 'BudgetKing', href: '/products/budgetking' },
    { name: 'Request Demo', href: '/demo' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Status', href: '/status' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-electric-blue rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">SpicyBeats</span>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Build apps and websites that convert—fast. Enterprise development with measurable results.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-electric-blue" />
                <span className="text-sm">+1-555-SPICY</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-electric-blue" />
                <span className="text-sm">hello@spicybeats.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-electric-blue" />
                <span className="text-sm">WhatsApp Support</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/spicybeats"
                className="p-2 bg-gray-800 rounded-lg hover:bg-electric-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/spicybeats"
                className="p-2 bg-gray-800 rounded-lg hover:bg-electric-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerNavigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-sm">Newsletter</h4>
              <p className="text-xs text-gray-400 mb-3">
                Get insights on AI, development, and growth.
              </p>
              <Button variant="outline" size="sm" className="w-full border-gray-600 text-gray-300 hover:bg-electric-blue hover:text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© {new Date().getFullYear()} SpicyBeats. All rights reserved.</span>
              <span>Made with ❤️ for fast growth</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🚀 99.9% uptime guaranteed</span>
              <span>⚡ Sub-3s load times</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}