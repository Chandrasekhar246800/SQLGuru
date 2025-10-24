"use client"

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black border-t border-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SG</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">SQLGuru</div>
                  <div className="text-sm text-slate-400">Transforming Database Education</div>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                Empowering the next generation of database professionals with AI-powered, 
                personalized learning experiences. Join thousands transforming their careers.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {[
                  { icon: "📧", label: "Email", link: "mailto:hello@sqlguru.in" },
                  { icon: "🔗", label: "LinkedIn", link: "#linkedin" },
                  { icon: "🐦", label: "Twitter", link: "#twitter" },
                  { icon: "📺", label: "YouTube", link: "#youtube" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    title={social.label}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Platform</h4>
              <div className="space-y-3">
                {[
                  { name: "Features", href: "#features" },
                  { name: "Pricing", href: "#pricing" },
                  { name: "Certifications", href: "#certifications" },
                  { name: "Success Stories", href: "#stories" },
                  { name: "Free Trial", href: "#trial" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Resources</h4>
              <div className="space-y-3">
                {[
                  { name: "Documentation", href: "#docs" },
                  { name: "API Reference", href: "#api" },
                  { name: "Community", href: "#community" },
                  { name: "Blog", href: "#blog" },
                  { name: "Support Center", href: "#support" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📬</span>
                  <h4 className="text-2xl font-bold text-white">Stay Updated</h4>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Get the latest updates on new features, educational content, and platform improvements. 
                  Join 10,000+ educators and learners in our community.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <span>📧</span> Subscribe
                  </button>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <input type="checkbox" id="newsletter-consent" className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 rounded focus:ring-blue-500" />
                  <label htmlFor="newsletter-consent">
                    I agree to receive educational content and platform updates
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { number: "10,000+", label: "Active Learners", icon: "👥" },
              { number: "50+", label: "Partner Institutions", icon: "🏫" },
              { number: "85%", label: "Job Placement Rate", icon: "💼" },
              { number: "24/7", label: "Platform Availability", icon: "⚡" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © 2024 SQLGuru. All rights reserved. | Transforming database education across India.
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              {[
                { name: "Privacy Policy", href: "#privacy" },
                { name: "Terms of Service", href: "#terms" },
                { name: "Cookie Policy", href: "#cookies" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Final Tagline */}
        <div className="text-center py-6 border-t border-slate-800">
          <div className="text-slate-500 text-sm italic">
            "Bridging the gap between education and employment through intelligent database learning"
          </div>
          <div className="flex justify-center items-center gap-2 mt-3">
            <span className="text-blue-400">🚀</span>
            <span className="text-slate-400 text-xs">Built with ❤️ in India for the world</span>
            <span className="text-purple-400">🌍</span>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group"
          title="Scroll to top"
        >
          <span className="text-xl group-hover:animate-bounce">⬆️</span>
        </button>
      </div>
    </footer>
  );
}