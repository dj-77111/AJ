import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap, Trophy, Star, Award, Calendar, MapPin } from 'lucide-react'

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center mb-6 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <motion.p
          className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Academic excellence and continuous learning
        </motion.p>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="glass-strong hover-lift border-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
            />
            
            <CardContent className="p-8 lg:p-12 relative z-10">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Icon Section */}
                <motion.div
                  className="flex justify-center lg:justify-start"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center text-4xl relative overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <GraduationCap className="h-16 w-16 text-primary" />
                      
                      {/* Floating achievement icons */}
                      <motion.div
                        className="absolute -top-2 -right-2 bg-yellow-500/20 rounded-full p-2"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Trophy className="h-4 w-4 text-yellow-400" />
                      </motion.div>
                      
                      <motion.div
                        className="absolute -bottom-2 -left-2 bg-blue-500/20 rounded-full p-2"
                        animate={{
                          scale: [1, 1.3, 1],
                          rotate: [0, -15, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      >
                        <Star className="h-4 w-4 text-blue-400" />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="lg:col-span-2 text-center lg:text-left space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
                      Bachelor of Technology
                    </h3>
                    <h4 className="text-xl sm:text-2xl text-foreground font-semibold mb-4">
                      Computer Science and Engineering
                    </h4>
                  </motion.div>
                  
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium">IIT Bombay</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">2018 - 2022</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center justify-center lg:justify-start gap-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Award className="h-8 w-8 text-yellow-400" />
                    </motion.div>
                    <div>
                      <p className="text-lg font-bold text-yellow-400">Gold Medalist</p>
                      <p className="text-sm text-yellow-300/80">CGPA: 9.8/10.0</p>
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 15, -15, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    </motion.div>
                  </motion.div>

                  {/* Additional achievements */}
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="glass border-white/5 rounded-xl p-4 text-center hover-glow">
                      <h5 className="font-semibold text-primary mb-1">Dean's List</h5>
                      <p className="text-sm text-muted-foreground">All 8 semesters</p>
                    </div>
                    <div className="glass border-white/5 rounded-xl p-4 text-center hover-glow">
                      <h5 className="font-semibold text-primary mb-1">Research</h5>
                      <p className="text-sm text-muted-foreground">3 publications</p>
                    </div>
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