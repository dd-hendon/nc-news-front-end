import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

export default function useArticles(topic, order, sortBy) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, order, sortBy).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, order, sortBy]);

  return { articles, isLoading };
}
