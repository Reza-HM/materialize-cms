import { FC } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { BiSolidMemoryCard } from "react-icons/bi";
import { BsFolder } from "react-icons/bs";
import { FaClock, FaMusic, FaStar, FaTrash, FaVideo } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { MdMonitor, MdOutlinePhotoLibrary } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const FilesSidebar: FC = () => {
  return (
    <div className="hidden lg:block lg:flex-1 p-8 animate-fade-left border-l">
      <div className="py-4 px-8 bg-blue-600 text-white rounded-lg shadow-lg flex justify-center items-center gap-4 text-2xl font-bold cursor-pointer hover:bg-blue-700 transition-all duration-300">
        <FaPlus />
        افزودن فایل
      </div>
      <h2 className="mt-10 text-xl text-slate-400 font-bold">برچسب‌ها</h2>
      <ul className="mt-8 flex flex-col gap-8">
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <BsFolder />
          همه فایل‌ها{" "}
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <MdMonitor />
          دستگاه‌های من
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaClock />
          اخیرا{" "}
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaStar />
          مهم{" "}
        </li>

        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaTrash />
          فایل‌های حذف شده{" "}
        </li>
      </ul>
      <h2 className="mt-12 text-xl text-slate-400 font-bold">درایو من</h2>
      <ul className="mt-8 flex flex-col gap-8">
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <IoDocument />
          اسناد
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <MdOutlinePhotoLibrary />
          تصاویر
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaVideo />
          ویدئوها
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaMusic />
          موزیک
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <AiFillDatabase />
          فایل‌های زیپ{" "}
        </li>
      </ul>
      <h2 className="mt-12 text-xl text-slate-400 font-bold">وضعیت حافظه</h2>
      <div className="flex items-center gap-4 mt-4">
        <BiSolidMemoryCard className="text-3xl text-slate-500 font-bold" />
        <div className="">
          <p className="text-xl text-slate-500 font-bold">
            19.5GB استفاده شده از 25GB
          </p>
          <div className="relative h-2 overflow-hidden rounded-lg bg-slate-500 mt-1">
            <div className="absolute w-3/4 bg-blue-400 h-full"></div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-extrabold text-blue-500 text-start mt-6">
        ارتقای فضای حافظه
      </h2>
    </div>
  );
};
export default FilesSidebar;
