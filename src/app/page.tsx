import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ProjectsGrid from "../components/ProjectsGrid";
import CertificatesGrid from "../components/CertificatesGrid";
import Footer from "../components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <ProjectsGrid />
        <CertificatesGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
