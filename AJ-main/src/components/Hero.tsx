import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown, Mail, ExternalLink } from 'lucide-react'

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">
              Ayush Jain
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl text-accent font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            CSE Gold Medalist (CGPA 9.8) | IIT Bombay '22
          </motion.p>

          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Passionate software engineer with experience at top tech companies including Apple and Uber
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button
              variant="glow"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#about')}
              className="group hover-glow"
            >
              Learn More
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#about')}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated profile image placeholder */}
      <motion.div
        className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-64 h-64 rounded-full glass border-2 border-primary/30 flex items-center justify-center text-6xl"
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 20px rgba(255, 107, 107, 0.3)",
              "0 0 40px rgba(255, 107, 107, 0.6)",
              "0 0 20px rgba(255, 107, 107, 0.3)"
            ]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          👨‍💻
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero