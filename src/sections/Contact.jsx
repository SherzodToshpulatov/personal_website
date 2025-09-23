import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Replace with your actual email service (EmailJS, Formspree, Netlify Forms, etc.)
      // Example with EmailJS or your backend endpoint:
      // await emailjs.send('service_id', 'template_id', formData, 'user_id');
      
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
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
          &lt; MISSION_<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">CONTROL</span> /&gt;
        </h2>
        <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto my-8 leading-relaxed">
          Ready to launch your next project? Send a transmission and let's explore 
          the possibilities together across the digital cosmos. 
          <span className="text-cyan-400"> All communications are secure and encrypted.</span>
        </p>
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
            <a
                href="mailto:sherzodtoshpulatov@protonmail.com"
                className="flex items-center my-8 gap-3 p-3 bg-gray-800/60 rounded-lg hover:bg-gray-700/60 transition-colors group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Email Protocol</p>
                  <p className="text-gray-400 text-sm font-mono">sherzodtoshpulatov@protonmail.com</p>
                </div>
              </a>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 font-mono font-bold rounded-lg transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2 text-gray-300">
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
                  TRANSMITTING...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2 text-white">
                  <span>&gt;</span>
                  SEND_TRANSMISSION
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              )}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                className="p-4 bg-green-400/20 border border-green-400/40 rounded-lg text-green-300 font-mono text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-green-400">✓</span> TRANSMISSION_SUCCESSFUL - Message sent to mission control!
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="p-4 bg-red-400/20 border border-red-400/40 rounded-lg text-red-300 font-mono text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-red-400">✗</span> TRANSMISSION_FAILED - Please try again or use direct communication.
              </motion.div>
            )}
          </form>
        </motion.div>

      </div>

      {/* Floating terminal snippet */}
      <motion.div
        className="absolute top-20 right-8 font-mono text-xs text-cyan-400/40 bg-gray-900/40 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/10 hidden xl:block"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="text-purple-400 text-[10px] mb-1">// contact.js</div>
        <div className="text-[10px]">
          <span className="text-green-400">$</span>{' '}
          <span className="text-cyan-300">ping mission-control</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;