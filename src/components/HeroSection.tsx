'use client'

import { motion } from 'framer-motion'
import { PlayIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Abstract Tech Background Elements */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="animate-pulse">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgb(59 130 246)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating code elements */}
        <motion.div
          className="absolute top-20 left-10 text-blue-400/30 font-mono text-sm"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          SELECT * FROM future;
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 text-purple-400/30 font-mono text-sm"
          animate={{
            y: [10, -10, 10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          CREATE DATABASE learning;
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-1/4 text-green-400/30 font-mono text-sm"
          animate={{
            y: [-5, 15, -5],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          INSERT INTO skills VALUES ('SQL');
        </motion.div>

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-32 right-32 w-32 h-32 border border-blue-400/20 rounded-lg rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-40 right-10 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles representing data */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, -120],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        {/* Main Headline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            SQLGuru:
          </span>
          <br />
          <span className="text-blue-400">India's First</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI-Powered Database
          </span>
          <br />
          <span className="text-white">Learning Platform</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Smart, data-driven tools for tomorrow's tech talent.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Primary CTA */}
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <RocketLaunchIcon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Explore Platform</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            className="group relative px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full text-lg hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center gap-3 min-w-[180px] justify-center backdrop-blur-sm bg-white/5"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(96, 165, 250, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <PlayIcon className="w-5 h-5" />
            <span>Try Demo</span>
          </motion.button>
        </motion.div>

        {/* Small descriptive text */}
        <motion.div
          className="text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>POC Demo ready</span>
          </div>
          <div className="hidden sm:block text-slate-600">•</div>
          <div className="flex items-center gap-2">
            <span>🇮🇳</span>
            <span>Tailored for Indian learners</span>
          </div>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {[
            { 
              icon: "🤖", 
              title: "AI-Powered Learning", 
              desc: "Personalized SQL queries and real-time feedback" 
            },
            { 
              icon: "🛠️", 
              title: "Hands-On Practice", 
              desc: "Interactive database sandbox environment" 
            },
            { 
              icon: "📊", 
              title: "Industry Ready", 
              desc: "Skills aligned with real job requirements" 
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              whileHover={{ 
                y: -5,
                backgroundColor: "rgba(255, 255, 255, 0.08)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}

export default HeroSection