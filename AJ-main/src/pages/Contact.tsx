import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Linkedin, Github, Instagram, ExternalLink, Send, MessageCircle, Phone } from 'lucide-react'

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email Me",
      href: "mailto:ayush@gmail.com",
      color: "from-red-400 to-red-600",
      description: "ayush@gmail.com",
      gradient: "from-red-500/20 to-red-600/20"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ayush",
      color: "from-blue-400 to-blue-600",
      description: "Professional Network",
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ayush",
      color: "from-gray-400 to-gray-600",
      description: "Code Repository",
      gradient: "from-gray-500/20 to-gray-600/20"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/ayush",
      color: "from-pink-400 to-purple-600",
      description: "Personal Updates",
      gradient: "from-pink-500/20 to-purple-600/20"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-black/20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-center mb-6 gradient-text text-display"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h1>

          <motion.p 
            className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-body"
            variants={itemVariants}
          >
            Let's connect and explore opportunities to create something amazing together
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="glass-strong hover-lift h-full border-white/10 group relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  
                  <CardContent className="p-6 text-center h-full flex flex-col justify-between relative z-10">
                    <div>
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 shadow-2xl border border-white/10`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <method.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-2 text-display">
                        {method.label}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 text-body">
                        {method.description}
                      </p>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="group/btn hover-glow border-white/20 hover:border-white/40 hover:bg-white/5"
                    >
                      <a 
                        href={method.href}
                        target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                      >
                        Connect
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main CTA Section */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <Card className="glass-strong max-w-4xl mx-auto border-white/10 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <CardContent className="p-8 lg:p-12 relative z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Send className="h-16 w-16 text-primary mx-auto mb-6" />
                </motion.div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-display">
                  Let's Build Something Amazing Together
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-body">
                  Whether you have a project in mind, want to discuss opportunities, or just want to chat about technology and innovation, I'd love to hear from you!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    asChild
                    className="group bg-white text-black hover:bg-white/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-display"
                  >
                    <a href="mailto:ayush@gmail.com">
                      <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      Start a Conversation
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="group border-white/20 hover:border-white/40 hover:bg-white/5 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-display"
                  >
                    <a href="https://linkedin.com/in/ayush" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>

                {/* Quick contact info */}
                <motion.div
                  className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground text-body"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>ayush@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Available for calls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>Quick response guaranteed</span>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact