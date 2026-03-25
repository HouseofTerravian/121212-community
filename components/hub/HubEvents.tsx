import type { HubEvent } from '@/data/hubs'
import Card from '@/components/ui/Card'

interface HubEventsProps {
  events: HubEvent[]
  city: string
}

export default function HubEvents({ events, city }: HubEventsProps) {
  if (events.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-background-dark">
      <div className="container-custom mx-auto">
        <span className="text-purple-light text-sm font-semibold tracking-wider uppercase block mb-2">
          121212.events
        </span>
        <h2 className="heading-secondary text-cream mb-10">
          Events in {city}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.name} className="p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{event.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-cream font-semibold text-lg mb-1">{event.name}</h3>
                  <p className="text-dim text-sm mb-3">{event.venue}</p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-cream/70 text-sm">{event.date}</span>
                    <span className="text-secondary font-semibold text-sm">{event.price}</span>
                  </div>
                  <span className="inline-block mt-3 bg-purple-dim/30 text-purple-light text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300">
                    {event.tag}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
