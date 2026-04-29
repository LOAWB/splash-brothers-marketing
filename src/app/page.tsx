import Image from 'next/image';
import Link from 'next/link';

const LOCATIONS = [
  {
    city: 'San Leandro, CA',
    address: '15018 Hesperian Blvd, San Leandro, CA 94578',
    hours: '8am to 5pm daily',
    phone: '(510) 276-1116',
    rating: '4.3',
    reviews: '614',
    flagship: true,
  },
  {
    city: 'Castro Valley, CA',
    address: '2495 Castro Valley Blvd, Castro Valley, CA',
    hours: 'Opening soon',
    phone: '',
    rating: '',
    reviews: '',
    flagship: false,
  },
  {
    city: 'Commerce City, CO',
    address: '5870 Dahlia St, Commerce City, CO 80022',
    hours: '8am to 6pm daily',
    phone: '(720) 707-9890',
    rating: '4.1',
    reviews: '74',
    flagship: false,
  },
];

const STEPS = [
  { n: '01', title: 'Sign up online', body: 'Pick a plan, register your plate. Two minutes.' },
  { n: '02', title: 'Drive up to any location', body: 'Roll into the tunnel, show your plate, the team takes it from there.' },
  { n: '03', title: 'Wash unlimited', body: 'Daily if you want. Same plate, same monthly rate. Cancel anytime.' },
];

const INCLUDED = [
  { title: 'Light-show tunnel', body: 'Regulars say "come for the wash, stay for the light show."' },
  { title: 'Daily washes', body: 'Wash as often as you want. Members average 8-12 visits a month.' },
  { title: '$20 off full service', body: 'Members get $20 off Gold, Platinum, and Super Platinum packages.' },
  { title: 'No contract', body: 'Charged the same date every month. Cancel by email 15 days before renewal.' },
];

const FULL_SERVICE = [
  { name: 'Gold', price: 46.99, features: ['Full service car wash', 'Wheel cleaner', 'Polish', 'Windows', 'Interior vacuum', 'Interior + door jamb wipe down', 'Tire shine'] },
  { name: 'Platinum', price: 56.99, popular: true, features: ['Everything in Gold', 'Rain-X polish', 'Dashboard dressing', 'Air freshener'] },
  { name: 'Super Platinum', price: 89.99, features: ['Everything in Platinum', '100% Hand Wax', 'Exterior dressing'] },
];

const DETAIL_PACKAGES = [
  { name: 'Leather Treatment', price: 169.99, note: 'Platinum full service + clean and condition leather' },
  { name: 'Clay Bar + Complete Hand Wax', price: 249.99, note: 'Full service + clay bar + 100% hand wax' },
  { name: 'Interior Detail', price: 349.99, note: 'Full service + shampoo carpets, mats, seats + dash, console, panels' },
  { name: 'Exterior Polish', price: 399.99, note: 'Full service + clay bar + 2-stage polish and wax' },
  { name: '5-Step Exterior', price: 499.99, note: 'Full service + clay bar + diamond cut compound + wax + polish + paint seal' },
];

export default function HomePage() {
  return (
    <main>
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Image src="/logo.png" alt="Splash Brothers Carwash" width={130} height={87} priority />
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/90">
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#menu" className="hover:text-white transition">Wash menu</a>
            <a href="#locations" className="hover:text-white transition">Locations</a>
            <Link href="/signup" className="bg-white text-[var(--color-splash-navy)] px-5 py-2 rounded-full font-semibold hover:bg-[var(--color-splash-blue)] hover:text-white transition">
              Join Splash Pass
            </Link>
          </nav>
          <Link href="/signup" className="md:hidden bg-white text-[var(--color-splash-navy)] px-4 py-2 rounded-full text-sm font-semibold">Join</Link>
        </div>
      </header>

      {/* Hero - tightened */}
      <section className="relative overflow-hidden bg-[var(--color-splash-navy)] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f3a] via-[var(--color-splash-navy)] to-[#0a1928]" />
        {/* Water-themed bubble layer */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {[
            { left: '6%', size: 18, delay: 0, dur: 14 },
            { left: '14%', size: 10, delay: 3, dur: 11 },
            { left: '23%', size: 28, delay: 6, dur: 18 },
            { left: '34%', size: 14, delay: 1.5, dur: 13 },
            { left: '45%', size: 22, delay: 4, dur: 16 },
            { left: '56%', size: 9, delay: 7.5, dur: 10 },
            { left: '64%', size: 32, delay: 2.5, dur: 20 },
            { left: '73%', size: 16, delay: 5, dur: 14 },
            { left: '82%', size: 12, delay: 0.8, dur: 12 },
            { left: '91%', size: 24, delay: 6.5, dur: 17 },
          ].map((b, i) => (
            <span
              key={i}
              className="bubble"
              style={{
                left: b.left,
                width: b.size,
                height: b.size,
                animationDelay: `${b.delay}s`,
                animationDuration: `${b.dur}s`,
              }}
            />
          ))}
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-14 md:pt-32 md:pb-16">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 items-end">
            <div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
                Unlimited washes.<br />
                <span className="text-[var(--color-splash-blue)]">Unreal</span> light show.
              </h1>
              <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                One monthly membership. Drive in any time, any location. No contract. Cancel anytime by email.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/signup" className="inline-flex items-center gap-2 bg-[var(--color-splash-red)] hover:bg-[var(--color-splash-red)]/90 text-white px-7 py-3.5 rounded-full text-base font-bold tracking-wide transition">
                  Sign up today <span aria-hidden>→</span>
                </Link>
                <a href="#locations" className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-7 py-3.5 rounded-full text-base font-semibold transition">
                  Find a location
                </a>
              </div>
            </div>
            {/* Pricing card in hero - fills space */}
            <div className="bg-white/8 backdrop-blur border border-white/10 rounded-3xl p-7">
              <p className="text-[var(--color-splash-blue)] tracking-[0.2em] text-xs font-bold uppercase">Splash Pass</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-5xl font-black">$39.99</span>
                <span className="text-white/60">/month</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-white/85">
                <li>✓ Unlimited tunnel washes, every location</li>
                <li>✓ Daily washes if you want</li>
                <li>✓ $20 off any full service package</li>
                <li>✓ No contract, cancel by email</li>
              </ul>
              <Link href="/signup" className="mt-5 inline-flex w-full justify-center bg-[var(--color-splash-blue)] hover:bg-[var(--color-splash-blue-deep)] text-white py-2.5 rounded-full font-semibold transition">
                Activate membership
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <dl className="mt-12 pt-7 border-t border-white/10 grid grid-cols-4 gap-4 text-center md:text-left">
            <div><dt className="text-white/50 text-xs uppercase tracking-wide">Locations</dt><dd className="text-2xl md:text-3xl font-bold mt-1">3</dd></div>
            <div><dt className="text-white/50 text-xs uppercase tracking-wide">Cars/day</dt><dd className="text-2xl md:text-3xl font-bold mt-1">200-600</dd></div>
            <div><dt className="text-white/50 text-xs uppercase tracking-wide">Member savings</dt><dd className="text-2xl md:text-3xl font-bold mt-1">$20 off</dd></div>
            <div><dt className="text-white/50 text-xs uppercase tracking-wide">Yelp avg</dt><dd className="text-2xl md:text-3xl font-bold mt-1">4.3★</dd></div>
          </dl>
        </div>
      </section>

      {/* Customer quote band - tighter */}
      <section className="bg-white py-10 border-y border-black/5">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xl md:text-3xl font-semibold leading-snug tracking-tight text-[var(--color-splash-ink)]">
            <span className="text-[var(--color-splash-red)]">"</span>Come for the car wash. Stay for the light show.<span className="text-[var(--color-splash-red)]">"</span>
          </p>
          <p className="mt-2 text-xs text-black/50 tracking-wide uppercase">Actual customer review, Commerce City</p>
        </div>
      </section>

      {/* How it works + What's included combined into a denser two-column */}
      <section id="how" className="py-14 md:py-16 bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-[var(--color-splash-blue-deep)] tracking-[0.2em] text-xs font-bold uppercase mb-2">How it works</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">Three steps. No app. No fobs.</h2>
              <ul className="mt-7 space-y-5">
                {STEPS.map((step) => (
                  <li key={step.n} className="grid grid-cols-[auto_1fr] gap-4 items-start">
                    <div className="text-[var(--color-splash-blue)] text-3xl font-black tabular-nums leading-none">{step.n}</div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight">{step.title}</h3>
                      <p className="text-black/65">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[var(--color-splash-blue-deep)] tracking-[0.2em] text-xs font-bold uppercase mb-2">What's included</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">The membership most car washes wish they could ship.</h2>
              <ul className="mt-7 grid sm:grid-cols-2 gap-3">
                {INCLUDED.map((item) => (
                  <li key={item.title} className="bg-white rounded-xl border border-black/5 p-4">
                    <h3 className="text-sm font-bold tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-sm text-black/65 leading-snug">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wash Menu - tightened */}
      <section id="menu" className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9">
            <div>
              <p className="text-[var(--color-splash-blue-deep)] tracking-[0.2em] text-xs font-bold uppercase mb-2">Wash menu</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">From a quick express to a full detail.</h2>
            </div>
            <p className="text-black/65 max-w-md">Members save $20 on every full service tier below.</p>
          </div>

          <p className="text-xs font-bold tracking-wide text-[var(--color-splash-navy)] uppercase mb-4">Full Service Packages</p>
          <div className="grid md:grid-cols-3 gap-4">
            {FULL_SERVICE.map((tier) => (
              <div key={tier.name} className={`relative rounded-2xl p-6 border ${tier.popular ? 'border-[var(--color-splash-blue)] bg-[var(--color-splash-blue)]/5' : 'border-black/10 bg-white'}`}>
                {tier.popular && <div className="absolute -top-2.5 left-6 bg-[var(--color-splash-blue)] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Most popular</div>}
                <h3 className="text-xl font-black tracking-tight">{tier.name}</h3>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-4xl font-black">${tier.price.toFixed(2).split('.')[0]}</span>
                  <span className="text-xl font-bold text-black/50">.{tier.price.toFixed(2).split('.')[1]}</span>
                </div>
                <p className="mt-0.5 text-xs text-[var(--color-splash-blue-deep)] font-semibold">Members save $20</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-black/75"><span className="text-[var(--color-splash-blue)] flex-shrink-0">✓</span><span>{f}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Ceramic strip */}
          <div className="mt-6 relative bg-[var(--color-splash-ink)] text-white rounded-2xl p-6 grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div className="absolute top-4 right-4 md:static md:top-auto md:right-auto bg-[var(--color-splash-red)] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full md:hidden">New</div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <p className="text-[var(--color-splash-blue)] tracking-[0.2em] text-xs font-bold uppercase">Ceramic add-on</p>
                <span className="hidden md:inline-block bg-[var(--color-splash-red)] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">New</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black tracking-tight">
                Amplify Kwik Coat. <span className="text-[var(--color-splash-blue)]">30% SiO2.</span>
              </h3>
              <p className="mt-1 text-white/75">Highest SiO2 spray sealant on the market. 6+ months of ceramic protection, hydrophobic, super high gloss. Add to any wash.</p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-4xl font-black leading-none">$5</div>
              <div className="text-white/60 text-xs uppercase tracking-wide mt-1">with any wash</div>
            </div>
          </div>

          {/* Detail packages */}
          <p className="mt-9 text-xs font-bold tracking-wide text-[var(--color-splash-navy)] uppercase mb-4">Detail Packages</p>
          <div className="bg-white rounded-2xl border border-black/10 divide-y divide-black/5">
            {DETAIL_PACKAGES.map((pkg) => (
              <div key={pkg.name} className="grid md:grid-cols-[1fr_auto] gap-3 items-center p-5 hover:bg-[#f6f9fc] transition">
                <div>
                  <h3 className="text-base md:text-lg font-bold tracking-tight">{pkg.name}</h3>
                  <p className="text-sm text-black/60">{pkg.note}</p>
                </div>
                <div className="text-2xl md:text-3xl font-black tabular-nums">${pkg.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-black/50">Detail packages by appointment. Call your nearest location to book.</p>
        </div>
      </section>

      {/* Locations - tighter */}
      <section id="locations" className="py-14 md:py-16 bg-[var(--color-splash-navy)] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9">
            <div>
              <p className="text-[var(--color-splash-blue)] tracking-[0.2em] text-xs font-bold uppercase mb-2">Locations</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">Three tunnels. Two states. One membership.</h2>
            </div>
            <p className="text-white/60 max-w-md">Splash Pass works at every location. Same monthly rate.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {LOCATIONS.map((loc) => (
              <div key={loc.city} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
                {loc.flagship && <div className="absolute top-4 right-4 bg-[var(--color-splash-red)] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Flagship</div>}
                <h3 className="text-xl font-bold tracking-tight">{loc.city}</h3>
                <p className="mt-2 text-white/70 text-sm">{loc.address}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-white/40 uppercase tracking-wide mb-0.5">Hours</p>
                    <p className="text-white">{loc.hours}</p>
                  </div>
                  {loc.phone && (
                    <div>
                      <p className="text-white/40 uppercase tracking-wide mb-0.5">Phone</p>
                      <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="text-[var(--color-splash-blue)] hover:text-white transition">{loc.phone}</a>
                    </div>
                  )}
                </div>
                {loc.rating && (
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-sm">
                    <span className="text-lg font-bold">{loc.rating}</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-white/50">· {loc.reviews} Yelp reviews</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - tighter */}
      <section className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.98]">
            Sign up today.<br />
            <span className="text-[var(--color-splash-blue)]">Wash tomorrow.</span>
          </h2>
          <p className="mt-4 text-lg text-black/60 max-w-xl mx-auto">No contract. No setup fee. $39.99 a month.</p>
          <Link href="/signup" className="mt-7 inline-flex items-center gap-2 bg-[var(--color-splash-red)] hover:bg-[var(--color-splash-red)]/90 text-white px-8 py-4 rounded-full text-lg font-bold transition">
            Join Splash Pass <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-splash-ink)] text-white/60 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <Image src="/logo.png" alt="Splash Brothers Carwash" width={90} height={60} className="opacity-70" />
          <p>© {new Date().getFullYear()} Splash Brothers Carwash. All rights reserved.</p>
          <a href="mailto:info@splashbrotherscarwash.com" className="hover:text-white transition">info@splashbrotherscarwash.com</a>
        </div>
      </footer>
    </main>
  );
}
