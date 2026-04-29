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
  { n: '01', title: 'Sign up online', body: 'Pick a plan, add your plate. Two minutes, no commitment.' },
  { n: '02', title: 'Drive in. Plate scans.', body: 'Roll up to any Splash Brothers tunnel. Camera reads your plate. Gates open.' },
  { n: '03', title: 'Wash unlimited.', body: 'Daily if you want. Free vacuums after every wash. Cancel anytime.' },
];

const INCLUDED = [
  { title: 'Light-show tunnel', body: 'The tunnel that makes regulars say "come for the wash, stay for the light show."' },
  { title: 'Free vacuums always', body: 'Use the vacuum bays after every wash. Included with membership and single-wash.' },
  { title: 'No contract', body: 'Charged the same day each month. Cancel by email 15 days before renewal. Done.' },
  { title: 'Plate-recognition entry', body: 'No fobs, no apps to open. Your license plate is the membership.' },
];

const FULL_SERVICE = [
  {
    name: 'Gold',
    price: 46.99,
    features: ['Full service car wash', 'Wheel cleaner', 'Polish', 'Windows', 'Interior vacuum', 'Interior & door jamb wipe down', 'Tire shine'],
  },
  {
    name: 'Platinum',
    price: 56.99,
    popular: true,
    features: ['Everything in Gold', 'Rain-X polish', 'Dashboard dressing', 'Air freshener'],
  },
  {
    name: 'Super Platinum',
    price: 89.99,
    features: ['Everything in Platinum', '100% Hand Wax', 'Exterior dressing'],
  },
];

const DETAIL_PACKAGES = [
  { name: 'Leather Treatment', price: 169.99, note: 'Platinum full service + clean and condition leather' },
  { name: 'Clay Bar + Complete Hand Wax', price: 249.99, note: 'Full service + clay bar + 100% hand wax' },
  { name: 'Interior Detail', price: 349.99, note: 'Full service + shampoo carpets / mats / seats + dash, console, panels' },
  { name: 'Exterior Polish', price: 399.99, note: 'Full service + clay bar + 2-stage polish and wax' },
  { name: '5-Step Exterior', price: 499.99, note: 'Full service + clay bar + diamond cut compound + wax + polish + paint seal protection' },
];

export default function HomePage() {
  return (
    <main>
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Splash Brothers Carwash" width={150} height={100} priority className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#included" className="hover:text-white transition">What's included</a>
            <a href="#locations" className="hover:text-white transition">Locations</a>
            <Link href="/signup" className="bg-white text-[var(--color-splash-navy)] px-5 py-2.5 rounded-full font-semibold hover:bg-[var(--color-splash-blue)] hover:text-white transition">
              Join Splash Pass
            </Link>
          </nav>
          <Link href="/signup" className="md:hidden bg-white text-[var(--color-splash-navy)] px-4 py-2 rounded-full text-sm font-semibold">
            Join
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-splash-navy)] text-white">
        {/* Background gradient + light bands evoking the tunnel */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#061826] via-[#0a1f3a] to-[#0a1928]" />
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(closest-side,rgba(29,142,224,0.45),transparent)]" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-splash-blue)]/60 to-transparent" />
          {/* tunnel light bars */}
          <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-[var(--color-splash-blue)]/60 to-transparent" />
          <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-[var(--color-splash-red)]/60 to-transparent" />
          <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute inset-x-0 top-2/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-0 animate-shimmer pointer-events-none" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-32 md:pt-48 md:pb-40">
          <p className="text-[var(--color-splash-blue)] tracking-[0.25em] text-xs md:text-sm font-semibold uppercase mb-6">
            Express tunnel · Member-first
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight max-w-4xl">
            Unlimited washes.
            <br />
            <span className="text-[var(--color-splash-blue)]">Unreal</span> light show.
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-white/80 max-w-2xl leading-relaxed">
            One monthly membership. Drive in any time, any location. Free vacuums always. No contract. Cancel by email 15 days before renewal. That's it.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-[var(--color-splash-red)] hover:bg-[var(--color-splash-red)]/90 text-white px-8 py-4 rounded-full text-lg font-bold tracking-wide shadow-[0_10px_40px_-8px_rgba(226,58,48,0.6)] transition"
            >
              Sign up today
              <span aria-hidden>→</span>
            </Link>
            <a
              href="#locations"
              className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              Find a location
            </a>
          </div>

          {/* Quick facts row */}
          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-3xl">
            <div>
              <dt className="text-white/50 text-sm">Locations</dt>
              <dd className="text-3xl md:text-4xl font-bold text-white">3</dd>
            </div>
            <div>
              <dt className="text-white/50 text-sm">Cars / day</dt>
              <dd className="text-3xl md:text-4xl font-bold text-white">200-600</dd>
            </div>
            <div>
              <dt className="text-white/50 text-sm">Free vacuums</dt>
              <dd className="text-3xl md:text-4xl font-bold text-white">Always</dd>
            </div>
            <div>
              <dt className="text-white/50 text-sm">Yelp avg</dt>
              <dd className="text-3xl md:text-4xl font-bold text-white">4.3★</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Customer quote band */}
      <section className="bg-white py-16 border-y border-black/5">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-2xl md:text-4xl font-semibold leading-snug tracking-tight text-[var(--color-splash-ink)]">
            <span className="text-[var(--color-splash-red)]">"</span>Come for the car wash. Stay for the light show.<span className="text-[var(--color-splash-red)]">"</span>
          </p>
          <p className="mt-4 text-sm text-black/50 tracking-wide uppercase">Actual customer review, Commerce City</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 md:py-32 bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-[var(--color-splash-blue-deep)] tracking-[0.25em] text-xs font-semibold uppercase mb-3">How it works</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Three steps. No app to download. No fobs.
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.n} className="relative bg-white rounded-3xl p-8 shadow-[0_2px_24px_-8px_rgba(8,29,47,0.12)] border border-black/5">
                <div className="text-[var(--color-splash-blue)] text-7xl font-black tracking-tighter leading-none">{step.n}</div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-black/65 text-lg leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="included" className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[var(--color-splash-blue-deep)] tracking-[0.25em] text-xs font-semibold uppercase mb-3">What's included</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
                The membership most car washes wish they could ship.
              </h2>
              <p className="mt-6 text-black/65 text-lg leading-relaxed max-w-lg">
                Splash Pass is the unlimited wash club. One license plate, one credit card, one fixed monthly charge. We don't sell add-ons at the kiosk. We don't trick you into upgrades.
              </p>
              <Link
                href="/signup"
                className="mt-8 inline-flex items-center gap-2 bg-[var(--color-splash-navy)] hover:bg-[var(--color-splash-blue-deep)] text-white px-7 py-3.5 rounded-full font-semibold transition"
              >
                Join Splash Pass <span aria-hidden>→</span>
              </Link>
            </div>
            <ul className="grid gap-6">
              {INCLUDED.map((item) => (
                <li key={item.title} className="flex gap-5 p-6 rounded-2xl border border-black/5 bg-[#f6f9fc]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-splash-blue)] text-white flex items-center justify-center font-bold text-lg">✓</div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-black/65 leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Wash Menu / Pricing */}
      <section id="menu" className="py-24 md:py-32 bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-[var(--color-splash-blue-deep)] tracking-[0.25em] text-xs font-semibold uppercase mb-3">Wash menu</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              From a quick express wash to a full detail.
            </h2>
            <p className="mt-6 text-black/65 text-lg">
              Splash Pass members get unlimited tunnel washes plus $20 off any full service package below.
            </p>
          </div>

          <div className="mt-16">
            <p className="text-sm font-bold tracking-wide text-[var(--color-splash-navy)] uppercase mb-6">Full Service Packages</p>
            <div className="grid md:grid-cols-3 gap-6">
              {FULL_SERVICE.map((tier) => (
                <div key={tier.name} className={`relative bg-white rounded-3xl p-8 border ${tier.popular ? 'border-[var(--color-splash-blue)] shadow-[0_15px_50px_-15px_rgba(29,142,224,0.3)]' : 'border-black/5 shadow-[0_2px_24px_-8px_rgba(8,29,47,0.08)]'}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-8 bg-[var(--color-splash-blue)] text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                      Most popular
                    </div>
                  )}
                  <h3 className="text-2xl font-black tracking-tight">{tier.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-5xl font-black">${tier.price.toFixed(2).split('.')[0]}</span>
                    <span className="text-2xl font-bold text-black/50">.{tier.price.toFixed(2).split('.')[1]}</span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-splash-blue-deep)] font-semibold">Members save $20</p>
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-black/75">
                        <span className="text-[var(--color-splash-blue)] flex-shrink-0 mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Ceramic add-on */}
          <div className="mt-12 relative overflow-hidden bg-gradient-to-br from-[var(--color-splash-ink)] to-[var(--color-splash-navy)] rounded-3xl p-10 text-white">
            <div className="absolute top-6 right-6 bg-[var(--color-splash-red)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              New
            </div>
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
              <div>
                <p className="text-[var(--color-splash-blue)] tracking-[0.25em] text-xs font-semibold uppercase mb-3">Ceramic add-on</p>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                  Amplify Kwik Coat. <span className="text-[var(--color-splash-blue)]">30% SiO2.</span>
                </h3>
                <p className="mt-3 text-white/75 text-lg max-w-2xl">
                  Highest SiO2 spray sealant on the market. 6+ months of ceramic protection, hydrophobic, super high gloss. Add to any wash.
                </p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-black">$5</div>
                <div className="text-white/60 text-sm">with any wash</div>
              </div>
            </div>
          </div>

          {/* Detail packages */}
          <div className="mt-16">
            <p className="text-sm font-bold tracking-wide text-[var(--color-splash-navy)] uppercase mb-6">Detail Packages</p>
            <div className="bg-white rounded-3xl border border-black/5 shadow-[0_2px_24px_-8px_rgba(8,29,47,0.08)] divide-y divide-black/5">
              {DETAIL_PACKAGES.map((pkg) => (
                <div key={pkg.name} className="grid md:grid-cols-[1fr_auto] gap-4 items-center p-6 md:p-8 hover:bg-[#f6f9fc] transition">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">{pkg.name}</h3>
                    <p className="mt-1 text-black/60">{pkg.note}</p>
                  </div>
                  <div className="text-3xl md:text-4xl font-black tabular-nums">${pkg.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-black/50">By appointment. Call your nearest location to book.</p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-24 md:py-32 bg-[var(--color-splash-navy)] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[radial-gradient(closest-side,rgba(29,142,224,0.4),transparent)]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[radial-gradient(closest-side,rgba(226,58,48,0.25),transparent)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-[var(--color-splash-blue)] tracking-[0.25em] text-xs font-semibold uppercase mb-3">Locations</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
                Three tunnels. Two states. <br />Same membership.
              </h2>
            </div>
            <p className="text-white/60 max-w-md">
              One Splash Pass works at every location. Use it where you live. Use it where you visit family. Same monthly rate.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div key={loc.city} className="relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
                {loc.flagship && (
                  <div className="absolute top-6 right-6 bg-[var(--color-splash-red)] text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                    Flagship
                  </div>
                )}
                <h3 className="text-2xl font-bold tracking-tight">{loc.city}</h3>
                <p className="mt-3 text-white/70 leading-relaxed">{loc.address}</p>
                <div className="mt-6 space-y-2 text-sm">
                  <p className="text-white/50">Hours</p>
                  <p className="text-white">{loc.hours}</p>
                </div>
                {loc.phone && (
                  <div className="mt-4 space-y-2 text-sm">
                    <p className="text-white/50">Phone</p>
                    <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="text-[var(--color-splash-blue)] hover:text-white transition">{loc.phone}</a>
                  </div>
                )}
                {loc.rating && (
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2">
                    <span className="text-2xl font-bold">{loc.rating}</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-white/50 text-sm">· {loc.reviews} Yelp reviews</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
            Sign up today.
            <br />
            <span className="text-[var(--color-splash-blue)]">Wash tomorrow.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-black/60 max-w-2xl mx-auto">
            No contract. No setup fee. Just unlimited washes and free vacuums on the same plate every month.
          </p>
          <Link
            href="/signup"
            className="mt-10 inline-flex items-center gap-2 bg-[var(--color-splash-red)] hover:bg-[var(--color-splash-red)]/90 text-white px-10 py-5 rounded-full text-xl font-bold shadow-[0_15px_50px_-10px_rgba(226,58,48,0.5)] transition"
          >
            Join Splash Pass <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-splash-ink)] text-white/60 py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Splash Brothers Carwash" width={100} height={66} className="opacity-70" />
          </div>
          <p>© {new Date().getFullYear()} Splash Brothers Carwash. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:info@splashbrotherscarwash.com" className="hover:text-white transition">info@splashbrotherscarwash.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
