"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/lib/actions/contact";

const SUBJECTS = [
  { value: "genel", label: "Genel Bilgi" },
  { value: "uyelik", label: "Üyelik" },
  { value: "bonus", label: "Bonus & Kampanya" },
  { value: "teknik", label: "Teknik Destek" },
  { value: "diger", label: "Diğer" },
];

const initial: ContactState | null = null;

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state?.ok) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-8 text-center"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-400/20 text-emerald-300">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path
              d="m5 12 5 5L20 7"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="font-display mt-4 text-xl font-bold text-white">
          Mesajınız iletildi
        </h3>
        <p className="mt-2 text-sm leading-6 text-body">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {state && !state.ok && (
        <div
          role="alert"
          className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200"
        >
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Adınız Soyadınız"
            className={inputCls}
          />
        </Field>

        <Field label="E-posta" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="ornek@email.com"
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="Konu" htmlFor="subject" required>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className={inputCls}
        >
          <option value="" disabled>
            Konu seçin
          </option>
          {SUBJECTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mesajınız" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={2000}
          placeholder="Sorunuzu veya talebinizi kısaca yazın…"
          className={`${inputCls} resize-y min-h-[140px]`}
        />
      </Field>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-md btn-primary px-6 text-sm font-semibold text-white  transition-transform disabled:cursor-not-allowed disabled:opacity-60 active:translate-y-px sm:w-auto"
      >
        {pending ? (
          <>
            <Spinner />
            Gönderiliyor…
          </>
        ) : (
          "Mesajı Gönder"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-body"
      >
        {label}
        {required && <span className="text-pink"> *</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-soft bg-background px-4 py-3 text-sm text-white placeholder:text-[var(--placeholder)] outline-none transition-colors focus:border-pink/50 focus:ring-2 focus:ring-pink/20";

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        className="opacity-25"
      />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="opacity-90"
      />
    </svg>
  );
}
