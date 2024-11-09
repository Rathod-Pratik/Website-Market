import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ProductData}) => {
  return (
    <div className='gap-3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>
      {
       ProductData.map((item,index)=>(
        <div key={index} >
          <ProductItem  product={item}/>
        </div>
       ))
      }
    </div>
  )
}

export default ProductList
