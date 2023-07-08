import Country from "./Country";
import React from "react";

export default function Countries({ countries, region, searchQuery }) {
  // console.log(countries);
  // console.log(searchQuery);

  return (
    <ul className="countries">
      {countries.length === 0 && console.log("ssss")}
      {region !== "all"
        ? countries
            .filter((country) =>
              country.name.common.toLowerCase().startsWith(searchQuery)
            )
            .map((country, i) =>
              country.region === region ? (
                <Country country={country} key={country.name.common} />
              ) : (
                <React.Fragment key={i}></React.Fragment>
              )
            )
        : countries
            .filter((country) =>
              country.name.common.toLowerCase().startsWith(searchQuery)
            )
            .map((country) => (
              <Country country={country} key={country.name.common} />
            ))}
    </ul>
  );
}
