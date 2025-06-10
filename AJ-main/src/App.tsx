import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <AnimatedBackground />
        <Navbar />
        <ThemeToggle />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pt-20"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App