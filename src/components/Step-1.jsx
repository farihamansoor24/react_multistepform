import React from 'react'

const Step_1 = ({setStep}) => {

  return (
    <>
    <div className="step-content" data-step="1">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-white">Account Information</h2>
                        <p className="text-slate-400 text-sm">Setup your account credentials to access VogueVault.</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-1">Username *</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                                    <i data-lucide="user" className="w-5 h-5"></i>
                                </span>
                                <input type="text" id="username" name="username" required minLength="3"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-indigo-900/60 bg-slate-950/60 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                    placeholder="farihamansoor" />
                            </div>
                            <span className="error-msg text-xs text-rose-400 mt-1 hidden">Please enter a valid username (min 3 characters).</span>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address *</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                                    <i data-lucide="mail" className="w-5 h-5"></i>
                                </span>
                                <input type="email" id="email" name="email" required
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-indigo-900/60 bg-slate-950/60 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                    placeholder="fariha@example.com" />
                            </div>
                            <span className="error-msg text-xs text-rose-400 mt-1 hidden">Please enter a valid email address.</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">Password *</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                                        <i data-lucide="lock" className="w-5 h-5"></i>
                                    </span>
                                    <input type="password" id="password" name="password" required minLength="6"
                                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-indigo-900/60 bg-slate-950/60 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                        placeholder="••••••••" />
                                </div>
                                <span className="error-msg text-xs text-rose-400 mt-1 hidden">Password must be at least 8 characters.</span>
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-1">Confirm Password *</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                                        <i data-lucide="shield-check" className="w-5 h-5"></i>
                                    </span>
                                    <input type="password" id="confirmPassword" name="confirmPassword" required
                                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-indigo-900/60 bg-slate-950/60 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                        placeholder="••••••••" />
                                </div>
                                <span className="error-msg text-xs text-rose-400 mt-1 hidden">Passwords do not match.</span>
                            </div>
                        </div>
                    </div>
    </div>
     {/* <div className="mt-8 flex justify-between items-center pt-4 border-t border-indigo-900/40">
 

                  <button type="button" id="nextBtn" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-semibold text-sm shadow-lg shadow-brand-600/30 hover:shadow-brand-500/50 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-900" onClick={()=>setStep((prev)=> prev+1)}>
                        Next <i data-lucide="arrow-right" className="w-4 h-4"></i>
                    </button>
                
                </div> */}
                </>
  )
}

export default Step_1