import { useEffect, useState } from "react";

export default function InstallPwaPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [visible, setVisible] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    function handleBeforeInstall(e) {
      e.preventDefault();
      setDeferredPrompt(e);
      setVisible(true);
    }
    function handleInstalled() {
      setInstalled(true);
      setVisible(false);
    }
    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    window.addEventListener("appinstalled", handleInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  if (!visible || installed) return null;

  async function handleInstall() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setVisible(false);
  }

  return (
    <div className="install-pwa" role="status">
      <span className="install-pwa__icon" aria-hidden="true">🌎</span>
      <div className="install-pwa__text">
        <strong>Instalar Culturas do Mundo</strong>
        <span>Acesse offline direto da tela inicial do celular</span>
      </div>
      <button type="button" className="btn btn--primary btn--small" onClick={handleInstall}>
        Instalar
      </button>
      <button
        type="button"
        className="install-pwa__dismiss"
        onClick={() => setVisible(false)}
        aria-label="Fechar aviso de instalação"
      >
        ✕
      </button>
    </div>
  );
}
