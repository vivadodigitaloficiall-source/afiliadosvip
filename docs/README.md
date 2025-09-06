# Microsite de Afiliados — Código das Vendas

Este microsite foi criado para afiliados, utilizando HTML, CSS e JavaScript puros, sem dependências de build. Ele herda a identidade visual do site base em `docs/`.

Estrutura

- Páginas: Home, Como funciona, Afiliar pela Kiwify, Materiais (acesso pelo grupo do WhatsApp), FAQ, Suporte, Termos e Privacidade.
- Estilos: herda tokens/componentes do site principal e adiciona ajustes locais.
- Scripts: utilitários e storage com TTL. Sem painel/mock de tracking. Gerador removido (links na Kiwify).

Publicação no GitHub Pages

- Branch: `main`.
- Settings > Pages: Source = Deploy from a branch; Branch = `main` (root).
- Acesse: `https://<seu-usuario>.github.io/<seu-repo>/affiliates/`.

Onde substituir URLs reais


Editar banners e copys

- Banners: `affiliates/assets/banners/` (SVGs mock).
- Copys/CTAs e Materiais: estão disponíveis no grupo oficial do WhatsApp (link nas páginas). A página "Materiais" explica o acesso.

Premiações por meta

- Coloque a arte final em `affiliates/assets/afiliados.png`.
- Há um fallback `affiliates/assets/afiliados.svg` (placeholder) já referenciado em `index.html` e `how-it-works.html`.

Compliance

