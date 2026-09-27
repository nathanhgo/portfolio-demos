# Stack — Demos

Atualizado em: 2026-09-27. Este arquivo é a fonte da verdade sobre o **que existe hoje** (Real) e o
que é apenas plano (Aspiracional). Ele é atualizado antes de qualquer outro documento.

## Real (implementado hoje)

| Camada | O que é | Onde |
|---|---|---|
| Páginas | HTML estático, CSS puro, JS mínimo (só o que a página precisa) | `demos/<slug>/index.html` |
| Tokens visuais | Variáveis CSS (cor, tipografia, espaçamento, raio) | `assets/base.css` |
| Registro de demos | `demos.json` — slug, nome, segmento, bairro, status, link | raiz |
| Gerador da home | Script Node sem dependências que monta `index.html` a partir do registro | `scripts/build-home.mjs` |
| Verificador | Script Node que checa registro × pastas, `noindex`, faixa de demonstração e links | `scripts/check.mjs` |
| Modelo | Página de referência com dados fictícios e marcações de troca | `demos/_template/` |
| Hospedagem | **Ainda não publicado.** Alvo: Cloudflare Pages | `architecture_docs/deploy.md` |

## Aspiracional (planejado, não implementado)

- Domínio próprio (`seudominio.com.br`) com as demos em `/demos/` ou `demos.seudominio.com.br`.
- Geração de uma demo nova a partir de um `dados.json` (hoje o modelo é copiado e editado à mão).
- Variações por segmento (restaurante/padaria, pet/clínica, salão/barbearia) como modelos separados.
- Imagem de Open Graph por demo, para o link ficar apresentável no WhatsApp.
- Versão em PDF de uma página por demo (proposta para deixar impressa no balcão).

## Descartado (e por quê)

- **Astro / Next.js**: peso e build desnecessários para uma página de 20 KB que precisa abrir rápido
  no 3G do balcão.
- **Tailwind ou qualquer framework CSS**: o CSS aqui é menor que a configuração do framework.
- **Vercel (plano gratuito)**: os termos restringem o plano gratuito a uso não comercial, e o uso
  aqui é comercial (site de cliente).
- **Render (plano gratuito)**: o serviço dorme e leva 30–60 s para acordar; demo lenta mata a venda.
- **Geradores de "SEO mágico" e bibliotecas de UI**: entopem a página de JS e produzem exatamente o
  visual genérico que `visual.md` proíbe.
