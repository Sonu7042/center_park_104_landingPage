import React from 'react'
import { MapPin, Home, Shield } from 'lucide-react';


const Features = () => {
  return (
    <>
     {/* Features Section */}
          <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Sector 104</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Experience exceptional living with features designed for modern lifestyles
                </p>
              </div>
    
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                    <Home className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Spacious Layouts</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Well-planned floor designs with 2, 3, and 4 BHK options. Every inch optimized for comfortable living and natural light.
                  </p>
                </div>
    
                <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Complete Security</h3>
                  <p className="text-slate-600 leading-relaxed">
                    24/7 CCTV surveillance, gated community, and trained security personnel ensuring your family's safety at all times.
                  </p>
                </div>
    
                <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                    <MapPin className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Prime Connectivity</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Minutes away from schools, hospitals, shopping centers, and metro stations. Everything you need is within reach.
                  </p>
                </div>
              </div>
            </div>
          </section>

      
    </>
  )
}

export default Features
