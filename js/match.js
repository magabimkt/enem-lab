/* ENEM Lab — ligação de conceitos (conecte termos às definições) */
(function () {
  'use strict';
  var el = U.el;
  var CORES = ['#60A5FA', '#C084FC', '#34D399', '#22D3EE', '#F472B6', '#FBBF24'];
  var NS = 'http://www.w3.org/2000/svg';

  function run(box, opt) {
    var n = Math.min(6, opt.pares.length);
    var escolha = U.sample(opt.pares, n).map(function (p, i) { return { id: i, a: p.a, b: p.b, disc: p.disc }; });
    var esq = U.shuffle(escolha).map(function (p) { return { p: p, lado: 'e' }; });
    var dir = U.shuffle(escolha).map(function (p) { return { p: p, lado: 'd' }; });
    var sel = null, tent = 0, erros = 0, ligadas = 0, t0 = Date.now(), ligacoes = [];
    var cols, svg, live, onResize;

    function limpar() { if (onResize) { window.removeEventListener('resize', onResize); onResize = null; } }
    function sair() { limpar(); if (opt.aoSair) opt.aoSair(); }

    function desenharLinhas() {
      if (!svg || !cols || !cols.isConnected) return;
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var c = cols.getBoundingClientRect();
      ligacoes.forEach(function (l) {
        var a = l.ie.el.getBoundingClientRect(), b = l.id.el.getBoundingClientRect();
        var x1 = a.right - c.left, y1 = a.top + a.height / 2 - c.top;
        var x2 = b.left - c.left, y2 = b.top + b.height / 2 - c.top;
        var m = (x2 - x1) / 2;
        var path = document.createElementNS(NS, 'path');
        path.setAttribute('d', 'M' + x1 + ' ' + y1 + ' C' + (x1 + m) + ' ' + y1 + ' ' + (x2 - m) + ' ' + y2 + ' ' + x2 + ' ' + y2);
        path.setAttribute('stroke', l.cor);
        path.setAttribute('stroke-width', '3');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-linecap', 'round');
        svg.appendChild(path);
      });
    }

    function marcar(it, cor, ligado) {
      it.el.classList.toggle('sel', false);
      if (ligado) { it.el.classList.add('conn'); it.el.style.setProperty('--lc', cor); it.el.disabled = true; }
    }

    function clicar(it) {
      if (it.el.disabled) return;
      if (sel && sel.lado === it.lado) { sel.el.classList.remove('sel'); sel = (sel === it) ? null : it; if (sel) sel.el.classList.add('sel'); return; }
      if (!sel) { sel = it; it.el.classList.add('sel'); return; }
      var outro = sel; sel = null; outro.el.classList.remove('sel');
      var ie = it.lado === 'e' ? it : outro, id = it.lado === 'd' ? it : outro;
      tent++;
      if (ie.p.id === id.p.id) {
        var cor = CORES[ligadas % CORES.length];
        ligadas++;
        marcar(ie, cor, true); marcar(id, cor, true);
        ligacoes.push({ ie: ie, id: id, cor: cor });
        desenharLinhas();
        live.textContent = 'Ligação correta.';
        if (ligadas === n) fim();
      } else {
        erros++;
        live.textContent = 'Ligação incorreta.';
        ie.el.classList.add('bad'); id.el.classList.add('bad');
        setTimeout(function () { ie.el.classList.remove('bad'); id.el.classList.remove('bad'); }, 500);
      }
      info.textContent = 'Erros: ' + erros;
    }

    function fim() {
      var seg = (Date.now() - t0) / 1000;
      var prec = U.pct(n, tent);
      var r = Store.jogo('lig', opt.chave || 'geral', prec, false);
      setTimeout(function () {
        limpar();
        box.replaceChildren(
          el('div', { class: 'run-top' },
            el('button', { class: 'btn ghost sm', type: 'button', onclick: sair }, '← Sair'),
            el('div', { class: 'run-title' }, 'Ligação de conceitos'), el('div', { class: 'run-sub' }, 'Concluído')),
          el('div', { class: 'card result' },
            el('div', { class: 'big-num' }, prec + '% de precisão'),
            el('div', { class: 'big-sub' }, U.plural(erros, 'erro', 'erros') + ' · ' + U.fmtTime(seg) + (r.recorde ? ' · 🏆 novo recorde!' : '')),
            el('p', { class: 'result-msg' }, 'Revisão rápida: leia os pares antes de jogar de novo.'),
            el('div', { class: 'pares-list' }, escolha.map(function (p) {
              return el('div', { class: 'par-row', dataset: { area: p.disc.area } },
                el('strong', null, p.a), el('span', { class: 'seta', 'aria-hidden': 'true' }, '→'), el('span', null, p.b));
            })),
            el('div', { class: 'row-actions' },
              el('button', { class: 'btn primary', type: 'button', onclick: function () { run(box, opt); } }, 'Jogar de novo'),
              el('button', { class: 'btn', type: 'button', onclick: sair }, 'Concluir'))));
      }, 650);
    }

    var info = el('div', { class: 'run-sub' }, 'Erros: 0');
    live = el('div', { class: 'sr-only', role: 'status', 'aria-live': 'polite' });
    svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'ml'); svg.setAttribute('aria-hidden', 'true');

    function coluna(lista, classe) {
      return el('div', { class: 'mcol ' + classe }, lista.map(function (it) {
        it.el = el('button', { class: 'mi', type: 'button', onclick: function () { clicar(it); } },
          it.lado === 'e' ? el('strong', null, it.p.a) : it.p.b);
        return it.el;
      }));
    }

    cols = el('div', { class: 'mcols' }, svg, coluna(esq, 'esq'), coluna(dir, 'dir'));

    box.replaceChildren(
      el('div', { class: 'run-top' },
        el('button', { class: 'btn ghost sm', type: 'button', onclick: sair }, '← Sair'),
        el('div', { class: 'run-title' }, opt.titulo || 'Ligação de conceitos'), info),
      el('p', { class: 'hint' }, 'Toque em um termo e depois na definição correspondente (ou o contrário). Cada ligação certa ganha uma cor.'),
      cols, live);

    onResize = function () { if (!box.isConnected) { limpar(); return; } desenharLinhas(); };
    window.addEventListener('resize', onResize);
  }

  window.Ligacao = { run: run };
})();
