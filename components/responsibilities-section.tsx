import type React from "react"
import { Calendar, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

type Responsibility = {
  title: string
  organization: string
  period: string
  description: string
  icon: React.ReactNode
  link?: string
}

export default function ResponsibilitiesSection() {
  const responsibilities: Responsibility[] = [
     {
      title: "Competitive Programming Circle Manager and Data Structures Mentor ",
      organization: "Google Developer Groups On Campus IGDTUW",
      period: "Oct. 2024 - Present",
      description:
        "Mentoring 150+ students with hands-on problem-solving sessions, helping them improve their coding skills.",
      icon: <Users className="h-6 w-6" />,
      link: "https://developers.google.com/community/gdg",
    },
    {
      title: "Web Development Team Member",
      organization: "Microsoft Students Club - IGDTUW",
      period: "Jun. 2024 - Present",
      description: "Contributing to front-end development and UI enhancement for club projects and events.",
      icon: <Users className="h-6 w-6" />,
      link: "https://github.com/aditi75432/MicrosoftStudentsClub",
    },
   
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16 text-center">Positions of Responsibility</h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary dark:border-secondary pl-8 ml-4 space-y-12">
            {responsibilities.map((item, index) => (
              <div key={index} className="relative reveal-animation">
                <div className="absolute -left-[42px] bg-background dark:bg-background-dark p-1 rounded-full border-2 border-primary dark:border-secondary">
                  {item.icon}
                </div>

                <div className="bg-card dark:bg-card-dark rounded-xl p-6 shadow-md card-hover animated-border">
                  <div className="flex items-center gap-2 text-sm text-text/70 dark:text-text-dark/70 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-primary dark:text-secondary font-medium mb-4">{item.organization}</p>
                  <p className="text-text/80 dark:text-text-dark/80 mb-4">{item.description}</p>

                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary dark:text-secondary hover:underline"
                    >
                      Learn more
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
