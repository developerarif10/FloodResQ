'use client'

import { AlertTriangle, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
           <Link href="/" className="text-xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                <span className="font-bold">F</span>
            </div>
            FloodResQ
           </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
            <Link href="/map" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Live Map
            </Link>
             <Link href="/resources" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Resources
            </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
             <Button variant="ghost" size="sm" className="hidden md:flex text-slate-600 hover:text-slate-900" asChild>
                <Link href="/dashboard">
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                </Link>
             </Button>

             <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white font-bold shadow-md shadow-red-500/20" asChild>
                <Link href="/report">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Report Incident
                </Link>
             </Button>
        </div>
      </div>
    </nav>
  )
}
