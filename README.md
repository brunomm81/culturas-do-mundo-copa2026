# 🌎 Culturas do Mundo — Copa do Mundo FIFA 2026

Projeto educacional que apresenta, de forma visual e acessível, aspectos culturais dos 48
países participantes da Copa do Mundo FIFA 2026 (Canadá, Estados Unidos e México).

## Tecnologias

- React + Vite
- HTML5, CSS3 (CSS tradicional, sem frameworks utilitários)
- JavaScript
- Componentes/animações inspirados em [React Bits](https://reactbits.dev/) (implementados em CSS/JS puro para manter o projeto leve)

## Como rodar o projeto

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/       Componentes de UI (Header, Hero, seções, cards, modal, quiz...)
  components/fx/     Efeitos inspirados no React Bits (SplitText, BlurText, CountUp...)
  data/
    countries.js     Dados dos 48 países (validados com base em FIFA/UNESCO/ONU/Britannica)
    quiz.js           Banco de perguntas do quiz
  styles/
    global.css        Tokens de cor/tipografia e utilitários
    components.css    Estilos de todas as seções e componentes
```

## Fontes e referências

FIFA (fifa.com), UNESCO (unesco.org), ONU (un.org), Banco Mundial (worldbank.org),
Britannica (britannica.com) e sites oficiais de turismo/governo de cada país.
