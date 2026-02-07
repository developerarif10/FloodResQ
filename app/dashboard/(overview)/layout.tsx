
export default function OverviewLayout({
  children,
  stats,
  action,
  feed,
  inventory,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
  action: React.ReactNode;
  feed: React.ReactNode;
  inventory: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
       {children}
      {/* Section 1: Dashboard Stats */}
      <div>
        <h2 className="text-lg font-medium tracking-tight text-slate-900 mb-4">
          Situation Overview
        </h2>
        {stats}
      </div>

      {/* Section 2: Split View (Feed & Form) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Field Request Form */}
        <div className="lg:col-span-1">{action}</div>
        
         {/* Right: Activity Feed & Logs */}
        <div className="lg:col-span-2 flex flex-col gap-8">{feed}</div>
      </div>

      {/* Section 3: Inventory Grid */}
      <div>{inventory}</div>
    </div>
  );
}
