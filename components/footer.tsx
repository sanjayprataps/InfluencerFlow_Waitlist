"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-[hsl(var(--apple-gray))] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[hsl(var(--apple-blue))] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">IF</span>
              </div>
              <span className="text-[hsl(var(--apple-text))] text-xl font-semibold">InfluencerFlow AI</span>
            </div>
            <p className="text-[hsl(var(--apple-text-secondary))] mb-6">Automate Influence. Accelerate Growth.</p>
            <p className="text-[hsl(var(--apple-text-secondary))]">Contact: info@opraahfx.com</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-12">
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + sectionIndex * 0.1 }}
              >
                <h4 className="text-[hsl(var(--apple-text))] font-semibold mb-6">{section.title}</h4>
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + linkIndex * 0.1 }}
                      className="text-[hsl(var(--apple-text-secondary))] hover:text-[hsl(var(--apple-blue))] block transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center"
        >
          <p className="text-[hsl(var(--apple-text-secondary))]">Team Ctrl+Alt+Defeat © {currentYear}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
