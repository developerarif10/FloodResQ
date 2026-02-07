"use client";

import {
  LayoutDashboard,
  MapPin,
  Package,
  Truck,
  Users,
} from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200 bg-white fixed h-full inset-y-0 z-40">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 bg-slate-900 text-white flex items-center justify-center rounded-sm font-bold text-sm">
            F
          </div>
          <span className="font-semibold tracking-tight text-lg">
            FloodResQ
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs text-slate-500 font-medium font-mono">
            NET: ONLINE
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-slate-100 text-slate-900 rounded-md"
        >
          <LayoutDashboard size={20} />
          Situation Room
        </Link>
        <Link
          href="/dashboard/inventory"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md"
        >
          <Package size={20} />
          Inventory
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md"
        >
          <Truck size={20} />
          Logistics & Dispatch
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md"
        >
          <MapPin size={20} />
          Critical Zones
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md"
        >
          <Users size={20} />
          Volunteers
        </Link>
      </div>

      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-xs">
            MA
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-900">
              Md. Arif
            </span>
            <span className="text-[10px] text-slate-500">
              Logistics Officer
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
