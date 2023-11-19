import React from 'react'
import chocoData from "../Data/data.json"
const Products = () => {
  return (
    <div>
    <div className=' py-6 md:py-14 flex items-center justify-center bg-blue-700'>
        <p className='text-white text-3xl tracking-wider font-bold'>Products</p>
    </div>
    <div className=' w-full  md:px-24 b-violet-600 flex items-center justify-center md:mt-12 flex-col'>
      <p className='text-[#f6d046] bg-[#653425] md:p-2 md:px-48 px-14 mt-8  rounded-full text-3xl tracking-wide font-bold'>Chocolate</p>
      <div className='w-full  gap-4 justify-between b-red-500 p-8 flex flex-col md:flex-row '>
        {
            chocoData.chocolates.map((chocolate)=>( 
                <div className=' p-4 b-yellow-300 rounded-xl border-[7px] shadow-2xl  flex-col border-[#653425] flex items-center justify-center'>
                    <div className='w-full rounded-lg  b-slate-400 flex items-center  justify-center p- '>
                        <img className='rounded-lg' src={chocolate.image}  />
                    </div>
                    <div className='w-full p-2 flex justify-between font-bold g-green-400 items-center '>
                        <div>
                            <p>{chocolate.name}</p>
                            <p className='text-gray-500 font-semibold'>{chocolate.weight}</p>
                        </div>
                        <div cl>
                            <p className=' text-lg'>₹{chocolate.price}</p>
                        </div>
                    </div>
                </div>
             ))
        } 
      </div>

    </div>

    {/* vanila */}
    <div className=' w-full  md:px-24 b-violet-600 flex items-center justify-center md:mt-20 flex-col'>
      <p className='text-[#653425] bg-[#f6d046] md:p-2 md:px-48 px-14 mt-8  rounded-full text-3xl tracking-wide font-bold'>Vanila</p>
      <div className='w-full  gap-4 justify-between b-red-500 p-8 flex flex-col md:flex-row '>
        {
            chocoData.vanila.map((chocolate)=>( 
                <div className=' p-4 b-yellow-300 rounded-xl border-[7px] shadow-2xl  flex-col border-[#f6d046] flex items-center justify-center'>
                    <div className='w-full rounded-lg  b-slate-400 flex items-center  justify-center p- '>
                        <img className='rounded-lg' src={chocolate.image}  />
                    </div>
                    <div className='w-full p-2 flex justify-between font-bold g-green-400 items-center '>
                        <div>
                            <p>{chocolate.name}</p>
                            <p className='text-gray-500 font-semibold'>{chocolate.weight}</p>
                        </div>
                        <div cl>
                            <p className=' text-lg'>₹{chocolate.price}</p>
                        </div>
                    </div>
                </div>
             ))
        } 
      </div>

    </div>

    {/* pists */}

    <div className=' w-full  md:px-24 b-violet-600 flex items-center justify-center md:mt-20 flex-col'>
      <p className=' bg-[#9fdd3d] md:p-2 md:px-48 px-14 mt-8  rounded-full text-3xl tracking-wide font-bold'>Pista</p>
      <div className='w-full  gap-4 justify-between b-red-500 p-8 flex flex-col md:flex-row '>
        {
            chocoData.pista.map((chocolate)=>( 
                <div className=' p-4 b-yellow-300 rounded-xl border-[7px] shadow-2xl  flex-col border-[#9fdd3d] flex items-center justify-center'>
                    <div className='w-full rounded-lg  b-slate-400 flex items-center  justify-center p- '>
                        <img className='rounded-lg' src={chocolate.image}  />
                    </div>
                    <div className='w-full p-2 flex justify-between font-bold g-green-400 items-center '>
                        <div>
                            <p>{chocolate.name}</p>
                            <p className='text-gray-500 font-semibold'>{chocolate.weight}</p>
                        </div>
                        <div cl>
                            <p className=' text-lg'>₹{chocolate.price}</p>
                        </div>
                    </div>
                </div>
             ))
        } 
      </div>

    </div>
    </div>
  )
}

export default Products