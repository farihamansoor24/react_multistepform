import React from 'react'


const Step_4 = ({formData,setStep}) => {
    console.log(formData);
  return (
     <div className="step-content" data-step="4">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-white">Review & Confirm</h2>
                        <p className="text-slate-400 text-sm">Please verify your details before submitting.</p>
                    </div>

                    <div className="bg-slate-950/70 rounded-xl p-4 sm:p-6 border border-indigo-900/50 space-y-4 max-h-[350px] overflow-y-auto custom-scrollbar">
                        <div className="flex justify-between items-center pb-3 border-b border-indigo-900/40">
                            <div>
                                <span className="text-xs uppercase font-semibold text-indigo-400 tracking-wider">Account</span>
                                <p className="font-medium text-slate-200" id="summaryUsername">{formData.username}</p>
                                <p className="text-xs text-slate-400" id="summaryEmail">{formData.username}</p>
                            </div>
                            <button type="button" onClick={() => setStep(1)}className="text-xs text-brand-400 hover:text-brand-300 font-semibold underline">Edit</button>
                        </div>

                        <div className="flex justify-between items-center pb-3 border-b border-indigo-900/40">
                            <div>
                                <span className="text-xs uppercase font-semibold text-indigo-400 tracking-wider">Personal Info</span>
                                <p className="font-medium text-slate-200" id="summaryName">{formData.firstName} {formData.lastName}</p>
                                <p className="text-xs text-slate-400" id="summaryPhoneRole">{formData.phone}</p>
                                <p className="text-xs text-slate-400" id="summaryPhoneRole">{formData.role}</p>
                            </div>
                            <button type="button"  onClick={() => setStep(2)} className="text-xs text-brand-400 hover:text-brand-300 font-semibold underline">Edit</button>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-xs uppercase font-semibold text-indigo-400 tracking-wider">Preferences</span>
                                <p className="font-medium text-slate-200" id="summaryPlan">{formData.plan}</p>
                                <p className="text-xs text-slate-400" id="summaryNotifications">-</p>
                            </div>
                            <button type="button"  onClick={() => setStep(3)}className="text-xs text-brand-400 hover:text-brand-300 font-semibold underline">Edit</button>
                        </div>
                    </div>
                </div>
  )
}

export default Step_4