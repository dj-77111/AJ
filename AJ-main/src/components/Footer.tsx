import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Code, Coffee, Music } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main footer content */}
          <motion.div
            className="flex flex-col items-center gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p 
              className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap text-lg"
            >
              <span>&copy; 2024 Ayush Jain. Crafted with</span>
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                  color: ["#ef4444", "#f97316", "#ef4444"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="h-5 w-5 fill-current" />
              </motion.span>
              <span>and</span>
              <motion.span
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Code className="h-5 w-5" />
              </motion.span>
            </motion.p>

            {/* Fun elements */}
            <motion.div
              className="flex items-center gap-4 text-muted-foreground/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Coffee className="h-4 w-4" />
                <span className="text-sm">Fueled by coffee</span>
              </motion.div>
              
              <span className="text-white/20">•</span>
              
              <motion.div
                className="flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Music className="h-4 w-4" />
                <span className="text-sm">Inspired by music</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* Additional info */}
          <motion.div
            className="space-y-2 text-sm text-muted-foreground/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p>Built with React, TypeScript, Tailwind CSS, and Framer Motion</p>
            <p>Designed for performance, accessibility, and user experience</p>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute bottom-4 left-4 opacity-20"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Code className="h-6 w-6" />
          </motion.div>

          <motion.div
            className="absolute bottom-4 right-4 opacity-20"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <Heart className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer