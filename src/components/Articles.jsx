import FilterBar from "./FilterBar";
import ArticlesList from "./ArticlesList";
import { useParams } from "react-router-dom";
import useArticles from "../hooks/useArticles";
import { useEffect, useState } from "react";
import { TopicContext } from "../contexts/TopicContext";
import { useContext } from "react";
import checkValidTopic from "../utils/checkValidTopic";
import ErrorPage from "./ErrorPage";

export default function Articles({ topics }) {
  const { topic } = useParams();
  const { setSelectedTopic } = useContext(TopicContext);
  const [order, setOrder] = useState("DESC");
  const [sortBy, setSortBy] = useState("created_at");
  const { articles, isLoading } = useArticles(topic, order, sortBy);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(checkValidTopic(topic, topics));
    setSelectedTopic(topic);
  }, [topic, setSelectedTopic, topics]);

  if (error) return <ErrorPage error={error} />;
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <main className="articles">
      <div id="strip-separator"></div>
      <FilterBar
        order={order}
        setOrder={setOrder}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div id="strip-separator"></div>
      <ArticlesList articles={articles} />
    </main>
  );
}
