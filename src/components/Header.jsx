import React from 'react'
import logo from "../assets/Frame.png"
import child from "../assets/Group 3.png"

const Header = () => {
  return (
    <div className='main  h-[325px]  bg-blue-700 flex justify-center md:h-[625px] pt-[95px] overflow-hidden'>
     <img src={logo} alt="" className='w-[80px] h-[80px] fixed top-5 left-6 md:w-[172px] md:h-[176px]' />
     <img src={child} alt="" className='w-[300px] h-[230px] md:w-auto md:h-auto'/>
    </div>
  )
}

export default Header