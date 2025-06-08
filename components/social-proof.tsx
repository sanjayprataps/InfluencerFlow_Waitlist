"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function SocialProof() {
  const [campaigns, setCampaigns] = useState(0)
  const [brands, setBrands] = useState(0)
  const [creators, setCreators] = useState(0)

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            const animateCounter = (setter: (value: number) => void, target: number) => {
              let current = 0
              const increment = target / 50
              const timer = setInterval(() => {
                current += increment
                if (current >= target) {
                  setter(target)
                  clearInterval(timer)
                } else {
                  setter(Math.floor(current))
                }
              }, 30)
            }

            animateCounter(setCampaigns, 500)
            animateCounter(setBrands, 100)
            animateCounter(setCreators, 10000)
          }
        })
      },
      { threshold: 0.5 },
    )

    const section = document.getElementById("social-proof")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const clients = ["Hike", "Oppo", "OYO", "Tinder", "BMW"]

  return (
    <section
      id="social-proof"
      ref={sectionRef}
      className="apple-section bg-[hsl(var(--apple-blue))] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5" />

      <motion.div style={{ opacity, y }} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-semibold text-white mb-2">{campaigns.toLocaleString()}+</div>
            <p className="text-white/70 text-lg">Campaigns</p>
          </div>
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-semibold text-white mb-2">{brands.toLocaleString()}+</div>
            <p className="text-white/70 text-lg">Brands</p>
          </div>
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-semibold text-white mb-2">{creators.toLocaleString()}+</div>
            <p className="text-white/70 text-lg">Creators</p>
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-white/70 mb-10 text-lg">Trusted by leading brands</p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl px-8 py-4 text-white font-medium text-lg"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
