import { useEffect, useRef, useState } from "react";
import "./fx.css";

/**
 * ScrollReveal — inspirado em reactbits.dev/text-animations/scroll-reveal
 * Revela o conteúdo (fade + slide) quando entra na viewport, usando IntersectionObserver.
 */
export default function ScrollReveal({
  children,
  as: Tag = "div",
  className = "",
  direction = "up",
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal scroll-reveal--${direction} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
