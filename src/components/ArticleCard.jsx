export default function ArticleCard({ article }) {
  const {
    article_id,
    author,
    comment_count,
    created_at,
    title,
    coding,
    votes,
  } = article;
  return (
    <section className="article-card">
      <div className="article-card-creation-details"></div>
      <h3 className="article-card-title">{title}</h3>
      <div className="article-card-engagement-details"></div>
    </section>
  );
}
