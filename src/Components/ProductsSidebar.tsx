import { FC } from "react";
import { FaAngleLeft } from "react-icons/fa";
import PriceRangeSlider from "./PriceRangeSlider";

const ProductsSidebar: FC = () => {
  return (
    <div className="flex-1 bg-white shadow-lg p-8">
      <h2 className="text-3xl text-slate-500">دسته‌بندی</h2>
      <span className="block h-px w-full bg-slate-300 mt-6"></span>
      <ul className="mt-16 flex flex-col gap-8 text-slate-400">
        <li className="flex items-center justify-between">
          ساعت‌ها
          <FaAngleLeft />
        </li>
        <li className="flex items-center justify-between">
          تبلت‌ها
          <FaAngleLeft />
        </li>
        <li className="flex items-center justify-between">
          لپتاپ‌ها
          <FaAngleLeft />
        </li>
        <li className="flex items-center justify-between">
          موبایل
          <FaAngleLeft />
        </li>
      </ul>
      <h2 className="text-3xl text-slate-500 mt-16">قیمت</h2>
      <span className="block h-px w-full bg-slate-300 mt-6"></span>
      <PriceRangeSlider />
      <h2 className="text-3xl text-slate-500 mt-16">سایز</h2>
      <span className="block h-px w-full bg-slate-300 mt-6"></span>
      <div className="flex justify-center items-center gap-4 mt-6 text-blue-500 text-3xl font-bold">
        <div className="bg-purple-200/80 p-4 rounded-xl shadow-md w-16 h-16 flex justify-center items-center ">
          XL
        </div>
        <div className="bg-purple-200/80 p-4 rounded-xl shadow-md w-16 h-16 flex justify-center items-center ">
          L
        </div>
        <div className="bg-purple-200/80 p-4 rounded-xl shadow-md w-16 h-16 flex justify-center items-center text-white bg-purple-700">
          M
        </div>
        <div className="bg-purple-200/80 p-4 rounded-xl shadow-md w-16 h-16 flex justify-center items-center ">
          S
        </div>
        <div className="bg-purple-200/80 p-4 rounded-xl shadow-md w-16 h-16 flex justify-center items-center ">
          SM
        </div>
      </div>
      
    </div>
  );
};
export default ProductsSidebar;
