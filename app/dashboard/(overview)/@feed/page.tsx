export default async function FeedPage() {
  // Simulate slower data fetch
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm h-full">
      <div className="p-4 border-b border-slate-100 flex justify-between items-center">
        <h3 className="font-medium text-slate-900">Live Logistics Feed</h3>
        <button className="text-xs text-slate-500 hover:text-slate-900 border-b border-dashed border-slate-300">
          View All Logs
        </button>
      </div>
      <div className="divide-y divide-slate-100">
        {/* Log Item */}
        <div className="p-4 flex gap-4 hover:bg-slate-50 transition-colors">
          <div className="flex-shrink-0 mt-1">
            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          </div>
          <div className="flex-1">
            <p className="text-sm text-slate-900 font-medium">
              Truck{" "}
              <span className="font-mono bg-slate-100 px-1 rounded text-slate-600">
                TR-405
              </span>{" "}
              arrived at Warehouse B
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Successfully unloaded 200kg Puffed Rice (Muri).
            </p>
          </div>
          <div className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
            10m ago
          </div>
        </div>
        {/* Log Item */}
        <div className="p-4 flex gap-4 hover:bg-slate-50 transition-colors">
          <div className="flex-shrink-0 mt-1">
            <div className="h-2 w-2 rounded-full bg-amber-500"></div>
          </div>
          <div className="flex-1">
            <p className="text-sm text-slate-900 font-medium">
              Request{" "}
              <span className="font-mono bg-slate-100 px-1 rounded text-slate-600">
                #892
              </span>{" "}
              Priority Escalated
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Volunteer Rakib flagged critical water shortage in Lakshmipur.
            </p>
          </div>
          <div className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
            24m ago
          </div>
        </div>
        {/* Log Item */}
        <div className="p-4 flex gap-4 hover:bg-slate-50 transition-colors">
          <div className="flex-shrink-0 mt-1">
            <div className="h-2 w-2 rounded-full bg-slate-300"></div>
          </div>
          <div className="flex-1">
            <p className="text-sm text-slate-900 font-medium">
              Inventory Updated
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Jubaed added 5,000 units of Water Purification Tablets.
            </p>
          </div>
          <div className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
            1h ago
          </div>
        </div>
      </div>
    </div>
  );
}
