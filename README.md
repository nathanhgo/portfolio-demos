# Demos

Páginas de demonstração para comércios de bairro — material de venda do serviço de presença digital.

Cada pasta em `demos/` é uma landing page de uma página, feita antes de existir cliente, para ser
mostrada no celular do dono do negócio. A home (`index.html`) lista todas as demos.

## Como rodar

Não tem dependências. Abra `index.html` no navegador, ou sirva localmente:

```bash
python3 -m http.server 8080
```

## Como adicionar uma demo

1. Copie `demos/_template/` para `demos/<slug-do-negocio>/` (ex.: `demos/padaria-nebraska`).
2. Substitua tudo o que está marcado com `TROCAR:` — nome, textos, preços, horário, endereço,
   número de WhatsApp, fotos.
3. Adicione a entrada em `demos.json`.
4. Rode o build e a verificação:

```bash
node scripts/build-home.mjs
node scripts/check.mjs
```

5. Abra no celular (emulador do navegador serve) e confira o botão de WhatsApp.

## Regras que não se negociam

- Toda demo tem `noindex` e a faixa "proposta de demonstração" — nunca competir no Google com o site
  real do cliente.
- Nada de dado inventado: sem depoimento fabricado, sem número redondo inventado, sem foto de banco
  de imagens.
- `index.html` é arquivo **gerado**. Não edite à mão: altere `demos.json` e rode o build.

O resto das convenções está em `AGENTS.md`; as decisões visuais, em `architecture_docs/visual.md`.
