import { FC } from "react";
import { BiLike, BiMessage } from "react-icons/bi";

interface BlogGalleryProps {
  body: string;
}

const BlogGallery: FC<BlogGalleryProps> = ({ body }) => {
  return (
    <div className="bg-[url('/img/blog/iphone.png')] rounded-lg shadow-lg p-12 w-full flex flex-col gap-12 text-white text-2xl animate-fade-up">
      <h4>{body}</h4>
      <div className="flex flex-wrap justify-between items-center">
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
