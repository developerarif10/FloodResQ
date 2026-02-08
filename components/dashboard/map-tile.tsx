'use client'

import { Map, MapControls, MapMarker, MarkerContent, MarkerPopup } from "@/components/ui/map"

export function MapTile() {
  // Chittagong coordinates [Lng, Lat]
  const center: [number, number] = [91.7832, 22.3569]

  return (
    <div className="w-full h-full rounded-xl overflow-hidden relative z-0">
      <Map theme="light" center={center} zoom={13} className="w-full h-full">
        <MapControls />
        
        <MapMarker longitude={91.7832} latitude={22.3569}>
          <MarkerContent />
          <MarkerPopup>
            <div className="text-sm font-medium text-slate-900">
              Critical Request <br /> Water needed.
            </div>
          </MarkerPopup>
        </MapMarker>

        <MapMarker longitude={91.79} latitude={22.36} >
          <MarkerContent />
          <MarkerPopup>
             <div className="text-sm font-medium text-slate-900">
              Medical Aid <br /> Team needed.
            </div>
          </MarkerPopup>
        </MapMarker>

      </Map>
      <div className="absolute top-4 left-4 z-[1000] bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 border border-slate-200">
        Live Intel
      </div>
    </div>
  )
}
