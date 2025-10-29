"use client";

import { motion } from "framer-motion";
import { certificates } from "../data/certificates";
import CertificateCard from "./CertificateCard";

export default function CertificatesGrid() {
  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background:
          "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--primary) 100%)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-16 right-16 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div className="inline-block" transition={{ duration: 0.3 }}>
            <div
              className="text-sm font-medium tracking-wide uppercase mb-2"
              style={{ color: "var(--accent)" }}
            >
              Professional Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 bg-clip-text text-transparent mb-4">
              Certifications
            </h2>
          </motion.div>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Professional certifications that validate my expertise in cloud
            platforms, DevOps tools, and modern infrastructure practices
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
