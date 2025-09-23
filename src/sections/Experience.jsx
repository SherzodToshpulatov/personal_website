import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Tech Company",
    period: "2023 – Present",
    status: "ACTIVE",
    description:
      "Working on frontend development with React and Tailwind, building scalable web applications and improving UI/UX.",
    technologies: ["React", "Tailwind", "JavaScript", "Node.js"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Startup Inc.",
    period: "2022 – 2023",
    status: "COMPLETED",
    description:
      "Built responsive components, collaborated with backend team, and improved website performance by 30%.",
    technologies: ["React", "CSS", "JavaScript", "Git"],
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2020 – 2022",
    status: "COMPLETED",
    description:
      "Worked with clients worldwide to design and develop custom websites using HTML, CSS, JavaScript, and React.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center px-4 py-2 bg-slate-800/60 border border-cyan-400/40 rounded-lg text-cyan-300 text-sm font-mono backdrop-blur-sm mb-6">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse" />
          &gt; CAREER_TRAJECTORY.log
        </span>
        <h2 className="text-4xl font-bold text-white mb-10 font-mono">
          &lt; MISSION_<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">HISTORY</span> /&gt;
        </h2>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Main timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 opacity-60"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <motion.div 
                className={`absolute left-6 top-6 w-4 h-4 rounded-full border-2 z-10 ${
                  exp.status === 'ACTIVE' 
                    ? 'bg-cyan-400 border-cyan-300 shadow-lg shadow-cyan-400/50' 
                    : 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/50'
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className={`absolute inset-0 rounded-full animate-ping ${
                  exp.status === 'ACTIVE' ? 'bg-cyan-400' : 'bg-blue-500'
                } opacity-20`}></div>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                className="ml-16 bg-slate-900/60 backdrop-blur-xxs border border-gray-700/50 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300"
                // whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-300 font-mono font-medium flex items-center gap-2">
                      <span className="text-cyan-400">&gt;</span>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                      exp.status === 'ACTIVE' 
                        ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/40' 
                        : 'bg-green-400/20 text-green-300 border border-green-400/40'
                    }`}>
                      {exp.status}
                    </span>
                    <span className="text-gray-400 font-mono text-sm bg-slate-800/60 px-3 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/60 border border-gray-600/40 rounded-lg text-sm text-gray-300 font-mono hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.2 + 0.6 + techIndex * 0.05 }}
                      viewport={{ once: true }}
                      // whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>


      {/* Floating code snippet */}
      <motion.div
        className="absolute top-20 right-8 font-mono text-xs text-cyan-400/40 bg-gray-900/40 backdrop-blur-xs rounded-lg p-3 border border-cyan-500/10 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="text-purple-400 text-[10px] mb-1">// career.js</div>
        <div className="text-[10px]">
          <span className="text-blue-400">const</span>{' '}
          <span className="text-cyan-300">growth</span> = <span className="text-green-400">'exponential'</span>;
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;