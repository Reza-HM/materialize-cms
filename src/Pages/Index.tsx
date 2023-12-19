import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Index: React.FC = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center text-white gap-16">
        <div
          className="p-4 rounded-md flex items-center gap-8 flex-1"
          style={{
            background: "linear-gradient(-45deg, #0288d1, #26c6da)",
          }}
        >
          <div className="">
            <div className="">
              <FaShoppingBag />
            </div>
            <p>سفارشات</p>
          </div>
          <div className="">
            <div className="">
              <h3>690</h3>
              <p>جدید</p>
            </div>
            <p>6,00,00</p>
          </div>
        </div>
        <div
          className="p-4 rounded-md flex items-center gap-8 flex-1"
          style={{
            background: "linear-gradient(-45deg, #ff5252, #f48fb1)",
          }}
        >
          <div className="">
            <div className="">
              <FaUser />
            </div>
            <p>سفارشات</p>
          </div>
          <div className="">
            <div className="">
              <h3>690</h3>
              <p>جدید</p>
            </div>
            <p>6,00,00</p>
          </div>
        </div>
        <div
          className="p-4 rounded-md flex items-center gap-8 flex-1"
          style={{
            background: "linear-gradient(-45deg, #ff6f00, #ffca28)",
          }}
        >
          <div className="">
            <div className="">
              <FaChartLine />
            </div>
            <p>سفارشات</p>
          </div>
          <div className="">
            <div className="">
              <h3>690</h3>
              <p>جدید</p>
            </div>
            <p>6,00,00</p>
          </div>
        </div>
        <div
          className="p-4 rounded-md flex items-center gap-8 flex-1"
          style={{
            background: "linear-gradient(-45deg, #43a047, #1de9b6)",
          }}
        >
          <div className="">
            <div className="">
              <FaDollarSign />
            </div>
            <p>سفارشات</p>
          </div>
          <div className="">
            <div className="">
              <h3>690</h3>
              <p>جدید</p>
            </div>
            <p>6,00,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
