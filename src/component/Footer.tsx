import React from 'react'

const Footer = () => {
  return (
    <>
     {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="w-6 h-6 text-emerald-400" />
                <span className="text-white text-xl font-bold">Sector 104</span>
              </div>
              <p className="text-sm leading-relaxed">
                Your trusted partner in finding the perfect home in Sector 104's most prestigious properties.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#overview" className="hover:text-emerald-400 transition-colors">Overview</a></li>
                <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
                <li><a href="#amenities" className="hover:text-emerald-400 transition-colors">Amenities</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Properties</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Apartments</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Villas</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Penthouses</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Commercial</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">RERA Details</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Sector 104 Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    </>
  )
}

export default Footer
