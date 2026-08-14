const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#paises", label: "Países" },
  { href: "#culturas", label: "Culturas" },
  { href: "#quiz", label: "Quiz" },
  { href: "#sobre", label: "Sobre" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__brand">🌎 Culturas do Mundo</p>
          <p>Projeto educacional sobre os países participantes da Copa do Mundo 2026.</p>
          <p className="site-footer__note">Desenvolvido para fins educacionais.</p>
        </div>

        <nav aria-label="Links do rodapé" className="site-footer__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
