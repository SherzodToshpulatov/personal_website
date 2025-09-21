import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import UFO from "../assets/ufo.png"

const SpaceBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-gray-950 to-purple-950" />
      
      {/* Shooting Stars - Top-right to Bottom-left Diagonal with 30 degree rotation */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shooting-star-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 40}%`,
              right: `${-20 + Math.random() * 40}%`, // Start from right side
              transform: 'rotate(30deg)' // Rotate the entire star and trail
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 0
            }}
            animate={{
              x: [0, -(window.innerWidth * 0.8 + 300)], // Move left (negative)
              y: [0, window.innerHeight * 0.6 + 200], // Move down
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 1,
              repeat: Infinity,
              delay: i * 1.2 + Math.random() * 3,
              ease: "easeOut"
            }}
          >
                      
              {/* Diagonal trail behind the star */}
              {/* <div 
                className="absolute bg-gradient-to-l from-white via-cyan-300 to-transparent"
                style={{
                  width: '120px', // Made trail longer for better effect
                  height: '2px', // Made trail slightly thicker
                  top: '50%',
                  left: '100%', // Trail appears behind the star
                  transform: 'translateY(-70%)',
                  boxShadow: '0 0 6px rgba(6, 182, 212, 0.8), 0 0 12px rgba(6, 182, 212, 0.4)'
                }}
              /> */}
            
          </motion.div>
        ))}
      </div>

      {/* Falling stars */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`falling-star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 6px #fff, 0 0 12px #00f5ff'
            }}
            initial={{
              y: -10,
              opacity: 0
            }}
            animate={{
              y: window.innerHeight + 50,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Twinkling background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`twinkle-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* UFO PNG Image that follows mouse */}
      <motion.div
        className="fixed z-10 pointer-events-none"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 30
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        <div className="relative">
          {/* UFO Image - replace src with your actual UFO PNG */}
          <motion.img
            src={UFO}
            alt="UFO"
            className="w-20 h-15 object-contain filter drop-shadow-lg"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5)) drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))',
            }}
            animate={{
              rotateZ: [-2, 2, -2],
              y: [0, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* UFO Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* UFO Tractor Beam */}
          <motion.div 
            className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-cyan-300/40 to-transparent"
            style={{
              width: '80px',
              height: '100px',
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
              filter: 'blur(2px)'
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Scanning particles in the beam */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`beam-particle-${i}`}
                className="absolute w-1 h-1 bg-cyan-300 rounded-full"
                style={{
                  left: `${-20 + i * 10}px`,
                }}
                animate={{
                  y: [0, 60, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

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

      {/* Cosmic particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: Math.random() > 0.5 ? '#6366f1' : '#8b5cf6',
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaceBackground;
