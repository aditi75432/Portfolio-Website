
"use client"

import { useState } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type Event = {
  title: string
  organizer: string
  location: string
  date: string
  description: string
  image: string
  link?: string
}

export default function EventsSection() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null)

  const events: Event[] = [
        {
          title: "Neovation 2025",
          organizer: "NASSCOM Foundation & Cisco thingQbator",
          location: "India Habitat Centre, Delhi",
          date: "2025",
          description:
            "Participated in Neovation 2025 at the iconic India Habitat Centre, hosted by NASSCOM Foundation in collaboration with Cisco thingQbator. The event focused on innovative solutions for real-world problems.",
          image: "/neovation.png",
          link: "https://www.linkedin.com/posts/aditi-mehta-6b471a287_neovation2025-techforgood-innovationunleashed-activity-7315390484741296128--33A?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWyHGgB5CVEj5C75gYb_MsvHiw3zN81mTs",
        },
        {
          title: "Stellar Dev Yatra: Delhi NCR",
          organizer: "Stellar Development Foundation",
          location: "Microsoft Office, Gurugram",
          date: "2024",
          description:
            "Attended Stellar Dev Yatra: Delhi NCR, a premier gathering of blockchain enthusiasts, developers, and innovators at Microsoft office Gurugram. The event provided insights into blockchain technology and its applications.",
          image: "/stellar.png",
          link: "https://www.linkedin.com/posts/aditi-mehta-6b471a287_connections-stellardevyatra-web3-activity-7217891618182299648-Am0z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWyHGgB5CVEj5C75gYb_MsvHiw3zN81mTs",
        },
        {
          title: "Azure Copilot Day",
          organizer: "Reskill and Microsoft Azure",
          location: "Microsoft Office, Gurugram",
          date: "2024",
          description:
            "Participated in Azure Copilot Day at the Microsoft office in Gurugram, organized by Reskill and Microsoft Azure. The event focused on AI-powered development tools and their integration with Azure services.",
          image: "/azureday.png",
          link: "https://www.linkedin.com/posts/aditi-mehta-6b471a287_azurecopilotday-ai-machinelearning-activity-7211345795881525248-Ow4e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWyHGgB5CVEj5C75gYb_MsvHiw3zN81mTs",
        },
        {
          title: "KotlinConf 2024 Global",
          organizer: "Google for Developers",
          location: "GL Bajaj Institute of Technology & Management, Noida",
          date: "2024",
          description:
            "Attended #KotlinConf2024 Global powered by Google for Developers in Delhi NCR at GL Bajaj Institute of Technology & Management, Noida. The conference covered the latest developments in Kotlin and Android development.",
          image: "/hive.png",
          link: "https://www.linkedin.com/posts/aditi-mehta-6b471a287_connections-kotlinconf2024-kotlinconf2024-activity-7210307857580244992-20jS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWyHGgB5CVEj5C75gYb_MsvHiw3zN81mTs",
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="section-heading mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Events Attended
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`glass-card overflow-hidden cursor-pointer relative group ${
                activeEvent === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setActiveEvent(activeEvent === index ? null : index)}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 195, 255, 0.3)",
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10"></div>
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-lg font-bold text-white glow-text">{event.title}</h3>
                </div>
              </div>

              <div className="p-4 relative">
                <div className="absolute -inset-x-10 -top-20 h-40 bg-gradient-to-b from-primary/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <p className="text-sm text-primary mb-2 relative z-10">{event.organizer}</p>

                <div className="flex items-center gap-1 text-xs text-foreground/70 mb-1 relative z-10">
                  <MapPin className="h-3 w-3" />
                  <span>{event.location}</span>
                </div>

                <div className="flex items-center gap-1 text-xs text-foreground/70 relative z-10">
                  <Calendar className="h-3 w-3" />
                  <span>{event.date}</span>
                </div>

                {activeEvent === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 relative z-10"
                  >
                    <p className="text-sm text-foreground/80 mb-3">{event.description}</p>
                    {event.link && (
                      <Link
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        Learn more
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
