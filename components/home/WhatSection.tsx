import { Globe, Layers, Users } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'One City, One Curator',
    description: 'Each city subdomain is managed by a single curator who knows the local culture inside and out.',
  },
  {
    icon: Layers,
    title: 'Ecosystem Integration',
    description: 'Every hub connects to .events, .market, .music, .reviews, and more across the 121212 network.',
  },
  {
    icon: Users,
    title: 'Community-First Model',
    description: 'Curators earn revenue from their hub while building real cultural infrastructure for their city.',
  },
]

const browserTabs = ['Events', 'Eats', 'Business', 'Music']

const mockCards = [
  { label: 'Trap Music Museum', tag: 'Event', tagColor: 'bg-purple/20 text-purple-light' },
  { label: 'ATL Drip Co.', tag: 'Shop', tagColor: 'bg-secondary/20 text-secondary' },
  { label: 'Sweet Auburn Market', tag: 'Place', tagColor: 'bg-green-500/20 text-green-400' },
  { label: 'DJ Zone 6 — Live', tag: 'Music', tagColor: 'bg-crimson/20 text-crimson' },
]

export default function WhatSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background-dark to-surface-1/50">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-surface-2 border border-border rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-surface-3 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-crimson/80" />
                  <div className="w-3 h-3 rounded-full bg-secondary/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-surface-1 border border-border rounded-md px-3 py-1.5 text-xs font-mono text-dim text-center">
                    atlanta.121212.community
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex gap-1 mb-4">
                  {browserTabs.map((tab, i) => (
                    <button
                      key={tab}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 ${
                        i === 0
                          ? 'bg-purple text-white'
                          : 'bg-surface-3 text-dim hover:text-cream'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {mockCards.map((card) => (
                    <div
                      key={card.label}
                      className="bg-surface-1 border border-border rounded-lg p-3 hover:border-purple/40 transition-colors duration-300"
                    >
                      <span className={`${card.tagColor} text-[10px] font-bold px-2 py-0.5 rounded`}>
                        {card.tag}
                      </span>
                      <p className="text-cream text-sm font-medium mt-2">{card.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-purple-light text-sm font-semibold tracking-widest uppercase">
              The Model
            </span>
            <h2 className="heading-secondary text-cream mt-4 mb-6">
              What is <span className="text-gradient-purple">.community</span>?
            </h2>
            <p className="text-cream/70 text-lg mb-10 leading-relaxed">
              Each city gets its own subdomain &mdash; a living, breathing cultural hub
              curated by someone who actually lives there. Events, shops, music,
              food, reviews &mdash; all in one place.
            </p>

            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-purple-light" />
                  </div>
                  <div>
                    <h3 className="text-cream font-semibold mb-1">{feature.title}</h3>
                    <p className="text-cream/60 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
