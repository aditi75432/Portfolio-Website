"use client"

import { motion } from "framer-motion"
import { BoneIcon as Mortarboard, Calendar, MapPin, Trophy } from "lucide-react"
import Image from "next/image"

type Education = {
  institution: string
  degree: string
  period: string
  location: string
  grade: string
  achievements?: string[]
  image: string
}

export default function EducationPage() {
  
  const education: Education[] = [
    {
      institution: "Indira Gandhi Delhi Technical University For Women",
      degree: "Bachelors of Technology, Information Technology",
      period: "Aug. 2023 - May 2027",
      location: "Delhi, India",
      grade: "CGPA: 9.33/10",
      achievements: [
        "Beta Microsoft Learn Student Ambassador",
        "Web Development Team Member at Microsoft Students Club",
        "Data Structures and Competitive Programming Mentor at Google Developer Groups",
      ],
      image: "/ig.png",
    },
    {
      institution: "Bal Bharati Public School, GRHM",
      degree: "12th Grade, CBSE",
      period: "Apr. 2022 - Mar. 2023",
      location: "New Delhi, India",
      grade: "Percentage: 94.40%",
      achievements: [
        "Subject Topper in Chemistry- 98/100",
        "AISSCE 2022-23 , Academic excellence award",
      ],
      image: "/12th.png",
    },
    {
      institution: "Bal Bharati Public School, GRHM",
      degree: "10th Grade, CBSE",
      period: "Apr. 2020 - Mar. 2021",
      location: "New Delhi, India",
      grade: "Percentage: 96.40%",
      achievements: [
        "Subject Topper In Social Science - 100/100",
        "Third Position at Bharat Ko Jaano Quiz at Zonal Level"
      ],
      image: "/bbps.png",
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
          Education
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card dark:bg-card-dark rounded-xl overflow-hidden shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-60 md:h-full">
                  <Image src={item.image || "/placeholder.svg"} alt={item.institution} fill className="object-cover" />
                </div>

                <div className="col-span-2 p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 dark:bg-secondary/10 p-3 rounded-full">
                        <Mortarboard className="h-6 w-6 text-primary dark:text-secondary" />
                      </div>
                      <h2 className="text-2xl font-display font-bold">{item.institution}</h2>
                    </div>
                    <div className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary">
                      {item.grade}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg font-medium">{item.degree}</p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-text/70 dark:text-text-dark/70">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {item.achievements && item.achievements.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                          <Trophy className="h-5 w-5 text-primary dark:text-secondary" />
                          Achievements & Activities
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-text/80 dark:text-text-dark/80">
                          {item.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
