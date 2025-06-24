'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your interest! This is a demo version.')
    setEmail('')
  }

  return (
    <section className="relative pt-20 lg:pt-32 pb-20 lg:pb-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              BEST CHOICE
            </div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Future strategic</span>
              <br />
              <span className="text-gray-900">finance for</span>
              <br />
              <span className="gradient-text">Entrepreneurs</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl">
              Scale with checking and savings accounts, custom tools, and access to our investor network.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold btn-hover-effect transition-all duration-200 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>

            <div>
              <p className="text-sm text-gray-500 mb-6">Trusted by leading companies</p>
              <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-400">Uber</div>
                <div className="text-2xl font-bold text-gray-400">amazon</div>
                <div className="text-2xl font-bold text-gray-400">eBay</div>
                <div className="text-2xl font-bold text-gray-400">Walmart</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="text-right mb-4">
                <div className="text-3xl font-bold text-gray-900">$126.10</div>
                <div className="text-sm text-gray-500">FUNDS AVAILABLE</div>
              </div>
              
              <div className="h-32 bg-gradient-to-r from-primary-100 to-primary-200 rounded-lg mb-6 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary-500 to-primary-400 rounded-lg"></div>
                <div className="absolute top-4 left-4 text-xs text-primary-700 font-medium">↗ 76%</div>
                <div className="absolute bottom-2 right-2 text-xs text-primary-700">$261.4k</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Card Manager</div>
                      <div className="text-xs text-gray-500">1253</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">12 / 2024</div>
                    <div className="text-xs text-gray-500">7689</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-xl p-6 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="text-sm font-medium text-gray-700 mb-2">Cost Reduction</div>
              <div className="text-2xl font-bold text-primary-600 mb-2">↗ 76%</div>
              <div className="h-16 w-24 bg-gradient-to-r from-primary-200 to-primary-300 rounded relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500 to-transparent rounded"></div>
              </div>
              <div className="text-xs text-gray-500 mt-2">7 Apr</div>
            </div>

            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-500 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-400 opacity-80"></div>
              <div className="absolute bottom-2 right-2 text-xs text-white font-medium">Made in Webflow</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 