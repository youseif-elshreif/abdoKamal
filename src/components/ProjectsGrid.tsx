"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { BackgroundElements } from "./shared";

interface ProjectsGridProps {
  onOpenModal: (projectId: string) => void;
}

export default function ProjectsGrid({ onOpenModal }: ProjectsGridProps) {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background:
          "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--primary) 100%)",
      }}
    >
      {/* Background pattern */}
      <div className="opacity-30">
        <BackgroundElements variant="scattered" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div className="inline-block" transition={{ duration: 0.3 }}>
            <div
              className="text-sm font-medium tracking-wide uppercase mb-2"
              style={{ color: "var(--accent)" }}
            >
              Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
          </motion.div>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            A selection of backend and full-stack projects that showcase my
            expertise in API development, database design, and scalable
            architecture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={onOpenModal}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
