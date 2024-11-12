"use client";
// import Breadcroub from '@/app/_components/Breadcroub';
import Breadcroub from '../../_components/Breadcroub';
import React, { useEffect, useState, use } from 'react';
import ProjectBanner from './_Components/ProjectBanner';
import ProjectInfo from './_Components/ProjectInfo';
import ProductList from '../../_components/ProductList';
import { usePathname } from 'next/navigation';

const Page = ({ params }) => {
  const path=usePathname();

  const { projectId } = use(params);
  const productid = parseInt(projectId);
  const [Data, setData] = useState([]);

  useEffect(() => {
    ProductDetail();
  }, []);

  const ProductDetail = async () => {
    try {
      const response = await fetch('https://website-market.vercel.app', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filteredData = Data.filter(item => item.cartID === productid);
  const product = filteredData.length > 0 ? filteredData[0] : null;

  return (
    <div className='p-5 py-13 px-10 md:px-28'>
      <Breadcroub path={path} />
      <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-5'>
        <ProjectBanner project={product} />
        <ProjectInfo  product={product}/>
      </div>
      <div className='mt-20'>
        <h2 className='text-black text-[20px] font-medium'>Similar Projects</h2>
      <ProductList ProductData={Data} />
      </div>
    </div>
  );
};

export default Page;
