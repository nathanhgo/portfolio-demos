/* Troca de unidade. Sem JavaScript, as quatro lojas aparecem na página em sequência
   (todo o conteúdo está no HTML — este arquivo só esconde as outras). */
(() => {
  "use strict";
  const botoes = Array.from(document.querySelectorAll("[data-loja]"));
  const blocos = Array.from(document.querySelectorAll(".loja"));
  if (!botoes.length || !blocos.length) return;

  const aplicar = (alvo) => {
    const todas = alvo === "todas";
    blocos.forEach((b) => { b.hidden = !todas && b.id !== alvo; });
    botoes.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.loja === alvo)));
    if (todas) history.replaceState(null, "", location.pathname);
    else history.replaceState(null, "", "#" + alvo);
  };

  botoes.forEach((b) => {
    b.hidden = false;
    b.addEventListener("click", () => aplicar(b.dataset.loja));
  });
  const aviso = document.querySelector("[data-aviso-js]");
  if (aviso) aviso.remove();

  const inicial = location.hash.slice(1);
  if (inicial && blocos.some((b) => b.id === inicial)) aplicar(inicial);
  else aplicar("todas");
})();
