import upvote from "../assets/NC-UPVOTE.jpg";
import downvote from "../assets/NC-DOWNVOTE.jpg";
import { useState } from "react";
import { patchVotes } from "../utils/api";

export default function VoteBox({ votes, article_id }) {
  const [userVote, setUserVote] = useState(0);

  const handleClick = (vote) => {
    setUserVote((currentVotes) => currentVotes + vote);
    patchVotes(article_id, vote).catch((err) => {
      console.log(err);
      setUserVote((currentVotes) => currentVotes - vote);
    });
  };

  return (
    <section className="vote-box">
      <button
        className={`vote-button upvote `}
        onClick={() => {
          handleClick(1);
        }}
        disabled={userVote > 0}
      >
        <img src={upvote} alt="Upvote arrow using nc logo"></img>
      </button>
      <p className="vote-count">{votes + userVote}</p>
      <button
        className={`vote-button downvote `}
        onClick={() => {
          handleClick(-1);
        }}
        disabled={userVote < 0}
      >
        <img src={downvote} alt="Downvote arrow using nc logo"></img>
      </button>
    </section>
  );
}
