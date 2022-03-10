import { Link } from "react-router-dom";
import Articles from "./Articles";

export default function Topic({ topic }) {
  const { slug } = topic;
  return (
    <Link to={`/${slug}`} element={<Articles />} className="topic-link">
      <strong className="topic-link-text">{slug.toUpperCase()}</strong>
    </Link>
  );
}
