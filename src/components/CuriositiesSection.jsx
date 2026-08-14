import AnimatedContent from "./fx/AnimatedContent";

const FACTS = [
  { icon: "🗣️", text: "Existem mais de 7 mil idiomas falados no mundo, segundo estimativas da UNESCO." },
  { icon: "🌐", text: "Alguns países possuem mais de um idioma oficial, como a Suíça, com quatro línguas oficiais." },
  { icon: "🍽️", text: "Comidas semelhantes podem possuir nomes e preparos diferentes dependendo da cultura, como as empanadas e os pastéis." },
  { icon: "⚽", text: "A Copa do Mundo de 2026 é a primeira da história disputada por 48 seleções." },
  { icon: "🏳️", text: "Quatro seleções vão disputar sua primeira Copa do Mundo em 2026: Cabo Verde, Curaçao, Jordânia e Uzbequistão." },
  { icon: "🌎", text: "O Brasil é o único país que participou de todas as edições da Copa do Mundo até hoje." },
  { icon: "🎭", text: "Muitas festas populares, como o Carnaval e o Dia dos Mortos, têm origens ligadas a tradições religiosas antigas." },
  { icon: "🏆", text: "Apenas oito seleções diferentes já foram campeãs mundiais de futebol na história." },
  { icon: "🗺️", text: "A Rússia é o único país do mundo que faz fronteira com 14 outras nações." },
  { icon: "🎶", text: "Vários ritmos musicais, como o samba e o tango, nasceram da mistura de culturas diferentes em um mesmo território." },
  { icon: "🕌", text: "O calendário islâmico é lunar, por isso datas como o Ramadã mudam de estação a cada ano." },
  { icon: "🌍", text: "A África tem mais de 2 mil línguas diferentes faladas em seu território, segundo estimativas linguísticas." },
];

export default function CuriositiesSection() {
  return (
    <section id="curiosidades" className="section alt-bg curiosities-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">🤔 Curiosidades</span>
          <h2 className="section-title">Você sabia?</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Pequenos fatos que mostram como o mundo é diverso — e como o futebol ajuda a
            conhecê-lo melhor.
          </p>
        </div>

        <div className="curiosities-grid">
          {FACTS.map((fact, i) => (
            <AnimatedContent key={fact.text} delay={(i % 4) * 0.06}>
              <div className="curiosity-card">
                <span className="curiosity-card__icon" aria-hidden="true">{fact.icon}</span>
                <p>{fact.text}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
