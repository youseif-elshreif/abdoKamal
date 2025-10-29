"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { FiX, FiGithub } from "react-icons/fi";
import { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.28 },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.18 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            className="relative backdrop-blur-lg rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-blue-400/30 card-float-elevated"
            style={{
              background: "var(--surface-glass)",
              boxShadow:
                "0 32px 64px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Header */}
            <div
              className="sticky top-0 backdrop-blur-md border-b border-blue-400/20 px-4 py-3 md:px-8 md:py-6 flex items-center justify-between z-10"
              style={{ background: "var(--surface-elevated)" }}
            >
              <div>
                <h2
                  id="modal-title"
                  className="text-lg md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 bg-clip-text text-transparent"
                >
                  {project.title}
                </h2>
                <p
                  className="hidden md:block text-sm mt-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.short}
                </p>
              </div>
              <motion.button
                onClick={onClose}
                className="p-3 hover:bg-blue-500/10 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50 border border-transparent hover:border-blue-400/30"
                style={{ color: "var(--text-muted)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close modal"
              >
                <FiX className="w-6 h-6 cursor-pointer" />
              </motion.button>
            </div>

            <div className="max-h-[calc(90vh-120px)] overflow-y-auto">
              <div className="p-8">
                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-8 border border-blue-400/20"
                  style={{
                    background: "var(--surface)",
                    boxShadow:
                      "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent z-10"></div>
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={800}
                    height={400}
                    className="w-full h-full object-contain rounded-2xl p-4"
                    style={{ background: "var(--surface-elevated)" }}
                  />
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8"
                >
                  <h3
                    className="text-xl font-bold mb-4 flex items-center gap-2"
                    style={{ color: "var(--text)" }}
                  >
                    <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + index * 0.05,
                        }}
                        className="px-4 py-2 text-sm rounded-full font-medium border border-blue-400/30 hover:shadow-md hover:scale-105 transition-all duration-200 backdrop-blur-sm"
                        style={{
                          background: "rgba(59, 130, 246, 0.15)",
                          color: "var(--accent)",
                          boxShadow:
                            "0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
                >
                  <div
                    className="backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 card-float"
                    style={{ background: "var(--surface-glass)" }}
                  >
                    <h3
                      className="text-xl font-bold mb-4 flex items-center gap-2"
                      style={{ color: "var(--text)" }}
                    >
                      <div className="w-2 h-6 bg-gradient-to-b from-red-400 to-orange-400 rounded-full"></div>
                      Problem
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.details.problem}
                    </p>
                  </div>

                  <div
                    className="backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 card-float"
                    style={{ background: "var(--surface-glass)" }}
                  >
                    <h3
                      className="text-xl font-bold mb-4 flex items-center gap-2"
                      style={{ color: "var(--text)" }}
                    >
                      <div className="w-2 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full"></div>
                      Solution
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.details.solution}
                    </p>
                  </div>
                </motion.div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-8"
                >
                  <div
                    className="rounded-2xl p-6 border border-blue-400/30 backdrop-blur-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(29, 78, 216, 0.05))",
                      boxShadow:
                        "0 8px 25px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <h3
                      className="text-xl font-bold mb-4 flex items-center gap-2"
                      style={{ color: "var(--text)" }}
                    >
                      <div className="w-2 h-6 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full"></div>
                      Results & Impact
                    </h3>
                    <p
                      className="leading-relaxed font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.details.results}
                    </p>
                  </div>
                </motion.div>

                {/* Architecture Image */}
                {/* Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a
                    href={project.details.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-medium rounded-full border border-blue-400/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transform hover:scale-105"
                    style={{
                      background: "var(--gradient-blue)",
                      boxShadow:
                        "0 8px 25px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 12px 35px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                    }}
                  >
                    <FiGithub className="w-5 h-5" />
                    View Repository
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
