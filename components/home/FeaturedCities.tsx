import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getFeaturedHubs } from '@/data/hubs'
import CityCard from '@/components/CityCard'
import Button from '@/components/ui/Button'

export default function FeaturedCities() {
  const featuredHubs = getFeaturedHubs(8)

  return (
    <section className="section-padding bg-gradient-to-b from-background-dark to-primary/20">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-purple-light text-sm font-semibold tracking-widest uppercase">
              Live Listings
            </span>
            <h2 className="heading-secondary text-cream mt-4">
              Find Your <span className="text-gradient">City</span>
            </h2>
            <p className="text-cream/70 mt-4 max-w-xl text-lg">
              Browse active hubs and available cities across the 121212 network.
            </p>
          </div>
          <Link href="/marketplace" className="mt-6 md:mt-0">
            <Button variant="outline">
              View All Cities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredHubs.map((hub) => (
            <CityCard key={hub.slug} hub={hub} />
          ))}
        </div>
      </div>
    </section>
  )
}
