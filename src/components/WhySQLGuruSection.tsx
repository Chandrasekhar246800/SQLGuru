export default function WhySQLGuruSection() {
  return (
    <section id="why-sqlguru" className="relative py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
      {/* POC Demo Badge Ribbon */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
          <span>POC Demo: sql-theta.vercel.app/landing</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why SQLGuru?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transforming India's database education landscape with cutting-edge AI technology
          </p>
        </div>

        {/* Key Vision Points */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Vision Points */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Key Vision & Solutions</h3>
            {[
              {
                icon: "🇮🇳",
                title: "Bridging India's SQL Skills Gap",
                desc: "Addressing the critical shortage of database professionals in the Indian tech industry"
              },
              {
                icon: "💰",
                title: "Affordable & Accessible Learning",
                desc: "Cost-effective education solutions accessible to students and professionals across all economic backgrounds"
              },
              {
                icon: "🤖",
                title: "AI-Personalized Learning Paths",
                desc: "Adaptive curriculum that adjusts to individual learning pace and skill level"
              },
              {
                icon: "🌐",
                title: "Multi-Language Support (10+ Languages)",
                desc: "Breaking language barriers with support for Hindi, Tamil, Telugu, Bengali, and 6+ regional languages"
              }
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl flex-shrink-0 mt-1">{point.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{point.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Projected National Impact</h3>
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🎯</div>
                <h4 className="text-2xl font-bold text-white mb-4">Our 5-Year Mission</h4>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    number: "1 Million+",
                    label: "Professionals Trained",
                    icon: "👥",
                    color: "text-blue-400"
                  },
                  {
                    number: "300,000+",
                    label: "New Jobs Created",
                    icon: "💼",
                    color: "text-green-400"
                  },
                  {
                    number: "₹60,000 Crore",
                    label: "Economic Value Generated",
                    icon: "📈",
                    color: "text-purple-400"
                  }
                ].map((impact, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                    <div className="text-3xl">{impact.icon}</div>
                    <div className="flex-1">
                      <div className={`text-2xl font-bold ${impact.color}`}>{impact.number}</div>
                      <div className="text-slate-300 text-sm">{impact.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-slate-300 text-sm">
                  <span className="text-yellow-400">⭐</span> Positioning India as a global leader in database technology education
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Database Education in India?</h3>
            <p className="text-slate-300 mb-6">Join us in revolutionizing how India learns and masters database technologies</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                View Full Proposal
              </button>
              <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}