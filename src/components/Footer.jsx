import React from "react";
import logo from "../assets/Frame.png";
import fb from "../assets/fbb.png";
import yt from "../assets/yt.png";
import lk from "../assets/lk.png";
import insta from "../assets/insta.png";

const Footer = () => {
  return (
    <div className="w-full p-4 md:px-32 md:py-40 bg-blue-700 mt-4 md:mt-12 flex items-center justify-center">
      <div className=" w-full md:flex-row md:justify-between flex flex-col gap-6 items-center justify-center">
        <img className="w-[80px] h-[80px]  md:w-[170px] md:h-[170px] b-slate-400" src={logo} alt="" />
        <div className=" flex flex-col justify-center items-center md:gap-6 gap-2">
          <div className="flex flex-row items-center gap-2">
            <p className="text-white text-lg">Follow us</p>
            <img className="w-4 h-4 md:h-6 md:w-6" src={fb} alt="" />
            <img className="w-4 h-4 md:h-6 md:w-6" src={yt} alt="" />
            <img className="w-4 h-4 md:h-6 md:w-6" src={lk} alt="" />
            <img className="w-4 h-4 md:h-6 md:w-6" src={insta} alt="" />
          </div>
        
        <p className="text-white font-light md:font-normal tracking-widest text-sm">
          © Milmaicecream. All rights Reserved.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
