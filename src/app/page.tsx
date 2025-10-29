"use client";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ProjectsGrid from "../components/ProjectsGrid";
import CertificatesGrid from "../components/CertificatesGrid";
import Footer from "../components/Footer";
import Contact from "@/components/Contact";
import ProjectModal from "../components/ProjectModal";
import { useState } from "react";
import { projects, Project } from "../data/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <ProjectsGrid onOpenModal={handleOpenModal} />
        <CertificatesGrid />
        <Contact />
      </main>
      <Footer />

      {/* Modal at the top level */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
