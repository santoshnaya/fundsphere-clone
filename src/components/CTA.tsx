'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your interest! This is a demo version.')
    setEmail('')
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get started today for better future finance
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            Fundsphere is a compass for business leaders, scale with checking and savings accounts, custom tools, and access to our investor network.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                className="w-full px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-full font-semibold btn-hover-effect transition-all duration-200 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA 