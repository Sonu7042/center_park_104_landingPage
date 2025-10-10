import React from 'react'
import { Building2, MapPin} from 'lucide-react';
import home3_img from './assets/home4_img.webp'
import logo from './assets/centralparklogo.png'


const Header = () => {
  return (
    <>
    {/* Hero Section */}
     <header className="relative text-white overflow-hidden h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center">
        <img src={home3_img} alt="img" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" width={40}  height={40}/>
          <span className="text-2xl font-bold">Sector 104</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#overview" className="hover:text-white transition-colors">Overview</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#amenities" className="hover:text-white transition-colors">Amenities</a>
          <a href="#location" className="hover:text-white transition-colors">Location</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-start md:items-center justify-around gap-10">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full">
            <MapPin className="w-6 h-6 text-white" />
            <span className="text-sm md:text-lg font-medium">
              Prime Location in Sector 104
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Dream Home <br />
            <span className="text-white">Awaits Here</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            Discover premium residential properties in the heart of Sector 104.
            Modern living spaces designed for comfort, convenience, and luxury.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-sm md:max-w-md">
          <h3 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white/50 hover:bg-white text-black font-semibold py-3 rounded-lg transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div> */}
    </header>

      
    </>
  )
}

export default Header
