'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Mail, HelpCircle, Handshake, Scale } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const channels = [
  {
    icon: Mail,
    label: 'General Inquiries',
    email: 'love@121212.community',
  },
  {
    icon: HelpCircle,
    label: 'Support',
    email: 'support@121212.community',
  },
  {
    icon: Handshake,
    label: 'Partnerships',
    email: 'love@121212.community',
  },
  {
    icon: Scale,
    label: 'Legal',
    email: 'love@121212.community',
  },
]

function ContactContent() {
  const searchParams = useSearchParams()
  const cityParam = searchParams.get('city') || ''
  const waitlistParam = searchParams.get('waitlist')

  const defaultSubject =
    waitlistParam === 'true' || cityParam ? 'Bid on a City Hub' : ''

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
            Reach Out
          </span>
          <h1 className="heading-primary text-cream mt-4 mb-6 max-w-4xl mx-auto">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you want to bid on a city, ask a question, or explore a partnership, we are here.
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Contact Channels */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-cream mb-8">
                Contact Channels
              </h2>
              <div className="space-y-8">
                {channels.map((channel) => {
                  const Icon = channel.icon
                  return (
                    <div key={channel.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-purple-light" />
                      </div>
                      <div>
                        <h3 className="text-cream font-medium text-sm mb-1">
                          {channel.label}
                        </h3>
                        <a
                          href={`mailto:${channel.email}`}
                          className="text-secondary text-sm hover:text-secondary-light transition-colors duration-300"
                        >
                          {channel.email}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface-1 border border-border rounded-lg p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-cream mb-6">
                  Send a Message
                </h2>
                <ContactForm
                  defaultCity={cityParam}
                  defaultSubject={defaultSubject}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-32 pb-16 px-4 md:px-8 bg-surface-1">
          <div className="container-custom mx-auto text-center">
            <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
              Reach Out
            </span>
            <h1 className="heading-primary text-cream mt-4 mb-6 max-w-4xl mx-auto">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-cream/70 text-lg">Loading...</p>
          </div>
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  )
}
