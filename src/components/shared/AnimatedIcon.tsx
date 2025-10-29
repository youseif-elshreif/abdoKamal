"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedIconProps {
  children: ReactNode;
  variant?: "bounce" | "rotate" | "pulse" | "scale";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "accent" | "success" | "warning" | "error";
  className?: string;
  trigger?: "hover" | "view" | "always";
}

export default function AnimatedIcon({
  children,
  variant = "scale",
  size = "md",
  color = "accent",
  className = "",
  trigger = "hover",
}: AnimatedIconProps) {
  const sizeStyles = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const colorStyles = {
    primary: "bg-slate-700/20 border-slate-400/30 text-slate-300",
    accent: "bg-blue-500/15 border-blue-400/30 text-blue-400",
    success: "bg-green-500/15 border-green-400/30 text-green-400",
    warning: "bg-yellow-500/15 border-yellow-400/30 text-yellow-400",
    error: "bg-red-500/15 border-red-400/30 text-red-400",
  };

  const getAnimation = () => {
    switch (variant) {
      case "bounce":
        return {
          y: [0, -4, 0],
          transition: {
            duration: 0.6,
            repeat: trigger === "always" ? Infinity : 0,
          },
        };
      case "rotate":
        return {
          rotate: 360,
          transition: { duration: 0.5 },
        };
      case "pulse":
        return {
          scale: [1, 1.1, 1],
          transition: {
            duration: 0.6,
            repeat: trigger === "always" ? Infinity : 0,
          },
        };
      case "scale":
      default:
        return {
          scale: 1.1,
          transition: { duration: 0.3 },
        };
    }
  };

  const animationProps = {
    ...(trigger === "view" && {
      initial: { scale: 0, opacity: 0 },
      whileInView: { scale: 1, opacity: 1 },
      viewport: { once: true },
    }),
    ...(trigger === "hover" && {
      whileHover: getAnimation(),
    }),
    ...(trigger === "always" && {
      animate: getAnimation(),
    }),
  };

  return (
    <motion.div
      {...animationProps}
      className={`
        rounded-xl 
        border 
        flex 
        items-center 
        justify-center 
        shadow-md 
        transition-all 
        duration-300
        ${sizeStyles[size]} 
        ${colorStyles[color]}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
