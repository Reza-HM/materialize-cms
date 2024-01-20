import { FC } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const FileBox: FC = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-4 border-2 rounded-lg mt-4 animate-fade-up">
      <div className="bg-gray-100 relative flex justify-center items-center rounded-lg p-12">
        <BsThreeDotsVertical className="text-slate-500 text-3xl absolute top-0 right-0" />
        <img src="/img/psd.png" className="w-12" alt="" />
      </div>
      <h4 className="text-2xl font-bold text-slate-500">Logo_design.psd</h4>
      <p className="text-xl text-slate-500">15.60mb</p>
      <p className="text-xl text-slate-500">آخرین دسترسی : 3 ساعت پیش</p>
    </div>
  );
};
export default FileBox;
