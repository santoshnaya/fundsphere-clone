const Stats = () => {
  const stats = [
    {
      number: '10%',
      label: 'Beneficial Cashback',
      description: 'Get rewarded for every transaction'
    },
    {
      number: '7M',
      label: 'Satisfied Customer',
      description: 'Trusted by millions worldwide'
    },
    {
      number: '40+',
      label: 'Country Available',
      description: 'Global reach and accessibility'
    }
  ]

  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-bold mb-4 text-primary-200">
                {stat.number}
              </div>
              <div className="text-xl lg:text-2xl font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-primary-200 opacity-80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats 