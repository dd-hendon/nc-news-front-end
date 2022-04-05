import FilterBar from "./FilterBar";
import ArticlesList from "./ArticlesList";
import { useParams } from "react-router-dom";
import useArticles from "../hooks/useArticles";
import { useState } from "react";
import { TopicContext } from "../contexts/TopicContext";
import { useContext } from "react";

export default function Articles() {
  const { topic } = useParams();
  const { setSelectedTopic } = useContext(TopicContext);
  setSelectedTopic(topic);

  const [order, setOrder] = useState("DESC");
  const [sortBy, setSortBy] = useState("created_at");
  const { articles, isLoading } = useArticles(topic, order, sortBy);

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
