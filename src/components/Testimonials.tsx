import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Simple, seamless processing. Payroll reduces the number of third parties we work with.",
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc"
    },
    {
      quote: "Simplified processes, reduced costs. Highly recommend",
      name: "John Smith",
      position: "Operations Manager",
      company: "Ebay"
    },
    {
      quote: "Streamlined finances, increased efficiency. Impressive platform!",
      name: "James Miller",
      position: "Financial Controller",
      company: "Amazon"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
            TESTIMONY
          </div>
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mr-8">
              What others are saying about Us
            </h2>
            <div className="flex flex-col items-end">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-2xl font-bold text-gray-900">4.9</span>
              </div>
              <p className="text-sm text-gray-600">REVIEW FROM TRUSTPILOT</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of companies embracing Strategic Finance with Fundsphere.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="h-64 w-64 mx-auto mb-6 rounded-2xl overflow-hidden">
                <div className={`w-full h-full ${
                  index === 0 ? 'bg-gradient-to-br from-green-200 to-green-400' :
                  index === 1 ? 'bg-gradient-to-br from-blue-200 to-blue-400' :
                  'bg-gradient-to-br from-orange-200 to-orange-400'
                }`}></div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  &ldquo;{testimonial.quote}&rdquo;
                </div>
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </div>
                <div className="text-gray-600">
                  {testimonial.position} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            <span className="font-semibold">Michael Chen</span> - Project Manager at Stripe
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 