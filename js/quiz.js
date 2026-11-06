/* ENEM Lab — motor de quiz (uma questão por vez, feedback imediato, resultado por disciplina) */
(function () {
  'use strict';
  var el = U.el;
  var LETRAS = ['A', 'B', 'C', 'D', 'E'];
  var DIF = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' };

  function run(box, opt) {
    var P = opt.perguntas.slice();
    var i = 0, feitas = [], respondida = false, teclas = null;

    function desligarTeclas() {
      if (teclas) { document.removeEventListener('keydown', teclas); teclas = null; }
    }
    function sair() { desligarTeclas(); if (opt.aoSair) opt.aoSair(); }

    function topo(sub) {
      return el('div', { class: 'run-top' },
        el('button', { class: 'btn ghost sm', type: 'button', onclick: sair }, '← Sair'),
        el('div', { class: 'run-title' }, opt.titulo || 'Quiz'),
        sub ? el('div', { class: 'run-sub' }, sub) : null);
    }

    function desenhar() {
      desligarTeclas();
      respondida = false;
      var p = P[i];
      var base = p.alt.map(function (t, k) { return { t: t, k: k }; });
      var ordem = (opt.embaralhar === false || p.fixa) ? base : U.shuffle(base);
      var ultima = i === P.length - 1;

      var fb = el('div', { class: 'fb', role: 'status', 'aria-live': 'polite' });
      var prox = el('button', { class: 'btn primary', type: 'button', hidden: true, onclick: avancar },
        ultima ? 'Ver resultado' : 'Próxima →');

      var botoes = ordem.map(function (o, idx) {
        return el('button', { class: 'alt', type: 'button', onclick: function () { escolher(o, idx); } },
          el('span', { class: 'alt-l', 'aria-hidden': 'true' }, LETRAS[idx]),
          el('span', { class: 'alt-t' }, U.rich(o.t)));
      });

      function escolher(o, idx) {
        if (respondida) return;
        respondida = true;
        var ok = o.k === p.c;
        botoes.forEach(function (b, j) {
          b.disabled = true;
          if (ordem[j].k === p.c) b.classList.add('ok');
          else if (j === idx) b.classList.add('err');
          else b.classList.add('dim');
        });
        Store.regQuestao(p.id, ok);
        feitas.push({ p: p, ok: ok });
        fb.replaceChildren(
          el('div', { class: 'fb-head ' + (ok ? 'ok' : 'err') }, ok ? '✅ Correto' : '❌ Não foi dessa vez'),
          ok ? null : el('p', { class: 'fb-ans' }, 'Resposta certa: ', el('strong', null, U.rich(p.alt[p.c]))),
          el('div', { class: 'fb-exp' }, U.rich(p.exp)));
        prox.hidden = false;
        prox.focus({ preventScroll: true });
        if (fb.scrollIntoView) fb.scrollIntoView({ block: 'nearest' });
      }

      function avancar() {
        if (ultima) { fim(); return; }
        i++; desenhar();
        if (box.scrollIntoView) box.scrollIntoView({ block: 'start' });
      }

      var meta = el('div', { class: 'q-meta' },
        el('span', { class: 'badge dif-' + p.dif }, DIF[p.dif] || ''),
        p.ano ? el('span', { class: 'badge' }, p.ano) : null,
        opt.mostrarOrigem !== false ? el('span', { class: 'q-origem' }, p.disc.emoji + ' ' + p.disc.nome + ' · ' + p.tema.nome) : null);

      box.replaceChildren(
        topo('Questão ' + (i + 1) + ' de ' + P.length),
        U.barra(Math.round(100 * i / P.length), 'thin'),
        el('div', { class: 'card q-card', dataset: { area: p.disc.area } },
          meta,
          el('div', { class: 'q-text' }, U.texto(p.q)),
          el('div', { class: 'alts' }, botoes),
          fb,
          el('div', { class: 'q-actions' }, prox),
          el('p', { class: 'hint kbd-hint' }, 'Atalhos: teclas 1–5 ou A–E para responder; Enter para avançar.')));

      teclas = function (e) {
        if (!box.isConnected) { desligarTeclas(); return; }
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        var tag = (e.target && e.target.tagName) || '';
        if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
        var k = e.key.toLowerCase();
        if (!respondida) {
          var idx = -1;
          if (/^[1-5]$/.test(k)) idx = +k - 1;
          else if (/^[a-e]$/.test(k)) idx = k.charCodeAt(0) - 97;
          if (idx >= 0 && idx < botoes.length) { e.preventDefault(); botoes[idx].click(); }
        } else if ((k === 'enter' || k === 'arrowright') && document.activeElement !== prox) {
          e.preventDefault(); prox.click();
        }
      };
      document.addEventListener('keydown', teclas);
    }

    function mensagem(pct) {
      if (pct >= 90) return 'Excelente domínio. Para fixar de verdade, volte a este tema em alguns dias (revisão espaçada) e misture com outras disciplinas.';
      if (pct >= 70) return 'Bom resultado. Revise as explicações dos erros e refaça só eles.';
      if (pct >= 40) return 'Há lacunas. Releia o tema com calma e refaça o quiz depois dos flashcards.';
      return 'Comece pelo estudo do tema e pelos flashcards, depois tente de novo. Errar aqui faz parte do aprendizado.';
    }

    function fim() {
      desligarTeclas();
      var acertos = feitas.filter(function (f) { return f.ok; }).length;
      var pct = U.pct(acertos, feitas.length);
      var erradas = feitas.filter(function (f) { return !f.ok; });

      var porDisc = {};
      feitas.forEach(function (f) {
        var d = f.p.disc;
        var x = porDisc[d.id] || (porDisc[d.id] = { d: d, ok: 0, n: 0 });
        x.n++; if (f.ok) x.ok++;
      });
      var ids = Object.keys(porDisc);

      var acoes = [];
      if (erradas.length) {
        acoes.push(el('button', {
          class: 'btn primary', type: 'button', onclick: function () {
            run(box, { titulo: (opt.titulo || 'Quiz') + ' · só os erros', perguntas: U.shuffle(erradas.map(function (f) { return f.p; })), aoSair: opt.aoSair, mostrarOrigem: opt.mostrarOrigem });
          }
        }, 'Refazer só os ' + erradas.length + ' erros'));
      }
      acoes.push(el('button', { class: 'btn', type: 'button', onclick: sair }, 'Concluir'));

      box.replaceChildren(
        topo('Resultado'),
        el('div', { class: 'card result' },
          el('div', { class: 'big-num' }, acertos + ' / ' + feitas.length),
          el('div', { class: 'big-sub' }, pct + '% de acertos'),
          U.barra(pct, pct >= 70 ? 'ok' : (pct >= 40 ? 'warn' : 'err')),
          el('p', { class: 'result-msg' }, mensagem(pct)),
          ids.length > 1 ? el('div', { class: 'by-disc' }, ids.map(function (id) {
            var x = porDisc[id];
            return el('div', { class: 'by-disc-row', dataset: { area: x.d.area } },
              el('span', null, x.d.emoji + ' ' + x.d.nome),
              el('span', { class: 'mono' }, x.ok + '/' + x.n));
          })) : null,
          el('div', { class: 'row-actions' }, acoes)),
        erradas.length ? el('div', { class: 'card' },
          el('h3', null, 'Para revisar (' + erradas.length + ')'),
          erradas.map(function (f) {
            return el('details', { class: 'rev-item' },
              el('summary', null, f.p.q.replace(/\s+/g, ' ').slice(0, 110) + (f.p.q.length > 110 ? '…' : '')),
              el('div', { class: 'rev-body' },
                el('p', null, el('strong', null, 'Resposta certa: '), U.rich(f.p.alt[f.p.c])),
                el('p', null, U.rich(f.p.exp)),
                el('p', { class: 'hint' }, f.p.disc.emoji + ' ' + f.p.disc.nome + ' · ' + f.p.tema.nome)));
          })) : null);
      if (box.scrollIntoView) box.scrollIntoView({ block: 'start' });
    }

    if (!P.length) { box.replaceChildren(topo(''), el('div', { class: 'card empty' }, 'Nenhuma questão disponível para esta seleção.')); return; }
    desenhar();
  }

  window.Quiz = { run: run };
})();
