# 90 — Commits (carregado sob demanda)

Formato: `tipo(escopo): descrição no imperativo em inglês`

Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`.

- Um commit por mudança lógica. Nunca misturar demo nova com alteração de infraestrutura.
- Escopo = slug da demo quando a mudança for dela (`feat(padaria-nebraska): ...`), ou `home`,
  `docs`, `scripts`.
- Exemplos válidos:
  - `feat(home): list demos from demos.json`
  - `feat(pet-poli): add demo page for pet shop`
  - `docs(visual): record anti-pattern list`
  - `chore(deploy): document cloudflare pages setup`
- Nunca commitar dado de cliente pagante, preço negociado ou segredo. Lembre que este repositório é
  público: a demo é pública por natureza.
