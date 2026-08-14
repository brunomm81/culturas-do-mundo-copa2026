import { useMemo, useState } from "react";
import { countries } from "../data/countries";
import CountryFilters from "./CountryFilters";
import CountryCard from "./CountryCard";
import AnimatedContent from "./fx/AnimatedContent";

export default function CountriesSection({ onOpenCountry }) {
  const [activeContinent, setActiveContinent] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return countries.filter((c) => {
      const matchesContinent = activeContinent === "Todos" || c.continent === activeContinent;
      const matchesSearch = !term || c.country.toLowerCase().includes(term);
      return matchesContinent && matchesSearch;
    });
  }, [activeContinent, search]);

  return (
    <section id="paises" className="section countries-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">🏳️ Seleções</span>
          <h2 className="section-title">Países da Copa do Mundo 2026</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Explore as 48 seleções classificadas e descubra a cultura por trás de cada bandeira.
          </p>
        </div>

        <CountryFilters
          activeContinent={activeContinent}
          onContinentChange={setActiveContinent}
          search={search}
          onSearchChange={setSearch}
          resultCount={filtered.length}
        />

        {filtered.length === 0 ? (
          <p className="countries-empty">Nenhum país encontrado com esse filtro. Tente outra busca! 🔎</p>
        ) : (
          <div className="country-grid">
            {filtered.map((country, i) => (
              <AnimatedContent key={country.id} delay={Math.min(i % 8, 6) * 0.05}>
                <CountryCard country={country} onOpen={onOpenCountry} />
              </AnimatedContent>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
