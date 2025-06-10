import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ 
    id: number; 
    x: number; 
    delay: number; 
    duration: number;
    size: number;
  }>>([])

  useEffect(() => {
    const particleArray = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 10,
      size: 1 + Math.random() * 2,
    }))
    setParticles(particleArray)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute w-32 h-32 rounded-full glass border border-white/5"
        style={{ top: '15%', left: '10%' }}
        animate={{
          y: [-30, 30, -30],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-24 h-24 glass border border-white/5"
        style={{ 
          top: '25%', 
          right: '15%',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
        }}
        animate={{
          y: [20, -40, 20],
          rotate: [0, -180, -360],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-20 h-20 glass border border-white/5"
        style={{ 
          top: '60%', 
          left: '8%',
          transform: 'rotate(45deg)'
        }}
        animate={{
          y: [-25, 25, -25],
          rotate: [45, 225, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-28 h-28 rounded-2xl glass border border-white/5"
        style={{ top: '70%', right: '12%' }}
        animate={{
          y: [25, -25, 25],
          rotate: [0, 180, 360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-16 h-16 rounded-full glass border border-white/5"
        style={{ top: '40%', right: '25%' }}
        animate={{
          y: [-15, 35, -15],
          x: [-10, 10, -10],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/60 dark:bg-white/60 light:bg-rose-400/40"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          initial={{ y: '100vh', scale: 0, opacity: 0 }}
          animate={{
            y: '-100px',
            scale: [0, 1, 1, 0],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}

      {/* Gradient Orbs - Dark Theme */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 dark:block light:hidden"
        style={{
          top: '10%',
          left: '-15%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-15 dark:block light:hidden"
        style={{
          top: '50%',
          right: '-20%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />

      {/* Gradient Orbs - Light Theme */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-10 light:block dark:hidden"
        style={{
          top: '10%',
          left: '-15%',
          background: 'radial-gradient(circle, rgba(237, 117, 88, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-8 light:block dark:hidden"
        style={{
          top: '50%',
          right: '-20%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-6 light:block dark:hidden"
        style={{
          bottom: '5%',
          left: '40%',
          background: 'radial-gradient(circle, rgba(237, 117, 88, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.4, 0.7, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 20
        }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-10 dark:block light:hidden"
        style={{
          bottom: '5%',
          left: '40%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.4, 0.7, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 20
        }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02] light:opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  )
}

export default AnimatedBackground