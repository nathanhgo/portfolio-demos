# 10 — Fluxo de trabalho

1. Antes de criar uma demo, leia `architecture_docs/visual.md` (restrições) e `mvp.md` (o que é a
   vez agora).
2. Copie `demos/_template/`, nunca escreva uma página do zero: o modelo já tem a estrutura aprovada
   e as marcações `TROCAR:`.
3. Depois de qualquer mudança, rode:
   ```bash
   node scripts/build-home.mjs && node scripts/check.mjs
   ```
4. Atualize o checkbox em `architecture_docs/mvp.md` e acrescente uma entrada em
   `architecture_docs/logs.md` (só o que o git não diz: decisão, beco sem saída, armadilha).
5. Se a decisão for estrutural (nova pasta, novo script, mudança de hospedagem), registre em
   `architecture_docs/decisions.md` antes de espalhar pelo código.
