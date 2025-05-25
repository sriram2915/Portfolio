"use client";

import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "HackXtreme",
      description:
        "An interactive and informative hackathon website built using Next.js to support and engage participants of HackXtreme'25.",
      tech: ["Next.js", "Tailwind CSS", "CSS Modules", "TypeScript", "JavaScript"],
      demo: "https://hack-xtreme.vercel.app/",
      github: "https://github.com/sriram2915/HackXtreme",
    },
    {
      title: "FactoryFlow-AI",
      description:
        "AI-driven manufacturing platform for intelligent task automation, monitoring, and predictive analytics.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB"],
      demo: "https://factoryflowai.vercel.app/",
      github: "https://github.com/sriram2915/FactoryFlow-AI",
    },
    {
      title: "Task Master",
      description:
        "Efficient task manager with drag-and-drop, filtering, sorting, dark mode and local storage.",
      tech: ["React", "React DnD", "Tailwind", "State Management", "Local Storage"],
      demo: "https://task-master-gilt-ten.vercel.app/",
      github: "https://github.com/sriram2915/Task-Master",
    },
    {
      title: "Portfolio",
      description:
        "Personal developer portfolio with animations, light/dark mode, and live project demos.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      demo: "#",
      github: "https://github.com/sriram2915/Portfolio",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-foreground font-serif">
            🚀 Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            A collection of my favorite works showcasing real-world tech, interactive design, and clean code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* <Card className="h-full border border-border bg-card text-foreground shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-2xl"> */}
              <Card
              className={`h-full border bg-opacity-30 bg-slate-400 text-foreground shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-2xl ${
              index % 2 === 0
              ? "bg-gradient-to-br from-muted/30 to-background"
              : "bg-gradient-to-br from-background to-muted/30"
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold font-sans tracking-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-5 mt-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full hover:bg-primary/20 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.demo && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-accent hover:text-accent-foreground transition-all"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Globe className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-accent hover:text-accent-foreground transition-all"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
