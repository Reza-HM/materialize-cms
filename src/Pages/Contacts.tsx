import { FaSearch, FaTrash, FaUser } from "react-icons/fa";
// import BreadCrumb from "../Components/BreadCrumb";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FC } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Task from "../Components/Task";
import ContactsSidebar from "../Components/ContactsSidebar";

const Contacts: FC = () => {
  return (
    <div className="">
      <div className="p-8 bg-gray-300/40">
        <div className="flex justify-between items-center mt-20">
          <div className="flex-1 flex items-center gap-4">
            <FaUser className="text-4xl font-bold" />
            <h1 className="text-4xl font-bold">مخاطبین</h1>
          </div>
          <div className="flex-[3] bg-slate-100 relative">
            <FaSearch className="absolute right-6 top-6 text-slate-500" />
            <input
              type="text"
              className="w-full bg-unset px-16 py-4 placeholder:text-slate-500 text-slate-500 rounded-xl shadow-md border focus:bg-white"
              placeholder="جستجوی مخاطب..."
            />
          </div>
        </div>
        <div className="flex items-center gap-12 mt-12 animate-fade-left">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-slate-500">
              تعداد کل مخاطبین
            </p>
            <span className="text-lg text-slate-400">1457 مخاطب</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-8 bg-gray-200/30 p-8 ">
        <ContactsSidebar />
        <div className="flex-[4] bg-white shadow-lg rounded-lg -translate-y-32 h-[440px] overflow-y-scroll">
          <div className="flex justify-between items-center p-8">
            <MdCheckBoxOutlineBlank className="text-3xl font-bold text-slate-500" />
            <div className="flex items-center gap-8 text-3xl font-bold text-slate-500">
              <FaTrash />
              <HiBars3BottomLeft />
              <BsThreeDotsVertical />
            </div>
          </div>
          <span className="block h-px w-full bg-slate-300 mt-4"></span>
          <div className="p-8 flex flex-col gap-8 overflow-scroll">
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
