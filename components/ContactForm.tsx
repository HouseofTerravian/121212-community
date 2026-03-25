'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

interface ContactFormProps {
  defaultCity?: string
  defaultSubject?: string
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  city: string
  message: string
}

const subjects = [
  'Bid on a City Hub',
  'Request a New City',
  'Curator Question',
  'Partnership Inquiry',
  'General Support',
  'Other',
]

export default function ContactForm({ defaultCity = '', defaultSubject = '' }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: defaultSubject,
      city: defaultCity,
      message: '',
    },
  })

  const onSubmit = async (_data: FormData) => {
    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="h-16 w-16 text-green-400 mb-6" />
        <h3 className="font-serif text-2xl font-semibold text-cream mb-3">
          Message sent!
        </h3>
        <p className="text-cream/70 text-base max-w-md">
          We&apos;ll be in touch within 48 hours.
        </p>
      </div>
    )
  }

  const inputBase =
    'w-full bg-surface-2 border border-border rounded-md px-4 py-3 text-cream placeholder:text-muted focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all duration-300'
  const labelBase = 'block text-cream/80 text-sm font-medium mb-2'
  const errorBase = 'text-crimson text-xs mt-1'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* First Name + Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelBase}>
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="First name"
            className={inputBase}
            {...register('firstName', { required: 'First name is required' })}
          />
          {errors.firstName && (
            <p className={errorBase}>{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className={labelBase}>
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Last name"
            className={inputBase}
            {...register('lastName', { required: 'Last name is required' })}
          />
          {errors.lastName && (
            <p className={errorBase}>{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelBase}>
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className={inputBase}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p className={errorBase}>{errors.email.message}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className={labelBase}>
          Subject
        </label>
        <select
          id="subject"
          className={inputBase}
          {...register('subject', { required: 'Please select a subject' })}
        >
          <option value="">Select a subject</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p className={errorBase}>{errors.subject.message}</p>
        )}
      </div>

      {/* City of Interest */}
      <div>
        <label htmlFor="city" className={labelBase}>
          City of Interest
        </label>
        <input
          id="city"
          type="text"
          placeholder="e.g. Atlanta, Houston, New York"
          className={inputBase}
          {...register('city')}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelBase}>
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us what you need..."
          className={`${inputBase} resize-none`}
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && (
          <p className={errorBase}>{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" disabled={submitting} className="w-full">
        {submitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
