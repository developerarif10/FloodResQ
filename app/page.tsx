
import { BentoGrid } from '@/components/bento-grid'
import { HeroSection } from '@/components/hero-section'

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Card Section */}
      <BentoGrid />
    </main>
  )
}
