"use client"

import { motion } from "framer-motion"
import { X, CheckCircle, ArrowRight } from "lucide-react"

export function PainPromise() {
  const pains = [
    "Slow creator discovery taking weeks",
    "Manual outreach & awkward negotiations",
    "Endless contract back-and-forth",
    "Payment delays causing friction",
    "Fragmented performance tracking",
  ]

  const solutions = [
    "AI-powered instant creator matching",
    "Automated multilingual negotiations",
    "Smart contract generation & e-signing",
    "Milestone-based automated payments",
    "Real-time unified analytics dashboard",
  ]

  return (
    <section id="features" className="apple-section bg-[hsl(var(--apple-gray))] dark:bg-gray-900">
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20 apple-content-width apple-space-y-sm"
        >
          <h2 className="apple-headline text-balance">
            Transform Your <span className="text-apple-blue">Workflow</span>
          </h2>
          <p className="apple-body text-pretty">
            Influencer marketing is booming—but the workflow is still spreadsheets, emails, and WhatsApp. InfluencerFlow
            AI replaces the chaos with one intelligent platform.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="apple-space-y-sm"
          >
            <div className="text-center lg:text-left mb-12">
              <h3 className="apple-title-2 text-red-600 dark:text-red-400 mb-4">Today's Challenges</h3>
              <p className="apple-body">The current state of influencer marketing</p>
            </div>

            <div className="apple-space-y-xs">
              {pains.map((pain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-200 dark:border-red-800/30"
                >
                  <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-3 h-3 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="apple-body text-red-800 dark:text-red-200">{pain}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="apple-space-y-sm"
          >
            <div className="text-center lg:text-left mb-12">
              <h3 className="apple-title-2 text-green-600 dark:text-green-400 mb-4">Our Solutions</h3>
              <p className="apple-body">The future of influencer marketing</p>
            </div>

            <div className="apple-space-y-xs">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="flex items-start space-x-4 p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-200 dark:border-green-800/30"
                >
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="apple-body text-green-800 dark:text-green-200">{solution}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Transformation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="apple-card-minimal inline-flex items-center space-x-6 px-12 py-8">
            <span className="apple-title-3 text-red-600 dark:text-red-400">Chaos</span>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            >
              <ArrowRight className="w-6 h-6 text-apple-blue" />
            </motion.div>
            <span className="apple-title-3 text-green-600 dark:text-green-400">Control</span>
          </div>
          <p className="apple-caption mt-6">Save 80% of campaign admin time</p>
        </motion.div>
      </div>
    </section>
  )
}
