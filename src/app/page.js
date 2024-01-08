import About from '@/components/About'
import Hero from '@/components/Hero'
import LatestArticles from '@/components/LatestArticles'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex-auto">
    <Hero />
    <About />
    <LatestArticles />
    </main>
  )
}
