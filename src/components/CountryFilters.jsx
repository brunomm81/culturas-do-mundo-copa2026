import { CONTINENTS } from "../data/countries";

const CONTINENT_ICONS = {
  Todos: "🌎",
  "América do Sul": "🌎",
  "América do Norte/Central": "🌎",
  Europa: "🌍",
  África: "🌍",
  Ásia: "🌏",
  Oceania: "🌏",
};

export default function CountryFilters({ activeContinent, onContinentChange, search, onSearchChange, resultCount }) {
  const options = ["Todos", ...CONTINENTS];

  return (
    <div className="country-filters">
      <div className="country-filters__tabs" role="group" aria-label="Filtrar países por continente">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`filter-chip ${activeContinent === option ? "is-active" : ""}`}
            onClick={() => onContinentChange(option)}
            aria-pressed={activeContinent === option}
          >
            <span aria-hidden="true">{CONTINENT_ICONS[option]}</span> {option}
          </button>
        ))}
      </div>

      <div className="country-filters__search">
        <label htmlFor="country-search" className="visually-hidden">
          Pesquisar país
        </label>
        <span aria-hidden="true">🔎</span>
        <input
          id="country-search"
          type="search"
          placeholder="Pesquisar país..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <p className="country-filters__count" aria-live="polite">
        {resultCount} {resultCount === 1 ? "país encontrado" : "países encontrados"}
      </p>
    </div>
  );
}
