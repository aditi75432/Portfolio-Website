"use client"

import { useEffect, useRef } from "react"

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear any existing stars
    container.innerHTML = ""

    // Create stars
    const starCount = Math.floor((window.innerWidth * window.innerHeight) / 1000)

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.classList.add("star")

      // Random position
      const x = Math.random() * 100
      const y = Math.random() * 100

      // Random size (mostly small)
      const size = Math.random() * 2

      // Random twinkle duration
      const duration = 3 + Math.random() * 7

      star.style.left = `${x}%`
      star.style.top = `${y}%`
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.setProperty("--duration", `${duration}s`)

      // Add some depth with opacity
      star.style.opacity = (0.3 + Math.random() * 0.7).toString()

      container.appendChild(star)
    }

    // Add some larger "cosmic particles"
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div")
      particle.classList.add("cosmic-particle")

      // Random position
      const x = Math.random() * 100
      const y = Math.random() * 100

      // Random size for particles
      const size = 5 + Math.random() * 15

      // Random animation properties
      const duration = 15 + Math.random() * 30
      const x1 = (Math.random() - 0.5) * 100
      const y1 = (Math.random() - 0.5) * 100
      const x2 = (Math.random() - 0.5) * 100
      const y2 = (Math.random() - 0.5) * 100
      const x3 = (Math.random() - 0.5) * 100
      const y3 = (Math.random() - 0.5) * 100

      particle.style.left = `${x}%`
      particle.style.top = `${y}%`
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.setProperty("--duration", `${duration}s`)
      particle.style.setProperty("--x1", `${x1}px`)
      particle.style.setProperty("--y1", `${y1}px`)
      particle.style.setProperty("--x2", `${x2}px`)
      particle.style.setProperty("--y2", `${y2}px`)
      particle.style.setProperty("--x3", `${x3}px`)
      particle.style.setProperty("--y3", `${y3}px`)

      container.appendChild(particle)
    }

    // Handle resize
    const handleResize = () => {
      if (container) {
        container.innerHTML = ""
        const newStarCount = Math.floor((window.innerWidth * window.innerHeight) / 1000)

        for (let i = 0; i < newStarCount; i++) {
          const star = document.createElement("div")
          star.classList.add("star")

          const x = Math.random() * 100
          const y = Math.random() * 100
          const size = Math.random() * 2
          const duration = 3 + Math.random() * 7

          star.style.left = `${x}%`
          star.style.top = `${y}%`
          star.style.width = `${size}px`
          star.style.height = `${size}px`
          star.style.setProperty("--duration", `${duration}s`)
          star.style.opacity = (0.3 + Math.random() * 0.7).toString()

          container.appendChild(star)
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <div ref={containerRef} className="star-field" />
}
