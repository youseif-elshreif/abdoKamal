"use client";

import { motion } from "framer-motion";
import {
  FiAward,
  FiCalendar,
  FiBookOpen,
  FiTrendingUp,
  FiStar,
} from "react-icons/fi";
import { certificates, type Certificate } from "../data/certificates";
import { useState } from "react";
import Image from "next/image";

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

function CertificateCard({ certificate, index }: CertificateCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const isRecent =
      (today.getTime() - date.getTime()) / (1000 * 3600 * 24) <= 365;

    return {
      formatted: date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      }),
      isRecent,
    };
  };

  const dateInfo = formatDate(certificate.issueDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div
        className="relative h-full border border-blue-400/20 hover:border-blue-400/40 transition-all duration-700 overflow-hidden shadow-xl hover:shadow-2xl"
        style={{
          borderRadius: "24px",
          background:
            "linear-gradient(145deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.9) 100%)",
        }}
      >
        {/* Recent badge */}
        {dateInfo.isRecent && (
          <div className="absolute -top-2 -right-2 z-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="px-3 py-1 rounded-xl text-xs font-bold border bg-green-500/20 text-green-400 border-green-400/40"
              style={{
                boxShadow: "0 4px 12px rgba(34, 197, 94, 0.2)",
              }}
            >
              <FiStar className="w-3 h-3 inline mr-1" />
              NEW
            </motion.div>
          </div>
        )}

        {/* Certificate image section */}
        <div className="relative h-48 mb-6 rounded-t-[24px] overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-600/20">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
          <Image
            src={certificate.image}
            alt={certificate.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Floating cert icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="absolute top-4 left-4 z-20 w-12 h-12 rounded-2xl border border-blue-400/30 flex items-center justify-center shadow-lg"
            style={{
              background:
                "linear-gradient(145deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.9) 100%)",
              color: "var(--accent)",
            }}
          >
            <FiAward className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Card content */}
        <div className="px-6 pb-6 flex flex-col">
          {/* Header section */}
          <div className="mb-6">
            <h3
              className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight"
              style={{ color: "var(--text)" }}
            >
              {certificate.name}
            </h3>

            <div className="flex items-center gap-3 mb-4">
              <div
                className="text-base font-semibold flex-1"
                style={{ color: "var(--accent)" }}
              >
                {certificate.issuer}
              </div>
            </div>

            {/* Date info */}
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <FiCalendar className="w-4 h-4" />
              <span>Earned: {dateInfo.formatted}</span>
            </div>
          </div>

          {/* Provider-specific benefits */}
          <div className="mb-6 flex-1">
            <h4
              className="text-xs font-bold mb-3 flex items-center gap-2"
              style={{ color: "var(--text)" }}
            >
              <FiTrendingUp
                className="w-3 h-3"
                style={{ color: "var(--accent)" }}
              />
              Certification Benefits
            </h4>
            <div className="space-y-2">
              {certificate.issuer === "Amazon Web Services" && (
                <>
                  <div
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>AWS Cloud expertise validation</span>
                  </div>
                  <div
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Industry-recognized cloud skills</span>
                  </div>
                </>
              )}

              {certificate.issuer === "Microsoft" && (
                <>
                  <div
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Azure platform proficiency</span>
                  </div>
                  <div
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Microsoft ecosystem knowledge</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Action button */}
          <div className="mt-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 border shadow-md hover:shadow-lg"
              style={{
                background: "rgba(59, 130, 246, 0.15)",
                color: "var(--accent)",
                borderColor: "rgba(59, 130, 246, 0.3)",
                boxShadow: "0 2px 8px rgba(59, 130, 246, 0.1)",
              }}
            >
              <FiBookOpen className="w-4 h-4" />
              <span className="text-sm">View Certificate</span>
            </motion.button>
          </div>
        </div>

        {/* Hover effects */}
        <div
          className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          }}
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent group-hover:via-blue-400/80 transition-all duration-500" />
      </div>
    </motion.div>
  );
}

export default function CertificatesGrid() {
  const [sortBy, setSortBy] = useState<"date" | "issuer">("date");

  const sortedCertificates = [...certificates].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime();
    } else {
      return a.issuer.localeCompare(b.issuer);
    }
  });

  const recentCertificates = certificates.filter((cert) => {
    const date = new Date(cert.issueDate);
    const today = new Date();
    return (today.getTime() - date.getTime()) / (1000 * 3600 * 24) <= 365;
  }).length;

  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background:
          "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--primary) 100%)",
      }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-400/4 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-3/4 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative">
              <div
                className="text-sm font-bold tracking-wider uppercase mb-3 flex items-center justify-center gap-2"
                style={{ color: "var(--accent)" }}
              >
                <div className="w-8 h-0.5 bg-blue-400/60"></div>
                Professional Growth
                <div className="w-8 h-0.5 bg-blue-400/60"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Certifications
              </h2>
            </div>
          </div>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Professional certifications and continuous learning achievements
            that validate my expertise in cloud technologies and industry best
            practices
          </p>
        </motion.div>

        {/* Modern sort controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <div
            className="flex border border-blue-400/20 rounded-2xl p-2 shadow-lg"
            style={{
              background:
                "linear-gradient(145deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.9) 100%)",
            }}
          >
            {(["date", "issuer"] as const).map((sort) => (
              <button
                key={sort}
                onClick={() => setSortBy(sort)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                  sortBy === sort
                    ? "text-white shadow-lg"
                    : "hover:text-blue-400"
                }`}
                style={{
                  background:
                    sortBy === sort
                      ? "linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.9) 100%)"
                      : "transparent",
                  color: sortBy === sort ? "white" : "var(--text-muted)",
                  boxShadow:
                    sortBy === sort
                      ? "0 4px 16px rgba(59, 130, 246, 0.3)"
                      : "none",
                }}
              >
                {sort === "date" ? "Latest First" : "By Provider"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Certificates grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <CertificateCard certificate={certificate} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <div
            className="flex items-center gap-8 px-8 py-4 rounded-2xl border border-blue-400/20 shadow-lg"
            style={{
              background:
                "linear-gradient(145deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.8) 100%)",
            }}
          >
            <div className="text-center">
              <div
                className="text-2xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                {certificates.length}
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                Total Certificates
              </div>
            </div>
            <div className="w-px h-8 bg-blue-400/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">
                {recentCertificates}
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                Earned This Year
              </div>
            </div>
            <div className="w-px h-8 bg-blue-400/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                {new Set(certificates.map((c) => c.issuer)).size}
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                Providers
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
