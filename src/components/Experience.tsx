"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCalendar,
  FiMapPin,
  FiBriefcase,
  FiAward,
  FiTrendingUp,
  FiClock,
  FiUsers,
  FiTarget,
  FiChevronDown,
  FiChevronUp,
  FiExternalLink,
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
  isExpanded: boolean;
  onToggle: () => void;
}

function ExperienceCard({
  experience,
  index,
  isExpanded,
  onToggle,
}: ExperienceCardProps) {
  const formatDate = (dateString: string) => {
    if (dateString === "present") return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const getTypeConfig = (type: Experience["type"]) => {
    switch (type) {
      case "full-time":
        return {
          variant: "success" as const,
          label: "Full-time",
          icon: FiBriefcase,
        };
      case "part-time":
        return { variant: "info" as const, label: "Part-time", icon: FiClock };
      case "contract":
        return {
          variant: "warning" as const,
          label: "Contract",
          icon: FiUsers,
        };
      case "internship":
        return {
          variant: "info" as const,
          label: "Internship",
          icon: FiTarget,
        };
      case "training":
        return {
          variant: "neutral" as const,
          label: "Training",
          icon: FiAward,
        };
      default:
        return {
          variant: "neutral" as const,
          label: "Other",
          icon: FiBriefcase,
        };
    }
  };

  const typeConfig = getTypeConfig(experience.type);
  const TypeIcon = typeConfig.icon;

  const calculateDuration = () => {
    const start = new Date(experience.startDate);
    const end =
      experience.endDate === "present"
        ? new Date()
        : new Date(experience.endDate!);
    const months = Math.round(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30)
    );

    if (months < 1) return "Less than 1 month";
    if (months === 1) return "1 month";
    if (months < 12) return `${months} months`;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 1 && remainingMonths === 0) return "1 year";
    if (years === 1) return `1 year ${remainingMonths} months`;
    if (remainingMonths === 0) return `${years} years`;
    return `${years} years ${remainingMonths} months`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline line connector */}
      {index < experiences.length - 1 && (
        <div
          className="absolute left-4 sm:left-6 top-20 w-0.5 h-32 opacity-30"
          style={{
            background:
              "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      )}

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
        className="absolute left-2 sm:left-4 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 z-10 flex items-center justify-center"
        style={{
          background: "var(--accent)",
          borderColor: "var(--primary)",
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
        }}
      >
        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white"></div>
      </motion.div>

      {/* Experience Card */}
      <div className="ml-8 sm:ml-16 mb-6 sm:mb-8 cursor-pointer" onClick={onToggle}>
        <GlassCard className="hover:shadow-xl transition-all duration-300">
          <div className="p-4 sm:p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3 sm:gap-0">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <AnimatedIcon
                    variant="scale"
                    size="md"
                    color="accent"
                    trigger="view"
                  >
                    <TypeIcon />
                  </AnimatedIcon>
                  <StatusBadge variant={typeConfig.variant} animated={true}>
                    {typeConfig.label}
                  </StatusBadge>
                  {experience.endDate === "present" && (
                    <StatusBadge variant="success" animated={true}>
                      Current
                    </StatusBadge>
                  )}
                </div>

                <h3
                  className="text-lg sm:text-xl font-bold mb-1"
                  style={{ color: "var(--text)" }}
                >
                  {experience.position}
                </h3>

                <div
                  className="text-base sm:text-lg font-semibold mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  {experience.company}
                </div>

                {/* Meta info */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-blue-400" size={12} />
                    <span style={{ color: "var(--text-secondary)" }}>
                      {experience.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-blue-400" size={12} />
                    <span style={{ color: "var(--text-secondary)" }}>
                      {formatDate(experience.startDate)} -{" "}
                      {formatDate(experience.endDate || "present")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiClock className="text-blue-400" size={12} />
                    <span style={{ color: "var(--text-secondary)" }}>
                      {calculateDuration()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expand/Collapse button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg hover:bg-blue-500/10 transition-colors self-start sm:self-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
              >
                {isExpanded ? (
                  <FiChevronUp className="text-blue-400" size={18} />
                ) : (
                  <FiChevronDown className="text-blue-400" size={18} />
                )}
              </motion.button>
            </div>

            {/* Description */}
            <p
              className="text-xs sm:text-sm leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              {experience.description}
            </p>

            {/* Expandable Content */}
            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {isExpanded && (
                <div className="pt-4 border-t border-blue-400/20">
                  {/* Achievements */}
                  {experience.achievements &&
                    experience.achievements.length > 0 && (
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <FiAward className="text-blue-400" size={14} />
                          <h4
                            className="font-semibold text-xs sm:text-sm"
                            style={{ color: "var(--text)" }}
                          >
                            Key Achievements
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {experience.achievements.map(
                            (achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: achIndex * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <div
                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ backgroundColor: "var(--accent)" }}
                                />
                                <span
                                  className="text-xs sm:text-sm leading-relaxed"
                                  style={{ color: "var(--text-secondary)" }}
                                >
                                  {achievement}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* Technologies */}
                  {experience.technologies &&
                    experience.technologies.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <FiTrendingUp className="text-blue-400" size={14} />
                          <h4
                            className="font-semibold text-xs sm:text-sm"
                            style={{ color: "var(--text)" }}
                          >
                            Technologies & Tools
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <TechTag
                              key={tech}
                              name={tech}
                              variant="primary"
                              size="sm"
                              index={techIndex}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              )}
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleCard = (experienceId: string) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(experienceId)) {
        newSet.delete(experienceId);
      } else {
        newSet.add(experienceId);
      }
      return newSet;
    });
  };

  const totalExperience = experiences.reduce((total, exp) => {
    const start = new Date(exp.startDate);
    const end = exp.endDate === "present" ? new Date() : new Date(exp.endDate!);
    return (
      total +
      Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30))
    );
  }, 0);

  const formatTotalExperience = () => {
    if (totalExperience < 12) return `${totalExperience} months`;
    const years = Math.floor(totalExperience / 12);
    const months = totalExperience % 12;
    if (months === 0) return `${years}+ years`;
    return `${years}.${Math.round((months / 12) * 10)} years`;
  };

  const completedProjects = experiences.reduce(
    (total, exp) => total + (exp.achievements?.length || 0),
    0
  );
  const uniqueTechnologies = [
    ...new Set(experiences.flatMap((exp) => exp.technologies || [])),
  ].length;

  return (
    <SectionWrapper id="experience" className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <SectionHeader
            badge="Career Journey"
            title="Professional Experience"
            description="My journey in backend development and software engineering"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main timeline line */}
          <div
            className="absolute left-4 sm:left-6 top-0 w-0.5 opacity-20"
            style={{
              height: `${experiences.length * 150}px`,
              background:
                "linear-gradient(to bottom, var(--accent), var(--accent-secondary))",
            }}
          />

          {/* Experience Cards */}
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isExpanded={expandedCards.has(experience.id)}
                onToggle={() => toggleCard(experience.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
