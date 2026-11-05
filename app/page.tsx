const bookingNumbers = [
  { label: "Bookings", number: "07030863809" },
  { label: "Reservations", number: "08033785178" },
  { label: "Hotel enquiries", number: "07038208980" }
];

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "@id": "https://bways.daizlab.store/#hotel",
  name: "B-Ways Hotel",
  url: "https://bways.daizlab.store/",
  description:
    "B-Ways Hotel offers welcoming, affordable hospitality in Ibadan, Nigeria, with room rates ranging from ₦8,000 to ₦15,000. Guests can contact the hotel directly to enquire about room options and availability.",
  priceRange: "₦8,000–₦15,000 per night",
  telephone: bookingNumbers[0].number,
  contactPoint: bookingNumbers.map((item) => ({
    "@type": "ContactPoint",
    telephone: item.number,
    contactType: item.label
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ibadan",
    addressRegion: "Oyo State",
    addressCountry: "NG"
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Bar",
      value: true
    }
  ]
};

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path d="M6.1 2.8h2.1l1.1 3.1-1.5 1.4a12 12 0 0 0 4.9 4.9l1.4-1.5 3.1 1.1v2.1c0 .8-.7 1.5-1.5 1.5A13.8 13.8 0 0 1 4.6 4.3c0-.8.7-1.5 1.5-1.5Z" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />

      <header className="absolute inset-x-0 top-0 z-20 text-white">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <a href="#home" aria-label="B-Ways Hotel home" className="group flex items-center gap-3">
            <span className="display-font flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-xl">B</span>
            <span>
              <span className="block text-sm font-semibold tracking-[.24em]">B-WAYS</span>
              <span className="mt-0.5 block text-[9px] tracking-[.31em] text-white/70">HOTEL · IBADAN</span>
            </span>
          </a>
          <div className="hidden items-center gap-9 text-xs tracking-[.13em] text-white/85 md:flex">
            <a className="hover:text-white" href="#stay">THE STAY</a>
            <a className="hover:text-white" href="#experience">EXPERIENCE</a>
            <a className="hover:text-white" href="#location">LOCATION</a>
          </div>
          <a href="#book" className="rounded-full border border-white/60 px-5 py-3 text-[10px] font-semibold tracking-[.16em] transition hover:bg-white hover:text-stone-900">
            BOOK A ROOM
          </a>
        </nav>
      </header>

      <main id="home">
        <section aria-labelledby="hero-title" className="hero-image relative flex min-h-[720px] items-end overflow-hidden text-white sm:min-h-[780px] lg:min-h-[850px]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c120d]/55 via-transparent to-black/15" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-20 pt-40 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:px-12 lg:pb-28">
            <div className="max-w-3xl">
              <p className="eyebrow mb-7 text-[10px] font-semibold text-[#e7c79d]">A WARMER WAY TO STAY · IBADAN</p>
              <h1 id="hero-title" className="display-font max-w-3xl text-[clamp(3.5rem,9vw,7.8rem)] leading-[.94] tracking-[-.055em]">
                Room to <em className="font-normal text-[#e8cba6]">breathe.</em>
                <br />Space to unwind.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
                Find your own pace at B-Ways Hotel — a welcoming Ibadan stay for rest, good company and a little room to reset.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#book" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#f4e9d9] px-8 text-xs font-bold tracking-[.15em] text-[#382319] transition hover:bg-white">
                  ENQUIRE ABOUT A ROOM <ArrowUpRight />
                </a>
                <a href="#experience" className="outline-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-xs font-semibold tracking-[.15em] text-white">
                  DISCOVER B-WAYS
                </a>
              </div>
            </div>
            <aside className="border-t border-white/30 pt-6 lg:ml-auto lg:w-64 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="eyebrow text-[9px] text-white/60">ROOM RATES</p>
              <p className="display-font mt-3 text-4xl">₦8,000 <span className="text-xl text-[#e8cba6]">—</span> ₦15,000</p>
              <p className="mt-2 text-xs leading-6 text-white/65">Per night · Contact the hotel to confirm room options and current availability.</p>
            </aside>
          </div>
          <div className="absolute bottom-0 left-5 hidden -translate-y-8 items-center gap-3 text-[9px] tracking-[.25em] text-white/60 sm:flex lg:left-12">
            <span className="h-px w-10 bg-white/50" /> HOSPITALITY, AT YOUR PACE
          </div>
        </section>

        <section id="stay" aria-labelledby="stay-title" className="bg-[#f7f3eb] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow text-[10px] font-semibold text-[#9a744d]">THE B-WAYS STAY</p>
              <h2 id="stay-title" className="display-font mt-6 text-5xl leading-[1.04] tracking-[-.04em] sm:text-6xl">
                Comfort that feels <em className="font-normal text-[#98734f]">within reach.</em>
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-[#75675d]">
                A good stay is about more than a room. It is the ease of settling in, the freedom to slow down and knowing you have a place to return to.
              </p>
              <a href="#book" className="mt-9 inline-flex items-center gap-3 text-xs font-bold tracking-[.13em] text-[#5a3828]">
                ASK ABOUT ROOMS <ArrowUpRight />
              </a>
            </div>
            <div className="soft-shadow grid overflow-hidden rounded-[2rem] bg-[#fffdf8] sm:grid-cols-[1fr_1fr]">
              <div className="min-h-[280px] bg-[url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center sm:min-h-[390px]" role="img" aria-label="A calm, warmly furnished hotel room" />
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="eyebrow text-[9px] font-semibold text-[#9a744d]">STRAIGHTFORWARD PRICING</p>
                <p className="display-font mt-5 text-5xl tracking-[-.05em] text-[#4a3022]">₦8k–₦15k</p>
                <p className="mt-2 text-xs text-[#8c7c70]">Room rates per night</p>
                <div className="my-8 h-px bg-[#e8dfd3]" />
                <p className="text-sm leading-7 text-[#75675d]">
                  Choose a stay that works for your plans and your budget. Call our team to discuss available room options, rates and booking details.
                </p>
                <a href="#book" className="primary-button mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-[10px] font-bold tracking-[.15em]">
                  CHECK ROOM AVAILABILITY
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title" className="bg-[#2b1c15] px-5 py-24 text-[#f7f3eb] sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="eyebrow text-[10px] font-semibold text-[#d2ad7f]">MORE THAN A PLACE TO SLEEP</p>
                <h2 id="experience-title" className="display-font mt-6 text-5xl leading-[1.04] tracking-[-.04em] sm:text-6xl">
                  Find your <em className="font-normal text-[#d2ad7f]">kind</em> of quiet.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-white/60">
                Whether you are taking a pause, meeting someone or making space to think, B-Ways invites you to enjoy the moment at your own pace.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="bar-image flex min-h-[430px] flex-col justify-end rounded-[1.7rem] p-8 sm:p-10">
                <p className="eyebrow text-[9px] font-semibold text-[#f0d5b1]">THE BAR</p>
                <h3 className="display-font mt-3 text-4xl">Good evenings, easy company.</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/80">Unwind and enjoy the bar atmosphere. A place to ease out of the day and enjoy time with good company.</p>
              </article>
              <article className="lounge-image flex min-h-[430px] flex-col justify-end rounded-[1.7rem] p-8 sm:p-10">
                <p className="eyebrow text-[9px] font-semibold text-[#f0d5b1]">SLOW DOWN & RESET</p>
                <h3 className="display-font mt-3 text-4xl">A little space for yourself.</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/80">Take a moment for reading, focused work or simply relaxing away from the rush of the day.</p>
              </article>
            </div>
            <p className="mt-5 text-[10px] leading-5 text-white/40">Atmosphere imagery is illustrative. Please contact the hotel to confirm facilities and available spaces.</p>
          </div>
        </section>

        <section id="location" aria-labelledby="location-title" className="bg-[#eee6da] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow text-[10px] font-semibold text-[#9a744d]">YOUR IBADAN STOP</p>
              <h2 id="location-title" className="display-font mt-5 text-5xl tracking-[-.04em] sm:text-6xl">A welcoming pause in <em className="font-normal text-[#98734f]">Ibadan.</em></h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#75675d]">
                Planning a visit or looking for a comfortable place to stay in Ibadan? Speak with B-Ways directly for directions, room details and booking assistance.
              </p>
              <p className="mt-5 text-xs font-semibold tracking-[.12em] text-[#5a3828]">IBADAN, OYO STATE, NIGERIA</p>
            </div>
            <a href="#book" className="primary-button inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-8 text-[10px] font-bold tracking-[.15em]">
              CONTACT THE HOTEL <ArrowUpRight />
            </a>
          </div>
        </section>

        <section id="book" aria-labelledby="book-title" className="bg-[#f7f3eb] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#fffdf8] soft-shadow">
            <div className="grid lg:grid-cols-[.9fr_1.1fr]">
              <div className="bg-[#5a3828] p-8 text-white sm:p-12 lg:p-16">
                <p className="eyebrow text-[10px] font-semibold text-[#e1c39e]">MAKE YOUR ENQUIRY</p>
                <h2 id="book-title" className="display-font mt-6 text-5xl leading-[1.05] tracking-[-.04em] sm:text-6xl">Your room is a conversation away.</h2>
                <p className="mt-7 max-w-sm text-sm leading-7 text-white/70">
                  Call the hotel to ask about room availability, current rates, directions and the best option for your stay.
                </p>
                <div className="mt-10 border-t border-white/20 pt-6">
                  <p className="eyebrow text-[9px] text-white/50">ROOM RATE GUIDE</p>
                  <p className="display-font mt-3 text-3xl">₦8,000 — ₦15,000</p>
                  <p className="mt-2 text-xs text-white/55">Per night · Confirm the current rate by phone.</p>
                </div>
              </div>
              <div className="p-8 sm:p-12 lg:p-16">
                <p className="eyebrow text-[10px] font-semibold text-[#9a744d]">DIRECT BOOKING LINES</p>
                <h3 className="display-font mt-4 text-3xl text-[#3d291e]">Speak with our team.</h3>
                <div className="mt-8 divide-y divide-[#e8dfd3]">
                  {bookingNumbers.map((item) => (
                    <div key={item.number} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[9px] font-semibold tracking-[.17em] text-[#9a897c]">{item.label.toUpperCase()}</p>
                        <p className="mt-2 text-xl font-medium tracking-[.04em] text-[#3d291e]">{item.number}</p>
                      </div>
                      <a
                        href={`tel:${item.number}`}
                        aria-label={`Call B-Ways Hotel at ${item.number}`}
                        className="primary-button inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full px-5 text-[10px] font-bold tracking-[.12em] sm:self-auto"
                      >
                        <PhoneIcon /> CALL NOW
                      </a>
                    </div>
                  ))}
                </div>
                <p className="mt-7 text-xs leading-6 text-[#8b7d72]">For a faster enquiry, have your preferred check-in date, number of guests and length of stay ready when you call.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#21150f] px-5 py-10 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <a href="#home" className="display-font text-3xl tracking-[.12em]">B-WAYS</a>
            <p className="mt-2 text-[9px] tracking-[.28em] text-white/45">HOTEL · IBADAN, NIGERIA</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-xs text-white/65">A warmer way to stay.</p>
            <p className="mt-2 text-[10px] text-white/35">© {new Date().getFullYear()} B-Ways Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
