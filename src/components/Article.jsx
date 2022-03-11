import ArticleMain from "./ArticleMain";
import CommentList from "./CommentList";
import CommentPost from "./CommentPost";

export default function Article({ article_id }) {
  return (
    <section id="article">
      <ArticleMain article_id={article_id} />
      <CommentPost article_id={article_id} />
      <CommentList article_id={article_id} />
    </section>
  );
}
