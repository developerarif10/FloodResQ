export default function Loading() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm animate-pulse">
      <div className="p-4 border-b border-slate-100 h-16 flex justify-between">
        <div className="h-6 w-32 bg-slate-200 rounded" />
        <div className="h-8 w-48 bg-slate-100 rounded" />
      </div>
      <div className="p-4 space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-4 w-1/4 bg-slate-100 rounded" />
            <div className="h-4 w-1/4 bg-slate-100 rounded" />
            <div className="h-4 w-1/4 bg-slate-100 rounded" />
            <div className="h-4 w-1/4 bg-slate-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
