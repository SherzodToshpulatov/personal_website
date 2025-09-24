import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-24 space-y-8 z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center px-4 py-2 bg-slate-800/60 border border-cyan-400/40 rounded-lg text-cyan-300 text-sm font-mono backdrop-blur-sm mb-6">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse" />
          &gt; MISSION_BRIEFING.exe
        </span>
        <h2 className="text-4xl font-bold text-white mb-6 font-mono">
          &lt; ABOUT_<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">COMMANDER</span> /&gt;
        </h2>
      </motion.div>

      {/* Main Description */}
      <motion.div
        className="bg-slate-900/60 backdrop-blur-xxs border border-cyan-400/20 rounded-lg p-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="space-y-4">
          <div className="grid md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg font-bold text-cyan-300 font-mono mb-2">FULL_NAME:</h3>
              <p className="text-white text-xl font-semibold">Sherzod Toshpulatov</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-300 font-mono mb-2">AGE:</h3>
              <p className="text-white text-xl font-semibold">24</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-300 font-mono mb-2">LOCATION:</h3>
              <p className="text-white text-xl font-semibold">Tashkent, Uzbekistan</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-300 font-mono mb-2">EXPERIENCE:</h3>
              <p className="text-white text-xl font-semibold">1+ Year</p>
            </div>
          </div>
          <div className="border-t border-gray-600/50 pt-4">
            <p className="text-gray-300 text-lg leading-relaxed">
             I’m a frontend developer, but I’ll be honest — I don’t enjoy writing endless lines of routine code. What excites me is working on real, meaningful projects where creativity, problem-solving, and impact matter. I want to grow my skills while building things that feel alive, useful, and exciting. <span className="text-cyan-400">Currently exploring the frontiers of cybersecurity and midtiers of web development.</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Skills and Education Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Skills Section */}
        <motion.div
          className="bg-slate-900/60 backdrop-blur-xxs border border-cyan-400/20 rounded-lg p-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cyan-300 mb-4 font-mono flex items-center gap-2">
            <span className="text-cyan-400">&gt;</span> TECH_ARSENAL
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "JavaScript",
              "React",
              "HTML",
              "CSS",
              "Tailwind",
              "SQL",
              "PostgreSQL",
              "Git",
              "Python",
              "Django"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-center hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gray-300 font-medium text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="bg-slate-900/60 backdrop-blur-xxs border border-cyan-400/20 rounded-lg p-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cyan-300 mb-4 font-mono flex items-center gap-2">
            <span className="text-cyan-400">&lt;/&gt;</span> TRAINING_LOGS
          </h3>
          <div className="space-y-4">
            <motion.div
              className="border-l-2 border-cyan-400/50 pl-4 py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white">M.S. in Cyber Security</h4>
              <p className="text-cyan-300 font-medium">TUIT</p>
              <span className="text-sm text-gray-400 bg-slate-800/60 px-2 py-1 rounded font-mono">
                2025 – 2027 | IN_PROGRESS
              </span>
            </motion.div>
            
            <motion.div
              className="border-l-2 border-green-400/50 pl-4 py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white">B.S. in Computer Engineering</h4>
              <p className="text-green-300 font-medium">SBTUIT</p>
              <span className="text-sm text-gray-400 bg-slate-800/60 px-2 py-1 rounded font-mono">
                2019 – 2023 | COMPLETED
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default About;