import "./App.css";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import { TopicContext } from "./contexts/TopicContext";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import ArticlePage from "./components/ArticlePage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("jessjelly");
  const [selectedTopic, setSelectedTopic] = useState("");

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <TopicContext.Provider value={{ selectedTopic, setSelectedTopic }}>
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
      </TopicContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
