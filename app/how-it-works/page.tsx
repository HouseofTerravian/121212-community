import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

const steps = [
  {
    number: '01',
    title: 'Browse the Marketplace',
    description:
      'Explore cities available for curation. Each listing shows the subdomain, annual bid, and what the hub will include.',
    bullets: [
      '24 cities across 4 regions',
      'Filter by region, status, and availability',
      'See bid history and current curator status',
      'Each city links to its full hub profile',
    ],
  },
  {
    number: '02',
    title: 'Place Your Bid',
    description:
      'Submit your bid through our contact form. Bids run for 7 days. If outbid, you are notified immediately. Highest bid at close wins.',
    bullets: [
      'Annual subscription model',
      '7-day bidding window per listing',
      'Real-time outbid notifications',
      'Transparent bidding history',
    ],
  },
  {
    number: '03',
    title: 'Win and Get Onboarded',
    description:
      'Once you win, we will set up your subdomain, walk you through the platform, and give you the tools to launch.',
    bullets: [
      'Custom subdomain activated within 48 hours',
      'Onboarding call with the 121212 team',
      'Access to the curator dashboard',
      'Launch checklist and content templates',
    ],
  },
  {
    number: '04',
    title: 'Build Your Hub — Your Way',
    description:
      'Add events, products, music, places, and reviews. Your hub, your voice. We do not edit, filter, or override your curation.',
    bullets: [
      'Full creative control over your hub',
      'Add events, businesses, music, and culture',
      'Custom branding within the 121212 framework',
      'No editorial interference from the platform',
    ],
  },
  {
    number: '05',
    title: 'Connect to the Ecosystem',
    description:
      'Your hub automatically links to 121212.market, 121212.music, 121212.fun, 121212.law, 121212.culture, and 121212.movement.',
    bullets: [
      'Cross-linked with 121212.market for local commerce',
      'Music integration with 121212.music',
      'Event syndication through 121212.events',
      'Review distribution via 121212.reviews',
    ],
  },
  {
    number: '06',
    title: 'Monetize & Grow',
    description:
      'Earn through affiliate links, product placements, and sponsored features. You keep the revenue. No revenue cap.',
    bullets: [
      'Affiliate commission on every referral',
      'Sponsored feature placements from local businesses',
      'Product and event promotion revenue',
      'No cap on earnings — your city, your income',
    ],
  },
  {
    number: '07',
    title: 'Renew, Grow, or Transfer',
    description:
      'Annual renewal at your current rate. Good-standing curators get first right of renewal. You can also transfer your hub to another curator.',
    bullets: [
      'Annual renewal at locked-in rate',
      'First right of renewal for active curators',
      'Transfer your hub to a trusted successor',
      'Expansion into adjacent cities as they open',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
            Curator Guide
          </span>
          <h1 className="heading-primary text-cream mt-4 mb-6 max-w-4xl mx-auto">
            How It <span className="text-gradient">Works</span>
          </h1>
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Seven steps from browsing to owning your city hub. No gatekeepers. No algorithms. Just your city, your curation, your platform.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom mx-auto">
          <div className="relative">
            {/* Vertical timeline line — desktop only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-16 lg:space-y-24">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0

                return (
                  <div key={step.number} className="relative">
                    {/* Desktop: alternating left/right */}
                    <div
                      className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                        isEven ? '' : 'lg:direction-rtl'
                      }`}
                    >
                      {/* Content side */}
                      <div
                        className={`${
                          isEven ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16 lg:col-start-2'
                        }`}
                      >
                        <div
                          className={`inline-flex items-center gap-4 mb-6 ${
                            isEven ? 'lg:flex-row-reverse' : ''
                          }`}
                        >
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple to-purple-light flex items-center justify-center flex-shrink-0">
                            <span className="font-serif text-2xl font-bold text-white">
                              {step.number}
                            </span>
                          </div>
                          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-cream">
                            {step.title}
                          </h2>
                        </div>

                        <p className="text-cream/70 text-base leading-relaxed mb-6">
                          {step.description}
                        </p>

                        <ul
                          className={`space-y-3 ${
                            isEven ? 'lg:ml-auto lg:max-w-md' : 'lg:max-w-md'
                          }`}
                        >
                          {step.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className={`flex items-start gap-3 text-cream/60 text-sm ${
                                isEven ? 'lg:flex-row-reverse lg:text-right' : ''
                              }`}
                            >
                              <span className="text-secondary mt-1 flex-shrink-0">&bull;</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Spacer side — desktop only */}
                      <div
                        className={`hidden lg:block ${
                          isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'
                        }`}
                      />
                    </div>

                    {/* Center dot on timeline — desktop only */}
                    <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-purple border-2 border-purple-light" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-secondary text-cream mb-4">
            Ready to Own Your <span className="text-gradient">City</span>?
          </h2>
          <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
            Browse available hubs, place your bid, and start curating the culture in your city.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/marketplace">
              <Button size="lg">
                Browse the Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Ask a Question
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
