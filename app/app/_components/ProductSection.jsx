"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
const ProductSection = () => {
const [ProductLists,setProductLists]=useState([]);
async function FetchPrductList() {
  let response=await fetch('http://localhost:5000/',{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data=await response.json();
  setProductLists(data);
}
  useEffect(()=>{
    FetchPrductList();
  },[])

  return (
    <div>

    <div className='md:px-20 px-10'>
      <h2 className='font-medium text-black text-[20px] my-3'>Brand New</h2>
      <ProductList ProductData={ProductLists}/>
    </div>
    </div>
  )
}

export default ProductSection
