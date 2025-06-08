"use client"

import { motion } from "framer-motion"
import { Play, ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="apple-section bg-white dark:bg-black relative overflow-hidden">
      <div className="apple-container">
        <div className="text-center apple-content-width apple-space-y">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="apple-space-y-sm"
          >
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--apple-gray))] dark:bg-gray-800 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="apple-footnote font-medium">Powered by AI</span>
            </div>

            <h1 className="apple-display text-balance">
              AI-Automated
              <br />
              <span className="text-apple-blue">Influencer Marketing</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="apple-space-y-sm"
          >
            <p className="apple-headline-large apple-narrow-width text-pretty">
              From discovery to payment, run end-to-end campaigns 5× faster with our intelligent platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={scrollToForm} className="apple-button-primary group">
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button className="apple-button-tertiary group">
                <Play className="w-4 h-4 mr-2" />
                <span>Watch Demo</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-16 border-t border-[hsl(var(--apple-border))]"
          >
            <div className="text-center">
              <div className="apple-title-2 font-semibold mb-2">500+</div>
              <div className="apple-caption">Campaigns</div>
            </div>
            <div className="text-center">
              <div className="apple-title-2 font-semibold mb-2">100+</div>
              <div className="apple-caption">Brands</div>
            </div>
            <div className="text-center">
              <div className="apple-title-2 font-semibold mb-2">10K+</div>
              <div className="apple-caption">Creators</div>
            </div>
          </motion.div>
        </div>

        {/* Hero Video/Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
          className="mt-20 apple-content-width"
        >
          <div className="aspect-video bg-[hsl(var(--apple-gray))] dark:bg-gray-800 rounded-2xl overflow-hidden relative group cursor-pointer border border-[hsl(var(--apple-border))]">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg border border-[hsl(var(--apple-border))]"
              >
                <Play className="w-6 h-6 text-[hsl(var(--apple-text-primary))] ml-1" />
              </motion.div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl px-6 py-4 border border-[hsl(var(--apple-border))]">
                <h3 className="apple-body font-medium mb-1">Platform Walkthrough</h3>
                <p className="apple-caption">See how we automate your entire workflow • 2:30</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
