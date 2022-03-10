import Topic from "./Topic";
import useTopics from "../hooks/useTopics";

export default function Nav() {
  const { topics, isLoading } = useTopics();
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <nav className="static-nav">
      {topics.map((topic, index) => {
        return <Topic topic={topic} key={`${index}-${topic.slug}`} />;
      })}
    </nav>
  );
}
