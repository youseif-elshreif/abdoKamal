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
import { useState, useRef, useEffect } from "react";
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
      description: "Best for backend project discussions",
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
      description: "View my backend code",
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
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const contacts = [
    {
      icon: <FiLinkedin size={16} />,
      href: "https://linkedin.com/in/abdo-kamal",
      transform: "translate(-5px, -50px)",
    },
    {
      icon: <FiGithub size={16} />,
      href: "https://github.com/abdokamal",
      transform: "translate(25px, -45px)",
    },
    {
      icon: <FiMail size={16} />,
      href: "mailto:abdokamal.dev@gmail.com",
      transform: "translate(50px, -25px)",
    },
    {
      icon: <FiPhone size={16} />,
      href: "tel:+201001234567",
      transform: "translate(55px, 5px)",
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 lg:hidden" ref={wrapperRef}>
      {/* Main Circle Button */}
      <motion.button
        className="w-14 h-14 rounded-full border backdrop-blur border-blue-400/20 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        onClick={toggleMenu}
        aria-label="Contact Me"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background:
            "linear-gradient(145deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.9) 100%)",
          borderColor: "rgba(59, 130, 246, 0.2)",
          color: "var(--text-secondary)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 0.1em rgba(59, 130, 246, 0.1) inset",
        }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiMessageCircle size={18} />
        </motion.div>
      </motion.button>

      {/* Radial Icons */}
      <div className="relative top-[-50px] left-[10px]">
        {contacts.map((item, i) => (
          <motion.button
            key={i}
            onClick={() => handleLinkClick(item.href)}
            className={`absolute z-[-1] w-10 h-10 rounded-full border flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 ${
              isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{
              background:
                "linear-gradient(145deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.9) 100%)",
              borderColor: "rgba(59, 130, 246, 0.2)",
              color: "var(--text-secondary)",
              boxShadow:
                "0 4px 16px rgba(0, 0, 0, 0.2), 0 0 0 0.1em rgba(59, 130, 246, 0.1) inset",
              transform: isOpen
                ? `${item.transform} scale(1)`
                : "translate(0, 0) scale(0)",
              transitionDelay: `${i * 80}ms`,
            }}
            aria-label={`Contact icon ${i}`}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(59, 130, 246, 0.15)";
              e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(145deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.9) 100%)";
              e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.2)";
            }}
          >
            {item.icon}
          </motion.button>
        ))}
      </div>
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
            description="Let's discuss your backend project and see how we can build scalable solutions together."
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
