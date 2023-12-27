import { FC } from "react";
import { FaCalendar, FaCheck, FaClock, FaRegStar, FaTrash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";

const TasksSidebar: FC = () => {
  return (
    <div className="lg:flex-1 lg:block hidden animate-fade-left">
      <div className="flex items-center gap-4 text-2xl text-slate-500">
        <MdEmail />
        همه
      </div>
      <h2 className="mt-10 text-3xl font-bold">فیلتر ها</h2>
      <ul className="mt-8 flex flex-col gap-8">
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaRegStar />
          ستاره دار{" "}
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <RiErrorWarningLine />
          اولویت
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaClock />
          برنامه ریزی شده{" "}
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaCalendar />
          امروز{" "}
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaCheck />
          انجام شده{" "}
        </li>
        <li className="flex items-center gap-4 text-2xl text-slate-500">
          <FaTrash />
          حذف{" "}
        </li>
      </ul>
    </div>
  );
};
export default TasksSidebar;
