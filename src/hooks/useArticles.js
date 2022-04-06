import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

export default function useArticles(topic, order, sortBy) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, order, sortBy)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [topic, order, sortBy]);

  return { articles, isLoading, error };
}
