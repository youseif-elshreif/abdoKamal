"use client";

import { motion } from "framer-motion";
import {
  FiGitBranch,
  FiCloud,
  FiSettings,
  FiBox,
  FiActivity,
  FiServer,
  FiMonitor,
  FiTool,
} from "react-icons/fi";

const getLevelColor = (
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner"
) => {
  switch (level) {
    case "Expert":
      return "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-400/30";
    case "Advanced":
      return "bg-gradient-to-r from-blue-500 to-blue-400 text-white border-blue-300/30";
    case "Intermediate":
      return "bg-gradient-to-r from-blue-400 to-blue-300 text-slate-900 border-blue-200/30";
    default:
      return "bg-gradient-to-r from-slate-500 to-slate-400 text-white border-slate-400/30";
  }
};

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner";
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "CI/CD & Version Control",
    skills: [
      { name: "GitHub Actions", icon: <FiGitBranch />, level: "Expert" },
      { name: "Jenkins", icon: <FiTool />, level: "Expert" },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", icon: <FiCloud />, level: "Expert" },
      { name: "Azure", icon: <FiCloud />, level: "Beginner" },
    ],
  },
  {
    title: "Infrastructure as Code",
    skills: [
      { name: "Terraform", icon: <FiSettings />, level: "Expert" },
      { name: "Ansible", icon: <FiTool />, level: "Advanced" },
    ],
  },
  {
    title: "Containers & Orchestration",
    skills: [
      { name: "Docker", icon: <FiBox />, level: "Expert" },
      { name: "Kubernetes", icon: <FiServer />, level: "Expert" },
      { name: "Helm", icon: <FiSettings />, level: "Beginner" },
    ],
  },
  {
    title: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", icon: <FiActivity />, level: "Expert" },
      { name: "Grafana", icon: <FiMonitor />, level: "Expert" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: "var(--primary)" }}
    >
      {/* Modern background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/3 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-blue-600/4 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative">
              <div
                className="text-sm font-bold tracking-wider uppercase mb-3 flex items-center justify-center gap-2"
                style={{ color: "var(--accent)" }}
              >
                <div className="w-8 h-0.5 bg-blue-400/60"></div>
                Technical Expertise
                <div className="w-8 h-0.5 bg-blue-400/60"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Skills & Technologies
              </h2>
            </div>
          </div>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Mastery across the modern DevOps ecosystem, from cloud
            infrastructure to container orchestration and automation pipelines
          </p>
        </motion.div>

        {/* Skills grid with modern card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
              className="group"
            >
              {/* Modern skill category card */}
              <div
                className="relative backdrop-blur-2xl border border-blue-400/20 transition-all duration-700 hover:border-blue-400/40 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  background: "rgba(30, 41, 59, 0.8)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Card header */}
                <div className="p-6 border-b border-blue-400/10">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl border border-blue-400/30 flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(59, 130, 246, 0.15)",
                        color: "var(--accent)",
                      }}
                    >
                      <FiServer className="w-5 h-5" />
                    </div>
                    <h3
                      className="text-lg font-bold group-hover:text-blue-400 transition-colors duration-300"
                      style={{ color: "var(--text)" }}
                    >
                      {group.title}
                    </h3>
                  </div>
                </div>

                {/* Skills list */}
                <div className="p-6 space-y-4">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: groupIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.4,
                      }}
                      className="flex items-center justify-between p-4 rounded-2xl border border-blue-400/10 hover:border-blue-400/30 transition-all duration-300 hover:bg-blue-500/5"
                      style={{ background: "rgba(71, 85, 105, 0.15)" }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-8 h-8 flex items-center justify-center text-lg transition-transform duration-300 hover:scale-110"
                          style={{ color: "var(--accent)" }}
                        >
                          {skill.icon}
                        </div>
                        <span
                          className="font-medium"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {skill.name}
                        </span>
                      </div>

                      {/* Modern level indicator */}
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1.5 text-xs font-bold rounded-xl border backdrop-blur-sm ${getLevelColor(
                          skill.level
                        )}`}
                        style={{
                          boxShadow:
                            "0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        {skill.level}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 70%)",
                  }}
                />

                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent group-hover:via-blue-400/80 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <div
            className="flex items-center gap-4 px-8 py-4 rounded-2xl border border-blue-400/20 backdrop-blur-sm"
            style={{ background: "rgba(30, 41, 59, 0.6)" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Continuously Learning
              </span>
            </div>
            <div className="w-px h-4 bg-blue-400/20"></div>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>
              Always exploring new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
