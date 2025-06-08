"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    window.addEventListener("scroll", handleScroll)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = [
    { id: "features", label: "Features" },
    { id: "how-it-works", label: "How It Works" },
    { id: "video", label: "Demo" },
    { id: "book", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-[hsl(var(--apple-border))]"
          : "bg-transparent"
      }`}
    >
      <div className="apple-container">
        <div className="flex items-center justify-between py-4 md:py-6">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-black font-semibold text-sm">IF</span>
            </div>
            <span className="apple-title-3 text-[hsl(var(--apple-text-primary))]">InfluencerFlow AI</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-apple-blue bg-blue-50 dark:bg-blue-900/20"
                    : "text-[hsl(var(--apple-text-secondary))] hover:text-[hsl(var(--apple-text-primary))] hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <button onClick={() => scrollToSection("book")} className="apple-button-primary text-sm px-6 py-2">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
