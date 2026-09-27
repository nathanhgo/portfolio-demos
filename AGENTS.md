# Demos — páginas de demonstração para comércio de bairro

Demos é o material de venda do serviço de presença digital para micro comércios: cada pasta em
`demos/` é uma landing page de uma página, feita **antes** de existir cliente, para ser mostrada no
celular do dono do negócio. O contexto do produto (preço, escopo, abordagem) vive em
`~/Documentos/CodeInProgress/renda-extra/` — este repositório é a execução.

## Mapa dos documentos

| Quando | Leia |
|---|---|
| Antes de criar ou alterar uma demo | `architecture_docs/mvp.md` + `architecture_docs/visual.md` |
| Antes de propor estrutura, script ou hospedagem | `architecture_docs/stack.md` |
| Antes de escrever texto para o dono do negócio | `architecture_docs/visual.md` (seção de copy) |
| Antes de dizer que algo ficou pronto | `architecture_docs/tests.md` (comandos que definem "pronto") |
| Antes de responder "por que isso é assim?" | `architecture_docs/decisions.md` |
| Antes de publicar | `architecture_docs/deploy.md` |
| Ao terminar qualquer código | `architecture_docs/logs.md` (append) + `mvp.md` (checkbox) |

## Convenções fixas

- **Idioma**: código, nomes de arquivo e commits em inglês. Tudo que uma pessoa lê (páginas das
  demos, mensagens, docs) em **pt-BR**.
- **Zero dependências**: HTML, CSS e JS puros. Nada de `npm install`; os dois scripts Node
  (`scripts/build-home.mjs`, `scripts/check.mjs`) usam só a biblioteca padrão.
- **A home é gerada.** Nunca editar `index.html` na mão: adicione a entrada em `demos.json` e rode
  `node scripts/build-home.mjs`.
- **Toda demo tem `noindex` e uma faixa discreta de "proposta de demonstração".** Nunca disputar
  busca no Google com o site real do cliente (ver `decisions.md` D3).
- **Nada de dado inventado**: sem depoimento fabricado, sem número redondo inventado ("+500
  clientes"), sem foto de banco de imagens genérica. O conteúdo vem do que o negócio publica e do
  que o Nathan fotografia na visita.
- **Sem cor, fonte ou espaçamento hardcoded na página da demo** — os tokens vêm de `assets/base.css`.
- **Nenhum cliente pago mora aqui.** Quando um cliente fecha, o site dele vai para o repositório
  dele/domínio dele; esta pasta guarda apenas demonstrações.

## Estrutura

- `demos/<slug>/` — uma landing page por negócio (o `<slug>` é o mesmo do `demos.json`)
- `demos/_template/` — modelo de referência, com dados fictícios e marcações do que trocar
- `assets/` — tokens e CSS compartilhado
- `scripts/` — gerador da home e verificador
- `site/` — template da home (não é a home publicada)
- `architecture_docs/` — spec do projeto, não é código: nada daqui é importado
