import { FC } from "react";

interface ProductBoxProps {
  category: string;
  title: string;
  image: string;
  price: number;
}

const ProductBox: FC<ProductBoxProps> = ({ category, title, image, price }) => {
  return (
    <div className="w-full relative flex flex-col gap-8 bg-white p-8 rounded-lg shadow-lg overflow-hidden animate-fade-up">
      <div
        className="absolute top-4 left-[-10rem] text-white text-xl flex justify-center items-center text-center w-[25rem] h-[2em] -rotate-45"
        style={{
          background: "linear-gradient(-45deg, #8e24aa 0%, #ff6e40 100%)",
        }}
      >
        موجود
      </div>
      <div className="">
        <p className="text-slate-400">{category}</p>
        <h3 className="text-slate-600 text-3xl mt-2 line-clamp-2">{title}</h3>
      </div>
      <img src={image} className="w-[200px] h-[200px] mx-auto" alt="" />
      <div className="">
        <h3 className="text-slate-400 text-center mb-4 text-3xl font-bold">
          {price} تومان
        </h3>
        <button className="bg-blue-600 py-2 rounded-lg text-white w-full shadow-xl shadow-zinc-500 hover:shadow-sm transition-all duration-300">
          نمایش
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
