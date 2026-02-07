"use client";

import {
    AlertTriangle,
    AreaChart,
    ArrowUpRight,
    Box,
    BriefcaseMedical,
    Calendar,
    CheckCircle,
    ChefHat,
    ChevronDown,
    Droplets,
    FileDown,
    MoreHorizontal,
    Search,
    ShoppingBag,
    XCircle,
} from "lucide-react";
import { useState } from "react";

export default function InventoryPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col h-full relative">
      {/* Page Header */}
      <header className="bg-white border-b border-slate-200 -mx-4 -mt-4 lg:-mx-8 lg:-mt-8 px-6 py-4 flex items-center justify-between shrink-0 mb-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">
            Central Warehouse (Chittagong-A)
          </h1>
          <span className="text-xs text-slate-500 mt-1">
            Zone: Agrabad Access Road • ID: WH-CTG-01
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-md shadow-sm transition-all flex items-center gap-2">
            <FileDown size={18} />
            Export Report
          </button>
          {/* Trigger for Drawer */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-md shadow-sm transition-all flex items-center gap-2"
          >
            <Box size={18} />
            Receive Shipment
          </button>
        </div>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Metric 1 */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Total Capacity
            </span>
            <AreaChart className="text-slate-400" size={20} />
          </div>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-semibold text-slate-900 font-mono">
              85%
            </span>
            <span className="text-xs text-slate-500 mb-1">Full</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-3">
            <div
              className="bg-slate-900 h-1.5 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Low Stock Alerts
            </span>
            <AlertTriangle className="text-amber-500" size={20} />
          </div>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-semibold text-slate-900 font-mono">
              3
            </span>
            <span className="text-xs text-red-600 font-medium mb-1">
              Items Critical
            </span>
          </div>
          <p className="text-[10px] text-slate-400 mt-3">
            WPT, ORS, Baby Food below threshold
          </p>
        </div>

        {/* Metric 3 */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Daily Outflow
            </span>
            <ArrowUpRight className="text-slate-400" size={20} />
          </div>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-semibold text-slate-900 font-mono">
              1,200
            </span>
            <span className="text-xs text-emerald-600 font-medium mb-1 flex items-center gap-0.5">
              <ArrowUpRight size={12} />
              +12%
            </span>
          </div>
          <p className="text-[10px] text-slate-400 mt-3">
            Units dispatched today (06:00 - 14:00)
          </p>
        </div>
      </div>

      {/* Filters & Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-2.5 text-slate-400 pointer-events-none"
            size={16}
          />
          <input
            type="text"
            placeholder="Search by SKU, item name or category..."
            className="input-base pl-9 h-9 text-sm"
          />
        </div>
        <div className="flex gap-3">
          <div className="relative w-40">
            <select className="input-base h-9 text-xs pl-3 pr-8 appearance-none bg-white">
              <option>All Categories</option>
              <option>Food</option>
              <option>Medical</option>
              <option>WASH</option>
              <option>Shelter</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-3 text-slate-400 pointer-events-none"
              size={12}
            />
          </div>
          <div className="relative w-40">
            <select className="input-base h-9 text-xs pl-3 pr-8 appearance-none bg-white">
              <option>Location: All</option>
              <option>Zone A (Food)</option>
              <option>Zone B (Med)</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-3 text-slate-400 pointer-events-none"
              size={12}
            />
          </div>
        </div>
      </div>

      {/* Main Inventory Table */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="h-10 px-4 text-[10px] font-semibold text-slate-500 uppercase tracking-wider w-64">
                  Item Details
                </th>
                <th className="h-10 px-4 text-[10px] font-semibold text-slate-500 uppercase tracking-wider w-32">
                  Category
                </th>
                <th className="h-10 px-4 text-[10px] font-semibold text-slate-500 uppercase tracking-wider w-48">
                  Stock Level
                </th>
                <th className="h-10 px-4 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  Unit Count
                </th>
                <th className="h-10 px-4 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  Est. Coverage
                </th>
                <th className="h-10 px-4 text-[10px] font-semibold text-slate-500 uppercase tracking-wider text-right">
                  Last Updated
                </th>
                <th className="h-10 px-4 text-[10px] font-semibold text-slate-500 uppercase tracking-wider text-right w-24">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {/* Row 1: Critical Item */}
              <tr className="group hover:bg-slate-50 transition-colors bg-red-50/30">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <Droplets size={16} />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">
                        WPT (Water Purification)
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        SKU-WASH-001
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
                    WASH
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-red-600">
                      Critical
                    </span>
                    <span className="text-[10px] text-slate-400 ml-auto">
                      12%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-red-500 h-1.5 rounded-full"
                      style={{ width: "12%" }}
                    ></div>
                  </div>
                </td>
                <td className="p-4 font-mono text-slate-700">
                  450 <span className="text-xs text-slate-400">strips</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <div className="text-slate-400" />{" "}
                    {/* Placeholder for iconify users */}
                    <span className="text-xs">~45 Families</span>
                  </div>
                </td>
                <td className="p-4 text-right text-xs text-slate-500 font-mono">
                  10m ago
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="h-7 w-7 flex items-center justify-center rounded border border-slate-200 hover:border-slate-300 text-slate-400 hover:text-slate-900 bg-white">
                      <MoreHorizontal size={14} />
                    </button>
                    <button className="h-7 px-2 flex items-center justify-center rounded bg-slate-900 text-white text-[10px] font-medium hover:bg-slate-800">
                      Dispatch
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2: High Stock */}
              <tr className="group hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <ChefHat size={16} />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">
                        Puffed Rice (Muri)
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        SKU-FOOD-102
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-orange-50 text-orange-700 border border-orange-100">
                    Food
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-emerald-600">
                      Healthy
                    </span>
                    <span className="text-[10px] text-slate-400 ml-auto">
                      92%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-1.5 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </td>
                <td className="p-4 font-mono text-slate-700">
                  4,200 <span className="text-xs text-slate-400">kg</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <span className="text-xs">~2,100 Families</span>
                  </div>
                </td>
                <td className="p-4 text-right text-xs text-slate-500 font-mono">
                  2h ago
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="h-7 w-7 flex items-center justify-center rounded border border-slate-200 hover:border-slate-300 text-slate-400 hover:text-slate-900 bg-white">
                      <MoreHorizontal size={14} />
                    </button>
                    <button className="h-7 px-2 flex items-center justify-center rounded bg-white border border-slate-200 text-slate-700 text-[10px] font-medium hover:bg-slate-50">
                      Dispatch
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3: Medium Stock */}
              <tr className="group hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <BriefcaseMedical size={16} />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">
                        Napa / Paracetamol
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        SKU-MED-550
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-rose-50 text-rose-700 border border-rose-100">
                    Medical
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-amber-600">
                      Average
                    </span>
                    <span className="text-[10px] text-slate-400 ml-auto">
                      45%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-amber-500 h-1.5 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </td>
                <td className="p-4 font-mono text-slate-700">
                  5,000 <span className="text-xs text-slate-400">strips</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <span className="text-xs">~1,200 Patients</span>
                  </div>
                </td>
                <td className="p-4 text-right text-xs text-slate-500 font-mono">
                  Yesterday
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="h-7 w-7 flex items-center justify-center rounded border border-slate-200 hover:border-slate-300 text-slate-400 hover:text-slate-900 bg-white">
                      <MoreHorizontal size={14} />
                    </button>
                    <button className="h-7 px-2 flex items-center justify-center rounded bg-white border border-slate-200 text-slate-700 text-[10px] font-medium hover:bg-slate-50">
                      Dispatch
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 4: High Stock */}
              <tr className="group hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <ShoppingBag size={16} />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">
                        Rice (Miniket 50kg)
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        SKU-FOOD-104
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-orange-50 text-orange-700 border border-orange-100">
                    Food
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-emerald-600">
                      Healthy
                    </span>
                    <span className="text-[10px] text-slate-400 ml-auto">
                      78%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-1.5 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </td>
                <td className="p-4 font-mono text-slate-700">
                  850 <span className="text-xs text-slate-400">sacks</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <span className="text-xs">~850 Families</span>
                  </div>
                </td>
                <td className="p-4 text-right text-xs text-slate-500 font-mono">
                  3d ago
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="h-7 w-7 flex items-center justify-center rounded border border-slate-200 hover:border-slate-300 text-slate-400 hover:text-slate-900 bg-white">
                      <MoreHorizontal size={14} />
                    </button>
                    <button className="h-7 px-2 flex items-center justify-center rounded bg-white border border-slate-200 text-slate-700 text-[10px] font-medium hover:bg-slate-50">
                      Dispatch
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Slide-over Drawer (Add Stock) */}
      {isDrawerOpen && (
        <div className="absolute inset-y-0 right-0 w-96 bg-white shadow-2xl border-l border-slate-200 z-50 flex flex-col transform transition-transform duration-300">
          <div className="p-5 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Inbound Shipment
              </h2>
              <p className="text-xs text-slate-500">Log new stock arrival</p>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-slate-400 hover:text-slate-900"
            >
              <XCircle size={20} />
            </button>
          </div>

          <div className="p-5 space-y-5 flex-1 overflow-y-auto">
            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5">
                  Item Name
                </label>
                <div className="relative">
                  <select className="input-base">
                    <option>Select Item...</option>
                    <option>Rice (50kg sacks)</option>
                    <option>Dry Food Pack</option>
                    <option>Oral Saline (ORS)</option>
                    <option selected>Mineral Water (5L)</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-3.5 text-slate-400 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5">
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="input-base font-mono"
                    placeholder="0"
                    defaultValue="1200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5">
                    Unit
                  </label>
                  <input
                    type="text"
                    className="input-base bg-slate-50 text-slate-500"
                    defaultValue="Bottles"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5">
                  Source / Donor
                </label>
                <input
                  type="text"
                  className="input-base"
                  placeholder="e.g. Red Crescent, Private..."
                  defaultValue="Donation from Dhaka University"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5">
                  Expiry Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="input-base"
                    placeholder="YYYY-MM-DD"
                    defaultValue="2025-08-01"
                  />
                  <Calendar
                    className="absolute right-3 top-2.5 text-slate-400 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5">
                  Quality Check
                </label>
                <div className="flex items-center gap-3 border border-slate-200 rounded-md p-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="qc"
                      defaultChecked
                      className="text-slate-900 focus:ring-slate-900"
                    />
                    <span className="text-sm text-slate-700">Passed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="qc"
                      className="text-slate-900 focus:ring-slate-900"
                    />
                    <span className="text-sm text-slate-700">Flagged</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 border-t border-slate-200 bg-slate-50">
            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-md py-2.5 shadow-sm flex items-center justify-center gap-2">
              <CheckCircle size={18} />
              Confirm Receipt
            </button>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="w-full mt-2 text-slate-500 hover:text-slate-800 text-xs font-medium py-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
