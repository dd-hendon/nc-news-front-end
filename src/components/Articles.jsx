import ArticlesHeader from "./ArticlesHeader";
import ArticlesList from "./ArticlesList";
import { useParams } from "react-router-dom";
import useArticles from "../hooks/useArticles";

export default function Articles() {
  const { topic } = useParams();
  const { articles, isLoading } = useArticles(topic);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <main className="articles">
      <ArticlesHeader topic={topic} />
      <ArticlesList articles={articles} />
    </main>
  );
}
