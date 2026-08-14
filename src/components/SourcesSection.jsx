const SOURCES = [
  { name: "FIFA", url: "https://www.fifa.com/" },
  { name: "UNESCO", url: "https://www.unesco.org/" },
  { name: "ONU", url: "https://www.un.org/" },
  { name: "Banco Mundial", url: "https://www.worldbank.org/" },
  { name: "Britannica", url: "https://www.britannica.com/" },
];

export default function SourcesSection() {
  return (
    <section className="section--tight sources-section">
      <div className="container">
        <h3>📖 Fontes e referências</h3>
        <p>
          As informações culturais, geográficas e esportivas deste site foram elaboradas com base
          em fontes confiáveis, além de sites oficiais de turismo e governo de cada país:
        </p>
        <ul className="sources-list">
          {SOURCES.map((source) => (
            <li key={source.name}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
