import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; color: string }>>([])

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 15,
      color: ['rgba(255, 107, 107, 0.6)', 'rgba(78, 205, 196, 0.6)', 'rgba(138, 43, 226, 0.6)'][Math.floor(Math.random() * 3)]
    }))
    setParticles(particleArray)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10"
        style={{ top: '10%', left: '10%' }}
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-white/10"
        style={{ 
          top: '20%', 
          right: '15%',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
        }}
        animate={{
          y: [20, -20, 20],
          rotate: [0, -180, -360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10"
        style={{ 
          top: '60%', 
          left: '5%',
          transform: 'rotate(45deg)'
        }}
        animate={{
          y: [-15, 15, -15],
          rotate: [45, 225, 405],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-white/10"
        style={{ top: '70%', right: '10%' }}
        animate={{
          y: [15, -15, 15],
          rotate: [0, 180, 360],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${particle.x}%`,
            backgroundColor: particle.color,
          }}
          initial={{ y: '100vh', scale: 0, opacity: 0 }}
          animate={{
            y: '-100px',
            scale: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-30"
        style={{
          top: '20%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-25"
        style={{
          top: '60%',
          right: '-15%',
          background: 'radial-gradient(circle, rgba(78, 205, 196, 0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7
        }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{
          bottom: '10%',
          left: '30%',
          background: 'radial-gradient(circle, rgba(138, 43, 226, 0.25) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 14
        }}
      />
    </div>
  )
}

export default AnimatedBackground