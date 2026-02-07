'use client'


const requests = [
  { id: 1, type: 'Water', location: 'Feni', time: '2m ago' },
  { id: 2, type: 'Medical', location: 'Comilla', time: '5m ago' },
  { id: 3, type: 'Boat', location: 'Noakhali', time: '12m ago' },
  { id: 4, type: 'Food', location: 'Feni', time: '15m ago' },
  { id: 5, type: 'Shelter', location: 'Lakshmipur', time: '22m ago' },
  { id: 6, type: 'Water', location: 'Mirsharai', time: '30m ago' },
]

export function RecentRequestsTile() {
  return (
    <div className="w-full h-full bg-white p-6 flex flex-col relative overflow-hidden">
      <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-4 sticky top-0 bg-white z-10">
        Recent Requests
      </h3>
      <div className="flex-1 overflow-y-auto space-y-4 scrollbar-hide">
        {requests.map((req) => (
          <div key={req.id} className="group flex items-center justify-between py-2 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex flex-col">
              <span className="font-semibold text-slate-800 text-sm group-hover:text-black">
                Need {req.type}
              </span>
              <span className="text-xs text-slate-500 group-hover:text-slate-600">
                {req.location}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400 group-hover:text-slate-500">
              {req.time}
            </span>
          </div>
        ))}
      </div>
       <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  )
}
