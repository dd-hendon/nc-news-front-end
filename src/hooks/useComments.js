import { useEffect, useState } from "react";
import { getComments } from "../utils/api";

export default function useComments(article_id) {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  return { comments, isLoading };
}
