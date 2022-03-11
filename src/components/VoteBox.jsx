import upvote from "../assets/NC-UPVOTE.jpg";
import downvote from "../assets/NC-DOWNVOTE.jpg";

export default function VoteBox({ votes, topic }) {
  return (
    <section className="vote-box">
      <button className={`vote-button upvote ${topic}-upvote`}>
        <img src={upvote} alt="Upvote arrow using nc logo"></img>
      </button>
      <p className="vote-count">{votes}</p>
      <button className={`vote-button downvote ${topic}-downvote`}>
        <img src={downvote} alt="Downvote arrow using nc logo"></img>
      </button>
    </section>
  );
}
