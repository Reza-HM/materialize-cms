import { FC } from "react";
import { BiLike, BiMessage } from "react-icons/bi";

const BlogNews: FC = () => {
  return (
    <div
      className="text-white rounded-lg shadow-lg p-12 flex flex-col gap-8 animate-fade-up"
      style={{ background: "linear-gradient(-45deg, #3949ab, #4fc3f7)" }}
    >
      <h2 className="text-3xl font-bold">
        روش لاگوم برای امتحان پیوندهای پاییزی
      </h2>
      <p className="text-2xl">
        شما قصد ندارید هر ترند پاییزی را که در اینجا در Who What Wear می نویسیم
        امتحان کنید، اما اصلاً امتحان نکردن هیچ کدام از آنها چه لذتی دارد؟
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
export default BlogNews;
