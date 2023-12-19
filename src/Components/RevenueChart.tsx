import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaArrowUp } from "react-icons/fa";

const RevenueChart: React.FC = () => {
  // Sample data (replace this with your actual data)
  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const data = persianMonths.map((month) => ({
    name: month,
    درآمد: Math.floor(Math.random() * 101),
  }));

  const yAxisTicks = [100, 80, 60, 40, 20, 0]; // Desired Y-axis tick values

  return (
    <div className="flex-[2] bg-white shadow-lg rounded-lg">
      <div className="p-6 rounded-md">
        <div className="flex justify-between items-center">
          <h4 className="flex items-center gap-8 mt-0">
            درآمد برای سال ۲۰۲۰
            <span className="text-[#BF40BF] ml-4 flex items-center gap-4">
              <FaArrowUp className="text-2xl" /> 15.58 %
            </span>
          </h4>
          <button
            className="py-2 px-8 text-white rounded-lg"
            style={{ background: "linear-gradient(-45deg, #8e24aa, #ff6e40)" }}
          >
            جزئیات
          </button>
        </div>
        <div className="mt-8">
          <div className="">
            <svg style={{ position: "absolute", zIndex: -1 }}>
              <defs>
                <filter
                  id="shadow"
                  x="-20%"
                  y="-20%"
                  width="150%"
                  height="150%"
                >
                  <feDropShadow
                    dx="2"
                    dy="2"
                    stdDeviation="2"
                    floodColor="rgba(0, 0, 0, 0.9)"
                  />
                </filter>
              </defs>
            </svg>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart className="p-2" data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis dataKey="name" />
                <YAxis ticks={yAxisTicks} />
                <Tooltip />
                <Legend />
                <Line
                  dataKey="درآمد"
                  type="monotone"
                  stroke="#BF40BF"
                  strokeWidth={6}
                  filter="url(#shadow)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
