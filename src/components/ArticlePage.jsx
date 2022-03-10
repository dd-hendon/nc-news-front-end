import { useParams } from "react-router-dom";
import Article from "./Article";

export default function ArticlePage() {
  const { article_id } = useParams();
  return (
    <section id="article-page">
      <div id="article-back-button"></div>
      <Article article_id={article_id} />
    </section>
  );
}
