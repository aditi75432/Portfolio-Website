"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"

type Experience = {
  title: string
  company: string
  period: string
  location: string
  description: string[]
  technologies?: string[]
  image: string
}

export default function ExperiencePage() {
  const experiences: Experience[] = [
    {
      title: "LFX 2025 Intern",
      company: "The Linux Foundation @RISC-V International",
      period: "Jun. 2025 - present",
      location: "Remote",
      description: [
        "Workload Analysis Flow Using RISC-V Olympia Performance Model.",
        "Establish a SimPoint flow to reduce the workloads (QEMU or other instruction set simulators",
        "Tools to run traces on Olympia and generate perf data (python, C++).",
      ],
      technologies: ["Python", "C++", "Computer Architecture", "SimPoint", "QEMU"],
      image: "/riscv.png",
    },
    {
      title: "Quantum Computing Research Intern",
      company: "Defence Research and Development Organisation (DRDO) - Scientific Analysis Lab",
      period: "Jun. 2025 - Jul. 2025",
      location: "Delhi, India",
      description: [
        "Quantum-safe cryptographic algorithms and their classical-quantum interface, enhancing secure data transmission strategies at DRDO-SAG.",
        
      ],
      technologies: ["Python", "Quantum Computing"],
      image: "/drdo.png",
    },
    {
      title: "ML Research Intern",
      company: "Indian Institute of Remote Sensing, ISRO",
      period: "Jun. 2024 - Jul. 2024",
      location: "Delhi, India",
      description: [
        "Collaborated with Dr. Manu Mehta (IIRS) on a research paper abstract for URSI RCRS Conference.",
        "Implemented data extraction and visualization using Python (Pandas, IMDlib, Seaborn) to analyze large-scale meteorological datasets.",
        "Studied the impact of particulate matter (PM2.5) and heat index during El-Nina Period over Delhi, UP.",
      ],
      technologies: ["Python", "Pandas", "IMDlib", "Seaborn", "Data Visualization"],
      image: "/isro.png",
    },
    {
      title: "Summer Internship Trainee",
      company: "IGDTUW",
      period: "Jun. 2024 - Aug. 2024",
      location: "Delhi, India",
      description: [
        'Co-authored a research paper titled "Identifying Disaster-Related Tweets Using Natural Language Processing and Core Machine Learning Algorithms".',
        "Presented and published at Springer 6th International Conference on Artificial Intelligence and Speech Technology 2024.",
        "Built an ML model achieving 82% accuracy in classifying disaster-related tweets, leveraging NLP (tokenization,stemming, TF-IDF) to support crisis management efforts"
      ],
      technologies: ["NLP", "Machine Learning", "Python", "Research Methodology"],
      image: "/ig.png",
    },
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
          Work Experience
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card dark:bg-card-dark rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-60 md:h-full">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} at ${item.company}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h2 className="text-xl font-bold text-white">{item.title}</h2>
                      <p className="text-primary-foreground/80">{item.company}</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-text/70 dark:text-text-dark/70 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-medium mb-3">Key Responsibilities</h3>
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary dark:text-secondary shrink-0 mt-0.5" />
                          <span className="text-text/80 dark:text-text-dark/80">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.technologies && (
                    <div className="mt-6">
                      <h3 className="text-lg font-medium mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
