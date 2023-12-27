import { FC } from "react";
import { FaRegStar, FaTrashAlt } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";

const EmailsSidebar: FC = () => {
  return (
    <div className="lg:flex-1 hidden lg:block animate-fade-left">
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
  );
};
export default EmailsSidebar;
