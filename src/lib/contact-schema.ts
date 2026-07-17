import { z } from 'zod';

export interface ContactValidationMessages {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  guests: string;
  date: string;
  message: string;
}

export function makeContactSchema(m: ContactValidationMessages) {
  return z.object({
    name: z.string().min(2, m.name),
    email: z.string().email(m.email),
    phone: z.string().min(9, m.phone),
    eventType: z.string().min(2, m.eventType),
    guests: z.coerce.number().min(1, m.guests),
    date: z.string().min(1, m.date),
    message: z.string().min(10, m.message),
  });
}

// Default (Portuguese) schema, used by the server action.
export const contactSchema = makeContactSchema({
  name: 'Introduza o seu nome',
  email: 'Introduza um email válido',
  phone: 'Introduza um telefone válido',
  eventType: 'Indique o tipo de evento',
  guests: 'Indique o número de convidados',
  date: 'Indique uma data',
  message: 'Descreva o seu evento',
});

export type ContactFormValues = z.infer<typeof contactSchema>;
