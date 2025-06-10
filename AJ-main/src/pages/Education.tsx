import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap, Trophy, Star, Award, Calendar, MapPin, BookOpen, School } from 'lucide-react'

const Education: React.FC = () => {
  const educationData = [
    {
      level: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "NSUT Delhi",
      period: "2018 - 2022",
      cgpa: "8.0/10.0",
      research: "Mathematical Analysis and Data Science",
      icon: GraduationCap,
      color: "from-blue-400 to-purple-500",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      level: "Higher Secondary Education",
      field: "Science Stream",
      institution: "Delhi Public School",
      period: "2016 - 2018",
      achievement: "Always curious about development",
      icon: School,
      color: "from-green-400 to-blue-500",
      gradient: "from-green-500/20 to-blue-500/20"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold text-center mb-6 gradient-text text-display"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h1>

        <motion.p
          className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-body"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Academic excellence and continuous learning journey
        </motion.p>

        <motion.div
          className="max-w-5xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass-strong hover-lift border-white/10 relative overflow-hidden group">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
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
                          className={`w-32 h-32 rounded-full bg-gradient-to-br ${edu.color} border border-white/20 flex items-center justify-center relative overflow-hidden`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <edu.icon className="h-16 w-16 text-white" />
                          
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
                        <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-3 text-display">
                          {edu.level}
                        </h3>
                        <h4 className="text-xl sm:text-2xl text-foreground font-semibold mb-4 text-display">
                          {edu.field}
                        </h4>
                      </motion.div>
                      
                      <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-2 text-muted-foreground text-body">
                          <MapPin className="h-4 w-4" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-body">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                      </motion.div>
                      
                      {edu.cgpa && (
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
                            <p className="text-lg font-bold text-yellow-400 text-display">Academic Excellence</p>
                            <p className="text-sm text-yellow-300/80 text-body">CGPA: {edu.cgpa}</p>
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
                      )}

                      {edu.research && (
                        <motion.div 
                          className="flex items-center justify-center lg:justify-start gap-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-4"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 1.2 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <BookOpen className="h-8 w-8 text-purple-400" />
                          </motion.div>
                          <div>
                            <p className="text-lg font-bold text-purple-400 text-display">Research Focus</p>
                            <p className="text-sm text-purple-300/80 text-body">{edu.research}</p>
                          </div>
                        </motion.div>
                      )}

                      {edu.achievement && (
                        <motion.div 
                          className="flex items-center justify-center lg:justify-start gap-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-4"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 1.2 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Star className="h-8 w-8 text-green-400" />
                          </motion.div>
                          <div>
                            <p className="text-lg font-bold text-green-400 text-display">Early Passion</p>
                            <p className="text-sm text-green-300/80 text-body">{edu.achievement}</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education