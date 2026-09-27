/**
 * Gera a home (index.html) a partir de demos.json.
 * Uso: node scripts/build-home.mjs
 * Nunca edite index.html na mão — ele é arquivo gerado.
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const cfg = JSON.parse(await readFile(join(raiz, "demos.json"), "utf8"));
const template = await readFile(join(raiz, "site", "home.template.html"), "utf8");

const escapar = (s = "") => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const linhas = (cfg.demos ?? []).map((d) => {
  const meta = [d.segmento, d.bairro].filter(Boolean).join(" · ");
  const status = escapar(d.status ?? "demo");
  if (d.status === "modelo") {
    return `      <li>
        <div class="item-interno">
          <span class="item-nome">${escapar(d.nome)}</span>
          <span class="item-status">${status}</span>
          <span class="item-meta">${escapar(meta)} — ${escapar(d.observacao ?? "")} <a href="${escapar(d.link)}">abrir modelo</a></span>
        </div>
      </li>`;
  }
  return `      <li>
        <a class="item" href="${escapar(d.link)}">
          <span class="item-nome">${escapar(d.nome)}</span>
          <span class="item-status">${status}</span>
          <span class="item-meta">${escapar(meta)}</span>
        </a>
      </li>`;
});

const html = template
  .replaceAll("{{DEMOS_LISTA}}", linhas.join("\n"))
  .replaceAll("{{TOTAL}}", String((cfg.demos ?? []).length))
  .replaceAll("{{ATUALIZADO}}", escapar(cfg.atualizado ?? ""));

await writeFile(join(raiz, "index.html"), html, "utf8");
console.log(`index.html gerado com ${(cfg.demos ?? []).length} entrada(s).`);
