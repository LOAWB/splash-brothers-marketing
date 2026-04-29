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

const EXPRESS = [
  { name: 'Deluxe', price: 17.99, features: ['Exterior car wash', 'Wheel cleaner', 'Bug prep', 'Polish', 'Tire shine', 'Towel dry'] },
  { name: 'Ultimate', price: 19.99, popular: true, badge: 'With Rain-X', features: ['Everything in Deluxe', 'Rain-X polish'] },
  { name: 'Ceramic Seal + Protect', price: 24.99, badge: 'Armor All', features: ['Everything in Ultimate', 'Ceramic seal coating'] },
];

const SUNDAY_EXPRESS = [
  { name: 'Basic', price: 13.99, features: ['Exterior car wash', 'Free self vacuum'] },
  { name: 'Deluxe', price: 16.99, features: ['Exterior car wash', 'Wheel cleaner', 'Polish', 'High pressure rinse', 'Free self vacuum'] },
  { name: 'Ultimate', price: 19.99, popular: true, badge: 'With Rain-X', features: ['Everything in Deluxe', 'Rain-X polish'] },
  { name: 'Ceramic Seal + Protect', price: 24.99, badge: 'Armor All', features: ['Everything in Ultimate', 'Ceramic seal coating'] },
];

const FULL_SERVICE = [
  { name: 'Gold', price: 46.99, midPrice: 48.99, fullPrice: 49.99, features: ['Full service car wash', 'Wheel cleaner', 'Polish', 'Windows', 'Interior vacuum', 'Interior + door jamb wipe down', 'Tire shine'] },
  { name: 'Platinum', price: 56.99, midPrice: 58.99, fullPrice: 59.99, popular: true, features: ['Everything in Gold', 'Rain-X polish', 'Dashboard dressing', 'Exterior dressing', 'Air freshener'] },
  { name: 'Super Platinum', price: 89.99, midPrice: 99.99, fullPrice: 109.99, features: ['Everything in Platinum', '100% Hand Wax'] },
];

const DETAIL_PACKAGES = [
  { name: 'Leather Treatment', price: 169.99, midPrice: 179.99, fullPrice: 189.99, note: 'Platinum full service + clean and condition leather' },
  { name: 'Clay Bar + Complete Hand Wax', price: 249.99, midPrice: 259.99, fullPrice: 269.99, note: 'Full service + clay bar + 100% hand wax' },
  { name: 'Interior Detail', price: 349.99, midPrice: 359.99, fullPrice: 369.99, note: 'Full service + shampoo carpets, mats, seats + dash, console, panels' },
  { name: 'Exterior Polish', price: 399.99, midPrice: 419.99, fullPrice: 449.99, note: 'Full service + clay bar + 2-stage polish and wax' },
  { name: '5-Step Exterior', price: 499.99, midPrice: 519.99, fullPrice: 549.99, note: 'Full service + clay bar + diamond cut compound + wax + polish + paint seal' },
];

export default function HomePage() {
  return (
    <main>
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Image src="/logo.png" alt="Splash Brothers Carwash" width={130} height={87} priority />
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/90">
            <a href="#menu" className="hover:text-white transition">Wash menu</a>
            <a href="#deals" className="hover:text-white transition">Deals</a>
            <a href="#locations" className="hover:text-white transition">Locations</a>
            <Link href="/careers" className="hover:text-white transition">Careers</Link>
            <Link href="/signup" className="bg-white text-[var(--color-splash-navy)] px-5 py-2 rounded-full font-semibold hover:bg-[var(--color-splash-blue)] hover:text-white transition">
              Join Splash Pass
            </Link>
          </nav>
          <Link href="/signup" className="md:hidden bg-white text-[var(--color-splash-navy)] px-4 py-2 rounded-full text-sm font-semibold">Join</Link>
        </div>
      </header>

      {/* Hero - clean solid */}
      <section className="relative bg-[var(--color-splash-navy)] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f3a] via-[var(--color-splash-navy)] to-[#0a1928]" />
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

      {/* Deals strip - solid red, no faded overlays */}
      <section id="deals" className="py-12 md:py-14 bg-[var(--color-splash-red)] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-white/80 tracking-[0.2em] text-xs font-bold uppercase mb-2">Current deals</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.05]">
                Buy 3 of any wash, get 1 free.
              </h2>
              <p className="mt-3 text-white/85">
                The free wash gets loaded onto a Splash Brothers gift card. Stack them up for the family or stuff stockings. Any package, any value. Available at the kiosk or by phone.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:max-w-xs w-full">
              <div className="bg-white/15 backdrop-blur border border-white/25 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-white/70">Members save</p>
                <p className="text-2xl font-black">$20 off full service</p>
              </div>
              <div className="bg-white/15 backdrop-blur border border-white/25 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-white/70">Add ceramic for</p>
                <p className="text-2xl font-black">$5 any wash</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-white/65 text-xs">More deals at the kiosk. Stop in or call your nearest location.</p>
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

          {/* Express exterior tier */}
          <p className="text-xs font-bold tracking-wide text-[var(--color-splash-navy)] uppercase mb-4">Express Exterior <span className="font-medium text-black/45 normal-case ml-2">drive thru, no interior, weekday menu</span></p>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {EXPRESS.map((tier) => (
              <div key={tier.name} className={`relative rounded-2xl p-6 border ${tier.popular ? 'border-[var(--color-splash-blue)] bg-[var(--color-splash-blue)]/5' : 'border-black/10 bg-white'}`}>
                {tier.popular && <div className="absolute -top-2.5 left-6 bg-[var(--color-splash-blue)] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Most popular</div>}
                {tier.badge && <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-[var(--color-splash-red)] bg-[var(--color-splash-red)]/10 border border-[var(--color-splash-red)]/25 px-2 py-0.5 rounded-full">{tier.badge}</div>}
                <h3 className="text-xl font-black tracking-tight">{tier.name}</h3>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-4xl font-black">${tier.price.toFixed(2).split('.')[0]}</span>
                  <span className="text-xl font-bold text-black/50">.{tier.price.toFixed(2).split('.')[1]}</span>
                </div>
                <p className="mt-0.5 text-xs text-black/55">Per visit</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-black/75"><span className="text-[var(--color-splash-blue)] flex-shrink-0">✓</span><span>{f}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Sunday self-service section */}
          <div className="mb-10 rounded-2xl border border-[var(--color-splash-blue)]/20 bg-gradient-to-br from-[var(--color-splash-blue)]/5 to-white p-6 md:p-7">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <p className="text-xs font-bold tracking-wide text-[var(--color-splash-navy)] uppercase">Sunday Express, Self Service</p>
              <span className="bg-[var(--color-splash-red)] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">San Leandro only</span>
            </div>
            <p className="text-black/65 mb-5">Sundays we open the vacuum bays and drop the price floor. You wash, you vacuum, you go. Free self-vacuum included on every Sunday Express tier.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {SUNDAY_EXPRESS.map((tier) => (
                <div key={tier.name} className={`relative rounded-xl p-4 border ${tier.popular ? 'border-[var(--color-splash-blue)] bg-white' : 'border-black/10 bg-white'}`}>
                  {tier.popular && <div className="absolute -top-2 left-4 bg-[var(--color-splash-blue)] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Popular</div>}
                  {tier.badge && <div className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider text-[var(--color-splash-red)]">{tier.badge}</div>}
                  <h4 className="font-black text-base">{tier.name}</h4>
                  <div className="mt-0.5 flex items-baseline gap-0.5">
                    <span className="text-2xl font-black">${tier.price.toFixed(2).split('.')[0]}</span>
                    <span className="text-base font-bold text-black/50">.{tier.price.toFixed(2).split('.')[1]}</span>
                  </div>
                  <ul className="mt-3 space-y-1 text-xs text-black/70">
                    {tier.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-black/50">San Leandro only. <Link href="/signup" className="text-[var(--color-splash-blue-deep)] font-semibold hover:underline">Skip the math and go unlimited for $39.99/mo</Link>.</p>
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
                <div className="mt-0.5 text-[11px] text-black/55 leading-tight">
                  <p>${tier.fullPrice.toFixed(2)} full-size vehicles</p>
                  <p>${tier.midPrice.toFixed(2)} mid-size vehicles</p>
                </div>
                <p className="mt-1 text-xs text-[var(--color-splash-blue-deep)] font-semibold">Members save $20</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-black/75"><span className="text-[var(--color-splash-blue)] flex-shrink-0">✓</span><span>{f}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Ceramic Seal feature card */}
          <div className="mt-6 relative bg-gradient-to-br from-[var(--color-splash-ink)] via-[var(--color-splash-navy)] to-[#0a1f3a] text-white rounded-2xl overflow-hidden">
            <div className="absolute top-4 right-4 bg-[var(--color-splash-red)] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full z-10">New</div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <p className="text-[var(--color-splash-blue)] tracking-[0.25em] text-xs font-bold uppercase">Ceramic Seal Add-On</p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/55">Armor All Professional</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-[1.05]">
                Longer-lasting shine and <span className="text-[var(--color-splash-blue)]">protection</span>.
              </h3>
              <p className="mt-3 text-white/75 max-w-2xl">
                Highest SiO2 spray sealant on the market. 6+ months of ceramic protection. Hydrophobic. Hand-applied at the kiosk for $5 on any wash.
              </p>

              <div className="mt-7 grid sm:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-[var(--color-splash-blue)] text-[10px] font-bold uppercase tracking-widest">Shine</p>
                  <p className="mt-1 font-bold leading-snug">Magnifies the shine for a like-new appearance</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-[var(--color-splash-blue)] text-[10px] font-bold uppercase tracking-widest">Armor</p>
                  <p className="mt-1 font-bold leading-snug">Acts as durable armor to protect the vehicle</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-[var(--color-splash-blue)] text-[10px] font-bold uppercase tracking-widest">Bond</p>
                  <p className="mt-1 font-bold leading-snug">Forms a strong bond to the vehicle surface</p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-baseline justify-between gap-3 pt-5 border-t border-white/10">
                <div>
                  <span className="text-4xl font-black">$5</span>
                  <span className="ml-2 text-white/60 text-sm uppercase tracking-wide">with any wash</span>
                </div>
                <p className="text-white/55 text-xs uppercase tracking-widest">Try it today</p>
              </div>
            </div>
          </div>

          {/* Detail packages */}
          <div className="mt-9 flex items-end justify-between gap-3 mb-4">
            <p className="text-xs font-bold tracking-wide text-[var(--color-splash-navy)] uppercase">Detail Packages</p>
            <Link href="/book" className="text-sm font-semibold text-[var(--color-splash-blue-deep)] hover:text-[var(--color-splash-navy)] transition">
              Book any detail online <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="bg-white rounded-2xl border border-black/10 divide-y divide-black/5">
            {DETAIL_PACKAGES.map((pkg) => (
              <Link key={pkg.name} href={`/book?package=${pkg.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="grid md:grid-cols-[1fr_auto_auto] gap-3 items-center p-5 hover:bg-[#f6f9fc] transition group">
                <div>
                  <h3 className="text-base md:text-lg font-bold tracking-tight">{pkg.name}</h3>
                  <p className="text-sm text-black/60">{pkg.note}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-black tabular-nums">${pkg.price.toFixed(2)}</div>
                  <div className="text-[11px] text-black/55 leading-tight">
                    <p>${pkg.fullPrice.toFixed(2)} full-size</p>
                    <p>${pkg.midPrice.toFixed(2)} mid-size</p>
                  </div>
                </div>
                <div className="text-sm font-bold text-[var(--color-splash-blue)] group-hover:text-[var(--color-splash-blue-deep)]">Book →</div>
              </Link>
            ))}
          </div>
          <p className="mt-3 text-xs text-black/50">Pick a date and time window online. We confirm the exact appointment by phone same business day.</p>
        </div>
      </section>

      {/* Locations - tighter, clean solid */}
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

      {/* Final CTA - clean white */}
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
          <div className="flex items-center gap-5">
            <Link href="/cancel" className="hover:text-white transition">Cancel membership</Link>
            <a href="mailto:info@splashbrotherscarwash.com" className="hover:text-white transition">info@splashbrotherscarwash.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
