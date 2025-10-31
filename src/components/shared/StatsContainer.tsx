"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatsContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function StatsContainer({
  children,
  className = "flex justify-center mt-8 sm:mt-16",
  delay = 0.4,
}: StatsContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      <div
        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-blue-400/20 shadow-lg w-full sm:w-auto"
        style={{
          background:
            "linear-gradient(145deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.8) 100%)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
