'use client';

import { useState, useRef, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TERMS = [
  'Only valid on member vehicle. Your credit card will be charged monthly on the date you sign up.',
  'No contract. Cancel anytime prior to your renewal date by emailing info@splashbrotherscarwash.com.',
  'Monthly program fees will be AUTOMATICALLY CHARGED on each member\'s credit/debit card on the same day each month. No statements will be issued. It is the member\'s responsibility to cancel their Wash Club membership.',
  'Email info@splashbrotherscarwash.com to cancel. Please allow a minimum of 15 days prior to the next billing date. There are no refunds for partial months.',
  'Wash Club membership requires a physical license plate. Temporary plates will not be accepted. Membership license plates are for the registered vehicle only. Fraud will result in the termination of your Wash Club plan.',
  'Wash Club may be transferred to a newly purchased vehicle or long term vehicle change. This must be done on location by a Splash Brothers Car Wash employee.',
  'Splash Brothers Car Wash reserves the right to close due to inclement weather, major holidays or equipment failure. Splash Brothers Car Wash may increase monthly rates with notice posted on-site with 15 days notice.',
  'Terms and conditions are subject to change without notice.',
];

export default function SignupPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [plate, setPlate] = useState('');
  const [signature, setSignature] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [cardNum, setCardNum] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    if (!name.trim()) return setError('Enter your full name.');
    if (!phone.replace(/\D/g, '')) return setError('Enter your phone number.');
    if (!/^\d{5}$/.test(zip)) return setError('Enter a valid 5-digit zip code.');
    if (!plate.trim()) return setError('Enter your license plate.');
    if (!signature.trim()) return setError('Sign your name to authorize the membership.');
    if (signature.trim().toLowerCase() !== name.trim().toLowerCase())
      return setError('Signature must match the name on the form.');
    if (!accepted) return setError('You must accept the Terms and Conditions.');
    if (cardNum.replace(/\D/g, '').length < 12) return setError('Enter a valid card number.');
    if (!/^\d{2}\/\d{2}$/.test(cardExp)) return setError('Card expiration must be MM/YY.');
    if (!/^\d{3,4}$/.test(cardCvc)) return setError('Enter a valid CVC.');

    setSubmitting(true);
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
      const res = await fetch(`${apiBase}/api/public/membership`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: name.trim().split(/\s+/).slice(0, -1).join(' ') || name.trim(),
          lastName: name.trim().split(/\s+/).slice(-1)[0] || '',
          phone: phone.replace(/\D/g, ''),
          zip,
          licensePlate: plate.trim().toUpperCase(),
          signature: signature.trim(),
          termsAccepted: accepted,
          cardLast4: cardNum.replace(/\D/g, '').slice(-4),
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.message || 'Signup failed');
      }
      setSuccess(true);
      formRef.current?.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <main className="min-h-screen bg-[var(--color-splash-navy)] text-white flex items-center justify-center px-6 py-12">
        <div className="max-w-xl text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-[var(--color-splash-blue)] flex items-center justify-center text-4xl font-black mb-8">✓</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">You're a member.</h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Welcome to Splash Pass. Your plate is registered. Drive into any of our locations and the gates open. We've sent confirmation to {phone || 'your phone'} and noted the membership in our system. The first charge of $39.99 will hit your card today, and on the same date every month after.
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
      {/* Header */}
      <header className="bg-[var(--color-splash-navy)] text-white">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Splash Brothers Carwash" width={130} height={87} priority />
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-white transition">← Back home</Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_400px] gap-10 px-6 py-12 md:py-16">
        {/* Form */}
        <div>
          <p className="text-[var(--color-splash-blue-deep)] tracking-[0.25em] text-xs font-semibold uppercase mb-3">Splash Pass signup</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
            Sign up today.
          </h1>
          <p className="mt-4 text-black/65 text-lg max-w-xl">
            Five fields, a signature, and your card. You drive in tomorrow.
          </p>

          <form ref={formRef} onSubmit={onSubmit} className="mt-10 bg-white rounded-3xl shadow-[0_2px_24px_-8px_rgba(8,29,47,0.12)] border border-black/5 p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full Name" required>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Driver" className={inputCls} autoComplete="name" />
              </Field>
              <Field label="Phone Number" required>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 555-1234" className={inputCls} autoComplete="tel" inputMode="tel" />
              </Field>
              <Field label="Zip Code" required>
                <input value={zip} onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))} placeholder="94578" className={inputCls} autoComplete="postal-code" inputMode="numeric" />
              </Field>
              <Field label="License Plate" required>
                <input value={plate} onChange={(e) => setPlate(e.target.value.toUpperCase().slice(0, 12))} placeholder="ABC1234" className={inputCls + ' font-mono uppercase tracking-widest'} />
              </Field>
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-bold tracking-wide text-[var(--color-splash-navy)] uppercase">Payment</h2>
              <p className="mt-1 text-sm text-black/50">$39.99 charged today, then on the same date every month.</p>
              <div className="mt-4 grid md:grid-cols-[1fr_140px_120px] gap-4">
                <Field label="Card Number" required>
                  <input
                    value={cardNum}
                    onChange={(e) => setCardNum(e.target.value.replace(/[^\d ]/g, '').slice(0, 19))}
                    placeholder="1234 5678 9012 3456"
                    className={inputCls + ' font-mono'}
                    autoComplete="cc-number"
                    inputMode="numeric"
                  />
                </Field>
                <Field label="Expiration" required>
                  <input
                    value={cardExp}
                    onChange={(e) => {
                      let v = e.target.value.replace(/\D/g, '').slice(0, 4);
                      if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
                      setCardExp(v);
                    }}
                    placeholder="MM/YY"
                    className={inputCls + ' font-mono'}
                    autoComplete="cc-exp"
                    inputMode="numeric"
                  />
                </Field>
                <Field label="CVC" required>
                  <input value={cardCvc} onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, '').slice(0, 4))} placeholder="123" className={inputCls + ' font-mono'} autoComplete="cc-csc" inputMode="numeric" />
                </Field>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-bold tracking-wide text-[var(--color-splash-navy)] uppercase">Signature</h2>
              <p className="mt-1 text-sm text-black/50">Type your full name to authorize the monthly charge.</p>
              <Field label="" required>
                <input
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  placeholder="Type your full name"
                  className={inputCls + ' italic font-serif text-xl'}
                />
              </Field>
            </div>

            <div className="mt-8 rounded-2xl bg-[#f6f9fc] border border-black/5 p-5 max-h-56 overflow-y-auto">
              <p className="text-xs font-bold tracking-wide text-[var(--color-splash-navy)] uppercase mb-3">Unlimited Wash Club Terms and Conditions</p>
              <ul className="space-y-3 text-sm text-black/65 leading-relaxed">
                {TERMS.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>

            <label className="mt-6 flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-black/20 text-[var(--color-splash-blue)] focus:ring-2 focus:ring-[var(--color-splash-blue)]"
              />
              <span className="text-sm text-black/75">
                I have read and agree to the Terms and Conditions and authorize Splash Brothers Carwash to charge my card $39.99 monthly until I cancel.
              </span>
            </label>

            {error && <p className="mt-6 text-[var(--color-splash-red)] font-semibold text-sm">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 w-full bg-[var(--color-splash-red)] hover:bg-[var(--color-splash-red)]/90 disabled:opacity-60 disabled:cursor-wait text-white px-8 py-5 rounded-full text-lg font-bold tracking-wide transition"
            >
              {submitting ? 'Activating membership...' : 'Activate membership · $39.99/month'}
            </button>
            <p className="mt-3 text-xs text-black/45 text-center">Cancel anytime by emailing info@splashbrotherscarwash.com 15 days before renewal.</p>
          </form>
        </div>

        {/* Sidebar summary */}
        <aside className="lg:sticky lg:top-8 self-start">
          <div className="bg-[var(--color-splash-navy)] text-white rounded-3xl p-8 shadow-[0_15px_50px_-15px_rgba(8,29,47,0.4)]">
            <p className="text-[var(--color-splash-blue)] tracking-[0.25em] text-xs font-semibold uppercase">Splash Pass</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-5xl font-black">$39.99</span>
              <span className="text-white/60">/month</span>
            </div>
            <ul className="mt-8 space-y-4 text-white/85">
              {[
                'Unlimited tunnel washes at every location',
                'Daily washes if you want',
                '$20 off any full service package',
                'Same plate, same monthly rate',
                'Cancel anytime by email',
                'No contract',
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-splash-blue)] text-white text-xs flex items-center justify-center mt-0.5">✓</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs text-white/50 uppercase tracking-wide">Need help?</p>
              <a href="mailto:info@splashbrotherscarwash.com" className="mt-1 block text-[var(--color-splash-blue)] hover:text-white transition">info@splashbrotherscarwash.com</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

const inputCls =
  'mt-1 w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-base text-[var(--color-splash-ink)] placeholder:text-black/30 focus:outline-none focus:border-[var(--color-splash-blue)] focus:ring-2 focus:ring-[var(--color-splash-blue)]/20 transition';

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      {label && (
        <span className="text-sm font-semibold text-[var(--color-splash-navy)]">
          {label}
          {required && <span className="text-[var(--color-splash-red)]"> *</span>}
        </span>
      )}
      {children}
    </label>
  );
}
