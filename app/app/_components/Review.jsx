import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
const Review = () => {
  return (
    <Carousel>
    <CarouselContent>
      <CarouselItem>
        <div className="flex flex-col items-center text-center">
          <p className="text-lg font-semibold">"Excellent service and amazing quality!"</p>
          <p className="mt-2 text-sm text-gray-500">I ordered from this store and was amazed by how fast the delivery was. The product quality exceeded my expectations!</p>
          <p className="mt-2 text-sm font-medium">- John Doe</p>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="flex flex-col items-center text-center">
          <p className="text-lg font-semibold">"Affordable prices and great deals!"</p>
          <p className="mt-2 text-sm text-gray-500">This website has the best discounts. I’ve saved so much money while still getting high-quality products.</p>
          <p className="mt-2 text-sm font-medium">- Sarah Smith</p>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="flex flex-col items-center text-center">
          <p className="text-lg font-semibold">"Highly recommend for hassle-free shopping!"</p>
          <p className="mt-2 text-sm text-gray-500">Shopping here was a breeze! The interface is user-friendly, and the support team is super helpful.</p>
          <p className="mt-2 text-sm font-medium">- Alex Brown</p>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  
  
  )
}

export default Review
