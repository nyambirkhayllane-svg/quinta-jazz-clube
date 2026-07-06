import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Introduza o seu nome'),
  email: z.string().email('Introduza um email válido'),
  phone: z.string().min(9, 'Introduza um telefone válido'),
  eventType: z.string().min(2, 'Indique o tipo de evento'),
  guests: z.coerce.number().min(1, 'Indique o número de convidados'),
  date: z.string().min(1, 'Indique uma data'),
  message: z.string().min(10, 'Descreva o seu evento'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
