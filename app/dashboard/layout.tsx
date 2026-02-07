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
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex min-h-screen bg-slate-50 ${inter.className} ${jetbrainsMono.variable}`}>
      <Sidebar />
      <div className="flex-1 lg:ml-64 w-full flex flex-col">
        <MobileNav />
        <main className="p-4 lg:p-8 max-w-7xl mx-auto w-full flex-1 relative">
          {children}
        </main>
      </div>
    </div>
  );
}
