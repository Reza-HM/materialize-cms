import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  FaFile,
  FaHome,
  FaShoppingBag,
  FaTasks,
  FaUsers,
} from "react-icons/fa";
import {
  MdArticle,
  MdContactSupport,
  MdContacts,
  MdEmail,
} from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";

interface SidebarProps {
  isOpened?: boolean;
  setIsOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ isOpened, setIsOpened }) => {
  return (
    <>
      <div
        className={`${
          isOpened ? "!block" : "hidden"
        } hidden lg:block animate-fade-left lg:animate-none w-[200px] flex-1 bg-[#2c323f] text-white fixed lg:sticky top-0 h-screen z-50 overflow-y-auto p-8 shadow-md`}
      >
        <div className="flex items-center gap-4 border-b pb-4 border-slate-500">
          <img
            src="/img/materialize-logo.png"
            className="w-16"
            alt="cms logo"
          />
          <h1 className="text-4xl font-bold">متریالایز</h1>
        </div>
        <ul className="flex flex-col gap-16 mt-12">
          <li className="flex items-center gap-8 hover:pr-8 cursor-pointer transition-all duration-300 ease-in-out">
            <FaHome className="text-4xl" />
            <Link to="/"> صفحه اصلی</Link>
          </li>
          <li className="flex items-center gap-8 hover:pr-8 cursor-pointer transition-all duration-300 ease-in-out">
            <FaShoppingBag className="text-4xl" />
            <Link to="/products">محصولات</Link>
          </li>
          <li className="flex items-center gap-8 hover:pr-8 cursor-pointer transition-all duration-300 ease-in-out">
            <MdEmail className="text-4xl" />
            <Link to="/emails">ایمیل‌ها</Link>
          </li>
          <li className="flex items-center gap-8 hover:pr-8 cursor-pointer transition-all duration-300 ease-in-out">
            <FaTasks className="text-4xl" />
            <Link to="/tasks">تسک‌ها</Link>
          </li>
          <li className="flex items-center gap-8 hover:pr-8 cursor-pointer transition-all duration-300 ease-in-out">
            <FaFile className="text-4xl" />
            <Link to="/file-management">مدیریت فایل</Link>
          </li>
          <li className="flex items-center gap-8 hover:pr-8 cursor-pointer transition-all duration-300 ease-in-out">
            <MdContacts className="text-4xl" />
            <Link to="/contacts">مخاطبین</Link>
          </li>

          <li className="flex items-center gap-8 hover:pr-8 cursor-pointer transition-all duration-300 ease-in-out">
            <FaMoneyBills className="text-4xl" />
            <Link to="/bills">صورتحساب</Link>
          </li>
          <li className="flex items-center gap-8 hover:pr-8 cursor-pointer transition-all duration-300 ease-in-out">
            <FaUsers className="text-4xl" />
            <Link to="/users">کاربران</Link>
          </li>
          <li className="flex items-center gap-8 hover:pr-8 cursor-pointer transition-all duration-300 ease-in-out">
            <MdArticle className="text-4xl" />
            <Link to="/blog">وبلاگ</Link>
          </li>
          <li className="flex items-center gap-8 hover:pr-8 cursor-pointer transition-all duration-300 ease-in-out">
            <BsFillQuestionSquareFill className="text-4xl" />
            <Link to="/questions">سوالات متداول</Link>
          </li>
          <li className="flex items-center gap-8 hover:pr-8 cursor-pointer transition-all duration-300 ease-in-out">
            <MdContactSupport className="text-4xl" />
            <Link to="/contact-us">تماس با ما</Link>
          </li>
          <li className="flex items-center gap-8 hover:pr-8 cursor-pointer transition-all duration-300 ease-in-out">
            <IoLogOut className="text-4xl" />
            <Link to="/logout">خروج</Link>
          </li>
        </ul>
      </div>
      <div
        className={`fixed z-40 top-0 right-0 left-0 hidden h-[120vh] opacity-0 bg-black/50 ${
          isOpened ? "!block !opacity-100" : ""
        }`}
        onClick={() => setIsOpened && setIsOpened(false)}
      ></div>
    </>
  );
};

export default Sidebar;
