'use server';

import { contactSchema } from '@/lib/contact-schema';

export async function submitContactForm(
  prevState: { success: boolean; message: string },
  formData: FormData,
) {
  const values = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse({
    ...values,
    guests: Number(values.guests ?? 0),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: 'Por favor corrija os dados do formulário antes de enviar.',
    };
  }

  return {
    success: true,
    message: 'Obrigado! A sua mensagem foi recebida e entraremos em contacto em breve.',
  };
}
