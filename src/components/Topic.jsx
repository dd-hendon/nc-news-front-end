import { Link } from "react-router-dom";
import Articles from "./Articles";
import { TopicContext } from "../contexts/TopicContext";
import { useContext } from "react";

export default function Topic({ topic }) {
  const { slug } = topic;
  const { selectedTopic } = useContext(TopicContext);
  return (
    <Link to={`/${slug}`} element={<Articles />}>
      <strong
        className={selectedTopic === slug ? "selected-topic-link-text" : ""}
      >
        {slug.toUpperCase()}
      </strong>
    </Link>
  );
}
