import { Facebook, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Why Fundsphere?', href: '#' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#' }
      ]
    },
    {
      title: 'Features',
      links: [
        { name: 'Payments', href: '#' },
        { name: 'API', href: '#' },
        { name: 'Ecommerce', href: '#' },
        { name: 'Business', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Career', href: '#' },
        { name: 'Blog', href: '#blog' }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                <div className="w-4 h-4 bg-white rounded-sm transform -rotate-45 -ml-2"></div>
              </div>
              <span className="text-xl font-bold">Fundsphere</span>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 mt-8 border-t border-gray-800">
          <div className="text-gray-400 text-sm mb-4 lg:mb-0">
            © Fundsphere Copyright 2024. All Rights Reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 