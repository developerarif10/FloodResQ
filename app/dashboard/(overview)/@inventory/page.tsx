import { Filter, Pencil, Search } from "lucide-react";

export default async function InventoryPage() {
  // Simulate data fetch
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
      <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-slate-900">Central Inventory</h3>
          <span className="bg-slate-100 text-slate-600 text-[10px] font-mono px-1.5 py-0.5 rounded">
            LIVE
          </span>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search
              className="absolute left-3 top-2.5 text-slate-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search item or SKU..."
              className="appearance-none border border-slate-200 rounded px-3 py-2 pl-9 w-full md:w-64 text-xs h-9 focus:outline-none focus:border-slate-900"
            />
          </div>
          <button className="h-9 px-3 border border-slate-200 rounded text-slate-600 hover:bg-slate-50 flex items-center gap-1 text-xs font-medium">
            <Filter size={14} />
            Filter
          </button>
        </div>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Item Name
              </th>
              <th className="py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Category
              </th>
              <th className="py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500 w-48">
                Stock Level
              </th>
              <th className="py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Location
              </th>
              <th className="py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500 text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {/* Row 1 */}
            <tr className="group hover:bg-slate-50 transition-colors">
              <td className="py-3 px-4">
                <div className="font-medium text-slate-900">
                  ORS Saline (Packets)
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  SKU-9921
                </div>
              </td>
              <td className="py-3 px-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
                  Medical
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[85%]"></div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 w-12 text-right">
                    85%
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  12,500 units
                </div>
              </td>
              <td className="py-3 px-4 text-slate-600 text-xs">
                Feni Central Warehouse
              </td>
              <td className="py-3 px-4 text-right">
                <button className="text-slate-400 hover:text-slate-900 border border-slate-200 rounded p-1 hover:border-slate-400 bg-white">
                  <Pencil size={16} />
                </button>
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="group hover:bg-slate-50 transition-colors">
              <td className="py-3 px-4">
                <div className="font-medium text-slate-900">
                  Puffed Rice (Muri)
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  SKU-1022
                </div>
              </td>
              <td className="py-3 px-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-orange-50 text-orange-700 border border-orange-100">
                  Food
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[32%]"></div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 w-12 text-right">
                    32%
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">320 kg</div>
              </td>
              <td className="py-3 px-4 text-slate-600 text-xs">
                Comilla Depot
              </td>
              <td className="py-3 px-4 text-right">
                <button className="text-slate-400 hover:text-slate-900 border border-slate-200 rounded p-1 hover:border-slate-400 bg-white">
                  <Pencil size={16} />
                </button>
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="group hover:bg-slate-50 transition-colors">
              <td className="py-3 px-4">
                <div className="font-medium text-slate-900">
                  Tarpaulins (Heavy)
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  SKU-5501
                </div>
              </td>
              <td className="py-3 px-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                  Shelter
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[12%]"></div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 w-12 text-right">
                    12%
                  </span>
                </div>
                <div className="text-[10px] text-red-500 mt-1 font-medium">
                  Critical: 45 units
                </div>
              </td>
              <td className="py-3 px-4 text-slate-600 text-xs">
                Noakhali Field Ops
              </td>
              <td className="py-3 px-4 text-right">
                <button className="text-slate-400 hover:text-slate-900 border border-slate-200 rounded p-1 hover:border-slate-400 bg-white">
                  <Pencil size={16} />
                </button>
              </td>
            </tr>
            {/* Row 4 */}
            <tr className="group hover:bg-slate-50 transition-colors">
              <td className="py-3 px-4">
                <div className="font-medium text-slate-900">
                  Jerry Cans (10L)
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  SKU-3321
                </div>
              </td>
              <td className="py-3 px-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                  WASH
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[100%]"></div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 w-12 text-right">
                    100%
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  2,000 units
                </div>
              </td>
              <td className="py-3 px-4 text-slate-600 text-xs">
                Feni Central Warehouse
              </td>
              <td className="py-3 px-4 text-right">
                <button className="text-slate-400 hover:text-slate-900 border border-slate-200 rounded p-1 hover:border-slate-400 bg-white">
                  <Pencil size={16} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
