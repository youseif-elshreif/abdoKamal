"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
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
    <div className={`relative ${index % 2 === 0 ? "translate-y-3" : ""}`}>
      {/* Floating accent glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-blue-600/15 -z-10 accent-rot blur-xl opacity-60"></div>
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-400/10 to-blue-500/5 -z-10 blur-sm"></div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        whileHover={{ scale: 1.03 }}
        className="relative backdrop-blur-lg rounded-3xl border border-blue-400/30 overflow-hidden cursor-pointer group transition-all duration-500 card-float-elevated"
        style={{
          background: "var(--surface-glass)",
          boxShadow:
            "0 16px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
        onClick={() => onOpen(project.id)}
      >
        <div className="relative h-44 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-800/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* Accent overlay patterns */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-80"></div>
          <div className="absolute bottom-4 left-4 w-1 h-8 bg-gradient-to-t from-blue-400 to-transparent rounded-full opacity-60"></div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3
              className="text-xl font-semibold leading-tight group-hover:text-blue-400 transition-colors duration-300"
              style={{ color: "var(--text)" }}
            >
              {project.title}
            </h3>
            <FiExternalLink
              className="w-5 h-5 group-hover:text-blue-400 flex-shrink-0 ml-2 transition-all duration-300 transform group-hover:scale-110"
              style={{ color: "var(--text-muted)" }}
            />
          </div>
          <p
            className="text-sm mb-4 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.short}
          </p>{" "}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full font-medium border border-blue-400/30 backdrop-blur-sm"
                  style={{
                    background: "rgba(59, 130, 246, 0.15)",
                    color: "var(--accent)",
                    boxShadow:
                      "0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span
                  className="text-xs px-3 py-1 rounded-full font-semibold border border-slate-500/30 backdrop-blur-sm"
                  style={{
                    background: "rgba(148, 163, 184, 0.15)",
                    color: "var(--text-muted)",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  +{project.tech.length - 3} more
                </span>
              )}
            </div>

            <button
              className="cursor-pointer ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium border border-blue-400/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transform hover:scale-105 active:scale-95"
              style={{
                background: "var(--gradient-blue)",
                boxShadow:
                  "0 4px 15px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
              }}
              onClick={(e) => {
                e.stopPropagation();
                onOpen(project.id);
              }}
            >
              Show details
            </button>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
