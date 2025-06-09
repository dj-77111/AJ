import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <Education />
        <Experience />
        <Contact />
      </motion.main>
      
      <Footer />
    </div>
  )
}

export default App