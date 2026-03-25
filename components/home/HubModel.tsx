import { Network, DollarSign, Users, BarChart3 } from 'lucide-react'

const modelItems = [
  {
    icon: Network,
    title: 'Federated Hubs',
    description: 'Each city is a self-contained hub with its own curator, content, and community identity.',
  },
  {
    icon: DollarSign,
    title: 'Revenue Share',
    description: 'Curators earn from every transaction that flows through their hub, from events to products to reviews.',
  },
  {
    icon: Users,
    title: 'Local Authority',
    description: 'Nobody knows your city like you. Curators have full editorial control over what appears in their hub.',
  },
  {
    icon: BarChart3,
    title: 'Ecosystem Leverage',
    description: 'Every hub plugs into the full 121212 network — your city gets visibility across every domain.',
  },
]

const spokeDomains = [
  { label: '.market', angle: 0 },
  { label: '.music', angle: 60 },
  { label: '.fun', angle: 120 },
  { label: '.law', angle: 180 },
  { label: '.culture', angle: 240 },
  { label: '.movement', angle: 300 },
]

export default function HubModel() {
  return (
    <section className="section-padding bg-gradient-to-b from-surface-1 to-background-dark">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-light text-sm font-semibold tracking-widest uppercase">
            The Ecosystem
          </span>
          <h2 className="heading-secondary text-cream mt-4">
            One Hub, <span className="text-gradient-purple">Six Spokes</span>
          </h2>
          <p className="text-cream/70 mt-4 max-w-2xl mx-auto text-lg">
            Every city hub is the center of a spoke model that connects to the
            entire 121212 domain network.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {modelItems.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 rounded-lg hover:bg-surface-2 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-purple-light" />
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">{item.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border border-border/30" />
              <div className="absolute inset-8 rounded-full border border-purple/20" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple to-purple-dim border-2 border-purple-light/40 flex items-center justify-center shadow-xl shadow-purple/20">
                  <div className="text-center">
                    <p className="text-white text-[10px] md:text-xs font-mono leading-tight">atlanta</p>
                    <p className="text-white/60 text-[8px] md:text-[10px] font-mono">.121212</p>
                    <p className="text-purple-light text-[8px] md:text-[10px] font-mono">.community</p>
                  </div>
                </div>
              </div>

              {spokeDomains.map((spoke) => {
                const radius = 140
                const rad = (spoke.angle - 90) * (Math.PI / 180)
                const x = Math.cos(rad) * radius
                const y = Math.sin(rad) * radius
                return (
                  <div
                    key={spoke.label}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface-2 border border-border hover:border-secondary/50 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 cursor-default">
                      <span className="text-secondary text-xs md:text-sm font-mono font-semibold">
                        {spoke.label}
                      </span>
                    </div>
                  </div>
                )
              })}

              {spokeDomains.map((spoke) => {
                const innerR = 56
                const outerR = 110
                const rad = (spoke.angle - 90) * (Math.PI / 180)
                const x1 = Math.cos(rad) * innerR + 50
                const y1 = Math.sin(rad) * innerR + 50
                const x2 = Math.cos(rad) * outerR + 50
                const y2 = Math.sin(rad) * outerR + 50
                return (
                  <svg
                    key={`line-${spoke.label}`}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 100"
                  >
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(123,47,190,0.25)"
                      strokeWidth="0.3"
                      strokeDasharray="2 2"
                    />
                  </svg>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
