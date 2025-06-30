

"use client"

import { useEffect } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import AchievementsSection from "@/components/achievements-section"
import ResponsibilitiesSection from "@/components/responsibilities-section"
import EventsSection from "@/components/events-section"
import CertificationsSection from "@/components/certifications-section"
import VolunteeringSection from "@/components/volunteering-section"

export default function Home() {
  // Animation for reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    const revealElements = document.querySelectorAll(".reveal-animation")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="pt-16 relative">
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <SkillsSection />
      <EventsSection />
      <ResponsibilitiesSection />
      <CertificationsSection />
      <VolunteeringSection />
      
    </div>
  )
}
