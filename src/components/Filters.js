export default function Filters({ region, onSetRegion }) {
  return (
    <div className="filters">
      <select className="filters__select" value={region} onChange={onSetRegion}>
        <option value="all">Select Region / All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
