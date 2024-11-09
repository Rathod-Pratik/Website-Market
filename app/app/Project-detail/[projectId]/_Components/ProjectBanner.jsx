import Image from 'next/image';
import React from 'react';

const ProjectBanner = ({ project }) => {
  return (
    <div className='w-full'>
      {project ? (
        <Image src={project.img} className='rounded-lg object-cover lg:w-[460px] lg:h-[300px]' alt='banner' width={400} height={400} />
      ): <div className='h-[350px] w-[350px] bg-slate-200 animate-pulse '>

      </div> }
    </div>
  );
};

export default ProjectBanner;
