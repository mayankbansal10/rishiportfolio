import { About } from './components/About'
import { CompanyLogos } from './components/CompanyLogos'
import { Contact } from './components/Contact'
import { Credentials } from './components/Credentials'
import { Experience } from './components/Experience'
import { Expertise } from './components/Expertise'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-300 antialiased">
      <Header />
      <main>
        <Hero />
        <CompanyLogos />
        <About />
        <Expertise />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
