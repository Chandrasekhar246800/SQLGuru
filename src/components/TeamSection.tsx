'use client'

import { useState } from 'react'

export default function TeamSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const newErrors = {
      name: '',
      email: '',
      message: ''
    }
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    // If there are errors, set them and return
    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors)
      return
    }
    
    // Simulate form submission
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      // Reset form
      setFormData({ name: '', email: '', message: '' })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/50 rounded-2xl p-6 backdrop-blur-sm animate-[fadeIn_0.5s_ease-in-out]">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Thank you for reaching out!</h3>
                <p className="text-green-200">We'll be in touch soon. 🎉</p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Form Card */}
        <div className="bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl border border-indigo-400/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
          
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <div className="text-6xl mb-2">�</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contact SQLGuru
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Questions, suggestions, or collaboration ideas? We'd love to hear from you. Fill out this quick form and our team will get back to you soon.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-6 py-4 bg-slate-900/50 border ${
                  errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-indigo-500'
                } rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-6 py-4 bg-slate-900/50 border ${
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-indigo-500'
                } rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
                Your Message <span className="text-red-400">*</span>
              </label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-6 py-4 bg-slate-900/50 border ${
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-indigo-500'
                } rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none`}
                placeholder="Tell us how we can help you..."
              ></textarea>
              {errors.message && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl text-lg shadow-2xl hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              {/* Ripple effect */}
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              
              <span className="relative flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Privacy Note */}
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p>
                <span className="font-semibold text-slate-300">Your info is secure</span> — SQLGuru will never share or misuse your details. We respect your privacy and only use your information to respond to your inquiry.
              </p>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <p className="text-center text-sm text-slate-400 mb-4">Prefer to reach us directly?</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <a href="mailto:contact@sqlguru.com" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@sqlguru.com
              </a>
              <span className="text-slate-600">•</span>
              <a href="mailto:partnerships@sqlguru.com" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                partnerships@sqlguru.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
