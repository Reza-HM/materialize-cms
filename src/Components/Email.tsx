import { FC } from "react";
import { FaBookmark } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineAttachment } from "react-icons/md";

const Email: FC = () => {
  return (
    <div className="flex gap-8 border-b pb-8">
      <div className="flex-1 flex flex-col gap-8 text-3xl text-slate-500">
        <MdCheckBoxOutlineBlank />
        <FaRegStar />
        <FaBookmark />
      </div>
      <div className="flex-[6]">
        <div className="flex flex-col items-center justify-between">
          <div className="flex items-center justify-between w-full">
            {" "}
            <div className="flex items-center gap-4">
              <img
                src="/img/2.jpg"
                className="w-16 h-16 rounded-[50%]"
                alt=""
              />
              <p className="font-bold text-slate-600">رضا حمزه‌ ای</p>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineAttachment className="text-3xl text-slate-500 font-bold" />
              <div className="flex items-center gap-4 bg-gray-200 rounded-md py-1 px-2">
                <span className="w-6 h-6 block rounded-[50%] bg-purple-700"></span>{" "}
                <p className="text-slate-500 text-2xl">Note</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-xl text-slate-500">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
          </p>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-2xl text-slate-500 text-end">2:03 PM</p>
      </div>
    </div>
  );
};
export default Email;
