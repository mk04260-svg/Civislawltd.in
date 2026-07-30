import Blog from '@/components/blog'
import CTA from '@/components/cta'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import PracticeAreas from '@/components/practice-areas'
import Stats from '@/components/stats'
import Testimonials from '@/components/testimonials'
import WhatsAppButton from '@/components/whatsapp-button'
import WhyCivis from '@/components/why-civis'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <PracticeAreas />
      <WhyCivis />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
