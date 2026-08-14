import "./fx.css";

/**
 * SplitText — inspirado em reactbits.dev/text-animations/split-text
 * Divide o texto em palavras e anima a entrada com um efeito cascata em CSS puro.
 */
export default function SplitText({ text, as: Tag = "h1", className = "", delay = 0 }) {
  const words = text.split(" ");
  return (
    <Tag className={`split-text ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          className="split-text__word"
          style={{ animationDelay: `${delay + i * 0.07}s` }}
          key={`${word}-${i}`}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
