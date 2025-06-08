"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Play } from "lucide-react"

export function WalkthroughVideo() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <section id="video" ref={sectionRef} className="apple-section bg-[hsl(var(--apple-gray))] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="apple-heading-2 mb-6">See It In Action</h2>
          <p className="apple-body max-w-2xl mx-auto">Watch how InfluencerFlow AI transforms your campaign workflow</p>
        </motion.div>

        <motion.div style={{ scale, opacity }} className="max-w-5xl mx-auto">
          <div className="aspect-video bg-black rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--apple-blue))]/20 to-black/20" />
            <motion.div className="absolute inset-0 flex items-center justify-center" whileHover={{ scale: 1.05 }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-xl"
              >
                <Play className="w-10 h-10 text-[hsl(var(--apple-blue))] ml-1" />
              </motion.div>
            </motion.div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-black/60 backdrop-blur-md rounded-xl px-6 py-4">
                <h3 className="text-white text-xl font-medium mb-1">Complete Platform Walkthrough</h3>
                <p className="text-white/70">See how we automate your entire influencer workflow</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
