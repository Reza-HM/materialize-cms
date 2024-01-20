import { FC } from "react";
import { FaAngleDown, FaAngleUp, FaRegStar, FaUser } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsPrinter } from "react-icons/bs";

const ContactsSidebar: FC = () => {
  return (
    <div className="hidden md:block md:flex-1 animate-fade-left h-[350px] overflow-y-scroll">
      <h2 className="mt-10 text-3xl font-bold">فیلتر ها</h2>
      <ul className="mt-8 flex flex-col gap-8">
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaUser />
          همه مخاطبین
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaClockRotateLeft />
          اخیرا{" "}
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaRegStar />
          ستاره دار{" "}
        </li>
      </ul>
      <h2 className="mt-10 text-3xl font-bold">گزینه ها </h2>
      <ul className="mt-8 flex flex-col gap-8">
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaAngleDown />
          وارد کردن{" "}
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaAngleUp />
          خروجی گرفتن
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <BsPrinter />
          پرینت
        </li>
      </ul>
      <h2 className="mt-10 text-3xl font-bold">بخش</h2>
      <ul className="mt-8 flex flex-col gap-8">
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <span className="w-6 h-6 rounded-[100%] block bg-purple-700"></span>
          مهندسی{" "}
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <span className="w-6 h-6 rounded-[100%] block bg-yellow-400"></span>
          جراحی{" "}
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <span className="w-6 h-6 rounded-[100%] block bg-green-500"></span>
          پشتیبانی
        </li>
      </ul>
    </div>
  );
};
export default ContactsSidebar;
