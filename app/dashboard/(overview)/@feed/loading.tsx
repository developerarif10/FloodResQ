export default function Loading() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm h-full animate-pulse">
      <div className="p-4 border-b border-slate-100 h-14" />
      <div className="divide-y divide-slate-100">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-4 flex gap-4">
            <div className="h-2 w-2 rounded-full bg-slate-200 mt-1" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-3/4 bg-slate-200 rounded" />
              <div className="h-3 w-1/2 bg-slate-100 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
