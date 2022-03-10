import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";

export default function useUsers() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  return { users, isLoading };
}
