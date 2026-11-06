/* ENEM Lab — jogo da memória (termo ↔ definição) */
(function () {
  'use strict';
  var el = U.el;

  function run(box, opt) {
    var n = Math.min(6, opt.pares.length);
    var escolha = U.sample(opt.pares, n);
    var cartas = [];
    escolha.forEach(function (p, i) {
      cartas.push({ pid: i, txt: p.a, lado: 'termo', up: false, done: false });
      cartas.push({ pid: i, txt: p.b, lado: 'def', up: false, done: false });
    });
    cartas = U.shuffle(cartas);

    var abertas = [], travado = false, jogadas = 0, achados = 0, t0 = 0, timer = null;
    var elJog, elPar, elTempo, live;

    function parar() { if (timer) { clearInterval(timer); timer = null; } }
    function sair() { parar(); if (opt.aoSair) opt.aoSair(); }

    function atualizar(c) {
      var b = c.el;
      b.classList.toggle('up', c.up || c.done);
      b.classList.toggle('done', c.done);
      b.classList.toggle('def', c.lado === 'def');
      b.setAttribute('aria-label', (c.up || c.done) ? (c.lado === 'termo' ? 'Termo: ' : 'Definição: ') + c.txt : 'Carta virada para baixo');
      b.disabled = c.done;
    }
    function placar() {
      elJog.textContent = jogadas;
      elPar.textContent = achados + '/' + n;
    }
    function iniciarTempo() {
      t0 = Date.now();
      timer = setInterval(function () {
        if (!box.isConnected) { parar(); return; }
        elTempo.textContent = U.fmtTime((Date.now() - t0) / 1000);
      }, 500);
    }

    function virar(c) {
      if (travado || c.up || c.done) return;
      if (!t0) iniciarTempo();
      c.up = true; atualizar(c); abertas.push(c);
      if (abertas.length < 2) return;
      jogadas++; placar();
      var x = abertas[0], y = abertas[1];
      if (x.pid === y.pid) {
        x.done = y.done = true; abertas = [];
        atualizar(x); atualizar(y); achados++; placar();
        live.textContent = 'Par encontrado: ' + escolha[x.pid].a;
        if (achados === n) fim();
      } else {
        travado = true;
        live.textContent = 'Não é um par.';
        setTimeout(function () {
          x.up = y.up = false; atualizar(x); atualizar(y);
          abertas = []; travado = false;
        }, 950);
      }
    }

    function fim() {
      parar();
      var seg = (Date.now() - t0) / 1000;
      var r = Store.jogo('mem', opt.chave || 'geral', jogadas, true);
      setTimeout(function () {
        box.replaceChildren(
          el('div', { class: 'run-top' },
            el('button', { class: 'btn ghost sm', type: 'button', onclick: sair }, '← Sair'),
            el('div', { class: 'run-title' }, 'Jogo da memória'), el('div', { class: 'run-sub' }, 'Concluído')),
          el('div', { class: 'card result' },
            el('div', { class: 'big-num' }, jogadas + ' jogadas'),
            el('div', { class: 'big-sub' }, 'em ' + U.fmtTime(seg) + (r.recorde ? ' · 🏆 novo recorde!' : ' · melhor: ' + r.melhor + ' jogadas')),
            el('p', { class: 'result-msg' }, 'Revisão rápida: leia os pares abaixo antes de jogar de novo.'),
            el('div', { class: 'pares-list' }, escolha.map(function (p) {
              return el('div', { class: 'par-row', dataset: { area: p.disc.area } },
                el('strong', null, p.a), el('span', { class: 'seta', 'aria-hidden': 'true' }, '→'), el('span', null, p.b));
            })),
            el('div', { class: 'row-actions' },
              el('button', { class: 'btn primary', type: 'button', onclick: function () { run(box, opt); } }, 'Jogar de novo'),
              el('button', { class: 'btn', type: 'button', onclick: sair }, 'Concluir'))));
      }, 700);
    }

    elJog = el('b', null, '0'); elPar = el('b', null, '0/' + n); elTempo = el('b', null, '0:00');
    live = el('div', { class: 'sr-only', role: 'status', 'aria-live': 'polite' });

    var grade = el('div', { class: 'mem-grid' }, cartas.map(function (c) {
      c.el = el('button', { class: 'mc', type: 'button', onclick: function () { virar(c); } },
        el('span', { class: 'mc-back', 'aria-hidden': 'true' }, '?'),
        el('span', { class: 'mc-front' }, c.txt));
      atualizar(c);
      return c.el;
    }));

    box.replaceChildren(
      el('div', { class: 'run-top' },
        el('button', { class: 'btn ghost sm', type: 'button', onclick: sair }, '← Sair'),
        el('div', { class: 'run-title' }, opt.titulo || 'Jogo da memória')),
      el('div', { class: 'scoreboard' },
        el('div', null, 'Jogadas ', elJog), el('div', null, 'Pares ', elPar), el('div', null, 'Tempo ', elTempo)),
      el('p', { class: 'hint' }, 'Encontre cada termo com a sua definição. Pense na resposta antes de virar a segunda carta.'),
      grade, live);
  }

  window.Memoria = { run: run };
})();
