import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start space-y-6">
      <motion.h1 
        className="text-5xl sm:text-7xl font-bold text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m <span className="text-teal-400">SHerzod</span>
      </motion.h1>

      <p className="text-gray-400 max-w-xl">
        I’m a software engineer passionate about building modern web applications.
      </p>

      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600">
          View My Work
        </a>
        <a href="/resume.pdf" className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-800">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
