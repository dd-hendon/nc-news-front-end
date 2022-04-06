import ArticleMain from "./ArticleMain";
import CommentSection from "./CommentSection";
import useArticle from "../hooks/useArticle";
import ErrorPage from "./ErrorPage";

export default function Article({ article_id }) {
  const { article, isLoading, error } = useArticle(article_id);

  if (error) return <ErrorPage error={error} />;
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <section id="article">
      <ArticleMain
        article_id={article_id}
        article={article}
        isLoading={isLoading}
      />
      <CommentSection article_id={article_id} />
    </section>
  );
}
