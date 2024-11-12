import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <Link href={`/Project-detail/${product.cartID}`} className='hover:border p-1 rounded-lg border-blue-300'>
      <div >
      <Image height={350} width={400} src={product.img} className='rounded-t-lg h-[190px] object-cover' alt='product-image'  />
      </div>
      <div className='p-3 flex justify-between bg-gray-50 rounded-b-lg'>
      <h2 className='text-[14px] text-black line-clamp-1'>{product.name}</h2>
      <h2 className='text-black font-medium'>{product.price}</h2>
      </div>
    </Link>
  )
}

export default ProductItem
