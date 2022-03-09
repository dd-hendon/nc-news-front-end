import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

export default function useArticles(topic) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      console.log(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  return { articles, isLoading };
}
