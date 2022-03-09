import ArticlesHeader from "./ArticlesHeader";
import ArticlesList from "./ArticlesList";
import { useParams } from "react-router-dom";
import useArticles from "../hooks/useArticles";

export default function Articles() {
  const { topic } = useParams();
  const { articles, isLoading } = useArticles();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <main className="articles">
      <ArticlesHeader />
      <ArticlesList articles={articles} />
    </main>
  );
}
