import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Demos } from '@/components/sections/demos';

export default function DemosPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Demos />
      </main>
      <Footer />
    </>
  );
}
