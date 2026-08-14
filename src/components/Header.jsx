import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#inicio", label: "Início", icon: "🌎" },
  { href: "#copa2026", label: "Copa 2026", icon: "⚽" },
  { href: "#paises", label: "Países", icon: "🏳️" },
  { href: "#continentes", label: "Continentes", icon: "🌍" },
  { href: "#culturas", label: "Culturas", icon: "🎭" },
  { href: "#curiosidades", label: "Curiosidades", icon: "📚" },
  { href: "#sobre", label: "Sobre o Projeto", icon: "ℹ️" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a href="#inicio" className="site-header__brand" onClick={handleLinkClick}>
          <span aria-hidden="true">🌎</span>
          <span>Culturas do Mundo</span>
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              <span aria-hidden="true">{link.icon}</span> {link.label}
            </a>
          ))}
        </nav>

        <button
          className="site-header__burger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`site-header__mobile ${open ? "is-open" : ""}`}
        aria-label="Navegação móvel"
        hidden={!open}
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>
            <span aria-hidden="true">{link.icon}</span> {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
