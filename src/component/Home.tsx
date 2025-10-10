import React from 'react'


const Home = () => {
  return (
    <>
    {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-slate-600">Premium Units</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-slate-600">Amenities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">10 Acres</div>
              <div className="text-slate-600">Green Spaces</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-slate-600">Security</div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Home
