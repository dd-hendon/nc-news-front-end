import "./App.css";
import { useEffect, useState } from "react";
import { getTopics, getUsers } from "./utils/api";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes } from "react-router-dom";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("test-user");
  const [topics, setTopics] = useState();
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const topics = getTopics();
    const users = getUsers();

    Promise.all([topics, users]).then(([topics, users]) => {
      setTopics(topics);
      setUsers(users);
      setIsLoading(false);
      console.log(users);
    });
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="app-container">
        <div className="app">
          <Header />
          <Nav topics={topics} />
          <Routes></Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
