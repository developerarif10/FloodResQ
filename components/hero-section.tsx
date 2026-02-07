'use client'

import dynamic from 'next/dynamic'
import { RecentRequestsTile } from './dashboard/recent-requests-tile'
import { StatusTile } from './dashboard/status-tile'
import { Card } from './ui/card'

// Dynamically import MapTile to avoid SSR issues with Leaflet
const MapTile = dynamic(
  () => import('./dashboard/map-tile').then((mod) => mod.MapTile),
  { ssr: false }
)

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 pt-4 md:pt-12 pb-32">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none -z-10" />

      {/* Main Headline */}
      <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter text-center mb-12">
        Disaster Logistics,{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900">
          Solved.
        </span>
      </h1>

      {/* Bento Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-[600px] md:h-[400px]">
        
        {/* Tile A: Large Map (Span 2x2 on Desktop) */}
        <Card className="col-span-1 md:col-span-2 row-span-2 p-0 border border-slate-200 shadow-sm overflow-hidden bg-white/50 backdrop-blur-sm">
          <MapTile />
        </Card>

        {/* Tile B: Recent Requests (Span 1x2) */}
        <Card className="col-span-1 row-span-2 p-0 border border-slate-200 shadow-sm overflow-hidden bg-white/50 backdrop-blur-sm">
           <RecentRequestsTile />
        </Card>

        {/* Tile C: Status (Span 1x1) */}
        <Card className="col-span-1 row-span-1 p-0 border border-slate-200 shadow-sm overflow-hidden bg-slate-900">
           <StatusTile />
        </Card>

        {/* Tile D: Placeholder / Stats (Span 1x1) */}
        <Card className="col-span-1 row-span-1 p-6 border border-slate-200 shadow-sm bg-white flex flex-col items-center justify-center">
             <div className="text-center">
                <p className="text-4xl font-black text-slate-900 tracking-tighter">142</p>
                <p className="text-xs text-slate-500 font-bold uppercase mt-1">Active Missions</p>
             </div>
        </Card>

      </div>
    </div>
  )
}
