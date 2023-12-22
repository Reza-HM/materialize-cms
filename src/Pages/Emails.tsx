import { FaSearch } from "react-icons/fa";
// import BreadCrumb from "../Components/BreadCrumb";
import { MdEmail } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { IoMdPaper } from "react-icons/io";
import Email from "../Components/Email";
import { FC } from "react";

const Emails: FC = () => {
  return (
    <div className="">
      <div className="p-8 bg-gray-300/40">
        <div className="flex justify-between items-center mt-20">
          <div className="flex-1 flex items-center gap-4">
            <MdEmail className="text-4xl font-bold" />
            <h1 className="text-4xl font-bold">صندوق پستی</h1>
          </div>
          <div className="flex-[3] bg-slate-100 relative">
            <FaSearch className="absolute right-6 top-6 text-slate-500" />
            <input
              type="text"
              className="w-full bg-unset px-16 py-4 placeholder:text-slate-500 text-slate-500 rounded-xl shadow-md border focus:bg-white"
              placeholder="جستجوی ایمیل..."
            />
          </div>
        </div>
        <div className="flex items-center gap-12 mt-12 animate-fade-left">
          <img src="/img/2.jpg" className="w-20 h-20 rounded-[50%]" alt="" />
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-slate-500">رضا حمزه ای</p>
            <span className="text-lg text-slate-400">
              lawrence.collins@xyz.com
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-8 bg-gray-200/30 p-8">
        <div className="flex-1 animate-fade-left">
          <h2 className="text-3xl font-bold">پوشه ها</h2>
          <ul className="mt-12 flex flex-col gap-8">
            <li className="flex items-center gap-4 text-2xl text-slate-500">
              <MdEmail />
              صندوق ورودی
            </li>
            <li className="flex items-center gap-4 text-2xl text-slate-500">
              <IoSend />
              ارسال شده
            </li>
            <li className="flex items-center gap-4 text-2xl text-slate-500">
              <IoMdPaper />
              پیش نویس
            </li>
            <li className="flex items-center gap-4 text-2xl text-slate-500">
              <RiErrorWarningLine />
              طول
            </li>
            <li className="flex items-center gap-4 text-2xl text-slate-500">
              <FaTrashAlt />
              زباله ها
            </li>
          </ul>
          <h2 className="text-3xl font-bold mt-12">فیلترها</h2>
          <p className="flex items-center gap-4 mt-8 text-slate-500 text-2xl">
            <FaRegStar />
            ستاره دار
          </p>
        </div>
        <div className="flex-[3] bg-white shadow-lg rounded-lg -translate-y-32 h-[440px] overflow-y-scroll">
          <div className="flex justify-between items-center p-8">
            <div className="flex items-center gap-8 text-3xl font-bold text-slate-500">
              <MdCheckBoxOutlineBlank />
              <IoMdRefresh />
              <MdEmail />
              <FaBookmark />
              <FaFolder />
              <RiErrorWarningLine />
              <FaTrashAlt />
            </div>
            <BsThreeDotsVertical className="text-3xl font-bold text-slate-500" />
          </div>
          <span className="block h-px w-full bg-slate-300 mt-8"></span>
          <div className="p-8 flex flex-col gap-8 overflow-scroll">
            <Email />
            <Email />
            <Email />
            <Email />
            <Email />
            <Email />
            <Email />
            <Email />
            <Email />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Emails;
