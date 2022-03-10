import Topic from "./Topic";
import useTopics from "../hooks/useTopics";

export default function Nav() {
  const { topics, isLoading } = useTopics();
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <nav className="static-nav">
      {topics.map((topic) => {
        return <Topic topic={topic} />;
      })}
    </nav>
  );
}
