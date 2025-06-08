"use client"

import { motion } from "framer-motion"
import { Plus, Zap, TrendingUp } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Plus,
      title: "Create a campaign",
      description: "Define your brief, budget, and target audience in minutes.",
    },
    {
      icon: Zap,
      title: "Let AI match & negotiate",
      description: "Our AI finds perfect creators and handles all negotiations for you.",
    },
    {
      icon: TrendingUp,
      title: "Track & pay",
      description: "Watch content go live and auto-release milestone payments.",
    },
  ]

  return (
    <section id="how-it-works" className="apple-section bg-white dark:bg-black">
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 apple-content-width apple-space-y-sm"
        >
          <h2 className="apple-headline text-balance">How It Works</h2>
          <p className="apple-body text-pretty">Three simple steps to launch your next influencer campaign</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center apple-space-y-sm"
            >
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-apple-blue rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-black border-2 border-apple-blue rounded-full flex items-center justify-center text-apple-blue font-semibold text-sm">
                  {index + 1}
                </div>
              </div>

              <div className="apple-space-y-xs">
                <h3 className="apple-title-3 text-balance">{step.title}</h3>
                <p className="apple-body text-pretty">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-[hsl(var(--apple-border))] transform -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
