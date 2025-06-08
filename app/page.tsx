import { Hero } from "@/components/hero"
import { PainPromise } from "@/components/pain-promise"
import { PlatformModules } from "@/components/platform-modules"
import { HowItWorks } from "@/components/how-it-works"
import { SocialProof } from "@/components/social-proof"
import { WalkthroughVideo } from "@/components/walkthrough-video"
import { CTABanner } from "@/components/cta-banner"
import { LeadForm } from "@/components/lead-form"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PainPromise />
      <PlatformModules />
      <HowItWorks />
      <SocialProof />
      <WalkthroughVideo />
      <CTABanner />
      <LeadForm />
      <Footer />
    </main>
  )
}
