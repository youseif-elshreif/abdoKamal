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
      return "bg-gradient-to-r from-blue-500 to-blue-600 text-white";
    case "Advanced":
      return "bg-gradient-to-r from-blue-400 to-blue-500 text-white";
    case "Intermediate":
      return "bg-gradient-to-r from-blue-300 to-blue-400 text-slate-900";
    default:
      return "bg-gradient-to-r from-slate-400 to-slate-500 text-white";
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
      {/* Background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
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
              Expertise & Proficiency
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
          </motion.div>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Comprehensive expertise in modern DevOps practices, cloud
            technologies, and infrastructure automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="p-6 backdrop-blur-sm rounded-2xl border border-blue-400/30 card-float-elevated hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 group"
              style={{
                background: "var(--surface-glass)",
              }}
            >
              <h3
                className="text-xl font-semibold mb-6 group-hover:text-blue-400 transition-colors duration-300"
                style={{ color: "var(--text)" }}
              >
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-lg backdrop-blur-sm border border-blue-400/20 hover:bg-blue-500/5 hover:border-blue-400/40 transition-all duration-300"
                    style={{ background: "rgba(71, 85, 105, 0.3)" }}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div
                        className="w-6 h-6 flex items-center justify-center text-xl"
                        style={{ color: "var(--accent)" }}
                        aria-hidden="true"
                      >
                        {skill.icon}
                      </div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full border border-blue-400/30 ${getLevelColor(
                        skill.level
                      )}`}
                      style={{
                        boxShadow:
                          "0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
