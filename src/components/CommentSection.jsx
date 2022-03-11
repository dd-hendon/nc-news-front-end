import CommentList from "./CommentList";
import CommentPost from "./CommentPost";
import useComments from "../hooks/useComments";

export default function CommentSection({ article_id }) {
  const { comments, isLoading, setComments } = useComments(article_id);

  return (
    <section id="comment-section">
      <CommentPost
        comments={comments}
        article_id={article_id}
        setComments={setComments}
      />
      <CommentList comments={comments} isLoading={isLoading} />
    </section>
  );
}
