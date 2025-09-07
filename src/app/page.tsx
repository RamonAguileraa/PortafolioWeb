import Hero from "./components/Hero";
import ExperienceTimeline from "./components/ExperienceTimeline";
import About from "./about/page";
import Footer from "./components/Footer";
import ProjectsAndContact from "./components/ProjectsAndContact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ExperienceTimeline />
      <ProjectsAndContact />
      <Footer />
    </main>
  );
}
