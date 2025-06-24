const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
            FEATURES
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Features
            <br />
            <span className="text-gray-900">designed for you</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Growth-accelerating products for startups, ecommerce stores, angel investors, & more.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pay with Fundsphere, quick, simple and easy
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Use Fundsphere to pay to a merchant and enjoy optimal payment user experience.
            </p>
            
            <div className="relative bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 h-80">
              <div className="absolute inset-4 bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-black h-6 rounded-b-xl mx-auto w-32"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                      <div className="w-8 h-5 bg-red-500 rounded-sm"></div>
                      <span className="text-sm">+ $100</span>
                    </div>
                    <div className="flex space-x-2">
                      <span className="text-sm">+ $100</span>
                      <div className="w-8 h-5 bg-blue-600 rounded-sm"></div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-medium mb-2">Fundsphere</div>
                      <div className="w-16 h-16 bg-black rounded-lg mx-auto flex items-center justify-center">
                        <div className="text-white text-xs">QR</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bank-level Security
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Personal information is encrypted and protected by industry standard banking security.
            </p>
            
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 h-80">
              <div className="absolute inset-4 bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-black h-6 rounded-b-xl mx-auto w-32"></div>
                <div className="p-6 text-center">
                  <div className="text-sm font-medium mb-4">Fundsphere</div>
                  <div className="text-lg font-semibold mb-8">Enter your pin</div>
                  <div className="flex justify-center space-x-4 mb-8">
                    <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cost Reduction
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Fundsphere Reduced
              <br />
              Payments maintenance and
              <br />
              processing fees. No hidden fees.
            </p>
          </div>

          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Integrates with best of breed solution
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Integrate with best of payment processors and accounting software.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features 