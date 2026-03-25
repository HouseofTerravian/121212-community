import Link from 'next/link'
import { Diamond } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HubNotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center section-padding bg-background-dark">
      <div className="container-custom mx-auto text-center">
        <Diamond className="h-16 w-16 text-muted mx-auto mb-6" />

        <h1 className="heading-primary text-cream mb-4">Hub Not Found</h1>
        <p className="text-cream/70 text-lg mb-10 max-w-md mx-auto">
          This city hub doesn&apos;t exist yet &mdash; but it could.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/marketplace">
            <Button>Browse Available Cities</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Request a City</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
