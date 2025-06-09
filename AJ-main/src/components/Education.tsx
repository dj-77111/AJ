import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap, Trophy, Star } from 'lucide-react'

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="glass hover-glow">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  className="flex-shrink-0"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl">
                    <GraduationCap className="h-12 w-12 text-white" />
                  </div>
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <motion.h3 
                    className="text-2xl sm:text-3xl font-bold text-primary mb-2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Bachelor of Technology
                  </motion.h3>
                  
                  <motion.h4 
                    className="text-xl text-accent font-semibold mb-3"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Computer Science and Engineering
                  </motion.h4>
                  
                  <motion.p 
                    className="text-lg text-muted-foreground mb-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    IIT Bombay, 2022
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold text-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <Trophy className="h-6 w-6" />
                    <span>Gold Medalist - CGPA: 9.8</span>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Floating achievement badges */}
                <div className="hidden lg:block relative">
                  <motion.div
                    className="absolute -top-4 -right-4 bg-primary/20 rounded-full p-3"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Trophy className="h-6 w-6 text-primary" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-8 -left-8 bg-accent/20 rounded-full p-3"
                    animate={{
                      y: [0, 10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <Star className="h-6 w-6 text-accent" />
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Education