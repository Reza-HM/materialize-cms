import React from "react";
import { MdFormatIndentIncrease } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-32 bg-white shadow-xl py-4 px-8 sticky top-0 left-0 right-0 z-50 w-full">
      <div className="bg-slate-100 lg:flex-[2] relative hidden lg:block">
        <FaSearch className="absolute right-6 top-6 text-slate-600 " />
        <input
          type="text"
          className="w-full bg-unset px-16 py-4 placeholder:text-black rounded-xl shadow-md border focus:bg-white"
          placeholder="کاوش در متریالایز..."
        />
      </div>
      <div className="flex lg:hidden flex-[2] items-center gap-8">
        <div className="flex justify-center items-center w-14 h-14 text-white rounded-full bg-blue-500 shadow-lg cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-linear">
          <FaBars className="text-3xl" />
        </div>
        <img src="/img/materialize-logo-color.png" className="w-20" alt="" />
      </div>
      <div className="flex-1 flex gap-8 justify-between lg:gap-0 lg:justify-evenly items-center">
        <img src="/img/gb.svg" className="w-10 h-10" alt="" />
        <div className="relative">
          <span className="absolute w-8 h-8 flex justify-center items-center -right-4 -top-4 text-white bg-blue-500 shadow-lg shadow-blue-500 rounded-[50%]">
            5
          </span>
          <FaRegBell className="text-4xl" />
        </div>
        <img
          src="/img/avatar-7.png"
          className="w-10 h-10 rounded-[50%]"
          alt=""
        />
        <MdFormatIndentIncrease className="text-4xl" />
      </div>
    </div>
  );
};
export default Header;
