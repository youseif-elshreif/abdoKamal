"use client";

import { motion, AnimatePresence } from "framer-motion";
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
                {/* Project Overview - Backend focused */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="grid md:grid-cols-2 gap-8 mb-8"
                >
                  {/* API Endpoints */}
                  <div
                    className="p-6 rounded-2xl border border-blue-400/20"
                    style={{
                      background: "var(--surface-elevated)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <h3
                      className="text-lg font-bold mb-4"
                      style={{ color: "var(--text)" }}
                    >
                      API Endpoints
                    </h3>
                    <div className="space-y-3">
                      {project.details.apiEndpoints?.map((endpoint, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-lg border border-gray-600/20 bg-gray-800/30"
                        >
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded ${
                              endpoint.method === "GET"
                                ? "bg-green-500/20 text-green-400"
                                : endpoint.method === "POST"
                                ? "bg-blue-500/20 text-blue-400"
                                : endpoint.method === "PUT"
                                ? "bg-orange-500/20 text-orange-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {endpoint.method}
                          </span>
                          <div className="flex-1 min-w-0">
                            <code
                              className="text-sm font-mono"
                              style={{ color: "var(--accent)" }}
                            >
                              {endpoint.path}
                            </code>
                            <p
                              className="text-xs mt-1"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {endpoint.description}
                            </p>
                          </div>
                        </div>
                      )) || (
                        <div className="flex items-center gap-2">
                          <FiGithub
                            className="w-4 h-4"
                            style={{ color: "var(--accent)" }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            Backend API Service
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div
                    className="p-6 rounded-2xl border border-blue-400/20"
                    style={{
                      background: "var(--surface-elevated)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <h3
                      className="text-lg font-bold mb-4"
                      style={{ color: "var(--text)" }}
                    >
                      Key Features
                    </h3>
                    <div className="space-y-2">
                      {project.details.features?.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span
                            className="text-sm"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {feature}
                          </span>
                        </div>
                      )) || (
                        <>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span
                              className="text-sm"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              RESTful API Design
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span
                              className="text-sm"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              Database Integration
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span
                              className="text-sm"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              Authentication System
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
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

                {/* Database & Architecture Info */}
                {(project.details.database || project.details.architecture) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                  >
                    {/* Database Info */}
                    {project.details.database && (
                      <div
                        className="p-6 rounded-2xl border border-blue-400/20"
                        style={{
                          background: "var(--surface-elevated)",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <h3
                          className="text-lg font-bold mb-4"
                          style={{ color: "var(--text)" }}
                        >
                          Database Structure
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-2 py-1 text-xs font-medium rounded bg-purple-500/20 text-purple-400">
                              {project.details.database.type}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {(
                              project.details.database.collections ||
                              project.details.database.tables
                            )?.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                                <code
                                  className="text-sm font-mono"
                                  style={{ color: "var(--accent)" }}
                                >
                                  {item}
                                </code>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Architecture Info */}
                    {project.details.architecture && (
                      <div
                        className="p-6 rounded-2xl border border-blue-400/20"
                        style={{
                          background: "var(--surface-elevated)",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <h3
                          className="text-lg font-bold mb-4"
                          style={{ color: "var(--text)" }}
                        >
                          Architecture
                        </h3>
                        <div className="space-y-2">
                          {project.details.architecture.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                              <span
                                className="text-sm"
                                style={{ color: "var(--text-secondary)" }}
                              >
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

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

                {/* API Endpoints - Backend specific */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-8"
                >
                  <div
                    className="rounded-2xl p-6 border border-blue-400/20"
                    style={{ background: "var(--surface-elevated)" }}
                  >
                    <h3
                      className="text-xl font-bold mb-4"
                      style={{ color: "var(--text)" }}
                    >
                      API Endpoints
                    </h3>
                    <div className="space-y-3 font-mono text-sm">
                      <div
                        className="flex items-center gap-3 p-3 rounded-lg"
                        style={{ background: "var(--surface)" }}
                      >
                        <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded">
                          GET
                        </span>
                        <span style={{ color: "var(--text-secondary)" }}>
                          /api/v1/users
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3 p-3 rounded-lg"
                        style={{ background: "var(--surface)" }}
                      >
                        <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded">
                          POST
                        </span>
                        <span style={{ color: "var(--text-secondary)" }}>
                          /api/v1/auth/login
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3 p-3 rounded-lg"
                        style={{ background: "var(--surface)" }}
                      >
                        <span className="px-2 py-1 text-xs bg-orange-500/20 text-orange-400 rounded">
                          PUT
                        </span>
                        <span style={{ color: "var(--text-secondary)" }}>
                          /api/v1/users/:id
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

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
