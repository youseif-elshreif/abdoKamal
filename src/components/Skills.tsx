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
import {
  SectionWrapper,
  SectionHeader,
  GlassCard,
  AnimatedIcon,
  StatusBadge,
  StatsContainer,
  StatCard,
} from "./shared";

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
    title: "Container Orchestration",
    skills: [
      { name: "Docker", icon: <FiBox />, level: "Expert" },
      { name: "Kubernetes", icon: <FiServer />, level: "Advanced" },
    ],
  },
  {
    title: "Monitoring & Logging",
    skills: [
      { name: "Prometheus", icon: <FiActivity />, level: "Advanced" },
      { name: "Grafana", icon: <FiMonitor />, level: "Advanced" },
    ],
  },
];

interface SkillCardProps {
  group: SkillGroup;
  index: number;
}

function SkillCard({ group, index }: SkillCardProps) {
  return (
    <GlassCard className="group p-6" hoverEffect index={index}>
      {/* Card header */}
      <div className="mb-6 border-b border-blue-400/10 pb-4">
        <h3
          className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300"
          style={{ color: "var(--text)" }}
        >
          {group.title}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gradient-to-r from-blue-400/20 to-transparent"></div>
          <span
            className="text-xs font-medium px-2 py-1 rounded-full bg-blue-500/10"
            style={{ color: "var(--accent)" }}
          >
            {group.skills.length} Skills
          </span>
        </div>
      </div>

      {/* Skills list */}
      <div className="space-y-4">
        {group.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-500/5 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <AnimatedIcon
                variant="scale"
                size="md"
                color="accent"
                trigger="hover"
              >
                {skill.icon}
              </AnimatedIcon>
              <div>
                <p
                  className="font-medium text-sm"
                  style={{ color: "var(--text)" }}
                >
                  {skill.name}
                </p>
              </div>
            </div>
            <StatusBadge
              variant={
                skill.level === "Expert"
                  ? "info"
                  : skill.level === "Advanced"
                  ? "success"
                  : skill.level === "Intermediate"
                  ? "warning"
                  : "neutral"
              }
              size="sm"
            >
              {skill.level}
            </StatusBadge>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}

export default function Skills() {
  const totalSkills = skillGroups.reduce(
    (total, group) => total + group.skills.length,
    0
  );
  const expertSkills = skillGroups.reduce(
    (total, group) =>
      total + group.skills.filter((skill) => skill.level === "Expert").length,
    0
  );

  return (
    <SectionWrapper id="skills" backgroundVariant="default">
      <SectionHeader
        badge="Technical Expertise"
        title="Skills & Technologies"
        description="Mastery across the modern DevOps ecosystem, from cloud infrastructure to container orchestration and automation pipelines"
      />

      {/* Skills grid with modern card design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {skillGroups.map((group, index) => (
          <SkillCard key={group.title} group={group} index={index} />
        ))}
      </div>

      {/* Stats footer */}
      <StatsContainer>
        <StatCard value={totalSkills} label="Total Skills" color="blue" />
        <div className="w-px h-8 bg-blue-400/20"></div>
        <StatCard value={expertSkills} label="Expert Level" color="green" />
        <div className="w-px h-8 bg-blue-400/20"></div>
        <StatCard
          value="Active"
          label="Learning Status"
          color="purple"
          icon={
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          }
        />
      </StatsContainer>
    </SectionWrapper>
  );
}
