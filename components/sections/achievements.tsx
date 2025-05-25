"use client";

import { motion } from "framer-motion";
import { Award, Star, Trophy, Medal } from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      icon: <Trophy className="h-6 w-6 text-primary" />,
      title: "NAT Q5 Certification",
      description: "Achieved advanced proficiency in Japanese language",
      date: "Feb 2024",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Best Presentation Award",
      description: "Won top honors for technical presentation at college event",
      date: "Aug 2024",
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Finalist - DAKSH AI Hackathon",
      description: "Recognized as a top finalist at national-level AI hackathon",
      date: "Mar 2025",
    },
    {
      icon: <Medal className="h-6 w-6 text-primary" />,
      title: "Organized HackXtreme Hackathon",
      description: "Successfully hosted a national-level hackathon",
      date: "Apr 2025",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold tracking-wide mb-4 text-foreground font-serif">
            Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Key milestones and accomplishments in my journey so far.
          </p>
        </motion.div>

        <div className="relative">
          {/* Curved timeline path using SVG */}
          <svg className="absolute w-full h-full pointer-events-none">
            <path
              d="M 50% 0 Q 52% 20% 50% 40% Q 48% 60% 50% 80% Q 52% 90% 50% 100%"
              stroke="var(--border)"
              fill="transparent"
              strokeWidth="2"
            />
          </svg>

          <div className="space-y-20">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end md:ml-auto"
                }`}
              >
                <div
                  className={`group relative p-6 rounded-xl shadow-xl border border-border transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br ${
                    index % 2 === 0
                      ? "from-muted/40 to-background"
                      : "from-background to-muted/40"
                  } w-full md:w-1/2`}
                >
                  {/* Curved path connector circle */}
                  <div
                    className="absolute top-8 -mt-1 w-5 h-5 rounded-full bg-primary shadow-lg"
                    style={{
                      [index % 2 === 0 ? "right" : "left"]: "-2.5rem",
                    }}
                  />
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {achievement.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-foreground font-serif">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-base font-light">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}