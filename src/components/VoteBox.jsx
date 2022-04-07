import upvote from "../assets/nc-upvote.jpg";
import downvote from "../assets/nc-downvote.jpg";
import { useState } from "react";
import { patchVotes } from "../utils/api";

export default function VoteBox({ votes, article_id, setVoteError }) {
  const [userVote, setUserVote] = useState(0);

  const handleClick = (vote) => {
    setUserVote((currentVotes) => currentVotes + vote);
    setVoteError(null);
    patchVotes(article_id, vote).catch(() => {
      setUserVote((currentVotes) => currentVotes - vote);
      setVoteError("Something went wrong, please try again");
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
        aria-label="upvote"
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
        aria-label="downvote"
      >
        <img src={downvote} alt="Downvote arrow using nc logo"></img>
      </button>
    </section>
  );
}
