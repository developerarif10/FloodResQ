'use client'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export function MapTile() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Leaflet icon fix for Next.js
    // Only apply if not already applied to avoid Strict Mode issues
    if (typeof window !== 'undefined') {
       // @ts-ignore
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      })
    }
  }, [])

  if (!isMounted) {
    return (
      <div className="w-full h-full bg-slate-100 animate-pulse flex items-center justify-center text-slate-400">
        Loading Map...
      </div>
    )
  }

  // Chittagong coordinates
  const position: [number, number] = [22.3569, 91.7832]

  return (
    <div className="w-full h-full rounded-xl overflow-hidden relative z-0">
      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position}>
          <Popup>
            Critical Request <br /> Water needed.
          </Popup>
        </Marker>
        <Marker position={[22.36, 91.79]}>
           <Popup>
            Medical Aid <br /> Team needed.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="absolute top-4 left-4 z-[1000] bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 border border-slate-200">
        Live Intel
      </div>
    </div>
  )
}
