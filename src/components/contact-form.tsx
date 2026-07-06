"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { submitContactForm } from "@/app/actions/contact";
import { contactSchema } from "@/lib/contact-schema";

const initialState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
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
          <label className="mb-2 block text-sm font-medium text-stone-300">Nome</label>
          <input
            {...register("name")}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none transition [color-scheme:dark] placeholder:text-stone-500 focus:border-gold-400/60"
            placeholder="Inês Costa"
          />
          {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-300">Email</label>
          <input
            {...register("email")}
            type="email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none transition [color-scheme:dark] placeholder:text-stone-500 focus:border-gold-400/60"
            placeholder="ines@email.com"
          />
          {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-300">Telefone</label>
          <input
            {...register("phone")}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none transition [color-scheme:dark] placeholder:text-stone-500 focus:border-gold-400/60"
            placeholder="+351 912 345 678"
          />
          {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-300">Tipo de Evento</label>
          <input
            {...register("eventType")}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none transition [color-scheme:dark] placeholder:text-stone-500 focus:border-gold-400/60"
            placeholder="Casamento"
          />
          {errors.eventType && <p className="mt-2 text-sm text-red-400">{errors.eventType.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-300">Número de Convidados</label>
          <input
            {...register("guests", { valueAsNumber: true })}
            type="number"
            min="1"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none transition [color-scheme:dark] placeholder:text-stone-500 focus:border-gold-400/60"
          />
          {errors.guests && <p className="mt-2 text-sm text-red-400">{errors.guests.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-300">Data</label>
          <input
            {...register("date")}
            type="date"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none transition [color-scheme:dark] placeholder:text-stone-500 focus:border-gold-400/60"
          />
          {errors.date && <p className="mt-2 text-sm text-red-400">{errors.date.message}</p>}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-stone-300">Mensagem</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none transition [color-scheme:dark] placeholder:text-stone-500 focus:border-gold-400/60"
          placeholder="Conte-nos mais sobre a sua ideia..."
        />
        {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-xl bg-gold-400 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "A enviar..." : "Solicitar orçamento"}
      </button>

      {state.message ? (
        <p className={`text-sm ${state.success ? "text-emerald-400" : "text-red-400"}`}>
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
