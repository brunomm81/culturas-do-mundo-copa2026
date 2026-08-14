import AnimatedContent from "./fx/AnimatedContent";

const DISHES = [
  { flag: "🇧🇷", country: "Brasil", dish: "Feijoada", emoji: "🍲" },
  { flag: "🇯🇵", country: "Japão", dish: "Sushi", emoji: "🍣" },
  { flag: "🇲🇽", country: "México", dish: "Tacos", emoji: "🌮" },
  { flag: "🇦🇷", country: "Argentina", dish: "Empanadas", emoji: "🥟" },
  { flag: "🇪🇸", country: "Espanha", dish: "Paella", emoji: "🥘" },
  { flag: "🇰🇷", country: "Coreia do Sul", dish: "Bibimbap", emoji: "🍚" },
  { flag: "🇲🇦", country: "Marrocos", dish: "Cuscuz marroquino", emoji: "🍛" },
  { flag: "🇧🇪", country: "Bélgica", dish: "Waffle belga", emoji: "🧇" },
];

export default function FoodSection() {
  return (
    <section id="culturas" className="section alt-bg food-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">🍽️ Gastronomia</span>
          <h2 className="section-title">Sabores do mundo</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Cada seleção carrega também um pouco da sua cozinha. Conheça pratos típicos de
            algumas das nações participantes da Copa 2026.
          </p>
        </div>

        <div className="food-grid">
          {DISHES.map((item, i) => (
            <AnimatedContent key={item.dish} delay={i * 0.05}>
              <div className="food-card">
                <div className="food-card__emoji" aria-hidden="true">{item.emoji}</div>
                <div className="food-card__flag" aria-hidden="true">{item.flag}</div>
                <h3>{item.dish}</h3>
                <p>{item.country}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
