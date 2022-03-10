import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

export default function useTopics() {
  const [topics, setTopics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  return { topics, isLoading };
}
