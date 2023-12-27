import { FC } from "react";
import { FaAngleLeft } from "react-icons/fa";

interface BreadCrumbProps {
  title: string;
}

const BreadCrumb: FC<BreadCrumbProps> = ({ title }) => {
  return (
    <div className="flex flex-wrap items-center justify-between bg-[url('/img/breadcrumb-bg.jpg')] bg-center bg-cover p-10">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="flex flex-wrap items-center gap-4 mt-4 text-slate-300">
        <p>خانه</p>
        <FaAngleLeft />
        <p>برنامه‌ها</p>
        <FaAngleLeft />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default BreadCrumb;
