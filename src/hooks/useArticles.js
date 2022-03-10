import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

export default function useArticles(topic) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(topic).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  return { articles, isLoading };
}
