'use client'

export function LiveTicker() {
  const updates = [
    'CHITTAGONG: -500L Water Needed',
    'FENI: +2 Trucks Arrived',
    'LAKSHMIPUR: Critical Meds Needed',
    'NOAKHALI: Food Distribution 85% Complete',
    'DHAKA: 12 Relief Centers Active',
    'SYLHET: Emergency Shelter +40 Units',
  ]

  // Duplicate array for seamless loop
  const marqueeItems = [...updates, ...updates]

  return (
    <section className="w-full bg-slate-900 text-white py-4 overflow-hidden border-y-2 border-slate-800">
      <div className="relative flex items-center">
        <div className="whitespace-nowrap marquee">
          <div className="flex gap-8 md:gap-12">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 shrink-0">
                <span className="font-mono text-sm md:text-base font-bold text-slate-300">
                  {item}
                </span>
                <div className="w-1 h-6 bg-amber-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
