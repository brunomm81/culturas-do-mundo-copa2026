import SpotlightCard from "./fx/SpotlightCard";

export default function CountryCard({ country, onOpen }) {
  return (
    <SpotlightCard className="country-card">
      <div className="country-card__flag" aria-hidden="true">
        {country.flag}
      </div>
      <h3 className="country-card__name">{country.country}</h3>
      <span className="pill badge-continent">{country.continent}</span>

      <dl className="country-card__meta">
        <div>
          <dt>Capital</dt>
          <dd>{country.capital}</dd>
        </div>
        <div>
          <dt>Idioma</dt>
          <dd>{country.language}</dd>
        </div>
        <div>
          <dt>População</dt>
          <dd>{country.population}</dd>
        </div>
      </dl>

      <p className="country-card__curiosity">
        <strong>💡 Curiosidade:</strong> {country.curiosity}
      </p>

      <button type="button" className="btn btn--outline btn--small country-card__cta" onClick={() => onOpen(country)}>
        Conhecer cultura →
      </button>
    </SpotlightCard>
  );
}
