"use client";

import Image from "next/image";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import pic from "../../public/images/me.jpg";
import { OptimizedSection } from "./OptimizedMotion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      {/* Background gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <OptimizedSection
            animationType="full"
            className="space-y-8 lg:order-1"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <div
                  className="text-sm font-medium tracking-wide uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  Welcome to my portfolio
                </div>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ color: "var(--text)" }}
                >
                  Abdelrahman Kamal
                </h1>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Backend Developer & Software Engineer
              </div>
              <p
                className="text-lg max-w-2xl leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Passionate about building robust backend systems, developing
                scalable APIs, and architecting efficient database solutions
                that power modern applications with high performance and
                reliability.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/Mohamed_moustafa_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-2xl hover:from-blue-500 hover:to-blue-400 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 active:scale-95 border border-blue-400/20"
                style={{
                  boxShadow:
                    "0 10px 40px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </a>

              <div className="flex gap-3">
                <a
                  href="https://github.com/mhmdmstfa2010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-14 h-14 border border-blue-400/30 rounded-2xl hover:border-blue-400 hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 active:scale-95 card-float"
                  style={{ color: "var(--text-secondary)" }}
                  aria-label="GitHub Profile"
                >
                  <FiGithub className="w-6 h-6" />
                </a>

                <a
                  href="https://www.linkedin.com/in/mohamed-moustafa20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-14 h-14 border border-blue-400/30 rounded-2xl hover:border-blue-400 hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 active:scale-95 card-float"
                  style={{ color: "var(--text-secondary)" }}
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>

                <a
                  href="mailto:mhmdmstfa710@gmail.com"
                  className="inline-flex items-center justify-center w-14 h-14 border border-blue-400/30 rounded-2xl hover:border-blue-400 hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 active:scale-95 card-float"
                  style={{ color: "var(--text-secondary)" }}
                  aria-label="Send Email"
                >
                  <FiMail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </OptimizedSection>

          {/* Profile Image */}
          <OptimizedSection
            animationType="simple"
            className="relative lg:order-2"
          >
            {/* Background glow effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-3xl transform rotate-2 scale-105 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/15 to-transparent rounded-3xl transform -rotate-1 scale-110 blur-2xl"></div>

            {/* Image container with glass morphism */}
            <div
              className="relative rounded-3xl p-8 transform -rotate-1 hover:rotate-0 transition-all duration-500 card-float-elevated"
              style={{
                background: "var(--surface-glass)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
              }}
            >
              <div className="relative aspect-square max-w-sm mx-auto">
                {/* Inner glow for image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl blur-sm"></div>

                <Image
                  src={pic}
                  alt="Abdelrahman Kamal - DevOps Engineer"
                  width={400}
                  height={400}
                  className="relative w-full h-full object-cover rounded-2xl transition-all duration-500 hover:scale-105 border border-blue-400/30"
                  priority
                  style={{
                    boxShadow:
                      "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                />

                {/* Accent dots/indicators */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-2 border-slate-700 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-2 border-slate-700"></div>
              </div>
            </div>
          </OptimizedSection>
        </div>
      </div>
    </section>
  );
}
