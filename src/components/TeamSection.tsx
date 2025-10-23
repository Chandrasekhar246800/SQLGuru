export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="text-6xl mb-6">👥</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meet the SQLGuru Team
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed">
            Passionate experts dedicated to revolutionizing database education across India.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Leadership Team</h3>
            <p className="text-lg text-slate-300">Driving innovation and strategic vision</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Founder & CEO",
                avatar: "👨‍💼",
                background: "15+ years in EdTech",
                education: "IIT Delhi, Stanford MBA",
                expertise: ["Product Strategy", "Team Leadership", "Investor Relations"],
                achievements: "Previously scaled 2 EdTech startups to ₹100Cr+ valuations",
                color: "from-blue-500 to-indigo-500",
                bgColor: "from-blue-900/30 to-indigo-900/20"
              },
              {
                name: "Dr. Priya Sharma",
                role: "Chief Technology Officer", 
                avatar: "👩‍💻",
                background: "AI/ML Research Expert",
                education: "IISc Bangalore, PhD AI",
                expertise: ["Machine Learning", "System Architecture", "Data Science"],
                achievements: "Published 25+ papers, Former Google AI researcher",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-900/30 to-pink-900/20"
              },
              {
                name: "Arjun Patel",
                role: "Chief Marketing Officer",
                avatar: "👨‍🎨", 
                background: "Growth & Marketing",
                education: "ISB Hyderabad, IIT Bombay",
                expertise: ["Digital Marketing", "Brand Strategy", "Growth Hacking"],
                achievements: "Scaled user base from 0 to 1M+ at previous startups",
                color: "from-emerald-500 to-teal-500",
                bgColor: "from-emerald-900/30 to-teal-900/20"
              }
            ].map((leader, index) => (
              <div key={index} className={`bg-gradient-to-br ${leader.bgColor} backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:scale-105`}>
                {/* Avatar and Basic Info */}
                <div className="text-center mb-6">
                  <div className={`w-24 h-24 bg-gradient-to-r ${leader.color} rounded-full flex items-center justify-center text-4xl mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    {leader.avatar}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300">
                    {leader.name}
                  </h4>
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${leader.color} rounded-full text-white text-sm font-medium mb-4`}>
                    {leader.role}
                  </div>
                  <div className="text-sm text-slate-300 mb-2">{leader.background}</div>
                  <div className="text-xs text-slate-400">{leader.education}</div>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-white mb-3">Core Expertise</div>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-white/10 backdrop-blur-sm text-xs text-slate-300 rounded-lg border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievement */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 group-hover:bg-white/10 transition-all duration-300">
                  <div className="text-xs text-slate-400 mb-2">Key Achievement</div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    {leader.achievements}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extended Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Core Team</h3>
            <p className="text-lg text-slate-300">Specialists driving product excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Vikram Singh",
                role: "Lead Backend Developer",
                avatar: "👨‍💻",
                experience: "7+ years",
                specialty: "Scalable Systems",
                color: "from-orange-500 to-red-500"
              },
              {
                name: "Sneha Reddy", 
                role: "UX/UI Design Lead",
                avatar: "👩‍🎨",
                experience: "6+ years",
                specialty: "User Experience",
                color: "from-pink-500 to-rose-500"
              },
              {
                name: "Amit Gupta",
                role: "Data Scientist",
                avatar: "👨‍🔬",
                experience: "8+ years", 
                specialty: "ML Algorithms",
                color: "from-cyan-500 to-blue-500"
              },
              {
                name: "Kavya Nair",
                role: "Content Strategist",
                avatar: "👩‍📚",
                experience: "5+ years",
                specialty: "Educational Content",
                color: "from-violet-500 to-purple-500"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 group hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  {member.avatar}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300">
                  {member.name}
                </h4>
                <div className="text-sm text-slate-300 mb-2">{member.role}</div>
                <div className="text-xs text-slate-400 mb-3">{member.experience}</div>
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${member.color} rounded-full text-white text-xs font-medium`}>
                  {member.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Advisory Board</h3>
            <p className="text-lg text-slate-300">Industry veterans guiding our strategic direction</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Prof. Suresh Chand",
                role: "Education Technology Advisor",
                avatar: "👨‍🏫",
                background: "Former IIT Professor",
                expertise: "EdTech Innovation",
                color: "from-emerald-500 to-green-500",
                bgColor: "from-emerald-900/30 to-green-900/20"
              },
              {
                name: "Ms. Nandini Joshi",
                role: "Industry Relations Advisor", 
                avatar: "👩‍💼",
                background: "Ex-Microsoft, TCS",
                expertise: "Corporate Partnerships",
                color: "from-blue-500 to-indigo-500",
                bgColor: "from-blue-900/30 to-indigo-900/20"
              },
              {
                name: "Dr. Karthik Rao",
                role: "AI Strategy Advisor",
                avatar: "👨‍🔬",
                background: "AI Research Pioneer",
                expertise: "Machine Learning",
                color: "from-purple-500 to-violet-500",
                bgColor: "from-purple-900/30 to-violet-900/20"
              }
            ].map((advisor, index) => (
              <div key={index} className={`bg-gradient-to-br ${advisor.bgColor} backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 group hover:scale-105`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${advisor.color} rounded-xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    {advisor.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors duration-300">
                      {advisor.name}
                    </h4>
                    <div className="text-sm text-slate-300">{advisor.role}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm text-slate-400">
                    <span className="font-medium">Background:</span> {advisor.background}
                  </div>
                  <div className="text-sm text-slate-400">
                    <span className="font-medium">Specialty:</span> {advisor.expertise}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Culture & Values */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-sm border border-indigo-400/30 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Culture & Values</h3>
              <p className="text-lg text-slate-300">The principles that drive our mission</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Impact First",
                  description: "Every decision focuses on student success and educational outcomes"
                },
                {
                  icon: "🚀",
                  title: "Innovation Drive", 
                  description: "Continuously pushing boundaries with cutting-edge technology"
                },
                {
                  icon: "🤝",
                  title: "Collaborative Spirit",
                  description: "Diverse perspectives creating stronger solutions together"
                },
                {
                  icon: "📈",
                  title: "Growth Mindset",
                  description: "Learning, adapting, and improving with every challenge"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join the Team CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-400/30 rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Mission to Transform Education
            </h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              We're actively hiring passionate individuals who want to make a real impact on database education. 
              Come build the future of learning with us!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[280px] justify-center">
                <span>💼</span> View Open Positions
              </button>
              <button className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-full hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center backdrop-blur-sm bg-white/5">
                <span>📧</span> Contact Us
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                <span>Remote-First Culture</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <span>🏆</span>
                <span>Competitive Equity Package</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <span>🌱</span>
                <span>Learning & Growth Budget</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}