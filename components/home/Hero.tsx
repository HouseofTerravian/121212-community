import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'

const subdomainExamples = [
  'atlanta.121212.community',
  'chicago.121212.community',
  'houston.121212.community',
  'brooklyn.121212.community',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(123,47,190,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_60%,rgba(123,47,190,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_80%,rgba(232,160,32,0.08),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container-custom mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center bg-surface-3 border border-purple/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-purple-light mr-2" />
            <span className="text-purple-light text-sm font-medium">
              The 121212 Ecosystem &mdash; Local Layer
            </span>
          </div>

          <h1 className="heading-primary text-cream mb-6 leading-tight">
            Own Your City&apos;s
            <br />
            <span className="text-gradient">Black Cultural</span>
            <br />
            Hub
          </h1>

          <p className="text-cream/80 text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto">
            121212.community puts real community members in charge of real city
            hubs &mdash; locally curated culture across the entire 121212 ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/marketplace">
              <Button size="lg">
                Claim Your City
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                See How It Works
              </Button>
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {subdomainExamples.map((domain) => (
              <span
                key={domain}
                className="bg-surface-3/80 border border-border text-cream/60 text-xs font-mono px-4 py-2 rounded-full"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-light rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
