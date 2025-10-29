"use client";

import { motion } from "framer-motion";
import {
  FiCalendar,
  FiMapPin,
  FiBriefcase,
  FiAward,
  FiTrendingUp,
} from "react-icons/fi";
import { experiences, type Experience } from "../data/experience";
import {
  SectionWrapper,
  SectionHeader,
  GlassCard,
  AnimatedIcon,
  StatusBadge,
  StatsContainer,
  StatCard,
  TechTag,
} from "./shared";

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

  const getTypeVariant = (type: Experience["type"]) => {
    switch (type) {
      case "full-time":
        return "success" as const;
      case "part-time":
        return "info" as const;
      case "contract":
        return "warning" as const;
      case "internship":
        return "neutral" as const;
      default:
        return "neutral" as const;
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
          viewport={{ once: true, amount: 0.15 }}
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
      <GlassCard className="ml-8 p-6" hoverEffect index={index}>
        {/* Card header with modern layout */}
        <div className="mb-6 border-b border-blue-400/10 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <AnimatedIcon
                  variant="rotate"
                  size="md"
                  color="accent"
                  trigger="hover"
                >
                  <FiBriefcase />
                </AnimatedIcon>
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
            <StatusBadge
              variant={getTypeVariant(experience.type)}
              size="md"
              animated
            >
              {experience.type.replace("-", " ").toUpperCase()}
            </StatusBadge>
          </div>

          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div
              className="flex items-center gap-2"
              style={{ color: "var(--text-muted)" }}
            >
              <FiCalendar className="w-4 h-4" />
              <span>
                {formatDate(experience.startDate)} -{" "}
                {experience.endDate
                  ? formatDate(experience.endDate)
                  : "Present"}
              </span>
            </div>
            <div
              className="flex items-center gap-2"
              style={{ color: "var(--text-muted)" }}
            >
              <FiMapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Card content */}
        <div className="space-y-6">
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
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl border border-blue-400/10 hover:border-blue-400/25 transition-all duration-300"
                  style={{ background: "rgba(71, 85, 105, 0.1)" }}
                >
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full border border-blue-400/30 flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(59, 130, 246, 0.15)" }}
                  >
                    <FiTrendingUp
                      className="w-3 h-3"
                      style={{ color: "var(--accent)" }}
                    />
                  </div>
                  <span
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies with improved design */}
          <div>
            <h4
              className="text-sm font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--text)" }}
            >
              <div
                className="w-4 h-4 rounded border border-blue-400/30 flex items-center justify-center"
                style={{ background: "rgba(59, 130, 246, 0.15)" }}
              >
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></div>
              </div>
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <TechTag
                  key={tech}
                  name={tech}
                  index={techIndex}
                  variant="primary"
                  size="sm"
                />
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function Experience() {
  const totalExperience = experiences.length;
  const currentPositions = experiences.filter((exp) => !exp.endDate).length;

  return (
    <SectionWrapper
      id="experience"
      backgroundVariant="scattered"
      gradientDirection="diagonal"
    >
      <SectionHeader
        badge="Professional Journey"
        title="Work Experience"
        description="My professional evolution in DevOps and infrastructure engineering, building scalable systems and leading automation initiatives across diverse environments"
      />

      {/* Timeline with enhanced design */}
      <div className="relative mb-16">
        {/* Main timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/60 via-blue-500/40 to-blue-400/60" />

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

      {/* Stats footer */}
      <StatsContainer>
        <StatCard
          value={totalExperience}
          label="Total Positions"
          color="blue"
        />
        <div className="w-px h-8 bg-blue-400/20"></div>
        <StatCard
          value={currentPositions}
          label="Current Roles"
          color="green"
          icon={
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          }
        />
        <div className="w-px h-8 bg-blue-400/20"></div>
        <StatCard value="Building" label="Currently" color="purple" />
      </StatsContainer>
    </SectionWrapper>
  );
}
