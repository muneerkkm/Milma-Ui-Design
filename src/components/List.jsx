import React from 'react';
import milkshake from "../assets/milkshake-set-table 1.png";
const List = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center w-full p-12   bg-slate-100 md:pt-10 md:pl-[170px] md:pr-[120px] gap-8'>
      <img src={milkshake} alt="" className='w-full md:w-[480px] h-auto md:h-[440px] object-cover mb-4 md:mb-0' />
      <div className='text-white'>
        <p className='text-black/60  md:text-2xl  font-sans'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
        </p>
      </div>
    </div>
  );
};

export default List;
