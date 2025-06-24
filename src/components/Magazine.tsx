import { ArrowRight } from 'lucide-react'

const Magazine = () => {
  const articles = [
    {
      title: 'Online Payment Failure: Why it Happens and How to Avoid it.',
      date: 'January 4, 2024',
      icon: '✕',
      gradient: 'from-red-500 to-purple-600'
    },
    {
      title: 'Some of strategies for Quickly Expanding Your Business.',
      date: 'February 8, 2024',
      icon: '🔗',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Business strategy converging into a new approach for solving business.',
      date: 'January 16, 2024',
      icon: '🎯',
      gradient: 'from-purple-500 to-pink-600'
    }
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
            INSIGHT
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Magazine
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-3xl p-8 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-80`}></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
                <div className="text-6xl mb-8 text-white opacity-80">
                  {article.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-white opacity-80 text-sm">
                    {article.date}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold btn-hover-effect transition-all duration-200 inline-flex items-center">
            Read More Article
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Magazine 