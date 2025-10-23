export default function CrisisSection() {
  return (
    <section id="crisis" className="py-20 bg-gradient-to-b from-red-900/10 via-orange-900/10 to-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🚨</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              India's Database Skills Crisis
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Despite being the world's largest IT services hub, India faces a severe shortage of qualified database professionals
          </p>
        </div>

        {/* Crisis Stats Banner */}
        <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-sm border border-red-400/20 rounded-2xl p-6 mb-16 text-center">
          <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">43% of Tech Interview Failures</div>
          <div className="text-lg text-slate-300">are due to poor SQL and database skills</div>
          <div className="text-sm text-slate-400 mt-2">Source: TechGig Survey 2024, NASSCOM Skills Report</div>
        </div>

        {/* Crisis Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "📊",
              title: "Massive Skills Gap",
              problem: "2.5 Million database jobs unfilled by 2025",
              impact: "Only 18% of CS graduates have hands-on SQL experience",
              color: "border-red-400/30 bg-red-900/10"
            },
            {
              icon: "🔬",
              title: "Lack of Practical Exposure",
              problem: "Theory-heavy curriculum in universities",
              impact: "85% students never work with real databases during education",
              color: "border-orange-400/30 bg-orange-900/10"
            },
            {
              icon: "💸",
              title: "Expensive Database Labs",
              problem: "High infrastructure costs for educational institutions",
              impact: "₹5-10 Lakhs setup cost per computer lab with enterprise databases",
              color: "border-yellow-400/30 bg-yellow-900/10"
            },
            {
              icon: "🌐",
              title: "Language Barriers",
              problem: "English-only learning materials and interfaces",
              impact: "72% of Indian students prefer native language instruction",
              color: "border-purple-400/30 bg-purple-900/10"
            },
            {
              icon: "🎯",
              title: "Employment Competitiveness",
              problem: "Skills mismatch with industry requirements",
              impact: "Average 8-month skill gap period before job readiness",
              color: "border-blue-400/30 bg-blue-900/10"
            },
            {
              icon: "⏱️",
              title: "Outdated Learning Methods",
              problem: "Traditional classroom-based database education",
              impact: "6x slower skill acquisition compared to interactive methods",
              color: "border-pink-400/30 bg-pink-900/10"
            }
          ].map((crisis, index) => (
            <div key={index} className={`p-6 backdrop-blur-sm border rounded-xl hover:scale-105 transition-all duration-300 ${crisis.color}`}>
              <div className="text-4xl mb-4">{crisis.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{crisis.title}</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-red-300 font-semibold mb-1">Current Problem:</div>
                  <div className="text-slate-300 text-sm">{crisis.problem}</div>
                </div>
                <div>
                  <div className="text-sm text-orange-300 font-semibold mb-1">Real Impact:</div>
                  <div className="text-slate-300 text-sm font-medium">{crisis.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Crisis Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { stat: "68%", label: "IT Companies Report SQL Skill Shortage", icon: "🏢" },
            { stat: "₹40K", label: "Average Salary Gap Due to Skills Deficit", icon: "💰" },
            { stat: "3.2M", label: "Database Jobs Expected by 2027", icon: "📈" },
            { stat: "15%", label: "Current Skill Fulfillment Rate", icon: "⚠️" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-red-400 mb-1">{stat.stat}</div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Crisis Solution Preview */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-2xl font-bold text-white mb-4">SQLGuru: The Solution India Needs</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our AI-powered platform directly addresses each of these critical challenges with innovative, 
              accessible, and scalable solutions designed specifically for the Indian market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                See Our Solutions
              </button>
              <button className="px-8 py-3 border-2 border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
                Download Crisis Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}