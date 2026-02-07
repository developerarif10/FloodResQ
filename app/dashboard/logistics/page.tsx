"use client";

import {
    AlertTriangle,
    ArrowUpDown,
    CheckCircle,
    CheckSquare,
    ChevronDown,
    Eye,
    Home,
    Layers,
    Minus,
    Package,
    Plus,
    ShieldAlert,
    Ship,
    Truck,
    XCircle,
} from "lucide-react";
import { useState } from "react";

export default function LogisticsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] lg:h-[calc(100vh-theme(spacing.8))] overflow-hidden flex-col lg:flex-row -m-4 lg:-m-8">
      {/* Left Panel: Dispatch Queue & Fleet (35%) */}
      <div className="w-full lg:w-[35%] bg-white border-r border-slate-200 flex flex-col h-full z-10">
        {/* Top Section: Pending Queue */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-slate-900">Pending Queue</h2>
              <span className="bg-amber-100 text-amber-700 text-[10px] font-mono px-1.5 py-0.5 rounded-full">
                4
              </span>
            </div>
            <button className="text-slate-400 hover:text-slate-900">
              <ArrowUpDown size={18} />
            </button>
          </div>

          <div className="overflow-y-auto p-4 space-y-3 bg-slate-50/50 flex-1">
            {/* Card 1: Boat Requirement */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 hover:border-slate-300 transition-colors group">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-400">
                    REQ-#902
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-50 text-cyan-700 border border-cyan-100">
                  <Ship size={12} />
                  BOAT
                </span>
              </div>
              <h3 className="font-medium text-slate-900 text-sm">
                Char Alexander, Ramgati
              </h3>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Package className="text-slate-400" size={14} />
                  <span>500kg Rice + 200L Water</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-red-600 font-medium">
                  <AlertTriangle size={14} />
                  <span>High Water Level • No Road Access</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 h-8 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded flex items-center justify-center gap-1.5 transition-colors"
                >
                  Assign Driver
                </button>
                <button className="h-8 w-8 border border-slate-200 rounded flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-50">
                  <Eye size={16} />
                </button>
              </div>
            </div>

            {/* Card 2: Truck Requirement */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 hover:border-slate-300 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-400">
                    REQ-#905
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                  <Truck size={12} />
                  TRUCK
                </span>
              </div>
              <h3 className="font-medium text-slate-900 text-sm">
                Feni Sadar Hospital
              </h3>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Package className="text-slate-400" size={14} />
                  <span>2000 Units Saline + Medicines</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 h-8 border border-slate-200 bg-white hover:border-slate-300 text-slate-900 text-xs font-medium rounded flex items-center justify-center gap-1.5 transition-colors">
                  Assign Driver
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 hover:border-slate-300 transition-colors opacity-75">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-400">
                    REQ-#889
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                  <Truck size={12} />
                  TRUCK
                </span>
              </div>
              <h3 className="font-medium text-slate-900 text-sm">
                Daganbhuiyan Shelter
              </h3>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Package className="text-slate-400" size={14} />
                  <span>Dry Food (Muri/Gur)</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 h-8 border border-slate-200 bg-white text-slate-400 text-xs font-medium rounded flex items-center justify-center gap-1.5 cursor-not-allowed">
                  Pending Approval
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Active Fleet */}
        <div className="bg-white border-t border-slate-200 h-1/3 flex flex-col">
          <div className="p-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h2 className="font-semibold text-slate-900 text-sm">
              Active Fleet
            </h2>
            <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 rounded">
              6 MOVING
            </span>
          </div>
          <div className="overflow-y-auto flex-1 p-0 divide-y divide-slate-100">
            {/* Fleet Item 1 */}
            <div className="p-3 hover:bg-slate-50 flex items-center gap-3 group cursor-pointer">
              <div className="h-8 w-8 rounded bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
                <Truck size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <span className="text-xs font-semibold text-slate-900">
                    Truck T-405
                  </span>
                  <span className="text-[10px] font-mono text-amber-600 bg-amber-50 px-1 rounded">
                    EN ROUTE
                  </span>
                </div>
                <div className="flex justify-between items-end mt-0.5">
                  <span className="text-[10px] text-slate-500 truncate">
                    Dest: Parshuram Pilot School
                  </span>
                  <span className="text-[10px] font-medium text-slate-900">
                    15m ETA
                  </span>
                </div>
              </div>
            </div>

            {/* Fleet Item 2 */}
            <div className="p-3 hover:bg-slate-50 flex items-center gap-3 group cursor-pointer">
              <div className="h-8 w-8 rounded bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0">
                <Ship size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <span className="text-xs font-semibold text-slate-900">
                    Speedboat S-02
                  </span>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-1 rounded">
                    UNLOADING
                  </span>
                </div>
                <div className="flex justify-between items-end mt-0.5">
                  <span className="text-[10px] text-slate-500 truncate">
                    Loc: Sonagazi Coast
                  </span>
                  <span className="text-[10px] font-medium text-slate-900">
                    Arrived
                  </span>
                </div>
              </div>
            </div>

            {/* Fleet Item 3 */}
            <div className="p-3 hover:bg-slate-50 flex items-center gap-3 group cursor-pointer">
              <div className="h-8 w-8 rounded bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
                <Truck size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <span className="text-xs font-semibold text-slate-900">
                    Pickup P-99
                  </span>
                  <span className="text-[10px] font-mono text-red-600 bg-red-50 px-1 rounded">
                    DELAYED
                  </span>
                </div>
                <div className="flex justify-between items-end mt-0.5">
                  <span className="text-[10px] text-slate-500 truncate">
                    Traffic on N1
                  </span>
                  <span className="text-[10px] font-medium text-slate-900">
                    +45m
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Interactive Map (65%) */}
      <div className="flex-1 bg-slate-100 relative overflow-hidden map-bg group">
        <style jsx>{`
          .map-bg {
            background-color: #f3f4f6;
            background-image: radial-gradient(#e5e7eb 1px, transparent 1px),
              radial-gradient(#e5e7eb 1px, transparent 1px);
            background-position:
              0 0,
              20px 20px;
            background-size: 40px 40px;
          }
          @keyframes pulse-ring {
            0% {
              transform: scale(0.8);
              opacity: 0.5;
            }
            100% {
              transform: scale(2.4);
              opacity: 0;
            }
          }
          .pulse-ring::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: inherit;
            animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1)
              infinite;
            z-index: -1;
          }
        `}</style>
        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
          <button className="h-8 w-8 bg-white border border-slate-200 rounded shadow-sm text-slate-600 flex items-center justify-center hover:text-slate-900">
            <Plus size={20} />
          </button>
          <button className="h-8 w-8 bg-white border border-slate-200 rounded shadow-sm text-slate-600 flex items-center justify-center hover:text-slate-900">
            <Minus size={20} />
          </button>
          <button className="h-8 w-8 bg-white border border-slate-200 rounded shadow-sm text-slate-600 flex items-center justify-center hover:text-slate-900 mt-2">
            <Layers size={20} />
          </button>
        </div>

        {/* Map Legend */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur border border-slate-200 rounded p-3 shadow-sm z-20 max-w-xs">
          <h4 className="text-xs font-semibold text-slate-900 mb-2">
            Live Map Layers
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500/20 border border-red-500/50 rounded-sm"></div>
              <span className="text-[10px] text-slate-600">
                Inaccessible (Flooded)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
              <span className="text-[10px] text-slate-600">
                Central Warehouse (Feni)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="text-amber-600" size={12} />
              <span className="text-[10px] text-slate-600">Active Fleet</span>
            </div>
          </div>
        </div>

        {/* Simulated SVG Map Elements */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Roads (Simulated Paths) */}
          <path
            d="M-100 200 Q 300 150 500 400 T 1200 600"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="6"
          ></path>
          <path
            d="M400 -100 L 450 300 L 800 500 L 900 900"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="6"
          ></path>
          <path
            d="M200 800 Q 500 500 600 200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
          ></path>

          {/* Flooded Zone (Polygon) */}
          <polygon
            points="600,200 900,150 1100,400 850,550"
            fill="rgba(239, 68, 68, 0.1)"
            stroke="rgba(239, 68, 68, 0.3)"
            strokeWidth="1"
            strokeDasharray="4 2"
          ></polygon>
          <text
            x="750"
            y="300"
            className="text-[10px] font-mono fill-red-600 opacity-60 uppercase tracking-widest"
            textAnchor="middle"
          >
            Flooded Zone
          </text>

          {/* Active Route: Dashed Green Line for Truck */}
          <path
            d="M450 300 L 600 350 L 700 320"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="6 4"
            className="opacity-80"
          ></path>
        </svg>

        {/* Map Markers (Absolute HTML Elements) */}

        {/* Warehouse: Feni Central */}
        <div className="absolute top-[35%] left-[30%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-900/20 z-10 border-2 border-white">
            <Home size={16} />
          </div>
          <div className="mt-1 px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-semibold text-slate-900 shadow-sm whitespace-nowrap">
            Feni Central Hub
          </div>
        </div>

        {/* Truck: En Route */}
        <div className="absolute top-[40%] left-[45%] z-10 flex flex-col items-center transition-all duration-[5000ms] ease-linear">
          <div className="pulse-ring w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg z-10 relative">
            <Truck size={16} />
          </div>
          <div className="absolute -top-6 bg-slate-900 text-white text-[9px] font-mono py-0.5 px-1.5 rounded opacity-90 whitespace-nowrap">
            T-405
          </div>
        </div>

        {/* Critical Request: Flooded Area */}
        <div className="absolute top-[25%] left-[65%] z-10 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-red-100 border-2 border-red-500 text-red-600 flex items-center justify-center shadow-md animate-bounce">
            <AlertTriangle size={18} />
          </div>
          <div className="mt-1 px-2 py-0.5 bg-white border border-red-100 rounded text-[10px] font-medium text-red-700 shadow-sm whitespace-nowrap">
            Req #902
          </div>
        </div>

        {/* Boat: Unloading */}
        <div className="absolute bottom-[20%] right-[15%] z-10 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-white text-white flex items-center justify-center shadow-lg">
            <Ship size={16} />
          </div>
          <div className="mt-1 px-2 py-0.5 bg-white border border-cyan-100 rounded text-[10px] font-medium text-cyan-700 shadow-sm whitespace-nowrap">
            S-02 (Unloading)
          </div>
        </div>
      </div>

      {/* Dispatch Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md m-4 overflow-hidden animate-[fade-in_0.2s_ease-out]">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Dispatch Assignment
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-mono">
                  REQ ID: #902 • CHAR ALEXANDER
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <XCircle size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              {/* Vehicle Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                  Select Vehicle Class
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="cursor-pointer relative">
                    <input
                      type="radio"
                      name="vehicle"
                      className="peer sr-only custom-radio"
                    />
                    <div className="p-3 rounded border border-slate-200 hover:border-slate-300 transition-all text-center">
                      <Truck
                        className="text-slate-400 mb-1 mx-auto"
                        size={24}
                      />
                      <div className="text-xs font-medium text-slate-600">
                        Truck (5 Ton)
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 transition-opacity text-slate-900">
                      <CheckCircle size={16} />
                    </div>
                  </label>
                  <label className="cursor-pointer relative">
                    <input
                      type="radio"
                      name="vehicle"
                      className="peer sr-only custom-radio"
                      defaultChecked
                    />
                    <div className="p-3 rounded border border-cyan-200 bg-cyan-50/30 transition-all text-center ring-1 ring-cyan-500 ring-offset-1 peer-checked:ring-cyan-500">
                      <Ship className="text-cyan-600 mb-1 mx-auto" size={24} />
                      <div className="text-xs font-medium text-cyan-900">
                        Country Boat
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 text-cyan-600">
                      <CheckCircle size={16} />
                    </div>
                  </label>
                </div>
              </div>

              {/* Driver/Skipper Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                  Assign Skipper / Driver
                </label>
                <div className="relative">
                  <select className="appearance-none bg-white border border-slate-200 text-slate-900 text-sm rounded px-3 py-2.5 w-full focus:outline-none focus:border-slate-900 focus:ring-0">
                    <option>Majedul Islam (Boatman) - ★ 4.8</option>
                    <option>Rahim Uddin (Local) - ★ 4.5</option>
                    <option>Karim Box - ★ 4.2</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-3 text-slate-400 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>

              {/* Route Warning Alert */}
              <div className="bg-red-50 border border-red-100 rounded p-3 flex gap-3 items-start">
                <ShieldAlert
                  className="text-red-600 flex-shrink-0 mt-0.5"
                  size={18}
                />
                <div>
                  <h4 className="text-xs font-semibold text-red-800">
                    Route Warning: Flood Zone
                  </h4>
                  <p className="text-[10px] text-red-600 mt-1 leading-relaxed">
                    Road N104 is currently 3ft underwater. Trucks cannot pass.{" "}
                    <span className="font-bold">
                      Boat transport is mandatory
                    </span>{" "}
                    for this sector.
                  </p>
                </div>
              </div>

              {/* Cargo Summary */}
              <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
                <span>
                  Cargo: <strong className="text-slate-900">500kg Rice, 200L Water</strong>
                </span>
                <span>
                  Est. Distance: <strong className="text-slate-900">12km</strong>
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2 border border-slate-200 rounded text-slate-600 text-xs font-medium hover:bg-white hover:border-slate-300 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-slate-900 text-white rounded text-xs font-medium hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2">
                <CheckSquare size={16} />
                Confirm Dispatch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
