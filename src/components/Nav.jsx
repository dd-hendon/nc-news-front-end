import Topic from "./Topic";

export default function Nav({ topics }) {
  return (
    <nav className="static-nav">
      {topics.map((topic) => {
        return <Topic topic={topic} />;
      })}
    </nav>
  );
}
