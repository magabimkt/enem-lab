/* ENEM Lab — rotas e telas */
(function () {
  'use strict';
  var el = U.el, view = U.$('#view');

  /* ---------- Preferências de exibição (tema e tamanho da letra) ---------- */
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
  function aplicarPrefs() {
    var t = Store.cfg('tema') || 'escuro';
    if (t === 'auto') t = (mq && mq.matches) ? 'claro' : 'escuro';
    document.documentElement.dataset.tema = t;
    document.documentElement.style.fontSize = (Store.cfg('fonte') || 100) + '%';
  }
  aplicarPrefs();
  if (mq && mq.addEventListener) mq.addEventListener('change', aplicarPrefs);

  function temConteudo(d) { return d.temas.length > 0; }
  function incLabel(i) { return { alta: 'Cai muito', media: 'Cai com frequência', baixa: 'Cai menos' }[i] || ''; }
  function link(href, cls, kids) { return el('a', { href: href, class: cls }, kids); }

  /* ---------- Início ---------- */
  function diasAteProva() {
    var hoje = new Date(); hoje.setHours(0, 0, 0, 0);
    var prox = null;
    ENEM.provas.forEach(function (s) {
      var d = new Date(s + 'T00:00:00');
      var n = Math.round((d - hoje) / 86400000);
      if (n >= 0 && (prox === null || n < prox.n)) prox = { n: n, s: s };
    });
    return prox;
  }

  function telaInicio() {
    var tot = Store.totais(), seq = Store.sequencia();
    var vencendo = ENEM.cartas().filter(function (c) { return Store.vence(c.id); }).length;
    var erros = Store.erros().filter(function (id) { return ENEM.questoes().some(function (q) { return q.id === id; }); }).length;
    var p = diasAteProva();
    var cd = p ? (p.n === 0 ? 'A prova é hoje. Respire, confie no que estudou.' : 'Faltam ' + U.plural(p.n, 'dia', 'dias') + ' para a próxima prova do ENEM.') : '';

    var out = [];
    if (!Store.cfg('boasvindas')) {
      out.push(el('div', { class: 'card welcome' },
        el('h2', null, '👋 Bem-vindo(a) ao ENEM Lab'),
        el('p', null, 'Um jeito simples de estudar com técnicas que a ciência da aprendizagem comprova:'),
        el('ol', null,
          el('li', null, 'Escolha uma disciplina e leia um tema (resumo, pegadinhas e dicas).'),
          el('li', null, 'Teste-se com quiz e flashcards. Errar faz parte: os erros voltam para você refazer.'),
          el('li', null, 'Volte todo dia: os cartões reaparecem em intervalos crescentes (revisão espaçada).'),
          el('li', null, 'Use o quiz misto para treinar várias disciplinas juntas, como na prova.')),
        el('p', { class: 'hint' }, 'Tudo fica salvo no seu aparelho, sem cadastro. Em Progresso você troca o tema (claro/escuro) e o tamanho da letra.'),
        el('button', { class: 'btn primary', type: 'button', onclick: function () { Store.cfg('boasvindas', 1); render(); } }, 'Entendi, vamos lá')));
    }
    out.push(
      el('div', { class: 'card hero' },
        el('div', null, el('h1', null, 'ENEM Lab'),
          el('p', { class: 'hint' }, 'Estude com técnicas comprovadas: teste-se, espace as revisões e misture os assuntos.'),
          cd ? el('p', { class: 'countdown' }, '⏳ ', cd) : null),
        el('div', { class: 'stats' },
          el('div', { class: 'stat' }, el('b', null, '🔥 ' + seq), el('span', null, seq === 1 ? 'dia seguido' : 'dias seguidos')),
          el('div', { class: 'stat' }, el('b', null, tot.respondidas), el('span', null, 'questões respondidas')),
          el('div', { class: 'stat' }, el('b', null, U.pct(tot.acertos, tot.respondidas) + '%'), el('span', null, 'de acerto')),
          el('div', { class: 'stat' }, el('b', null, vencendo), el('span', null, 'cartões para revisar')))));
    out.push(
      el('div', { class: 'shortcuts' },
        link('#/misto', 'shortcut', [el('span', { class: 'em' }, '🎲'), 'Quiz misto', el('small', null, 'Várias disciplinas juntas (intercalação)')]),
        link('#/revisao', 'shortcut', [el('span', { class: 'em' }, '🔁'), 'Revisão do dia', el('small', null, vencendo ? vencendo + ' cartões vencidos' : 'Nada vencido agora')]),
        link('#/erros', 'shortcut', [el('span', { class: 'em' }, '📓'), 'Caderno de erros', el('small', null, erros ? erros + ' para refazer' : 'Sem erros pendentes')]),
        link('#/dicas', 'shortcut', [el('span', { class: 'em' }, '💡'), 'Dicas', el('small', null, 'Estudo, prova, redação')])));

    ENEM.areas.forEach(function (a) {
      out.push(el('h2', { class: 'area-title', dataset: { area: a.id } }, a.emoji + ' ' + a.curto));
      out.push(el('div', { class: 'grid' }, ENEM.discDaArea(a.id).map(function (d) {
        var c = ENEM.contagem(d.temas);
        return el('a', { href: '#/disc/' + d.id, class: 'disc-card' + (temConteudo(d) ? '' : ' soon'), dataset: { area: d.area } },
          el('span', { class: 'em' }, d.emoji), el('h3', null, d.nome),
          temConteudo(d)
            ? el('div', { class: 'meta' }, U.plural(c.temas, 'tema', 'temas') + ' · ' + U.plural(c.quiz, 'questão', 'questões'))
            : el('span', { class: 'tag-soon' }, 'em breve'));
      })));
    });
    return out;
  }

  /* ---------- Disciplina ---------- */
  function atividades(temas, chave, titulo, aoSair) {
    var q = ENEM.questoes(temas), c = ENEM.cartas(temas), pr = ENEM.pares(temas);
    function rodar(fn) { return function () { fn(); }; }
    var botoes = [];
    botoes.push(el('button', { class: 'btn primary act', type: 'button', disabled: !q.length, onclick: rodar(function () {
      Quiz.run(view, { titulo: 'Quiz · ' + titulo, perguntas: U.weighted(q, function (x) { return Store.peso(x.id); }, Math.min(10, q.length)), aoSair: aoSair });
    }) }, '📝 Quiz', el('small', null, Math.min(10, q.length) + ' questões')));
    botoes.push(el('button', { class: 'btn act', type: 'button', disabled: !c.length, onclick: rodar(function () {
      var dev = c.filter(function (x) { return Store.vence(x.id); });
      var lista = dev.length ? dev : c;
      Flash.run(view, { titulo: 'Flashcards · ' + titulo, cartas: U.shuffle(lista).slice(0, 20), aoSair: aoSair });
    }) }, '🗂️ Flashcards', el('small', null, c.length + ' cartões')));
    botoes.push(el('button', { class: 'btn act', type: 'button', disabled: pr.length < 3, onclick: rodar(function () {
      Memoria.run(view, { titulo: 'Memória · ' + titulo, pares: pr, chave: chave, aoSair: aoSair });
    }) }, '🧩 Jogo da memória', el('small', null, pr.length < 3 ? 'precisa de 3+ pares' : (Store.melhorJogo('mem', chave) ? 'recorde: ' + Store.melhorJogo('mem', chave) + ' jogadas' : pr.length + ' pares'))));
    botoes.push(el('button', { class: 'btn act', type: 'button', disabled: pr.length < 3, onclick: rodar(function () {
      Ligacao.run(view, { titulo: 'Ligação · ' + titulo, pares: pr, chave: chave, aoSair: aoSair });
    }) }, '🔗 Ligar conceitos', el('small', null, pr.length < 3 ? 'precisa de 3+ pares' : (Store.melhorJogo('lig', chave) != null ? 'melhor: ' + Store.melhorJogo('lig', chave) + '%' : pr.length + ' pares'))));
    return el('div', { class: 'act-grid' }, botoes);
  }

  function telaDisc(id) {
    var d = ENEM.disc(id);
    if (!d) return naoEncontrado();
    var out = [
      el('div', { class: 'crumb' }, link('#/', '', 'Início'), ' › ', ENEM.area(d.area).curto),
      el('div', { class: 'disc-head', dataset: { area: d.area } }, el('h1', null, d.emoji + ' ' + d.nome), el('p', null, d.resumo))
    ];
    if (!temConteudo(d)) {
      out.push(el('div', { class: 'card empty' }, '🚧 Esta disciplina ainda será alimentada com conteúdo.'));
      return out;
    }
    out.push(el('div', { class: 'card', dataset: { area: d.area } },
      el('h2', null, 'Praticar a disciplina inteira'),
      el('p', { class: 'hint' }, 'Quiz com questões de todos os temas, priorizando o que você errou ou ainda não viu.'),
      atividades(d.temas, d.id, d.nome, function () { render(); })));
    out.push(el('h2', null, 'Temas'));
    d.temas.forEach(function (t) {
      out.push(el('a', { href: '#/tema/' + d.id + '/' + t.id, class: 'tema-item', dataset: { area: d.area } },
        el('div', null, el('div', { class: 't-nome' }, t.nome),
          el('div', { class: 't-sub' }, U.plural(t.quiz.length, 'questão', 'questões') + ' · ' + U.plural(t.flashcards.length, 'cartão', 'cartões'))),
        el('div', null, Store.visto(t.key) ? el('span', { class: 'badge visto' }, '✔ visto') : null, el('span', { class: 'badge inc-' + t.incidencia }, incLabel(t.incidencia)))));
    });
    return out;
  }

  /* ---------- Tema ---------- */
  function bloco(cls, titulo, itens) {
    if (!itens.length) return null;
    return el('div', { class: 'card' }, el('div', { class: 'study-block ' + cls },
      el('h3', null, titulo), el('ul', null, itens.map(function (i) { return el('li', null, U.rich(i)); }))));
  }

  function telaTema(did, tid) {
    var d = ENEM.disc(did), t = ENEM.tema(did, tid);
    if (!d || !t) return naoEncontrado();
    Store.vistoTema(t.key);
    var out = [
      el('div', { class: 'crumb' }, link('#/', '', 'Início'), ' › ', link('#/disc/' + d.id, '', d.nome), ' › ', t.nome),
      el('div', { class: 'disc-head', dataset: { area: d.area } },
        el('h1', null, t.nome), el('span', { class: 'badge inc-' + t.incidencia }, incLabel(t.incidencia)),
        t.resumo ? el('p', null, U.rich(t.resumo)) : null)
    ];
    t.conceitos.forEach(function (c) {
      out.push(el('div', { class: 'card', dataset: { area: d.area } }, el('div', { class: 'study-block' }, el('h3', null, c.titulo), U.texto(c.texto))));
    });
    var peg = bloco('pega', '⚠️ Pegadinhas comuns', t.pegadinhas); if (peg) out.push(peg);
    var dic = bloco('tip', '💡 Dicas de prova', t.dicas); if (dic) out.push(dic);
    if (t.exemplo) {
      out.push(el('div', { class: 'card' }, el('h3', null, '✏️ Exemplo resolvido'),
        el('div', { class: 'ex-box' }, U.texto(t.exemplo.enunciado)),
        el('details', null, el('summary', null, 'Ver resolução'), el('div', { class: 'ex-box' }, U.texto(t.exemplo.resolucao)))));
    }
    out.push(el('div', { class: 'card', dataset: { area: d.area } }, el('h2', null, 'Praticar este tema'),
      atividades([t], t.key, t.nome, function () { render(); })));
    if (t.fontes.length) {
      out.push(el('div', { class: 'card' }, el('h3', null, 'Fontes'),
        el('ul', { class: 'fontes' }, t.fontes.map(function (f) {
          return el('li', null, f.url ? el('a', { href: f.url, target: '_blank', rel: 'noopener noreferrer' }, f.titulo) : f.titulo);
        }))));
    }
    return out;
  }

  /* ---------- Quiz misto ---------- */
  var selMisto = null, qtd = 10;
  function telaMisto() {
    var discs = ENEM.disciplinas.filter(temConteudo);
    if (!selMisto) selMisto = {};
    discs.forEach(function (d) { if (selMisto[d.id] == null) selMisto[d.id] = true; });
    var info = el('p', { class: 'hint' });
    function atualizarInfo() {
      var ts = discs.filter(function (d) { return selMisto[d.id]; }).reduce(function (a, d) { return a.concat(d.temas); }, []);
      info.textContent = U.plural(ENEM.questoes(ts).length, 'questão disponível', 'questões disponíveis') + ' na seleção.';
    }
    atualizarInfo();
    var seg = el('div', { class: 'seg' }, [5, 10, 20, 30].map(function (n) {
      var b = el('button', { class: 'btn sm' + (n === qtd ? ' on' : ''), type: 'button', onclick: function () {
        qtd = n; U.$$('.btn', seg).forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on');
      } }, String(n));
      return b;
    }));
    return [
      el('h1', null, '🎲 Quiz misto'),
      el('p', { class: 'hint' }, 'Misturar disciplinas parece mais difícil, mas treina a escolher a estratégia certa, como na prova.'),
      el('div', { class: 'card' },
        !discs.length ? el('p', null, 'Ainda não há disciplinas com conteúdo.') : null,
        el('h3', null, 'Disciplinas'),
        el('div', { class: 'chips' }, discs.map(function (d) {
          return el('label', { class: 'chip' },
            el('input', { type: 'checkbox', checked: selMisto[d.id], onchange: function (e) { selMisto[d.id] = e.target.checked; atualizarInfo(); } }),
            d.emoji + ' ' + d.nome);
        })),
        el('h3', null, 'Quantidade'), seg, info,
        el('div', { class: 'row-actions' },
          el('button', { class: 'btn primary', type: 'button', disabled: !discs.length, onclick: function () {
            var ts = discs.filter(function (d) { return selMisto[d.id]; }).reduce(function (a, d) { return a.concat(d.temas); }, []);
            var q = ENEM.questoes(ts);
            if (!q.length) { U.toast('Selecione ao menos uma disciplina.'); return; }
            Quiz.run(view, { titulo: 'Quiz misto', perguntas: U.weighted(q, function (x) { return Store.peso(x.id); }, Math.min(qtd, q.length)), aoSair: function () { render(); } });
          } }, 'Começar')))
    ];
  }

  /* ---------- Revisão e erros ---------- */
  function telaRevisao() {
    var dev = ENEM.cartas().filter(function (c) { return Store.vence(c.id); });
    if (!dev.length) return [el('h1', null, '🔁 Revisão do dia'), el('div', { class: 'card empty' }, 'Nenhum cartão vencido. Volte amanhã ou pratique um tema. 🎉'), link('#/', 'btn', 'Voltar')];
    Flash.run(view, { titulo: 'Revisão do dia', cartas: U.shuffle(dev).slice(0, 30), aoSair: function () { location.hash = '#/'; render(); } });
    return null;
  }
  function telaErros() {
    var ids = Store.erros();
    var q = ENEM.questoes().filter(function (x) { return ids.indexOf(x.id) >= 0; });
    if (!q.length) return [el('h1', null, '📓 Caderno de erros'), el('div', { class: 'card empty' }, 'Nenhum erro pendente. Cada questão que você errar entra aqui até acertar. ✅'), link('#/', 'btn', 'Voltar')];
    Quiz.run(view, { titulo: 'Caderno de erros', perguntas: U.shuffle(q).slice(0, 15), aoSair: function () { location.hash = '#/'; render(); } });
    return null;
  }

  /* ---------- Dicas ---------- */
  function telaDicas() {
    var out = [el('h1', null, '💡 Dicas'), el('p', { class: 'hint' }, 'Cada dica traz sua fonte para você conferir.')];
    window.DICAS.forEach(function (cat) {
      out.push(el('div', { class: 'card dica-cat' }, el('h2', null, cat.emoji + ' ' + cat.nome),
        cat.itens.length ? cat.itens.map(function (i) {
          return el('div', { class: 'dica' }, el('h3', null, i.titulo), el('p', null, i.texto), el('p', { class: 'fonte' }, 'Fonte: ' + i.fonte));
        }) : el('p', { class: 'hint' }, 'Em breve.')));
    });
    return out;
  }

  /* ---------- Progresso e backup ---------- */
  function opcoes(chave, lista, padrao) {
    var atual = Store.cfg(chave) || padrao;
    var box = el('div', { class: 'seg' });
    lista.forEach(function (o) {
      var b = el('button', { class: 'btn sm' + (String(o[0]) === String(atual) ? ' on' : ''), type: 'button', onclick: function () {
        Store.cfg(chave, o[0]); aplicarPrefs();
        U.$$('.btn', box).forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on');
      } }, o[1]);
      box.appendChild(b);
    });
    return box;
  }

  function telaProgresso() {
    var tot = Store.totais();
    var arq = el('input', { type: 'file', accept: 'application/json,.json', hidden: true, onchange: function (e) {
      var f = e.target.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () { try { Store.importar(String(r.result)); U.toast('Backup restaurado.'); render(); } catch (err) { U.toast('Arquivo inválido.'); } };
      r.readAsText(f);
    } });
    var linhas = ENEM.disciplinas.filter(temConteudo).map(function (d) {
      var q = ENEM.questoes(d.temas), ok = q.filter(function (x) { return Store.dominada(x.id); }).length;
      return el('div', { dataset: { area: d.area } }, el('div', null, d.emoji + ' ' + d.nome + ' — ' + ok + '/' + q.length + ' dominadas'), U.barra(U.pct(ok, q.length)));
    });
    return [
      el('h1', null, '📊 Progresso'),
      el('div', { class: 'card' },
        el('div', { class: 'stats' },
          el('div', { class: 'stat' }, el('b', null, '🔥 ' + Store.sequencia()), el('span', null, 'sequência atual')),
          el('div', { class: 'stat' }, el('b', null, Store.totalDias()), el('span', null, 'dias estudados')),
          el('div', { class: 'stat' }, el('b', null, tot.distintas), el('span', null, 'questões diferentes')),
          el('div', { class: 'stat' }, el('b', null, U.pct(tot.acertos, tot.respondidas) + '%'), el('span', null, 'de acerto'))),
        el('h3', { style: 'margin-top:14px' }, 'Por disciplina'),
        linhas.length ? linhas : el('p', { class: 'hint' }, 'Sem dados ainda.')),
      el('div', { class: 'card' }, el('h3', null, 'Aparência'),
        el('p', { class: 'hint' }, 'Tema'),
        opcoes('tema', [['escuro', 'Escuro'], ['claro', 'Claro'], ['auto', 'Automático']], 'escuro'),
        el('p', { class: 'hint', style: 'margin-top:10px' }, 'Tamanho da letra'),
        opcoes('fonte', [[100, 'Normal'], [115, 'Grande'], [130, 'Muito grande']], 100)),
      el('div', { class: 'card' }, el('h3', null, 'Backup'),
        el('p', { class: 'hint' }, 'O progresso fica só neste aparelho. Exporte para guardar ou levar a outro aparelho.'),
        el('div', { class: 'row-actions' },
          el('button', { class: 'btn', type: 'button', onclick: function () { U.download('enem-lab-backup-' + U.dayStr(U.dayIndex()) + '.json', Store.exportar()); } }, '⬇️ Exportar'),
          el('button', { class: 'btn', type: 'button', onclick: function () { arq.click(); } }, '⬆️ Importar'),
          el('button', { class: 'btn', type: 'button', onclick: function () {
            if (confirm('Apagar todo o progresso deste aparelho? Isso não pode ser desfeito.')) { Store.zerar(); U.toast('Progresso apagado.'); render(); }
          } }, '🗑️ Zerar')),
        arq)
    ];
  }

  function naoEncontrado() { return [el('h1', null, 'Página não encontrada'), link('#/', 'btn', 'Voltar ao início')]; }

  /* ---------- Roteador ---------- */
  function render() {
    var h = (location.hash || '#/').replace(/^#\/?/, '').split('/');
    var r = h[0] || '', conteudo;
    try {
      if (r === '') conteudo = telaInicio();
      else if (r === 'disc') conteudo = telaDisc(h[1]);
      else if (r === 'tema') conteudo = telaTema(h[1], h[2]);
      else if (r === 'misto') conteudo = telaMisto();
      else if (r === 'revisao') conteudo = telaRevisao();
      else if (r === 'erros') conteudo = telaErros();
      else if (r === 'dicas') conteudo = telaDicas();
      else if (r === 'progresso') conteudo = telaProgresso();
      else conteudo = naoEncontrado();
    } catch (e) {
      conteudo = [el('div', { class: 'card' }, el('h2', null, 'Algo deu errado'), el('p', { class: 'hint' }, String(e && e.message || e)))];
      if (window.console) console.error(e);
    }
    if (conteudo) view.replaceChildren.apply(view, conteudo);
    U.$$('.nav a').forEach(function (a) { a.classList.toggle('on', a.dataset.nav === (r || 'home')); });
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', render);
  render();

  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
    navigator.serviceWorker.register('sw.js').catch(function () { /* offline opcional */ });
  }
})();
