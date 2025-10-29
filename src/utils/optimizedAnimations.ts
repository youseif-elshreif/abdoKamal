"use client";

import { Variants } from "framer-motion";

// Variants محسنة للأداء
export const performanceVariants = {
  // للأجهزة القوية - انيميشن كامل
  fullAnimation: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.4, ease: "easeOut" },
  } as Variants,

  // للأجهزة الضعيفة - انيميشن مبسط
  simpleAnimation: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  } as Variants,

  // بدون انيميشن للأجهزة الضعيفة جداً
  noAnimation: {
    initial: {},
    animate: {},
    exit: {},
    transition: {},
  } as Variants,

  // Container للـ stagger animations
  container: {
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  } as Variants,

  // Item للـ stagger
  item: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2 },
  } as Variants,
};

// Helper functions لاختيار النوع المناسب
export function getOptimizedVariant(
  enableAnimations: boolean,
  isLowEndDevice: boolean,
  animationType: "full" | "simple" | "none" = "full"
) {
  if (!enableAnimations || isLowEndDevice) {
    return performanceVariants.noAnimation;
  }

  switch (animationType) {
    case "simple":
      return performanceVariants.simpleAnimation;
    case "none":
      return performanceVariants.noAnimation;
    default:
      return performanceVariants.fullAnimation;
  }
}

// Modal variants محسنة
export const optimizedModalVariants = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.15 },
  } as Variants,

  modal: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
    transition: { duration: 0.2 },
  } as Variants,
};

// CSS-only animations كـ fallback
export const cssAnimations = {
  fadeIn: "animate-[fadeIn_0.3s_ease-out]",
  slideUp: "animate-[slideUp_0.3s_ease-out]",
  scaleUp: "animate-[scaleUp_0.2s_ease-out]",
};
