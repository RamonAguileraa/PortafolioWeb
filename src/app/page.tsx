import Hero from "./components/Hero";
import ExperienceTimeline from "./components/ExperienceTimeline";

import Footer from "./components/Footer";
import ProjectsAndContact from "./components/ProjectsAndContact";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExperienceTimeline />
      <ProjectsAndContact />
      <Footer />
    </main>
  );
}
