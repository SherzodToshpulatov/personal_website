import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
     
      await emailjs.send(
        "service_2bewbu4",   // e.g. service_xxxxxx
        "template_1ry4p7b",  // e.g. template_xxxxxx
        formData,
        "tqn-3lEuGek_QkPVV"    // e.g. u8asdkj12345
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center px-4 py-2 bg-slate-800/60 border border-cyan-400/40 rounded-lg text-cyan-300 text-sm font-mono backdrop-blur-sm mb-6">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse" />
          &gt; ESTABLISH_CONNECTION.exe
        </span>
        <h2 className="text-4xl font-bold text-white mb-6 font-mono">
          &lt; MISSION_
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            CONTROL
          </span>{" "}
          /&gt;
        </h2>
      </motion.div>

      <div className="mx-auto">
        {/* Contact Form */}
        <motion.div
          className="bg-slate-900/60 backdrop-blur-xxs border border-gray-700/50 rounded-lg p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cyan-300 mb-6 font-mono flex items-center gap-2">
            <span className="text-cyan-400">&gt;</span> SEND_TRANSMISSION
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 font-mono text-sm mb-2">
                  OPERATOR_NAME:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 font-mono focus:border-cyan-400/60 focus:bg-gray-700/60 transition-all duration-300 focus:outline-none"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label className="block text-gray-300 font-mono text-sm mb-2">
                  COMM_FREQUENCY:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 font-mono focus:border-cyan-400/60 focus:bg-gray-700/60 transition-all duration-300 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-300 font-mono text-sm mb-2">
                MISSION_SUBJECT:
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 font-mono focus:border-cyan-400/60 focus:bg-gray-700/60 transition-all duration-300 focus:outline-none"
                placeholder="Project collaboration, job opportunity, etc..."
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 font-mono text-sm mb-2">
                MESSAGE_PAYLOAD:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 font-mono focus:border-cyan-400/60 focus:bg-gray-700/60 transition-all duration-300 focus:outline-none resize-none"
                placeholder="Tell me about your project, ideas, or just say hello..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 font-mono font-bold rounded-lg transition-all duration-300 ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2 text-gray-300">
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
                  TRANSMITTING TO ORBITAL RELAY...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2 text-white">
                  <span>&gt;</span>
                  SEND_TRANSMISSION
                </span>
              )}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                className="p-4 bg-green-400/20 border border-green-400/40 rounded-lg text-green-300 font-mono text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-green-400">✓</span> TRANSMISSION_SUCCESSFUL — Message received by Mission Control!
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="p-4 bg-red-400/20 border border-red-400/40 rounded-lg text-red-300 font-mono text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-red-400">✗</span> TRANSMISSION_FAILED — Please retry or use direct comms.
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-8 text-2xl text-cyan-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="https://github.com/SherzodToshpulatov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-gray-800/60 rounded-lg hover:bg-gray-700/60 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sherzod-toshpulatov-98865a21a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-gray-800/60 rounded-lg hover:bg-gray-700/60 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/sherzodtoshpulatov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-gray-800/60 rounded-lg hover:bg-gray-700/60 transition-colors"
          >
            <FaTelegram />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
