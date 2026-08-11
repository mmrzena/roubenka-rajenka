'use client'

import { useState } from 'react'
import { Dictionary } from '@/i18n/types'
import { useInquiryForm } from '@/hooks/useInquiry'

const inputClasses =
  'w-full border border-timber/20 bg-chalk px-3.5 py-2.5 text-timber placeholder:text-timber-faded/70 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30'

export default function InquiryForm({ dict }: { dict: Dictionary }) {
  const [startedAt] = useState(() => Date.now().toString())
  const mutation = useInquiryForm(dict.form.error)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    mutation.mutate({
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      arrival: String(data.get('arrival') ?? ''),
      departure: String(data.get('departure') ?? ''),
      guests: String(data.get('guests') ?? ''),
      message: String(data.get('message') ?? ''),
      website: String(data.get('website') ?? ''),
      locale: dict.locale,
      startedAt,
    })
  }

  if (mutation.isSuccess) {
    return (
      <div className="bg-sage-mist p-8 text-center">
        <p className="font-display text-2xl font-medium text-timber">{dict.form.success}</p>
        <p className="mt-3 text-timber-soft">{dict.form.successDetail}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-timber">{dict.form.name}</span>
          <input name="name" type="text" required minLength={2} className={inputClasses} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-timber">{dict.form.email}</span>
          <input name="email" type="email" required className={inputClasses} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-timber">
            {dict.form.phone}{' '}
            <span className="font-normal text-timber-faded">({dict.form.phoneOptional})</span>
          </span>
          <input name="phone" type="tel" className={inputClasses} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-timber">{dict.form.guests}</span>
          <select name="guests" required defaultValue="4" className={inputClasses}>
            {dict.form.guestsOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-timber">{dict.form.arrival}</span>
          <input name="arrival" type="date" required className={inputClasses} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-timber">
            {dict.form.departure}
          </span>
          <input name="departure" type="date" required className={inputClasses} />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-timber">{dict.form.message}</span>
        <textarea
          name="message"
          rows={4}
          placeholder={dict.form.messagePlaceholder}
          className={inputClasses}
        />
      </label>

      <div className="hidden" aria-hidden="true">
        <label>
          website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {mutation.isError && (
        <p
          role="alert"
          className="bg-terracotta/10 px-4 py-3 text-sm text-terracotta-dark"
        >
          {mutation.error.message}
        </p>
      )}

      <button
        type="submit"
        disabled={mutation.isPending}
        className="btn-cut w-full bg-terracotta px-6 py-3.5 font-medium text-chalk transition-colors hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {mutation.isPending ? dict.form.sending : dict.form.submit}
      </button>
    </form>
  )
}
