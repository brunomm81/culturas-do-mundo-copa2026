import "./fx.css";

/**
 * ShinyText — inspirado em reactbits.dev/text-animations/shiny-text
 * Usado apenas em pequenos destaques (badges, palavras-chave).
 */
export default function ShinyText({ text, className = "" }) {
  return <span className={`shiny-text ${className}`}>{text}</span>;
}
