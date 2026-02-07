"use client";

import {
    CheckCircle2,
    Clock,
    Download,
    Droplets,
    FileText,
    Filter,
    Flame,
    Info,
    MoreHorizontal,
    Phone,
    Ship,
    Siren,
    TriangleAlert,
    Users,
} from "lucide-react";

export default function CriticalZonesPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-theme(spacing.16))] lg:h-[calc(100vh-theme(spacing.8))] overflow-hidden bg-white -m-4 lg:-m-8">
      {/* Header & Global Alert */}
      <header className="flex-shrink-0 border-b border-slate-200">
        <div className="bg-red-50 px-6 py-2 flex items-center justify-between border-b border-red-100">
          <div className="flex items-center gap-2 text-red-700">
            <Siren className="animate-pulse" size={18} />
            <span className="text-xs font-bold tracking-tight uppercase">
              Status: Red Alert — 3 Zones Unreachable
            </span>
          </div>
          <div className="text-[10px] font-mono text-red-600/80">
            UPDATED: 10:42 AM
          </div>
        </div>
        <div className="px-6 py-4 flex items-center justify-between bg-white">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">
              Critical Zone Analysis
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Real-time threat assessment for Rapid Response Team deployment.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="h-8 px-3 border border-slate-200 rounded text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-2">
              <Filter size={14} />
              Filter
            </button>
            <button className="h-8 px-3 bg-slate-900 text-white rounded text-xs font-medium hover:bg-slate-800 flex items-center gap-2 shadow-sm">
              <Download size={14} />
              Export Report
            </button>
          </div>
        </div>
      </header>

      {/* Split View Content */}
      <div className="flex-1 flex flex-row overflow-hidden">
        {/* Left: Risk Matrix & Gap Analysis (Scrollable) */}
        <div className="flex-1 overflow-y-auto bg-slate-50/50 p-6 relative">
            {/* Grid Pattern Background */}
             <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: `linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                opacity: 0.5,
                zIndex: 0
             }}></div>

          <div className="relative z-10">
            {/* Section: Hotspot Zones Grid */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <Flame className="text-orange-500" size={18} />
                  Active Hotspots
                </h2>

                {/* Tooltip for Algorithm */}
                <div className="relative group cursor-help">
                  <div className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800">
                    <Info size={14} />
                    <span>Severity Logic</span>
                  </div>
                  {/* Tooltip Body */}
                  <div className="absolute right-0 top-6 w-64 p-3 bg-slate-900 text-white rounded-lg shadow-xl z-50 text-[10px] leading-relaxed border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <p className="font-semibold text-slate-300 mb-1">
                      Algorithm Calculation:
                    </p>
                    <ul className="list-disc pl-3 space-y-1 text-slate-400">
                      <li>Time since relief (&gt;24h = +30)</li>
                      <li>Water Level trend (+20 per cm/hr)</li>
                      <li>Unfulfilled Critical Requests (+1 per req)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Card 1: Critical (Feni Sadar) */}
                <div className="bg-white rounded-lg border border-red-200 shadow-sm p-5 hover:shadow-md transition-shadow relative overflow-hidden group cursor-pointer ring-1 ring-red-100">
                  <div className="absolute top-0 right-0 p-4">
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-bold text-red-600 tracking-tighter">
                        98
                      </span>
                      <span className="text-[9px] font-mono text-red-400 uppercase tracking-widest">
                        Severity
                      </span>
                    </div>
                  </div>

                  <div className="pr-12">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Feni Sadar
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-red-50 text-red-700 border border-red-100">
                        <Ship className="mr-1" size={10} />
                        BOAT ONLY
                      </span>
                    </div>
                  </div>

                  {/* Sparkline (Velocity) */}
                  <div className="mt-6 mb-2">
                    <div className="flex justify-between items-end text-[10px] text-slate-400 mb-1">
                      <span>Request Velocity</span>
                      <span className="text-red-600 font-medium">
                        High / Increasing
                      </span>
                    </div>
                    <svg
                      viewBox="0 0 100 25"
                      className="w-full h-8 stroke-red-500 fill-none stroke-2 overflow-visible"
                    >
                      <path
                        d="M0 20 L 10 18 L 20 22 L 30 15 L 40 12 L 50 18 L 60 10 L 70 5 L 80 8 L 90 2 L 100 0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                      <circle
                        cx="100"
                        cy="0"
                        r="2"
                        className="fill-red-500 animate-[pulse-red_2s_infinite]"
                      >
                         <style jsx>{`
                              @keyframes pulse-red {
                                0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
                                70% { box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
                                100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
                            }
                         `}</style>
                      </circle>
                    </svg>
                  </div>

                  <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Clock size={12} />
                        Last Contact
                      </span>
                      <span className="font-mono text-red-600 font-medium">
                        14h ago
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Droplets size={12} />
                        Water Level
                      </span>
                      <span className="font-mono text-slate-900">
                        +2cm/hr <span className="text-red-500">↑</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <FileText size={12} />
                        Pending Reports
                      </span>
                      <span className="font-mono text-slate-900">45</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: High (Mirsharai) */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md hover:border-slate-300 transition-all cursor-pointer">
                  <div className="absolute top-0 right-0 p-4">
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-bold text-orange-500 tracking-tighter">
                        76
                      </span>
                      <span className="text-[9px] font-mono text-orange-300 uppercase tracking-widest">
                        Severity
                      </span>
                    </div>
                  </div>

                  <div className="pr-12">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Mirsharai
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-orange-50 text-orange-700 border border-orange-100">
                        <TriangleAlert className="mr-1" size={10} />
                        PARTIAL ACCESS
                      </span>
                    </div>
                  </div>

                  {/* Sparkline (Velocity) */}
                  <div className="mt-6 mb-2">
                    <div className="flex justify-between items-end text-[10px] text-slate-400 mb-1">
                      <span>Request Velocity</span>
                      <span className="text-orange-600 font-medium">Steady</span>
                    </div>
                    <svg
                      viewBox="0 0 100 25"
                      className="w-full h-8 stroke-orange-400 fill-none stroke-2 overflow-visible"
                    >
                      <path
                        d="M0 15 L 15 15 L 30 18 L 45 10 L 60 12 L 75 12 L 90 8 L 100 8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                      <circle cx="100" cy="8" r="2" className="fill-orange-400"></circle>
                    </svg>
                  </div>

                  <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Clock size={12} />
                        Last Contact
                      </span>
                      <span className="font-mono text-slate-900 font-medium">
                        2h ago
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Droplets size={12} />
                        Water Level
                      </span>
                      <span className="font-mono text-slate-900">
                        Stable <span className="text-slate-400">-</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <FileText size={12} />
                        Pending Reports
                      </span>
                      <span className="font-mono text-slate-900">12</span>
                    </div>
                  </div>
                </div>

                {/* Card 3: Moderate (Senbagh) */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md hover:border-slate-300 transition-all cursor-pointer opacity-80">
                  <div className="absolute top-0 right-0 p-4">
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-bold text-slate-400 tracking-tighter">
                        42
                      </span>
                      <span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest">
                        Severity
                      </span>
                    </div>
                  </div>

                  <div className="pr-12">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Senbagh
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                        <CheckCircle2 className="mr-1" size={10} />
                        ROAD OPEN
                      </span>
                    </div>
                  </div>

                  {/* Sparkline (Velocity) */}
                  <div className="mt-6 mb-2">
                    <div className="flex justify-between items-end text-[10px] text-slate-400 mb-1">
                      <span>Request Velocity</span>
                      <span className="text-slate-600 font-medium">Low</span>
                    </div>
                    <svg
                      viewBox="0 0 100 25"
                      className="w-full h-8 stroke-slate-300 fill-none stroke-2 overflow-visible"
                    >
                      <path
                        d="M0 20 L 20 22 L 40 21 L 60 23 L 80 20 L 100 22"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                      <circle cx="100" cy="22" r="2" className="fill-slate-300"></circle>
                    </svg>
                  </div>

                  <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Clock size={12} />
                        Last Contact
                      </span>
                      <span className="font-mono text-slate-900 font-medium">
                        10m ago
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 flex items-center gap-1.5">
                         <Droplets size={12} />
                        Water Level
                      </span>
                      <span className="font-mono text-slate-900">
                        -1cm/hr <span className="text-emerald-500">↓</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <FileText size={12} />
                        Pending Reports
                      </span>
                      <span className="font-mono text-slate-900">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Gap Analysis Table */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden mb-8">
              <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-sm font-semibold text-slate-900">
                  Gap Analysis (Needs vs. Dispatched)
                </h2>
                <button className="text-slate-400 hover:text-slate-900">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-xs text-slate-500 uppercase tracking-wide font-medium">
                    <th className="px-5 py-3 font-medium">Target Zone</th>
                    <th className="px-5 py-3 font-medium">Resource Need</th>
                    <th className="px-5 py-3 font-medium">Dispatched</th>
                    <th className="px-5 py-3 font-medium">Gap Analysis</th>
                    <th className="px-5 py-3 font-medium text-right">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  <tr className="hover:bg-slate-50/50 group">
                    <td className="px-5 py-3 font-medium text-slate-900">
                      Noakhali Sadar
                    </td>
                    <td className="px-5 py-3 text-slate-600">5,000L Water</td>
                    <td className="px-5 py-3 text-slate-600">1,200L</td>
                    <td className="px-5 py-3 font-mono font-medium text-red-600">
                      -3,800L
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className="inline-block w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <span className="block h-full w-1/4 bg-red-500 rounded-full"></span>
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 group">
                    <td className="px-5 py-3 font-medium text-slate-900">
                      Feni Sadar
                    </td>
                    <td className="px-5 py-3 text-slate-600">
                      2,000 Pkts Dry Food
                    </td>
                    <td className="px-5 py-3 text-slate-600">500 Pkts</td>
                    <td className="px-5 py-3 font-mono font-medium text-red-600">
                      -1,500 Pkts
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className="inline-block w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <span className="block h-full w-1/3 bg-orange-400 rounded-full"></span>
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 group">
                    <td className="px-5 py-3 font-medium text-slate-900">
                      Chauddagram
                    </td>
                    <td className="px-5 py-3 text-slate-600">100 Tents</td>
                    <td className="px-5 py-3 text-slate-600">95 Tents</td>
                    <td className="px-5 py-3 font-mono font-medium text-emerald-600">
                      -5
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className="inline-block w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <span className="block h-full w-[95%] bg-emerald-500 rounded-full"></span>
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 group">
                    <td className="px-5 py-3 font-medium text-slate-900">
                      Daganbhuiyan
                    </td>
                    <td className="px-5 py-3 text-slate-600">
                      500 Baby Food Kits
                    </td>
                    <td className="px-5 py-3 text-slate-600">0</td>
                    <td className="px-5 py-3 font-mono font-medium text-red-600">
                      -500 (Crit)
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className="inline-block w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <span className="block h-full w-0 bg-slate-300 rounded-full"></span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Action Panel (Sticky/Fixed width) */}
        <div className="w-80 border-l border-slate-200 bg-white flex flex-col z-30 shadow-[0_0_20px_rgba(0,0,0,0.02)]">
          <div className="p-6 border-b border-slate-100">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1 block">
              Selected Zone
            </span>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Feni Sadar
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs text-red-600 font-medium">
                Critical State
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Top 3 Needs */}
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">
                Priority Needs
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded bg-red-50 border border-red-100 text-red-900">
                  <div className="w-6 h-6 rounded-full bg-white text-red-600 flex items-center justify-center text-xs font-bold border border-red-100">
                    1
                  </div>
                  <span className="text-sm font-medium">
                    Baby Food (Formula)
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded bg-white border border-slate-200 text-slate-900">
                  <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold border border-slate-200">
                    2
                  </div>
                  <span className="text-sm font-medium">Saline (IV)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded bg-white border border-slate-200 text-slate-900">
                  <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold border border-slate-200">
                    3
                  </div>
                  <span className="text-sm font-medium">Tarpaulin/Tents</span>
                </div>
              </div>
            </div>

            {/* Situation Summary */}
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">
                Situation Report
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                Water levels have risen 30cm in the last 6 hours. Local school
                shelter is at 200% capacity. No road access via N104.
              </p>
            </div>

            {/* Coordinator */}
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">
                Local Point of Contact
              </h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">
                  RK
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">
                    Rafiq Khan
                  </div>
                  <div className="text-[10px] text-slate-500">UNO Officer</div>
                </div>
                <button className="ml-auto w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-50">
                  <Phone size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-6 border-t border-slate-200 bg-slate-50/50">
            <button className="w-full py-3 bg-slate-900 text-white rounded-lg text-sm font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
              <Users className="text-white/80 group-hover:text-white" size={18} />
              Deploy Rapid Team
            </button>
            <p className="text-[10px] text-center text-slate-500 mt-2">
              Est. Deployment Time: 45 mins
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
