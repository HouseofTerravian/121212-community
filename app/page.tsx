import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import WhatSection from '@/components/home/WhatSection'
import FeaturedCities from '@/components/home/FeaturedCities'
import HowItWorksPreview from '@/components/home/HowItWorksPreview'
import HubModel from '@/components/home/HubModel'
import QuoteSection from '@/components/home/QuoteSection'
import NewsletterForm from '@/components/NewsletterForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WhatSection />
      <FeaturedCities />
      <HowItWorksPreview />
      <HubModel />
      <QuoteSection />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-background-dark to-surface-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(123,47,190,0.12),transparent)]" />
        <div className="container-custom mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-secondary text-cream mb-6">
              Your City Is <span className="text-gradient">Waiting</span>
            </h2>
            <p className="text-cream/70 text-lg mb-10 leading-relaxed">
              Claim your subdomain. Curate your culture. Build the digital layer
              for Black life in your city &mdash; and earn while doing it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/marketplace">
                <Button size="lg">
                  Claim Your City
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="purple" size="lg">
                  Talk to Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-surface-1 border-t border-border">
        <div className="container-custom mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="heading-secondary text-cream mb-4">
              Stay in the <span className="text-gradient-purple">Loop</span>
            </h2>
            <p className="text-cream/70 mb-8">
              Get updates on new city launches, curator spotlights, and ecosystem news.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  )
}
