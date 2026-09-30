import React from 'react';

const Step_1 = ({ formData, handleChange }) => {
  return (
    <div className="step-content" data-step="1">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">Account Information</h2>
        <p className="text-slate-400 text-sm">Setup your account credentials to access VogueVault.</p>
      </div>

      <div className="space-y-4">
        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-1">
            Username *
          </label>
          <div className="relative">
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              minLength="3"
              className="w-full pl-4 pr-4 py-2.5 rounded-xl border border-indigo-900/60 bg-slate-950/60 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
              placeholder="farihamansoor"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-4 pr-4 py-2.5 rounded-xl border border-indigo-900/60 bg-slate-950/60 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
              placeholder="fariha@example.com"
            />
          </div>
        </div>

        {/* Passwords */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">
              Password *
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
                className="w-full pl-4 pr-4 py-2.5 rounded-xl border border-indigo-900/60 bg-slate-950/60 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-1">
              Confirm Password *
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full pl-4 pr-4 py-2.5 rounded-xl border border-indigo-900/60 bg-slate-950/60 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step_1;