import EnhancedHero from './components/EnhancedHero'
import TechStack from './components/TechStack'
import Services from './components/Services'
import SelectedWork from './components/SelectedWork'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-neutral-950">
      <section id="inicio">
        <EnhancedHero />
      </section>
      <TechStack />
      <section id="services">
        <Services />
      </section>
      <SelectedWork />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
