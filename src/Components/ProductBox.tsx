import { FC } from "react";

const ProductBox: FC = () => {
  return (
    <div className="relative flex flex-col gap-8 bg-white p-8 rounded-lg shadow-lg overflow-hidden">
      <div
        className="absolute top-4 left-[-10rem] text-white text-xl flex justify-center items-center text-center w-[25rem] h-[2em] -rotate-45"
        style={{
          background: "linear-gradient(-45deg, #8e24aa 0%, #ff6e40 100%)",
        }}
      >
        موجود
      </div>
      <div className="">
        <p className="text-slate-400">ساعت های هوشمند</p>
        <h3 className="text-slate-600 text-3xl mt-2">
          ساعت هوشمند 2.0 LTE Wifi
        </h3>
      </div>
      <img src="/img/watch-2.png" alt="" />
      <div className="">
        <h3 className="text-slate-400 text-center mb-4 text-3xl font-bold">
          399 تومان
        </h3>
        <button className="bg-blue-600 py-2 rounded-lg text-white w-full shadow-xl shadow-zinc-500 hover:shadow-sm transition-all duration-300">
          نمایش
        </button>
      </div>
    </div>
  );
};
export default ProductBox;
