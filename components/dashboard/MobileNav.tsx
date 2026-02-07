"use client";

import { Menu } from "lucide-react";

export function MobileNav() {
  return (
    <nav className="lg:hidden border-b border-slate-200 bg-white sticky top-0 z-50 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 bg-slate-900 text-white flex items-center justify-center rounded-sm font-bold text-xs">
          F
        </div>
        <span className="font-semibold tracking-tight text-slate-900">
          FloodResQ
        </span>
      </div>
      <button className="text-slate-500 hover:text-slate-900">
        <Menu size={24} />
      </button>
    </nav>
  );
}
