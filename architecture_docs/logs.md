# Logs — Demos

Registro append-only do que foi feito, para a próxima sessão de IA saber onde parou. Só o que o git
não diz: decisão, beco sem saída, armadilha.

## 2026-09-27 — Esqueleto do repositório

- Criado o esqueleto completo: `demos.json`, `scripts/build-home.mjs`, `scripts/check.mjs`,
  `assets/base.css`, `site/home.template.html`, `demos/_template/`.
- Escrito o spec (`architecture_docs/`): idea, stack, mvp, questions, tests, visual, decisions,
  deploy, logs.
- Decidido não usar framework (D1) e gerar a home por script (D2).
- Armadilha registrada: `index.html` é **gerado** — a próxima sessão deve editar `demos.json` e
  rodar o build, nunca o HTML.
- Nenhuma demo real criada ainda: depende de o Nathan escolher os negócios da primeira leva.

### Correção — tabela estourando no mobile

- Sintoma: no print de 390 px, as células da tabela e os títulos apareciam cortados à direita.
- Diagnóstico: medindo `scrollWidth` dentro de um iframe de 375 px, a página cabia (375 = 375) e o
  culpado era o **print headless**, que fotografa num layout mais largo e recorta. A tabela, porém,
  tinha um problema real de layout automático (`table-layout` ausente): o texto quebrava onde dava,
  empurrando a coluna da direita.
- Correção: `table-layout: fixed` + `th { width: 40% }` + `overflow-wrap: anywhere` em
  `table.simples` (`assets/base.css`).
- Lição: para julgar layout no celular, medir `scrollWidth` vs `innerWidth`, não confiar no print.
