/**
 * Verifica a integridade do repositório de demos.
 * Uso: node scripts/check.mjs
 * Sai com código 1 se algo estiver fora do lugar (ver architecture_docs/tests.md).
 */
import { readFile, access, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const problemas = [];
const ok = [];
const existe = async (p) => { try { await access(p); return true; } catch { return false; } };

const cfg = JSON.parse(await readFile(join(raiz, "demos.json"), "utf8"));
const demos = cfg.demos ?? [];
ok.push(`demos.json válido com ${demos.length} entrada(s)`);

// 1. slugs únicos e em kebab-case
const vistos = new Set();
for (const d of demos) {
  if (vistos.has(d.slug)) problemas.push(`slug duplicado: ${d.slug}`);
  vistos.add(d.slug);
  if (!/^_?[a-z0-9]+(-[a-z0-9]+)*$/.test(d.slug)) problemas.push(`slug fora do padrão kebab-case: ${d.slug}`);
  if (!d.nome || !d.link) problemas.push(`entrada incompleta (nome/link): ${d.slug}`);
}

// 2. cada entrada tem pasta e index.html
for (const d of demos) {
  const alvo = join(raiz, d.link.replace(/^\.\//, "").replace(/\/$/, ""), "index.html");
  if (!(await existe(alvo))) problemas.push(`sem index.html para o slug ${d.slug} (esperado em ${d.link}index.html)`);
}

// 3. toda demo publicada tem noindex, faixa de demonstração e nenhum lugar-comum esquecido
for (const d of demos) {
  const alvo = join(raiz, d.link.replace(/^\.\//, "").replace(/\/$/, ""), "index.html");
  if (!(await existe(alvo))) continue;
  const html = await readFile(alvo, "utf8");
  if (!/name="robots"[^>]*noindex/i.test(html)) problemas.push(`${d.slug}: falta <meta name="robots" content="noindex">`);
  if (!/class="demo-banner"|demo-banner/.test(html)) problemas.push(`${d.slug}: falta a faixa de demonstração (.demo-banner)`);
  if (!/lang="pt-BR"/.test(html)) problemas.push(`${d.slug}: falta lang="pt-BR"`);
  if (!/<title>[^<]{10,}<\/title>/.test(html)) problemas.push(`${d.slug}: título ausente ou genérico`);
  if (d.status !== "modelo" && /TROCAR:/.test(html)) problemas.push(`${d.slug}: ainda contém marcações TROCAR: (dados fictícios não trocados)`);
  ok.push(`${d.slug}: estrutura verificada`);
}

// 4. a home existe, está atualizada e os links resolvem
const home = join(raiz, "index.html");
if (!(await existe(home))) problemas.push("index.html não existe — rode `node scripts/build-home.mjs`");
else {
  const html = await readFile(home, "utf8");
  for (const d of demos) if (!html.includes(d.link)) problemas.push(`home desatualizada: não lista ${d.slug} (rode o build)`);
  const hrefs = [...html.matchAll(/href="(\.\/[^"]+)"/g)].map((m) => m[1]);
  for (const h of hrefs) {
    const alvo = resolve(raiz, h);
    const caminho = h.endsWith("/") ? join(alvo, "index.html") : alvo;
    if (!(await existe(caminho))) problemas.push(`link quebrado na home: ${h}`);
  }
  ok.push(`home com ${hrefs.length} link(s) interno(s) verificado(s)`);
}

if (problemas.length) {
  console.error("FALHOU:");
  for (const p of problemas) console.error("  - " + p);
  process.exit(1);
}
console.log("OK:");
for (const l of ok) console.log("  - " + l);
