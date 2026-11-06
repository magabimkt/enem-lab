/* ENEM Lab — progresso salvo no próprio aparelho (localStorage) */
(function () {
  'use strict';
  var KEY = 'enemlab_v1';
  /* Revisão espaçada (Leitner): dias até a próxima revisão por caixa 0..5 */
  var INTERVALOS = [0, 1, 3, 7, 14, 30];

  function vazio() {
    return { v: 1, q: {}, f: {}, erros: {}, vistos: {}, jogos: { mem: {}, lig: {} }, dias: {}, cfg: {} };
  }
  function carregar() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return vazio();
      var o = JSON.parse(raw);
      var base = vazio();
      Object.keys(base).forEach(function (k) { if (o[k] == null) o[k] = base[k]; });
      if (!o.jogos.mem) o.jogos.mem = {};
      if (!o.jogos.lig) o.jogos.lig = {};
      return o;
    } catch (e) { return vazio(); }
  }

  var S = carregar();
  function salvar() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* sem espaço ou bloqueado */ } }
  function marcarDia() { var d = U.dayStr(U.dayIndex()); S.dias[d] = (S.dias[d] || 0) + 1; }

  var Store = {
    /* ---- Questões ---- */
    regQuestao: function (id, ok) {
      var q = S.q[id] || { c: 0, e: 0, l: false, u: 0 };
      if (ok) q.c++; else q.e++;
      q.l = !!ok; q.u = Date.now();
      S.q[id] = q;
      if (ok) delete S.erros[id]; else S.erros[id] = Date.now();
      marcarDia(); salvar();
    },
    questao: function (id) { return S.q[id] || null; },
    dominada: function (id) { return !!(S.q[id] && S.q[id].l); },
    /* Peso para sorteio: erradas por último > nunca vistas > acertadas */
    peso: function (id) { var q = S.q[id]; if (!q) return 2; return q.l ? 1 : 3; },
    erros: function () { return Object.keys(S.erros); },
    limparErro: function (id) { delete S.erros[id]; salvar(); },
    limparErros: function () { S.erros = {}; salvar(); },

    /* ---- Flashcards (Leitner) ---- */
    vence: function (id) { var c = S.f[id]; return !c || c.due <= U.dayIndex(); },
    cartao: function (id) { return S.f[id] || null; },
    regFlash: function (id, lembrou) {
      var c = S.f[id] || { box: 0, due: 0 };
      c.box = lembrou ? Math.min(c.box + 1, 5) : 1;
      c.due = U.dayIndex() + INTERVALOS[c.box];
      S.f[id] = c; marcarDia(); salvar();
    },

    /* ---- Temas vistos ---- */
    vistoTema: function (key) { if (!S.vistos[key]) { S.vistos[key] = Date.now(); salvar(); } },
    visto: function (key) { return !!S.vistos[key]; },

    /* ---- Jogos: guarda o melhor resultado ---- */
    jogo: function (tipo, chave, valor, menorMelhor) {
      var atual = S.jogos[tipo][chave];
      var recorde = atual == null || (menorMelhor ? valor < atual : valor > atual);
      if (recorde) { S.jogos[tipo][chave] = valor; }
      marcarDia(); salvar();
      return { melhor: recorde ? valor : atual, recorde: recorde && atual != null };
    },
    melhorJogo: function (tipo, chave) { var v = S.jogos[tipo][chave]; return v == null ? null : v; },

    /* ---- Sequência de estudo ---- */
    sequencia: function () {
      var hoje = U.dayIndex(), n = 0;
      var i = S.dias[U.dayStr(hoje)] ? hoje : hoje - 1;
      while (S.dias[U.dayStr(i)]) { n++; i--; }
      return n;
    },
    estudouHoje: function () { return !!S.dias[U.dayStr(U.dayIndex())]; },
    totalDias: function () { return Object.keys(S.dias).length; },

    /* ---- Estatísticas ---- */
    totais: function () {
      var c = 0, e = 0, ids = Object.keys(S.q);
      ids.forEach(function (id) { c += S.q[id].c; e += S.q[id].e; });
      return { respondidas: c + e, acertos: c, erros: e, distintas: ids.length };
    },

    /* ---- Configurações simples ---- */
    cfg: function (k, v) { if (v === undefined) return S.cfg[k]; S.cfg[k] = v; salvar(); return v; },

    /* ---- Backup ---- */
    exportar: function () { return JSON.stringify(S, null, 1); },
    importar: function (texto) {
      var o = JSON.parse(texto);
      if (!o || typeof o !== 'object' || o.v !== 1 || typeof o.q !== 'object') throw new Error('Arquivo de backup inválido');
      var base = vazio();
      Object.keys(base).forEach(function (k) { if (o[k] == null) o[k] = base[k]; });
      S = o; salvar();
    },
    zerar: function () { S = vazio(); salvar(); }
  };

  window.Store = Store;
})();
