import React, { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import RevenueChart from "../Components/RevenueChart";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";

interface InfosType {
  orders: number;
  profit: number;
  sales: number;
  customers: number;
  newUsers: number;
  income: {
    total: number;
    weekly: {
      Sunday: number;
      Monday: number;
      Tuesday: number;
      Wednesday: number;
      Thursday: number;
      Friday: number;
      Saturday: number;
    };
    daily: {
      average: number;
      highest: {
        day: string;
        amount: number;
      };
      lowest: {
        day: string;
        amount: number;
      };
    };
  };
  onlineUsers: number;
}

const Index: React.FC = () => {
  const [infos, setInfos] = useState<InfosType>({
    orders: 0,
    profit: 0,
    sales: 0,
    customers: 0,
    newUsers: 0,
    income: {
      total: 0,
      weekly: {
        Sunday: 0,
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday: 0,
        Friday: 0,
        Saturday: 0,
      },
      daily: {
        average: 0,
        highest: {
          day: "",
          amount: 0,
        },
        lowest: {
          day: "",
          amount: 0,
        },
      },
    },
    onlineUsers: 0,
  });

  useEffect(() => {
    const fetchInfos = async () => {
      try {
        const res = await fetch("http://localhost:3000/statistics");
        const fetchedInfos: InfosType = await res.json();
        setInfos(fetchedInfos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInfos();
  }, []);

  return (
    <div className="p-8">
      <div className="flex flex-wrap justify-between items-center text-white gap-16 animate-fade-up">
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
              <h3 className="text-3xl font-bold">{infos.orders}</h3>
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
              <h3 className="text-3xl font-bold">{infos.customers}</h3>
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
            <p> تومان {infos.sales.toLocaleString()}</p>
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
              <h3 className="text-3xl font-bold">
                {infos.profit.toLocaleString()}
              </h3>
              <p>تومان امروز</p>
            </div>
            <p className="truncate">{infos.profit.toLocaleString()} تومان</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 mt-20  animate-fade-up">
        <RevenueChart />
        <div className="w-full md:flex-1 bg-white rounded-md shadow-lg p-6">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">درآمد</h3>
              <p className="text-lg text-slate-400">15 دوشنبه - 21 یکشنبه</p>
            </div>
            <BsThreeDotsVertical />
          </div>
          <div className="flex items-center gap-8 justify-start mt-24 mr-4">
            <h1 className="text-7xl">
              {infos.income.weekly.Friday.toLocaleString()} تومان
            </h1>
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
      <div className="flex flex-wrap gap-8 mt-20 animate-fade-up">
        <div className="w-full md:flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
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
              <h2 className="text-3xl mt-4 font-bold">
                {infos.onlineUsers} نفر
              </h2>
            </div>
          </div>
          <img src="/img/shape1.png" alt="" />
        </div>
        <div className="w-full md:flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
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
        <div className="w-full md:flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
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
              <p className="text-slate-400 text-xl">
                {infos.income.daily.average.toLocaleString()} تومان میانگین
              </p>{" "}
              <h2 className="text-3xl mt-4 font-bold">
                {infos.income.weekly.Thursday.toLocaleString()} تومان
              </h2>
            </div>
          </div>
          <img src="/img/shape3.png" alt="" />
        </div>
      </div>
      <div className="flex flex-wrap gap-8 mt-20 animate-fade-up">
        <div className="w-full md:flex-1 bg-white shadow-lg rounded-lg overflow-hidden p-8 flex flex-col justify-center items-center gap-8 text-center">
          <h2 className="text-4xl font-bold">ساعت اپل</h2>
          <img src="/img/watch.png" alt="" />
          <div className="">
            <h4 className="text-slate-500 text-2xl">ساعت اپل</h4>
            <p className="text-2xl text-slate-400 mt-4">
              یک روز فقط فروش اختصاصی در بازار ما
            </p>
          </div>

          <button
            style={{
              background: "linear-gradient(-45deg, #0288d1, #26c6da)",
            }}
            className="py-2 px-8 rounded-md text-white shadow-lg"
          >
            999 تومان
          </button>
        </div>
        <div className="w-full md:flex-1 bg-white shadow-lg rounded-lg overflow-hidden p-8 flex flex-col justify-center items-center gap-8 text-center">
          <h2 className="text-4xl font-bold">آهنگ</h2>
          <img src="/img/headphone.png" className="my-8" alt="" />
          <div className="">
            <h4 className="text-slate-500 text-2xl">کیفیت پیش فرض</h4>
            <div className="flex items-center gap-8 mt-4">
              <h4 className="text-2xl text-slate-600 py-2 px-4 bg-slate-200 rounded-3xl">
                192kb
              </h4>
              <p className="text-2xl text-slate-600 py-2 px-4 bg-slate-200 rounded-3xl">
                320kb
              </p>
            </div>
          </div>

          <button
            style={{
              background: "linear-gradient(-45deg, #ff5252, #f48fb1)",
            }}
            className="py-2 px-8 rounded-md text-white shadow-lg"
          >
            399 تومان
          </button>
        </div>
        <div className="w-full md:flex-1 bg-white shadow-lg rounded-lg overflow-hidden p-8 flex flex-col justify-center items-center gap-8 text-center">
          <h2 className="text-4xl font-bold">آیفون</h2>
          <img src="/img/phone.png" alt="" />
          <div className="">
            <h4 className="text-slate-500 text-2xl">گوشی اپل X</h4>
            <p className="text-2xl text-slate-400 mt-4">
              یک روز فقط فروش اختصاصی در بازار ما
            </p>
          </div>

          <button
            style={{
              background: "linear-gradient(-45deg, #ff6f00, #ffca28)",
            }}
            className="py-2 px-8 rounded-md text-white shadow-lg"
          >
            299 تومان
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 mt-20 animate-fade-up">
        <div
          className="w-full md:flex-1 bg-white shadow-lg rounded-lg overflow-hidden p-8 flex flex-col justify-center items-center gap-8 text-center text-white"
          style={{
            background: "linear-gradient(-45deg, #0288d1, #26c6da)",
          }}
        >
          <img src="/img/apple-watch.png" className="w-40 h-40" alt="" />
          <h2 className="text-3xl font-bold">50% تخفیف</h2>
          <p>در ساعت اپل</p>
        </div>
        <div
          className="w-full md:flex-1 bg-white shadow-lg rounded-lg overflow-hidden p-8 flex flex-col justify-center items-center gap-8 text-center text-white"
          style={{
            background: "linear-gradient(-45deg, #ff5252, #f48fb1)",
          }}
        >
          <img src="/img/printer.png" className="w-40 h-40" alt="" />
          <h2 className="text-3xl font-bold">20% تخفیف</h2>
          <p>در چاپگر کانن</p>
        </div>
        <div
          className="w-full md:flex-1 bg-white shadow-lg rounded-lg overflow-hidden p-8 flex flex-col justify-center items-center gap-8 text-center text-white"
          style={{
            background: "linear-gradient(-45deg, #ff6f00, #ffca28)",
          }}
        >
          <img src="/img/laptop.png" className="w-40 h-40" alt="" />
          <h2 className="text-3xl font-bold">40% تخفیف</h2>
          <p>در مک بوک اپل</p>
        </div>
        <div
          className="w-full md:flex-1 bg-white shadow-lg rounded-lg overflow-hidden p-8 flex flex-col justify-center items-center gap-8 text-center text-white"
          style={{
            background: "linear-gradient(-45deg, #43a047, #1de9b6)",
          }}
        >
          <img src="/img/bowling.png" className="w-40 h-40" alt="" />
          <h2 className="text-3xl font-bold">60% تخفیف</h2>
          <p>در هر بازی</p>
        </div>
      </div>
    </div>
  );
};
export default Index;
