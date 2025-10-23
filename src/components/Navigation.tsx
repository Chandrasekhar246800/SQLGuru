'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#why-sqlguru', id: 'why-sqlguru' },
    { label: 'Crisis', href: '#crisis', id: 'crisis' },
    { label: 'Approach', href: '#approach', id: 'approach' },
    { label: 'Innovations', href: '#innovations', id: 'innovations' },
    { label: 'Benefits', href: '#benefits', id: 'benefits' },
    { label: 'How It Works', href: '#how-works', id: 'how-works' },
    { label: 'Roadmap', href: '#roadmap', id: 'roadmap' },
    { label: 'Team', href: '#team', id: 'team' }
  ]

  // Scroll detection for active section highlighting
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null
    
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      
      timeoutId = setTimeout(() => {
        const sections = navItems.map(item => item.id)
        const scrollPosition = window.scrollY + 120 // Offset for navbar height
        
        // Find the section that's currently in view
        let currentSection = sections[0] // Default to first section
        
        for (let i = 0; i < sections.length; i++) {
          const section = document.getElementById(sections[i])
          if (section) {
            const sectionTop = section.offsetTop - 100
            const sectionHeight = section.offsetHeight
            const sectionBottom = sectionTop + sectionHeight
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              currentSection = sections[i]
              break
            }
          }
        }
        
        setActiveSection(currentSection)
      }, 10) // Small throttle for better performance
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80 // Account for fixed navbar
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      
      setActiveSection(targetId)
      setIsMenuOpen(false) // Close mobile menu if open
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              SQLGuru
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className={`relative font-medium text-sm transition-all duration-300 cursor-pointer group ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-white/70 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {item.label}
                {/* Active indicator */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  initial={false}
                  animate={{
                    width: activeSection === item.id ? '100%' : '0%',
                    opacity: activeSection === item.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
                {/* Hover indicator */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-white/30 rounded-full"
                  initial={{ width: '0%' }}
                  whileHover={{ width: activeSection === item.id ? '0%' : '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-3">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className={`block font-medium text-sm py-2 px-4 rounded-lg transition-all duration-200 relative ${
                  activeSection === item.id 
                    ? 'text-white bg-white/10 border-l-2 border-blue-400' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navigation