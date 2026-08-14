import AnimatedContent from "./fx/AnimatedContent";
import ShinyText from "./fx/ShinyText";

const RHYTHMS = [
  { flag: "🇧🇷", country: "Brasil", genre: "Samba" },
  { flag: "🇦🇷", country: "Argentina", genre: "Tango" },
  { flag: "🇲🇽", country: "México", genre: "Mariachi" },
  { flag: "🇪🇸", country: "Espanha", genre: "Flamenco" },
  { flag: "🇰🇷", country: "Coreia do Sul", genre: "K-Pop" },
  { flag: "🇵🇹", country: "Portugal", genre: "Fado" },
];

export default function MusicSection() {
  return (
    <section className="section music-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">🎵 Música e dança</span>
          <h2 className="section-title">
            <ShinyText text="Ritmos do Mundo" />
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A música conta histórias tão importantes quanto o futebol. Veja alguns ritmos e
            danças tradicionais de países participantes da Copa 2026.
          </p>
        </div>

        <div className="music-grid">
          {RHYTHMS.map((item, i) => (
            <AnimatedContent key={item.genre} delay={i * 0.06}>
              <div className="music-card">
                <span className="music-card__flag" aria-hidden="true">{item.flag}</span>
                <h3>{item.genre}</h3>
                <p>{item.country}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
