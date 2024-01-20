import { FC, useEffect, useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import ArticleBox from "../Components/ArticleBox";
import BlogNews from "../Components/BlogNews";
import BlogTweet from "../Components/BlogTweet";
import BiggerArticleBox from "../Components/BiggerArticleBox";
import BlogGallery from "../Components/BlogGallery";

interface Article {
  id: number;
  title: string;
  body: string;
}

const Blog: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(`https://materialize-server.liara.run/blog`);
        const articlesData: Article[] = await res.json();
        setArticles(articlesData);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="">
      <BreadCrumb title="اخبار" />
      <div className="mt-16 p-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.slice(0, 3).map((article) => (
          <ArticleBox {...article} key={article.id} />
        ))}
        {articles.slice(3, 6).map((article) => (
          <BlogNews {...article} key={article.id} />
        ))}
        {articles.slice(6, 9).map((article) => (
          <BlogTweet {...article} key={article.id} />
        ))}
        <div className="col-span-1 xs:col-span-2 md:col-span-3 flex flex-wrap md:flex-nowrap gap-8">
          {articles.slice(3, 5).map((article) => (
            <BiggerArticleBox {...article} key={article.id} />
          ))}
        </div>
        {articles.slice(7, 10).map((article) => (
          <BlogGallery {...article} key={article.id} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
