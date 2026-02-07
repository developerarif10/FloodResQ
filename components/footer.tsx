'use client'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16 px-4 border-t-2 border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Project info */}
          <div className="text-center md:text-left">
            <p className="font-black text-lg text-slate-100">FloodResQ</p>
            <p className="text-slate-400 text-sm mt-1">Open Source Initiative</p>
          </div>

          {/* Center: Links */}
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              Documentation
            </a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Right: Bangladesh flag */}
          <div className="text-center md:text-right">
            <p className="text-2xl mb-1">🇧🇩</p>
            <p className="font-black text-slate-100">Built for Bangladesh</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-slate-800 my-8"></div>

        {/* Bottom: Copyright */}
        <div className="text-center text-slate-500 text-xs">
          <p>© 2024 FloodResQ. Released under MIT License. Made with dedication for disaster relief coordination.</p>
        </div>
      </div>
    </footer>
  )
}
