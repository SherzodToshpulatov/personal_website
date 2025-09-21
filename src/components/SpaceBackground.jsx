import React from "react";
import { motion } from "framer-motion";

const SpaceBackground = () => {
  return (
    <>
      {/* Universal Space Background - Fixed positioning for full app coverage */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-gray-950 to-purple-950" />
        
        {/* Animated nebula clouds */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 30% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Falling stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`falling-star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full shadow-lg"
              style={{
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 6px #fff, 0 0 12px #fff, 0 0 18px #00f5ff'
              }}
              initial={{
                y: -10,
                opacity: 0,
                scale: 0
              }}
              animate={{
                y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
                x: [0, Math.random() * 200 - 100]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeIn"
              }}
            />
          ))}
        </div>

        {/* Twinkling background stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`twinkle-star-${i}`}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        {/* Cosmic energy streams */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`energy-stream-${i}`}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent"
              style={{ left: `${5 + i * 8}%` }}
              animate={{
                opacity: [0.1, 0.8, 0.1],
                scaleY: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8
              }}
            />
          ))}
        </div>

        {/* Floating cosmic particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`cosmic-particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(${Math.random() > 0.5 ? '99, 102, 241' : '147, 51, 234'}, 0.6)`,
                boxShadow: `0 0 ${Math.random() * 15 + 5}px rgba(${Math.random() > 0.5 ? '99, 102, 241' : '147, 51, 234'}, 0.8)`
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 4
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Space Console - Fixed positioning */}
      <motion.div
        className="fixed bottom-8 right-8 z-30 font-mono text-xs text-indigo-400/60 bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/20 hidden md:block"
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

      {/* Cosmic Accent Elements - Fixed positioning */}
      <div className="fixed top-20 left-8 z-20 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-60" />
      <div className="fixed top-1/3 right-12 z-20 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-40" />
      <div className="fixed bottom-1/4 left-1/4 z-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50" />
      
      {/* Space Portal Corners - Fixed positioning */}
      <div className="fixed top-0 left-0 z-20 w-20 h-20 border-l-2 border-t-2 border-indigo-400/30" />
      <div className="fixed bottom-0 right-0 z-20 w-20 h-20 border-r-2 border-b-2 border-pink-400/30" />
    </>
  );
};

export default SpaceBackground;