import { useState } from 'react'
import { Check, Shield, Zap, Sparkles, DollarSign, ArrowRight } from 'lucide-react'

export default function App() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 rounded-xl text-slate-900 font-black tracking-wider text-xl shadow-lg shadow-cyan-500/20">
              BT
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              B-TECH
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
          </nav>
          <div>
            <a href="#pricing" className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-semibold border border-slate-700 transition-all">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero / Pitch Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-400 mb-6 backdrop-blur">
            <Sparkles className="w-3.5 h-3.5" /> Traditional Code, High Performance
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
            Build Faster. Automate Smarter. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Scale Without Limits.
            </span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            B-Tech delivers high-speed cloud infrastructure tools built purely on traditional, optimized code bases. Monetize, deploy, and manage instantly.
          </p>

          {/* Dynamic Sign Up CTA */}
          <div className="max-w-md mx-auto">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 bg-slate-800/40 p-2 rounded-xl border border-slate-700 backdrop-blur">
                <input
                  type="email"
                  required
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent px-4 py-3 text-sm focus:outline-none flex-grow text-white placeholder:text-slate-500"
                />
                <button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-900 font-bold px-6 py-3 rounded-lg text-sm transition-all shadow-md shadow-cyan-500/10 flex items-center justify-center gap-2 whitespace-nowrap">
                  Join Beta <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 p-4 rounded-xl font-medium text-sm">
                🎉 Welcome to B-Tech! Check your email for secure setup instructions.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      <section id="features" className="py-20 border-t border-slate-800 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Engineered to Convert Traffic Into Revenue</h2>
            <p className="text-slate-400">Everything you need to launch a high-performance web platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ultra Low Latency</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Traditional architectures optimized for extreme server and execution performance.</p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ironclad Vaulting</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Advanced data protection protocols handling user operations seamlessly securely.</p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all group">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Stripe Monetization</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Pre-mapped webhooks to spin up recurring billing systems immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization / Pricing Tiers */}
      <section id="pricing" className="py-20 border-t border-slate-800 bg-slate-950/60 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.1),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Flexible Subscription Monetization</h2>
            <p className="text-slate-400 mb-6">Choose how you want to build or scale your B-Tech accounts.</p>
            
            {/* Monthly / Annual Toggle Switch */}
            <div className="inline-flex items-center gap-3 bg-slate-900 border border-slate-800 p-1 rounded-xl">
              <button 
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${!isAnnual ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Monthly Billing
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${isAnnual ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Annual Billing <span className="text-cyan-400 ml-1 font-bold">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">B-Tech Basic</h3>
                <p className="text-slate-400 text-sm mb-6">Essential core infrastructure templates for new software modules.</p>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">${isAnnual ? '19' : '24'}</span>
                  <span className="text-slate-500 text-sm">/month</span>
                </div>
                <ul className="space-y-3.5 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0" /> 3 Running Traditional App Pipelines</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0" /> 5GB Secure Shared Storage Layer</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0" /> Standard Global Edge Cache</li>
                </ul>
              </div>
              <button className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold py-3 rounded-xl text-sm transition-all">
                Launch Basic Module
              </button>
            </div>

{/* Pro Plan */}


Most Popular


B-Tech Enterprise
High capacity pipelines optimized for heavy transactional loads.

${isAnnual ? '79' : '99'}
/month


 Unlimited Database Code Pipelines
 100GB Scalable Encrypted Cloud Disk
 Real-time Dedicated Database Webhooks
 24/7 Production Systems Architecture SupportGo Premium




{/* Footer */}

© 2026 B-TECH Global Software Systems. All traditional properties reserved.


)
}---
            
