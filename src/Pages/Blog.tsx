import { FC } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import ArticleBox from "../Components/ArticleBox";
import BlogNews from "../Components/BlogNews";
import BlogTweet from "../Components/BlogTweet";
import BiggerArticleBox from "../Components/BiggerArticleBox";

const Blog: FC = () => {
  return (
    <div className="">
      <BreadCrumb title="اخبار" />
      <div className="mt-16 p-8 grid grid-cols-3 gap-8">
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <BlogNews />
        <BlogNews />
        <BlogNews />
        <BlogTweet />
        <BlogTweet />
        <BlogTweet />
        <div className="col-span-3 flex gap-8">
          <BiggerArticleBox />
          <BiggerArticleBox />
        </div>
      </div>
    </div>
  );
};
export default Blog;
