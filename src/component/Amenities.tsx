import React from 'react'
import { CheckCircle } from 'lucide-react';


const Amenities = () => {
  return (
    <>
     {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">World-Class Amenities</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need for a comfortable and luxurious lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Temperature Swimming Pool',
              'Fitness Center',
              'Club House',
              'Children\'s Play Area',
              'Jogging Track',
              'Sports Courts',
              'Landscaped Gardens',
              'Yoga & Meditation',
              'Party Lawn',
              'Indoor Games',
              'Amphitheater',
              'Power Backup',
            ].map((amenity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 mb-3" />
                <div className="font-semibold text-slate-900">{amenity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Amenities
