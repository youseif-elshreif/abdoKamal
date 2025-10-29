"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatCardProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  color?: "blue" | "green" | "yellow" | "red" | "purple";
  index?: number;
}

export default function StatCard({
  value,
  label,
  icon,
  color = "blue",
  index = 0,
}: StatCardProps) {
  const colorStyles = {
    blue: "text-blue-400",
    green: "text-green-400",
    yellow: "text-yellow-400",
    red: "text-red-400",
    purple: "text-purple-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      {icon && (
        <div className="mb-2 flex justify-center">
          <div className={`text-2xl ${colorStyles[color]}`}>{icon}</div>
        </div>
      )}
      <div className={`text-2xl font-bold ${colorStyles[color]}`}>{value}</div>
      <div className="text-xs" style={{ color: "var(--text-muted)" }}>
        {label}
      </div>
    </motion.div>
  );
}
