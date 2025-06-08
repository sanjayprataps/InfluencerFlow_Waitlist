"use client"

import { motion } from "framer-motion"
import { Search, MessageSquare, FileText, CreditCard, BarChart3 } from "lucide-react"

export function PlatformModules() {
  const modules = [
    {
      icon: Search,
      title: "Creator Discovery Engine",
      benefit: "Find perfect matches instantly",
      description: "AI prompt search with rich filters to discover creators that align with your brand.",
    },
    {
      icon: MessageSquare,
      title: "AI Outreach & Negotiation",
      benefit: "Automate conversations at scale",
      description: "Multilingual email and voice agents handle outreach and negotiate fair rates.",
    },
    {
      icon: FileText,
      title: "Contract Automation",
      benefit: "Zero paperwork hassles",
      description: "Auto-generate contracts, enable e-signatures, and track approval status.",
    },
    {
      icon: CreditCard,
      title: "Smart Payments",
      benefit: "Milestone-based payouts",
      description: "Automated invoicing with real-time dashboards and transparent payment tracking.",
    },
    {
      icon: BarChart3,
      title: "Campaign Performance",
      benefit: "Live ROI insights",
      description: "Real-time metrics, ROI calculations, and exportable performance reports.",
    },
  ]

  return (
    <section className="apple-section bg-[hsl(var(--apple-gray))] dark:bg-gray-900">
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 apple-content-width apple-space-y-sm"
        >
          <h2 className="apple-headline text-balance">Platform Modules</h2>
          <p className="apple-body text-pretty">
            Five integrated modules that transform your influencer marketing workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="apple-card apple-space-y-sm group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-apple-blue rounded-xl flex items-center justify-center mb-6">
                <module.icon className="w-6 h-6 text-white" />
              </div>

              <div className="apple-space-y-xs">
                <h3 className="apple-title-3 text-balance">{module.title}</h3>
                <p className="apple-caption text-apple-blue font-medium">{module.benefit}</p>
                <p className="apple-body text-pretty">{module.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
