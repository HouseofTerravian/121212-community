import type { Curator } from '@/data/hubs'
import Button from '@/components/ui/Button'

interface HubCuratorProps {
  curator: Curator
}

export default function HubCurator({ curator }: HubCuratorProps) {
  return (
    <section className="section-padding bg-surface-1">
      <div className="container-custom mx-auto">
        <div className="bg-surface-2 border border-border rounded-lg p-8 max-w-xl">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple to-secondary flex items-center justify-center mb-6">
            <span className="text-3xl font-serif font-bold text-white">{curator.initial}</span>
          </div>

          <h3 className="text-xl font-semibold text-cream mb-1">{curator.name}</h3>
          <p className="text-purple-light text-sm font-medium mb-4">{curator.handle}</p>
          <p className="text-cream/70 leading-relaxed mb-4">{curator.bio}</p>
          <p className="text-dim text-sm mb-4">Curator since {curator.since}</p>

          {curator.instagram && (
            <p className="text-purple-light text-sm mb-6">{curator.instagram}</p>
          )}

          <Button variant="purple" size="sm">Follow</Button>
        </div>
      </div>
    </section>
  )
}
