import FilterBar from "./FilterBar";

export default function ArticlesHeader({ topic }) {
  const header = topic ? topic : "all articles";
  return (
    <section>
      <h2> {header}</h2>
      <FilterBar />
    </section>
  );
}
