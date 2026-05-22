import { About } from './components/About'
import { Contact } from './components/Contact'
import { Credentials } from './components/Credentials'
import { Experience } from './components/Experience'
import { Expertise } from './components/Expertise'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AmbientBackground } from './components/graphics/AmbientBackground'
import { SectionDivider } from './components/graphics/SectionDivider'

function App() {
  return (
    <div className="relative min-h-screen bg-navy-950 text-slate-300 antialiased">
      <AmbientBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider variant="slant" />
          <Expertise />
          <SectionDivider flip />
          <Experience />
          <SectionDivider variant="slant" flip />
          <Credentials />
          <SectionDivider />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
