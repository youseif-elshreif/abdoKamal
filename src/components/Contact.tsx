"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiUser,
  FiMessageCircle,
  FiCheck,
  FiMapPin,
  FiClock,
  FiExternalLink,
} from "react-icons/fi";
import { useState } from "react";
import {
  SectionWrapper,
  SectionHeader,
  GlassCard,
  AnimatedIcon,
} from "./shared";

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <GlassCard className="p-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AnimatedIcon
              variant="bounce"
              size="lg"
              color="accent"
              trigger="view"
            >
              <FiSend />
            </AnimatedIcon>
            <h3 className="text-2xl font-bold" style={{ color: "var(--text)" }}>
              Send a Message
            </h3>
          </div>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Let&apos;s discuss your project and see how we can work together.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            // Success State
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-12"
            >
              <AnimatedIcon
                variant="bounce"
                size="xl"
                color="accent"
                trigger="always"
                className="mb-6 mx-auto"
              >
                <FiCheck />
              </AnimatedIcon>
              <h4
                className="text-xl font-bold mb-2"
                style={{ color: "var(--text)" }}
              >
                Message Sent Successfully!
              </h4>
              <p style={{ color: "var(--text-secondary)" }}>
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
            </motion.div>
          ) : (
            // Form State
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text)" }}
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`
                        w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-300
                        bg-gray-800/50 backdrop-blur-sm
                        ${
                          errors.name
                            ? "border-red-500/50 focus:border-red-400"
                            : "border-gray-600/50 focus:border-blue-400/50"
                        }
                        focus:outline-none focus:ring-2 focus:ring-blue-500/20
                      `}
                      style={{ color: "var(--text)" }}
                      placeholder="Your full name"
                    />
                    <FiUser
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                      style={{ color: "var(--text-muted)" }}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text)" }}
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`
                        w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-300
                        bg-gray-800/50 backdrop-blur-sm
                        ${
                          errors.email
                            ? "border-red-500/50 focus:border-red-400"
                            : "border-gray-600/50 focus:border-blue-400/50"
                        }
                        focus:outline-none focus:ring-2 focus:ring-blue-500/20
                      `}
                      style={{ color: "var(--text)" }}
                      placeholder="your.email@example.com"
                    />
                    <FiMail
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                      style={{ color: "var(--text-muted)" }}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text)" }}
                >
                  Subject *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`
                      w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-300
                      bg-gray-800/50 backdrop-blur-sm
                      ${
                        errors.subject
                          ? "border-red-500/50 focus:border-red-400"
                          : "border-gray-600/50 focus:border-blue-400/50"
                      }
                      focus:outline-none focus:ring-2 focus:ring-blue-500/20
                    `}
                    style={{ color: "var(--text)" }}
                    placeholder="Project consultation, collaboration, etc."
                  />
                  <FiMessageCircle
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                    style={{ color: "var(--text-muted)" }}
                  />
                </div>
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text)" }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none
                    bg-gray-800/50 backdrop-blur-sm
                    ${
                      errors.message
                        ? "border-red-500/50 focus:border-red-400"
                        : "border-gray-600/50 focus:border-blue-400/50"
                    }
                    focus:outline-none focus:ring-2 focus:ring-blue-500/20
                  `}
                  style={{ color: "var(--text)" }}
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`
                  w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300
                  flex items-center justify-center gap-3
                  ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  }
                  text-white shadow-lg hover:shadow-xl
                `}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  );
}

// Contact Methods Component
function ContactMethods() {
  const contactMethods = [
    {
      id: "email",
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      value: "abdokamal.dev@gmail.com",
      href: "mailto:abdokamal.dev@gmail.com",
      description: "Best for detailed discussions",
      primary: true,
    },
    {
      id: "linkedin",
      icon: <FiLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/abdo-kamal",
      description: "Professional networking",
      primary: true,
    },
    {
      id: "github",
      icon: <FiGithub className="w-6 h-6" />,
      title: "GitHub",
      value: "View my code",
      href: "https://github.com/abdokamal",
      description: "Check out my projects",
      primary: false,
    },
    {
      id: "phone",
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+20 100 123 4567",
      href: "tel:+201001234567",
      description: "For urgent matters",
      primary: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <GlassCard className="p-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AnimatedIcon
              variant="pulse"
              size="lg"
              color="accent"
              trigger="view"
            >
              <FiMapPin />
            </AnimatedIcon>
            <h3 className="text-2xl font-bold" style={{ color: "var(--text)" }}>
              Get In Touch
            </h3>
          </div>
          <p
            className="leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Ready to start your next project? Choose your preferred way to reach
            out.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 gap-4 mb-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.id}
              href={method.href}
              target={
                method.id === "linkedin" || method.id === "github"
                  ? "_blank"
                  : undefined
              }
              rel={
                method.id === "linkedin" || method.id === "github"
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                group relative p-4 rounded-xl border transition-all duration-300
                ${
                  method.primary
                    ? "border-blue-400/30 hover:border-blue-400/50 bg-blue-500/5"
                    : "border-gray-400/20 hover:border-gray-400/40 bg-gray-500/5"
                }
                hover:shadow-lg
              `}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`
                  flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300
                  ${
                    method.primary
                      ? "bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30"
                      : "bg-gray-500/20 text-gray-400 group-hover:bg-gray-500/30"
                  }
                `}
                >
                  {method.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h4
                    className="font-semibold mb-1"
                    style={{ color: "var(--text)" }}
                  >
                    {method.title}
                  </h4>
                  <p className="text-sm" style={{ color: "var(--accent)" }}>
                    {method.value}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {method.description}
                  </p>
                </div>

                {(method.id === "linkedin" || method.id === "github") && (
                  <FiExternalLink
                    className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--text-muted)" }}
                  />
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

// Mobile Floating Contact Component
function MobileFloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false);

  const floatingButtons = [
    {
      id: "email",
      icon: <FiMail className="w-5 h-5" />,
      href: "mailto:abdokamal.dev@gmail.com",
      label: "Email",
      color: "bg-blue-500",
    },
    {
      id: "phone",
      icon: <FiPhone className="w-5 h-5" />,
      href: "tel:+201001234567",
      label: "Phone",
      color: "bg-green-500",
    },
    {
      id: "linkedin",
      icon: <FiLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/abdo-kamal",
      label: "LinkedIn",
      color: "bg-blue-600",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="space-y-3 mb-3"
          >
            {floatingButtons.map((button, index) => (
              <motion.a
                key={button.id}
                href={button.href}
                target={button.id === "linkedin" ? "_blank" : undefined}
                rel={
                  button.id === "linkedin" ? "noopener noreferrer" : undefined
                }
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  flex items-center gap-3 px-4 py-3 ${button.color} text-white rounded-full shadow-lg
                  hover:shadow-xl transform hover:scale-105 transition-all duration-300
                `}
              >
                {button.icon}
                <span className="text-sm font-medium">{button.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiMessageCircle className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}

// Main Contact Component
export default function Contact() {
  return (
    <>
      <SectionWrapper id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <SectionHeader
            title="Contact Me"
            description="Let's discuss your project and see how we can work together to bring your ideas to life."
          />

          {/* Content */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Methods */}
            <div className="lg:col-span-2">
              <ContactMethods />
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mobile Floating Contact */}
      <MobileFloatingContact />
    </>
  );
}
