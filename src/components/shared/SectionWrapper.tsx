"use client";

import { ReactNode } from "react";
import BackgroundElements from "./BackgroundElements";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  backgroundVariant?: "default" | "scattered" | "minimal";
  gradientDirection?: "horizontal" | "vertical" | "diagonal";
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  backgroundVariant = "default",
  gradientDirection = "diagonal",
}: SectionWrapperProps) {
  const getGradientStyle = () => {
    switch (gradientDirection) {
      case "horizontal":
        return "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)";
      case "vertical":
        return "linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%)";
      case "diagonal":
      default:
        return "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--primary) 100%)";
    }
  };

  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 relative ${className}`}
      style={{
        background: getGradientStyle(),
      }}
    >
      <BackgroundElements variant={backgroundVariant} />

      <div className="max-w-7xl mx-auto relative z-10">{children}</div>
    </section>
  );
}
