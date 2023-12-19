import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import RevenueChart from "../Components/RevenueChart";

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
      <div className="flex items-center gap-8">
        <RevenueChart />
        <div className="flex-1"></div>
      </div>
    </div>
  );
};
export default Index;
