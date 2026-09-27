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
## 2026-09-27 — Primeiras três demos (Kareca, Cobra, Stylus)

- Escolhidos os três primeiros prospects pelo Nathan: Kareca Pneus (Jardim das Indústrias),
  Comercial Cobra (Jardim Paraíso) e Stylus Moda (Cidade Salvador, 4 lojas).
- Dados levantados na fonte: telefone novo do Kareca confirmado em publicação da própria página
  ("ATENÇÃO: NOVO TELEFONE 3951-3729", 17/12/2022) — o número 3953-4316 da base antiga está errado e
  não foi usado em lugar nenhum.
- Imagens: as do Facebook do Kareca não baixam por curl (URL assinada + cookie). Solução: `fetch`
  falha por CORS e mixed content; o caminho que funciona é CDP
  (`Network.loadNetworkResource` com `frameId` + `IO.read`), que traz os bytes usando a sessão do
  navegador. As fotos do site da Stylus vêm por curl, trocando o parâmetro `w=` da CDN.
- **Erro pego na revisão visual**: a segunda imagem do Kareca era o cartão antigo da oficina com o
  telefone velho impresso. Descartada; imagem publicada não pode contradizer o dado da página.
- Cobra não tem nenhuma foto pública: a página foi resolvida só com tipografia e informação, sem
  inventar identidade visual (tokens neutros, conforme `visual.md 2.2`).
- Stylus: site único com seletor de unidade (o site atual só lista endereços). O conteúdo das quatro
  lojas está todo no HTML; o JS só esconde as outras, então sem JavaScript a página continua completa.

### Armadilhas

- Barra de seleção com `flex-wrap` no celular virou uma faixa fixa de 206 px comendo a tela. Voltou a
  ser linha única rolável no mobile (`overflow-x: auto`, scrollbar escondida) e quebra linha só a
  partir de 40 rem.
- Cabeçalho da Stylus quebrava "O que tem" no meio em 390 px: `white-space: nowrap` no item e
  `flex-wrap` no bloco resolveram.

### Pendências que dependem do dono (marcadas com `TROCAR:` no HTML)

- Kareca: número com WhatsApp, formas de pagamento, preços além da promoção de R$ 59.
- Cobra: horário, linhas de produto reais, se faz entrega, formas de pagamento.
- Stylus: horário por loja, se cada loja tem WhatsApp próprio, autorização das fotos e preços.