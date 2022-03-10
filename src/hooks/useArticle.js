import { useEffect, useState } from "react";
import { getArticle } from "../utils/api";

export default function useArticle(article_id) {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState();

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  return { article, isLoading };
}
