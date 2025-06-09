import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Code2, Zap, Target, Heart } from 'lucide-react'

const About: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 
    'iOS Development', 'Cloud Services', 'System Design', 'Machine Learning'
  ]

  const highlights = [
    { icon: Code2, label: 'Full Stack Development', description: 'End-to-end application development' },
    { icon: Zap, label: 'Performance Optimization', description: 'Scalable and efficient solutions' },
    { icon: Target, label: 'Problem Solving', description: 'Complex technical challenges' },
    { icon: Heart, label: 'User Experience', description: 'Intuitive and engaging interfaces' }
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
    <section id="about" className="py-20 relative">
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
            About Me
          </motion.h2>

          <motion.p
            className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Crafting digital experiences with precision and passion
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="glass-strong hover-lift border-white/10">
                <CardContent className="p-8">
                  <motion.p 
                    className="text-lg text-muted-foreground mb-6 leading-relaxed"
                    variants={itemVariants}
                  >
                    I'm a passionate software engineer with experience at leading tech companies including
                    <span className="text-primary font-semibold"> Apple</span> and 
                    <span className="text-primary font-semibold"> Uber</span>. With internships at 
                    <span className="text-primary font-semibold"> Microsoft</span> and 
                    <span className="text-primary font-semibold"> Samsung</span>, I've developed a strong 
                    foundation in building scalable systems and innovative solutions.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg text-muted-foreground mb-8 leading-relaxed"
                    variants={itemVariants}
                  >
                    Beyond coding, I'm an avid chess player and love singing. I believe in the power of 
                    technology to solve real-world problems and create meaningful impact.
                  </motion.p>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                      <Code2 className="h-5 w-5" />
                      Skills & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-sm px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shimmer"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="glass hover-glow border-white/5 h-full">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <highlight.icon className="h-6 w-6 text-primary" />
                        </motion.div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">
                          {highlight.label}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {highlight.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={itemVariants}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-96 h-96 rounded-full glass-strong border border-white/10 flex items-center justify-center text-9xl relative overflow-hidden"
                  animate={{ 
                    rotate: [0, 3, -3, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    👨‍💻
                  </motion.div>
                  
                  {/* Floating elements around the avatar */}
                  <motion.div
                    className="absolute top-8 right-8 text-3xl"
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 15, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    ⚡
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-8 left-8 text-3xl"
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -15, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    🚀
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/2 left-6 text-2xl"
                    animate={{
                      x: [0, -10, 0],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    💡
                  </motion.div>

                  <motion.div
                    className="absolute top-1/3 right-6 text-2xl"
                    animate={{
                      x: [0, 10, 0],
                      y: [0, -8, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  >
                    🎯
                  </motion.div>

                  <motion.div
                    className="absolute bottom-1/3 right-12 text-2xl"
                    animate={{
                      y: [0, 12, 0],
                      rotate: [0, 20, 0],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.5
                    }}
                  >
                    🎨
                  </motion.div>
                </motion.div>

                {/* Orbiting elements */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    className="absolute -top-2 left-1/2 w-4 h-4 bg-white/20 rounded-full"
                    style={{ marginLeft: '-8px' }}
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-4 rounded-full border border-white/3"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    className="absolute -bottom-2 right-1/2 w-3 h-3 bg-white/15 rounded-full"
                    style={{ marginRight: '-6px' }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About