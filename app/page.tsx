import { HeroSection } from '@/components/hero-section'
import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-hidden bg-slate-50 selection:bg-slate-200">
      <Navbar />
      <HeroSection />
    </main>
  )
}
