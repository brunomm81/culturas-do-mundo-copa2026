import ScrollReveal from "./fx/ScrollReveal";

const FIELDS = ["Aluno(a)", "Turma", "Professor(a)", "Escola"];

export default function AboutSection() {
  return (
    <section id="sobre" className="section alt-bg about-section">
      <div className="container about-section__grid">
        <ScrollReveal direction="left">
          <span className="section-kicker">📚 Sobre este projeto</span>
          <h2 className="section-title">Muito mais do que futebol</h2>
          <p>
            Este projeto foi desenvolvido com objetivo educacional para mostrar que a Copa do
            Mundo representa muito mais do que futebol. Por meio das seleções participantes
            podemos conhecer diferentes povos, idiomas, comidas, músicas, tradições e histórias.
          </p>
          <p>
            Todas as informações culturais e geográficas foram baseadas em fontes confiáveis,
            como FIFA, UNESCO, ONU, Banco Mundial e Britannica, com o cuidado de validar a lista
            oficial de participantes antes de descrever cada país.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" className="about-card">
          <h3>Ficha do trabalho</h3>
          <div className="about-card__fields">
            {FIELDS.map((field) => (
              <label key={field} className="about-card__field">
                <span>{field}</span>
                <input type="text" placeholder="_____________________" />
              </label>
            ))}
            <label className="about-card__field">
              <span>Ano</span>
              <input type="text" value="2026" readOnly />
            </label>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
