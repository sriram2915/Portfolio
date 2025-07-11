"use client"

import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const iconSize = 50;

const skills = [
  // Programming
  { icon: <FaJava size={iconSize} color="#f89820" />, namze: "Java" },
  { icon: <SiPython size={iconSize} color="#3776AB" />, name: "Python" },
  // Web Technologies
  { icon: <SiHtml5 size={iconSize} color="#e34c26" />, name: "HTML" },
  { icon: <SiCss3 size={iconSize} color="#264de4" />, name: "CSS" },
  { icon: <SiJavascript size={iconSize} color="#f0db4f" />, name: "JavaScript" },
  { icon: <SiTypescript size={iconSize} color="#3178c6" />, name: "TypeScript" },
  { icon: <SiTailwindcss size={iconSize} color="#38bdf8" />, name: "Tailwind" },
  { icon: <SiNextdotjs size={iconSize} className = "text-foreground" />, name: "Next.js" },
  { icon: <SiPhp size={iconSize} color="#777bb4" />, name: "PHP" },
  { icon: <SiMysql size={iconSize} color="#00758F" />, name: "MySQL" },
  // Version Control
  { icon: <SiGit size={iconSize} color="#f34f29" />, name: "Git" },
  { icon: <SiGithub size={iconSize} className="text-foreground" />, name: "GitHub" },

  { icon: <SiVercel size={iconSize} color="black" />, name: "Vercel" },
];

export function SkillSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-foreground font-serif">
            Skills
          </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="transition-transform"
              title={skill.name} // Optional: shows tooltip on hover
            >
              {skill.icon}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
