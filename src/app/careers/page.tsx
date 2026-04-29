'use client';

import { useState, FormEvent, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const POSITIONS = [
  { id: 'tunnel-attendant', label: 'Tunnel Attendant', desc: 'Front of house. Greet customers, prep cars, run the line.' },
  { id: 'finish-end', label: 'Finish-End Detailer', desc: 'Back of tunnel. Towel dry, dressings, finish quality.' },
  { id: 'cashier', label: 'Cashier', desc: 'Run the kiosk, sell memberships, handle payments.' },
  { id: 'manager', label: 'Manager', desc: 'Run a shift. Schedule, train, escalate. Hands-on.' },
  { id: 'detail-tech', label: 'Detail Technician', desc: 'Detail bay. Polish, ceramic, hand wax, interior detail.' },
  { id: 'open', label: 'Anything you have open', desc: 'Tell us what you do well, we will figure it out.' },
];

const AVAILABILITY = ['Full-time', 'Part-time', 'Weekends only', 'Evenings only', 'Open'];

export default function CareersPage() {
  const [interest, setInterest] = useState<'thinking' | 'apply'>('thinking');
  const [position, setPosition] = useState(POSITIONS[0].id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [availability, setAvailability] = useState(AVAILABILITY[0]);
  const [priorExp, setPriorExp] = useState('');
  const [bilingual, setBilingual] = useState(false);
  const [whyJoin, setWhyJoin] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    if (!name.trim()) return setError('Enter your name.');
    if (!phone.replace(/\D/g, '')) return setError('Enter your phone number.');
    if (!email.includes('@')) return setError('Enter a valid email.');
    if (interest === 'apply' && !whyJoin.trim()) return setError('Tell us why you want to join.');

    setSubmitting(true);
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
      const res = await fetch(`${apiBase}/api/public/job-application`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          interestLevel: interest,
          name: name.trim(),
          phone: phone.replace(/\D/g, ''),
          email: email.trim().toLowerCase(),
          positionId: position,
          positionLabel: POSITIONS.find((p) => p.id === position)!.label,
          availability,
          bilingual,
          priorExperience: priorExp.trim(),
          whyJoin: whyJoin.trim(),
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.message || 'Application failed.');
      }
      setSuccess(true);
      formRef.current?.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Application failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <main className="min-h-screen bg-[var(--color-splash-navy)] text-white flex items-center justify-center px-6 py-12">
        <div className="max-w-xl text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-[var(--color-splash-blue)] flex items-center justify-center text-4xl font-black mb-8">✓</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Got it.</h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Thanks {name || 'for reaching out'}. We've got your {interest === 'apply' ? 'application' : 'interest form'} and will be in touch within a couple of business days. If you said {AVAILABILITY[0].toLowerCase()} and we have something open, you'll hear faster.
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

      {/* Hero */}
      <section className="relative bg-[var(--color-splash-navy)] text-white pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f3a] via-[var(--color-splash-navy)] to-[#0a1928]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-4">
          <p className="text-[var(--color-splash-blue)] tracking-[0.2em] text-xs font-bold uppercase mb-2">Careers at Splash Brothers</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">We are hiring.</h1>
          <p className="mt-4 text-lg text-white/75 max-w-2xl">
            200 to 600 cars a day across our locations. Bilingual team. Friendly culture. Cash tips on the floor.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_360px] gap-8 px-6 py-10 md:py-12">
        <div>
          {/* Two-mode tab */}
          <div className="inline-flex bg-white border border-black/10 rounded-full p-1 mb-6">
            <button
              onClick={() => setInterest('thinking')}
              className={`px-5 py-2 rounded-full text-sm font-bold transition ${interest === 'thinking' ? 'bg-[var(--color-splash-navy)] text-white' : 'text-black/65 hover:text-black'}`}
            >
              Thinking about it
            </button>
            <button
              onClick={() => setInterest('apply')}
              className={`px-5 py-2 rounded-full text-sm font-bold transition ${interest === 'apply' ? 'bg-[var(--color-splash-red)] text-white' : 'text-black/65 hover:text-black'}`}
            >
              Apply now
            </button>
          </div>

          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            {interest === 'thinking' ? 'Tell us a bit about you.' : 'Apply now.'}
          </h2>
          <p className="mt-2 text-black/65">
            {interest === 'thinking'
              ? 'No commitment. Drop your info, pick a role you are curious about, we will reach out when something opens up.'
              : 'Five minutes. We will read it and call you within 2 business days.'}
          </p>

          <form ref={formRef} onSubmit={onSubmit} className="mt-7 bg-white rounded-2xl border border-black/5 shadow-[0_2px_24px_-8px_rgba(8,29,47,0.1)] p-6 md:p-8 space-y-6">
            {/* Position picker */}
            <div>
              <p className="text-xs font-bold tracking-wide text-[var(--color-splash-navy)] uppercase mb-3">Role you are interested in</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {POSITIONS.map((p) => (
                  <label key={p.id} className={`cursor-pointer rounded-xl border p-3 transition ${position === p.id ? 'border-[var(--color-splash-blue)] bg-[var(--color-splash-blue)]/5' : 'border-black/10 bg-white hover:border-black/30'}`}>
                    <input type="radio" name="position" value={p.id} checked={position === p.id} onChange={() => setPosition(p.id)} className="sr-only" />
                    <div className="font-bold">{p.label}</div>
                    <p className="text-xs text-black/55 mt-0.5">{p.desc}</p>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Full Name" required>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Driver" className={inputCls} autoComplete="name" />
              </Field>
              <Field label="Phone" required>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 555-1234" className={inputCls} autoComplete="tel" inputMode="tel" />
              </Field>
              <Field label="Email" required>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className={inputCls} autoComplete="email" inputMode="email" />
              </Field>
              <Field label="Availability">
                <select value={availability} onChange={(e) => setAvailability(e.target.value)} className={inputCls + ' appearance-none'}>
                  {AVAILABILITY.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </Field>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={bilingual}
                onChange={(e) => setBilingual(e.target.checked)}
                className="w-5 h-5 rounded border-black/20 text-[var(--color-splash-blue)] focus:ring-2 focus:ring-[var(--color-splash-blue)]"
              />
              <span className="text-sm text-black/75">I speak English and Spanish (bilingual is a plus)</span>
            </label>

            <Field label={interest === 'apply' ? 'Prior wash / detailing experience' : 'Anything you have done that fits this work'}>
              <textarea
                value={priorExp}
                onChange={(e) => setPriorExp(e.target.value)}
                placeholder="Express tunnels, full service, detail bays, drive-thru, retail, anything that translates"
                className={inputCls + ' min-h-20 resize-y'}
              />
            </Field>

            {interest === 'apply' && (
              <Field label="Why do you want to join Splash Brothers?" required>
                <textarea
                  value={whyJoin}
                  onChange={(e) => setWhyJoin(e.target.value)}
                  placeholder="A few sentences."
                  className={inputCls + ' min-h-24 resize-y'}
                />
              </Field>
            )}

            {error && <p className="text-[var(--color-splash-red)] font-semibold text-sm">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className={`w-full ${interest === 'apply' ? 'bg-[var(--color-splash-red)] hover:bg-[var(--color-splash-red)]/90' : 'bg-[var(--color-splash-navy)] hover:bg-[var(--color-splash-blue-deep)]'} disabled:opacity-60 disabled:cursor-wait text-white px-8 py-4 rounded-full text-lg font-bold transition`}
            >
              {submitting ? 'Sending...' : interest === 'apply' ? 'Submit application' : 'Drop your info'}
            </button>
            <p className="text-xs text-black/45 text-center">
              Your info goes to info@splashbrotherscarwash.com. We never sell or share it.
            </p>
          </form>
        </div>

        <aside className="lg:sticky lg:top-8 self-start space-y-4">
          <div className="bg-[var(--color-splash-navy)] text-white rounded-2xl p-6 shadow-[0_15px_50px_-15px_rgba(8,29,47,0.4)]">
            <p className="text-[var(--color-splash-blue)] tracking-[0.2em] text-xs font-bold uppercase">What you get</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/85">
              <li>✓ Cash tips on the floor</li>
              <li>✓ Bilingual team</li>
              <li>✓ Promote-from-within: managers came up from the line</li>
              <li>✓ Free unlimited car wash</li>
              <li>✓ Friendly customers, not corporate</li>
              <li>✓ We pay for training</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-black/10 p-6 text-sm">
            <p className="font-bold text-[var(--color-splash-navy)]">Already a fit somewhere?</p>
            <p className="mt-1 text-black/65">Walk in to any of our locations and ask for the manager. Apps are accepted in person at the kiosk too.</p>
          </div>
        </aside>
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
