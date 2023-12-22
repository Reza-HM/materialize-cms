import { FC } from "react";
import FilesSidebar from "../Components/FilesSidebar";
import { FaSearch, FaTrash, FaUser } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import FileBox from "../Components/FileBox";
import FolderBox from "../Components/FolderBox";

const Files: FC = () => {
  return (
    <div className="mt-12 p-8">
      <div className="flex bg-white shadow-lg rounded-lg border border-slate-200">
        <FilesSidebar />
        <div className="flex-[4]">
          <div className="flex justify-between items-center border-b p-6">
            <div className="flex relative items-center gap-8 text-slate-500 text-3xl w-full">
              <FaSearch className="cursor-pointer" />
              <input
                type="text"
                placeholder="جستجوی فایل..."
                className="bg-unset w-full"
              />
            </div>
            <div className="flex items-center gap-8 text-slate-500 text-3xl">
              <FaUser />
              <FaTrash />
              <BsThreeDotsVertical />
            </div>
          </div>
          <h2 className="text-3xl font-bold p-6 mt-8">همه فایل ها</h2>
          <div className="mt-8 p-6">
            <p className="text-xl text-slate-400 font-bold">
              فایلی که اخیراً به آن دسترسی پیدا کرده است
            </p>
            <div className="grid grid-cols-4 gap-8">
              <FileBox />
              <FileBox />
              <FileBox />
              <FileBox />
            </div>
          </div>
          <div className="mt-8 p-6">
            <p className="text-xl font-bold text-slate-400">پوشه</p>
            <div className="grid grid-cols-4 gap-8">
              <FolderBox />
              <FolderBox />
              <FolderBox />
              <FolderBox />
              <FolderBox />
              <FolderBox />
              <FolderBox />
              <FolderBox />
            </div>
          </div>
          <div className="mt-8 p-6">
            <p className="text-xl text-slate-400 font-bold">فایل ها</p>
            <div className="grid grid-cols-4 gap-8">
              <FileBox />
              <FileBox />
              <FileBox />
              <FileBox />
              <FileBox />
              <FileBox />
              <FileBox />
              <FileBox />
              <FileBox />
              <FileBox />
              <FileBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Files;
