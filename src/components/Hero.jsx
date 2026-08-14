import SplitText from "./fx/SplitText";
import BlurText from "./fx/BlurText";
import Magnet from "./fx/Magnet";

const FLOATING_FLAGS = ["🇧🇷", "🇯🇵", "🇲🇽", "🇫🇷", "🇳🇬", "🇰🇷", "🇦🇷", "🇵🇹", "🇲🇦", "🇺🇸"];

export default function Hero() {
  function handleExplore(e) {
    e.preventDefault();
    document.getElementById("paises")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero__aurora" aria-hidden="true" />
      <div className="hero__flags" aria-hidden="true">
        {FLOATING_FLAGS.map((flag, i) => (
          <span key={i} className={`hero__flag hero__flag--${i}`}>
            {flag}
          </span>
        ))}
      </div>

      <div className="container hero__content">
        <div className="hero__globe" aria-hidden="true">
          🌎
          <span className="hero__ball">⚽</span>
        </div>

        <p className="hero__eyebrow">
          <span aria-hidden="true">⚽</span> Copa do Mundo FIFA 2026 · Estados Unidos, Canadá e México
        </p>

        <SplitText text="CULTURAS DO MUNDO" as="h1" className="hero__title" />

        <BlurText
          text="Uma viagem pelos países da Copa do Mundo 2026"
          as="p"
          className="hero__subtitle"
          delay={0.5}
        />

        <p className="hero__text">
          A Copa do Mundo vai muito além do futebol. Cada seleção representa um país com
          histórias, comidas, músicas, tradições e costumes únicos. Conheça um pouco da
          cultura de cada nação que participou do maior evento de futebol do planeta.
        </p>

        <Magnet>
          <a href="#paises" className="btn btn--primary" onClick={handleExplore}>
            🔎 Explorar países
          </a>
        </Magnet>
      </div>
    </section>
  );
}
