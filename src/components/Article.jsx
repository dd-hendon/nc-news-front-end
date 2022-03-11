import ArticleMain from "./ArticleMain";
import CommentList from "./CommentList";

export default function Article({ article_id }) {
  return (
    <section id="article">
      <ArticleMain article_id={article_id} />
      <CommentList article_id={article_id} />
    </section>
  );
}
