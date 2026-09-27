# Testes — Demos

## O que significa "pronto" aqui

Uma demo está pronta quando os três comandos abaixo passam e a página foi vista no celular:

```bash
node scripts/check.mjs            # registro × arquivos, noindex, faixa, links
node scripts/build-home.mjs       # gera index.html sem erro
```

Mais a checagem manual obrigatória (emulador de celular do navegador):

- [ ] a página abre em menos de 3 s em rede lenta simulada
- [ ] o botão de WhatsApp abre o app com a mensagem escrita
- [ ] telefone, endereço e horário estão corretos
- [ ] nenhum erro no console do navegador
- [ ] textos sem placeholder esquecido (`TROCAR`, `EXEMPLO`, `lorem`)

## Status de cada demo

`modelo` (referência interna) · `pendente` (demo feita, com pontos marcados `TROCAR:` esperando o dono)
· `pronta` (nada pendente — o verificador reprova se ainda houver `TROCAR:`). O status vive em
`demos.json` e aparece na home.

## Estratégia

- **Verificação estrutural automatizada** (`scripts/check.mjs`): garante que todo item de `demos.json`
  tem pasta e `index.html`, que nenhuma demo ficou sem `noindex`, que a faixa de demonstração existe e
  que nenhum link interno aponta para arquivo inexistente. Esse é o teste que pega o erro mais comum
  (adicionar a demo no registro e esquecer a pasta, ou o contrário).
- **Sem framework de teste**: o projeto não tem dependências e não justifica um runner. Se crescer a
  ponto de ter lógica em JS próprio, aí sim entra `node --test`.
- **Overflow horizontal (o erro que passou na primeira revisão)**: print de tela headless **não**
  prova que a página cabe no celular — o Chromium fotografa o layout numa largura maior e recorta,
  o que parece texto cortado sem haver rolagem. A medição que vale é `scrollWidth` contra `innerWidth`
  em viewport de 390/375/320 px, dentro de um iframe local (`demos/probe.html` era o medidor, já
  removido; recriar quando precisar). Resultado atual: `overflow=nao` nas três larguras, nas duas páginas.
- **O que fica fora da automação**: aparência e texto. Essas são revisadas com o checklist acima,
  porque é justamente o que o dono do negócio vai olhar.

## Riscos conhecidos

- `check.mjs` não consegue validar contraste de cor nem toque mínimo — isso é revisão visual.
- Nada aqui verifica HTTPS, domínio ou cabeçalhos: isso é do `deploy.md`.


## Armadilha: `.section` e `.hero` apagam o respiro lateral do `.wrap`
`.wrap` define `padding: 0 clamp(...)`. Como `.hero` e `.section` são declarações de `padding`
(todas as laterais) e vêm depois no CSS, elas zeravam o padding horizontal das seções que
usam `class="section wrap"` — no celular o texto ficava colado na borda do aparelho.
Regra: nesses blocos usar sempre `padding-block`, nunca `padding`, para não competir com o `.wrap`.
Verificado em 390/375/320 px: `scrollWidth - clientWidth = 0` e `padding-left` de 20,28 px.

## Como medir de verdade o que o cliente vê no celular
Emular aparelho pelo Chrome DevTools Protocol numa aba real (não só estreitar a janela):
`Emulation.setDeviceMetricsOverride` com `width=390, height=844, deviceScaleFactor=2, mobile=True`,
`Network.setCacheDisabled` (sem isso o CSS antigo continua no ar e o teste mente) e depois ler
`documentElement.scrollWidth - clientWidth` e `getComputedStyle(el).paddingLeft`.
Estreitar a janela do headless com `--window-size` **não** emula celular: o layout pode sair
maior que o print e dar a impressão de texto cortado.
