import { useEffect, useRef } from "react";

export default function CountryModal({ country, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!country) return;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [country, onClose]);

  if (!country) return null;

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className="modal-backdrop" onMouseDown={handleBackdropClick}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-country-title"
        ref={dialogRef}
      >
        <button
          type="button"
          className="modal-panel__close"
          onClick={onClose}
          aria-label="Fechar"
          ref={closeButtonRef}
        >
          ✕
        </button>

        <header className="modal-panel__header">
          <span className="modal-panel__flag" aria-hidden="true">{country.flag}</span>
          <div>
            <h2 id="modal-country-title">{country.country}</h2>
            <span className="pill badge-continent">{country.continent}</span>
          </div>
        </header>

        <section className="modal-section">
          <h3>📍 Sobre o país</h3>
          <p>{country.description}</p>
        </section>

        <section className="modal-section">
          <h3>🎭 Cultura</h3>
          <p>{country.culture}</p>
        </section>

        <section className="modal-section">
          <h3>🍽️ Gastronomia</h3>
          <ul className="chip-list">
            {country.foods.map((food) => (
              <li key={food}>{food}</li>
            ))}
          </ul>
        </section>

        <div className="modal-grid-2">
          <section className="modal-section">
            <h3>🎵 Música</h3>
            <ul className="chip-list">
              {country.music.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h3>💃 Danças tradicionais</h3>
            <ul className="chip-list">
              {country.dances.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="modal-section">
          <h3>🎉 Festas e tradições</h3>
          <ul className="chip-list">
            {country.festivals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="modal-section">
          <h3>🏛️ Pontos turísticos</h3>
          <ul className="modal-list">
            {country.attractions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="modal-section modal-section--football">
          <h3>⚽ Futebol</h3>
          <ul className="modal-list">
            <li><strong>Participações:</strong> {country.football.participations}</li>
            <li><strong>Títulos:</strong> {country.football.titles}</li>
            <li><strong>Craques:</strong> {country.football.players}</li>
            <li><strong>Curiosidade:</strong> {country.football.curiosity}</li>
          </ul>
        </section>

        <section className="modal-section">
          <h3>💡 Você sabia?</h3>
          <ul className="modal-list modal-list--curiosities">
            {country.curiosities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="modal-section">
          <h3>🗣️ Como se diz?</h3>
          <div className="expressions-grid">
            {country.expressions.map((exp) => (
              <div className="expression-card" key={exp.pt}>
                <span className="expression-card__pt">{exp.pt}</span>
                <span className="expression-card__local">{exp.local}</span>
                <span className="expression-card__pronunciation">/{exp.pronunciation}/</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
