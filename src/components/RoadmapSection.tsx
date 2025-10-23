export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-32 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden min-h-[800px]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="text-6xl mb-6">🗺️</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              SQLGuru Roadmap: Building Tomorrow
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed">
            Our strategic vision for transforming database education across India and beyond.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 md:transform md:-translate-x-1/2 z-0"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {[
              {
                phase: "Phase 1: Foundation (Q1-Q2 2025)",
                title: "MVP Launch & Early Adoption",
                status: "In Progress",
                icon: "🚀",
                side: "left",
                achievements: [
                  "Complete POC with 100+ beta users",
                  "Launch core SQL curriculum for Indian universities",
                  "Establish partnerships with 5 major institutions",
                  "Achieve 1,000 registered learners"
                ],
                metrics: "Target: 1K Users, 5 University Partners",
                color: "from-pink-500 to-rose-500",
                bgColor: "from-pink-900/30 to-rose-900/20",
                statusColor: "bg-green-500"
              },
              {
                phase: "Phase 2: Scale (Q3-Q4 2025)",
                title: "Rapid Expansion & Feature Enhancement",
                status: "Planning",
                icon: "📈",
                side: "right",
                achievements: [
                  "Multi-language support (Tamil, Hindi, Telugu, Bengali)",
                  "Advanced AI tutoring and personalized paths",
                  "Corporate training programs launch",
                  "Mobile app release (iOS & Android)"
                ],
                metrics: "Target: 25K Users, 50 Institution Network",
                color: "from-purple-500 to-violet-500",
                bgColor: "from-purple-900/30 to-violet-900/20",
                statusColor: "bg-blue-500"
              },
              {
                phase: "Phase 3: Dominance (2026)",
                title: "Market Leadership & Innovation",
                status: "Roadmap",
                icon: "🏆",
                side: "left",
                achievements: [
                  "Government education ministry partnership",
                  "Industry certification program (NASSCOM endorsed)",
                  "Advanced analytics and employer dashboard",
                  "International expansion (Southeast Asia)"
                ],
                metrics: "Target: 100K Users, Pan-India Presence",
                color: "from-indigo-500 to-blue-500",
                bgColor: "from-indigo-900/30 to-blue-900/20",
                statusColor: "bg-purple-500"
              },
              {
                phase: "Phase 4: Global Impact (2027+)",
                title: "Worldwide Database Education Revolution",
                status: "Vision",
                icon: "🌍",
                side: "right",
                achievements: [
                  "Global platform serving 1M+ learners",
                  "AI-powered career guidance ecosystem",
                  "Real-time job matching with top employers",
                  "Open-source educational resource platform"
                ],
                metrics: "Target: 1M+ Global Users, Employer Network",
                color: "from-emerald-500 to-teal-500",
                bgColor: "from-emerald-900/30 to-teal-900/20",
                statusColor: "bg-emerald-500"
              }
            ].map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${milestone.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-r from-white to-slate-200 rounded-full border-4 border-purple-500 md:transform md:-translate-x-1/2 z-10 shadow-lg">
                  <div className={`w-2 h-2 ${milestone.statusColor} rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse`}></div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 ${milestone.side === 'right' ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                  <div className={`bg-gradient-to-br ${milestone.bgColor} backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group hover:scale-105`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-sm text-slate-400 mb-2 font-medium">
                          {milestone.phase}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${milestone.color} rounded-full text-white text-sm font-medium`}>
                          <div className={`w-2 h-2 ${milestone.statusColor} rounded-full animate-pulse`}></div>
                          {milestone.status}
                        </div>
                      </div>
                      <div className={`w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                        {milestone.icon}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span>🎯</span> Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {milestone.achievements.map((achievement, achieveIndex) => (
                          <div key={achieveIndex} className="flex items-start gap-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                            <div className={`w-2 h-2 bg-gradient-to-r ${milestone.color} rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Success Metrics */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 group-hover:bg-white/10 transition-all duration-300">
                      <div className="text-sm text-slate-400 mb-1">Success Metrics</div>
                      <div className={`text-lg font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                        {milestone.metrics}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment & Growth Projections */}
        <div className="mt-32 mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Growth Projections & Investment Timeline
            </h3>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto">
              Strategic milestones backed by data-driven projections and sustainable growth models
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                year: "2025",
                investment: "₹2-5 Cr",
                users: "25,000",
                revenue: "₹50 L",
                highlight: "Foundation",
                color: "from-pink-500 to-rose-500",
                bgColor: "from-pink-900/30 to-rose-900/20"
              },
              {
                year: "2026", 
                investment: "₹10-15 Cr",
                users: "100,000",
                revenue: "₹5 Cr",
                highlight: "Scale-Up",
                color: "from-purple-500 to-violet-500",
                bgColor: "from-purple-900/30 to-violet-900/20"
              },
              {
                year: "2027",
                investment: "₹25-40 Cr",
                users: "500,000", 
                revenue: "₹25 Cr",
                highlight: "Expansion",
                color: "from-indigo-500 to-blue-500",
                bgColor: "from-indigo-900/30 to-blue-900/20"
              },
              {
                year: "2028+",
                investment: "Series A",
                users: "1M+",
                revenue: "₹100+ Cr",
                highlight: "IPO Ready",
                color: "from-emerald-500 to-teal-500",
                bgColor: "from-emerald-900/30 to-teal-900/20"
              }
            ].map((projection, index) => (
              <div key={index} className={`bg-gradient-to-br ${projection.bgColor} backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 group hover:shadow-2xl`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${projection.color} rounded-xl text-white font-bold text-lg mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  {projection.year.slice(-2)}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                  {projection.year}
                </h4>

                <div className="space-y-3 mb-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-xs text-slate-400 mb-1">Investment</div>
                    <div className={`font-bold bg-gradient-to-r ${projection.color} bg-clip-text text-transparent`}>
                      {projection.investment}
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-xs text-slate-400 mb-1">Users</div>
                    <div className="text-white font-semibold">{projection.users}</div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-xs text-slate-400 mb-1">Revenue</div>
                    <div className="text-emerald-400 font-semibold">{projection.revenue}</div>
                  </div>
                </div>

                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${projection.color} rounded-full text-white text-xs font-medium`}>
                  {projection.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of the Revolution
            </h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join us in transforming database education. Whether you're an investor, partner, or early adopter, 
              help us build the future of SQL learning in India and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[280px] justify-center">
                <span>💰</span> Investment Opportunity
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center backdrop-blur-sm bg-white/5">
                <span>📋</span> Partnership Program
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span>Proven Business Model</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <span>📊</span>
                <span>Market-Validated Demand</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <span>🏆</span>
                <span>Award-Winning Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}