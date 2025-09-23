import { motion } from "framer-motion";
import Resume from "../assets/resume.pdf" 

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start space-y-6 relative z-10">
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="inline-flex items-center px-4 py-2 bg-slate-800/60 border border-cyan-400/40 rounded-lg text-cyan-300 text-sm font-mono backdrop-blur-sm">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse" />
          &gt; STATUS: AVAILABLE
        </span>
      </motion.div>

      <motion.h1 
        className="text-5xl sm:text-7xl font-bold text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">SHerzod</span>
      </motion.h1>

      <div className="space-y-4">
        <p className="text-xl text-cyan-300 font-mono font-semibold">
          &lt; FRONTEND_DEVELOPER / SOFTWARE_ENGINEER &gt;
        </p>
       
      </div>

      <div className="flex gap-4">
        <a href="#projects"   className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all flex items-center gap-3">
          <span>&gt;</span> VIEW PROJECTS
        </a>
        <a href={Resume} target="_blank" className="px-8 py-4 border-2 border-cyan-400/60 text-cyan-300 font-bold rounded-lg hover:bg-cyan-400/10 hover:border-cyan-300 backdrop-blur-sm transition-all flex items-center gap-3">
          <span>&lt;/&gt;</span> DOWNLOAD CV
        </a>
      </div>


            {/* Floating Space Console*/}
            <motion.div
              className="absolute bottom-8 right-1 z-30 font-mono text-xs text-indigo-400/60 bg-gray-900/60 backdrop-blur-xs rounded-lg p-4 border border-indigo-500/20 hidden md:block"
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <div className="text-pink-400 mb-1">// SpaceStation.js</div>
              <div><span className="text-purple-400">const</span> <span className="text-indigo-400">astronaut</span> = &#123;</div>
              <div className="ml-2"><span className="text-blue-400">name</span>: <span className="text-green-400">'Sherzod'</span>,</div>
              <div className="ml-2"><span className="text-blue-400">mission</span>: <span className="text-green-400">'Code'</span>,</div>
              <div className="ml-2"><span className="text-blue-400">destination</span>: <span className="text-green-400">'∞'</span></div>
              <div>&#125;;</div>
            </motion.div>
    </section>
  );
};

export default Hero;