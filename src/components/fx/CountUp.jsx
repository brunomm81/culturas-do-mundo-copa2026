import { useEffect, useRef, useState } from "react";
import "./fx.css";

/**
 * CountUp — inspirado em reactbits.dev/text-animations/count-up
 * Anima um número de 0 até o valor final quando o elemento entra na tela.
 */
export default function CountUp({ end, duration = 1400, suffix = "", className = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          if (prefersReduced) {
            setValue(end);
            return;
          }
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={`count-up ${className}`}>
      {value}
      {suffix}
    </span>
  );
}
