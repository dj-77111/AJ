import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Building, Calendar, MapPin } from 'lucide-react'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  icon: string
  color: string
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer",
      company: "Apple",
      period: "2023 - Present",
      description: "Working on high-impact projects in the development of iOS features and performance optimizations. Leading initiatives to improve user experience and system efficiency.",
      icon: "🍎",
      color: "from-gray-400 to-gray-600"
    },
    {
      title: "Software Engineer",
      company: "Uber",
      period: "2022 - 2023",
      description: "Built scalable backend services and improved system reliability. Contributed to the development of core platform features serving millions of users globally.",
      icon: "🚗",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Software Engineering Intern",
      company: "Samsung",
      period: "Summer 2021",
      description: "Contributed to the development of mobile device features. Worked on innovative solutions for Samsung's next-generation smartphones.",
      icon: "📱",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Software Engineering Intern",
      company: "Microsoft",
      period: "Summer 2020",
      description: "Worked on cloud services and automation tools for Azure. Developed tools that improved deployment efficiency and system monitoring.",
      icon: "☁️",
      color: "from-purple-400 to-pink-500"
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass hover-glow relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 hover:opacity-5 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))`
                  }}
                />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex flex-col md:flex-row gap-6">
                    <motion.div
                      className="flex-shrink-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shadow-lg`}>
                        {exp.icon}
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <motion.h3 
                            className="text-xl sm:text-2xl font-bold text-primary mb-1"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {exp.title}
                          </motion.h3>
                          
                          <motion.div 
                            className="flex items-center gap-2 text-accent font-semibold mb-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <Building className="h-4 w-4" />
                            {exp.company}
                          </motion.div>
                        </div>
                        
                        <motion.div 
                          className="flex items-center gap-2 text-muted-foreground font-medium"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </motion.div>
                      </div>
                      
                      <motion.p 
                        className="text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {exp.description}
                      </motion.p>
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

export default Experience