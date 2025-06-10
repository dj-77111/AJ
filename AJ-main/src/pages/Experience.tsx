import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Building, Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react'

interface ExperienceItem {
  title: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
  icon: string
  color: string
  gradient: string
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer",
      company: "Apple",
      period: "2023 - Present",
      location: "Cupertino, CA",
      description: "Working on high-impact projects in the development of iOS features and performance optimizations.",
      achievements: [
        "Led initiatives to improve user experience and system efficiency",
        "Optimized core iOS features serving millions of users",
        "Collaborated with cross-functional teams on innovative solutions"
      ],
      icon: "🍎",
      color: "from-gray-400 to-gray-600",
      gradient: "from-gray-500/20 to-gray-700/20"
    },
    {
      title: "Software Engineer",
      company: "Uber",
      period: "2022 - 2023",
      location: "San Francisco, CA",
      description: "Built scalable backend services and improved system reliability for global platform.",
      achievements: [
        "Developed core platform features serving millions of users globally",
        "Improved system reliability and reduced latency by 40%",
        "Implemented microservices architecture for better scalability"
      ],
      icon: "🚗",
      color: "from-green-400 to-blue-500",
      gradient: "from-green-500/20 to-blue-500/20"
    },
    {
      title: "Software Engineering Intern",
      company: "Samsung",
      period: "Summer 2021",
      location: "Seoul, South Korea",
      description: "Contributed to the development of mobile device features and next-generation smartphones.",
      achievements: [
        "Developed innovative solutions for Samsung's flagship devices",
        "Worked on camera optimization algorithms",
        "Contributed to Android customization features"
      ],
      icon: "📱",
      color: "from-blue-400 to-purple-500",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Software Engineering Intern",
      company: "Microsoft",
      period: "Summer 2020",
      location: "Redmond, WA",
      description: "Worked on cloud services and automation tools for Azure platform.",
      achievements: [
        "Developed tools that improved deployment efficiency by 60%",
        "Enhanced system monitoring and alerting capabilities",
        "Contributed to Azure DevOps pipeline optimizations"
      ],
      icon: "☁️",
      color: "from-purple-400 to-pink-500",
      gradient: "from-purple-500/20 to-pink-500/20"
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
    <section className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold text-center mb-6 gradient-text text-display"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h1>

        <motion.p
          className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-body"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Building innovative solutions at world-class companies
        </motion.p>

        <motion.div
          className="max-w-5xl mx-auto space-y-8"
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
              <Card className="glass-strong hover-lift border-white/10 relative overflow-hidden group">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Company Icon */}
                    <motion.div
                      className="flex-shrink-0 flex items-center justify-center lg:items-start"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-3xl shadow-2xl border border-white/10`}>
                        {exp.icon}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="space-y-2">
                          <motion.h3 
                            className="text-2xl sm:text-3xl font-bold text-primary text-display"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {exp.title}
                          </motion.h3>
                          
                          <motion.div 
                            className="flex items-center gap-2 text-foreground font-semibold text-lg text-display"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <Building className="h-5 w-5" />
                            {exp.company}
                          </motion.div>
                        </div>
                        
                        <motion.div 
                          className="flex flex-col gap-2 text-muted-foreground text-body"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span className="font-medium">{exp.location}</span>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Description */}
                      <motion.p 
                        className="text-muted-foreground leading-relaxed text-lg text-body"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {exp.description}
                      </motion.p>

                      {/* Achievements */}
                      <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <h4 className="text-foreground font-semibold flex items-center gap-2 text-display">
                          <Briefcase className="h-4 w-4" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start gap-3 text-muted-foreground text-body"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.7 + achIndex * 0.1 }}
                            >
                              <motion.div
                                className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.2 }}
                              />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
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