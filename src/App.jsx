import './App.css';
import { useState, useRef } from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import Step1 from './components/Step-1';
import Step2 from './components/Step-2';
import Step3 from './components/Step-3';
import Step4 from './components/Step-4';

function App() {
  const [step, setStep] = useState(1);
  const formRef = useRef(null); // Clean React DOM reference

  const [formData, setFormData] = useState({
    // Step-1
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    // Step-2
    firstName: "",
    lastName: "",
    phone: "",
    role: "",
    // Step-3
    subscription: "",
  });

  const totalSteps = 4;

  const stepTitles = {
    1: 'Account Details',
    2: 'Personal Profile',
    3: 'Account Preferences',
    4: 'Review & Confirm'
  };

  // Generic handler jo har type ke input field ki state update karega
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    // HTML5 validation check
    if (formRef.current && formRef.current.checkValidity()) {
      if (step < totalSteps) {
        setStep((prev) => prev + 1);
      }
    } else {
      formRef.current?.reportValidity(); // Error popup trigger karega
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Data Submitted:", formData);
    setStep(5); // Success Screen
  };

  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8 min-h-[calc(100vh-120px)]">
        <div className="w-full max-w-3xl bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-indigo-950/50 border border-indigo-500/20 overflow-hidden">
          
          {step <= totalSteps && (
            <div className="bg-slate-900/60 p-6 border-b border-indigo-900/40">
              {/* Desktop Tracker */}
              <div className="hidden sm:flex justify-between items-center relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 z-0"></div>
                <div
                  className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-brand-600 to-accent-500 -translate-y-1/2 z-0 transition-all duration-300"
                  style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                ></div>

                {[
                  { num: 1, label: 'Account' },
                  { num: 2, label: 'Personal' },
                  { num: 3, label: 'Preferences' },
                  { num: 4, label: 'Review' }
                ].map((s) => (
                  <div key={s.num} className="step-indicator z-10 flex flex-col items-center gap-1">
                    <div
                      className={`step-bubble w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-200 ${
                        s.num < step
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                          : s.num === step
                          ? 'bg-gradient-to-r from-brand-600 to-accent-600 text-white ring-4 ring-brand-900 shadow-lg shadow-brand-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {s.num < step ? '✓' : s.num}
                    </div>
                    <span className={`text-xs font-medium ${s.num <= step ? 'text-slate-200' : 'text-slate-400'}`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile Tracker */}
              <div className="sm:hidden flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                    Step {step} of {totalSteps}
                  </span>
                  <h3 className="text-sm font-bold text-white">{stepTitles[step]}</h3>
                </div>
                <div className="w-24 bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-brand-600 to-accent-500 h-full transition-all duration-300"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Form Wrapper */}
          {step <= totalSteps ? (
            <form ref={formRef} onSubmit={handleSubmit} className="p-6 sm:p-8">
              {/* STEP COMPONENTS */}
              {step === 1 && <Step1 formData={formData} handleChange={handleChange} />}
              {step === 2 && <Step2 formData={formData} handleChange={handleChange} />}
              {step === 3 && <Step3 formData={formData} handleChange={handleChange} />}
              {step === 4 && <Step4 formData={formData} setStep={setStep} />}

              {/* Action Buttons */}
              <div className="mt-8 flex justify-between items-center pt-4 border-t border-indigo-900/40">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 py-2.5 rounded-xl border border-indigo-800/60 bg-slate-800/50 text-slate-300 hover:bg-slate-800 font-medium text-sm transition-all flex items-center gap-2"
                  >
                    ← Previous
                  </button>
                ) : (
                  <div></div>
                )}

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-semibold text-sm shadow-lg shadow-brand-600/30 transition-all flex items-center gap-2"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold text-sm shadow-lg shadow-emerald-500/30 transition-all flex items-center gap-2"
                  >
                    Complete Registration ✓
                  </button>
                )}
              </div>
            </form>
          ) : (
            /* Success Screen */
            <div id="successScreen" className="p-8 sm:p-12 text-center">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce text-2xl font-bold">
                ✓
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Welcome Aboard!</h2>
              <p className="text-slate-300 max-w-md mx-auto mb-6">
                Your account has been created successfully.
              </p>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold text-sm transition-all inline-flex items-center gap-2 shadow-lg shadow-brand-500/25"
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;