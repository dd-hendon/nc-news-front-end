import "./App.css";
import { useEffect, useState } from "react";
import { getTopics, getUsers } from "./utils/api";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";

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
    });
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="app-container">
        <div className="app">
          <Header />
          <Nav topics={topics} />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/:topic" element={<Articles />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
