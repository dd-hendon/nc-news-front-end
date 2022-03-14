import "./App.css";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import ArticlePage from "./components/ArticlePage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("jessjelly");

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="app-container">
        <div className="app">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/:topic" element={<Articles />} />
            <Route
              path="/article/:article_id"
              element={<ArticlePage />}
            ></Route>
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
