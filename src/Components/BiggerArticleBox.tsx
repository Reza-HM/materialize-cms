import { FC } from "react";
import { BiLike, BiMessage } from "react-icons/bi";
import { Link } from "react-router-dom";

const BiggerArticleBox: FC = () => {
  return (
    <div className="flex overflow-hidden gap-4 bg-white rounded-lg shadow-lg animate-fade-up">
      <div className="flex-1">
        <img src="/img/blog/horizontal-news-1.jpg" className="h-80 w-full" alt="" />
      </div>
      <div className="flex-1 flex flex-col p-4 gap-8 text-slate-500">
        <p>
          سال 2018 است و رقابت بین غول های فناوری برای تصمیم گیری در مورد اینکه
          چه کسی بازار را کنترل خواهد کرد در جریان است.
        </p>
        <Link to="#" className="border-b pb-4 text-blue-500">
          بیشتر بخوانید
        </Link>
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
export default BiggerArticleBox;
