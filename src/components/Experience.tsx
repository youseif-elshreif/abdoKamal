"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiBriefcase, FiAward, FiTrendingUp } from "react-icons/fi";
import { experiences, type Experience } from "../data/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const getTypeColor = (type: Experience["type"]) => {
    switch (type) {
      case "full-time":
        return "bg-green-500/15 text-green-400 border-green-400/30";
      case "part-time":
        return "bg-blue-500/15 text-blue-400 border-blue-400/30";
      case "contract":
        return "bg-purple-500/15 text-purple-400 border-purple-400/30";
      case "internship":
        return "bg-orange-500/15 text-orange-400 border-orange-400/30";
      default:
        return "bg-slate-500/15 text-slate-400 border-slate-400/30";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Timeline connector */}
      <div className="absolute -left-6 top-8 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="w-4 h-4 rounded-full border-2 shadow-lg flex items-center justify-center z-10"
          style={{
            background: "var(--accent)",
            borderColor: "var(--primary)",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
          }}
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </motion.div>
      </div>

      {/* Modern experience card */}
      <div 
        className="relative backdrop-blur-xl border border-blue-400/20 transition-all duration-700 hover:border-blue-400/40 ml-8"
        style={{
          borderRadius: '20px',
          background: 'rgba(30, 41, 59, 0.85)',
          backdropFilter: 'blur(24px)',
        }}
      >
        {/* Card header with modern layout */}
        <div className="p-6 border-b border-blue-400/10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-xl border border-blue-400/30 flex items-center justify-center backdrop-blur-sm"
                  style={{
                    background: 'rgba(59, 130, 246, 0.15)',
                    color: 'var(--accent)'
                  }}
                >
                  <FiBriefcase className="w-5 h-5" />
                </motion.div>
                <div>
                  <h3
                    className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors duration-300"
                    style={{ color: "var(--text)" }}
                  >
                    {experience.position}
                  </h3>
                  <p
                    className="text-lg font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {experience.company}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Type badge */}
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-xl text-xs font-bold border backdrop-blur-sm ${getTypeColor(experience.type)}`}
              style={{
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
              }}
            >
              {experience.type.replace("-", " ").toUpperCase()}
            </motion.span>
          </div>

          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
              <FiCalendar className="w-4 h-4" />
              <span>
                {formatDate(experience.startDate)} -{" "}
                {experience.endDate ? formatDate(experience.endDate) : "Present"}
              </span>
            </div>
            <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
              <FiMapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Card content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <p
            className="leading-relaxed text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            {experience.description}
          </p>

          {/* Achievements with modern design */}
          <div>
            <h4
              className="flex items-center gap-2 text-sm font-bold mb-4"
              style={{ color: "var(--text)" }}
            >
              <FiAward className="w-4 h-4" style={{ color: "var(--accent)" }} />
              Key Achievements
            </h4>
            <div className="space-y-3">
              {experience.achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + idx * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-xl border border-blue-400/10 hover:border-blue-400/25 transition-all duration-300"
                  style={{ background: "rgba(71, 85, 105, 0.1)" }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-blue-400/30 flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(59, 130, 246, 0.15)" }}
                  >
                    <FiTrendingUp className="w-3 h-3" style={{ color: "var(--accent)" }} />
                  </div>
                  <span
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies with improved design */}
          <div>
            <h4 
              className="text-sm font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--text)" }}
            >
              <div className="w-4 h-4 rounded border border-blue-400/30 flex items-center justify-center"
                style={{ background: "rgba(59, 130, 246, 0.15)" }}
              >
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></div>
              </div>
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 + techIndex * 0.03 }}
                  className="px-3 py-1.5 text-xs font-medium rounded-xl border border-blue-400/25 backdrop-blur-sm cursor-default"
                  style={{
                    background: "rgba(59, 130, 246, 0.12)",
                    color: "var(--accent)",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div 
          className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          }}
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent group-hover:via-blue-400/80 transition-all duration-500" />
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background: "linear-gradient(135deg, var(--secondary) 0%, var(--primary) 50%, var(--secondary) 100%)",
      }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-600/6 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Enhanced header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <motion.div 
              className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-xl"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <div className="relative">
              <div 
                className="text-sm font-bold tracking-wider uppercase mb-3 flex items-center justify-center gap-2"
                style={{ color: 'var(--accent)' }}
              >
                <div className="w-8 h-0.5 bg-blue-400/60"></div>
                Professional Journey
                <div className="w-8 h-0.5 bg-blue-400/60"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Work Experience
              </h2>
            </div>
          </div>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            My professional evolution in DevOps and infrastructure engineering, 
            building scalable systems and leading automation initiatives across diverse environments
          </p>
        </motion.div>

        {/* Timeline with enhanced design */}
        <div className="relative">
          {/* Main timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/60 via-blue-500/40 to-blue-400/60"
          />

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-6 px-8 py-4 rounded-2xl border border-blue-400/20 backdrop-blur-sm"
            style={{ background: 'rgba(30, 41, 59, 0.6)' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                Currently Building
              </span>
            </div>
            <div className="w-px h-4 bg-blue-400/20"></div>
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Next-generation infrastructure solutions
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}