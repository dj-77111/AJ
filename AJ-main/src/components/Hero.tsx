import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown, Mail, ExternalLink, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-muted-foreground"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium tracking-wider uppercase text-body">Welcome to my portfolio</span>
            <Sparkles className="h-4 w-4" />
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-display"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span
              className="block mb-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Hi, I'm{' '}
            </motion.span>
            <motion.span 
              className="gradient-text block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Ayush
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-xl sm:text-2xl text-primary font-semibold text-display">
              CSE Graduate (CGPA 8.0) | NSUT Delhi '22
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-body">
              Passionate software engineer with experience at top tech companies including{' '}
              <span className="text-foreground font-semibold">Apple</span> and{' '}
              <span className="text-foreground font-semibold">Uber</span>. 
              Research focus in <span className="text-foreground font-semibold">Mathematical Analysis</span> and{' '}
              <span className="text-foreground font-semibold">Data Science</span>.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Button
              size="lg"
              asChild
              className="group bg-white text-black hover:bg-white/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-display"
            >
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Get In Touch
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group border-white/20 hover:border-white/40 hover:bg-white/5 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-display"
            >
              <Link to="/about">
                Learn More
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => {
              const aboutSection = document.querySelector('#about')
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <span className="text-sm font-medium text-body">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated profile element */}
      <motion.div
        className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden xl:block"
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <motion.div
          className="w-80 h-80 rounded-full glass-strong border border-white/10 flex items-center justify-center text-8xl relative overflow-hidden"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            👨‍💻
          </motion.div>
          
          {/* Floating tech icons */}
          <motion.div
            className="absolute top-6 right-6 text-2xl"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            ⚡
          </motion.div>
          
          <motion.div
            className="absolute bottom-6 left-6 text-2xl"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            🚀
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 left-4 text-xl"
            animate={{
              x: [0, -8, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            💡
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-2 text-xl"
            animate={{
              x: [0, 8, 0],
              y: [0, -5, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            🎯
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero