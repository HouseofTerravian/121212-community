import Link from 'next/link'
import { ArrowRight, Users, ShoppingBag, Star, Calendar } from 'lucide-react'
import Card, { CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import type { CityHub } from '@/data/hubs'

interface CityCardProps {
  hub: CityHub
}

export default function CityCard({ hub }: CityCardProps) {
  const isActive = hub.status === 'active'
  const href = isActive ? `/hub/${hub.slug}` : `/contact?city=${hub.slug}`

  return (
    <Link href={href} className="block group">
      <Card className="flex flex-col h-full group-hover:border-purple/60 group-hover:shadow-lg group-hover:shadow-purple/10 transition-all duration-300 relative">
        <div className="absolute top-4 right-4 z-10">
          {isActive ? (
            <span className="bg-purple text-white text-xs font-bold px-3 py-1 rounded-full">
              Hub Live
            </span>
          ) : (
            <span className="bg-secondary text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
              Available
            </span>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <span className="text-4xl leading-none">{hub.emoji}</span>
          </div>

          <h3 className="font-serif text-xl font-bold text-cream group-hover:text-purple-light transition-colors duration-300">
            {hub.city}
          </h3>
          <p className="text-dim text-sm mt-1">{hub.state}</p>

          <p className="font-mono text-sm text-dim mt-3">
            {hub.slug}.121212.community
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {hub.tags.map((tag) => (
              <span
                key={tag}
                className="bg-surface-3 text-dim text-xs px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <CardFooter className="flex items-center justify-between">
          {isActive ? (
            <>
              <div className="flex items-center gap-4 text-dim text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {hub.stats.events}
                </span>
                <span className="flex items-center gap-1">
                  <ShoppingBag className="h-3 w-3" />
                  {hub.stats.products}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {hub.stats.reviews}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {hub.stats.members}
                </span>
              </div>
              <Button variant="purple" size="sm">
                Visit Hub
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </>
          ) : (
            <>
              <div>
                <span className="text-secondary font-bold text-lg">${hub.bid}</span>
                <span className="text-dim text-sm">/{hub.bidPeriod}</span>
              </div>
              <Button size="sm">
                Place a Bid
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </Link>
  )
}
