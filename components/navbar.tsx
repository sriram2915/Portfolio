"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import clsx from "clsx";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for shadow effect
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  // Detect active section (optional, for active link highlight)
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY + 100;
      let current = null;
      navItems.forEach(({ href }) => {
        const el = document.querySelector(href);
        if (el && el instanceof HTMLElement && el.offsetTop <= scrollPos) {
          current = href;
        }
      });
      setActive(current);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-shadow duration-300",
        scrolled ? "shadow-lg" : "shadow-none"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-wide text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            aria-label="Home"
            onClick={() => setIsOpen(false)}
          >
            SRI RAM S
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 font-medium text-gray-700 dark:text-gray-300">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "relative px-2 py-1 rounded-md hover:text-purple-600 dark:hover:text-purple-400 transition-colors",
                  active === href
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                )}
                onClick={() => setIsOpen(false)}
              >
                {label}
                {active === href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full" />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Nav Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "md:hidden origin-top-right transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-64 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
          )}
          aria-expanded={isOpen}
        >
          <div className="flex flex-col gap-4 mt-3 pb-4 font-medium text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-4 py-2 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
