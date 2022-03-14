import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { postComment } from "../utils/api";

export default function CommentPost({ article_id, comments, setComments }) {
  const { loggedInUser } = useContext(UserContext);
  const [commentInput, setCommentInput] = useState("");
  const [err, setErr] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr(null);
    const newComment = {
      author: loggedInUser,
      body: commentInput,
      created_at: "just now",
      votes: 0,
    };
    setComments((currentComments) => {
      const tempComments = [...currentComments];
      tempComments.unshift(newComment);
      return tempComments;
    });
    postComment(article_id, loggedInUser, commentInput)
      .then(() => {
        setCommentInput("");
      })
      .catch((err) => {
        setComments((currentComments) => {
          return currentComments.slice(1);
        });
        setErr("Something went wrong, please try again");
      });
  };

  return (
    <article id="comment-post">
      <label id="comment-post-header">
        comment as <strong>{loggedInUser}</strong>
      </label>
      <form id="comment-post-form" onSubmit={handleSubmit}>
        <textarea
          id="comment-textbox"
          rows="7"
          value={commentInput}
          onChange={(event) => setCommentInput(event.target.value)}
        ></textarea>
        <input
          id="comment-submit"
          disabled={commentInput.length < 1}
          type="submit"
          value="Comment"
        />
      </form>
      <p id="comment-error-message">{err}</p>
    </article>
  );
}
