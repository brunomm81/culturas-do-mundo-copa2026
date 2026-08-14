import "./fx.css";

/**
 * BlurText — inspirado em reactbits.dev/text-animations/blur-text
 * Texto entra com leve desfoque que se dissipa suavemente.
 */
export default function BlurText({ text, as: Tag = "p", className = "", delay = 0 }) {
  return (
    <Tag className={`blur-text ${className}`} style={{ animationDelay: `${delay}s` }}>
      {text}
    </Tag>
  );
}
