export default function CommentCard({ comment }) {
  const { author, body, comment_id, votes, created_at } = comment;

  return (
    <article className="comment-card">
      <section className="comment-details">
        <strong>{author} </strong>
        <span>| {created_at}</span>
      </section>
      <p className="comment-body">{body}</p>
      <section className="comment-vote-box">{votes} votes</section>
    </article>
  );
}
