'use client';

import { useState, FormEvent, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CancelPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [cardLast4, setCardLast4] = useState('');
  const [reason, setReason] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    if (!firstName.trim()) return setError('Enter your first name.');
    if (!lastName.trim()) return setError('Enter your last name.');
    if (!email.includes('@')) return setError('Enter a valid email.');
    if (!phone.replace(/\D/g, '')) return setError('Enter your phone number.');
    if (!licensePlate.trim()) return setError('Enter your license plate.');
    if (!reason.trim()) return setError('Tell us why you are canceling so we can improve.');

    setSubmitting(true);
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
      const res = await fetch(`${apiBase}/api/public/cancel`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.replace(/\D/g, ''),
          licensePlate: licensePlate.trim().toUpperCase(),
          cardLast4: cardLast4.replace(/\D/g, '').slice(-4) || undefined,
          reason: reason.trim(),
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.message || 'Cancellation failed.');
      }
      setSuccess(true);
      formRef.current?.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Cancellation failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <main className="min-h-screen bg-[var(--color-splash-navy)] text-white flex items-center justify-center px-6 py-12">
        <div className="max-w-xl text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-[var(--color-splash-blue)] flex items-center justify-center text-4xl font-black mb-8">✓</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Cancellation submitted.</h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            We received your request. Per the membership terms, cancellation must be at least 15 days before your next renewal date to stop the next charge. The team will confirm by email or phone within 1 business day.
          </p>
          <Link href="/" className="mt-10 inline-flex items-center gap-2 bg-white text-[var(--color-splash-navy)] px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-splash-blue)] hover:text-white transition">
            Back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f9fc]">
      <header className="bg-[var(--color-splash-navy)] text-white">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Splash Brothers Carwash" width={130} height={87} priority />
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-white transition">← Back home</Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-10 md:py-12">
        <p className="text-[var(--color-splash-blue-deep)] tracking-[0.2em] text-xs font-bold uppercase mb-2">Cancel membership</p>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">Cancel your Splash Pass.</h1>
        <p className="mt-3 text-black/65 text-lg max-w-xl">
          Sorry to see you go. Submit this form at least 15 days before your renewal to stop the next charge. We confirm by email or phone within one business day.
        </p>

        <form ref={formRef} onSubmit={onSubmit} className="mt-7 bg-white rounded-2xl border border-black/5 shadow-[0_2px_24px_-8px_rgba(8,29,47,0.1)] p-6 md:p-8 space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="First Name" required>
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className={inputCls} autoComplete="given-name" />
            </Field>
            <Field label="Last Name" required>
              <input value={lastName} onChange={(e) => setLastName(e.target.value)} className={inputCls} autoComplete="family-name" />
            </Field>
            <Field label="Email" required>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} autoComplete="email" inputMode="email" />
            </Field>
            <Field label="Phone" required>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className={inputCls} autoComplete="tel" inputMode="tel" />
            </Field>
            <Field label="License Plate" required>
              <input value={licensePlate} onChange={(e) => setLicensePlate(e.target.value.toUpperCase().slice(0, 12))} className={inputCls + ' font-mono uppercase tracking-widest'} />
            </Field>
            <Field label="Last 4 of billing card">
              <input value={cardLast4} onChange={(e) => setCardLast4(e.target.value.replace(/\D/g, '').slice(0, 4))} className={inputCls + ' font-mono'} placeholder="1234" inputMode="numeric" />
            </Field>
          </div>

          <Field label="Reason for canceling" required>
            <textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Helps us improve the wash." className={inputCls + ' min-h-28 resize-y'} />
          </Field>

          {error && <p className="text-[var(--color-splash-red)] font-semibold text-sm">{error}</p>}

          <button type="submit" disabled={submitting} className="w-full bg-[var(--color-splash-red)] hover:bg-[var(--color-splash-red)]/90 disabled:opacity-60 disabled:cursor-wait text-white px-8 py-4 rounded-full text-lg font-bold transition">
            {submitting ? 'Submitting...' : 'Submit cancellation'}
          </button>
          <p className="text-xs text-black/45 text-center">
            Submission goes to info@splashbrotherscarwash.com. Per membership terms, cancellations must be at least 15 days before your next renewal to stop the next charge.
          </p>
        </form>
      </div>
    </main>
  );
}

const inputCls = 'mt-1 w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-base text-[var(--color-splash-ink)] placeholder:text-black/30 focus:outline-none focus:border-[var(--color-splash-blue)] focus:ring-2 focus:ring-[var(--color-splash-blue)]/20 transition';

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[var(--color-splash-navy)]">
        {label}
        {required && <span className="text-[var(--color-splash-red)]"> *</span>}
      </span>
      {children}
    </label>
  );
}
