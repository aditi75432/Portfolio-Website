
"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-8 mt-16 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-display text-xl font-bold gradient-text">Aditi Mehta</h3>
            <p className="text-sm text-foreground/70 mt-1">Turning Logic into Impact | Bharatanatyam Dancer</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/aditi75432"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors relative group"
              aria-label="GitHub"
            >
              <Github size={20} />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/aditi-mehta-6b471a287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors relative group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="mailto:aditi75432@gmail.com"
              className="text-foreground/70 hover:text-primary transition-colors relative group"
              aria-label="Email"
            >
              <Mail size={20} />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-foreground/60">
          <p>© {currentYear} Aditi Mehta. All rights reserved.</p>
          <p className="mt-1">
            Built with
            <span className="mx-1 inline-block">
              <span className="gradient-text">Next.js</span>
            </span>
            and
            <span className="mx-1 inline-block">
              <span className="gradient-text">❤️</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
