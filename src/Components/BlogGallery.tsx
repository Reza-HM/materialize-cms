import { FC } from "react";
import { BiLike, BiMessage } from "react-icons/bi";

const BlogGallery: FC = () => {
  return (
    <div className="bg-[url('/img/blog/iphone.png')] rounded-lg shadow-lg p-12 flex flex-col gap-12 text-white text-2xl animate-fade-up">
      <h4>
        عکاسی ماکرو مادون قرمز عمق سبز را در مجموعه ای خیره کننده از گیاهان
        جزیره قناری باز می کند
      </h4>
      <div className="flex justify-between items-center">
        <p>بیشتر بخوانید</p>
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
export default BlogGallery;
