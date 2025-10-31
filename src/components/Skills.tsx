"use client";

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
    title: "Backend Languages",
    skills: [
      { name: "Node.js", icon: <FiServer />, level: "Expert" },
      { name: "Python", icon: <FiSettings />, level: "Advanced" },
      { name: "Java", icon: <FiBox />, level: "Advanced" },
      { name: "TypeScript", icon: <FiTool />, level: "Expert" },
    ],
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB", icon: <FiCloud />, level: "Expert" },
      { name: "PostgreSQL", icon: <FiServer />, level: "Advanced" },
      { name: "Redis", icon: <FiActivity />, level: "Advanced" },
      { name: "MySQL", icon: <FiSettings />, level: "Intermediate" },
    ],
  },
  {
    title: "API Development",
    skills: [
      { name: "REST APIs", icon: <FiGitBranch />, level: "Expert" },
      { name: "GraphQL", icon: <FiMonitor />, level: "Advanced" },
      { name: "WebSockets", icon: <FiActivity />, level: "Advanced" },
    ],
  },
  {
    title: "Framework & Tools",
    skills: [
      { name: "Express.js", icon: <FiTool />, level: "Expert" },
      { name: "Nest.js", icon: <FiBox />, level: "Advanced" },
      { name: "Fastify", icon: <FiServer />, level: "Intermediate" },
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
        {group.skills.map((skill) => (
          <div
            key={skill.name}
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
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default function Skills() {


  return (
    <SectionWrapper id="skills" backgroundVariant="default">
      <SectionHeader
        badge="Technical Expertise"
        title="Skills & Technologies"
        description="Expertise in modern backend development, from scalable APIs to robust database architectures and efficient server-side solutions"
      />

      {/* Skills grid with modern card design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {skillGroups.map((group, index) => (
          <SkillCard key={group.title} group={group} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
