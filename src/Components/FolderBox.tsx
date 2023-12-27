import { FC } from "react";
import { BsFolder } from "react-icons/bs";

const FolderBox: FC = () => {
  return (
    <div className="w-full flex items-center gap-4 p-4 border-2 rounded-lg mt-4 animate-fade-up">
      <BsFolder className="text-4xl font-bold text-slate-500" />
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-bold text-slate-500">ویدئو</h4>
        <p className="text-xl text-slate-500">130 فایل, 890mb</p>
      </div>
    </div>
  );
};
export default FolderBox;
