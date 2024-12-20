import React from 'react'

const Services = () => {
  return (
    <div className="flex space-x-6">
  {/* Service Card 1: Web Development */}
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <div className="px-6 py-4 text-center">
      <img className="w-16 h-16 mx-auto mb-4" src="https://source.unsplash.com/100x100/?web" alt="Web Development" />
      <div className="font-bold text-xl mb-2">Web Development</div>
      <p className="text-gray-700 text-base">
        Build modern, responsive websites with the latest technologies. From concept to deployment, we handle it all!
      </p>
    </div>
    <div className="px-6 py-4 text-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
    </div>
  </div>

  {/* Service Card 2: SEO Optimization */}
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <div className="px-6 py-4 text-center">
      <img className="w-16 h-16 mx-auto mb-4" src="https://source.unsplash.com/100x100/?seo" alt="SEO Optimization" />
      <div className="font-bold text-xl mb-2">SEO Optimization</div>
      <p className="text-gray-700 text-base">
        Enhance your website’s visibility on search engines. Our SEO experts can help boost your rankings and traffic.
      </p>
    </div>
    <div className="px-6 py-4 text-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
    </div>
  </div>

  {/* Service Card 3: Mobile App Development */}
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <div className="px-6 py-4 text-center">
      <img className="w-16 h-16 mx-auto mb-4" src="https://source.unsplash.com/100x100/?app" alt="Mobile App Development" />
      <div className="font-bold text-xl mb-2">Mobile App Development</div>
      <p className="text-gray-700 text-base">
        Create custom mobile apps for iOS and Android with sleek designs and seamless functionality.
      </p>
    </div>
    <div className="px-6 py-4 text-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
    </div>
  </div>
</div>

  )
}

export default Services
