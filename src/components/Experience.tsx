"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiBriefcase, FiAward } from "react-icons/fi";
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
        return "bg-green-500/20 text-green-400 border-green-400/30";
      case "part-time":
        return "bg-blue-500/20 text-blue-400 border-blue-400/30";
      case "contract":
        return "bg-purple-500/20 text-purple-400 border-purple-400/30";
      case "internship":
        return "bg-orange-500/20 text-orange-400 border-orange-400/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-400/30";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      className="relative backdrop-blur-sm rounded-2xl border border-blue-400/30 card-float-elevated p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      style={{ background: "var(--surface-glass)" }}
    >
      {/* Timeline connector */}
      <div
        className="absolute -left-4 top-8 w-8 h-8 rounded-full border-4 shadow-lg flex items-center justify-center"
        style={{
          background: "var(--accent)",
          borderColor: "var(--primary)",
          boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
        }}
      >
        <FiBriefcase className="w-3 h-3 text-white" />
      </div>

      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3
              className="text-xl font-bold mb-1"
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
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getTypeColor(
              experience.type
            )}`}
          >
            {experience.type.replace("-", " ").toUpperCase()}
          </span>
        </div>

        <div
          className="flex flex-wrap items-center gap-4 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          <div className="flex items-center gap-1">
            <FiCalendar className="w-4 h-4" />
            <span>
              {formatDate(experience.startDate)} -{" "}
              {experience.endDate ? formatDate(experience.endDate) : "Present"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FiMapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p
        className="leading-relaxed mb-4"
        style={{ color: "var(--text-secondary)" }}
      >
        {experience.description}
      </p>

      {/* Achievements */}
      <div className="mb-4">
        <h4
          className="flex items-center gap-2 text-sm font-semibold mb-2"
          style={{ color: "var(--text)" }}
        >
          <FiAward className="w-4 h-4" style={{ color: "var(--accent)" }} />
          Key Achievements
        </h4>
        <ul className="space-y-1">
          {experience.achievements.map((achievement, idx) => (
            <li
              key={idx}
              className="text-sm flex items-start gap-2"
              style={{ color: "var(--text-secondary)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: "var(--accent)" }}
              ></span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-sm font-semibold text-slate-800 mb-2">
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200/50"
            >
              {tech}
            </span>
          ))}
        </div>
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
        background:
          "linear-gradient(135deg, var(--secondary) 0%, var(--primary) 50%, var(--secondary) 100%)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
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
              Professional Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 bg-clip-text text-transparent mb-4">
              Work Experience
            </h2>
          </motion.div>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            My professional journey in DevOps and infrastructure engineering,
            building scalable systems and leading automation initiatives
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: "var(--accent)", opacity: 0.3 }}
          ></div>

          <div className="space-y-8 ml-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
