"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (projectId: string) => void;
  index: number;
}

export default function ProjectCard({
  project,
  onOpen,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Main card container with modern design */}
      <div
        className="relative border border-blue-400/20 overflow-hidden transition-all duration-700 transform-gpu hover:border-blue-400/40 shadow-xl hover:shadow-2xl"
        style={{
          borderRadius: "20px",
          background:
            "linear-gradient(145deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.9) 100%)",
        }}
      >
        {/* Top status bar */}
        <div className="flex items-center justify-between p-4 border-b border-blue-400/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span
              className="text-xs font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              Active Project
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-blue-400/40 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-blue-400/60 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-blue-400/80 rounded-full"></div>
          </div>
        </div>

        {/* Project image with modern frame */}
        <div className="relative h-48 overflow-hidden">
          <div
            className="absolute inset-2 rounded-2xl overflow-hidden border border-blue-400/20"
            style={{ background: "var(--surface-elevated)" }}
          >
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Floating action button */}
            <motion.button
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-3 right-3 w-8 h-8 rounded-lg border border-blue-400/30 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{
                background: "rgba(59, 130, 246, 0.2)",
                color: "white",
              }}
              onClick={(e) => {
                e.stopPropagation();
                onOpen(project.id);
              }}
            >
              <FiExternalLink className="w-4 h-4 mx-auto" />
            </motion.button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-12 h-12 bg-blue-500/10 rounded-br-3xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-400/10 rounded-tl-2xl" />
        </div>

        {/* Content section */}
        <div className="p-6 space-y-4">
          {/* Title and description */}
          <div className="space-y-2">
            <h3
              className="text-xl font-bold leading-tight group-hover:text-blue-400 transition-colors duration-300"
              style={{ color: "var(--text)" }}
            >
              {project.title}
            </h3>
            <p
              className="text-sm leading-relaxed line-clamp-2"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.short}
            </p>
          </div>

          {/* Tech stack - modern pills */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="px-3 py-1 text-xs font-medium rounded-full border border-blue-400/25 backdrop-blur-sm"
                style={{
                  background: "rgba(59, 130, 246, 0.1)",
                  color: "var(--accent)",
                }}
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 3 && (
              <span
                className="px-3 py-1 text-xs font-medium rounded-full border border-slate-400/25 backdrop-blur-sm"
                style={{
                  background: "rgba(148, 163, 184, 0.1)",
                  color: "var(--text-muted)",
                }}
              >
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* Action bar */}
          <div className="flex items-center justify-between pt-2">
            <div
              className="flex items-center gap-2 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <FiGithub className="w-3 h-3" />
              <span>Open Source</span>
            </div>

            <motion.button
              whileHover={{ x: 4 }}
              onClick={() => onOpen(project.id)}
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--accent)" }}
            >
              View Details
              <FiArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Hover glow effect */}
        <div
          className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
            boxShadow: "0 20px 60px rgba(59, 130, 246, 0.15)",
          }}
        />
      </div>
    </motion.div>
  );
}
