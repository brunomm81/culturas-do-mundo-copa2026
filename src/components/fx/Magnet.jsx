import { useRef } from "react";
import "./fx.css";

/**
 * Magnet — inspirado em reactbits.dev/animations/magnet
 * O elemento se desloca levemente em direção ao cursor. Usado só em botões-chave.
 */
export default function Magnet({ children, className = "", strength = 18, ...rest }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    node.style.transform = `translate(${(x * strength).toFixed(1)}px, ${(y * strength).toFixed(1)}px)`;
  }

  function handleMouseLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "translate(0, 0)";
  }

  return (
    <span
      ref={ref}
      className={`magnet ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </span>
  );
}
