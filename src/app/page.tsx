import EnhancedHero from "./components/EnhancedHero";
import EnhancedExperience from "./components/EnhancedExperience";
import About from "./about/page";
import Footer from "./components/Footer";
import EnhancedProjects from "./components/EnhancedProjects";
import ProjectsAndContact from "./components/ProjectsAndContact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <EnhancedHero />
      <About />
      <EnhancedExperience />
      <EnhancedProjects />
      <ProjectsAndContact />
      <Footer />
    </main>
  );
}
