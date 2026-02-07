import { AlertTriangle, Bell, ClipboardList, Truck } from "lucide-react";

export default async function StatsPage() {
  // Simulate data fetching delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Stat Card 1 */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col justify-between h-32">
        <div className="flex justify-between items-start">
          <span className="text-sm font-medium text-slate-500">
            Active Requests
          </span>
          <ClipboardList className="text-slate-400" size={20} />
        </div>
        <div className="mt-auto">
          <span className="text-3xl font-mono font-medium text-slate-900">
            142
          </span>
          <span className="text-xs text-emerald-600 font-medium ml-2">
            +12 since 1hr ago
          </span>
        </div>
      </div>

      {/* Stat Card 2 */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col justify-between h-32">
        <div className="flex justify-between items-start">
          <span className="text-sm font-medium text-slate-500">
            Trucks in Transit
          </span>
          <Truck className="text-slate-400" size={20} />
        </div>
        <div className="mt-auto">
          <span className="text-3xl font-mono font-medium text-slate-900">
            08
          </span>
          <span className="text-xs text-slate-500 ml-2">
            Heading to Noakhali/Feni
          </span>
        </div>
      </div>

      {/* Stat Card 3: Alert */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden">
        <div className="absolute right-0 top-0 p-3 opacity-10">
          <AlertTriangle size={80} />
        </div>
        <div className="flex justify-between items-start z-10">
          <span className="text-sm font-medium text-red-800 uppercase tracking-wide">
            Critical Zones
          </span>
          <Bell className="text-red-600 animate-pulse" size={20} />
        </div>
        <div className="mt-auto z-10">
          <span className="text-3xl font-mono font-medium text-red-900">
            03
          </span>
          <span className="text-xs text-red-700 font-medium ml-2">
            Feni Sadar, Parshuram, Mirsarai
          </span>
        </div>
      </div>
    </div>
  );
}
