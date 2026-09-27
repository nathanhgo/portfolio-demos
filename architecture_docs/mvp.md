# MVP — Demos

Status é marcado apenas aqui: `[ ]` não começou · `[~]` em andamento · `[x]` pronto e verificável.
"Pronto" segue `tests.md`.

## Fase 0 — Esqueleto (infra, pode pular TDD)

- [x] Estrutura de pastas (`demos/`, `assets/`, `scripts/`, `site/`)
- [x] Tokens visuais em `assets/base.css`
- [x] Registro `demos.json` + gerador da home (`scripts/build-home.mjs`)
- [x] Verificador (`scripts/check.mjs`)
- [x] Modelo de demo em `demos/_template/` com dados fictícios e marcações `TROCAR`
- [x] Documentos de agente e spec (`AGENTS.md`, `architecture_docs/`)
- [ ] Publicação no Cloudflare Pages (`deploy.md`)

## Fase 1 — Primeiras demos reais

Depende de o Nathan definir quais negócios serão abordados primeiro.

- [x] Demo 1 — Kareca Pneus (oficina, Jardim das Indústrias)
- [x] Demo 2 — Comercial Cobra (material de construção, Jardim Paraíso)
- [x] Demo 3 — Stylus Moda (moda, 4 lojas na Cidade Salvador, com troca de unidade)
- [x] Home atualizada com as demos (`demos.json` + build)
- [x] Verificação com `node scripts/check.mjs`

## Fase 2 — Material de venda

- [ ] Imagem de link (Open Graph) por demo
- [ ] QR Code por demo para acesso no balcão
- [ ] Versão em PDF de uma página por demo (proposta impressa)
- [ ] Roteiro de abordagem em `demos.json` (campo de observação por prospect)

## Fase 3 — Operação

- [ ] Domínio próprio e endereço definitivo das demos
- [ ] Confirmar `noindex` após publicar
- [ ] Modelos por segmento (restaurante, pet/clínica, salão)
- [ ] Rotina de arquivamento: demo de cliente que fechou sai daqui e vira projeto dele
