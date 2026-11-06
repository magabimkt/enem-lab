#!/usr/bin/env node
/* ENEM Lab — validador de conteúdo e de arquivos.
   Uso (na pasta do projeto):  node tools/validate.js
   Erros (✖) fazem o comando falhar; avisos (!) são recomendações de qualidade. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const RAIZ = path.resolve(__dirname, '..');
const erros = [];
const avisos = [];
const E = (m) => erros.push(m);
const W = (m) => avisos.push(m);
const ler = (p) => fs.readFileSync(path.join(RAIZ, p), 'utf8');

/* ---------- 1. Carrega registro + dados em um ambiente isolado ---------- */
const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
const dataDir = path.join(RAIZ, 'data');
const arquivosData = fs.readdirSync(dataDir).filter((f) => f.endsWith('.js'));
const ordem = ['registry.js'].concat(arquivosData.filter((f) => f !== 'registry.js').sort());
['js/util.js'].concat(ordem.map((f) => 'data/' + f)).forEach((f) => {
  try {
    vm.runInContext(ler(f), ctx, { filename: f });
  } catch (e) {
    E(`${f}: erro ao carregar — ${e.message}`);
  }
});
const ENEM = ctx.ENEM;
if (!ENEM) { console.error('✖ ENEM não carregou. Abortando.'); process.exit(1); }

/* ---------- 2. Valida conteúdo ---------- */
const INC = ['alta', 'media', 'baixa'];
const DIF = ['facil', 'medio', 'dificil'];
const vistasPerguntas = new Map();
const idsQuiz = new Set();
const idsCartas = new Set();
const linhas = [];
const tot = { temas: 0, quiz: 0, flash: 0, pares: 0 };

ENEM.disciplinas.forEach((d) => {
  const ids = new Set();
  d.temas.forEach((t) => {
    const loc = `${d.id}/${t.id || '?'}`;
    if (!t.id || !/^[a-z0-9-]+$/.test(t.id)) E(`${loc}: "id" do tema deve usar só a-z, 0-9 e hífen`);
    if (ids.has(t.id)) E(`${loc}: id de tema repetido`);
    ids.add(t.id);
    if (!t.nome) E(`${loc}: tema sem "nome"`);
    if (INC.indexOf(t.incidencia) < 0) E(`${loc}: incidencia deve ser alta | media | baixa`);
    if (!t.resumo) W(`${loc}: tema sem "resumo"`);

    if (!t.conceitos.length) E(`${loc}: precisa de ao menos 1 conceito`);
    t.conceitos.forEach((c, i) => {
      if (!c.titulo || !c.texto) E(`${loc} conceito ${i + 1}: precisa de "titulo" e "texto"`);
      else if (c.texto.length > 900) W(`${loc} conceito "${c.titulo}": texto longo (${c.texto.length}). Divida em blocos menores.`);
    });
    if (t.pegadinhas.length < 2) W(`${loc}: poucas pegadinhas (${t.pegadinhas.length}); ideal ≥ 3`);
    if (t.dicas.length < 2) W(`${loc}: poucas dicas (${t.dicas.length}); ideal ≥ 3`);
    if (!t.exemplo) W(`${loc}: sem "exemplo" resolvido`);
    else if (!t.exemplo.enunciado || !t.exemplo.resolucao) E(`${loc}: exemplo precisa de "enunciado" e "resolucao"`);
    if (!t.fontes.length) W(`${loc}: sem fontes`);
    t.fontes.forEach((f) => {
      if (!f.titulo) E(`${loc}: fonte sem "titulo"`);
      if (!f.url) W(`${loc}: fonte "${f.titulo}" sem URL (confirme e preencha)`);
      else if (!/^https?:\/\//.test(f.url)) E(`${loc}: URL inválida em "${f.titulo}"`);
    });

    /* flashcards */
    if (t.flashcards.length < 6) W(`${loc}: ${t.flashcards.length} flashcards (ideal ≥ 8)`);
    t.flashcards.forEach((c, i) => {
      if (!c.f || !c.v) E(`${loc} flashcard ${i + 1}: precisa de "f" e "v"`);
      if (idsCartas.has(c.id)) E(`${loc} flashcard "${c.f}": repetido`);
      idsCartas.add(c.id);
      if (c.v && c.v.length > 220) W(`${loc} flashcard "${c.f}": resposta longa (${c.v.length})`);
    });

    /* quiz */
    if (t.quiz.length < 8) W(`${loc}: ${t.quiz.length} questões (ideal ≥ 10, com mistura de dificuldades)`);
    const dif = { facil: 0, medio: 0, dificil: 0 };
    t.quiz.forEach((q, i) => {
      const qloc = `${loc} questão ${i + 1}`;
      if (!q.q) E(`${qloc}: sem enunciado`);
      if (!Array.isArray(q.alt) || q.alt.length !== 5) E(`${qloc}: precisa de exatamente 5 alternativas`);
      else {
        if (new Set(q.alt.map((a) => String(a).trim().toLowerCase())).size !== 5) E(`${qloc}: alternativas repetidas`);
        q.alt.forEach((a) => { if (!String(a).trim()) E(`${qloc}: alternativa vazia`); });
      }
      if (!Number.isInteger(q.c) || q.c < 0 || q.c > 4) E(`${qloc}: "c" deve ser um número de 0 a 4`);
      if (!q.exp) E(`${qloc}: sem explicação ("exp")`);
      else if (/alternativa\s+[a-e]\b|letra\s+[a-e]\b/i.test(q.exp)) E(`${qloc}: a explicação cita letra de alternativa (elas são embaralhadas)`);
      if (q.res && /alternativa\s+[a-e]\b|letra\s+[a-e]\b/i.test(q.res)) E(`${qloc}: a resolução cita letra de alternativa (elas são embaralhadas)`);
      if (/^(matematica|fisica|quimica)$/.test(d.id) && !q.res) W(`${qloc}: sem resolução passo a passo ("res")`);
      if (DIF.indexOf(q.dif) < 0) E(`${qloc}: "dif" deve ser facil | medio | dificil`);
      else dif[q.dif]++;
      if (/\b(todas as anteriores|nenhuma das anteriores)\b/i.test((q.alt || []).join(' ')) && !q.fixa) E(`${qloc}: use "fixa: true" quando houver "todas/nenhuma das anteriores"`);
      const chave = String(q.q).trim().toLowerCase();
      if (vistasPerguntas.has(chave)) E(`${qloc}: enunciado repetido (também em ${vistasPerguntas.get(chave)})`);
      vistasPerguntas.set(chave, qloc);
      if (idsQuiz.has(q.id)) E(`${qloc}: identificador repetido`);
      idsQuiz.add(q.id);
      if (q.c >= 0 && q.alt && q.alt[q.c] != null) {
        const comp = q.alt.map((a) => String(a).length);
        const maxOutra = Math.max.apply(null, comp.filter((_, k) => k !== q.c));
        if (comp[q.c] > maxOutra * 1.6 && comp[q.c] > 40) W(`${qloc}: a alternativa certa é bem mais longa que as outras (entrega a resposta)`);
      }
    });
    if (t.quiz.length >= 6 && (dif.facil === 0 || dif.dificil === 0)) W(`${loc}: varie as dificuldades (fácil ${dif.facil}, médio ${dif.medio}, difícil ${dif.dificil})`);

    /* pares (jogos) */
    if (t.pares.length < 6) W(`${loc}: ${t.pares.length} pares para os jogos (ideal ≥ 6)`);
    const termos = new Set();
    t.pares.forEach((p, i) => {
      if (!p.a || !p.b) E(`${loc} par ${i + 1}: precisa de "a" e "b"`);
      if (p.a && p.a.length > 40) W(`${loc} par "${p.a}": termo longo (${p.a.length}); ideal ≤ 40`);
      if (p.b && p.b.length > 60) W(`${loc} par "${p.a}": definição longa (${p.b.length}); ideal ≤ 60`);
      if (termos.has(String(p.a).toLowerCase())) E(`${loc}: termo repetido nos pares ("${p.a}")`);
      termos.add(String(p.a).toLowerCase());
    });
  });
  const c = ENEM.contagem(d.temas);
  tot.temas += c.temas; tot.quiz += c.quiz; tot.flash += c.flash; tot.pares += c.pares;
  linhas.push({ id: d.id, ...c });
});

/* ---------- 3. Valida arquivos do app ---------- */
const html = ler('index.html');
const sw = ler('sw.js');
const arquivosApp = []
  .concat(fs.readdirSync(path.join(RAIZ, 'js')).map((f) => 'js/' + f))
  .concat(fs.readdirSync(path.join(RAIZ, 'css')).map((f) => 'css/' + f))
  .concat(arquivosData.map((f) => 'data/' + f));
arquivosApp.forEach((f) => {
  if (f.endsWith('.js') && html.indexOf(f) < 0) E(`index.html não carrega ${f}`);
  if (f.endsWith('.css') && html.indexOf(f) < 0) E(`index.html não carrega ${f}`);
  if (sw.indexOf("'./" + f + "'") < 0) E(`sw.js: ${f} não está na lista de cache (modo offline)`);
});
['manifest.json', 'index.html'].concat(fs.readdirSync(path.join(RAIZ, 'icons')).map((f) => 'icons/' + f)).forEach((f) => {
  if (sw.indexOf("'./" + f + "'") < 0 && f !== 'index.html') E(`sw.js: ${f} não está na lista de cache`);
});
try {
  const m = JSON.parse(ler('manifest.json'));
  m.icons.forEach((i) => { if (!fs.existsSync(path.join(RAIZ, i.src))) E(`manifest.json: ícone ausente ${i.src}`); });
  if (!m.start_url || !m.display) E('manifest.json: faltam start_url/display');
} catch (e) { E('manifest.json inválido: ' + e.message); }
const ordemHtml = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1]);
const iReg = ordemHtml.indexOf('data/registry.js'), iUtil = ordemHtml.indexOf('js/util.js');
if (iUtil < 0 || iReg < 0 || iUtil > iReg) E('index.html: util.js deve vir antes de registry.js');
ordemHtml.filter((s) => /^data\/d-/.test(s)).forEach((s) => { if (ordemHtml.indexOf(s) < iReg) E(`index.html: ${s} deve vir depois de registry.js`); });

/* ---------- 4. Relatório ---------- */
console.log('\nENEM Lab — cobertura de conteúdo\n');
console.log('disciplina'.padEnd(14) + 'temas'.padStart(7) + 'questões'.padStart(10) + 'flashcards'.padStart(12) + 'pares'.padStart(8));
linhas.forEach((l) => {
  console.log(l.id.padEnd(14) + String(l.temas).padStart(7) + String(l.quiz).padStart(10) + String(l.flash).padStart(12) + String(l.pares).padStart(8) + (l.temas ? '' : '   (a alimentar)'));
});
console.log('-'.repeat(51));
console.log('TOTAL'.padEnd(14) + String(tot.temas).padStart(7) + String(tot.quiz).padStart(10) + String(tot.flash).padStart(12) + String(tot.pares).padStart(8));

if (avisos.length) { console.log('\nAvisos (' + avisos.length + '):'); avisos.forEach((a) => console.log('  ! ' + a)); }
if (erros.length) { console.log('\nErros (' + erros.length + '):'); erros.forEach((e) => console.log('  ✖ ' + e)); console.log(''); process.exit(1); }
console.log('\n✔ Nenhum erro encontrado.\n');
