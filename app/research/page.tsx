"use client"

import { motion } from "framer-motion"
import { FileText, Users, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Research = {
  title: string
  conference: string
  date: string
  authors: string[]
  abstract: string
  link?: string
  image: string
}

export default function ResearchPage() {
  const research: Research[] = [
    {
      title:
        "Identifying Disaster-Related Tweets Using Natural Language Processing and Core Machine Learning Algorithms",
      conference: "Springer 6th International Conference on Artificial Intelligence and Speech Technology 2024",
      date: "2024",
      authors: ["Aditi Mehta", "Arshiya Garg"],
      abstract:
        "This research paper focuses on the application of Natural Language Processing (NLP) techniques and machine learning algorithms to identify and classify disaster-related tweets. By leveraging tokenization, stemming, and TF-IDF vectorization, we developed a model that achieves 82% accuracy in distinguishing between tweets that announce real disasters and those that do not. The findings contribute to the field of crisis informatics and demonstrate the potential of automated systems to support emergency response efforts by filtering social media content during critical events.",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-91331-0_15",
      image: "/springer.png",
    },
    {
      title: "Impact of Particulate Matter (PM2.5) and Heat Index during El-Nina Period over Delhi, UP",
      conference: "URSI RCRS Conference",
      date: "2024",
      authors: ["Dr. Manu Mehta (IIRS)","Mehak Sharma","Anusha Arora", "Aditi Mehta","Nishtha Mishra" ],
      abstract:
        "This research investigates the correlation between particulate matter (PM2.5) concentrations and heat index during El-Nina periods in Delhi and Uttar Pradesh regions. Using Python-based data extraction and visualization tools (Pandas, IMDlib, Seaborn), we analyzed large-scale meteorological datasets to identify patterns and relationships. The findings provide valuable insights into environmental health concerns and climate change impacts in densely populated urban areas of North India.",
      link: "https://ursi.org/conferences.php",
      image: "/isro.png",
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
          Research
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-12">
          {research.map((item, index) => (
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
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>

                <div className="col-span-2 p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary/10 dark:bg-secondary/10 p-3 rounded-full shrink-0">
                      <FileText className="h-6 w-6 text-primary dark:text-secondary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold">{item.title}</h2>
                      <div className="flex items-center gap-2 mt-2 text-primary dark:text-secondary">
                        <Link
                          href={item.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:underline"
                        >
                          {item.conference}
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="ml-12 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-text/70 dark:text-text-dark/70">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{item.authors.join(", ")}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">Abstract</h3>
                      <p className="text-text/80 dark:text-text-dark/80 leading-relaxed">{item.abstract}</p>
                    </div>
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
