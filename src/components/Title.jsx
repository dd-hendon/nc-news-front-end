import { Link } from "react-router-dom";
import Articles from "./Articles";

export default function Title() {
  return (
    <Link to="/" element={<Articles />}>
      <h1 className="static-title">NC-News</h1>
    </Link>
  );
}
