"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { submitContactForm } from "@/app/actions/contact";
import { makeContactSchema } from "@/lib/contact-schema";
import type { Translation } from "@/lib/translations";

const initialState = {
  success: false,
  message: "",
};

export interface ContactPrefill {
  eventType?: string;
  guests?: number;
  date?: string;
}

const inputClass =
  "min-h-12 w-full rounded-none border border-line-strong bg-field px-4 py-3 text-base text-strong outline-none transition placeholder:text-faint hover:border-gold-500/50 focus:border-gold-500 focus:ring-2 focus:ring-gold-400/20";
const labelClass = "mb-2 block text-sm font-medium text-body";

export function ContactForm({ prefill, t }: { prefill?: ContactPrefill | null; t: Translation["form"] }) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  const schema = useMemo(() => makeContactSchema(t.validation), [t]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      guests: 80,
      date: "",
      message: "",
    },
  });

  useEffect(() => {
    if (!prefill) return;
    if (prefill.eventType) setValue("eventType", prefill.eventType);
    if (prefill.guests) setValue("guests", prefill.guests);
    if (prefill.date) setValue("date", prefill.date);
  }, [prefill, setValue]);

  const onSubmit = handleSubmit((values) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, String(value));
    });
    formAction(formData);
    reset();
  });

  return (
    <form className="space-y-4" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>{t.name}</label>
          <input id="contact-name" {...register("name")} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} className={inputClass} placeholder={t.namePlaceholder} />
          {errors.name && <p id="contact-name-error" role="alert" className="mt-2 text-sm text-red-700">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>{t.email}</label>
          <input id="contact-email" {...register("email")} type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} className={inputClass} placeholder={t.emailPlaceholder} />
          {errors.email && <p id="contact-email-error" role="alert" className="mt-2 text-sm text-red-700">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClass}>{t.phone}</label>
          <input id="contact-phone" {...register("phone")} type="tel" autoComplete="tel" className={inputClass} placeholder={t.phonePlaceholder} />
          {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-event" className={labelClass}>{t.eventType}</label>
          <input id="contact-event" {...register("eventType")} className={inputClass} placeholder={t.eventTypePlaceholder} />
          {errors.eventType && <p className="mt-2 text-sm text-red-400">{errors.eventType.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-guests" className={labelClass}>{t.guests}</label>
          <input id="contact-guests" {...register("guests", { valueAsNumber: true })} type="number" min="1" inputMode="numeric" className={inputClass} />
          {errors.guests && <p className="mt-2 text-sm text-red-400">{errors.guests.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-date" className={labelClass}>{t.date}</label>
          <input id="contact-date" {...register("date")} type="date" className={inputClass} />
          {errors.date && <p className="mt-2 text-sm text-red-400">{errors.date.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>{t.message}</label>
        <textarea id="contact-message" {...register("message")} rows={5} className={inputClass} placeholder={t.messagePlaceholder} />
        {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="min-h-12 bg-gold-400 px-7 py-3 text-sm font-semibold text-stone-950 transition hover:bg-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? t.sending : t.submit}
      </button>

      {state.message ? (
        <p role="status" aria-live="polite" className={`text-sm ${state.success ? "text-emerald-700" : "text-red-700"}`}>
          {state.success ? t.success : t.error}
        </p>
      ) : null}
    </form>
  );
}
