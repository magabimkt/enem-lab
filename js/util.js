/* ENEM Lab — utilitários compartilhados (sem dependências) */
(function () {
  'use strict';
  var U = {};

  U.$ = function (s, r) { return (r || document).querySelector(s); };
  U.$$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* Cria elementos de forma segura (nunca usa innerHTML com dados) */
  U.el = function (tag, attrs) {
    var n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null || v === false) return;
        if (k === 'class') n.className = v;
        else if (k === 'style') n.style.cssText = v;
        else if (k === 'dataset') Object.keys(v).forEach(function (d) { n.dataset[d] = v[d]; });
        else if (k.slice(0, 2) === 'on' && typeof v === 'function') n.addEventListener(k.slice(2), v);
        else if (v === true) n.setAttribute(k, '');
        else n.setAttribute(k, v);
      });
    }
    U.add(n, Array.prototype.slice.call(arguments, 2));
    return n;
  };

  U.add = function (n, kids) {
    kids.forEach(function walk(k) {
      if (Array.isArray(k)) { k.forEach(walk); return; }
      if (k == null || k === false) return;
      n.appendChild(k.nodeType ? k : document.createTextNode(String(k)));
    });
    return n;
  };

  /* Texto com marcação mínima: **negrito**, `código` e quebras de linha */
  U.rich = function (s) {
    var frag = document.createDocumentFragment();
    String(s).split(/(\*\*[^*]+\*\*|`[^`]+`)/g).forEach(function (part) {
      if (!part) return;
      if (part.slice(0, 2) === '**' && part.slice(-2) === '**' && part.length > 4) {
        frag.appendChild(U.el('strong', null, part.slice(2, -2)));
      } else if (part.charAt(0) === '`' && part.slice(-1) === '`' && part.length > 2) {
        frag.appendChild(U.el('code', null, part.slice(1, -1)));
      } else {
        part.split('\n').forEach(function (linha, i) {
          if (i > 0) frag.appendChild(document.createElement('br'));
          if (linha) frag.appendChild(document.createTextNode(linha));
        });
      }
    });
    return frag;
  };

  /* Blocos: parágrafos separados por linha em branco; linhas iniciadas por "- " viram lista */
  U.texto = function (s) {
    var out = [];
    String(s).split(/\n\s*\n/).forEach(function (bl) {
      var linhas = bl.split('\n');
      var ehLista = linhas.every(function (l) { return /^\s*[-•]\s+/.test(l); });
      if (ehLista) {
        var ul = U.el('ul');
        linhas.forEach(function (l) { ul.appendChild(U.el('li', null, U.rich(l.replace(/^\s*[-•]\s+/, '')))); });
        out.push(ul);
      } else {
        out.push(U.el('p', null, U.rich(bl.replace(/\n/g, ' '))));
      }
    });
    return out;
  };

  U.hash = function (s) {
    var h = 5381; s = String(s);
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  };

  U.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  U.sample = function (arr, n) { return U.shuffle(arr).slice(0, n); };

  /* Amostragem ponderada sem reposição (Efraimidis–Spirakis) */
  U.weighted = function (items, wfn, n) {
    return items
      .map(function (it) { return { it: it, k: Math.pow(Math.random(), 1 / Math.max(wfn(it), 0.0001)) }; })
      .sort(function (a, b) { return b.k - a.k; })
      .slice(0, n)
      .map(function (x) { return x.it; });
  };

  /* Dia local como número inteiro (para revisão espaçada e sequência de estudo) */
  U.dayIndex = function () {
    return Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);
  };
  U.dayStr = function (idx) { return new Date(idx * 86400000).toISOString().slice(0, 10); };

  U.fmtTime = function (s) {
    s = Math.max(0, Math.round(s));
    var m = Math.floor(s / 60), r = s % 60;
    return m + ':' + (r < 10 ? '0' : '') + r;
  };

  U.plural = function (n, um, varios) { return n + ' ' + (n === 1 ? um : varios); };
  U.pct = function (a, b) { return b ? Math.round(100 * a / b) : 0; };

  var toastTimer = null;
  U.toast = function (msg) {
    var t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2600);
  };

  U.download = function (nome, texto, mime) {
    var blob = new Blob([texto], { type: mime || 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = nome;
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 500);
  };

  U.barra = function (pct, classe) {
    return U.el('div', { class: 'bar ' + (classe || ''), role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': pct },
      U.el('span', { style: 'width:' + Math.max(0, Math.min(100, pct)) + '%' }));
  };

  window.U = U;
})();
