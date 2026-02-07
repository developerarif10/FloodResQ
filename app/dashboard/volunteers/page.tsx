"use client";

import {
    Bed,
    CheckCircle2,
    ClipboardCheck,
    Clock,
    Filter,
    Image as ImageIcon,
    MapPin,
    Megaphone,
    Monitor,
    Phone,
    Search,
    ShieldCheck,
    Ship,
    Users,
    XCircle
} from "lucide-react";

export default function VolunteersPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-theme(spacing.16))] lg:h-[calc(100vh-theme(spacing.8))] overflow-hidden bg-slate-50/50 -m-4 lg:-m-8">
      {/* Top Metrics Bar */}
      <header className="bg-white border-b border-slate-200 flex-shrink-0">
        <div className="px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-slate-900">
                Workforce Roster
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Manage verification, deployment, and safety status.
              </p>
            </div>

            {/* Metrics Cards */}
            <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0">
              {/* Metric 1 */}
              <div className="flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm min-w-[140px]">
                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                  <Users size={16} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                    Total
                  </div>
                  <div className="text-lg font-semibold tracking-tight text-slate-900">
                    142
                  </div>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-center gap-3 px-4 py-2 bg-white border border-emerald-100 rounded-lg shadow-sm min-w-[140px]">
                <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                    Active Now
                  </div>
                  <div className="text-lg font-semibold tracking-tight text-emerald-600">
                    38
                  </div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-center gap-3 px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg shadow-sm min-w-[140px]">
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-amber-800 font-medium">
                    Pending
                  </div>
                  <div className="text-lg font-semibold tracking-tight text-amber-700">
                    12
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto p-6 relative">
          {/* Grid Pattern Background */}
         <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            opacity: 0.5,
            zIndex: 0
         }}></div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-6">
          {/* Section: Pending Verification (Security Priority) */}
          <section className="bg-white rounded-xl border border-amber-200 shadow-sm overflow-hidden">
            <div className="bg-amber-50/50 px-5 py-3 border-b border-amber-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-amber-500" size={18} />
                <h2 className="text-sm font-semibold text-slate-900">
                  Pending Verification Queue
                </h2>
                <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  12 New
                </span>
              </div>
              <button className="text-xs text-amber-700 font-medium hover:underline">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100 text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                  <tr>
                    <th className="px-5 py-3">Volunteer Name</th>
                    <th className="px-5 py-3">Group / Org</th>
                    <th className="px-5 py-3">Phone (Masked)</th>
                    <th className="px-5 py-3">ID Proof</th>
                    <th className="px-5 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {/* Row 1 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-[10px]">
                          TA
                        </div>
                        <span className="font-medium text-slate-900">
                          Tanvir Ahmed
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-slate-600">
                      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-[10px] font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                        DU Student
                      </span>
                    </td>
                    <td className="px-5 py-3 font-mono text-slate-500">
                      017 •••• 892
                    </td>
                    <td className="px-5 py-3">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <ImageIcon size={14} />
                        NID_Front.jpg
                      </a>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                          <XCircle size={16} />
                        </button>
                        <button className="p-1.5 rounded bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors">
                          <CheckCircle2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-[10px]">
                          SA
                        </div>
                        <span className="font-medium text-slate-900">
                          Sumaia Akter
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-slate-600">
                      <span className="inline-flex items-center rounded-md bg-rose-50 px-2 py-1 text-[10px] font-medium text-rose-700 ring-1 ring-inset ring-rose-700/10">
                        Red Crescent
                      </span>
                    </td>
                    <td className="px-5 py-3 font-mono text-slate-500">
                      019 •••• 441
                    </td>
                    <td className="px-5 py-3">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <ImageIcon size={14} />
                        ID_Card.png
                      </a>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                          <XCircle size={16} />
                        </button>
                        <button className="p-1.5 rounded bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors">
                          <CheckCircle2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Main Roster Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-slate-400" size={16} />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:placeholder-slate-300 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 sm:text-sm"
                placeholder="Search by name or phone number..."
              />
            </div>

            <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
              <button className="inline-flex items-center px-3 py-2 border border-slate-200 shadow-sm text-xs font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 focus:outline-none">
                <Filter className="mr-2" size={14} />
                Skill: All
              </button>
              <button className="inline-flex items-center px-3 py-2 border border-slate-200 shadow-sm text-xs font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 focus:outline-none">
                <MapPin className="mr-2" size={14} />
                Loc: Feni
              </button>
              <button className="inline-flex items-center px-3 py-2 border border-slate-200 shadow-sm text-xs font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 focus:outline-none">
                <Clock className="mr-2" size={14} />
                Status
              </button>
            </div>
          </div>

          {/* Section: Roster Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-20">
            {/* Card 1: Active Medical */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-4 group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-sm">
                      RJ
                    </div>
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-emerald-400"></span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Rakib Jubaed
                    </h3>
                    <p className="text-[10px] text-slate-500 font-medium">
                      Anti-Discrimination Mvt.
                    </p>
                  </div>
                </div>
                {/* Status Toggle (Simulated) */}
                <div className="relative inline-block w-8 align-middle select-none">
                  <div className="block w-8 h-4 rounded-full bg-emerald-400"></div>
                  <div className="absolute right-0 top-0 block w-4 h-4 rounded-full bg-white border-2 border-emerald-400 shadow transform translate-x-0 transition-transform"></div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700">
                  Medical
                </span>
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold text-blue-700">
                  Swimmer
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <ClipboardCheck className="text-slate-400" size={14} />
                  <span>
                    Assigned to{" "}
                    <span className="font-medium text-slate-900">
                      Truck T-405
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <MapPin className="text-slate-400" size={14} />
                  <span>Sector 4, Feni Sadar</span>
                </div>
              </div>

              <button className="mt-4 w-full py-1.5 rounded border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors">
                <Phone size={14} />
                Contact
              </button>
            </div>

            {/* Card 2: Resting Driver */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-4 group opacity-80">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-semibold text-sm">
                      AH
                    </div>
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-slate-300"></span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Abir Hasan
                    </h3>
                    <p className="text-[10px] text-slate-500 font-medium">
                      Independent
                    </p>
                  </div>
                </div>
                {/* Status Toggle Off */}
                <div className="relative inline-block w-8 align-middle select-none">
                  <div className="block w-8 h-4 rounded-full bg-slate-200"></div>
                  <div className="absolute left-0 top-0 block w-4 h-4 rounded-full bg-white border-2 border-slate-200 shadow transform translate-x-0 transition-transform"></div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-[10px] font-semibold text-orange-700">
                  Truck Driver
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Bed className="text-slate-400" size={14} />
                  <span>
                    Status:{" "}
                    <span className="font-medium text-slate-600">Resting</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="text-slate-400" size={14} />
                  <span>Last Active: 2h ago</span>
                </div>
              </div>

              <button className="mt-4 w-full py-1.5 rounded border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors">
                <Phone size={14} />
                Contact
              </button>
            </div>

            {/* Card 3: Active Coordinator */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-4 group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-sm">
                      SK
                    </div>
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-emerald-400"></span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Sarah Khan
                    </h3>
                    <p className="text-[10px] text-slate-500 font-medium">
                      BnCC
                    </p>
                  </div>
                </div>
                <div className="relative inline-block w-8 align-middle select-none">
                  <div className="block w-8 h-4 rounded-full bg-emerald-400"></div>
                  <div className="absolute right-0 top-0 block w-4 h-4 rounded-full bg-white border-2 border-emerald-400 shadow transform translate-x-0 transition-transform"></div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-[10px] font-semibold text-purple-700">
                  Coordinator
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700">
                  English Speaker
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Monitor className="text-slate-400" size={14} />
                  <span>
                    Assigned to{" "}
                    <span className="font-medium text-slate-900">
                      Control Room
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <MapPin className="text-slate-400" size={14} />
                  <span>HQ, Dhaka</span>
                </div>
              </div>

              <button className="mt-4 w-full py-1.5 rounded border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors">
                <Phone size={14} />
                Contact
              </button>
            </div>

            {/* Card 4: Boatman */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-4 group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-semibold text-sm">
                      MR
                    </div>
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-emerald-400"></span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Mamunur Rashid
                    </h3>
                    <p className="text-[10px] text-slate-500 font-medium">
                      Scouts
                    </p>
                  </div>
                </div>
                <div className="relative inline-block w-8 align-middle select-none">
                  <div className="block w-8 h-4 rounded-full bg-emerald-400"></div>
                  <div className="absolute right-0 top-0 block w-4 h-4 rounded-full bg-white border-2 border-emerald-400 shadow transform translate-x-0 transition-transform"></div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-2.5 py-0.5 text-[10px] font-semibold text-teal-700">
                  Boat Operation
                </span>
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold text-blue-700">
                  Swimmer
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Ship className="text-slate-400" size={14} />
                  <span>
                    Assigned to{" "}
                    <span className="font-medium text-slate-900">
                      Rescue Boat 03
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <MapPin className="text-slate-400" size={14} />
                  <span>Chauddagram</span>
                </div>
              </div>

              <button className="mt-4 w-full py-1.5 rounded border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors">
                <Phone size={14} />
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button (Broadcast) */}
      <button className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-slate-900 text-white pl-4 pr-5 py-3 rounded-full shadow-xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 group">
        <Megaphone
          className="group-hover:animate-pulse"
          size={20}
        />
        <span className="font-semibold text-sm">Broadcast Alert</span>
      </button>
    </div>
  );
}
