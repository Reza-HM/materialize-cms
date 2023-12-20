import { FC } from "react";
import { FaAngleLeft } from "react-icons/fa";
import PriceRangeSlider from "./PriceRangeSlider";

const ProductsSidebar: FC = () => {
  return (
    <div className="flex-1 bg-white shadow-lg p-8 rounded-lg animate-fade-left">
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
      <h2 className="text-3xl text-slate-500 mt-16">رنگ</h2>
      <span className="block h-px w-full bg-slate-300 mt-6"></span>
      <form action="#" className="flex flex-col gap-4">
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-[50%] bg-slate-200"></span>
            <span className="text-slate-400">سفید</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-[50%] bg-black"></span>

            <span className="text-slate-400">مشکی</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-[50%] bg-yellow-500"></span>
            <span className="text-slate-400">کهربایی</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-[50%] bg-blue-400"></span>

            <span className="text-slate-400">آبی</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-[50%] bg-green-400"></span>

            <span className="text-slate-400">سبز</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-[50%] bg-gray-400"></span>

            <span className="text-slate-400">خاکستری</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-[50%] bg-yellow-300"></span>

            <span className="text-slate-400">زرد</span>
          </span>
        </label>
      </form>
      <h2 className="text-3xl text-slate-500 mt-16">برند</h2>
      <span className="block h-px w-full bg-slate-300 mt-6"></span>
      <form action="#" className="flex flex-col gap-4">
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="text-slate-400">اپل</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="text-slate-400">سامسونگ</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="text-slate-400">دل</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="text-slate-400">سونی</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="text-slate-400">نوکیا</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="text-slate-400">JBL</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="text-slate-400">فیلیپس</span>
          </span>
        </label>
      </form>
      <h2 className="text-3xl text-slate-500 mt-16">پیشنهادها</h2>
      <span className="block h-px w-full bg-slate-300 mt-6"></span>
      <form action="#" className="flex flex-col gap-4">
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="text-slate-400">پیشنهادی</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="text-slate-400">بدون هزینه EMI</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="text-slate-400">قیمت ویژه</span>
          </span>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <span className="flex items-center gap-4">
            <span className="text-slate-400">پیشنهاد بانکی</span>
          </span>
        </label>
      </form>
      <h2 className="text-3xl text-slate-500 mt-16">پیشنهادها</h2>
      <span className="block h-px w-full bg-slate-300 mt-6"></span>
      <form action="#" className="flex flex-col gap-4">
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <div className="flex items-center gap-2">
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
          </div>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <div className="flex items-center gap-2">
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
          </div>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <div className="flex items-center gap-2">
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
          </div>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <div className="flex items-center gap-2">
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
          </div>
        </label>
        <label className="mt-3 flex items-center gap-8">
          <input type="checkbox" className="w-8 h-8 accent-red-400" />
          <div className="flex items-center gap-2">
            <img src="/img/Gold_Star.png" className="w-8 h-8" alt="" />
          </div>
        </label>
      </form>
    </div>
  );
};
export default ProductsSidebar;
