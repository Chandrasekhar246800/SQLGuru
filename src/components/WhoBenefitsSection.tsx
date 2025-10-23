export default function WhoBenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-emerald-900/10 via-slate-900/30 to-blue-900/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="text-6xl mb-6">🤝</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Who Benefits from SQLGuru?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed">
            Empowering individuals and institutions for a brighter future.
          </p>
        </div>

        {/* Two-Column Impact Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Students & Professionals */}
          <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/20 backdrop-blur-sm border border-emerald-400/30 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
            {/* Header with Icon */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                🎓
              </div>
              <h3 className="text-3xl font-bold text-white">For Learners</h3>
            </div>

            {/* Benefits List */}
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: "💼",
                  title: "Gain practical, job-ready SQL skills & certifications",
                  desc: "Industry-aligned curriculum with hands-on projects"
                },
                {
                  icon: "📈",
                  title: "Boost placement rates—qualify for 2x more opportunities",
                  desc: "Proven track record of improving job prospects"
                },
                {
                  icon: "💰",
                  title: "Affordable, personalized learning paths",
                  desc: "Cost-effective education accessible to all backgrounds"
                },
                {
                  icon: "🌐",
                  title: "Accessible in 10+ languages including Tamil, Hindi, Telugu, and more",
                  desc: "Breaking language barriers for inclusive education"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-2xl flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-emerald-200 mb-2 group-hover:text-white transition-colors duration-300">
                      {benefit.title}
                    </div>
                    <div className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                      {benefit.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Illustration Area */}
            <div className="bg-emerald-600/10 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-6 text-center">
              <div className="flex justify-center items-center gap-4 text-4xl mb-4">
                <span>👨‍🎓</span>
                <span>👩‍🎓</span>
                <span>💻</span>
                <span>📜</span>
              </div>
              <div className="text-emerald-200 font-medium">Diverse graduates with certified skills</div>
            </div>
          </div>

          {/* Right Column - Institutions & Government */}
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
            {/* Header with Icon */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                🏛️
              </div>
              <h3 className="text-3xl font-bold text-white">For Institutions & Leaders</h3>
            </div>

            {/* Benefits List */}
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: "💸",
                  title: "Up to 40% reduction in training costs",
                  desc: "Significant savings on infrastructure and resources"
                },
                {
                  icon: "🚀",
                  title: "Efficient university-wide deployment—no hardware needed",
                  desc: "Cloud-based solution with instant scalability"
                },
                {
                  icon: "📊",
                  title: "Track and improve student outcomes at scale",
                  desc: "Analytics dashboard for monitoring progress and results"
                },
                {
                  icon: "🏆",
                  title: "Supports education, employment, and skill initiatives",
                  desc: "Aligned with national digital education goals"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-2xl flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-blue-200 mb-2 group-hover:text-white transition-colors duration-300">
                      {benefit.title}
                    </div>
                    <div className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                      {benefit.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Illustration Area */}
            <div className="bg-blue-600/10 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 text-center">
              <div className="flex justify-center items-center gap-4 text-4xl mb-4">
                <span>🏫</span>
                <span>🛡️</span>
                <span>📈</span>
                <span>⚙️</span>
              </div>
              <div className="text-blue-200 font-medium">Campus-wide solutions & analytics dashboard</div>
            </div>
          </div>
        </div>

        {/* Impact Infographic Block */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Measurable Impact at Scale</h3>
            <p className="text-lg text-slate-300">Data-driven results that transform the educational landscape</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📈",
                stat: "+35%",
                label: "Placement Rate Uplift",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-900/20 border-green-400/30"
              },
              {
                icon: "💰",
                stat: "₹60,000 Cr",
                label: "Economic Value Creation",
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-900/20 border-yellow-400/30"
              },
              {
                icon: "💼",
                stat: "300,000+",
                label: "New Jobs Enabled",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-900/20 border-blue-400/30"
              },
              {
                icon: "🌍",
                stat: "10+",
                label: "Supported Languages",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-900/20 border-purple-400/30"
              }
            ].map((impact, index) => (
              <div
                key={index}
                className={`${impact.bgColor} backdrop-blur-sm border rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl group`}
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${impact.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  {impact.icon}
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${impact.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {impact.stat}
                </div>
                <div className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  {impact.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Outcomes for Your Organization
            </h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover how SQLGuru transforms outcomes for you, your campus, or your organization. 
              Contact us for partnerships and see the difference data-driven education makes!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[280px] justify-center">
                <span>🤝</span> Partner with SQLGuru
              </button>
              <button className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-full hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center backdrop-blur-sm bg-white/5">
                <span>📊</span> View Impact Report
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Custom Deployment Available</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <span>🎯</span>
                <span>Proven ROI in 6 Months</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <span>🏆</span>
                <span>Award-Winning Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}