export default function Loading() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm h-[500px] animate-pulse">
      <div className="p-4 border-b border-slate-100 h-14 bg-slate-50/50" />
      <div className="p-4 space-y-4">
        <div className="h-16 bg-slate-100 rounded" />
        <div className="h-12 bg-slate-100 rounded" />
        <div className="grid grid-cols-2 gap-3">
          <div className="h-12 bg-slate-100 rounded" />
          <div className="h-12 bg-slate-100 rounded" />
        </div>
        <div className="h-12 bg-slate-100 rounded" />
        <div className="h-12 bg-slate-200 rounded" />
      </div>
    </div>
  );
}
