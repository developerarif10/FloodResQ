'use client'

import { Card } from './ui/card'
import { MapPin, BarChart3, Zap, Smartphone } from 'lucide-react'

export function BentoGrid() {
  return (
    <section className="py-20 md:py-32 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Why ReliefOps</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            A modular, open-source platform designed specifically for disaster coordination with offline-first capabilities.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {/* Box 1: Large Map Preview */}
          <Card className="col-span-1 md:col-span-2 row-span-2 p-8 bg-white border-2 border-slate-200 overflow-hidden">
            <div className="space-y-4 h-full flex flex-col">
              <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-red-500" />
                Real-time Supply Chain
              </h3>
              <p className="text-slate-600 text-sm">Visibility & Live Map</p>

              {/* Map placeholder */}
              <div className="flex-1 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="3" fill="currentColor" className="text-red-500" />
                  <circle cx="70" cy="50" r="3" fill="currentColor" className="text-green-500" />
                  <circle cx="50" cy="70" r="3" fill="currentColor" className="text-amber-500" />
                  <path d="M 30 30 L 70 50 L 50 70" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-slate-400" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-black text-slate-400">📍</p>
                    <p className="text-sm text-slate-500 mt-2">Live distribution network</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Box 2: Tall Inventory */}
          <Card className="col-span-1 row-span-2 p-8 bg-white border-2 border-slate-200 flex flex-col">
            <h3 className="text-xl font-black text-slate-900 mb-6">Current Inventory</h3>
            <div className="flex-1 space-y-4 font-mono text-sm">
              <div className="border-b-2 border-slate-100 pb-3">
                <p className="text-slate-600 mb-1">Rice (kg)</p>
                <p className="text-2xl font-black text-slate-900">8,430</p>
              </div>
              <div className="border-b-2 border-slate-100 pb-3">
                <p className="text-slate-600 mb-1">Saline (units)</p>
                <p className="text-2xl font-black text-slate-900">2,104</p>
              </div>
              <div className="border-b-2 border-slate-100 pb-3">
                <p className="text-slate-600 mb-1">Tents</p>
                <p className="text-2xl font-black text-slate-900">156</p>
              </div>
              <div className="pt-3">
                <p className="text-slate-600 mb-1">Water (L)</p>
                <p className="text-2xl font-black text-slate-900">12,600</p>
              </div>
            </div>
          </Card>

          {/* Box 3: Small Efficiency */}
          <Card className="col-span-1 p-8 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200">
            <div className="flex flex-col items-center text-center space-y-4">
              <BarChart3 className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-sm text-red-600 font-medium mb-1">System Efficiency</p>
                <p className="text-4xl font-black text-red-900">98%</p>
              </div>
            </div>
          </Card>

          {/* Box 4: Small Offline-First */}
          <Card className="col-span-1 p-8 bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <Smartphone className="w-8 h-8 text-slate-700" />
              <div>
                <p className="text-sm text-slate-700 font-medium mb-1">Mobile Ready</p>
                <p className="text-lg font-black text-slate-900">Offline-First</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
