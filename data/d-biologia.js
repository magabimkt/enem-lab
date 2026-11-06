/* Biologia — CONTEÚDO-EXEMPLO (1 tema curto, para testar o quiz misto entre disciplinas). */
ENEM.temas('biologia', [
  {
    id: 'cadeias-alimentares',
    nome: 'Cadeias alimentares e fluxo de energia',
    incidencia: 'alta',
    resumo: 'Níveis tróficos, regra dos 10%, ciclagem de matéria e acúmulo de substâncias ao longo da cadeia.',
    conceitos: [
      {
        titulo: 'Níveis tróficos',
        texto: '**Produtores** (autótrofos) fabricam matéria orgânica por fotossíntese ou quimiossíntese e formam a base da cadeia. **Consumidores primários** comem produtores (herbívoros); **secundários** comem os primários; **terciários** comem os secundários.\n\n**Decompositores** (fungos e bactérias) atuam em todos os níveis, devolvendo nutrientes ao ambiente.'
      },
      {
        titulo: 'Fluxo de energia: sentido único',
        texto: 'A energia entra pelo Sol, passa de um nível para o seguinte e se dissipa como calor. Ela **não volta** e **não circula**.\n\nEm média, só cerca de **10%** da energia de um nível chega ao seguinte (regra dos 10%). Por isso as cadeias costumam ter poucos níveis e a pirâmide de energia nunca é invertida.'
      },
      {
        titulo: 'Matéria circula, energia flui',
        texto: 'Carbono, nitrogênio, fósforo e outros elementos são reaproveitados em ciclos, com papel central dos decompositores. A energia, ao contrário, precisa ser reposta o tempo todo pela luz solar.'
      },
      {
        titulo: 'Bioacumulação e biomagnificação',
        texto: 'Substâncias que o organismo não degrada nem elimina (como mercúrio e DDT) se acumulam nos tecidos. Como o predador come muitos indivíduos do nível anterior, a **concentração aumenta a cada nível** — o contrário do que acontece com a energia.'
      }
    ],
    pegadinhas: [
      'A seta da cadeia alimentar aponta de quem **é comido** para quem **come** (sentido do fluxo de energia).',
      'Energia não circula; matéria circula. Questões costumam trocar os dois.',
      'A pirâmide de números pode ser invertida (uma árvore com muitos insetos), mas a de energia **nunca** é.',
      'Decompositores não são "o último nível": agem em todos os níveis.'
    ],
    dicas: [
      'Desenhe a cadeia com setas antes de ler as alternativas.',
      'Em contas de energia, aplique ×0,1 a cada nível, uma vez por seta.',
      'Se a questão fala de substância tóxica, pense em biomagnificação: o maior valor está no topo.'
    ],
    exemplo: {
      enunciado: 'Os produtores de um ecossistema fixam 10.000 kcal. Pela regra dos 10%, quanto de energia chega aos consumidores secundários?',
      resolucao: 'Produtores → primários: 10% de 10.000 = 1.000 kcal.\nPrimários → secundários: 10% de 1.000 = **100 kcal**.'
    },
    fontes: [
      { titulo: 'INEP — Matriz de Referência do ENEM (Ciências da Natureza e suas Tecnologias)', url: '' }
    ],
    flashcards: [
      { f: 'O que são produtores?', v: 'Organismos autótrofos que fabricam matéria orgânica (fotossíntese ou quimiossíntese). Base da cadeia.' },
      { f: 'Quem são os consumidores primários?', v: 'Os herbívoros: eles se alimentam diretamente dos produtores.' },
      { f: 'Qual o papel dos decompositores?', v: 'Degradam restos de seres vivos e devolvem nutrientes ao ambiente, agindo em todos os níveis.' },
      { f: 'Regra dos 10%', v: 'Em média, só cerca de 10% da energia de um nível trófico passa para o nível seguinte.' },
      { f: 'O que é uma teia alimentar?', v: 'Conjunto de várias cadeias alimentares interligadas em um ecossistema.' },
      { f: 'O que é biomagnificação?', v: 'Aumento da concentração de uma substância não degradável a cada nível trófico, com máximo no topo.' }
    ],
    quiz: [
      {
        dif: 'facil',
        q: 'Em uma cadeia alimentar, os organismos que produzem a própria matéria orgânica a partir de substâncias inorgânicas e de uma fonte de energia são os',
        alt: ['produtores.', 'consumidores primários.', 'consumidores secundários.', 'decompositores.', 'consumidores terciários.'],
        c: 0,
        exp: 'Os autótrofos (por fotossíntese ou quimiossíntese) são **produtores** e sustentam todos os outros níveis.'
      },
      {
        dif: 'medio',
        q: 'Em um ecossistema, os produtores fixam 20.000 kcal por ano. Aplicando a regra dos 10%, a energia disponível para os consumidores secundários é de',
        alt: ['20 kcal', '200 kcal', '2.000 kcal', '4.000 kcal', '18.000 kcal'],
        c: 1,
        exp: 'Produtores → primários: 10% de 20.000 = 2.000 kcal. Primários → secundários: 10% de 2.000 = **200 kcal**.'
      },
      {
        dif: 'medio',
        q: 'Sobre o fluxo de energia e a ciclagem de matéria em um ecossistema, é correto afirmar que',
        alt: [
          'a energia flui em sentido único e a matéria é reaproveitada em ciclos.',
          'a energia e a matéria circulam indefinidamente entre os níveis tróficos.',
          'a matéria flui em sentido único e a energia é reciclada pelos decompositores.',
          'a energia é totalmente transferida de um nível trófico ao seguinte.',
          'nem a energia nem a matéria são perdidas entre os níveis tróficos.'
        ],
        c: 0,
        exp: 'A energia entra pelo Sol, passa pelos níveis e se dissipa como calor: não volta. Já a **matéria** (carbono, nitrogênio, fósforo...) é reciclada, principalmente pelos decompositores.'
      },
      {
        dif: 'dificil',
        q: 'Um metal pesado não degradável é lançado em um lago e absorvido pelo fitoplâncton. Ao longo da cadeia alimentar, a concentração dessa substância tende a ser',
        alt: [
          'maior nos organismos do topo da cadeia, pois se acumula a cada nível trófico.',
          'maior nos produtores, porque são os primeiros a absorvê-la.',
          'igual em todos os níveis tróficos.',
          'menor nos predadores de topo, por causa da perda de energia entre os níveis.',
          'eliminada pelos decompositores, que a degradam.'
        ],
        c: 0,
        exp: 'É a **biomagnificação**: o organismo não degrada nem excreta a substância, e o predador ingere muitos indivíduos do nível anterior. A concentração sobe a cada nível, enquanto a energia disponível diminui.'
      }
    ],
    pares: [
      { a: 'Produtor', b: 'Base da cadeia (autótrofo)' },
      { a: 'Consumidor primário', b: 'Herbívoro' },
      { a: 'Decompositor', b: 'Devolve nutrientes ao ambiente' },
      { a: 'Regra dos 10%', b: 'Energia que passa ao nível seguinte' },
      { a: 'Biomagnificação', b: 'Concentração maior no topo da cadeia' },
      { a: 'Teia alimentar', b: 'Várias cadeias interligadas' }
    ]
  }
]);
