# Visual — Demos

Duas partes: (1) o que **não** fazer, para nenhuma página parecer "gerada por IA sem revisão"; (2) as
decisões visuais confirmadas. As restrições da seção 1 vêm da mesma lista usada no projeto Fortuna,
que já foi revisada à mão.

## 1. Restrições fixas — o que NÃO fazer

- **Gradiente roxo/azul** (ou qualquer gradiente decorativo) em botões, topo ou fundo. Cor sólida.
- **Sombra difusa** (`box-shadow` pesada) em cartões e botões. Para separar camadas, use borda fina,
  contraste ou espaço.
- **Cantos arredondados exagerados e botão "pílula" em tudo.** Raio pequeno e deliberado, não default.
- **Cartão com barra colorida na lateral esquerda** — visual típico de painel genérico.
- **Emoji em qualquer lugar da página** (nem em texto, nem como ícone de recurso). Ícone só quando é
  utilitário e sem alternativa (fechar, menu).
- **Três cartões idênticos de "diferenciais"** (ícone + título + frase, repetidos). Se o negócio tem
  três coisas boas, isso é prosa, não template.
- **Fonte default/Framework sem escolha** (Inter, Roboto, fonte de sistema) — cada demo tem uma
  escolha tipográfica deliberada, feita para o segmento.
- **Texto genérico e vazio**: "a melhor opção da região", "qualidade e confiança", "venha nos
  conhecer". O texto tem que dizer o que o negócio vende, onde fica, quanto custa e quando abre.
- **Travessão em excesso** e pontuação arrastada. Frase direta.
- **Depoimento fabricado** com nome genérico e avatar de banco de imagens. Sem depoimento real, não
  existe seção de depoimento — no lugar entra o que existe: avaliações do Google, fotos do produto.
- **Número inventado** ("+500 clientes atendidos", "10 anos de mercado") se o dono não disse. Dado
  não confirmado não entra.
- **Lista de bullet no lugar de prosa** na parte institucional ("sobre o negócio"). Bullet é para
  listas de verdade: preços, horários, formas de pagamento.
- **Pilha de selos falsos** ("site seguro", "100% responsivo"), **foto de banco de imagens**
  (pessoa sorrindo com notebook, aperto de mão), **carrossel automático** e **contador animado**.
- **Metadados no default**: `<title>` genérico, favicon do framework, Open Graph vazio. Toda demo tem
  title e description reais, com o nome do negócio e o bairro, e favicon próprio ou nenhum.
- **Tema roxo/preto de "dashboard de IA"**. Fora de escopo por completo.

## 2. Decisões confirmadas

### 2.1 Estrutura de página

Coluna única, mobile-first (a demo vai ser vista no celular, na mão do dono). Ordem fixa:

1. faixa fina de "proposta de demonstração" (não é o site oficial)
2. topo: nome do negócio, uma frase sobre o que ele faz, botão de WhatsApp
3. o que vende (com preço quando o dono publica preço) e horário de funcionamento
4. onde fica (endereço, mapa, referência de bairro)
5. sobre, em prosa de 1 parágrafo
6. perguntas frequentes (as 4 que os clientes sempre fazem)
7. rodapé com WhatsApp, endereço e aviso de demonstração

### 2.2 Cores

Duas cores por demo, derivadas do próprio negócio (fachada, placa, Instagram) mais neutros claros. O
dourado do Fortuna **não** é padrão aqui. Se o negócio não tem cor definida, usar a paleta neutra de
`assets/base.css` e não inventar identidade.

### 2.3 Tipografia

Uma família por demo, escolhida pelo segmento: serifada com peso para padaria/restaurante/mercado
(história, comida), sans de traço firme para oficina/pet/serviços. Tamanho de texto base ≥ 17 px,
títulos com peso alto. Nada de cinco pesos diferentes na mesma página.

### 2.4 Botão de WhatsApp

Tem que ser o elemento mais óbvio da página, sem virar pílula brilhante. Cor sólida do negócio ou
verde do WhatsApp, altura mínima de 48 px, texto no imperativo do que acontece ("Falar no WhatsApp",
"Pedir pelo WhatsApp"), repetido no topo e no rodapé, com mensagem pré-preenchida.

### 2.5 Imagens

Só foto real do negócio (fachada, produto, equipe, prato). Nada de ilustração genérica de banco de
imagens, nada de "mockup de celular". Foto ruim e real vence foto bonita e falsa — é o negócio dele
que o dono quer reconhecer. Antes de publicar, comprimir para caber em 200 KB por imagem.

### 2.6 Tom de voz

Direto e concreto, como quem atende no balcão. Nada de superlativo sem prova. Preço e horário
escritos por extenso quando ajudam a leitura ("abre de segunda a sábado, das 7h às 19h").

### 2.7 O que muda quando o cliente fecha

A faixa de demonstração sai, o `noindex` sai, o domínio passa a ser do cliente e o aviso de rodapé
vira o institucional real dele. Nada mais muda — o desenho já é o definitivo.
