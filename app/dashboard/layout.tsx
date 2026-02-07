import { MobileNav } from "@/components/dashboard/MobileNav";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function DashboardLayout({
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
    <div className={`flex min-h-screen bg-slate-50 ${inter.className} ${jetbrainsMono.variable}`}>
      <Sidebar />
      <div className="flex-1 lg:ml-64 w-full flex flex-col">
        <MobileNav />
        <main className="p-4 lg:p-8 max-w-7xl mx-auto space-y-8 w-full">
          {children} {/* For /dashboard page content if any, potentially hidden or used for specific routes */}
          
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
        </main>
      </div>
    </div>
  );
}
