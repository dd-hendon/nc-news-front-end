import "./App.css";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import { TopicContext } from "./contexts/TopicContext";
import useTopics from "./hooks/useTopics";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import ArticlePage from "./components/ArticlePage";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("jessjelly");
  const [selectedTopic, setSelectedTopic] = useState("");
  const { topics, isLoading } = useTopics();

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <TopicContext.Provider value={{ selectedTopic, setSelectedTopic }}>
        <div className="app-container">
          <div className="app">
            <Header />
            <Nav topics={topics} isLoading={isLoading} />

            <Routes>
              <Route path="/" element={<Articles />} />
              <Route
                path="/topic/:topic"
                element={<Articles topics={topics} />}
              />
              <Route
                path="/article/:article_id"
                element={<ArticlePage />}
              ></Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </TopicContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
