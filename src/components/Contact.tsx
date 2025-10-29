"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiUser, FiMessageCircle, FiCheck, FiExternalLink } from "react-icons/fi";
import { useState } from "react";

interface ContactMethod {
  id: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  description: string;
  color: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: "email",
    icon: <FiMail className="w-6 h-6" />,
    title: "Email",
    value: "abdokamal.dev@gmail.com",
    href: "mailto:abdokamal.dev@gmail.com",
    description: "Send me an email for business inquiries",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "phone",
    icon: <FiPhone className="w-6 h-6" />,
    title: "Phone",
    value: "+20 100 123 4567",
    href: "tel:+201001234567",
    description: "Call me for urgent matters",
    color: "from-green-500 to-green-600"
  },
  {
    id: "linkedin",
    icon: <FiLinkedin className="w-6 h-6" />,
    title: "LinkedIn",
    value: "/in/abdo-kamal",
    href: "https://linkedin.com/in/abdo-kamal",
    description: "Connect with me professionally",
    color: "from-blue-600 to-blue-700"
  },
  {
    id: "github",
    icon: <FiGithub className="w-6 h-6" />,
    title: "GitHub",
    value: "@abdokamal",
    href: "https://github.com/abdokamal",
    description: "Check out my open source work",
    color: "from-gray-600 to-gray-700"
  }
];

interface ContactCardProps {
  method: ContactMethod;
  index: number;
}

function ContactCard({ method, index }: ContactCardProps) {
  return (
    <motion.a
      href={method.href}
      target={method.id === "linkedin" || method.id === "github" ? "_blank" : undefined}
      rel={method.id === "linkedin" || method.id === "github" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative block"
    >
      <div 
        className="relative h-full backdrop-blur-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-700 p-6"
        style={{
          borderRadius: '20px',
          background: 'rgba(30, 41, 59, 0.9)',
          backdropFilter: 'blur(24px)',
        }}
      >
        {/* Icon section */}
        <div className="mb-6">
          <div 
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
            style={{
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)"
            }}
          >
            {method.icon}
          </div>
          <h3
            className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300"
            style={{ color: "var(--text)" }}
          >
            {method.title}
          </h3>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <p
            className="text-base font-semibold break-all"
            style={{ color: "var(--accent)" }}
          >
            {method.value}
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {method.description}
          </p>
        </div>

        {/* External link indicator */}
        {(method.id === "linkedin" || method.id === "github") && (
          <div className="absolute top-4 right-4">
            <FiExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "var(--text-muted)" }} />
          </div>
        )}

        {/* Hover glow effect */}
        <div 
          className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          }}
        />

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent group-hover:via-blue-400/80 transition-all duration-500" />
      </div>
    </motion.a>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div 
        className="backdrop-blur-xl border border-blue-400/20 p-8"
        style={{
          borderRadius: '24px',
          background: 'rgba(30, 41, 59, 0.9)',
          backdropFilter: 'blur(24px)',
        }}
      >
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-2xl border border-blue-400/30 flex items-center justify-center"
              style={{
                background: 'rgba(59, 130, 246, 0.15)',
                color: 'var(--accent)'
              }}
            >
              <FiSend className="w-6 h-6" />
            </div>
            <h3
              className="text-2xl font-bold"
              style={{ color: "var(--text)" }}
            >
              Send Message
            </h3>
          </div>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name field */}
          <div>
            <label 
              htmlFor="name"
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--text)" }}
            >
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 pl-12 rounded-xl border border-blue-400/20 focus:border-blue-400/60 focus:outline-none transition-all duration-300"
                style={{
                  background: 'rgba(71, 85, 105, 0.2)',
                  color: 'var(--text)',
                  backdropFilter: 'blur(10px)'
                }}
                placeholder="Your full name"
              />
              <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: "var(--text-muted)" }} />
            </div>
          </div>

          {/* Email field */}
          <div>
            <label 
              htmlFor="email"
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--text)" }}
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 pl-12 rounded-xl border border-blue-400/20 focus:border-blue-400/60 focus:outline-none transition-all duration-300"
                style={{
                  background: 'rgba(71, 85, 105, 0.2)',
                  color: 'var(--text)',
                  backdropFilter: 'blur(10px)'
                }}
                placeholder="your.email@example.com"
              />
              <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: "var(--text-muted)" }} />
            </div>
          </div>

          {/* Message field */}
          <div>
            <label 
              htmlFor="message"
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--text)" }}
            >
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 pl-12 rounded-xl border border-blue-400/20 focus:border-blue-400/60 focus:outline-none transition-all duration-300 resize-none"
                style={{
                  background: 'rgba(71, 85, 105, 0.2)',
                  color: 'var(--text)',
                  backdropFilter: 'blur(10px)'
                }}
                placeholder="Tell me about your project or idea..."
              />
              <FiMessageCircle className="absolute left-4 top-4 w-4 h-4" style={{ color: "var(--text-muted)" }} />
            </div>
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 border"
            style={{
              background: isSubmitted 
                ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(22, 163, 74, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.9) 100%)',
              color: 'white',
              borderColor: isSubmitted 
                ? 'rgba(34, 197, 94, 0.4)' 
                : 'rgba(59, 130, 246, 0.4)',
              boxShadow: isSubmitted 
                ? '0 4px 16px rgba(34, 197, 94, 0.3)'
                : '0 4px 16px rgba(59, 130, 246, 0.3)',
              cursor: isSubmitting || isSubmitted ? 'default' : 'pointer'
            }}
          >
            {isSubmitted ? (
              <>
                <FiCheck className="w-5 h-5" />
                <span>Message Sent!</span>
              </>
            ) : isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FiSend className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background: "linear-gradient(135deg, var(--secondary) 0%, var(--primary) 50%, var(--secondary) 100%)",
      }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-600/6 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <motion.div 
              className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-xl"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <div className="relative">
              <div 
                className="text-sm font-bold tracking-wider uppercase mb-3 flex items-center justify-center gap-2"
                style={{ color: 'var(--accent)' }}
              >
                <div className="w-8 h-0.5 bg-blue-400/60"></div>
                Get In Touch
                <div className="w-8 h-0.5 bg-blue-400/60"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Contact Me
              </h2>
            </div>
          </div>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Ready to start your next project? Let&apos;s discuss how my DevOps expertise can help 
            streamline your infrastructure and accelerate your development workflow
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact methods */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--text)" }}
              >
                Let&apos;s Connect
              </h3>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Choose your preferred way to reach out. I&apos;m always excited to discuss new opportunities and collaborations.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <ContactCard key={method.id} method={method} index={index} />
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-6 px-8 py-4 rounded-2xl border border-blue-400/20 backdrop-blur-sm"
            style={{ background: 'rgba(30, 41, 59, 0.6)' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                Available for Projects
              </span>
            </div>
            <div className="w-px h-4 bg-blue-400/20"></div>
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Response within 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}