import { useRef } from "react";
import "./fx.css";

/**
 * SpotlightCard — inspirado em reactbits.dev/components/spotlight-card
 * Um brilho suave segue o cursor do mouse sobre o cartão.
 */
export default function SpotlightCard({ children, className = "", spotlightColor = "rgba(47, 158, 224, 0.25)", ...rest }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      className={`spotlight-card ${className}`}
      style={{ "--spot-color": spotlightColor }}
      onMouseMove={handleMouseMove}
      {...rest}
    >
      {children}
    </div>
  );
}
