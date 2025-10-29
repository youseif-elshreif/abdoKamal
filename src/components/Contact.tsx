"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailCopied, setEmailCopied] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just create a mailto link with the form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:mhmdmstfa710@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("mhmdmstfa710@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background:
          "linear-gradient(135deg, var(--secondary) 0%, var(--primary) 50%, var(--secondary) 100%)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
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
              Ready to Connect
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 bg-clip-text text-transparent mb-4">
              Let&apos;s Work Together
            </h2>
          </motion.div>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Interested in discussing DevOps opportunities, infrastructure
            challenges, or collaboration? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-xl font-semibold mb-6"
                style={{ color: "var(--text)" }}
              >
                Get in Touch
              </h3>

              {/* Email */}
              <div
                className="flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl border border-blue-400/30 card-float"
                style={{ background: "var(--surface-glass)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(29, 78, 216, 0.1))",
                    color: "var(--accent)",
                  }}
                >
                  <FiMail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium" style={{ color: "var(--text)" }}>
                    Email
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    mhmdmstfa710@gmail.com
                  </p>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 hover:bg-blue-500/10 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50 border border-transparent hover:border-blue-400/20"
                  style={{ color: "var(--text-muted)" }}
                  aria-label="Copy email address"
                >
                  {emailCopied ? (
                    <FiCheck className="w-4 h-4 text-green-400" />
                  ) : (
                    <FiCopy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4
                className="text-lg font-semibold mb-4"
                style={{ color: "var(--text)" }}
              >
                Connect with Me
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/mhmdmstfa2010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border border-blue-400/30 rounded-full hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transform hover:scale-110 card-float"
                  style={{
                    background: "var(--surface-glass)",
                    color: "var(--text-secondary)",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub Profile"
                >
                  <FiGithub className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/mohamed-moustafa20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border border-blue-400/30 rounded-full hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transform hover:scale-110 card-float"
                  style={{
                    background: "var(--surface-glass)",
                    color: "var(--text-secondary)",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* Toast notification */}
            {emailCopied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
              >
                Email copied to clipboard!
              </motion.div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 card-float-elevated"
            style={{ background: "var(--surface-glass)" }}
          >
            <h3
              className="text-xl font-semibold mb-6"
              style={{ color: "var(--text)" }}
            >
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-blue-400/30 rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all duration-200 backdrop-blur-sm"
                  style={{
                    background: "rgba(71, 85, 105, 0.3)",
                    color: "var(--text)",
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-blue-400/30 rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all duration-200 backdrop-blur-sm"
                  style={{
                    background: "rgba(71, 85, 105, 0.3)",
                    color: "var(--text)",
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-blue-400/30 rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all duration-200 backdrop-blur-sm resize-vertical"
                  style={{
                    background: "rgba(71, 85, 105, 0.3)",
                    color: "var(--text)",
                  }}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full text-white font-medium py-3 px-6 rounded-lg border border-blue-400/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                style={{
                  background: "var(--gradient-blue)",
                  boxShadow:
                    "0 4px 15px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
