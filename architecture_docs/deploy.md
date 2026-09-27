# Deploy — Demos

Alvo: **Cloudflare Pages** (plano gratuito permite uso comercial, banda ilimitada, 100 domínios por
projeto).

## Pré-requisito

Repositório no GitHub (hoje é local) e conta Cloudflare. Nada de build: o site é estático.

- **Build command**: `node scripts/build-home.mjs` (regenera a home a partir do registro)
- **Output directory**: `/` (raiz do repositório)

## Passo a passo (primeira publicação)

1. Garantir a home atualizada: `node scripts/build-home.mjs && node scripts/check.mjs`
2. Subir o repositório para o GitHub.
3. No painel da Cloudflare: Workers & Pages → Create → Pages → Connect to Git → escolher o repositório.
4. Configurar build command e output directory como acima; framework preset: **None**.
5. Publicar e abrir o endereço `*.pages.dev` no celular.
6. Domínio próprio (quando existir): Custom domains → adicionar `demos.<dominio>` (CNAME). Se o DNS
   não estiver na Cloudflare, criar o CNAME apontando para o endereço do Pages.

## Checklist após publicar

- [ ] home abre e lista todas as demos de `demos.json`
- [ ] cada demo abre pelo link da home
- [ ] botão de WhatsApp abre o app com a mensagem certa (testar no celular, não no desktop)
- [ ] conferir no código-fonte da página que `noindex` está presente em toda demo
- [ ] testar em rede lenta (aba Network em 3G simulado)
- [ ] nenhum erro no console

## Números do plano gratuito (verificados na documentação, 27/09/2026)

- **Requisições a arquivo estático: grátis e ilimitadas** (só passa a contar quando invoca Function).
- 500 builds/mês, 1 build por vez, timeout de 20 min por build.
- 100 domínios personalizados por projeto · 100 projetos por conta.
- 20.000 arquivos por site · 25 MiB por arquivo.
- Projetos novos: a Cloudflare limita a criação nos primeiros 48 h de conta nova (depois libera).
- Nada na documentação restringe uso comercial no plano gratuito (diferente do Vercel Hobby, que é
  explicitamente "non-commercial, personal use only").
- Function (para um formulário, por exemplo) consome a cota do Workers Free: 100.000 requisições/dia.
