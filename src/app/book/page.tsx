'use client';

import { useState, FormEvent, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PACKAGES = [
  { id: 'leather-treatment', name: 'Leather Treatment', price: 169.99, duration: '90 min' },
  { id: 'clay-bar-hand-wax', name: 'Clay Bar + Complete Hand Wax', price: 249.99, duration: '2 hr' },
  { id: 'interior-detail', name: 'Interior Detail', price: 349.99, duration: '3 hr' },
  { id: 'exterior-polish', name: 'Exterior Polish Detail', price: 399.99, duration: '3.5 hr' },
  { id: '5-step-exterior', name: '5-Step Exterior Detail', price: 499.99, duration: '4 hr' },
];

const LOCATION_OPTIONS = [
  { id: 'san-leandro', label: 'San Leandro, CA' },
  { id: 'castro-valley', label: 'Castro Valley, CA (when open)' },
  { id: 'commerce-city', label: 'Commerce City, CO' },
];

const TIME_WINDOWS = ['Morning (8am-11am)', 'Midday (11am-2pm)', 'Afternoon (2pm-5pm)'];

function todayISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

export default function BookPage() {
  const [pkg, setPkg] = useState(PACKAGES[2].id);
  const [location, setLocation] = useState(LOCATION_OPTIONS[0].id);
  const [date, setDate] = useState(todayISO());
  const [timeWindow, setTimeWindow] = useState(TIME_WINDOWS[0]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleMakeModel, setVehicleMakeModel] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const selectedPkg = PACKAGES.find((p) => p.id === pkg)!;
  const selectedLocation = LOCATION_OPTIONS.find((l) => l.id === location)!;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    if (!name.trim()) return setError('Enter your name.');
    if (!phone.replace(/\D/g, '')) return setError('Enter your phone number.');
    if (!email.includes('@')) return setError('Enter a valid email.');
    if (!vehicleYear || !/^\d{4}$/.test(vehicleYear)) return setError('Enter a 4-digit vehicle year.');
    if (!vehicleMakeModel.trim()) return setError('Enter your vehicle make and model.');
    if (!date) return setError('Pick a preferred date.');

    setSubmitting(true);
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
      const res = await fetch(`${apiBase}/api/public/booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.replace(/\D/g, ''),
          email: email.trim().toLowerCase(),
          vehicleYear,
          vehicleMakeModel: vehicleMakeModel.trim(),
          packageId: pkg,
          packageName: selectedPkg.name,
          packagePrice: selectedPkg.price,
          locationId: location,
          locationLabel: selectedLocation.label,
          preferredDate: date,
          preferredTimeWindow: timeWindow,
          notes: notes.trim(),
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.message || 'Booking failed.');
      }
      setSuccess(true);
      formRef.current?.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Booking failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <main className="min-h-screen bg-[var(--color-splash-navy)] text-white flex items-center justify-center px-6 py-12">
        <div className="max-w-xl text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-[var(--color-splash-blue)] flex items-center justify-center text-4xl font-black mb-8">✓</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Booking received.</h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            We've got your request for {selectedPkg.name} at {selectedLocation.label} on {date} ({timeWindow}). The team will call or text you shortly to confirm the exact appointment time and lock it in.
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

      <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_400px] gap-8 px-6 py-10 md:py-12">
        <div>
          <p className="text-[var(--color-splash-blue-deep)] tracking-[0.2em] text-xs font-bold uppercase mb-2">Book detail</p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">Schedule your detail.</h1>
          <p className="mt-3 text-black/65 text-lg max-w-xl">Pick a package, location, and time window. We confirm the exact appointment by phone the same business day.</p>

          <form ref={formRef} onSubmit={onSubmit} className="mt-8 bg-white rounded-2xl border border-black/5 shadow-[0_2px_24px_-8px_rgba(8,29,47,0.1)] p-6 md:p-8 space-y-6">
            <div>
              <p className="text-xs font-bold tracking-wide text-[var(--color-splash-navy)] uppercase mb-3">Package</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {PACKAGES.map((p) => (
                  <label key={p.id} className={`cursor-pointer rounded-xl border p-3 transition ${pkg === p.id ? 'border-[var(--color-splash-blue)] bg-[var(--color-splash-blue)]/5' : 'border-black/10 bg-white hover:border-black/30'}`}>
                    <input type="radio" name="pkg" value={p.id} checked={pkg === p.id} onChange={() => setPkg(p.id)} className="sr-only" />
                    <div className="flex items-baseline justify-between">
                      <span className="font-bold">{p.name}</span>
                      <span className="font-bold tabular-nums">${p.price.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-black/55">~{p.duration}</p>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Location">
                <select value={location} onChange={(e) => setLocation(e.target.value)} className={selectCls}>
                  {LOCATION_OPTIONS.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
                </select>
              </Field>
              <Field label="Preferred date">
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={todayISO()} className={inputCls} />
              </Field>
            </div>
            <Field label="Preferred time window">
              <div className="grid grid-cols-3 gap-2 mt-1">
                {TIME_WINDOWS.map((w) => (
                  <button key={w} type="button" onClick={() => setTimeWindow(w)} className={`text-sm py-2.5 rounded-xl border transition ${timeWindow === w ? 'border-[var(--color-splash-blue)] bg-[var(--color-splash-blue)]/10 font-bold' : 'border-black/10 bg-white hover:border-black/30'}`}>
                    {w}
                  </button>
                ))}
              </div>
            </Field>

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
            </div>

            <div className="grid md:grid-cols-[110px_1fr] gap-4">
              <Field label="Vehicle Year" required>
                <input value={vehicleYear} onChange={(e) => setVehicleYear(e.target.value.replace(/\D/g, '').slice(0, 4))} placeholder="2022" className={inputCls + ' font-mono'} inputMode="numeric" />
              </Field>
              <Field label="Make & Model" required>
                <input value={vehicleMakeModel} onChange={(e) => setVehicleMakeModel(e.target.value)} placeholder="Honda Civic" className={inputCls} />
              </Field>
            </div>

            <Field label="Notes (optional)">
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Pet hair, kids' spills, anything we should know about" className={inputCls + ' min-h-24 resize-y'} />
            </Field>

            {error && <p className="text-[var(--color-splash-red)] font-semibold text-sm">{error}</p>}

            <button type="submit" disabled={submitting} className="w-full bg-[var(--color-splash-red)] hover:bg-[var(--color-splash-red)]/90 disabled:opacity-60 disabled:cursor-wait text-white px-8 py-4 rounded-full text-lg font-bold transition">
              {submitting ? 'Sending request...' : `Request ${selectedPkg.name} - $${selectedPkg.price.toFixed(2)}`}
            </button>
            <p className="text-xs text-black/45 text-center">We confirm the exact appointment time by phone same business day. No charge until the detail is complete.</p>
          </form>
        </div>

        <aside className="lg:sticky lg:top-8 self-start">
          <div className="bg-[var(--color-splash-navy)] text-white rounded-2xl p-6 shadow-[0_15px_50px_-15px_rgba(8,29,47,0.4)]">
            <p className="text-[var(--color-splash-blue)] tracking-[0.2em] text-xs font-bold uppercase">Booking summary</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight">{selectedPkg.name}</h2>
            <p className="mt-1 text-white/60 text-sm">~{selectedPkg.duration} at {selectedLocation.label}</p>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-4xl font-black">${selectedPkg.price.toFixed(2)}</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/85">
              <li>✓ Confirmed by phone same business day</li>
              <li>✓ Splash Pass members save $20 on full service</li>
              <li>✓ No prepayment, pay at completion</li>
              <li>✓ Reschedule or cancel any time before</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/55">
              Questions? <a href="mailto:info@splashbrotherscarwash.com" className="text-[var(--color-splash-blue)] hover:text-white transition">info@splashbrotherscarwash.com</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

const inputCls = 'mt-1 w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-base text-[var(--color-splash-ink)] placeholder:text-black/30 focus:outline-none focus:border-[var(--color-splash-blue)] focus:ring-2 focus:ring-[var(--color-splash-blue)]/20 transition';
const selectCls = inputCls + ' appearance-none';

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
