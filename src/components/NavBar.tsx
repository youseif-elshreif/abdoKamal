"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(element.id);
        }
      });
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    // إغلاق القائمة أولاً
    setIsOpen(false);

    // انتظار صغير لإغلاق القائمة قبل السكرول
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const rect = target.getBoundingClientRect();
        const offsetTop = window.pageYOffset + rect.top;
        // تحسين للموبايل - offset أكبر
        const offset = window.innerWidth < 768 ? 100 : 80;

        // استخدام scrollTo محسن للموبايل
        if ("scrollBehavior" in document.documentElement.style) {
          window.scrollTo({
            top: offsetTop - offset,
            behavior: "smooth",
          });
        } else {
          // Fallback للمتصفحات القديمة
          window.scrollTo(0, offsetTop - offset);
        }
      }
    }, 100); // انتظار 100ms لإغلاق القائمة
  };

  return (
    <header
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[min(94%,1200px)] h-[77.6px]"
      role="banner"
    >
      {/* Modern segmented navbar with floating elements */}
      <div className="flex items-center justify-between gap-4">
        {/* Left: Logo section - standalone floating element */}
        <motion.div
          className="backdrop-blur-xl rounded-2xl border border-blue-400/30 p-3 transition-all duration-300 hover:border-blue-400/50"
          style={{
            background: "rgba(30, 41, 59, 0.95)",
            boxShadow:
              "0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
          }}
          whileHover={{ scale: 1.02 }}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="cursor-pointer flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 rounded-lg p-1 transition-all duration-200"
            aria-label="Go to home"
          >
            <div className="flex items-center gap-3">
              <div
                className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center font-bold text-white shadow-lg border border-blue-400/30"
                style={{
                  boxShadow:
                    "0 4px 15px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
              >
                AK
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-blue-400/20 blur-xl scale-110 -z-10"></div>
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <div
                  className="font-bold text-sm leading-tight"
                  style={{ color: "var(--text)" }}
                >
                  Abdelrahman Kamal
                </div>
                <div
                  className="text-xs leading-tight"
                  style={{ color: "var(--accent)" }}
                >
                  Backend Developer
                </div>
              </div>
            </div>
          </button>
        </motion.div>

        {/* Center: Navigation links - separate floating capsules */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 border cursor-pointer group ${
                  isActive
                    ? "border-blue-400/60"
                    : "border-blue-400/20 hover:border-blue-400/40"
                }`}
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(29, 78, 216, 0.15))"
                    : "rgba(30, 41, 59, 0.8)",
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  backdropFilter: "blur(16px)",
                  boxShadow: isActive
                    ? "0 4px 20px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    : "0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}

                {/* Active indicator - floating dot */}
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-400 shadow-lg"
                    style={{
                      boxShadow: "0 0 8px rgba(59, 130, 246, 0.8)",
                    }}
                  />
                )}

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.button>
            );
          })}
        </div>

        {/* Right: Mobile menu - compact floating button */}
        <motion.div
          className="md:hidden backdrop-blur-xl rounded-2xl border border-blue-400/30 transition-all duration-300 hover:border-blue-400/50"
          style={{
            background: "rgba(30, 41, 59, 0.95)",
            boxShadow:
              "0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
          }}
          whileHover={{ scale: 1.02 }}
        >
          <button
            className="p-3 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
            onClick={() => setIsOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            style={{ color: "var(--text-secondary)" }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation - redesigned floating panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.95,
          y: isOpen ? 0 : -20,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`md:hidden mt-4 backdrop-blur-xl rounded-2xl border border-blue-400/30 overflow-hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          background: "rgba(30, 41, 59, 0.95)",
          boxShadow:
            "0 12px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="p-6 space-y-3">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 border cursor-pointer ${
                  isActive
                    ? "border-blue-400/60"
                    : "border-blue-400/20 hover:border-blue-400/40"
                }`}
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(29, 78, 216, 0.15))"
                    : "rgba(51, 65, 85, 0.6)",
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  boxShadow: isActive
                    ? "0 4px 15px rgba(59, 130, 246, 0.4)"
                    : "0 2px 8px rgba(0, 0, 0, 0.2)",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{
                  delay: isOpen ? index * 0.05 : 0,
                  duration: 0.3,
                }}
                aria-current={isActive ? "page" : undefined}
              >
                <div className="flex items-center justify-between">
                  {item.label}
                  {isActive && (
                    <div
                      className="w-2 h-2 rounded-full bg-blue-400"
                      style={{
                        boxShadow: "0 0 6px rgba(59, 130, 246, 0.8)",
                      }}
                    />
                  )}
                </div>
              </motion.button>
            );
          })}

          {/* Social links in mobile menu - redesigned */}
          <div className="pt-4 border-t border-blue-400/20 mt-4">
            <div className="flex items-center justify-center gap-4">
              <Link
                href="https://github.com/mhmdmstfa2010"
                className="px-4 py-2 text-sm transition-colors duration-200 rounded-lg border border-blue-400/20 hover:border-blue-400/40 hover:bg-blue-500/10"
                style={{ color: "var(--text-muted)" }}
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohamed-moustafa20/"
                className="px-4 py-2 text-sm transition-colors duration-200 rounded-lg border border-blue-400/20 hover:border-blue-400/40 hover:bg-blue-500/10"
                style={{ color: "var(--text-muted)" }}
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
