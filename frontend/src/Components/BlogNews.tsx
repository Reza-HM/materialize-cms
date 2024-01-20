import { FC } from "react";
import { BiLike, BiMessage } from "react-icons/bi";

interface BlogNewsProps {
  title: string;
  body: string;
}

const BlogNews: FC<BlogNewsProps> = ({ body, title }) => {
  return (
    <div
      className="text-white w-full rounded-lg shadow-lg p-12 flex flex-col gap-8 animate-fade-up"
      style={{ background: "linear-gradient(-45deg, #3949ab, #4fc3f7)" }}
    >
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-2xl">{body}</p>
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
export default BlogNews;
