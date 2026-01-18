import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(50, { message: 'Name must be fewer than 50 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.preprocess(
    (val: unknown) =>
      typeof val === 'string' && val.trim().length === 0 ? undefined : val,
    z.string().max(100, { message: 'Company name is too long.' }).optional()
  ),
  message: z
    .string()
    .min(10, { message: 'Please share a bit more detail about your question.' })
    .max(2000, { message: 'Message is too long.' }),

  // HONEYPOT: Hidden field for bots. If this has a value, it is spam.
  // We call it 'address' to trick bots into thinking it's a real field.
  address: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
