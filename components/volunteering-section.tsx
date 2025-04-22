"use client"

import { Heart, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

type Volunteer = {
  title: string
  organization: string
  period: string
  description: string
  image: string
}

export default function VolunteeringSection() {
  const volunteering: Volunteer[] = [
    {
      title: "Guinness World Record Event",
      organization: "Lung Care Foundation",
      period: "2023",
      description:
        "Participated in a Guinness World Record event organized by the Lung Care Foundation to raise awareness about lung health and environmental issues.",
      image: "/lung.png",
    },
    {
      title: "Beta Microsoft Student Ambassador",
      organization: "Microsoft",
      period: "2024 - Present",
      description:
        "Serving as a Beta Microsoft Student Ambassador, organizing workshops and events to help fellow students learn new technologies and develop technical skills.",
      image: "/mlsa.png",
    },
    {
      title: "Mentor",
      organization: "Desh Ke Mentor",
      period: "2023 - 2024",
      description:
        "Volunteered as a mentor for students, providing guidance on academic and career choices, and helping them develop essential skills for their future.",
      image: "/desh.png",
    },
  ]

  return (
    <section className="py-20 bg-background-dark/5 dark:bg-background/5">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16 text-center">Volunteering Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {volunteering.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card dark:bg-card-dark rounded-xl overflow-hidden shadow-md card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-5 w-5 text-primary dark:text-secondary" />
                  <p className="font-medium text-primary dark:text-secondary">{item.organization}</p>
                </div>

                <div className="flex items-center gap-1 text-sm text-text/70 dark:text-text-dark/70 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{item.period}</span>
                </div>

                <p className="text-sm text-text/80 dark:text-text-dark/80">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
