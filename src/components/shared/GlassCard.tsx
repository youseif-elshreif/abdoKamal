"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderRadius?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "accent";
  index?: number;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  borderRadius = "lg",
  variant = "primary",
  index = 0,
}: GlassCardProps) {
  const radiusMap = {
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "28px",
  };

  const variantStyles = {
    primary: {
      background:
        "linear-gradient(145deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.9) 100%)",
      border: "border-blue-400/20",
      hoverBorder: "hover:border-blue-400/40",
    },
    secondary: {
      background:
        "linear-gradient(145deg, rgba(51, 65, 85, 0.95) 0%, rgba(71, 85, 105, 0.9) 100%)",
      border: "border-slate-400/20",
      hoverBorder: "hover:border-slate-400/40",
    },
    accent: {
      background:
        "linear-gradient(145deg, rgba(37, 99, 235, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)",
      border: "border-blue-400/30",
      hoverBorder: "hover:border-blue-400/50",
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={hoverEffect ? { scale: 1.02 } : undefined}
      className={`
        relative 
        border 
        transition-all 
        duration-700 
        shadow-xl 
        ${currentVariant.border}
        ${hoverEffect ? `${currentVariant.hoverBorder} hover:shadow-2xl` : ""}
        ${className}
      `}
      style={{
        borderRadius: radiusMap[borderRadius],
        background: currentVariant.background,
      }}
    >
      {children}

      {/* Hover glow effect */}
      {hoverEffect && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            borderRadius: radiusMap[borderRadius],
            background:
              "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Top accent line */}
      <div
        className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent ${
          hoverEffect ? "group-hover:via-blue-400/80" : ""
        } transition-all duration-500`}
      />
    </motion.div>
  );
}
