import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getAllHubs, getHubBySlug } from '@/data/hubs'
import HubHero from '@/components/hub/HubHero'
import HubEvents from '@/components/hub/HubEvents'
import HubProducts from '@/components/hub/HubProducts'
import HubMusic from '@/components/hub/HubMusic'
import HubPlaces from '@/components/hub/HubPlaces'
import HubReviews from '@/components/hub/HubReviews'
import HubCurator from '@/components/hub/HubCurator'
import HubAvailable from '@/components/hub/HubAvailable'
import HubNotFound from '@/components/hub/HubNotFound'

export function generateStaticParams() {
  return getAllHubs().map((h) => ({ slug: h.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const hub = getHubBySlug(params.slug)
  if (!hub) {
    return { title: 'Hub Not Found | 121212.community' }
  }
  return {
    title: `${hub.city}, ${hub.state} | 121212.community`,
    description: hub.tagline,
  }
}

export default function HubPage({ params }: { params: { slug: string } }) {
  const hub = getHubBySlug(params.slug)

  if (!hub) {
    return <HubNotFound />
  }

  if (hub.status === 'available') {
    return <HubAvailable hub={hub} />
  }

  return (
    <>
      <HubHero hub={hub} />

      {hub.events.length > 0 && (
        <HubEvents events={hub.events} city={hub.city} />
      )}

      {hub.products.length > 0 && (
        <HubProducts products={hub.products} />
      )}

      {hub.music.length > 0 && (
        <HubMusic music={hub.music} city={hub.city} />
      )}

      {hub.places.length > 0 && (
        <HubPlaces places={hub.places} city={hub.city} />
      )}

      {hub.reviews.length > 0 && (
        <HubReviews reviews={hub.reviews} />
      )}

      {hub.curator && (
        <HubCurator curator={hub.curator} />
      )}

      <section className="py-12 px-4 md:px-8 bg-background-dark border-t border-border">
        <div className="container-custom mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-dim hover:text-purple-light transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to 121212.community</span>
          </Link>
        </div>
      </section>
    </>
  )
}
