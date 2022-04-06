import { useEffect, useState } from "react";
import { getArticle } from "../utils/api";

export default function useArticle(article_id) {
  const [article, setArticle] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [article_id]);

  return { article, isLoading, error };
}
