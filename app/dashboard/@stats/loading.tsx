export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm h-32 animate-pulse"
        >
          <div className="h-4 w-24 bg-slate-100 rounded mb-4" />
          <div className="h-8 w-16 bg-slate-100 rounded mt-auto" />
        </div>
      ))}
    </div>
  );
}
