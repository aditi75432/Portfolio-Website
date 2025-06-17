
"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Github, Linkedin } from 'lucide-react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create grid of particles
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
    }[] = []

    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `hsl(${Math.random() * 60 + 200}, 100%, 70%)`,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()

        // Connect particles that are close to each other
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x
          const dy = particles[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = 0.1 * (1 - distance / 100)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" aria-hidden="true" />

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 glow-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="gradient-text">Empowering Ideas Through Code, AI, and Purpose</span>
            </motion.h1> */}
            <motion.h1
  className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 glow-text"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
>
  <span className="gradient-text">Code. Create. Empower.</span>
</motion.h1>


            {/* <motion.h2
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Hi, I&apos;m Aditi Mehta – Coding and AI Enthusiast, and Bharatanatyam Dancer
            </motion.h2> */}

<motion.h2
  className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 opacity-90"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
>
  Hi, I&apos;m Aditi Mehta —{" "}
  <span className="text-primary font-semibold">
    <Typewriter
      words={['Innovator', 'Changemaker', 'Bharatanatyam Dancer']}
      loop={0}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</motion.h2>

            <motion.div
  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  {/* Explore Button */}
  <Button
    size="lg"
    className="bg-primary hover:bg-primary/90 text-white relative overflow-hidden group"
    onClick={scrollToAbout}
  >
    <span className="relative z-10">Explore My Journey</span>
    <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </Button>

  {/* Social Icons */}
  <div className="flex gap-4">
    <a
      href="https://github.com/aditi75432"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-primary/70 transition-colors"
    >
      <Github className="w-6 h-6" />
    </a>
    <a
      href="https://www.linkedin.com/in/aditi-mehta-6b471a287/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-primary/70 transition-colors"
    >
      <Linkedin className="w-6 h-6" />
    </a>
  </div>
</motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto lg:ml-auto"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-xl glow-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-overlay"></div>
              <Image
                src="/image.png"
                alt="Aditi Mehta"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            >
              <span className="font-bold">Linux Foundation @RISC-V Intern</span>
            </motion.div>

            <div className="absolute -z-10 inset-0 blur-3xl bg-primary/20 rounded-full"></div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10"
            onClick={scrollToAbout}
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
