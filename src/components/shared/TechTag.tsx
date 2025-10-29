"use client";

import { motion } from "framer-motion";

interface TechTagProps {
  name: string;
  index?: number;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  clickable?: boolean;
  onClick?: () => void;
}

export default function TechTag({
  name,
  index = 0,
  variant = "primary",
  size = "md",
  clickable = false,
  onClick,
}: TechTagProps) {
  const variantStyles = {
    primary: "bg-blue-500/12 text-blue-400 border-blue-400/25",
    secondary: "bg-slate-500/12 text-slate-400 border-slate-400/25",
    accent: "bg-purple-500/12 text-purple-400 border-purple-400/25",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-xs rounded-lg",
    md: "px-3 py-1.5 text-xs rounded-xl",
    lg: "px-4 py-2 text-sm rounded-xl",
  };

  const Component = clickable ? motion.button : motion.span;

  return (
    <Component
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={clickable ? { scale: 1.05 } : undefined}
      whileTap={clickable ? { scale: 0.95 } : undefined}
      transition={{ delay: index * 0.03 }}
      onClick={onClick}
      className={`
        font-medium 
        border 
        shadow-sm
        transition-all
        duration-200
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${clickable ? "cursor-pointer hover:shadow-md" : "cursor-default"}
      `}
      style={{
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
      }}
    >
      {name}
    </Component>
  );
}
