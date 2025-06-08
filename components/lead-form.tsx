"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="book" className="apple-section bg-white dark:bg-black">
        <div className="apple-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center apple-narrow-width apple-space-y-sm"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="apple-title-1">Demo Booked!</h2>
            <p className="apple-body">
              Thank you for your interest. We'll be in touch within 24 hours to schedule your personalized demo.
            </p>
            <button onClick={() => setIsSubmitted(false)} className="apple-button-secondary">
              Book Another Demo
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="book" className="apple-section bg-white dark:bg-black">
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 apple-content-width apple-space-y-sm"
        >
          <h2 className="apple-headline text-balance">Book Your Demo</h2>
          <p className="apple-body text-pretty">See how InfluencerFlow AI can transform your campaigns</p>
        </motion.div>

        <div className="apple-narrow-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="apple-card"
          >
            <form onSubmit={handleSubmit} className="apple-space-y-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="apple-body font-medium mb-3 block">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="apple-input"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="apple-body font-medium mb-3 block">
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="apple-input"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="apple-body font-medium mb-3 block">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="apple-input"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <Label htmlFor="spend" className="apple-body font-medium mb-3 block">
                  Monthly Influencer Spend
                </Label>
                <Select name="spend">
                  <SelectTrigger className="apple-input">
                    <SelectValue placeholder="Select spend range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-10k">₹0 - ₹10,000</SelectItem>
                    <SelectItem value="10k-50k">₹10,000 - ₹50,000</SelectItem>
                    <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="100k+">₹1,00,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-6">
                <button type="submit" disabled={isLoading} className="apple-button-primary w-full">
                  {isLoading ? "Booking Demo..." : "Book Demo"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
