"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold font-serif mb-4 text-foreground tracking-tight">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="rounded-xl text-base shadow-md focus:shadow-xl focus:ring-2 ring-primary transition duration-200 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="rounded-xl text-base shadow-md focus:shadow-xl focus:ring-2 ring-primary transition duration-200 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="min-h-[150px] rounded-xl text-base shadow-md focus:shadow-xl focus:ring-2 ring-primary transition duration-200 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:shadow-lg transition-all duration-300 text-white dark:text-white"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold font-serif mb-4 text-foreground">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 text-black dark:text-white hover:text-primary dark:hover:text-primary transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://github.com/sriram2915"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 text-black dark:text-white hover:text-primary dark:hover:text-primary transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/sriram291"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110  text-black dark:text-white hover:text-primary dark:hover:text-primary transition-all duration-300"
                  asChild
                >
                  <a href="mailto:your.sriramsekar28@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold font-serif mb-4 text-foreground">
                Location
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                K. Ramakrishnan College of Engineering
                <br />
                Trichy, Tamil Nadu
                <br />
                India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Technical Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg md:text-xl font-medium font-serif text-primary italic tracking-wide">
            "Any sufficiently advanced technology is indistinguishable from magic." – Arthur C. Clarke
          </p>
        </motion.div>
      </div>
    </section>
  );
}
