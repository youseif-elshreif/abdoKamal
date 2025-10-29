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
import {
  SectionWrapper,
  SectionHeader,
  GlassCard,
  AnimatedIcon,
  StatusBadge,
  StatsContainer,
  StatCard,
} from "./shared";

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
    <GlassCard
      className="group relative h-full overflow-hidden"
      hoverEffect
      index={index}
    >
      {/* Recent badge */}
      {dateInfo.isRecent && (
        <div className="absolute -top-2 -right-2 z-20">
          <StatusBadge variant="success" size="sm" animated>
            <FiStar className="w-3 h-3" />
            NEW
          </StatusBadge>
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
        <div className="absolute top-4 left-4 z-20">
          <AnimatedIcon
            variant="bounce"
            size="lg"
            color="accent"
            trigger="view"
          >
            <FiAward />
          </AnimatedIcon>
        </div>
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
    </GlassCard>
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

  const uniqueProviders = new Set(certificates.map((c) => c.issuer)).size;

  return (
    <SectionWrapper id="certificates" backgroundVariant="scattered">
      <SectionHeader
        badge="Professional Growth"
        title="Certifications"
        description="Professional certifications and continuous learning achievements that validate my expertise in cloud technologies and industry best practices"
      />

      {/* Modern sort controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
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
                sortBy === sort ? "text-white shadow-lg" : "hover:text-blue-400"
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
      <motion.div
        layout
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
      >
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
      <StatsContainer>
        <StatCard
          value={certificates.length}
          label="Total Certificates"
          color="blue"
        />
        <div className="w-px h-8 bg-blue-400/20"></div>
        <StatCard
          value={recentCertificates}
          label="Earned This Year"
          color="green"
        />
        <div className="w-px h-8 bg-blue-400/20"></div>
        <StatCard value={uniqueProviders} label="Providers" color="purple" />
      </StatsContainer>
    </SectionWrapper>
  );
}
