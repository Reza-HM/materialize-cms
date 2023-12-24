import { FC } from "react";
import { BiLike, BiMessage } from "react-icons/bi";
import { TfiStatsUp } from "react-icons/tfi";

const BlogTweet: FC = () => {
  return (
    <div className="p-8  flex flex-col gap-8 bg-white shadow-lg rounded-lg animate-fade-up">
      <div className="flex items-center gap-4 text-orange-600 text-2xl">
        <TfiStatsUp />
        پرطرفدار
      </div>
      <p className="text-2xl text-slate-400">انتقال صاف انیمیشن در اندروید</p>
      <div className="flex items-center justify-between mt-4 text-slate-400">
        <div className="flex items-center gap-4">
          <img src="/img/2.jpg" className="w-12 h-12 rounded-[50%]" alt="" />
          <span>شخص X</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <BiLike className="text-3xl font-bold" /> 434
          </div>
          <div className="flex items-center gap-2">
            <BiMessage className="text-3xl font-bold" /> 43
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogTweet;
