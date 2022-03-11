import CommentCard from "./CommentCard";

export default function CommentList({ comments, isLoading }) {
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <section id="comments-list">
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </section>
  );
}
