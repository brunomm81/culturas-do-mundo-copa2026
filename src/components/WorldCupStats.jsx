import AnimatedContent from "./fx/AnimatedContent";
import ScrollReveal from "./fx/ScrollReveal";
import CountUp from "./fx/CountUp";

const STATS = [
  { value: 48, label: "Seleções", icon: "⚽" },
  { value: 3, label: "Países-sede", icon: "🌎" },
  { value: 104, label: "Partidas", icon: "📅" },
  { value: 16, label: "Cidades-sede", icon: "🏟️" },
];

const HOSTS = [
  { flag: "🇨🇦", name: "Canadá" },
  { flag: "🇺🇸", name: "Estados Unidos" },
  { flag: "🇲🇽", name: "México" },
];

export default function WorldCupStats() {
  return (
    <section id="copa2026" className="section stats-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">⚽ Sobre a Copa</span>
          <h2 className="section-title">Copa do Mundo FIFA 2026</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Pela primeira vez na história, a Copa do Mundo é disputada por 48 seleções, em três
            países da América do Norte: Canadá, Estados Unidos e México. São 104 partidas em 16
            cidades, celebrando o futebol e a diversidade cultural de todos os continentes.
          </p>
        </div>

        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <AnimatedContent key={stat.label} delay={i * 0.08}>
              <div className="stat-card">
                <span className="stat-card__icon" aria-hidden="true">{stat.icon}</span>
                <div className="stat-card__value">
                  <CountUp end={stat.value} />
                </div>
                <div className="stat-card__label">{stat.label}</div>
              </div>
            </AnimatedContent>
          ))}
        </div>

        <ScrollReveal className="north-america-map">
          <div className="north-america-map__visual" aria-hidden="true">
            <span className="na-pin na-pin--canada">🇨🇦</span>
            <span className="na-pin na-pin--usa">🇺🇸</span>
            <span className="na-pin na-pin--mexico">🇲🇽</span>
            <span className="na-map-label">América do Norte</span>
          </div>
          <div className="north-america-map__info">
            <h3>Sede compartilhada, festa única</h3>
            <p>
              É a primeira Copa do Mundo organizada por três países ao mesmo tempo. A divisão dos
              jogos entre Canadá, Estados Unidos e México simboliza a união entre culturas
              vizinhas, mas muito diferentes entre si.
            </p>
            <ul className="north-america-map__list">
              {HOSTS.map((host) => (
                <li key={host.name}>
                  <span aria-hidden="true">{host.flag}</span> {host.name}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
