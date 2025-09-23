import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website built with React and Tailwind CSS featuring space-themed animations and modern UI components.",
    image: "/api/placeholder/400/250",
    demoLink: "#",
    githubLink: "https://github.com/sherzod-toshpulatov/portfolio-website",
    status: "DEPLOYED",
    technologies: ["React", "Tailwind", "Framer Motion", "JavaScript"],
    category: "Frontend",
    year: "2024"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack online shop with payment integration, user authentication, and real-time inventory management.",
    image: "/api/placeholder/400/250",
    demoLink: "#",
    githubLink: "https://github.com/sherzod-toshpulatov/ecommerce-platform",
    status: "IN_PROGRESS",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    category: "Full-Stack",
    year: "2024"
  },
  {
    title: "Chat Application",
    description: "Real-time chat app using WebSockets and Node.js with message encryption and file sharing capabilities.",
    image: "/api/placeholder/400/250",
    demoLink: "#",
    githubLink: "https://github.com/sherzod-toshpulatov/chat-application",
    status: "DEPLOYED",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "Real-time",
    year: "2023"
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with drag-and-drop interface and team collaboration features.",
    image: "/api/placeholder/400/250",
    demoLink: "#",
    githubLink: "https://github.com/sherzod-toshpulatov/task-management",
    status: "COMPLETED",
    technologies: ["Vue.js", "Django", "REST API", "PostgreSQL"],
    category: "Web App",
    year: "2023"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather application with data visualization, forecasts, and location-based services.",
    image: "/api/placeholder/400/250",
    demoLink: "#",
    githubLink: "https://github.com/sherzod-toshpulatov/weather-dashboard",
    status: "DEPLOYED",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS"],
    category: "Dashboard",
    year: "2023"
  },
  {
    title: "Crypto Tracker",
    description: "Cryptocurrency portfolio tracker with real-time prices, charts, and portfolio analytics.",
    image: "/api/placeholder/400/250",
    demoLink: "#",
    githubLink: "https://github.com/sherzod-toshpulatov/crypto-tracker",
    status: "DEPLOYED",
    technologies: ["React", "Node.js", "CoinGecko API", "Firebase"],
    category: "Finance",
    year: "2022"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center px-4 py-2 bg-slate-800/60 border border-cyan-400/40 rounded-lg text-cyan-300 text-sm font-mono backdrop-blur-sm mb-6">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse" />
          &gt; LAUNCH_PAD.exe
        </span>
        <h2 className="text-4xl font-bold text-white mb-10 font-mono">
          &lt; PROJECT_<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">ARSENAL</span> /&gt;
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="group relative bg-slate-900/60 backdrop-blur-xxs border border-gray-700/50 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            // whileHover={{ scale: 1.02, y: -8 }}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            
            {/* Project Header */}
            <div className="relative z-10">
              {/* Project Image */}
              <div className="relative mb-6 rounded-lg overflow-hidden group/image">
                <motion.img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover/image:scale-110"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                />
                {/* Image overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status badge overlay */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded text-xs font-mono font-bold backdrop-blur-sm ${
                    project.status === 'DEPLOYED' 
                      ? 'bg-green-400/80 text-green-100 border border-green-300/60' 
                      : project.status === 'IN_PROGRESS'
                      ? 'bg-yellow-400/80 text-yellow-100 border border-yellow-300/60'
                      : 'bg-blue-400/80 text-blue-100 border border-blue-300/60'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Year badge overlay */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-slate-800/80 text-gray-200 border border-gray-600/60 rounded text-xs font-mono backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block px-2 py-1 bg-gray-800/60 border border-gray-600/40 rounded text-xs text-gray-300 font-mono">
                    {project.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 bg-gray-800/60 border border-gray-600/30 rounded text-xs text-gray-300 font-mono hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 + 0.3 + techIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <motion.a
                  href={project.demoLink}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-lg text-cyan-300 font-mono font-medium hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-300 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>&gt;</span>
                  DEMO
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </motion.svg>
                </motion.a>

                <motion.a
                  href={project.githubLink}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-800/60 border border-gray-600/40 rounded-lg text-gray-300 font-mono font-medium hover:bg-gray-700/60 hover:border-gray-500/60 hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>&lt;/&gt;</span>
                  CODE
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </motion.svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>


      {/* Floating command snippet */}
      <motion.div
        className="absolute top-20 right-8 font-mono text-xs text-cyan-400/40 bg-gray-900/40 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/10 hidden xl:block"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="text-purple-400 text-[10px] mb-1">// deploy.sh</div>
        <div className="text-[10px]">
          <span className="text-green-400">$</span>{' '}
          <span className="text-cyan-300">npm run build && deploy</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;