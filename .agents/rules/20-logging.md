# 20 — Registro após mexer no código

Depois de qualquer alteração, acrescente uma entrada em `architecture_docs/logs.md` com:

- data, em `AAAA-MM-DD — título curto`
- o que mudou e **por quê** (o porquê não fica no git)
- armadilhas encontradas: o que quebrou, o que parecia funcionar e não funcionava

Não registre o que o git já conta (arquivos alterados, tamanho do diff). Se a entrada puder ser
substituída por `git log`, ela é ruído.
