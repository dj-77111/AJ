import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }, [isDark])

  return (
    <motion.div
      className="fixed top-24 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsDark(!isDark)}
        className="glass-strong border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:scale-110 group"
      >
        <motion.div
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {isDark ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="h-5 w-5 text-rose-400 group-hover:text-rose-300 transition-colors duration-300" />
            </motion.div>
          )}
        </motion.div>
      </Button>
    </motion.div>
  )
}

export default ThemeToggle