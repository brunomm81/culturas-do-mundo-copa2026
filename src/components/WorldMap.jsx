import { useState } from "react";
import { CONTINENTS, countries } from "../data/countries";
import ScrollReveal from "./fx/ScrollReveal";

const CONTINENT_ICONS = {
  "América do Sul": "🌎",
  "América do Norte/Central": "🌎",
  Europa: "🌍",
  África: "🌍",
  Ásia: "🌏",
  Oceania: "🌏",
};

export default function WorldMap({ onOpenCountry }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="continentes" className="section world-map-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">🌍 Mapa-múndi</span>
          <h2 className="section-title">Um mundo de culturas</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Passe o mouse sobre uma bandeira para ver informações rápidas, ou clique para
            conhecer a cultura completa daquele país. Este é um mapa simplificado, organizado por
            continente.
          </p>
        </div>

        <div className="world-map">
          <div className="world-map__zones">
            {CONTINENTS.map((continent, ci) => {
              const list = countries.filter((c) => c.continent === continent);
              return (
                <ScrollReveal as="div" key={continent} className="map-zone" delay={ci * 0.05}>
                  <h3 className="map-zone__title">
                    <span aria-hidden="true">{CONTINENT_ICONS[continent]}</span> {continent}
                    <span className="map-zone__count">{list.length}</span>
                  </h3>
                  <div className="map-zone__flags">
                    {list.map((country) => (
                      <button
                        key={country.id}
                        type="button"
                        className="map-flag"
                        onMouseEnter={() => setHovered(country)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(country)}
                        onBlur={() => setHovered(null)}
                        onClick={() => onOpenCountry(country)}
                        aria-label={`${country.country}, ${country.continent}. Ver cultura completa.`}
                      >
                        {country.flag}
                      </button>
                    ))}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="world-map__tooltip" role="status" aria-live="polite">
            {hovered ? (
              <>
                <span className="world-map__tooltip-flag" aria-hidden="true">{hovered.flag}</span>
                <strong>{hovered.country}</strong>
                <span>{hovered.continent}</span>
                <span className="world-map__tooltip-hint">Clique para ver a cultura completa →</span>
              </>
            ) : (
              <>
                <span className="world-map__tooltip-flag" aria-hidden="true">🌐</span>
                <strong>Explore o mapa</strong>
                <span>Passe o mouse sobre uma bandeira</span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
