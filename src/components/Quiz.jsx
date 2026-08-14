import { useMemo, useState } from "react";
import { quizQuestions } from "../data/quiz";

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickQuestions() {
  return shuffle(quizQuestions).slice(0, 10);
}

export default function Quiz() {
  const [questions, setQuestions] = useState(() => pickQuestions());
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const isCorrect = selected !== null && selected === question.answer;
  const isLast = current === questions.length - 1;

  const resultMessage = useMemo(() => {
    if (score >= 8) return "Parabéns! Você é um verdadeiro explorador de culturas! 🌎";
    if (score >= 5) return "Muito bem! Você já conhece bastante sobre o mundo. 🌍";
    return "Bom começo! Continue explorando as culturas dos países da Copa. 🧭";
  }, [score]);

  function handleAnswer(index) {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.answer) setScore((s) => s + 1);
  }

  function handleNext() {
    if (isLast) {
      setFinished(true);
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
  }

  function handleRestart() {
    setQuestions(pickQuestions());
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  }

  return (
    <section id="quiz" className="section quiz-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">🧠 Jogo educativo</span>
          <h2 className="section-title">Teste seus conhecimentos</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Responda 10 perguntas sobre os países da Copa 2026 e descubra que tipo de explorador
            cultural você é.
          </p>
        </div>

        <div className="quiz-card">
          {!finished ? (
            <>
              <div className="quiz-card__progress">
                Pergunta {current + 1} de {questions.length} · Pontuação: {score}
              </div>

              <h3 className="quiz-card__question">{question.question}</h3>

              <div className="quiz-card__options">
                {question.options.map((option, index) => {
                  const isSelected = selected === index;
                  const isTheAnswer = index === question.answer;
                  let stateClass = "";
                  if (selected !== null) {
                    if (isTheAnswer) stateClass = "is-correct";
                    else if (isSelected) stateClass = "is-wrong";
                  }
                  return (
                    <button
                      key={option}
                      type="button"
                      className={`quiz-option ${stateClass}`}
                      onClick={() => handleAnswer(index)}
                      disabled={selected !== null}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {selected !== null && (
                <div className={`quiz-feedback ${isCorrect ? "is-correct" : "is-wrong"}`} role="status">
                  {isCorrect ? "✅ Correto!" : "❌ Tente novamente na próxima!"}
                </div>
              )}

              <button
                type="button"
                className="btn btn--primary quiz-card__next"
                onClick={handleNext}
                disabled={selected === null}
              >
                {isLast ? "Ver resultado" : "Próxima pergunta →"}
              </button>
            </>
          ) : (
            <div className="quiz-result">
              <h3>Pontuação: {score}/{questions.length}</h3>
              <p>{resultMessage}</p>
              <button type="button" className="btn btn--primary" onClick={handleRestart}>
                🔁 Jogar novamente
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
