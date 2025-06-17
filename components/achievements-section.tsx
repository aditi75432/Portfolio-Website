"use client"

import type React from "react"

import { useState } from "react"
import { Award, Code, Users, Trophy } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type Achievement = {
  title: string
  description: string
  icon: React.ReactNode
  details: string
}

export default function AchievementsSection() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)

  const achievements: Achievement[] = [
    {
      title: "LFX'25 Intern",
      description: "The Linux Foundation @RISC-V International Mentee",
      icon: <Trophy className="h-8 w-8" />,
      details:
        " Selected as mentee for the Linux Foundation’s RISC-V Olympia Model (LFX’ 2025) (Open- Source Program) from a globally competitive pool.",
    },
    {
      title: "InnovateX 24 Hr Hackathon Winner",
      description: "Top 4 at Delhi Technological University",
      icon: <Trophy className="h-8 w-8" />,
      details:
        "Led a team of 4 to develop ARIOSE, a credit card fraud detection platform that achieved 92% fraud detection accuracy. The project leveraged blockchain technology for enhanced security and transparency, and integrated IPFS for secure, decentralized storage.",
    },
    {
      title: "Beta-Microsoft Learn Student Ambassador",
      description: "Selected for Microsoft's prestigious program",
      icon: <Users className="h-8 w-8" />,
      details:
        "Selected as a Beta Microsoft Learn Student Ambassador, representing Microsoft's prestigious student leadership program. Organized workshops and events to help fellow students learn new technologies and develop technical skills.",
    },
    {
      title: "500+ Coding Problems Solved",
      description: "LeetCode, GeeksForGeeks, CodeForces",
      icon: <Code className="h-8 w-8" />,
      details:
        "Demonstrated strong problem-solving skills and algorithmic thinking by solving over 400 coding challenges across platforms like LeetCode, GeeksForGeeks, and CodeForces. Specialized in data structures, algorithms, and competitive programming techniques. Selected for Interviews at top tech comapnies- Google, MOTORQ.",
        
    },
    {
      title: "Amazon Sambhav Hackathon Finalist",
      description: "Top 100 out of 1L+ teams",
      icon: <Award className="h-8 w-8" />,
      details:
        "Selected among the top 100 out of 1L+ teams at Amazon Sambhav Hackathon 2024 for building MCF-OmniFlux, an AI-powered multi-fulfillment and sustainability-focused logistics solution. The project focused on optimizing delivery routes and reducing carbon footprint.",
    },
    {
      title: "Queen Of Code -15",
      description: "Rank 1",
      icon: <Award className="h-8 w-8" />,
      details:
        "Secured 1st Position in Queens Of Code - Coding Hackathon by Codess.Cafe on Hackerrank",
    },
    {
      title: "LeetCode Weekly Contest Ranking",
      description: "Rank 191",
      icon: <Award className="h-8 w-8" />,
      details:
        "191 / 23902 - Ranking of Weekly Contest 428, Solved 3 out of 4 Questions",
    },
    {
      title: "9.64 CGPA in 2nd Semester",
      description: "3rd Postion in IT Branch",
      icon: <Award className="h-8 w-8" />,
      details:
        "Achieved a 10 CGPA in DSA, DBMS, C programming ",
    },
    {
      title: "Bharat Ko Jaano Pratiyogita",
      description: "3rd Position",
      icon: <Award className="h-8 w-8" />,
      details:
        "Third Position at Bharat Ko Jaano Quiz at Zonal Level",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16 text-center">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card dark:bg-card-dark rounded-xl p-6 shadow-md flex flex-col items-center text-center card-hover cursor-pointer"
              onClick={() => setSelectedAchievement(achievement)}
            >
              <div className="bg-primary/10 dark:bg-secondary/10 p-4 rounded-full mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
              <p className="text-sm text-text/70 dark:text-text-dark/70">{achievement.description}</p>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {selectedAchievement?.icon}
                <span>{selectedAchievement?.title}</span>
              </DialogTitle>
              <DialogDescription className="text-text dark:text-text-dark pt-4">
                {selectedAchievement?.details}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
