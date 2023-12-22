import { FC } from "react";
import FilesSidebar from "../Components/FilesSidebar";

const Files: FC = () => {
  return (
    <div className="mt-12 p-8">
      <div className="flex gap-8 bg-white shadow-lg rounded-lg p-8 border border-slate-200">
        <FilesSidebar />
        <div className="flex-[4]">
          
        </div>
      </div>
    </div>
  );
};
export default Files;
