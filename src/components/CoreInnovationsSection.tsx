export default function CoreInnovationsSection() {
  return (
    <section id="innovations" className="py-24 bg-gradient-to-b from-purple-900/10 via-slate-900/30 to-cyan-900/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Core Innovations: The Future of SQL Learning
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed">
            Harness AI, modern UX, and intuitive learning for breakthrough results.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: "🧠",
              codeSymbol: "</> ",
              title: "AI-Generated Questions",
              description: "Endless, adaptive SQL challenges generated instantly to match your skill and curriculum needs.",
              color: "from-purple-600 to-pink-600",
              bgGradient: "from-purple-900/30 to-pink-900/20",
              borderColor: "border-purple-400/30",
              glowColor: "shadow-purple-500/20"
            },
            {
              icon: "💬",
              codeSymbol: "{ } ",
              title: "Natural Language to SQL",
              description: "Just type plain English—our AI converts your requests to optimized SQL in real time.",
              color: "from-blue-600 to-cyan-600",
              bgGradient: "from-blue-900/30 to-cyan-900/20",
              borderColor: "border-blue-400/30",
              glowColor: "shadow-blue-500/20"
            },
            {
              icon: "🐛",
              codeSymbol: "⚠️ ",
              title: "Error Explanation",
              description: "Get clear, actionable feedback for every SQL mistake. Learn *why*—not just what—to fix.",
              color: "from-red-600 to-orange-600",
              bgGradient: "from-red-900/30 to-orange-900/20",
              borderColor: "border-red-400/30",
              glowColor: "shadow-red-500/20"
            },
            {
              icon: "⚡",
              codeSymbol: "📈 ",
              title: "Query Optimization",
              description: "AI analyzes and improves your SQL queries, boosting speed and performance for real-world data.",
              color: "from-green-600 to-emerald-600",
              bgGradient: "from-green-900/30 to-emerald-900/20",
              borderColor: "border-green-400/30",
              glowColor: "shadow-green-500/20"
            },
            {
              icon: "🎤",
              codeSymbol: "🔊 ",
              title: "Voice-Based Learning",
              description: "Interact hands-free—ask questions, run queries, and get audible feedback using voice commands.",
              color: "from-indigo-600 to-purple-600",
              bgGradient: "from-indigo-900/30 to-purple-900/20",
              borderColor: "border-indigo-400/30",
              glowColor: "shadow-indigo-500/20"
            },
            {
              icon: "🤖",
              codeSymbol: "💭 ",
              title: "AI Tutor Chatbot",
              description: "Conversational assistant guides, motivates, and adapts to your learning pace, anytime and anywhere.",
              color: "from-teal-600 to-blue-600",
              bgGradient: "from-teal-900/30 to-blue-900/20",
              borderColor: "border-teal-400/30",
              glowColor: "shadow-teal-500/20"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm border ${feature.borderColor} rounded-2xl p-8 hover:scale-105 hover:${feature.glowColor} hover:shadow-2xl transition-all duration-500`}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Animated corner accent */}
              <div className={`absolute top-3 right-3 w-3 h-3 bg-gradient-to-r ${feature.color} rounded-full animate-pulse`}></div>
              
              {/* Icon and Code Symbol */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <div className="text-2xl font-mono text-slate-400 group-hover:text-white transition-colors duration-300">
                  {feature.codeSymbol}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Interactive Editor Demo Area */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Experience SQLGuru: The Interactive Editor
                </span>
              </h3>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Type a query, see feedback, ask our AI tutor—in one seamless workspace.
              </p>
            </div>

            {/* Mock Editor Interface */}
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
              {/* Editor Header */}
              <div className="bg-slate-800/90 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300 text-sm font-medium">SQLGuru Editor</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>AI Assistant Active</span>
                </div>
              </div>

              {/* Editor Content */}
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Query Panel */}
                <div className="lg:col-span-2 p-6 border-r border-slate-700/50">
                  <div className="text-sm text-slate-400 mb-3 flex items-center gap-2">
                    <span>📝</span> SQL Query Editor
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-blue-400">SELECT</div>
                    <div className="text-white ml-4">customer_name,</div>
                    <div className="text-white ml-4">order_total</div>
                    <div className="text-blue-400">FROM</div>
                    <div className="text-white ml-4">customers c</div>
                    <div className="text-blue-400">JOIN</div>
                    <div className="text-white ml-4">orders o ON c.id = o.customer_id</div>
                    <div className="text-blue-400">WHERE</div>
                    <div className="text-white ml-4">order_date {'>='}= '2024-01-01'</div>
                    <div className="text-green-400 animate-pulse">|</div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                      <span>📊</span> Query Results
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-xs">
                      <div className="grid grid-cols-2 gap-4 text-slate-300">
                        <div className="font-semibold border-b border-slate-600 pb-1">Customer Name</div>
                        <div className="font-semibold border-b border-slate-600 pb-1">Order Total</div>
                        <div>John Smith</div>
                        <div>₹2,500</div>
                        <div>Priya Sharma</div>
                        <div>₹1,800</div>
                        <div>Rajesh Kumar</div>
                        <div>₹3,200</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Assistant Panel */}
                <div className="p-6 bg-slate-800/30">
                  <div className="text-sm text-slate-400 mb-3 flex items-center gap-2">
                    <span>🤖</span> AI Assistant
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="bg-blue-600/20 rounded-lg p-3 border border-blue-500/30">
                      <div className="text-blue-400 font-medium mb-1">✨ Suggestion</div>
                      <div className="text-slate-300">Consider adding an index on order_date for better performance!</div>
                    </div>
                    <div className="bg-green-600/20 rounded-lg p-3 border border-green-500/30">
                      <div className="text-green-400 font-medium mb-1">✅ Query Optimized</div>
                      <div className="text-slate-300">Great job using JOIN instead of subqueries!</div>
                    </div>
                    <div className="bg-purple-600/20 rounded-lg p-3 border border-purple-500/30">
                      <div className="text-purple-400 font-medium mb-1">💡 Learning Tip</div>
                      <div className="text-slate-300">Want to learn about window functions next?</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Button */}
            <div className="text-center mt-8">
              <button className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
                <span>🚀</span> Launch Editor Demo
              </button>
              <p className="text-sm text-slate-400 mt-3">Experience the future of SQL learning in your browser</p>
            </div>
          </div>
        </div>

        {/* Technology Badges */}
        <div className="text-center">
          <h4 className="text-xl font-semibold text-white mb-8">Powered by Cutting-Edge Technology</h4>
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {[
              { badge: "🔥 Powered by GPT-4", color: "from-orange-500 to-red-500" },
              { badge: "🌍 Supports 10+ Indian Languages", color: "from-blue-500 to-cyan-500" },
              { badge: "📱 Mobile-Friendly Design", color: "from-green-500 to-emerald-500" },
              { badge: "☁️ Cloud-Native Architecture", color: "from-purple-500 to-pink-500" }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2`}
              >
                {item.badge}
              </div>
            ))}
          </div>

          {/* Animated User Counter */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-md mx-auto">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50,000+</div>
            <div className="text-slate-300 text-sm mb-3">Early Access Users</div>
            <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full animate-pulse" style={{width: '73%'}}></div>
            </div>
            <div className="text-xs text-slate-400">Growing by 500+ users daily</div>
          </div>
        </div>
      </div>
    </section>
  );
}