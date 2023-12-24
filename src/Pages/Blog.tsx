import { FC } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import ArticleBox from "../Components/ArticleBox";

const Blog: FC = () => {
  return (
    <div className="">
      <BreadCrumb title="اخبار" />
      <div className="mt-16 p-8 grid grid-cols-3 gap-8">
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
      </div>
    </div>
  );
};
export default Blog;
