'use client'

import { Button } from './ui/button'
import { Card } from './ui/card'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-32 bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
      {/* Decorative grid background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 text-balance leading-tight">
          Disaster Logistics,<br />Solved.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          The open-source coordination platform for rapid relief distribution in Chittagong & Feni.
        </p>

        {/* Action Dock Card */}
        <Card className="mt-12 p-8 md:p-12 bg-white border-2 border-slate-200 shadow-2xl max-w-2xl mx-auto">
          <div className="space-y-6">
            {/* Live Status Indicator */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-3 h-3 bg-green-500 rounded-full pulse-dot"></div>
              <span className="text-sm font-medium text-slate-700">
                System Operational • <span className="font-mono font-bold text-slate-900">142</span> Active Requests
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Emergency Button */}
              <Button
                size="lg"
                className="h-14 md:h-16 text-base md:text-lg font-bold bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-lg transition-all hover:shadow-xl"
              >
                🚨 Request Aid / Field Report
              </Button>

              {/* Login Button */}
              <Button
                variant="outline"
                size="lg"
                className="h-14 md:h-16 text-base md:text-lg font-bold border-2 border-slate-300 text-slate-900 hover:bg-slate-50 rounded-lg transition-all bg-transparent"
              >
                Command Center Login
              </Button>
            </div>
          </div>
        </Card>

        {/* Trust badges */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-slate-600 mt-12">
          <div className="text-center">
            <p className="font-mono font-bold text-slate-900">MIT License</p>
            <p className="text-xs">Open Source</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-300"></div>
          <div className="text-center">
            <p className="font-mono font-bold text-slate-900">Built for Bangladesh</p>
            <p className="text-xs">🇧🇩</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-300"></div>
          <div className="text-center">
            <p className="font-mono font-bold text-slate-900">Zero Downtime</p>
            <p className="text-xs">Offline-First</p>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Button */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden p-4 bg-white border-t-2 border-slate-200 z-50">
        <Button
          size="lg"
          className="w-full h-12 text-base font-bold bg-red-500 hover:bg-red-600 text-white rounded-lg"
        >
          🚨 Request Aid Now
        </Button>
      </div>
    </section>
  )
}
