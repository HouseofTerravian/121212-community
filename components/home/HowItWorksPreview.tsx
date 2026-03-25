import Link from 'next/link'
import { ArrowRight, Gavel, Wrench, Crown } from 'lucide-react'
import Button from '@/components/ui/Button'

const steps = [
  {
    number: '01',
    icon: Gavel,
    title: 'Bid',
    description: 'Choose your city and place a bid for the annual subdomain license. Bids start as low as $175/year.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Build',
    description: 'Curate events, products, music, reviews, and places that define Black culture in your city.',
  },
  {
    number: '03',
    icon: Crown,
    title: 'Own',
    description: 'Run your hub, grow your audience, earn revenue, and become the cultural voice of your city in the 121212 ecosystem.',
  },
]

export default function HowItWorksPreview() {
  return (
    <section className="section-padding bg-surface-1">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-light text-sm font-semibold tracking-widest uppercase">
            The Process
          </span>
          <h2 className="heading-secondary text-cream mt-4">
            How It <span className="text-gradient">Works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-surface-2 border border-border rounded-xl p-8 hover:border-purple/40 transition-all duration-300 group"
            >
              <span className="absolute -top-4 -left-2 text-6xl font-serif font-bold text-purple/10 group-hover:text-purple/20 transition-colors duration-300">
                {step.number}
              </span>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center mb-6">
                  <step.icon className="h-7 w-7 text-purple-light" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-cream mb-3">{step.title}</h3>
                <p className="text-cream/60 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/how-it-works">
            <Button variant="outline">
              See Full Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
