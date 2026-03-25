import type { HubProduct } from '@/data/hubs'
import Card from '@/components/ui/Card'

interface HubProductsProps {
  products: HubProduct[]
}

export default function HubProducts({ products }: HubProductsProps) {
  if (products.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-surface-1">
      <div className="container-custom mx-auto">
        <span className="text-purple-light text-sm font-semibold tracking-wider uppercase block mb-2">
          121212.market
        </span>
        <h2 className="heading-secondary text-cream mb-10">
          Top Products
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.name} className="p-6 text-center">
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{product.emoji}</span>
              </div>
              <h3 className="text-cream font-semibold mb-2">{product.name}</h3>
              <p className="text-secondary font-bold text-lg mb-1">{product.price}</p>
              <p className="text-dim font-mono text-xs">{product.shop}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
