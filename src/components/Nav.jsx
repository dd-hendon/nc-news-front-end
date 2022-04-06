import Topic from "./Topic";

export default function Nav({ topics, isLoading }) {
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <nav className="static-nav">
      {topics.map((topic, index) => {
        return <Topic topic={topic} key={`${index}-${topic.slug}`} />;
      })}
    </nav>
  );
}
