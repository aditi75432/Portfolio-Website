
"use client"

import { motion } from "framer-motion"
import { Code, Palette, Music, Trophy, Dumbbell } from "lucide-react"

export default function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="section-heading mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.p variants={fadeInUp} className="text-lg leading-relaxed glass-card p-6">
              I'm a passionate Software Engineer and AI Enthusiast currently pursuing my Bachelor's in Information
              Technology at Indira Gandhi Delhi Technical University for Women with a CGPA of 9.25/10.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg leading-relaxed glass-card p-6">
              My journey bridges technology and art - I'm equally comfortable discussing machine learning algorithms as
              I am performing Bharatanatyam, a classical Indian dance form I've trained in for over 10 years.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg leading-relaxed glass-card p-6">
              I believe in the power of technology to solve real-world problems, which drives my research in disaster
              tweet classification and environmental data analysis with institutions like ISRO.
            </motion.p>
          </motion.div>

          <motion.div
            className="glass-card p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>

            <h3 className="text-xl font-display font-bold mb-6 text-center gradient-text">Fun Facts About Me</h3>

            <div className="space-y-4 relative z-10">
              <motion.div
                className="flex items-start gap-4 glass p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="bg-primary/20 p-3 rounded-full">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Trained Dancer</h4>
                  <p className="text-sm text-foreground/70">
                    10+ years of Bharatanatyam training, a classical Indian dance form
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 glass p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="bg-secondary/20 p-3 rounded-full">
                  <Code className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-secondary">Coding Enthusiast</h4>
                  <p className="text-sm text-foreground/70">
                    Solved 400+ questions across LeetCode, GeeksForGeeks, and CodeForces
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 glass p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="bg-accent/20 p-3 rounded-full">
                  <Music className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-accent">Art & Music Lover</h4>
                  <p className="text-sm text-foreground/70">Enjoy painting and music in my free time</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 glass p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="bg-primary/20 p-3 rounded-full">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Hackathon Winner</h4>
                  <p className="text-sm text-foreground/70">
                    Winner of InnovateX Hackathon by Delhi Technological University
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 glass p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="bg-secondary/20 p-3 rounded-full">
                  <Dumbbell className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-secondary">Sports Enthusiast</h4>
                  <p className="text-sm text-foreground/70">Love staying active through various sports</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
