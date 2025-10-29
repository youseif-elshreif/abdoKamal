"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { usePerformance } from "../contexts/PerformanceContext";
import { getOptimizedVariant } from "../utils/optimizedAnimations";

interface OptimizedMotionProps
  extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "exit"> {
  children: React.ReactNode;
  animationType?: "full" | "simple" | "none";
  enableHover?: boolean;
  className?: string;
  fallbackClassName?: string; // CSS class للأجهزة الضعيفة
}

export function OptimizedMotion({
  children,
  animationType = "full",
  enableHover = true,
  className = "",
  fallbackClassName = "",
  ...props
}: OptimizedMotionProps) {
  const { enableAnimations, isLowEndDevice } = usePerformance();

  // للأجهزة الضعيفة - استخدم div عادي مع CSS animations
  if (isLowEndDevice && !enableAnimations) {
    return (
      <div
        className={`${className} ${fallbackClassName}`}
        {...(props as any)} //eslint-disable-line
      >
        {children}
      </div>
    );
  }

  const variant = getOptimizedVariant(
    enableAnimations,
    isLowEndDevice,
    animationType
  );

  const hoverProps =
    enableHover && enableAnimations && !isLowEndDevice
      ? {
          whileHover: { scale: 1.02 },
          transition: { duration: 0.15 },
        }
      : {};

  return (
    <motion.div {...variant} {...hoverProps} className={className} {...props}>
      {children}
    </motion.div>
  );
}

// Specialized components
export function OptimizedCard({ children, ...props }: OptimizedMotionProps) {
  return (
    <OptimizedMotion
      animationType="simple"
      fallbackClassName="animate-[fadeIn_0.3s_ease-out]"
      {...props}
    >
      {children}
    </OptimizedMotion>
  );
}

export function OptimizedSection({ children, ...props }: OptimizedMotionProps) {
  return (
    <OptimizedMotion
      animationType="full"
      enableHover={false}
      fallbackClassName="animate-[slideUp_0.4s_ease-out]"
      {...props}
    >
      {children}
    </OptimizedMotion>
  );
}
