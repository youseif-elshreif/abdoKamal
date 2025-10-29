"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  className = "text-center mb-20",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      <div className="relative inline-block">
        <motion.div
          className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative">
          {badge && (
            <div
              className="text-sm font-bold tracking-wider uppercase mb-3 flex items-center justify-center gap-2"
              style={{ color: "var(--accent)" }}
            >
              <div className="w-8 h-0.5 bg-blue-400/60"></div>
              {badge}
              <div className="w-8 h-0.5 bg-blue-400/60"></div>
            </div>
          )}
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent mb-6">
            {title}
          </h2>
        </div>
      </div>
      <p
        className="text-lg max-w-3xl mx-auto leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>
    </motion.div>
  );
}
