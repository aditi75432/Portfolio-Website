"use client"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type Certification = {
  title: string
  issuer: string
  date: string
  description: string
  image: string
  link?: string
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      title: "Full Stack Web Development using Node.js",
      issuer: "Coding Blocks",
      date: "Issued 2024",
      description: "Comprehensive training in full-stack web development using Node.js, Express, MongoDB, and React.",
      image: "/webd.png",
      link: "#",
    },
    {
      title: "DSA in Java",
      issuer: "Coding Blocks",
      date: "Issued 2024",
      description: "In-depth course on Data Structures and Algorithms using Java programming language.",
      image: "/dsa.png",
      link: "#",
    },
    {
      title: "Web Development Mentee",
      issuer: "Google Developer Groups",
      date: "Issued 2024",
      description: "Selected as a mentee for the web development program by Google Developer Groups.",
      image: "/webdgdg.png",
      link: "#",
    },
    {
      title: "Soroban Accelerated Bootcamp",
      issuer: "RiseIn",
      date: "Issued 2024",
      description: "Intensive bootcamp on Soroban, the smart contracts platform for Stellar blockchain.",
      image: "/soroban.png",
      link: "#",
    },
    {
      title: "Gen AI Study Jams 2024",
      issuer: "Google Developer Group on Campus - IGDTUW",
      date: "Issued May 2024",
      description: "Participated in the Gen AI Study Jams focused on generative AI technologies and applications.",
      image: "/genai.png",
      link: "#",
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft Learn Student Ambassadors",
      date: "Issued Jun 2024",
      description:
        "Certification validating knowledge of common AI and machine learning workloads and how to implement them on Azure.",
      image: "/azure.png",
      link: "#",
    },
    {
      title: "Python and Machine Learning",
      issuer: "INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN",
      date: "Issued Sep 2024",
      description:
        "Comprehensive training in Python programming language and machine learning algorithms and applications.",
      image: "/python.png",
      link: "#",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16 text-center">Certifications & Licenses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card dark:bg-card-dark rounded-xl overflow-hidden shadow-md card-hover"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-primary/10 dark:bg-secondary/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-primary dark:text-secondary" />
                  </div>
                  <h3 className="font-bold">{cert.title}</h3>
                </div>

                <p className="text-sm text-primary dark:text-secondary mb-2">{cert.issuer}</p>

                <div className="flex items-center gap-1 text-xs text-text/70 dark:text-text-dark/70 mb-4">
                  <Calendar className="h-3 w-3" />
                  <span>{cert.date}</span>
                </div>

                <p className="text-sm text-text/80 dark:text-text-dark/80 mb-4">{cert.description}</p>

                {cert.link && (
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-primary dark:text-secondary hover:underline"
                  >
                    View Certificate
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
