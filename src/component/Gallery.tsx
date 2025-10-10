import React from 'react'

const Gallery = () => {
  return (
    <>
     {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Gallery</h2>
            <p className="text-xl text-slate-600">Take a visual tour of our stunning properties</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-80 overflow-hidden rounded-2xl group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Exterior View"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-semibold text-lg">Exterior View</span>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Living Room"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-semibold text-lg">Living Room</span>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bedroom"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-semibold text-lg">Bedroom</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Gallery
