import { useRef } from "react";
import "./fx.css";

/**
 * TiltedCard — inspirado em reactbits.dev/components/tilted-card
 * Inclinação sutil em 3D seguindo a posição do cursor. Usado com moderação.
 */
export default function TiltedCard({ children, className = "", maxTilt = 6, ...rest }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(700px) rotateX(${(-y * maxTilt).toFixed(2)}deg) rotateY(${(x * maxTilt).toFixed(2)}deg) translateY(-4px)`;
  }

  function handleMouseLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      ref={ref}
      className={`tilted-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </div>
  );
}
