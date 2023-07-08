import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Search({ onSearchQuery, searchQuery }) {
  return (
    <div className="search">
      <button className="search__btn">
        <MagnifyingGlass size="2.2rem" />
      </button>
      <input
        type="text"
        placeholder="Search fo a country..."
        className="search__input"
        value={searchQuery}
        onChange={onSearchQuery}
      />
    </div>
  );
}
