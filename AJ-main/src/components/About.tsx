import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const About: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 
    'iOS Development', 'Cloud Services', 'System Design', 'Machine Learning'
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
            className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <Card className="glass hover-glow">
                <CardContent className="p-8">
                  <motion.p 
                    className="text-lg text-muted-foreground mb-6 leading-relaxed"
                    variants={itemVariants}
                  >
                    I'm a passionate software engineer with experience at leading tech companies including 
                    <span className="text-primary font-semibold"> Apple</span> and 
                    <span className="text-primary font-semibold"> Uber</span>. With internships at 
                    <span className="text-accent font-semibold"> Microsoft</span> and 
                    <span className="text-accent font-semibold"> Samsung</span>, I've developed a strong 
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
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Skills & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="skill" className="text-sm">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
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
                  className="w-80 h-80 rounded-full glass border-2 border-accent/30 flex items-center justify-center text-8xl relative overflow-hidden"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    👨‍💻
                  </motion.div>
                  
                  {/* Floating elements around the avatar */}
                  <motion.div
                    className="absolute top-4 right-4 text-2xl"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    ⚡
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-4 left-4 text-2xl"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    🚀
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/2 left-2 text-xl"
                    animate={{
                      x: [0, -5, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    💡
                  </motion.div>
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