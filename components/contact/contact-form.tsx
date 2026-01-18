'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { contactFormSchema, type ContactFormData } from '@/lib/schemas'
import { submitContactForm } from '@/app/actions/contact'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true)
    setServerError(null)

    try {
      const response = await submitContactForm(data)

      if (response.success) {
        setIsSuccess(true)
        reset()
      } else {
        if (response.error) setServerError(response.error)
        else setServerError('Something went wrong. Please try again.')
      }
    } catch {
      setServerError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className="p-8 text-center bg-secondary/10 border-secondary">
        <h3 className="text-xl font-semibold">Message Received!</h3>
        <p className="mt-2 text-foreground/70">
          Thanks for reaching out. We&apos;ll review your message and respond within 48 hours.
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-sm font-semibold underline underline-offset-4 hover:opacity-80"
        >
          Send another message
        </button>
      </Card>
    )
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Name"
          placeholder="Jane Smith"
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          label="Email"
          type="email"
          placeholder="jane@example.com"
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          label="Company (Optional)"
          placeholder="Acme Industries"
          error={errors.company?.message}
          {...register('company')}
        />

        <Textarea
          label="Message"
          placeholder="How can we help you? Tell us about your question or issue..."
          rows={6}
          error={errors.message?.message}
          {...register('message')}
        />

        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
          {...register('address')}
        />

        {serverError && <div className="text-sm text-red-500 font-medium">{serverError}</div>}

        <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Card>
  )
}
