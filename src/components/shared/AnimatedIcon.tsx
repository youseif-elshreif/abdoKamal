"use client";

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
  size = "md",
  color = "accent",
  className = "",
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

  return (
    <div
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
    </div>
  );
}
