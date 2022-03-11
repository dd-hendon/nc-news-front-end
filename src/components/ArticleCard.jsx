import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const { article_id, author, comment_count, created_at, title, topic, votes } =
    article;
  return (
    <Link to={`/article/${article_id}`}>
      <section className="article-card">
        <div className="article-card-creation-details">
          <strong>{topic} • </strong>
          <span>posted by {author} | </span>
          <span> {created_at}</span>
        </div>
        <h4 className="article-card-title">{title}</h4>
        <div className="article-card-engagement-details">
          <span>votes: {votes} </span>
          <span>comments: {comment_count} </span>
        </div>
      </section>
    </Link>
  );
}
