import { FC } from "react";
import { BiLike, BiMessage } from "react-icons/bi";
import { TfiStatsUp } from "react-icons/tfi";

interface BlogTweetProps {
  title: string;
}

const BlogTweet: FC<BlogTweetProps> = ({ title }) => {
  return (
    <div className="p-8 w-full flex flex-col gap-8 bg-white shadow-lg rounded-lg animate-fade-up">
      <div className="flex items-center gap-4 text-orange-600 text-2xl">
        <TfiStatsUp />
        پرطرفدار
      </div>
      <p className="text-2xl text-slate-400">{title}</p>
      <div className="flex flex-wrap items-center justify-between mt-4 text-slate-400">
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
