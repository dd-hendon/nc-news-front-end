import { useState } from "react";
import useArticle from "../hooks/useArticle";
import VoteBox from "./VoteBox";

export default function ArticleMain({ article_id }) {
  const { article, isLoading } = useArticle(article_id);
  const [voteError, setVoteError] = useState();

  if (isLoading) return <h2>Loading...</h2>;

  const { title, topic, author, body, created_at, votes, comment_count } =
    article;

  return (
    <article id="article-main">
      <section id="article-creation-details">
        <strong>#{topic} </strong>
        <span>posted by {author} </span>
        <span>at {created_at}</span>
      </section>
      <h3 id="article-title">{title}</h3>
      <p id="article-body">{body}</p>
      <section id="article-engagement-details">
        <VoteBox
          votes={votes}
          article_id={article_id}
          setVoteError={setVoteError}
        />
        <section id="article-comment-count">{comment_count} comments</section>
      </section>
      <p className="vote-error-message">{voteError}</p>
    </article>
  );
}
