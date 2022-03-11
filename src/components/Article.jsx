import ArticleMain from "./ArticleMain";
import CommentSection from "./CommentSection";

export default function Article({ article_id }) {
  return (
    <section id="article">
      <ArticleMain article_id={article_id} />
      <CommentSection article_id={article_id} />
    </section>
  );
}
