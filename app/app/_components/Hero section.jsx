import React from 'react'

const Hero  = () => {
  return (
    <section className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl text-black font-extrabold sm:text-5xl">
          Market Place
          <strong className="font-extrabold text-primary sm:block"> Access source code and assets </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed text-black">
          Now get free source code and assets for all project with membership
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="#Product"
          >
            Get Started
          </a>
  
          <a
            className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero 
