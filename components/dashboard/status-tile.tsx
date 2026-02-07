'use client'


export function StatusTile() {
  return (
    <div className="w-full h-full bg-slate-900 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
      
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="relative">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-20" />
        </div>
        <div className="text-center">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">System Status</p>
          <p className="text-white font-bold text-lg tracking-tight mt-1">Operational</p>
        </div>
      </div>
    </div>
  )
}
