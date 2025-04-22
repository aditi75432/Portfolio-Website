
"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Database, Globe, Cpu, Server, Braces, BookOpen, GitBranch, Terminal, Brain } from "lucide-react"
import { motion } from "framer-motion"

type Skill = {
  name: string
  level: number
  icon: React.ReactNode
}

type SkillCategory = {
  name: string
  skills: Skill[]
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("technical")

  const technicalSkills: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        { name: "Python", level: 90, icon: <Terminal className="h-5 w-5" /> },
        { name: "JavaScript", level: 85, icon: <Braces className="h-5 w-5" /> },
        { name: "Java", level: 80, icon: <Code2 className="h-5 w-5" /> },
        { name: "C/C++", level: 75, icon: <Terminal className="h-5 w-5" /> },
      ],
    },
    {
      name: "Web Technologies",
      skills: [
        { name: "React.js", level: 85, icon: <Globe className="h-5 w-5" /> },
        { name: "Node.js", level: 80, icon: <Server className="h-5 w-5" /> },
        { name: "HTML/CSS", level: 90, icon: <Code2 className="h-5 w-5" /> },
        { name: "Express.js", level: 75, icon: <Server className="h-5 w-5" /> },
      ],
    },
    {
      name: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 80, icon: <Database className="h-5 w-5" /> },
        { name: "SQL", level: 75, icon: <Database className="h-5 w-5" /> },
        { name: "Git", level: 85, icon: <GitBranch className="h-5 w-5" /> },
        { name: "Tailwind CSS", level: 90, icon: <Code2 className="h-5 w-5" /> },
      ],
    },
    {
      name: "AI & ML",
      skills: [
        { name: "Machine Learning", level: 85, icon: <Brain className="h-5 w-5" /> },
        { name: "NLP", level: 80, icon: <Brain className="h-5 w-5" /> },
        { name: "Data Analysis", level: 85, icon: <Cpu className="h-5 w-5" /> },
        { name: "scikit-learn", level: 80, icon: <Cpu className="h-5 w-5" /> },
      ],
    },
    {
      name: "Computer Science Fundamentals",
      skills: [
        { name: "Data Structure And Algorithms", level: 90, icon: <Brain className="h-5 w-5" /> },
        { name: "Database Management System", level: 80, icon: <Brain className="h-5 w-5" /> },
        { name: "Operating System", level: 85, icon: <Cpu className="h-5 w-5" /> },
        { name: "Object-Oriented Programming", level: 80, icon: <Cpu className="h-5 w-5" /> },
        { name: "Computer Network", level: 80, icon: <Cpu className="h-5 w-5" /> },
      ],
    },
  ]

  const nonTechnicalSkills: SkillCategory[] = [
    {
      name: "Soft Skills",
      skills: [
        { name: "Leadership", level: 90, icon: <BookOpen className="h-5 w-5" /> },
        { name: "Communication", level: 85, icon: <BookOpen className="h-5 w-5" /> },
        { name: "Problem Solving", level: 95, icon: <BookOpen className="h-5 w-5" /> },
        { name: "Teamwork", level: 90, icon: <BookOpen className="h-5 w-5" /> },
      ],
    },
    {
      name: "Creative Skills",
      skills: [
        { name: "Bharatanatyam", level: 95, icon: <BookOpen className="h-5 w-5" /> },
        { name: "Painting", level: 80, icon: <BookOpen className="h-5 w-5" /> },
        { name: "Music", level: 75, icon: <BookOpen className="h-5 w-5" /> },
        { name: "Dance Choreography", level: 90, icon: <BookOpen className="h-5 w-5" /> },
      ],
    },
    {
      name: "Professional Skills",
      skills: [
        { name: "Project Management", level: 85, icon: <BookOpen className="h-5 w-5" /> },
        { name: "Mentoring", level: 90, icon: <BookOpen className="h-5 w-5" /> },
        { name: "Research", level: 85, icon: <BookOpen className="h-5 w-5" /> },
        { name: "Public Speaking", level: 80, icon: <BookOpen className="h-5 w-5" /> },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="section-heading mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <Tabs defaultValue="technical" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 glass-card">
            <TabsTrigger
              value="technical"
              className="text-lg font-medium data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              onClick={() => setActiveTab("technical")}
            >
              Technical Skills
            </TabsTrigger>
            <TabsTrigger
              value="non-technical"
              className="text-lg font-medium data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary"
              onClick={() => setActiveTab("non-technical")}
            >
              Non-Technical Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-12">
            {technicalSkills.map((category, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
              >
                <h3 className="text-xl font-display font-bold mb-6 gradient-text">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="glass-card p-4"
                      variants={item}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 0 20px rgba(0, 195, 255, 0.3)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/20 p-2 rounded-full">{skill.icon}</div>
                        <h4 className="font-medium text-primary">{skill.name}</h4>
                      </div>
                      <div className="w-full bg-background/30 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                          style={{ width: "0%" }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          aria-label={`${skill.level}% proficiency in ${skill.name}`}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="non-technical" className="space-y-12">
            {nonTechnicalSkills.map((category, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
              >
                <h3 className="text-xl font-display font-bold mb-6 gradient-text">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="glass-card p-4"
                      variants={item}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 0 20px rgba(138, 43, 226, 0.3)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-secondary/20 p-2 rounded-full">{skill.icon}</div>
                        <h4 className="font-medium text-secondary">{skill.name}</h4>
                      </div>
                      <div className="w-full bg-background/30 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="h-2.5 rounded-full bg-gradient-to-r from-secondary to-accent"
                          style={{ width: "0%" }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          aria-label={`${skill.level}% proficiency in ${skill.name}`}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
