"use client"

import { motion } from "framer-motion"

export function CTABanner() {
  const scrollToForm = () => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-28 bg-[hsl(var(--apple-blue))] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Ready to automate your next campaign?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Join 100+ brands already using InfluencerFlow AI to scale their influencer marketing
          </p>
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[hsl(var(--apple-blue))] font-medium px-8 py-4 text-lg rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl"
          >
            Book a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
