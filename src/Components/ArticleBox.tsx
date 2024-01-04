import { FC } from "react";
import { BiLike, BiMessage } from "react-icons/bi";

interface ArticleBoxProps {
  title: string;
  body: string;
}

const ArticleBox: FC<ArticleBoxProps> = ({ body, title }) => {
  return (
    <div className="group w-full mt-8 sm:mt-0 flex flex-col gap-4 rounded-lg shadow-md shadow-zinc-400 text-slate-400 text-2xl p-8 animate-fade-up">
      <img
        src="/img/blog/news-apple.jpg"
        className="rounded-lg cursor-pointer shadow-lg shadow-zinc-400 transition-transform duration-300 transform -translate-y-16 group-hover:-translate-y-24"
        alt=""
      />
      <h4 className="text-3xl font-bold text-blue-600"> {title}</h4>
      <p className="mt-4">{body}</p>
      <div className="flex flex-wrap items-center justify-between mt-4">
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
