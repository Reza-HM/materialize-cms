import { FC } from "react";
import { FaClipboard, FaSearch, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import Accordion from "../Components/Accordion";

const Questions: FC = () => {
  return (
    <div className="mt-8 p-8">
      <div className="bg-[url('/img/faq-search.jpg')] bg-cover bg-no-repeat p-24 rounded-lg shadow-lg flex flex-col items-center gap-8 animate-fade-up">
        <h2 className="text-zinc-700 text-4xl font-bold">سوالات متداول</h2>
        <p className="text-slate-500">
          برای پاسخ‌های سریع، مرکز راهنمایی ما را جستجو کنید
        </p>
        <input
          type="text"
          className="rounded-full mt-8 p-6 w-full shadow-md shadow-zinc-700 text-slate-500 text-2xl"
          placeholder="شروع به تایپ جستجوی خود کنید..."
        />
      </div>
      <div className="flex items-center gap-8 mt-8 animate-fade-up">
        <div className="flex-1 flex flex-col items-center gap-8 bg-gray-200 rounded-lg shadow-lg p-12">
          <FaSearch className="text-7xl font-bold text-yellow-500" />
          <div className="flex flex-col gap-4 items-center mt-4">
            <h2 className="text-3xl font-bold">راهنما</h2>
            <p className="text-slate-500 text-2xl">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-8 bg-gray-200 rounded-lg shadow-lg p-12">
          <MdMessage className="text-7xl font-bold text-red-600" />
          <div className="flex flex-col gap-4 items-center mt-4">
            <h2 className="text-3xl font-bold">سوالات متداول</h2>
            <p className="text-slate-500 text-2xl">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-8 bg-gray-200 rounded-lg shadow-lg p-12">
          <FaUser className="text-7xl font-bold text-green-600" />
          <div className="flex flex-col gap-4 items-center mt-4">
            <h2 className="text-3xl font-bold">جامعه</h2>
            <p className="text-slate-500 text-2xl">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-8 bg-gray-200 rounded-lg shadow-lg p-12">
          <FaClipboard className="text-7xl font-bold text-blue-400" />
          <div className="flex flex-col gap-4 items-center mt-4">
            <h2 className="text-3xl font-bold">گزارشات</h2>
            <p className="text-slate-500 text-2xl">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex gap-8">
        <div className="flex-1 flex flex-col gap-16 bg-white rounded-lg shadow-md shadow-zinc-400 p-8 animate-fade-left">
          <div className="">
            <h2 className="text-3xl text-slate-600 mb-8">دسته بندی</h2>
            <ul className="flex flex-col gap-4 text-slate-500">
              <li className="flex items-center gap-4">
                <span className="bg-transparent border-2 border-yellow-500 rounded-[100%] w-8 h-8"></span>
                برنامه های کاربردی
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-transparent border-2 border-blue-500 rounded-[100%] w-8 h-8"></span>
                عناصر رابط کاربری
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-transparent border-2 border-purple-800 rounded-[100%] w-8 h-8"></span>
                اجزا
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-transparent border-2 border-green-500 rounded-[100%] w-8 h-8"></span>
                فرآیند ساخت
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-3xl text-slate-600 mb-8">فعالان</h2>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <img src="/img/2.jpg" className="w-16 h-16" alt="" />
                <div className="">
                  <h4 className="text-blue-500">مایک</h4>
                  <p className="text-slate-500">مایکروسافت</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img src="/img/2.jpg" className="w-16 h-16" alt="" />
                <div className="">
                  <h4 className="text-blue-500">مایک</h4>
                  <p className="text-slate-500">مایکروسافت</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img src="/img/2.jpg" className="w-16 h-16" alt="" />
                <div className="">
                  <h4 className="text-blue-500">مایک</h4>
                  <p className="text-slate-500">مایکروسافت</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img src="/img/2.jpg" className="w-16 h-16" alt="" />
                <div className="">
                  <h4 className="text-blue-500">مایک</h4>
                  <p className="text-slate-500">مایکروسافت</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-[4] flex flex-col gap-4 animate-fade-right">
          <Accordion /> <Accordion />
          <Accordion /> <Accordion />
          <Accordion /> <Accordion />
        </div>
      </div>
    </div>
  );
};
export default Questions;
