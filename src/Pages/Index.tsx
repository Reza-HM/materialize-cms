import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import RevenueChart from "../Components/RevenueChart";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";

const Index: React.FC = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center text-white gap-16 animate-fade-down">
        <div
          className="p-8 rounded-md flex justify-between items-center gap-8 flex-1"
          style={{
            background: "linear-gradient(-45deg, #0288d1, #26c6da)",
          }}
        >
          <div className="flex flex-col gap-8">
            <div className="p-8 rounded-[50%] bg-black/20 flex justify-center items-center">
              <FaShoppingBag className="text-3xl" />
            </div>
            <p>سفارشات</p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="">
              <h3 className="text-3xl font-bold">690</h3>
              <p>جدید</p>
            </div>
            <p>6,00,00</p>
          </div>
        </div>
        <div
          className="p-8 rounded-md flex justify-between items-center gap-8 flex-1"
          style={{
            background: "linear-gradient(-45deg, #ff5252, #f48fb1)",
          }}
        >
          <div className="flex flex-col gap-8">
            <div className="p-8 rounded-[50%] bg-black/20 flex justify-center items-center">
              <FaUser className="text-3xl" />
            </div>
            <p>مشتریان</p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="">
              <h3 className="text-3xl font-bold">1885</h3>
              <p>جدید</p>
            </div>
            <p>1,12,900</p>
          </div>
        </div>
        <div
          className="p-8 rounded-md flex justify-between items-center gap-8 flex-1 "
          style={{
            background: "linear-gradient(-45deg, #ff6f00, #ffca28)",
          }}
        >
          <div className="flex flex-col gap-8">
            <div className="p-8 rounded-[50%] bg-black/20 flex justify-center items-center">
              <FaChartLine className="text-3xl" />
            </div>
            <p>فروش ها</p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="">
              <h3 className="text-3xl font-bold">80%</h3>
              <p>رشد</p>
            </div>
            <p>3,42,230</p>
          </div>
        </div>
        <div
          className="p-8 rounded-md flex justify-between items-center gap-8 flex-1 "
          style={{
            background: "linear-gradient(-45deg, #43a047, #1de9b6)",
          }}
        >
          <div className="flex flex-col gap-8">
            <div className="p-8 rounded-[50%] bg-black/20 flex justify-center items-center">
              <FaDollarSign className="text-3xl" />
            </div>
            <p>سود</p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="">
              <h3 className="text-3xl font-bold">890</h3>
              <p>تومان امروز</p>
            </div>
            <p>25,000 تومان</p>
          </div>
        </div>
      </div>
      <div className="flex gap-8 mt-20">
        <RevenueChart />
        <div className="flex-1 bg-white rounded-md shadow-lg animate-fade-up p-6">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">درآمد</h3>
              <p className="text-lg text-slate-400">15 دوشنبه - 21 یکشنبه</p>
            </div>
            <BsThreeDotsVertical />
          </div>
          <div className="flex items-center gap-8 justify-start mt-24 mr-4">
            <h1 className="text-7xl">۸۹۹۰ تومان</h1>
            <FaArrowUp className="text-4xl text-orange-500" />
          </div>
          <img src="/img/download.png" className="block mt-12" alt="" />
          <div className="flex flex-col justify-center text-center mt-8">
            <h3 className="text-2xl text-slate-600">کل درآمد هفتگی</h3>
            <button
              className="py-2 px-8 text-white rounded-lg w-60 self-center mt-4"
              style={{
                background: "linear-gradient(-45deg, #8e24aa, #ff6e40)",
              }}
            >
              مشاهده
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-8 mt-20">
        <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8 flex justify-between items-start">
            <button
              className="py-2 px-8 text-white rounded-lg"
              style={{
                background: "linear-gradient(-45deg, #0288d1, #26c6da)",
              }}
            >
              + 42.6% جدید
            </button>
            <div className="">
              <h3 className="text-slate-400 text-xl">کاربران آنلاین</h3>{" "}
              <p className="text-slate-400 text-xl">360 میانگین</p>{" "}
              <h2 className="text-3xl mt-4 font-bold">3,450</h2>
            </div>
          </div>
          <img src="/img/shape1.png" alt="" />
        </div>
        <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8 flex justify-between items-start">
            <button
              className="py-2 px-8 text-white rounded-lg"
              style={{
                background: "linear-gradient(-45deg, #8e24aa, #ff6e40)",
              }}
            >
              + 12% جدید
            </button>
            <div className="">
              <h3 className="text-slate-400 text-xl">بارگذاری سرور فعلی</h3>{" "}
              <p className="text-slate-400 text-xl">23.1% میانگین</p>{" "}
              <h2 className="text-3xl mt-4 font-bold"> +2500</h2>
            </div>
          </div>
          <img src="/img/shape2.png" alt="" />
        </div>
        <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8 flex justify-between items-start">
            <button
              className="py-2 px-8 text-white rounded-lg"
              style={{
                background: "linear-gradient(-45deg, #ff6f00, #ffca28)",
              }}
            >
              +900 تومان جدید
            </button>
            <div className="">
              <h3 className="text-slate-400 text-xl"> درآمد امروز </h3>{" "}
              <p className="text-slate-400 text-xl">40,512 تومان میانگین</p>{" "}
              <h2 className="text-3xl mt-4 font-bold">22300 تومان</h2>
            </div>
          </div>
          <img src="/img/shape3.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Index;
