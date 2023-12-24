import { FC } from "react";
import { BiLike, BiMessage } from "react-icons/bi";

const ArticleBox: FC = () => {
  return (
    <div className="group flex flex-col gap-4 rounded-lg shadow-md shadow-zinc-400 text-slate-400 text-2xl p-8 animate-fade-up">
      <img
        src="/img/blog/news-apple.jpg"
        className="rounded-lg cursor-pointer shadow-lg shadow-zinc-400 transition-transform duration-300 transform -translate-y-16 group-hover:-translate-y-24"
        alt=""
      />
      <h4 className="text-3xl font-bold text-blue-600">اخبار اپل</h4>
      <p className="mt-4">
        برخی از کاربران گزارش داده‌اند که تلفن‌های جدیدشان وقتی به کابل‌های
        لایتنینگ وصل می‌شوند، وقتی صفحه‌نمایش خاموش است، شارژ نمی‌شوند.
      </p>
      <div className="flex items-center justify-between mt-4">
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
export default ArticleBox;
