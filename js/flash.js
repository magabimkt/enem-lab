/* ENEM Lab — flashcards com recuperação ativa e revisão espaçada (Leitner) */
(function () {
  'use strict';
  var el = U.el;

  function run(box, opt) {
    var fila = opt.cartas.slice();
    var total = fila.length;
    var rep = {};              // quantas vezes cada cartão voltou à fila nesta sessão
    var lembradas = 0, reverRep = 0, revelada = false, teclas = null;

    function desligar() { if (teclas) { document.removeEventListener('keydown', teclas); teclas = null; } }
    function sair() { desligar(); if (opt.aoSair) opt.aoSair(); }

    function topo(sub) {
      return el('div', { class: 'run-top' },
        el('button', { class: 'btn ghost sm', type: 'button', onclick: sair }, '← Sair'),
        el('div', { class: 'run-title' }, opt.titulo || 'Flashcards'),
        sub ? el('div', { class: 'run-sub' }, sub) : null);
    }

    function desenhar() {
      desligar(); revelada = false;
      if (!fila.length) { fim(); return; }
      var c = fila[0];
      var feitas = total - fila.length;

      var resp = el('div', { class: 'fc-answer', hidden: true }, U.texto(c.v));
      var acoesRev = el('div', { class: 'row-actions', hidden: true },
        el('button', { class: 'btn', type: 'button', onclick: function () { avaliar(false); } }, '😕 Não lembrei (1)'),
        el('button', { class: 'btn primary', type: 'button', onclick: function () { avaliar(true); } }, '✅ Lembrei (2)'));
      var mostrar = el('button', { class: 'btn primary', type: 'button', onclick: revelar }, 'Mostrar resposta');

      function revelar() {
        if (revelada) return;
        revelada = true;
        resp.hidden = false; acoesRev.hidden = false; mostrar.hidden = true;
        hint.textContent = 'Seja honesto: só marque "Lembrei" se você acertou antes de virar.';
        acoesRev.lastChild.focus({ preventScroll: true });
      }
      function avaliar(lembrou) {
        fila.shift();
        Store.regFlash(c.id, lembrou);
        if (lembrou) lembradas++;
        else {
          reverRep++;
          rep[c.id] = (rep[c.id] || 0) + 1;
          if (rep[c.id] <= 2) fila.push(c);     // volta ao fim da fila (no máx. 2 vezes)
        }
        desenhar();
      }

      var hint = el('p', { class: 'hint' }, 'Tente lembrar a resposta antes de virar o cartão. Esse esforço é o que fixa a memória.');

      box.replaceChildren(
        topo('Faltam ' + fila.length),
        U.barra(Math.round(100 * feitas / total), 'thin'),
        el('div', { class: 'card fc', dataset: { area: c.disc.area } },
          el('div', { class: 'fc-origem' }, c.disc.emoji + ' ' + c.disc.nome + ' · ' + c.tema.nome),
          el('div', { class: 'fc-front' }, U.rich(c.f)),
          mostrar, resp, acoesRev, hint));

      teclas = function (e) {
        if (!box.isConnected) { desligar(); return; }
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        var tag = (e.target && e.target.tagName) || '';
        if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
        var k = e.key;
        if (!revelada && (k === ' ' || k === 'Enter')) { if (document.activeElement !== mostrar) { e.preventDefault(); revelar(); } }
        else if (revelada && (k === '1' || k === 'ArrowLeft')) { e.preventDefault(); avaliar(false); }
        else if (revelada && (k === '2' || k === 'ArrowRight')) { e.preventDefault(); avaliar(true); }
      };
      document.addEventListener('keydown', teclas);
    }

    function fim() {
      desligar();
      box.replaceChildren(
        topo('Sessão concluída'),
        el('div', { class: 'card result' },
          el('div', { class: 'big-num' }, total + ' ' + (total === 1 ? 'cartão' : 'cartões')),
          el('div', { class: 'big-sub' }, reverRep ? U.plural(reverRep, 'vez', 'vezes') + ' em que você precisou rever' : 'Todos lembrados de primeira'),
          el('p', { class: 'result-msg' }, 'Os cartões que você lembrou voltam em intervalos maiores (1, 3, 7, 14 e 30 dias). Os que errou voltam amanhã. Essa é a revisão espaçada.'),
          el('div', { class: 'row-actions' },
            el('button', { class: 'btn primary', type: 'button', onclick: sair }, 'Concluir'))));
    }

    if (!total) { box.replaceChildren(topo(''), el('div', { class: 'card empty' }, 'Nenhum cartão para revisar agora. 🎉')); return; }
    desenhar();
  }

  window.Flash = { run: run };
})();
