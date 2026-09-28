import React from 'react'

const Header = () => {
  return (
    //    <!-- Header / Navbar -->
    <header className="w-full bg-slate-900/80 backdrop-blur-md border-b border-indigo-900/40 py-4 px-6 sticky top-0 z-10 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-brand-600 to-accent-600 text-white p-2 rounded-xl shadow-md shadow-brand-500/20">
                    <i data-lucide="layers" className="w-6 h-6"></i>
                </div>
                <span className="font-bold text-xl tracking-tight text-white">PrimeStep <span className="text-xs text-brand-200 font-semibold px-2 py-0.5 bg-brand-900/60 rounded-full border border-brand-500/30">Pro Onboarding</span></span>
            </div>

        </div>
    </header>
  )
}

export default Header