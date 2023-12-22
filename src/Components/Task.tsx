import { FC } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegStar, FaTrash } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Task: FC = () => {
  return (
    <div className="flex items-center gap-8 border-b pb-8 animate-fade-up">
      <BsThreeDotsVertical />
      <div className="flex-1 flex flex-col gap-4 text-3xl text-slate-500">
        <MdCheckBoxOutlineBlank />
        <FaRegStar />
      </div>
      <div className="flex-[10]">
        <div className="flex flex-col items-center justify-between">
          <div className="flex items-center justify-between w-full">
            {" "}
            <div className="flex items-center gap-4 text-2xl font-bold">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 bg-gray-200 rounded-md py-1 px-2">
                <span className="w-6 h-6 block rounded-[50%] bg-purple-700"></span>{" "}
                <p className="text-slate-500 text-xl">API</p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xl text-slate-500 line-clamp-1">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2">
        <p className="text-2xl text-slate-500">23 آبان</p>
        <FaTrash className="text-2xl text-slate-500" />
      </div>
    </div>
  );
};
export default Task;
