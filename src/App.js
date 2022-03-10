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

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="app-container">
        <div className="app">
          <Header />
          <Nav />
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
