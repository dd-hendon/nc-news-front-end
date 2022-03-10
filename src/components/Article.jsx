import ArticleMain from "./ArticleMain";

export default function Article({ article_id }) {
  return (
    <section id="article">
      <ArticleMain article_id={article_id} />
    </section>
  );
}
