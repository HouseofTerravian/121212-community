import type { HubMusic as HubMusicType } from '@/data/hubs'

interface HubMusicProps {
  music: HubMusicType[]
  city: string
}

export default function HubMusic({ music, city }: HubMusicProps) {
  if (music.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-background-dark">
      <div className="container-custom mx-auto">
        <span className="text-purple-light text-sm font-semibold tracking-wider uppercase block mb-2">
          121212.music
        </span>
        <h2 className="heading-secondary text-cream mb-10">
          {city} Soundtrack
        </h2>

        <div className="space-y-4 max-w-3xl">
          {music.map((track, index) => (
            <div
              key={track.title}
              className="flex items-center gap-6 p-4 rounded-lg bg-surface-1 border border-border hover:border-purple/50 transition-all duration-300"
            >
              <span className="text-3xl font-serif text-muted w-10 text-right flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-2xl flex-shrink-0">{track.emoji}</span>
              <div className="flex-1 min-w-0">
                <h3 className="text-cream font-semibold truncate">{track.title}</h3>
                <p className="text-dim text-sm">{track.artist}</p>
              </div>
              <span className="font-mono text-xs text-purple-light flex-shrink-0 hidden sm:block">
                {track.site}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
