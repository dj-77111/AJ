import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Linkedin, Github, Instagram, ExternalLink, Send } from 'lucide-react'

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email Me",
      href: "mailto:ayush.jain@gmail.com",
      color: "from-red-400 to-red-600",
      description: "ayush.jain@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ayush-jain",
      color: "from-blue-400 to-blue-600",
      description: "Professional Network"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ayush-jain",
      color: "from-gray-400 to-gray-600",
      description: "Code Repository"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/ayush_jain",
      color: "from-pink-400 to-purple-600",
      description: "Personal Updates"
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
    <section id="contact" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-center mb-6 gradient-text"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>

          <motion.p 
            className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Feel free to reach out via email or connect on social media. I'm always open to 
            discussing new opportunities and interesting projects.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="glass hover-glow h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                    <div>
                      <motion.div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <method.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {method.label}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {method.description}
                      </p>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="group hover-glow"
                    >
                      <a 
                        href={method.href}
                        target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                      >
                        Connect
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <Card className="glass max-w-2xl mx-auto">
              <CardContent className="p-8">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Send className="h-12 w-12 text-primary mx-auto mb-4" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Let's Build Something Amazing Together
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Whether you have a project in mind or just want to chat about technology, 
                  I'd love to hear from you!
                </p>
                
                <Button
                  variant="glow"
                  size="lg"
                  asChild
                  className="group"
                >
                  <a href="mailto:ayush.jain@gmail.com">
                    <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Start a Conversation
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact