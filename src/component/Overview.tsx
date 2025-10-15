import React from 'react'
import { CheckCircle  } from 'lucide-react';
import overview_img from './assets/overview_img3.webp'


const Overview = () => {
  return (
    <>
    {/* Overview Section */}
      <section id="overview" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Welcome to <span className="text-emerald-600">Sector 104</span>
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Nestled in a prime location, Sector 104 offers an unparalleled living experience with world-class infrastructure, excellent connectivity, and a vibrant community atmosphere.
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                From modern apartments to spacious villas, each property is thoughtfully designed to provide the perfect blend of comfort, style, and functionality for contemporary urban living.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Strategic Location</h4>
                    <p className="text-slate-600">Easy access to highways, metro stations, and major business hubs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Premium Construction</h4>
                    <p className="text-slate-600">High-quality materials and finishes throughout every property</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Green & Sustainable</h4>
                    <p className="text-slate-600">Eco-friendly design with abundant green spaces and parks</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={overview_img}
                alt="Modern Property"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
             
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Overview
