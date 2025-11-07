import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Products } from '@/components/sections/products';
import { CTA } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Products - SaversDream & BudgetKing',
  description: 'Explore our flagship products: SaversDream local deals platform and BudgetKing budgeting app. See how we build scalable solutions.',
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="bg-navy py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real products solving real problems. See how we build scalable solutions that users love.
            </p>
          </div>
        </div>
        <Products />
        <CTA />
      </main>
      <Footer />
    </>
  );
}