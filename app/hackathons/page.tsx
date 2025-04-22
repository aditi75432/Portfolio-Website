"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Users, Calendar, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

type Hackathon = {
  name: string
  organizer: string
  location: string
  date: string
  achievement: string
  project: {
    name: string
    description: string
    technologies: string[]
    features: string[]
  }
  team?: string[]
  judges?: string
  image: string
}

export default function HackathonsPage() {
  const hackathons: Hackathon[] = [
    {
      name: "InnovateX Hackathon",
      organizer: "Delhi Technological University",
      location: "Delhi, India",
      date: "2024",
      achievement: "Winner (Top 4)",
      project: {
        name: "ARIOSE",
        description: "Credit card fraud detection platform",
        technologies: ["React", "Node.js", "scikit-learn", "Diamante Blockchain", "IPFS"],
        features: [
          "92% fraud detection accuracy",
          "Blockchain integration for enhanced security",
          "IPFS for secure, decentralized storage",
        ],
      },
      team: ["Aditi Mehta", "Anusha Arora", "Arshiya Garg", "Vania Goel"],
      judges: "Panel of industry experts and professors from DTU",
      image: "/InnovateX.png",
    },
    {
      name: "Amazon Sambhav Hackathon",
      organizer: "Amazon",
      location: "Virtual",
      date: "2024",
      achievement: "Top 100 out of 1L+ teams",
      project: {
        name: "MCF-OmniFlux",
        description: "AI-powered multi-fulfillment and sustainability-focused logistics solution",
        technologies: ["React", "Node.js", "Machine Learning", "AWS"],
        features: ["Route optimization algorithms", "Carbon footprint reduction", "Multi-warehouse fulfillment system"],
      },
      team: ["Aditi Mehta", "Anusha Arora", "Arshiya Garg", "Vania Goel"],
      judges: "Amazon technical leaders and industry experts",
      image: "/amazon_sam.png",
    }
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-display font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hackathons
        </motion.h1>

        <Tabs defaultValue={hackathons[0].name.replace(/\s+/g, "-").toLowerCase()} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            {hackathons.map((hackathon, index) => (
              <TabsTrigger
                key={index}
                value={hackathon.name.replace(/\s+/g, "-").toLowerCase()}
                className="text-lg font-medium"
              >
                {hackathon.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {hackathons.map((hackathon, index) => (
            <TabsContent key={index} value={hackathon.name.replace(/\s+/g, "-").toLowerCase()} className="space-y-8">
              <motion.div
                className="bg-card dark:bg-card-dark rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={hackathon.image || "/placeholder.svg"}
                    alt={hackathon.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <div>
                      <h2 className="text-3xl font-display font-bold text-white">{hackathon.name}</h2>
                      <p className="text-primary-foreground/80">{hackathon.organizer}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 dark:bg-secondary/10 p-3 rounded-full">
                        <Trophy className="h-6 w-6 text-primary dark:text-secondary" />
                      </div>
                      <div className="px-4 py-2 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-full font-medium">
                        {hackathon.achievement}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-text/70 dark:text-text-dark/70">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{hackathon.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{hackathon.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-primary dark:text-secondary" />
                          Project: {hackathon.project.name}
                        </h3>

                        <p className="text-text/80 dark:text-text-dark/80 mb-4">{hackathon.project.description}</p>

                        <h4 className="font-medium mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside space-y-1 text-text/80 dark:text-text-dark/80">
                          {hackathon.project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {hackathon.project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {hackathon.team && (
                        <div>
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <Users className="h-5 w-5 text-primary dark:text-secondary" />
                            Team Members:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-text/80 dark:text-text-dark/80">
                            {hackathon.team.map((member, i) => (
                              <li key={i}>{member}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {hackathon.judges && (
                        <div>
                          <h4 className="font-medium mb-2">Judges:</h4>
                          <p className="text-text/80 dark:text-text-dark/80">{hackathon.judges}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
