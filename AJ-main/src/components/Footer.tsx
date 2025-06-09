import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Code } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span>&copy; 2024 Ayush Jain. Made with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                color: ["#ef4444", "#f97316", "#ef4444"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="h-4 w-4 fill-current" />
            </motion.span>
            <span>and</span>
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Code className="h-4 w-4" />
            </motion.span>
            <span>All rights reserved.</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer