import { Star } from 'lucide-react'
import type { HubReview } from '@/data/hubs'

interface HubReviewsProps {
  reviews: HubReview[]
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 transition-colors duration-300 ${
            i < rating ? 'fill-secondary text-secondary' : 'fill-transparent text-muted'
          }`}
        />
      ))}
    </div>
  )
}

export default function HubReviews({ reviews }: HubReviewsProps) {
  if (reviews.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-background-dark">
      <div className="container-custom mx-auto">
        <span className="text-purple-light text-sm font-semibold tracking-wider uppercase block mb-2">
          121212.reviews
        </span>
        <h2 className="heading-secondary text-cream mb-10">
          Community Reviews
        </h2>

        <div className="space-y-6 max-w-3xl">
          {reviews.map((review) => (
            <div
              key={`${review.product}-${review.handle}`}
              className="bg-surface-1 border border-border rounded-lg p-6 hover:border-secondary/30 transition-all duration-300"
            >
              <h3 className="text-cream font-semibold mb-2">{review.product}</h3>
              <StarRating rating={review.stars} />
              <p className="text-cream/70 italic mt-3 leading-relaxed">
                &ldquo;{review.snippet}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-dim text-sm">{review.reviewer}</span>
                <span className="text-purple-light text-sm font-medium">{review.handle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
