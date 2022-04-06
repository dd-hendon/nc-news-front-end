import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import CommentDelete from "./CommentDelete";

export default function CommentCard({ comment }) {
  const { author, body, comment_id, votes, created_at, isTempComment } =
    comment;
  const { loggedInUser } = useContext(UserContext);
  const isUserComment = loggedInUser === author;
  const [isDeleted, setIsDeleted] = useState(false);

  if (isDeleted) return <p>Comment deleted</p>;

  return (
    <article className="comment-card">
      <section className="comment-details">
        <strong className={isUserComment ? "comment-author-is-user" : ""}>
          {author}
        </strong>
        <span> | {created_at}</span>
      </section>
      <p className="comment-body">{body}</p>
      <section className="comment-bottom-bar">
        <section className="comment-vote-box">{votes} votes</section>
        {isUserComment ? (
          <CommentDelete
            comment_id={comment_id}
            setIsDeleted={setIsDeleted}
            isTempComment={isTempComment}
          />
        ) : (
          ""
        )}
      </section>
    </article>
  );
}
