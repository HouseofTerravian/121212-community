'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllHubs } from '@/data/hubs'
import { regions } from '@/data/regions'
import CityCard from '@/components/CityCard'
import Button from '@/components/ui/Button'

const statusOptions = [
  { key: 'all', label: 'All' },
  { key: 'available', label: 'Available' },
  { key: 'active', label: 'Active' },
] as const

function MarketplaceContent() {
  const searchParams = useSearchParams()
  const [activeRegion, setActiveRegion] = useState('all')
  const [activeStatus, setActiveStatus] = useState('all')

  useEffect(() => {
    const regionParam = searchParams.get('region')
    const statusParam = searchParams.get('status')
    if (regionParam) setActiveRegion(regionParam)
    if (statusParam) setActiveStatus(statusParam)
  }, [searchParams])

  const allHubs = getAllHubs()

  const filteredHubs = allHubs.filter((hub) => {
    if (activeRegion !== 'all' && hub.region !== activeRegion) return false
    if (activeStatus !== 'all' && hub.status !== activeStatus) return false
    return true
  })

  const resetFilters = () => {
    setActiveRegion('all')
    setActiveStatus('all')
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 px-4 md:px-8 bg-surface-1">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
              Browse &amp; Bid
            </span>
            <h1 className="heading-secondary text-cream mt-4 mb-4">
              The <span className="text-gradient">Marketplace</span>
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              {allHubs.length} cities. {allHubs.filter(h => h.status === 'available').length} available. Your name. Your hub.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-[73px] z-40 bg-background-dark border-b border-border py-4 px-4 md:px-8">
        <div className="container-custom mx-auto space-y-4">
          {/* Region Filters */}
          <div>
            <span className="text-dim text-xs font-semibold tracking-wider uppercase mb-2 block">
              Region
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveRegion('all')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeRegion === 'all'
                    ? 'bg-secondary text-primary-dark'
                    : 'bg-surface-2 text-cream/70 hover:bg-surface-3'
                }`}
              >
                All
              </button>
              {regions.map((region) => (
                <button
                  key={region.slug}
                  onClick={() => setActiveRegion(region.slug)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeRegion === region.slug
                      ? 'bg-secondary text-primary-dark'
                      : 'bg-surface-2 text-cream/70 hover:bg-surface-3'
                  }`}
                >
                  {region.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filters */}
          <div>
            <span className="text-dim text-xs font-semibold tracking-wider uppercase mb-2 block">
              Status
            </span>
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setActiveStatus(option.key)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeStatus === option.key
                      ? 'bg-secondary text-primary-dark'
                      : 'bg-surface-2 text-cream/70 hover:bg-surface-3'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom mx-auto">
          <p className="text-dim mb-8">
            Showing {filteredHubs.length} {filteredHubs.length === 1 ? 'listing' : 'listings'}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHubs.map((hub) => (
              <CityCard key={hub.slug} hub={hub} />
            ))}
          </div>

          {filteredHubs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-cream/70 text-lg mb-6">
                No listings match those filters.
              </p>
              <Button variant="outline" onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-secondary text-cream mb-4">
            Don&apos;t See Your <span className="text-gradient">City</span>?
          </h2>
          <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
            Request it. If there is demand, we will open it. Your city, your culture, your platform.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Request a City
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default function MarketplacePage() {
  return (
    <Suspense
      fallback={
        <div className="pt-28 pb-12 px-4 md:px-8 bg-surface-1">
          <div className="container-custom mx-auto">
            <div className="max-w-3xl">
              <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
                Browse &amp; Bid
              </span>
              <h1 className="heading-secondary text-cream mt-4 mb-4">
                The <span className="text-gradient">Marketplace</span>
              </h1>
              <p className="text-cream/70 text-lg">Loading listings...</p>
            </div>
          </div>
        </div>
      }
    >
      <MarketplaceContent />
    </Suspense>
  )
}
