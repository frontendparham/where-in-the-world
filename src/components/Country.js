export default function Country({ country }) {
  return (
    <li className="country">
      <img
        className="country__img"
        src={country.flags.svg}
        alt={country.name.common}
      />
      <div className="country__content">
        <h2>{country.name.common}</h2>
        <p>
          <b>Population</b>: {country.population}
        </p>
        <p>
          <b>Region</b>: {country.region}
        </p>
        <p>
          <b>Capital</b>: {country.capital}
        </p>
      </div>
    </li>
  );
}
