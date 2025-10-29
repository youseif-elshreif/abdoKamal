"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Certificate } from "../data/certificates";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ scale: 1.05, y: -6 }}
      className="backdrop-blur-sm rounded-2xl border border-blue-400/30 overflow-hidden cursor-pointer transition-all duration-500 card-float-elevated hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      style={{ background: "var(--surface-glass)" }}
    >
      <div
        className="relative h-40 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(29, 78, 216, 0.05))",
        }}
      >
        <Image
          src={certificate.image}
          alt={`${certificate.name} certificate`}
          width={200}
          height={150}
          className="w-full h-full object-contain rounded-lg p-2"
        />
        {/* Accent elements */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
      </div>

      <div className="p-4">
        <h3
          className="font-semibold text-sm mb-2 leading-tight"
          style={{ color: "var(--text)" }}
        >
          {certificate.name}
        </h3>

        <div className="space-y-1">
          <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
            {certificate.issuer}
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            {new Date(certificate.issueDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
