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
