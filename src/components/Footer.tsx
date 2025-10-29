"use client";

import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiExternalLink, FiHeart, FiArrowUp, FiCode, FiServer, FiCloud } from "react-icons/fi";

interface SocialLink {
  id: string;
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    id: "email",
    icon: <FiMail className="w-5 h-5" />,
    label: "Email",
    href: "mailto:abdokamal.dev@gmail.com",
    color: "hover:text-blue-400"
  },
  {
    id: "linkedin",
    icon: <FiLinkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/abdo-kamal",
    color: "hover:text-blue-600"
  },
  {
    id: "github",
    icon: <FiGithub className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/abdokamal",
    color: "hover:text-gray-300"
  }
];

interface QuickLink {
  id: string;
  label: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  { id: "about", label: "About", href: "#hero" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "certificates", label: "Certificates", href: "#certificates" },
  { id: "contact", label: "Contact", href: "#contact" }
];

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="group flex items-center justify-center w-12 h-12 rounded-2xl border border-blue-400/30 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/60"
      style={{
        background: 'rgba(59, 130, 246, 0.15)',
        color: 'var(--accent)'
      }}
    >
      <FiArrowUp className="w-5 h-5 group-hover:transform group-hover:-translate-y-0.5 transition-transform duration-200" />
    </motion.button>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative pt-20 pb-8 px-4 sm:px-6 lg:px-8 border-t border-blue-400/10"
      style={{
        background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
      }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="w-12 h-12 rounded-2xl border border-blue-400/30 flex items-center justify-center"
                  style={{
                    background: 'rgba(59, 130, 246, 0.15)',
                    color: 'var(--accent)'
                  }}
                >
                  <FiServer className="w-6 h-6" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "var(--text)" }}
                  >
                    Abdo Kamal
                  </h3>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    DevOps Engineer
                  </p>
                </div>
              </motion.div>

              <p
                className="text-base leading-relaxed mb-6 max-w-md"
                style={{ color: "var(--text-secondary)" }}
              >
                Passionate about building robust infrastructure and automating workflows. 
                Helping teams deliver software faster and more reliably through modern DevOps practices.
              </p>

              {/* Tech focus badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { icon: <FiCloud className="w-3 h-3" />, label: "AWS" },
                  { icon: <FiServer className="w-3 h-3" />, label: "Kubernetes" },
                  { icon: <FiCode className="w-3 h-3" />, label: "CI/CD" }
                ].map((tech, index) => (
                  <motion.span
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border border-blue-400/20"
                    style={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: 'var(--accent)'
                    }}
                  >
                    {tech.icon}
                    {tech.label}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4
                className="text-sm font-bold mb-4"
                style={{ color: "var(--text)" }}
              >
                Connect With Me
              </h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    target={social.id !== "email" ? "_blank" : undefined}
                    rel={social.id !== "email" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`group flex items-center justify-center w-10 h-10 rounded-xl border border-blue-400/20 backdrop-blur-sm transition-all duration-300 ${social.color}`}
                    style={{
                      background: 'rgba(71, 85, 105, 0.2)',
                      color: 'var(--text-muted)'
                    }}
                    aria-label={social.label}
                  >
                    {social.icon}
                    {social.id !== "email" && (
                      <FiExternalLink className="w-2 h-2 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              className="text-lg font-bold mb-6"
              style={{ color: "var(--text)" }}
            >
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-sm font-medium transition-all duration-300 hover:translate-x-1"
                  style={{ 
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Availability & Scroll to top */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Current status */}
            <div>
              <h4
                className="text-lg font-bold mb-4"
                style={{ color: "var(--text)" }}
              >
                Current Status
              </h4>
              <div className="p-4 rounded-2xl border border-green-400/20"
                style={{ background: 'rgba(34, 197, 94, 0.1)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <span className="text-sm font-medium text-green-400">
                    Available for Work
                  </span>
                </div>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Open to new opportunities and collaborations
                </p>
              </div>
            </div>

            {/* Scroll to top */}
            <div>
              <h4
                className="text-lg font-bold mb-4"
                style={{ color: "var(--text)" }}
              >
                Back to Top
              </h4>
              <ScrollToTop />
            </div>
          </motion.div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent mb-8"></div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
            <span>© {currentYear} Abdo Kamal.</span>
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiHeart className="w-4 h-4 text-red-400" />
            </motion.div>
            <span>using Next.js & Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <span>Made in Egypt 🇪🇬</span>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              <span>v2.0.0</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating background elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
    </footer>
  );
}