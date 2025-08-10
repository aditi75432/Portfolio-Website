"use client"

import type React from "react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Database, Globe, Cpu, Server, Braces, BookOpen, GitBranch, Terminal, Brain } from "lucide-react"

// Common Devicon base (CDN)
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"

type Skill = {
  name: string
  level: number
  icon: React.ReactNode
  logoUrl?: string
}

type SkillCategory = {
  name: string
  skills: Skill[]
}

function SkillLogo({ name, icon, logoUrl }: { name: string; icon: React.ReactNode; logoUrl?: string }) {
  return (
    <div className="flex flex-col items-center gap-2 min-w-[88px] px-2 py-2">
      {logoUrl ? (
        <img
          src={logoUrl || "/placeholder.svg"}
          alt={`${name} logo`}
          width={56}
          height={56}
          className="h-14 w-14 object-contain"
          loading="lazy"
        />
      ) : (
        <div className="h-14 w-14 flex items-center justify-center rounded-md bg-white/5">
          <span className="text-primary dark:text-secondary">{icon}</span>
        </div>
      )}
      <span className="text-xs md:text-sm text-foreground/90">{name}</span>
    </div>
  )
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("technical")

  // TECHNICAL SKILLS
  const technicalSkills: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        {
          name: "Python",
          level: 90,
          icon: <Terminal className="h-5 w-5" />,
          logoUrl: `${DEVICON}/python/python-original.svg`,
        },
        {
          name: "JavaScript",
          level: 85,
          icon: <Braces className="h-5 w-5" />,
          logoUrl: `${DEVICON}/javascript/javascript-original.svg`,
        },
        { name: "Java", level: 80, icon: <Code2 className="h-5 w-5" />, logoUrl: `${DEVICON}/java/java-original.svg` },
        {
          name: "C/C++",
          level: 75,
          icon: <Terminal className="h-5 w-5" />,
          logoUrl: `${DEVICON}/cplusplus/cplusplus-original.svg`,
        },
      ],
    },
    {
      name: "Web Technologies",
      skills: [
        {
          name: "React.js",
          level: 85,
          icon: <Globe className="h-5 w-5" />,
          logoUrl: `${DEVICON}/react/react-original.svg`,
        },
        {
          name: "Node.js",
          level: 80,
          icon: <Server className="h-5 w-5" />,
          logoUrl: `${DEVICON}/nodejs/nodejs-original.svg`,
        },
        {
          name: "HTML/CSS",
          level: 90,
          icon: <Code2 className="h-5 w-5" />,
          logoUrl: `${DEVICON}/html5/html5-original.svg`,
        },
        {
          name: "Express.js",
          level: 75,
          icon: <Server className="h-5 w-5" />,
          logoUrl: `${DEVICON}/express/express-original.svg`,
        },
      ],
    },
    {
      name: "Databases & Tools",
      skills: [
        {
          name: "MongoDB",
          level: 80,
          icon: <Database className="h-5 w-5" />,
          logoUrl: `${DEVICON}/mongodb/mongodb-original.svg`,
        },
        {
          name: "SQL",
          level: 75,
          icon: <Database className="h-5 w-5" />,
          logoUrl: `${DEVICON}/mysql/mysql-original.svg`,
        },
        { name: "Git", level: 85, icon: <GitBranch className="h-5 w-5" />, logoUrl: `${DEVICON}/git/git-original.svg` },
        {
          name: "Tailwind CSS",
          level: 90,
          icon: <Code2 className="h-5 w-5" />,
          logoUrl: `${DEVICON}/tailwindcss/tailwindcss-plain.svg`,
        },
      ],
    },
    {
      name: "AI & ML",
      skills: [
        // For conceptual skills, keep icons; where a logo exists, use it.
        { name: "Machine Learning", level: 85, icon: <Brain className="h-5 w-5" /> },
        { name: "NLP", level: 80, icon: <Brain className="h-5 w-5" /> },
        { name: "Data Analysis", level: 85, icon: <Cpu className="h-5 w-5" /> },
        {
          name: "scikit-learn",
          level: 80,
          icon: <Cpu className="h-5 w-5" />,
          logoUrl: `${DEVICON}/scikitlearn/scikitlearn-original.svg`,
        },
      ],
    },
    {
      name: "Computer Science Fundamentals",
      skills: [
        { name: "Data Structure And Algorithms", level: 90, icon: <Brain className="h-5 w-5" /> },
        { name: "Database Management System", level: 80, icon: <Database className="h-5 w-5" /> },
        { name: "Operating System", level: 85, icon: <Cpu className="h-5 w-5" /> },
        { name: "Object-Oriented Programming", level: 80, icon: <Cpu className="h-5 w-5" /> },
        { name: "Computer Network", level: 80, icon: <Cpu className="h-5 w-5" /> },
      ],
    },
  ]

  // NON-TECHNICAL SKILLS
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

  const renderGroup = (group: SkillCategory) => {
    return (
      <div key={group.name} className="mb-10">
        <h3 className="text-xl md:text-2xl font-display font-bold mb-4">{group.name}</h3>
        <div className="w-full overflow-x-auto">
          <div className="flex items-start gap-6 md:gap-10 min-w-max">
            {group.skills.map((skill, i) => (
              <SkillLogo
                key={`${group.name}-${skill.name}-${i}`}
                name={skill.name}
                icon={skill.icon}
                logoUrl={skill.logoUrl}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading mb-10 text-left">Skills</h2>

        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="inline-grid grid-cols-2 gap-2 mb-8 glass-card">
            <TabsTrigger
              value="technical"
              className="text-base md:text-lg font-medium data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              onClick={() => setActiveTab("technical")}
            >
              Technical
            </TabsTrigger>
            <TabsTrigger
              value="non-technical"
              className="text-base md:text-lg font-medium data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary"
              onClick={() => setActiveTab("non-technical")}
            >
              Non-Technical
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical">
            <div className="space-y-4">{technicalSkills.map(renderGroup)}</div>
          </TabsContent>

          <TabsContent value="non-technical">
            <div className="space-y-4">{nonTechnicalSkills.map(renderGroup)}</div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
