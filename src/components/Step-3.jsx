import React from 'react'

const Step_3 = ({formData,handleChange}) => {
  return (
    <>
    <div className="step-content" data-step="3">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-white">Account Preferences</h2>
                        <p className="text-slate-400 text-sm">Customize your platform notifications and plan type.</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Subscription Tier *</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <label className="relative flex p-4 border rounded-xl border-indigo-900/60 hover:border-brand-500 cursor-pointer transition-all bg-slate-950/50 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-950/40 has-[:checked]:ring-2 has-[:checked]:ring-brand-500/30">
                                    <input type="radio" name="plan" value={formData.plan || "Standard (Free)"} checked className="sr-only" onChange={handleChange} />
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-white">Standard</span>
                                        <span className="text-xs text-slate-400">Free access to basic tools</span>
                                    </div>
                                </label>
                                <label className="relative flex p-4 border rounded-xl border-indigo-900/60 hover:border-brand-500 cursor-pointer transition-all bg-slate-950/50 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-950/40 has-[:checked]:ring-2 has-[:checked]:ring-brand-500/30">
                                    <input type="radio" name="plan"  
                                    value={formData.plan || "Pro Vault ($19/mo)"} className="sr-only" onChange={handleChange} />
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-white">Pro Vault</span>
                                        <span className="text-xs text-slate-400">Full catalog + premium themes</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Notifications</label>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" id="newsletter" name="notifications" value="Newsletter" checked className="w-4 h-4 text-brand-600 rounded border-indigo-900 bg-slate-950 focus:ring-brand-500" onChange={handleChange} />
                                    <span className="text-sm text-slate-300">Receive monthly VogueVault fashion trend reports</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" id="updates" name="notifications" value="Product Updates" checked className="w-4 h-4 text-brand-600 rounded border-indigo-900 bg-slate-950 focus:ring-brand-500" onChange={handleChange} />
                                    <span className="text-sm text-slate-300">Important product and security updates</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
                </>
  )
}

export default Step_3