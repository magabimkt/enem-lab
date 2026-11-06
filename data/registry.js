/* ENEM Lab — registro central: áreas, disciplinas e funções de consulta.
   Para alimentar uma disciplina, edite apenas o arquivo data/d-<disciplina>.js
   (veja o modelo completo no LEIA-ME.md). */
(function () {
  'use strict';

  var AREAS = [
    { id: 'ling', nome: 'Linguagens, Códigos e suas Tecnologias', curto: 'Linguagens', emoji: '🗣️' },
    { id: 'hum', nome: 'Ciências Humanas e suas Tecnologias', curto: 'Humanas', emoji: '🌍' },
    { id: 'nat', nome: 'Ciências da Natureza e suas Tecnologias', curto: 'Natureza', emoji: '🧬' },
    { id: 'mat', nome: 'Matemática e suas Tecnologias', curto: 'Matemática', emoji: '📐' },
    { id: 'red', nome: 'Redação', curto: 'Redação', emoji: '✍️' }
  ];

  var DISCIPLINAS = [
    { id: 'portugues', area: 'ling', emoji: '📖', nome: 'Língua Portuguesa e Interpretação',
      resumo: 'Leitura e interpretação de textos, gêneros textuais, funções da linguagem, variação linguística, coesão e gramática aplicada ao texto.' },
    { id: 'literatura', area: 'ling', emoji: '📚', nome: 'Literatura',
      resumo: 'Movimentos literários brasileiros e portugueses, características de estilo, autores e leitura de trechos de obras.' },
    { id: 'estrangeira', area: 'ling', emoji: '🌐', nome: 'Língua Estrangeira (Inglês e Espanhol)',
      resumo: 'Compreensão de textos em inglês ou espanhol, vocabulário em contexto, gêneros textuais e relação entre língua e cultura.' },
    { id: 'artes-tic', area: 'ling', emoji: '🎨', nome: 'Artes, Educação Física e TIC',
      resumo: 'Linguagens artísticas e corporais, cultura digital, tecnologias da informação e comunicação e seus efeitos sociais.' },

    { id: 'historia', area: 'hum', emoji: '🏛️', nome: 'História',
      resumo: 'História do Brasil e geral: processos políticos, econômicos e culturais, cidadania, trabalho, poder e movimentos sociais.' },
    { id: 'geografia', area: 'hum', emoji: '🗺️', nome: 'Geografia',
      resumo: 'Espaço geográfico, urbanização, população, meio ambiente, geopolítica, globalização, cartografia e geografia física.' },
    { id: 'filosofia', area: 'hum', emoji: '🤔', nome: 'Filosofia',
      resumo: 'Ética, política, teoria do conhecimento e principais pensadores, com foco na aplicação dos conceitos a situações atuais.' },
    { id: 'sociologia', area: 'hum', emoji: '👥', nome: 'Sociologia',
      resumo: 'Autores clássicos, cultura, desigualdade, trabalho, instituições, movimentos sociais e cidadania.' },

    { id: 'biologia', area: 'nat', emoji: '🧫', nome: 'Biologia',
      resumo: 'Ecologia, genética, evolução, citologia, fisiologia humana, saúde pública e biotecnologia.' },
    { id: 'fisica', area: 'nat', emoji: '⚡', nome: 'Física',
      resumo: 'Mecânica, termologia, óptica, ondas, eletricidade e energia, sempre com situações do cotidiano.' },
    { id: 'quimica', area: 'nat', emoji: '⚗️', nome: 'Química',
      resumo: 'Química geral e ambiental, soluções, estequiometria, reações, termoquímica, eletroquímica e química orgânica básica.' },

    { id: 'matematica', area: 'mat', emoji: '📐', nome: 'Matemática',
      resumo: 'Razão e proporção, porcentagem, estatística, probabilidade, geometria, funções e análise de gráficos e tabelas.' },

    { id: 'redacao', area: 'red', emoji: '✍️', nome: 'Redação',
      resumo: 'Dissertação argumentativa nas cinco competências do ENEM, com foco na proposta de intervenção e no repertório sociocultural.' }
  ];

  var ENEM = {
    areas: AREAS,
    disciplinas: DISCIPLINAS,
    /* Datas das provas (AAAA-MM-DD). Atualize a cada edição. */
    provas: ['2026-11-08', '2026-11-15']
  };

  var D = {}, A = {};
  DISCIPLINAS.forEach(function (d) { d.temas = []; D[d.id] = d; });
  AREAS.forEach(function (a) { A[a.id] = a; });

  ENEM.disc = function (id) { return D[id] || null; };
  ENEM.area = function (id) { return A[id] || null; };
  ENEM.discDaArea = function (areaId) { return DISCIPLINAS.filter(function (d) { return d.area === areaId; }); };

  /* Registra os temas de uma disciplina e gera os identificadores estáveis
     (baseados no texto, então reordenar itens não apaga o progresso). */
  ENEM.temas = function (discId, lista) {
    var d = D[discId];
    if (!d) throw new Error('Disciplina desconhecida: ' + discId);
    d.temas = lista.map(function (t) {
      var tema = {
        conceitos: [], pegadinhas: [], dicas: [], fontes: [],
        flashcards: [], quiz: [], pares: [], incidencia: 'media'
      };
      Object.keys(t).forEach(function (k) { tema[k] = t[k]; });
      tema.disc = d;
      tema.key = d.id + '.' + t.id;
      tema.quiz = tema.quiz.map(function (q) {
        var o = {};
        Object.keys(q).forEach(function (k) { o[k] = q[k]; });
        o.id = tema.key + '.q' + U.hash(q.q);
        o.disc = d; o.tema = tema;
        return o;
      });
      tema.flashcards = tema.flashcards.map(function (c) {
        return { f: c.f, v: c.v, id: tema.key + '.f' + U.hash(c.f), disc: d, tema: tema };
      });
      tema.pares = tema.pares.map(function (p, i) {
        return { a: p.a, b: p.b, n: i, disc: d, tema: tema };
      });
      return tema;
    });
  };

  ENEM.tema = function (discId, temaId) {
    var d = D[discId];
    if (!d) return null;
    for (var i = 0; i < d.temas.length; i++) if (d.temas[i].id === temaId) return d.temas[i];
    return null;
  };
  ENEM.todosTemas = function () {
    return DISCIPLINAS.reduce(function (acc, d) { return acc.concat(d.temas); }, []);
  };
  function juntar(temas, campo) {
    return temas.reduce(function (acc, t) { return acc.concat(t[campo]); }, []);
  }
  ENEM.questoes = function (temas) { return juntar(temas || ENEM.todosTemas(), 'quiz'); };
  ENEM.cartas = function (temas) { return juntar(temas || ENEM.todosTemas(), 'flashcards'); };
  ENEM.pares = function (temas) { return juntar(temas || ENEM.todosTemas(), 'pares'); };
  ENEM.contagem = function (temas) {
    return {
      temas: temas.length,
      quiz: ENEM.questoes(temas).length,
      flash: ENEM.cartas(temas).length,
      pares: ENEM.pares(temas).length
    };
  };

  window.ENEM = ENEM;
})();
