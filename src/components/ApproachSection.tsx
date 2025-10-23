export default function ApproachSection() {
  return (
    <section id="approach" className="py-20 bg-gradient-to-b from-blue-900/20 via-slate-900/50 to-green-900/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Our Approach: Reinventing Database Education
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            SQLGuru makes learning SQL easy, relevant, and accessible for everyone.
          </p>
        </div>

        {/* Four Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: "₹",
              title: "Affordable",
              description: "Industry-leading platform. Free tier for all. Unlock advanced learning at student-friendly prices.",
              color: "from-green-500 to-emerald-500",
              bgColor: "bg-green-900/20 border-green-400/30"
            },
            {
              icon: "🧠",
              title: "Personalized",
              description: "Every learner gets a unique track. AI adapts exercises and explanations to skill level and learning style.",
              color: "from-purple-500 to-pink-500",
              bgColor: "bg-purple-900/20 border-purple-400/30"
            },
            {
              icon: "🌍",
              title: "Multilingual",
              description: "Practice and learn in 10+ Indian languages. Inclusive by design.",
              color: "from-blue-500 to-cyan-500",
              bgColor: "bg-blue-900/20 border-blue-400/30"
            },
            {
              icon: "☁️",
              title: "No Installation",
              description: "Runs on any device, browser-based with zero setup. Instant access everywhere.",
              color: "from-orange-500 to-yellow-500",
              bgColor: "bg-orange-900/20 border-orange-400/30"
            }
          ].map((pillar, index) => (
            <div
              key={index}
              className={`${pillar.bgColor} backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl group`}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-full flex items-center justify-center text-2xl mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            SQLGuru vs Traditional SQL Learning
          </h3>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-white">Feature</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-green-400">SQLGuru</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-red-400">Traditional SQL Learning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    {
                      feature: "Content",
                      sqlguru: { text: "AI-driven, dynamic, practice-based", badge: "🤖 Smart" },
                      traditional: { text: "Static, textbook/theory heavy", badge: "📚 Limited" }
                    },
                    {
                      feature: "Language",
                      sqlguru: { text: "Multilingual, local language support", badge: "🌍 Inclusive" },
                      traditional: { text: "Primarily English, limited access", badge: "🚫 Exclusive" }
                    },
                    {
                      feature: "Pricing",
                      sqlguru: { text: "Free & affordable tiers, all devices", badge: "₹ Accessible" },
                      traditional: { text: "High fees, hardware required", badge: "💸 Expensive" }
                    },
                    {
                      feature: "Access",
                      sqlguru: { text: "Cloud/web, mobile/tablet/desktop", badge: "☁️ Anywhere" },
                      traditional: { text: "Labs required, location-bound", badge: "🏢 Restricted" }
                    },
                    {
                      feature: "Support",
                      sqlguru: { text: "Instant AI feedback, community forum", badge: "⚡ Real-time" },
                      traditional: { text: "Variable, usually limited", badge: "⏳ Delayed" }
                    }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors duration-200">
                      <td className="px-6 py-4 font-semibold text-white">{row.feature}</td>
                      <td className="px-6 py-4">
                        <div className="text-center">
                          <div className="text-green-400 text-sm font-medium mb-1">{row.sqlguru.badge}</div>
                          <div className="text-slate-300 text-sm">{row.sqlguru.text}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-center">
                          <div className="text-red-400 text-sm font-medium mb-1">{row.traditional.badge}</div>
                          <div className="text-slate-400 text-sm">{row.traditional.text}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* AI Features Block */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Powered by Advanced AI
                </span>
              </h3>
              <p className="text-xl text-slate-300">Cutting-edge artificial intelligence transforms how you learn SQL</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "AI Learning Paths",
                  description: "Automatically creates personalized curricula adapting to user strengths and weaknesses.",
                  animation: "💫"
                },
                {
                  icon: "❓",
                  title: "Custom Question Generator",
                  description: "Instantly generates new practice questions for every skill and topic.",
                  animation: "🔄"
                },
                {
                  icon: "⚡",
                  title: "Instant Feedback",
                  description: "Learners get real-time, clear explanations for every query/error.",
                  animation: "💬"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative mb-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <div className="absolute -top-2 -right-2 text-2xl animate-bounce">{feature.animation}</div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8 max-w-5xl mx-auto">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold text-white mb-4">Ready to try a smarter SQL learning experience?</h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join thousands of learners who are already experiencing the future of database education
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <span>🎮</span> Click for Live Demo!
              </button>
              <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center gap-2">
                <span>📊</span> View Platform Features
              </button>
            </div>
            
            <div className="mt-8 flex justify-center items-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>No Credit Card Required</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span>Free Forever Tier Available</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>100% Secure & Private</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}