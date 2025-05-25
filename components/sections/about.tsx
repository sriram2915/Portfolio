"use client";

import { motion } from "framer-motion";
import { Brain, Languages } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function AboutSection() {
  const skills = [
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Interests",
      items: ["Coding", "Problem Solving", "Chess", "Public Speaking"],
    },
    {
      icon: <Languages className="h-6 w-6 text-primary" />,
      title: "Languages",
      items: ["Tamil", "English", "Japanese (NAT 5Q)"],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background text-foreground">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed text-balance tracking-wide">
            I am currently pursuing my B.Tech in Information Technology, with a strong passion
            for solving coding problems on platforms like LeetCode and others. I have successfully
            solved over 400+ problems on LeetCode, showcasing my deep interest in Data Structures
            and Algorithms. As a Full Stack Developer, I have hands-on experience in building
            real-world projects using Next.js and React. My skill set includes HTML, CSS,
            JavaScript, RESTful APIs, Git, and responsive design. I’m also a strong communicator
            and enjoy collaborating in teams and sharing ideas clearly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-muted/10 backdrop-blur border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-3">{skill.icon}</div>
                  <CardTitle className="text-xl font-semibold tracking-wide">
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {skill.items.map((item) => (
                      <li key={item} className="leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
