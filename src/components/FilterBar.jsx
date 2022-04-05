import date from "../assets/filter-date.png";
import votes from "../assets/filter-votes.png";
import comments from "../assets/filter-comments.png";

export default function FilterBar({ sortBy, setSortBy, order, setOrder }) {
  return (
    <section id="filter-bar">
      <div
        className={
          sortBy === "created_at"
            ? "filter-bar-button selected-filter"
            : "filter-bar-button"
        }
        onClick={() => {
          setSortBy("created_at");
        }}
      >
        <img className="filter-bar-image" src={date} alt="Sort by date" />
        Date
      </div>
      <div
        className={
          sortBy === "votes"
            ? "filter-bar-button selected-filter"
            : "filter-bar-button"
        }
        onClick={() => {
          setSortBy("votes");
        }}
      >
        <img className="filter-bar-image" src={votes} alt="Sort by votes" />
        Votes
      </div>
      <div
        className={
          sortBy === "comment_count"
            ? "filter-bar-button selected-filter"
            : "filter-bar-button"
        }
        onClick={() => {
          setSortBy("comment_count");
        }}
      >
        <img
          className="filter-bar-image"
          src={comments}
          alt="Sort by comments"
        />
        Comments
      </div>
      <div
        className={
          order === "DESC"
            ? "filter-bar-order-button selected-filter"
            : "filter-bar-order-button"
        }
        onClick={() => {
          setOrder("DESC");
        }}
      >
        {sortBy === "created_at" ? "Newest" : "Highest"}
      </div>
      <div
        className={
          order === "ASC"
            ? "filter-bar-order-button selected-filter"
            : "filter-bar-order-button"
        }
        onClick={() => {
          setOrder("ASC");
        }}
      >
        {sortBy === "created_at" ? "Oldest" : "Lowest"}
      </div>
    </section>
  );
}
