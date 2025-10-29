"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatusBadgeProps {
  children: ReactNode;
  variant: "success" | "warning" | "error" | "info" | "neutral";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

export default function StatusBadge({
  children,
  variant,
  size = "md",
  animated = false,
  className = "",
}: StatusBadgeProps) {
  const variantStyles = {
    success: "bg-green-500/15 text-green-400 border-green-400/40",
    warning: "bg-yellow-500/15 text-yellow-400 border-yellow-400/40",
    error: "bg-red-500/15 text-red-400 border-red-400/40",
    info: "bg-blue-500/15 text-blue-400 border-blue-400/40",
    neutral: "bg-slate-500/15 text-slate-400 border-slate-400/40",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-xs rounded-lg",
    md: "px-3 py-1.5 text-xs rounded-xl",
    lg: "px-4 py-2 text-sm rounded-xl",
  };

  const BadgeComponent = animated ? motion.div : "div";
  const animationProps = animated
    ? {
        initial: { scale: 0 },
        whileInView: { scale: 1 },
        viewport: { once: true, amount: 0.15 },
        transition: { type: "spring" as const, stiffness: 300 },
      }
    : {};

  return (
    <BadgeComponent
      {...animationProps}
      className={`
        inline-flex 
        items-center 
        gap-1 
        font-bold 
        border 
        shadow-sm
        ${variantStyles[variant]} 
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </BadgeComponent>
  );
}
