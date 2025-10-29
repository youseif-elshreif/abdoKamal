"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-4 sm:px-6 lg:px-8 relative border-t border-blue-400/20"
      style={{
        background: "linear-gradient(135deg, var(--primary) 0%, #0f172a  100%)",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white border border-blue-400/30"
                style={{
                  background: "var(--gradient-blue)",
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
                }}
              >
                MM
              </div>
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--text)" }}
                >
                  Mohamed Moustafa
                </h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  DevOps Engineer
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Building scalable infrastructure and automating deployments to
              empower development teams with modern DevOps practices.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4
              className="text-lg font-semibold"
              style={{ color: "var(--text)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "Skills",
                "Experience",
                "Projects",
                "Certificates",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm transition-colors duration-200 hover:text-blue-400"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4
              className="text-lg font-semibold"
              style={{ color: "var(--text)" }}
            >
              Connect
            </h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/mhmdmstfa2010"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-blue-400/30 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 card-float"
                style={{
                  background: "var(--surface-glass)",
                  color: "var(--text-muted)",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub Profile"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/mohamed-moustafa20/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-blue-400/30 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 card-float"
                style={{
                  background: "var(--surface-glass)",
                  color: "var(--text-muted)",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="mailto:mhmdmstfa710@gmail.com"
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-blue-400/30 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 card-float"
                style={{
                  background: "var(--surface-glass)",
                  color: "var(--text-muted)",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Send Email"
              >
                <FiMail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div
          className="border-t pt-8 mt-8"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              © {currentYear} Mohamed Moustafa. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span>Built with</span>
              <span style={{ color: "var(--accent)" }}>Next.js</span>
              <span>&</span>
              <span style={{ color: "var(--accent)" }}>Tailwind CSS</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
