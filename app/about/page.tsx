import Link from 'next/link'
import { ArrowRight, Globe } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const ecosystemPlatforms = [
  {
    domain: '121212.community',
    name: 'Community',
    description: 'City hub marketplace where curators own and operate local cultural directories.',
  },
  {
    domain: '121212.market',
    name: 'Market',
    description: 'Black-owned product marketplace. Local goods, national reach, community-first commerce.',
  },
  {
    domain: '121212.music',
    name: 'Music',
    description: 'Independent Black music platform. Artists keep their rights, fans support directly.',
  },
  {
    domain: '121212.events',
    name: 'Events',
    description: 'Curated Black cultural events across the diaspora. Every event worth going to.',
  },
  {
    domain: '121212.law',
    name: 'Law',
    description: 'Legal resources and directories connecting the community with Black attorneys and advocates.',
  },
  {
    domain: '121212.culture',
    name: 'Culture',
    description: 'Art, fashion, film, literature, and every expression of Black creative genius.',
  },
]

const idealCurators = [
  'Content creators with a deep connection to their city',
  'Event organizers who know what is happening on the ground',
  'Entrepreneurs building brands that serve the community',
  'Journalists and media professionals covering local culture',
  'Cultural connectors who bridge communities and conversations',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
            Our Story
          </span>
          <h1 className="heading-primary text-cream mt-4 mb-6 max-w-4xl mx-auto">
            About <span className="text-gradient">121212.community</span>
          </h1>
        </div>
      </section>

      {/* Lead + Body */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Lead Paragraph */}
            <p className="text-xl text-cream/80 leading-relaxed mb-16">
              When a Black traveler lands in an unfamiliar city, where do they go to find what&apos;s real? Not the tourist spots. Not the algorithms. The real restaurants, the real events, the real businesses, the real culture. That&apos;s why 121212.community exists.
            </p>

            {/* The Vision */}
            <div className="mb-14">
              <h2 className="heading-secondary text-cream mb-6">
                The <span className="text-gradient">Vision</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                121212.community is a network of locally curated city hubs, each owned and operated by a real community member. Not an algorithm. Not a corporation. A person who lives in that city, knows that culture, and has the credibility to tell you where to go, what to eat, who to support, and what to experience.
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                Each hub lives on its own subdomain &mdash; atlanta.121212.community, chicago.121212.community, houston.121212.community &mdash; and is curated by someone who earned the right to represent that city through an open bidding process. No corporate gatekeepers. No algorithmic curation. Just people who know their city telling you the truth about it.
              </p>
            </div>
          </div>

          {/* The 121212 Ecosystem */}
          <div className="mb-14">
            <div className="max-w-3xl mx-auto mb-8">
              <h2 className="heading-secondary text-cream mb-6">
                The 121212 <span className="text-gradient">Ecosystem</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed">
                121212.community is one node in a larger network designed to circulate Black dollars, attention, and culture within Black-owned platforms. Every hub connects to the full ecosystem:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ecosystemPlatforms.map((platform) => (
                <Card key={platform.domain} hover={false} className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-5 w-5 text-purple-light flex-shrink-0" />
                    <span className="font-serif text-lg font-semibold text-cream">
                      {platform.name}
                    </span>
                  </div>
                  <p className="text-dim text-xs font-mono mb-3">{platform.domain}</p>
                  <p className="text-cream/70 text-sm leading-relaxed">
                    {platform.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Why Subdomains? */}
            <div className="mb-14">
              <h2 className="heading-secondary text-cream mb-6">
                Why <span className="text-gradient">Subdomains</span>?
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                Subdomains are not just a technical choice &mdash; they are a statement about ownership. Each city hub gets its own URL, its own identity, and its own curator. atlanta.121212.community is not a page on a website. It is a platform within a platform.
              </p>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                This model enables decentralized ownership with centralized infrastructure. The 121212 team handles hosting, design systems, and ecosystem integration. Curators handle the culture. The result is local control at internet scale.
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                When you own a city hub, your name is on it. Your curation defines it. Your community benefits from it. That is the power of the subdomain model.
              </p>
            </div>

            {/* Who Should Own a City Hub? */}
            <div className="mb-14">
              <h2 className="heading-secondary text-cream mb-6">
                Who Should Own a <span className="text-gradient">City Hub</span>?
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-6">
                City hubs are for people who are already embedded in their city&apos;s culture and community. The people who know the spots before they go viral. The ones who are already doing the work.
              </p>
              <ul className="space-y-3">
                {idealCurators.map((curator) => (
                  <li key={curator} className="flex items-start gap-3 text-cream/70 text-base">
                    <span className="text-secondary mt-1 flex-shrink-0">&bull;</span>
                    <span>{curator}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Part of MCM Enterprises */}
            <div>
              <h2 className="heading-secondary text-cream mb-6">
                Part of <span className="text-gradient">MCM Enterprises</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                121212.community and the broader 121212 ecosystem are properties of MCM Enterprises. We build platforms that serve the Black community across culture, commerce, and connection. Every platform in the ecosystem is designed to keep Black dollars, attention, and creativity circulating within Black-owned infrastructure.
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                We do not take venture capital. We do not sell user data. We do not optimize for engagement at the expense of community. We build for the people who use what we build, and we answer to them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-secondary text-cream mb-4">
            Your City Needs a <span className="text-gradient">Curator</span>
          </h2>
          <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
            If you know your city like nobody else, this is your platform. Browse available hubs and place your bid today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/marketplace">
              <Button size="lg">
                Browse the Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
