export default function HowWorksSection() {
  return (
    <section id="how-works" className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-500/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="text-6xl mb-6">⚙️</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              How SQLGuru Works
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed">
            A seamless journey from enrollment to employment, designed for maximum impact.
          </p>
        </div>

        {/* Main Process Flow */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Smart Assessment & Personalized Path",
                icon: "🧠",
                description: "AI analyzes current skills and creates a custom learning journey tailored to individual needs and career goals.",
                features: ["Skill Gap Analysis", "Personalized Curriculum", "Learning Style Adaptation", "Goal Setting Framework"],
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-900/20 to-cyan-900/10"
              },
              {
                step: "02", 
                title: "Interactive Learning with Real-World Projects",
                icon: "💻",
                description: "Hands-on practice with live databases, real datasets, and industry-standard tools used by top companies.",
                features: ["Live Database Access", "Industry Projects", "Collaborative Coding", "Peer Learning Network"],
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-900/20 to-pink-900/10"
              },
              {
                step: "03",
                title: "Certification & Career Support",
                icon: "🏆",
                description: "Industry-recognized certifications with dedicated placement assistance and ongoing career mentorship.",
                features: ["Verified Certifications", "Job Placement Support", "Interview Preparation", "Career Mentorship"],
                color: "from-emerald-500 to-green-500",
                bgColor: "from-emerald-900/20 to-green-900/10"
              }
            ].map((phase, index) => (
              <div key={index} className={`bg-gradient-to-br ${phase.bgColor} backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group hover:scale-105`}>
                {/* Step Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`text-6xl font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                    {phase.step}
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                    {phase.icon}
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {phase.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {phase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-sm">
                      <div className={`w-2 h-2 bg-gradient-to-r ${phase.color} rounded-full group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Connecting Arrow (except for last item) */}
                {index < 2 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-3xl text-blue-400/50 group-hover:text-blue-400 transition-colors duration-300">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Technology Stack */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powered by Cutting-Edge Technology
            </h3>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto">
              Our platform leverages the latest in AI, cloud computing, and educational technology to deliver an unparalleled learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "AI & Machine Learning",
                icon: "🤖",
                technologies: ["GPT-4 Integration", "Personalized Recommendations", "Automated Code Review", "Intelligent Tutoring"],
                color: "from-blue-500 to-indigo-500",
                bgGradient: "from-blue-900/30 to-indigo-900/20"
              },
              {
                category: "Cloud Infrastructure", 
                icon: "☁️",
                technologies: ["AWS/Azure Deployment", "Auto-Scaling", "99.9% Uptime SLA", "Global CDN"],
                color: "from-emerald-500 to-teal-500",
                bgGradient: "from-emerald-900/30 to-teal-900/20"
              },
              {
                category: "Database Technologies",
                icon: "🗄️", 
                technologies: ["PostgreSQL", "MongoDB", "Redis", "Real-time Analytics"],
                color: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-900/30 to-pink-900/20"
              },
              {
                category: "Learning Platform",
                icon: "📚",
                technologies: ["Interactive IDE", "Live Collaboration", "Progress Tracking", "Mobile Support"],
                color: "from-orange-500 to-red-500",
                bgGradient: "from-orange-900/30 to-red-900/20"
              }
            ].map((tech, index) => (
              <div key={index} className={`bg-gradient-to-br ${tech.bgGradient} backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 group hover:scale-105`}>
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center text-xl mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  {tech.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {tech.category}
                </h4>
                <div className="space-y-2">
                  {tech.technologies.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2 text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${tech.color} rounded-full group-hover:scale-125 transition-transform duration-300`}></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics Dashboard Mockup */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Real-Time Success Tracking</h3>
            <p className="text-lg text-slate-300">Monitor progress and outcomes with our comprehensive analytics dashboard</p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-8 lg:p-12 max-w-6xl mx-auto">
            {/* Mock Dashboard Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-600/30">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-sm font-bold text-white">
                  SG
                </div>
                <div>
                  <div className="text-white font-semibold">SQLGuru Analytics</div>
                  <div className="text-slate-400 text-sm">Real-time learning insights</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Live</span>
              </div>
            </div>

            {/* Mock Metrics Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Active Learners", value: "24,573", change: "+12%", icon: "👥" },
                { label: "Completion Rate", value: "87%", change: "+5%", icon: "✅" },
                { label: "Avg. Skill Gain", value: "+42%", change: "+8%", icon: "📈" }
              ].map((metric, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl mb-3">{metric.icon}</div>
                  <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-slate-300 text-sm mb-2">{metric.label}</div>
                  <div className="text-green-400 text-xs font-medium">
                    {metric.change} this month
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience the Future of SQL Education
            </h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of successful learners who have transformed their careers with SQLGuru. 
              Start your personalized journey today and see the difference our proven methodology makes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[280px] justify-center">
                <span>🎯</span> Start Free Assessment
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center backdrop-blur-sm bg-white/5">
                <span>📖</span> View Demo Course
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Free Forever Plan Available</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span>Instant Access</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <span>🎓</span>
                <span>Industry Certification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}