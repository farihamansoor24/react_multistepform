
const Step_2 = ({formData,handleChange}) => {
  return (
    <>
    <div className="step-content" data-step="2">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-white">Personal Profile</h2>
                        <p className="text-slate-400 text-sm">Tell us a little bit more about yourself.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1">First Name *</label>
                                <input type="text" id="firstName" name="firstName" required
                                    className="w-full px-4 py-2.5 rounded-xl border border-indigo-900/60 bg-slate-950/60 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                    placeholder="Fariha"
                                    value={formData.firstName || ''}
                                    onChange={handleChange} />
                                <span className="error-msg text-xs text-rose-400 mt-1 hidden">First name is required.</span>
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-1">Last Name *</label>
                                <input type="text" id="lastName" name="lastName" required
                                    className="w-full px-4 py-2.5 rounded-xl border border-indigo-900/60 bg-slate-950/60 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                    placeholder="Mansoor"
                                    value={formData.lastName || ''}
                                    onChange={handleChange}
                                    />
                                <span className="error-msg text-xs text-rose-400 mt-1 hidden">Last name is required.</span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Phone Number *</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                                    <i data-lucide="phone" className="w-5 h-5"></i>
                                </span>
                                <input type="tel" id="phone" name="phone" required pattern="[0-9\-\+\s]{10,}"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-indigo-900/60 bg-slate-950/60 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                    placeholder="+92 000000000"
                                    value={formData.phone || ''}
                                    onChange={handleChange}
                                    />
                            </div>
                            <span className="error-msg text-xs text-rose-400 mt-1 hidden">Please enter a valid phone number.</span>
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-1">Primary Industry / Role *</label>
                            <select id="role" name="role" required
                                className="w-full px-4 py-2.5 rounded-xl border border-indigo-900/60 bg-slate-950/60 text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all " value={formData.role}
                                    onChange={handleChange}>
                                <option value="" className="bg-slate-900">Select your role</option>
                                <option value="Fashion Designer" className="bg-slate-900">Fashion Designer</option>
                                <option value="E-commerce Merchant" className="bg-slate-900">E-commerce Merchant</option>
                                <option value="Frontend Developer" className="bg-slate-900">Frontend Developer</option>
                                <option value="Stylist / Model" className="bg-slate-900">Stylist / Model</option>
                                <option value="Other" className="bg-slate-900">Other</option>
                            </select>
                            <span className="error-msg text-xs text-rose-400 mt-1 hidden">Please select a role.</span>
                        </div>
                    </div>
                </div>
                {/* <div className="mt-8 flex justify-between items-center pt-4 border-t border-indigo-900/40">
                    <button type="button" id="prevBtn" className="hidden px-5 py-2.5 rounded-xl border border-indigo-800/60 bg-slate-800/50 text-slate-300 hover:bg-slate-800 font-medium text-sm transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={()=>setStep((prev)=> prev-1)}>
                        <i data-lucide="arrow-left" className="w-4 h-4"></i> Previous
                    </button>
                    <div></div>
                     {/* <!-- Spacer htmlFor flex alignment when prev is hidden --> */}

                  {/* <button type="button" id="nextBtn" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-semibold text-sm shadow-lg shadow-brand-600/30 hover:shadow-brand-500/50 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-900" onClick={()=>setStep((prev)=> prev+1)}>
                        Next <i data-lucide="arrow-right" className="w-4 h-4"></i>
                    </button>
                
                </div> */}
                </>
  )
}

export default Step_2