'use client'

import { gsap } from 'gsap'

import { Navbar } from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Contact from './components/contact'
import Experience from './components/experience'
import Footer from './components/footer'

import { SplitText } from 'gsap/dist/SplitText'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 main-background-gradient overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
