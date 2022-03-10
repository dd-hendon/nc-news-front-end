import ArticleCard from "./ArticleCard";

export default function ArticlesList({ articles }) {
  return (
    <section id="articles-list">
      {articles.map((article, index) => {
        return (
          <ArticleCard article={article} key={`${index}-${article.name}`} />
        );
      })}
    </section>
  );
}
