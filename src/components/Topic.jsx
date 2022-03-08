import { Link } from "react-router-dom";

export default function Topic({ topic }) {
  return <strong className="topic-link">{topic.slug.toUpperCase()}</strong>;
  //   return <Link className="topic-link">{topic.slug}</Link>;
}
