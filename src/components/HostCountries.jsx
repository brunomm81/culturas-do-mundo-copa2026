import AnimatedContent from "./fx/AnimatedContent";
import TiltedCard from "./fx/TiltedCard";

const HOSTS = [
  {
    flag: "🇺🇸",
    name: "Estados Unidos",
    culture:
      "País multicultural formado pela imigração de todo o mundo, com forte influência na música, no cinema e na tecnologia globais.",
    languages: "Inglês (língua predominante, sem idioma oficial federal)",
    foods: "Hambúrguer, barbecue e a diversidade da culinária Tex-Mex",
    traditions: "Dia da Independência, Ação de Graças e grandes eventos esportivos universitários",
    football: "Sediará a maior parte dos jogos, incluindo a final, e vive um crescimento acelerado do futebol com a MLS.",
  },
  {
    flag: "🇨🇦",
    name: "Canadá",
    culture:
      "Nação bilíngue e multicultural, reconhecida pelo respeito à diversidade e pela valorização das culturas indígenas locais.",
    languages: "Inglês e Francês (línguas oficiais)",
    foods: "Poutine, xarope de bordo e salmão selvagem",
    traditions: "Dia do Canadá, Calgary Stampede e forte tradição em esportes de inverno",
    football: "Sediará jogos em Toronto e Vancouver, em mais uma edição histórica para o futebol canadense.",
  },
  {
    flag: "🇲🇽",
    name: "México",
    culture:
      "Cultura vibrante que une heranças indígenas pré-colombianas (maia e asteca) com a herança espanhola da colonização.",
    languages: "Espanhol (majoritário) e dezenas de línguas indígenas",
    foods: "Tacos, mole, tamales e guacamole",
    traditions: "Dia dos Mortos, Guelaguetza e a paixão nacional pelo futebol",
    football: "Será o primeiro país a sediar três Copas do Mundo (1970, 1986 e 2026), com o histórico Estádio Azteca.",
  },
];

export default function HostCountries() {
  return (
    <section className="section alt-bg host-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">🌎 Sedes</span>
          <h2 className="section-title">Conheça os países-sede</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Três nações, três culturas, uma só festa. Conheça um resumo de cada país que vai
            receber a Copa do Mundo de 2026.
          </p>
        </div>

        <div className="host-grid">
          {HOSTS.map((host, i) => (
            <AnimatedContent key={host.name} delay={i * 0.1}>
              <TiltedCard className="host-card" maxTilt={4}>
                <div className="host-card__flag" aria-hidden="true">{host.flag}</div>
                <h3>{host.name}</h3>
                <dl className="host-card__list">
                  <div>
                    <dt>🎭 Cultura</dt>
                    <dd>{host.culture}</dd>
                  </div>
                  <div>
                    <dt>🗣️ Idiomas</dt>
                    <dd>{host.languages}</dd>
                  </div>
                  <div>
                    <dt>🍽️ Comidas</dt>
                    <dd>{host.foods}</dd>
                  </div>
                  <div>
                    <dt>🎉 Tradições</dt>
                    <dd>{host.traditions}</dd>
                  </div>
                  <div>
                    <dt>⚽ Futebol</dt>
                    <dd>{host.football}</dd>
                  </div>
                </dl>
              </TiltedCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
