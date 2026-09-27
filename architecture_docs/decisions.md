# Decisões — Demos

Formato curto: decisão, data, motivo, e o que ela descarta.

## D1 — Página estática, sem framework (2026-09-27)

Cada demo é HTML + CSS puro, com JS apenas quando a página realmente precisa. A demo é mostrada no
celular do dono, muitas vezes no 3G, dentro do balcão: peso e tempo de abertura valem mais que
qualquer produtividade de framework.

**Descarta**: Astro, Next.js, Vite, Tailwind e bibliotecas de UI enquanto a página for de uma seção.

## D2 — A home é gerada a partir de `demos.json` (2026-09-27)

Lista mantida à mão desatualiza na terceira demo. O registro é a única fonte: adicionar uma linha e
rodar `node scripts/build-home.mjs`.

**Descarta**: editar `index.html` diretamente (é arquivo gerado) e CMS externo.

## D3 — Toda demo tem `noindex` e faixa de demonstração (2026-09-27)

A demo não pode competir no Google com o site real do cliente nem confundir quem chega pelo link.
A faixa também é honesta: deixa claro que é proposta, não site oficial.

**Descarta**: publicar demo sem aviso, "fingir" que é o site oficial, e indexar demos.

## D4 — Hospedagem em Cloudflare Pages (2026-09-27)

O plano gratuito permite uso comercial, tem banda ilimitada e 100 domínios por projeto.

**Descarta**: Vercel no plano gratuito (uso comercial proibido nos termos) e Render gratuito
(serviço dorme, 30–60 s para acordar).

## D5 — Modelo único com marcações de troca, em vez de gerador de página (2026-09-27)

Um modelo com comentários `TROCAR:` é mais rápido de auditar do que um gerador: o resultado é HTML
final, sem camada intermediária para dar errado no dia da venda.

**Descarta**: motor de templates, YAML de configuração e build por demo.
