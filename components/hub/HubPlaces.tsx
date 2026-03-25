import type { HubPlace } from '@/data/hubs'
import Card from '@/components/ui/Card'

interface HubPlacesProps {
  places: HubPlace[]
  city: string
}

export default function HubPlaces({ places, city }: HubPlacesProps) {
  if (places.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-surface-1">
      <div className="container-custom mx-auto">
        <span className="text-purple-light text-sm font-semibold tracking-wider uppercase block mb-2">
          Know Your City
        </span>
        <h2 className="heading-secondary text-cream mb-10">
          Know {city}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {places.map((place) => (
            <Card key={place.name} className="p-6">
              <span className="text-3xl block mb-3">{place.emoji}</span>
              <h3 className="font-serif font-semibold text-lg text-cream mb-2">{place.name}</h3>
              <p className="text-cream/70 text-sm leading-relaxed">{place.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
