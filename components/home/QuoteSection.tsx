export default function QuoteSection() {
  return (
    <section className="section-padding bg-background-dark">
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-purple/30 text-8xl font-serif leading-none mb-4">&ldquo;</div>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream/90 italic leading-relaxed -mt-12">
            When someone travels and wonders what&apos;s happening in Black Atlanta,
            Black Chicago, Black Houston &mdash; they should land on one of ours.
          </blockquote>
          <div className="mt-8 w-16 h-0.5 bg-purple mx-auto" />
        </div>
      </div>
    </section>
  )
}
