import { useState } from "react";
import Search from "./Search";
import Filters from "./Filters";
import Countries from "./Countries";
import Loading from "./Loading";

export default function Main({ countries, isLoading, setCountries }) {
  const [region, setRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  function handleSetRegion(e) {
    setRegion(e.target.value);
  }

  function handleSearchQuery(e) {
    setSearchQuery(e.target.value.toLowerCase());
  }

  return (
    <main className="main">
      <section className="section-control-results">
        <div className="control-results">
          <Search onSearchQuery={handleSearchQuery} searchQuery={searchQuery} />
          <Filters region={region} onSetRegion={handleSetRegion} />
        </div>
      </section>
      <section className="section-countries">
        {isLoading ? (
          <Loading />
        ) : (
          <Countries
            countries={countries}
            region={region}
            searchQuery={searchQuery}
          />
        )}
      </section>
    </main>
  );
}
