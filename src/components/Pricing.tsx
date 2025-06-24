import { Check, X } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$199',
      period: '/ month',
      description: 'Kickstart product research in your business at no cost.',
      features: [
        { name: 'Unlimited workspace', included: true },
        { name: 'Access to RestAPI', included: true },
        { name: 'Priority Customer Support', included: false },
        { name: 'Real-Time Analytics', included: false },
        { name: 'Data Export Capabilities', included: false },
        { name: 'Advanced Security', included: false },
      ],
      buttonText: 'Get Started',
      popular: false,
      color: 'primary'
    },
    {
      name: 'Pro',
      price: '$250',
      period: '/ month',
      description: 'Fuel your product workflow with more advanced research features',
      features: [
        { name: 'Unlimited workspace', included: true },
        { name: 'Access to RestAPI', included: true },
        { name: 'Priority Customer Support', included: true },
        { name: 'Real-Time Analytics', included: true },
        { name: 'Data Export Capabilities', included: false },
        { name: 'Advanced Security', included: false },
        { name: 'Multi-User Access', included: false },
      ],
      buttonText: 'Get Started',
      popular: true,
      color: 'dark'
    },
    {
      name: 'Enterprises',
      price: '$499',
      period: '/ month',
      description: 'Scale product research and learning across your company.',
      features: [
        { name: 'Unlimited workspace', included: true },
        { name: 'Access to RestAPI', included: true },
        { name: 'Priority Customer Support', included: true },
        { name: 'Real-Time Analytics', included: true },
        { name: 'Data Export Capabilities', included: true },
        { name: 'Advanced Security', included: true },
      ],
      buttonText: 'Get Started',
      popular: false,
      color: 'primary'
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
            PRICING PLAN
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Package
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our pro features for unlimited without any contract and cancel anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'bg-gray-900 text-white shadow-2xl'
                  : 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-primary-600'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-primary-400' : 'text-primary-600'}`} />
                    ) : (
                      <X className={`w-5 h-5 mr-3 ${plan.popular ? 'text-gray-500' : 'text-gray-400'}`} />
                    )}
                    <span className={`${!feature.included ? 'opacity-50' : ''}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                } btn-hover-effect`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing 