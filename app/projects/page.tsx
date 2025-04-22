"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Code, Database, ShoppingCart, Play, Pause } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

type Project = {
  title: string
  description: string
  technologies: string[]
  features: string[]
  category: "ai" | "web" | "blockchain"
  links?: {
    github?: string
    live?: string
  }
  icon: React.ReactNode
  images?: string[]
  video?: string
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [isPlaying, setIsPlaying] = useState<Record<string, boolean>>({})
  const videoRefs = useRef<Record<string, HTMLVideoElement>>({})

  const projects: Project[] = [
    {
      title: "KARTIQUE",
      description: "AI-Powered Smart Shopping Assistant",
      technologies: [
        "Node.js",
        "Express.js",
        "React.js",
        "Ollama AI",
        "SQLite",
        "MongoDB",
        "Google Vision API",
        "Stripe",
      ],
      features: [
        "Engineered an AI-powered personalized recommendation engine and intelligent product filtering system based on user interests and browsing behavior, increasing user engagement by 40% and session duration by 30%.",
        "Integrated Google Vision API to enable image-based product search and Stripe for seamless payment processing, reducing cart abandonment and elevating the end-to-end shopping experience.",
      ],
      category: "ai",
      links: {
        github: "https://github.com/aditi75432/KARTIQUE--AI-Powered-Smart-Shopping-Assistant",
      },
      icon: <ShoppingCart className="h-6 w-6" />,
      images: ["/kart2.png", "/kart1.png"],
      // video: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Disaster Tweets Classification",
      description: "ML model for classifying disaster-related tweets",
      technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "NLTK", "Matplotlib", "Seaborn"],
      features: [
        "Built an ML model achieving 82% accuracy in classifying disaster-related tweets, leveraging NLP (tokenization, stemming, TF-IDF) to support crisis management efforts.",
      ],
      category: "ai",
      links: {
        github: "https://github.com/aditi75432/Tweet-Classification",
      },
      icon: <Code className="h-6 w-6" />,
      images: ["/nlp1.png", "/nlp2.png"],
    },
    {
      title: "ARIOSE",
      description: "Automated Real-time Integrated Oversight and Surveillance Engine - Credit card fraud detection platform",
      technologies: ["React", "CSS", "Bootstrap", "Node.js", "scikit-learn", "NumPy", "Pandas", "Diamante Blockchain"],
      features: [
        "Engineered a credit card fraud detection platform, measured by achieving 92% fraud detection accuracy.",
        "Enhanced transaction security and transparency, with high fraud detection rates and blockchain integration.",
        "Developed a scalable front-end, back-end, and seamlessly integrated IPFS for secure, decentralized storage.",
      ],
      category: "blockchain",
      links: {
        github: "https://github.com/aditi75432/Ariose",
      },
      icon: <Database className="h-6 w-6" />,
      images: ["/ariose1.png", "/ariose2.png"],
      // video: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "MCF OmniFlux",
      description: "Ultimate Multi-Channel Smart Fulfillment Solution with AI-Driven Routing and Sustainability Alignment",
      technologies: ["React", "Next.js", "AI", "Vercel", "Tailwind CSS", "Node.js"],
      features: [
        "Manage inventory and orders across different sales channels, including Amazon's Multi-Channel Fulfillment (MCF) and other logistics networks",
        "Implemented cutting-edge AI for real-time inventory management and eco-friendly practices",
        "Selected among the top 100 out of 1L+ teams at Amazon Sambhav Hackathon 2024",
      ],
      category: "ai",
      links: {
        github: "https://github.com/aditi75432/MCF-OmniFlux",
        live: "https://mcf-omni-flux.vercel.app/"
      },
      icon: <Database className="h-6 w-6" />,
      images: ["/mcf1.png", "/mcf2.png"],
      // video: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "SanctuaryWay-Dapp",
      description: "A centralized, user-friendly platform for information and transactions related to wildlife sanctuaries in India",
      technologies: ["Blockchain", "Dapp", "React", "Netlify", "Smart Contracts"],
      features: [
        "Created a decentralized application addressing critical issues faced by wildlife enthusiasts and conservation efforts",
        "Implemented blockchain technology for secure and transparent transactions",
        "Runner-up at Hack4BioHeritage'24 48 hrs hackathon by Stellar Rise-In",
      ],
      category: "blockchain",
      links: {
        github: "https://github.com/aditi75432/SanctuaryWay-Dapp",
        live: "https://sanctuary-way.netlify.app/"
      },
      icon: <Code className="h-6 w-6" />,
      images: ["/dapp1.png", "/dapp2.png"],
      // video: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "SwasthyaSaathi",
      description: "AI-driven, voice and text-based chatbot designed to simplify access to government healthcare schemes in India",
      technologies: ["AI", "Voice Recognition", "React", "Vercel", "Natural Language Processing"],
      features: [
        "Bridges the awareness and accessibility gap for underprivileged and rural populations",
        "Offers personalized scheme recommendations with multilingual support",
        "Developed offline-first capabilities for areas with limited connectivity",
        "Top 100 Teams in Devcation'25 by Google Developers Group -IGDTUW",
      ],
      category: "ai",
      links: {
        github: "https://github.com/aditi75432/swasthya-saathi",
        live: "https://swasthyasaathi.vercel.app/"
      },
      icon: <Code className="h-6 w-6" />,
      images: ["/swasth1.png", "/swasth2.png"],
      // video: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "KAVYA-Kisan Arthik Vikas Yojana App",
      description: "Smart Agri-Wallet with AI Voice Assistant for smallholder farmers in India",
      technologies: ["UI/UX", "AI", "Voice Assistant", "Blockchain", "Smart Contracts", "Vercel"],
      features: [
        "Developed a next-generation AI-powered digital wallet integrated with a multilingual voice assistant",
        "Implemented smart contracts and blockchain for financial inclusion and market access",
        "Created a solution accessible even on basic feature phones for climate resilience and rural adoption",
      ],
      category: "blockchain",
      links: {
        github: "https://github.com/aditi75432/KAVYA-Kisan-Arthik-Vikas-Yojana-App",
        live: "https://kavya-pragati.vercel.app/"
      },
      icon: <Code className="h-6 w-6" />,
      images: ["/kavya1.png", "/kavya2.png"],
      // video: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Microsoft Students Club - Website",
      description: "Open source website enhancement project for Microsoft Students Club at IGDTUW",
      technologies: ["Next.js", "Vercel", "Google Ads", "SEO", "React"],
      features: [
        "Worked on website enhancement that attracted over 200 visitors",
        "Organized a bootcamp for 100+ students through the platform",
        "Integrated Google Ads, optimized traffic, and improved site performance",
        "Contributed to open source development",
      ],
      category: "web",
      links: {
        github: "https://github.com/aditi75432/MicrosoftStudentsClub/tree/main",
        live: "https://mscigdtuw.vercel.app"
      },
      icon: <Code className="h-6 w-6" />,
      images: ["/msc1.png", "/msc2.png"],
      // video: "/placeholder.svg?height=300&width=500",
    },
  
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const handleVideoToggle = (projectTitle: string) => {
    const videoRef = videoRefs.current[projectTitle]
    if (!videoRef) return

    if (videoRef.paused) {
      videoRef.play()
      setIsPlaying((prev) => ({ ...prev, [projectTitle]: true }))
    } else {
      videoRef.pause()
      setIsPlaying((prev) => ({ ...prev, [projectTitle]: false }))
    }
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-display font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>

        <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="all" className="text-lg font-medium" onClick={() => setActiveTab("all")}>
              All
            </TabsTrigger>
            <TabsTrigger value="ai" className="text-lg font-medium" onClick={() => setActiveTab("ai")}>
              AI/ML
            </TabsTrigger>
            <TabsTrigger value="web" className="text-lg font-medium" onClick={() => setActiveTab("web")}>
              Web
            </TabsTrigger>
            <TabsTrigger value="blockchain" className="text-lg font-medium" onClick={() => setActiveTab("blockchain")}>
              Blockchain
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-12">
            <div className="grid grid-cols-1 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-card dark:bg-card-dark rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 dark:bg-secondary/10 p-4 rounded-full">{project.icon}</div>
                        <h2 className="text-2xl font-display font-bold">{project.title}</h2>
                      </div>

                      <div className="flex items-center gap-3">
                        {project.links?.github && (
                          <Link
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-secondary transition-colors"
                            aria-label={`GitHub repository for ${project.title}`}
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        )}
                        {project.links?.live && (
                          <Link
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-secondary transition-colors"
                            aria-label={`Live demo for ${project.title}`}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </Link>
                        )}
                      </div>
                    </div>

                    <p className="text-lg text-text/80 dark:text-text-dark/80 mb-6">{project.description}</p>

                    {/* Project Media */}
                    {(project.images || project.video) && (
                      <div className="mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.images?.map((img, i) => (
                            <div key={i} className="relative h-60 rounded-lg overflow-hidden">
                              <Image
                                src={img || "/placeholder.svg"}
                                alt={`${project.title} screenshot ${i + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}

                          {project.video && (
                            <div className="relative h-60 rounded-lg overflow-hidden col-span-full">
                              <video
                                ref={(el) => {
                                  if (el) videoRefs.current[project.title] = el
                                }}
                                src={project.video}
                                className="w-full h-full object-cover"
                                poster="/placeholder.svg?height=300&width=600"
                              />
                              <button
                                onClick={() => handleVideoToggle(project.title)}
                                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                                aria-label={isPlaying[project.title] ? "Pause video" : "Play video"}
                              >
                                {isPlaying[project.title] ? (
                                  <Pause className="h-12 w-12 text-white" />
                                ) : (
                                  <Play className="h-12 w-12 text-white" />
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-3">Key Features</h3>
                      <ul className="list-disc list-inside space-y-2 text-text/80 dark:text-text-dark/80">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
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
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
