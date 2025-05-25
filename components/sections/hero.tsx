"use client";

import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      className="
        relative min-h-screen flex items-center justify-center
        pt-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32
        bg-gradient-to-br from-[#f0f4f8] via-[#d9e2ec] to-[#f0f4f8] 
        dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] 
        text-gray-900 dark:text-white overflow-hidden
      "
    >
      {/* Overlay for better text visibility */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-br
          from-white/30 via-transparent to-white/10
          dark:from-black/40 dark:via-transparent dark:to-black/30
          pointer-events-none
          z-0
        "
      />

      <div className="max-w-7xl w-full mx-auto relative flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        {/* Left - Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl">
            <img
              src="./portSri.jpg"
              alt="Sri Ram S"
              className="object-cover w-full h-full"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>
        </motion.div>

        {/* Right - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Hi, I'm Sri Ram S
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground dark:text-gray-300">
            <TypeAnimation
              sequence={["Developer", 2000, "Chess Enthusiast", 2000, "Communicator", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg text-muted-foreground dark:text-gray-400 leading-relaxed">
            A passionate B.Tech IT student from K. Ramakrishnan College of Engineering,
            building innovative solutions and exploring new technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-4 justify-center md:justify-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300" asChild>
              <a href="#contact" aria-label="Contact Me">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:border-primary/50 transition-all duration-300"
              asChild
            >
              <a href="/resume.pdf" download aria-label="Download Resume">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80" asChild>
          <a href="#about" aria-label="Scroll to About Section">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
