import type { CityHub } from '@/data/hubs'

interface HubHeroProps {
  hub: CityHub
}

export default function HubHero({ hub }: HubHeroProps) {
  return (
    <section className="pt-28 pb-16 px-4 md:px-8 bg-gradient-to-br from-purple-dim/30 via-background-dark to-background-dark">
      <div className="container-custom mx-auto">
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-dim text-sm">
            <li>
              <a href="/" className="hover:text-purple-light transition-colors duration-300">
                121212.community
              </a>
            </li>
            <li className="text-muted">/</li>
            <li className="text-cream/80">{hub.slug}.121212.community</li>
          </ol>
        </nav>

        <div className="text-7xl mb-6">{hub.emoji}</div>

        <h1 className="heading-primary text-cream mb-2">{hub.city}</h1>
        <p className="text-dim text-lg mb-4">{hub.state}</p>
        <p className="text-xl text-cream/70 italic font-serif mb-8">{hub.tagline}</p>

        <div className="bg-surface-2 border border-border px-4 py-2 rounded inline-block font-mono text-secondary mb-10">
          {hub.slug}.121212.community
        </div>

        <div className="flex flex-wrap gap-8 pt-6 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-secondary font-serif font-bold text-2xl">{hub.stats.events}</span>
            <span className="text-dim text-sm">Events</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary font-serif font-bold text-2xl">{hub.stats.products}</span>
            <span className="text-dim text-sm">Products</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary font-serif font-bold text-2xl">{hub.stats.reviews}</span>
            <span className="text-dim text-sm">Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary font-serif font-bold text-2xl">{hub.stats.members.toLocaleString()}</span>
            <span className="text-dim text-sm">Members</span>
          </div>
        </div>
      </div>
    </section>
  )
}
