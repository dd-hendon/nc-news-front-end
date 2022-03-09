import ArticleCard from "./ArticleCard";

export default function ArticlesList({ articles }) {
  return (
    <section id="articles-list">
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </section>
  );
}
