import { FC } from "react";
import { FaAngleLeft } from "react-icons/fa";

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
    </div>
  );
};
export default ProductsSidebar;
