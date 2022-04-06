import { useState } from "react";
import { deleteComment } from "../utils/api";

export default function CommentDelete({
  comment_id,
  setIsDeleted,
  isTempComment,
}) {
  const [err, setErr] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(isTempComment);

  const handleDelete = () => {
    setErr(null);
    setButtonDisabled(true);
    deleteComment(comment_id)
      .then(() => setIsDeleted(true))
      .catch(() => {
        setErr("Something went wrong, please try again");
        setButtonDisabled(false);
      });
  };

  return (
    <>
      <p id="comment-error-message">{err}</p>
      <button
        className="comment-delete-button"
        disabled={buttonDisabled}
        onClick={() => handleDelete()}
      >
        Delete
      </button>
    </>
  );
}
