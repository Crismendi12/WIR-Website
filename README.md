# WIR Innovation - AI Platform

Website oficial de WIR Innovation — infraestrutura de IA para o mercado segurador.

## Arquitetura

Site estático multi-página. HTML + CSS + JSX compilado no navegador via Babel standalone.

- `index.html` — entry point, carrega todos os scripts
- `src/*.jsx` — componentes React (home, solutions, about, blog, contact)
- `style.css`, `home.css`, `solutions.css`, `about.css` — estilos

Routing baseado em hash (`#home`, `#solutions`, etc.). Não requer build — serve como arquivos estáticos.

## Rodar localmente

```bash
python3 -m http.server 5173
# ou
npx serve -p 5173
```

Abre http://localhost:5173.

## Deploy

Deployed no Vercel — qualquer push a `main` redeploya automaticamente.

## Branches

- `main` — design atual (Claude Design v2, Abril 2026)
- `backup/react-vite-version` — versão anterior em React + Vite + Tailwind (preservada para referência)
