import { ChevronDown, Radio, Send } from "lucide-react";

export default function ActionPage() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm h-full">
      <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <h3 className="font-medium text-slate-900 flex items-center gap-2">
          <Radio size={18} />
          Field Request
        </h3>
        <span className="text-[10px] font-mono text-slate-400 uppercase">
          CH-09
        </span>
      </div>

      <form className="p-4 space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5">
            Urgency Level
          </label>
          <div className="grid grid-cols-3 gap-2">
            <label className="cursor-pointer">
              <input type="radio" name="urgency" className="peer sr-only" />
              <div className="h-10 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-600 text-xs font-medium peer-checked:bg-slate-100 peer-checked:border-slate-400 peer-checked:text-slate-900 transition-all">
                Low
              </div>
            </label>
            <label className="cursor-pointer">
              <input type="radio" name="urgency" className="peer sr-only" />
              <div className="h-10 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-600 text-xs font-medium peer-checked:bg-amber-50 peer-checked:border-amber-300 peer-checked:text-amber-800 transition-all">
                Med
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="urgency"
                className="peer sr-only"
                defaultChecked
              />
              <div className="h-10 flex items-center justify-center rounded border border-red-200 bg-red-50 text-red-700 text-xs font-medium peer-checked:bg-red-100 peer-checked:border-red-500 peer-checked:text-red-900 peer-checked:shadow-sm transition-all border-dashed">
                Critical
              </div>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5">
            Item Needed
          </label>
          <div className="relative">
            <select className="appearance-none bg-white border border-slate-200 rounded px-3 py-2 w-full text-sm text-slate-900 focus:outline-none focus:border-slate-900 h-12">
              <option>Select Relief Item...</option>
              <option>Dry Food (Chira/Gur)</option>
              <option selected>Drinking Water (5L)</option>
              <option>ORS Saline</option>
              <option>Water Purification Tablets</option>
              <option>Tarpaulins</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-4 text-slate-400 pointer-events-none"
              size={16}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5">
              Quantity
            </label>
            <input
              type="number"
              className="appearance-none bg-white border border-slate-200 rounded px-3 py-2 w-full text-sm text-slate-900 focus:outline-none focus:border-slate-900 h-12 font-mono"
              placeholder="0"
              defaultValue="500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5">
              Unit
            </label>
            <input
              type="text"
              className="appearance-none border border-slate-200 rounded px-3 py-2 w-full text-sm text-slate-500 bg-slate-50 h-12"
              defaultValue="Bottles"
              readOnly
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5">
            Location / Village
          </label>
          <input
            type="text"
            className="appearance-none bg-white border border-slate-200 rounded px-3 py-2 w-full text-sm text-slate-900 focus:outline-none focus:border-slate-900 h-12"
            placeholder="e.g. Maijdee Court, Noakhali"
            defaultValue="Maijdee Court, Noakhali"
          />
        </div>

        <button
          type="button"
          className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded shadow-sm flex items-center justify-center gap-2 mt-2"
        >
          <Send size={16} />
          Dispatch Request
        </button>
        <p className="text-[10px] text-center text-slate-400 font-mono">
          TIMESTAMP: {new Date().toISOString()}
        </p>
      </form>
    </div>
  );
}
