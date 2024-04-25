import { Navbar } from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Contact from './components/contact'
import Experience from './components/experience'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 main-background-gradient">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
