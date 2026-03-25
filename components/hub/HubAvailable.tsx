import Link from 'next/link'
import { Check } from 'lucide-react'
import type { CityHub } from '@/data/hubs'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

interface HubAvailableProps {
  hub: CityHub
}

const benefits = [
  'Curator dashboard & tools',
  'Auto-linked to the 121212 ecosystem',
  'Revenue from affiliates, products, and sponsors',
  'Annual renewal with first right',
]

export default function HubAvailable({ hub }: HubAvailableProps) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center section-padding bg-background-dark">
      <div className="container-custom mx-auto text-center">
        <div className="text-8xl mb-6">{hub.emoji}</div>

        <h1 className="heading-primary text-cream mb-2">{hub.city}</h1>
        <p className="text-dim text-lg mb-4">{hub.state}</p>
        <p className="text-xl text-cream/70 italic font-serif mb-12">{hub.tagline}</p>

        <Card hover={false} className="p-8 max-w-md mx-auto mb-10">
          <p className="text-dim text-sm mb-2">Starting at</p>
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span className="text-5xl font-serif font-bold text-secondary">
              ${hub.bid ?? 0}
            </span>
            <span className="text-dim">/{hub.bidPeriod ?? 'year'}</span>
          </div>
          <p className="text-dim text-sm mb-8">No revenue cap</p>

          <ul className="space-y-3 text-left mb-8">
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-cream/80 text-sm">
                Full subdomain: <span className="font-mono text-purple-light">{hub.slug}.121212.community</span>
              </span>
            </li>
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-cream/80 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <Link href={`/contact?city=${hub.slug}`} className="block">
              <Button className="w-full">Bid on This Hub</Button>
            </Link>
            <Link href="/how-it-works" className="block">
              <Button variant="outline" className="w-full">How It Works</Button>
            </Link>
          </div>
        </Card>

        <p className="text-dim text-sm">
          Questions? Email{' '}
          <a
            href="mailto:love@121212.community"
            className="text-purple-light hover:text-purple transition-colors duration-300"
          >
            love@121212.community
          </a>
        </p>
      </div>
    </section>
  )
}
