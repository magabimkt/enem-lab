/* Literatura — Linguagens, Códigos e suas Tecnologias.
   A prova costuma pedir: relacionar texto, contexto histórico e características da escola literária. */
(function () {
  var F = {
    inep: { titulo: 'INEP — Matrizes de Referência do Enem (competências e habilidades de Linguagens)', url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem' },
    critica: { titulo: 'A Crítica (MS) — Enem 2026: professores indicam o que revisar na prova de Linguagens', url: 'https://acritica.net/educacao/enem-2026-professores-indicam-o-que-revisar-para-a-prova-de-linguagens/' },
    estrategia: { titulo: 'Estratégia Vestibulares — Assuntos que mais caem no Enem (análise de 1998 a 2020)', url: 'https://vestibulares.estrategia.com/portal/enem-e-vestibulares/enem/assuntos-que-mais-caem-no-enem/' },
    bosi: { titulo: 'BOSI, A. História concisa da literatura brasileira (obra de referência)', url: '' },
    candido: { titulo: 'CANDIDO, A. Formação da literatura brasileira / Literatura e sociedade (obras de referência)', url: '' }
  };

  ENEM.temas('literatura', [
    /* ============ 1. TEORIA LITERÁRIA ============ */
    {
      id: 'teoria-literaria',
      nome: 'Teoria literária: gêneros, narrador e versificação',
      incidencia: 'alta',
      resumo: 'Em levantamentos de questões antigas, a teoria literária aparece tanto quanto a história da literatura. Saber ler um poema ou um trecho de romance vale mais do que decorar listas de autores.',
      conceitos: [
        {
          titulo: 'Gêneros literários',
          texto: '- **Lírico**: expressa emoções e visões de mundo de um **eu lírico** (não confunda com o poeta). Poema, soneto, canção.\n- **Narrativo (épico)**: conta uma história com **narrador, personagens, tempo e espaço**. Romance, conto, novela, crônica, epopeia.\n- **Dramático**: feito para ser encenado; usa **diálogos e rubricas** (indicações de cena), sem narrador. Peças teatrais.\n\nUma letra de música pode ser lírica; um poema longo pode ter narrador (épico). O que define é o **modo** como se constrói o texto.'
        },
        {
          titulo: 'Narrador e foco narrativo',
          texto: '- **1ª pessoa**: narrador é personagem ("Eu cheguei..."); conhece só a sua versão. Pode ser **não confiável** (Bentinho em *Dom Casmurro*).\n- **3ª pessoa onisciente**: sabe tudo, inclusive pensamentos.\n- **3ª pessoa observador**: só vê o que se pode observar de fora.\n- **Discurso direto**: fala do personagem, com travessão. **Indireto**: o narrador conta. **Indireto livre**: voz do narrador e do personagem se misturam.\n- **Tempo cronológico** (relógio) e **psicológico** (como a mente vivencia; memória, fluxo de consciência).'
        },
        {
          titulo: 'Versificação: verso, estrofe, rima, métrica',
          texto: '- **Verso**: linha do poema. **Estrofe**: grupo de versos (dístico 2, terceto 3, quarteto 4, quintilha 5, sextilha 6, oitava 8).\n- **Soneto**: 14 versos (2 quartetos + 2 tercetos).\n- **Rima**: semelhança de sons finais. **Verso livre**: sem métrica nem rima fixas; **verso branco**: métrica sem rima.\n- **Métrica**: contagem das sílabas até a última tônica. **Redondilha menor** (5), **redondilha maior** (7), **decassílabo** (10).\n- **Linguagem conotativa**: sentido figurado (comum na literatura). **Denotativa**: sentido literal.'
        }
      ],
      pegadinhas: [
        'Confundir **eu lírico** (voz criada no poema) com o poeta real.',
        'Achar que todo texto em 1ª pessoa é autobiografia: o narrador é uma **construção literária**.',
        'Responder que a literatura é só "arte" sem relação com a sociedade: o ENEM cobra a **relação entre texto e contexto histórico**.',
        'Confundir **verso livre** (sem regras fixas) com poema "sem forma": ele tem ritmo e escolhas conscientes.'
      ],
      dicas: [
        'Em questão de poema, identifique: **quem fala (eu lírico), com quem, sobre o quê, com que imagens**.',
        'Em prosa, localize o **narrador** e pergunte se há ironia, parcialidade ou ponto de vista limitado.',
        'Marque as palavras de sentido **figurado** e traduza em uma frase simples.'
      ],
      exemplo: {
        enunciado: 'Em um romance, o narrador é também personagem e conta a história em 1ª pessoa ("eu vi", "eu senti"), como Bentinho em *Dom Casmurro*. Que efeito essa escolha produz?',
        resolucao: 'O narrador em 1ª pessoa só conhece a **própria perspectiva**, por isso o leitor não tem certeza dos fatos. O efeito é a **dúvida** (em *Dom Casmurro*, sobre a fidelidade de Capitu) e a necessidade de ler com atenção ao que o narrador omite ou distorce.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.candido],
      flashcards: [
        { f: 'Quais são os três gêneros literários clássicos?', v: 'Lírico, narrativo (épico) e dramático.' },
        { f: 'O que é eu lírico?', v: 'A voz que fala no poema; não é necessariamente o poeta.' },
        { f: 'Narrador onisciente: o que sabe?', v: 'Tudo: ações, pensamentos e sentimentos dos personagens.' },
        { f: 'O que é discurso indireto livre?', v: 'Mistura da voz do narrador com a do personagem, sem marcas explícitas.' },
        { f: 'Quantos versos tem um soneto?', v: '14 (dois quartetos e dois tercetos).' },
        { f: 'Verso livre x verso branco', v: 'Livre: sem métrica nem rima fixas. Branco: tem métrica, mas sem rima.' },
        { f: 'O que é rubrica no teatro?', v: 'Indicação de cena, gestos ou entonação escrita para a encenação.' },
        { f: 'Tempo psicológico?', v: 'O tempo como é vivido na mente (memória, lembranças), não o do relógio.' }
      ],
      quiz: [
        {
          q: 'Um poema inicia com "Tenho medo do silêncio que se instala após a madrugada". A voz que expressa emoções e visão de mundo no poema é chamada de',
          alt: ['eu lírico', 'narrador onisciente', 'rubrica', 'personagem-protagonista', 'eu épico'],
          c: 0, dif: 'facil',
          exp: 'A voz que fala em poemas líricos, expressando seus sentimentos, é o eu lírico.'
        },
        {
          q: 'Um texto é composto por falas em sequência, antecedidas pelo nome de quem fala, e indicações como "(sai de cena, nervoso)". Esse texto pertence ao gênero',
          alt: ['dramático', 'lírico', 'épico', 'ensaístico', 'epistolar'],
          c: 0, dif: 'facil',
          exp: 'Falas e indicações de cena (rubricas) são características do texto dramático, feito para ser encenado.'
        },
        {
          q: 'No romance "Dom Casmurro", Bentinho conta a história de seu casamento sob seu ponto de vista. Esse recurso faz o leitor',
          alt: ['desconfiar da versão do narrador, que é parte interessada', 'ter acesso à verdade absoluta dos fatos', 'conhecer o pensamento de todos os personagens', 'ler uma narrativa sem subjetividade', 'ler um texto exclusivamente descritivo'],
          c: 0, dif: 'medio',
          exp: 'Como narrador em 1ª pessoa e personagem diretamente envolvido, Bentinho oferece uma versão parcial, o que gera ambiguidade.'
        },
        {
          q: 'No trecho "Chegou cansada em casa. Ah, o que fiz da minha vida, se eu tivesse escolhido outro caminho?", há mistura da voz do narrador com o pensamento da personagem. Essa técnica é o',
          alt: ['discurso indireto livre', 'discurso direto', 'monólogo teatral', 'diálogo com travessão', 'resumo jornalístico'],
          c: 0, dif: 'medio',
          exp: 'Sem verbo de elocução ou aspas, a voz do narrador mistura-se à da personagem. É o discurso indireto livre.'
        },
        {
          q: 'Um poema é formado por dois quartetos e dois tercetos. Esse tipo de composição é chamado de',
          alt: ['soneto', 'haicai', 'epopeia', 'trova', 'ode'],
          c: 0, dif: 'facil',
          exp: 'Dois quartetos e dois tercetos totalizam 14 versos, a estrutura do soneto.'
        },
        {
          q: 'Em um conto, a personagem relembra a infância de modo fragmentado, misturando cenas e sensações, sem seguir uma ordem de datas. Essa organização do tempo é',
          alt: ['psicológica', 'cronológica', 'linear', 'dramática', 'objetiva'],
          c: 0, dif: 'medio',
          exp: 'O tempo organizado pela memória e pela subjetividade da personagem é psicológico.'
        },
        {
          q: 'Em um romance, o texto afirma: "Ele fingia calma, mas por dentro o coração disparava". A observação sobre o interior da personagem só é possível porque o narrador é',
          alt: ['de 3ª pessoa, com acesso aos sentimentos', 'de 3ª pessoa, apenas observador', 'de 1ª pessoa, testemunha dos fatos', 'um personagem secundário sem acesso aos pensamentos', 'o próprio leitor da obra'],
          c: 0, dif: 'dificil',
          exp: 'Revelar o interior de uma personagem indica narrador de 3ª pessoa com acesso aos pensamentos (onisciente).'
        },
        {
          q: 'Em uma crítica literária, afirma-se: "Em vez de rimar, o poeta escolheu o verso livre". Isso significa que o poema',
          alt: ['não segue métrica nem rima fixas, mas tem ritmo próprio', 'não tem qualquer ritmo ou estrutura', 'segue rigorosamente a métrica de dez sílabas', 'é um soneto tradicional', 'é um texto em prosa'],
          c: 0, dif: 'dificil',
          exp: 'O verso livre dispensa métrica e rima fixas, mas conserva ritmo e construção deliberada.'
        }
      ],
      pares: [
        { a: 'Eu lírico', b: 'Voz que fala no poema' },
        { a: 'Rubrica', b: 'Indicação de cena no teatro' },
        { a: 'Soneto', b: '14 versos (2 quartetos + 2 tercetos)' },
        { a: 'Verso livre', b: 'Sem métrica e rima fixas' },
        { a: 'Onisciente', b: 'Narrador que sabe tudo' },
        { a: 'Discurso indireto livre', b: 'Voz do narrador e do personagem misturadas' },
        { a: 'Tempo psicológico', b: 'Tempo vivido na memória' },
        { a: 'Conotação', b: 'Sentido figurado' }
      ]
    },

    /* ============ 2. QUINHENTISMO, BARROCO, ARCADISMO ============ */
    {
      id: 'barroco-arcadismo',
      nome: 'Quinhentismo, Barroco e Arcadismo',
      incidencia: 'media',
      resumo: 'As escolas do período colonial: do texto informativo sobre a terra nova ao conflito entre fé e razão, e depois ao retorno ao campo e à razão iluminista.',
      conceitos: [
        {
          titulo: 'Quinhentismo (séc. XVI)',
          texto: 'Não é "literatura brasileira" ainda: são textos de portugueses sobre a nova terra.\n\n- **Literatura informativa**: relatos de viajantes e colonizadores. A **Carta de Pero Vaz de Caminha** (1500) descreve natureza e indígenas com olhar europeu.\n- **Literatura jesuítica**: padres como **José de Anchieta** usam poesia e teatro para catequizar.'
        },
        {
          titulo: 'Barroco (séc. XVII)',
          texto: 'Marcado pelo conflito entre **fé x razão, céu x terra, espírito x matéria, pecado x perdão**. É o século da Contrarreforma.\n\n- **Linguagem**: antíteses, paradoxos, hipérboles, jogos de palavras (**cultismo**) e jogos de ideias (**conceptismo**).\n- **Gregório de Matos** ("Boca do Inferno"): poesia lírica, religiosa e **satírica**, que critica a sociedade baiana.\n- **Padre Antônio Vieira**: sermões que unem argumentação e crítica social (como o *Sermão de Santo Antônio aos Peixes*, que usa a metáfora dos peixes para criticar a exploração dos indígenas pelos colonos).'
        },
        {
          titulo: 'Arcadismo (séc. XVIII)',
          texto: 'Reação ao exagero barroco, ligada ao **Iluminismo** (razão, equilíbrio, simplicidade).\n\n- **Bucolismo**: ambiente campestre idealizado, **pastor** e **pastora** como personagens (fingimento poético).\n- **Lemas**: *locus amoenus* (lugar ameno), *fugere urbem* (fugir da cidade), *carpe diem* (aproveitar o dia), *aurea mediocritas* (vida simples e equilibrada).\n- **Tomás Antônio Gonzaga** (*Marília de Dirceu*), **Cláudio Manuel da Costa**, **Basílio da Gama** (*O Uraguai*). Ligado à **Inconfidência Mineira**.'
        }
      ],
      pegadinhas: [
        'Confundir **Barroco** (conflito, tensão, antíteses) com **Arcadismo** (equilíbrio, simplicidade, natureza).',
        'Classificar a Carta de Caminha como "literatura brasileira": é **literatura informativa** feita por um português.',
        'Esquecer que Gregório de Matos tem lírica, religiosa **e** satírica; no ENEM aparece muito a **crítica social**.',
        'Tomar o "pastor" arcádico como pessoa real: é um **fingimento poético**.'
      ],
      dicas: [
        'Barroco = **dilema** (palavras como "Deus", "pecado", "morte", contraste). Arcadismo = **natureza tranquila**, razão, equilíbrio.',
        'Conecte cada escola ao **contexto**: Barroco/Contrarreforma, Arcadismo/Iluminismo e Inconfidência.',
        'Antítese e paradoxo são sinais fortes de Barroco.'
      ],
      exemplo: {
        enunciado: 'Um poema fala de um "pastor" que vive em paz no campo, longe da agitação da cidade, e convida a amada a aproveitar o dia. A qual escola pertence e por quê?',
        resolucao: '**Arcadismo**: o pastor (fingimento poético), o campo ameno (*locus amoenus*), a fuga da cidade (*fugere urbem*) e o convite a aproveitar o momento (*carpe diem*) são traços típicos da escola.'
      },
      fontes: [F.inep, F.estrategia, F.bosi, F.candido],
      flashcards: [
        { f: 'Que obra é considerada marco do Quinhentismo?', v: 'A Carta de Pero Vaz de Caminha (1500).' },
        { f: 'Literatura jesuítica: objetivo?', v: 'Catequizar indígenas (ex.: José de Anchieta).' },
        { f: 'Conflitos centrais do Barroco', v: 'Fé x razão, céu x terra, espírito x matéria, pecado x perdão.' },
        { f: 'Quem foi "Boca do Inferno"?', v: 'Gregório de Matos, poeta barroco satírico.' },
        { f: 'Cultismo x conceptismo', v: 'Cultismo: jogo de palavras e imagens. Conceptismo: jogo de ideias e raciocínio.' },
        { f: 'O que é bucolismo?', v: 'Cenário campestre idealizado, com pastores e natureza tranquila.' },
        { f: 'Significado de "carpe diem"', v: 'Aproveite o dia, o momento presente.' },
        { f: 'Autor de Marília de Dirceu', v: 'Tomás Antônio Gonzaga (Arcadismo).' }
      ],
      quiz: [
        {
          q: 'Em um texto de 1500, um escrivão descreve ao rei de Portugal a terra recém-encontrada, os habitantes e a natureza. Esse tipo de texto pertence a',
          alt: ['literatura informativa do Quinhentismo', 'poesia romântica nacionalista', 'prosa realista de crítica social', 'teatro barroco', 'lírica simbolista'],
          c: 0, dif: 'facil',
          exp: 'Os relatos de viajantes e colonizadores do século XVI compõem a literatura informativa do Quinhentismo.'
        },
        {
          q: 'Um poeta escreve: "Pequei, Senhor, mas não porque hei pecado, / Da vossa alta clemência me despido". O conflito entre pecado e perdão, típico de uma escola do século XVII, caracteriza o',
          alt: ['Barroco', 'Arcadismo', 'Romantismo', 'Parnasianismo', 'Modernismo'],
          c: 0, dif: 'medio',
          exp: 'O dilema entre culpa e salvação, expresso com tensão, é típico do Barroco.'
        },
        {
          q: 'No Sermão de Santo Antônio aos Peixes, Vieira critica a exploração dos indígenas usando a imagem dos peixes que se devoram. Esse recurso é',
          alt: ['uma alegoria usada para criticar a sociedade colonial', 'um relato objetivo sem intenção crítica', 'um poema sentimental', 'uma descrição científica da fauna', 'uma carta de apresentação'],
          c: 0, dif: 'medio',
          exp: 'Vieira utiliza a imagem dos peixes de forma alegórica para criticar os colonos. A crítica social é uma das marcas do sermão.'
        },
        {
          q: 'Um poema apresenta um pastor que vive em harmonia com a natureza, afasta-se da cidade e busca uma vida simples e equilibrada. Os traços revelam',
          alt: ['bucolismo e a ideia de aurea mediocritas do Arcadismo', 'pessimismo e angústia diante da morte', 'crítica social e denúncia da miséria urbana', 'experimentação do verso livre e do coloquial', 'determinismo biológico e científico'],
          c: 0, dif: 'medio',
          exp: 'Pastor, campo e vida simples são traços do Arcadismo (bucolismo, aurea mediocritas).'
        },
        {
          q: 'O uso frequente de antíteses e paradoxos, como "morrer é viver" e "luz e trevas", em um poema do século XVII é recurso característico do',
          alt: ['Barroco', 'Arcadismo', 'Realismo', 'Parnasianismo', 'Concretismo'],
          c: 0, dif: 'facil',
          exp: 'Antíteses e paradoxos expressam o conflito interior do homem barroco.'
        },
        {
          q: '"Marília de Dirceu", de Tomás Antônio Gonzaga, usa o pseudônimo de pastor "Dirceu" para o poeta. Essa construção é chamada de',
          alt: ['fingimento poético árcade', 'alegoria religiosa barroca', 'monólogo dramático realista', 'invocação épica às musas', 'narrador não confiável moderno'],
          c: 0, dif: 'medio',
          exp: 'No Arcadismo, poetas assumem nomes de pastores (pseudônimos) como convenção: é o fingimento poético.'
        },
        {
          q: 'Entre as características do Arcadismo, o lema "fugere urbem" significa',
          alt: ['fugir da cidade para a vida simples do campo', 'aproveitar o dia', 'unir fé e razão', 'idealizar a mulher amada como um ser inatingível', 'a arte pela arte'],
          c: 0, dif: 'facil',
          exp: '"Fugere urbem" é "fugir da cidade", valorizando o campo.'
        },
        {
          q: 'Entre a poesia de Gregório de Matos e a de Cláudio Manuel da Costa, uma diferença é que',
          alt: ['o primeiro é barroco e satírico; o segundo, árcade e mais equilibrado', 'ambos são românticos e subjetivos', 'o primeiro é parnasiano e o segundo, simbolista', 'ambos escreveram apenas relatos de viagem', 'o primeiro foi modernista'],
          c: 0, dif: 'dificil',
          exp: 'Gregório de Matos (séc. XVII) é barroco, com sátira social. Cláudio Manuel da Costa (séc. XVIII) pertence ao Arcadismo, de equilíbrio e razão.'
        }
      ],
      pares: [
        { a: 'Carta de Caminha', b: 'Literatura informativa' },
        { a: 'Anchieta', b: 'Literatura jesuítica' },
        { a: 'Barroco', b: 'Conflito fé x razão' },
        { a: 'Gregório de Matos', b: 'Poeta barroco satírico' },
        { a: 'Padre Vieira', b: 'Sermões com crítica social' },
        { a: 'Arcadismo', b: 'Bucolismo e razão' },
        { a: 'Fugere urbem', b: 'Fugir da cidade' },
        { a: 'Marília de Dirceu', b: 'Obra árcade de Gonzaga' }
      ]
    },

    /* ============ 3. ROMANTISMO ============ */
    {
      id: 'romantismo',
      nome: 'Romantismo no Brasil',
      incidencia: 'alta',
      resumo: 'O Romantismo valoriza emoção, subjetividade e identidade nacional. É base para entender indianismo, "mal do século" e poesia social e abolicionista.',
      conceitos: [
        {
          titulo: 'Características gerais',
          texto: 'Surge no século XIX, com a Independência do Brasil (1822) e a busca de uma **identidade nacional**.\n\n- **Subjetivismo e sentimentalismo**: emoção acima da razão.\n- **Idealização**: da mulher, do herói, da natureza.\n- **Nacionalismo e exaltação da natureza**.\n- **Escapismo**: fuga da realidade (sonho, morte, passado).\n- **Medievalismo** e **ufanismo**.'
        },
        {
          titulo: 'Três gerações poéticas',
          texto: '- **1ª geração (nacionalista/indianista)**: **Gonçalves Dias**, o índio como herói nacional e a natureza exaltada. "Canção do Exílio" ("Minha terra tem palmeiras...") exalta a pátria em saudade.\n- **2ª geração (ultrarromântica, "mal do século")**: **Álvares de Azevedo**, **Casimiro de Abreu**. Pessimismo, tédio, morte, amor impossível, escapismo.\n- **3ª geração (condoreira/social)**: **Castro Alves**, o "poeta dos escravos". Poesia social e abolicionista ("O Navio Negreiro"), com imagens grandiosas (o condor).'
        },
        {
          titulo: 'Prosa romântica',
          texto: '- **Romance indianista**: **José de Alencar** (*O Guarani*, *Iracema*), idealiza o indígena e a formação do povo brasileiro.\n- **Romance urbano**: Alencar (*Senhora*, *Lucíola*) e **Joaquim Manuel de Macedo** (*A Moreninha*), com amores e costumes da corte.\n- **Romance regionalista**: Alencar (*O Sertanejo*).\n- **Romance de costumes**: **Manuel Antônio de Almeida**, *Memórias de um Sargento de Milícias* (retrato bem-humorado da vida popular do Rio, protagonista malandro).'
        }
      ],
      pegadinhas: [
        'Confundir a **1ª geração** (nacionalismo, indígena herói) com a **3ª** (poesia social, abolição).',
        'Dizer que o índio de Alencar é "realista": é **idealizado**, quase cavaleiro medieval.',
        'Atribuir à "Canção do Exílio" crítica à pátria: é uma **exaltação saudosa**, e depois foi parodiada no Modernismo (Oswald de Andrade).',
        'Pensar que o Romantismo é só amor: tem forte componente **nacionalista e social**.'
      ],
      dicas: [
        'Em poemas, sentimento + natureza exaltada + pátria = 1ª geração; morte e tédio = 2ª; denúncia e imagem grandiosa = 3ª.',
        'Em questões comparativas, cuidado com **paródia** da Canção do Exílio (Oswald de Andrade, Murilo Mendes) no Modernismo.',
        'Procure no texto a **idealização**: ela é marca-chave do Romantismo.'
      ],
      exemplo: {
        enunciado: 'Um poema descreve a dor de um navio negreiro e convoca a nação a abolir a escravidão, com imagens grandiosas e tom de denúncia. A qual geração romântica pertence?',
        resolucao: 'À **3ª geração (condoreira ou social)**, representada por **Castro Alves**. As imagens grandiosas e o apelo abolicionista são marcas dessa fase.'
      },
      fontes: [F.inep, F.critica, F.estrategia, F.bosi],
      flashcards: [
        { f: 'Marco histórico do Romantismo no Brasil?', v: 'Independência (1822) e a busca por identidade nacional.' },
        { f: 'Principal poeta da 1ª geração romântica', v: 'Gonçalves Dias ("Canção do Exílio", I-Juca-Pirama).' },
        { f: 'O que é "mal do século"?', v: 'Pessimismo, tédio e morbidez da 2ª geração (Álvares de Azevedo).' },
        { f: 'Quem foi o "poeta dos escravos"?', v: 'Castro Alves (3ª geração, condoreirismo).' },
        { f: 'Obra indianista de José de Alencar', v: 'O Guarani e Iracema.' },
        { f: 'Qual a característica de "Memórias de um Sargento de Milícias"?', v: 'Romance de costumes sobre a vida popular do Rio de Janeiro, com protagonista malandro.' },
        { f: 'O que é escapismo?', v: 'Fuga da realidade para o sonho, a morte ou o passado.' },
        { f: 'Quem escreveu "A Moreninha"?', v: 'Joaquim Manuel de Macedo (romance urbano).' }
      ],
      quiz: [
        {
          q: 'O verso "Minha terra tem palmeiras, onde canta o sabiá" é marcado pela exaltação da natureza e pela saudade da pátria. Ele é típico da',
          alt: ['1ª geração romântica (nacionalista)', '2ª geração romântica (ultrarromântica)', '3ª geração romântica (condoreira)', 'primeira fase modernista', 'escola barroca'],
          c: 0, dif: 'facil',
          exp: 'A exaltação da pátria e da natureza e o nacionalismo marcam a 1ª geração romântica, de Gonçalves Dias.'
        },
        {
          q: 'Um poeta jovem escreve sobre a morte, o tédio e o amor impossível, em tom de pessimismo. Esses temas caracterizam a geração conhecida como',
          alt: ['ultrarromântica (mal do século)', 'condoreira', 'parnasiana', 'concretista', 'indianista'],
          c: 0, dif: 'facil',
          exp: 'Pessimismo, tédio, morte e amor impossível são marcas da 2ª geração romântica.'
        },
        {
          q: 'Em Iracema, José de Alencar apresenta a indígena como símbolo de pureza e a união dela com o colonizador como origem do povo brasileiro. Esse tratamento revela',
          alt: ['idealização e nacionalismo típicos do Romantismo', 'descrição científica de um povo', 'crítica realista ao colonizador', 'humor modernista', 'determinismo biológico'],
          c: 0, dif: 'medio',
          exp: 'O indígena é idealizado e ligado à construção de uma identidade nacional, traços românticos.'
        },
        {
          q: '"Senhor Deus dos desgraçados! Dizei-me vós, Senhor Deus..." é um trecho de "O Navio Negreiro". A obra é caracterizada pela',
          alt: ['denúncia social e abolicionista', 'defesa do mercado escravista', 'neutralidade científica', 'exaltação do campo', 'preocupação com a forma perfeita'],
          c: 0, dif: 'medio',
          exp: 'Castro Alves denuncia o tráfico negreiro, e sua poesia tem tom social e abolicionista.'
        },
        {
          q: 'O que diferencia Memórias de um Sargento de Milícias de outros romances românticos de seu tempo?',
          alt: ['retrata a vida popular com humor e um protagonista malandro', 'idealiza o indígena como herói medieval', 'defende teses científicas deterministas', 'valoriza o rigor formal da poesia', 'apresenta fluxo de consciência'],
          c: 0, dif: 'dificil',
          exp: 'O romance de Manuel Antônio de Almeida foge à idealização e retrata costumes populares com humor e malandragem.'
        },
        {
          q: 'A "Canção do Exílio" de Gonçalves Dias foi retomada, com humor e crítica, por poetas modernistas como Oswald de Andrade. Essa relação é uma',
          alt: ['paródia', 'paráfrase fiel', 'citação sem alteração', 'tradução', 'reprodução idêntica'],
          c: 0, dif: 'medio',
          exp: 'Os modernistas imitam o poema para criticar o ufanismo romântico, caracterizando paródia.'
        },
        {
          q: 'Ao idealizar a mulher como ser puro e inatingível, um poeta romântico revela',
          alt: ['o idealismo sentimental da época', 'a influência do Realismo', 'uma visão científica do amor', 'a crítica social modernista', 'o rigor técnico parnasiano'],
          c: 0, dif: 'facil',
          exp: 'A mulher idealizada é traço do Romantismo, que prioriza o sentimento e a fantasia.'
        },
        {
          q: 'Entre o poema nacionalista de Gonçalves Dias e o poema social de Castro Alves, a principal mudança de foco é',
          alt: ['do nacionalismo e da natureza para a crítica social', 'do campo para a cidade científica e industrial', 'da razão iluminista para a mitologia grega', 'da denúncia social para o humor modernista', 'do verso livre para o soneto parnasiano'],
          c: 0, dif: 'dificil',
          exp: 'A 3ª geração amplia o Romantismo para a causa social (abolição) com linguagem grandiosa.'
        }
      ],
      pares: [
        { a: 'Gonçalves Dias', b: '1ª geração, indianismo' },
        { a: 'Álvares de Azevedo', b: '2ª geração, mal do século' },
        { a: 'Castro Alves', b: '3ª geração, poesia abolicionista' },
        { a: 'José de Alencar', b: 'Iracema e O Guarani' },
        { a: 'Idealização', b: 'Marca do Romantismo' },
        { a: 'Escapismo', b: 'Fuga da realidade' },
        { a: 'Memórias de um Sargento de Milícias', b: 'Romance de costumes' },
        { a: 'Canção do Exílio', b: 'Saudade e exaltação da pátria' }
      ]
    },

    /* ============ 4. REALISMO E NATURALISMO ============ */
    {
      id: 'realismo-naturalismo',
      nome: 'Realismo, Naturalismo e Machado de Assis',
      incidencia: 'alta',
      resumo: 'Depois do sonho romântico, a literatura passa a analisar a sociedade com olhar crítico. Machado de Assis é o nome mais cobrado.',
      conceitos: [
        {
          titulo: 'Realismo (a partir de 1881)',
          texto: 'Marco: *Memórias Póstumas de Brás Cubas* (Machado de Assis, 1881).\n\n- **Objetividade** e análise psicológica.\n- **Crítica social**: hipocrisia da burguesia, adultério, interesse, casamento por conveniência.\n- **Personagens complexos**, reais, contraditórios (não mais heróis idealizados).\n- **Ironia e pessimismo**.\n- Linguagem direta, descrições precisas.'
        },
        {
          titulo: 'Machado de Assis',
          texto: '- *Memórias Póstumas de Brás Cubas* (1881): narrador **defunto-autor**, ironia e quebra da linearidade; crítica à elite.\n- *Quincas Borba* (1891): filosofia do "Humanitismo", sátira.\n- *Dom Casmurro* (1899): narrador em 1ª pessoa, Bentinho, que acusa Capitu de adultério; o **leitor não tem certeza**.\n\nMarcas: **ironia**, narrador que dialoga com o leitor, análise psicológica, crítica social sutil.'
        },
        {
          titulo: 'Naturalismo',
          texto: 'Extensão do Realismo, com influência do **cientificismo** e do **determinismo** (o ser humano é produto de **meio, raça e momento**).\n\n- Personagens guiados por instintos, doenças e condições sociais; **zoomorfização** (comparação com animais).\n- Linguagem mais crua; denúncia da miséria.\n- **Aluísio Azevedo**, *O Cortiço* (1890): o cortiço é quase um personagem; coletivo.\n- Outros: Adolfo Caminha (*Bom-Crioulo*), Raul Pompeia (*O Ateneu*, aproxima-se do impressionismo).'
        }
      ],
      pegadinhas: [
        'Confundir **Realismo** (análise psicológica, ironia) com **Naturalismo** (determinismo, instintos, patologias).',
        'Achar que Machado é "romântico" por escrever sobre amor: ele **desconstrói** o romantismo com ironia.',
        'Tomar a versão de Bentinho como verdade absoluta: ele é parte interessada.',
        'Esquecer que *O Cortiço* tem o **espaço coletivo** como centro da história.'
      ],
      dicas: [
        'Procure **ironia** e distanciamento crítico para identificar Machado.',
        'Determinismo, animalização e meio social apontam para **Naturalismo**.',
        'Questões comparam Romantismo (idealização) x Realismo (crítica e análise): leia as marcas.'
      ],
      exemplo: {
        enunciado: 'Um trecho descreve um grupo de moradores pobres, tratados como animais, dominados por instintos e pela condição do ambiente em que vivem. Qual a escola?',
        resolucao: '**Naturalismo**: determinismo (meio condiciona o homem), zoomorfização e descrição crua. Exemplo clássico: *O Cortiço*.'
      },
      fontes: [F.inep, F.critica, F.estrategia, F.candido],
      flashcards: [
        { f: 'Qual obra inaugura o Realismo no Brasil?', v: 'Memórias Póstumas de Brás Cubas (1881), de Machado de Assis.' },
        { f: 'Marcas do estilo de Machado', v: 'Ironia, narrador que dialoga com o leitor, análise psicológica e crítica social.' },
        { f: 'Quem narra Dom Casmurro?', v: 'Bentinho (Dom Casmurro), narrador em 1ª pessoa e não confiável.' },
        { f: 'O que é determinismo?', v: 'Ideia de que meio, raça e momento determinam o comportamento humano.' },
        { f: 'O que é zoomorfização?', v: 'Descrever seres humanos como animais.' },
        { f: 'Quem escreveu O Cortiço?', v: 'Aluísio Azevedo (Naturalismo).' },
        { f: 'Diferença central entre Romantismo e Realismo', v: 'Romantismo idealiza; Realismo analisa e critica a realidade.' },
        { f: 'O que é um narrador defunto-autor?', v: 'Narrador que conta a própria história depois de morto (Brás Cubas).' }
      ],
      quiz: [
        {
          q: 'No romance Memórias Póstumas de Brás Cubas, o narrador conta sua vida depois de morto, com ironia e distanciamento. Essa construção é característica do',
          alt: ['Realismo de Machado de Assis', 'indianismo romântico', 'simbolismo místico', 'concretismo', 'barroco religioso'],
          c: 0, dif: 'facil',
          exp: 'O defunto-autor, a ironia e a crítica social marcam o Realismo machadiano.'
        },
        {
          q: 'Em Dom Casmurro, o leitor fica sem saber se Capitu traiu Bentinho porque',
          alt: ['a narração parte de Bentinho, parte interessada', 'o narrador é onisciente e totalmente imparcial', 'a história é contada pela própria Capitu', 'o romance não possui narrador definido', 'a trama é apresentada em forma de diálogo teatral'],
          c: 0, dif: 'medio',
          exp: 'A narrativa em 1ª pessoa de Bentinho, parte interessada, deixa a verdade em aberto.'
        },
        {
          q: 'A descrição de personagens guiados por instintos, determinados por meio social e hereditariedade, é característica do',
          alt: ['Naturalismo', 'Romantismo', 'Arcadismo', 'Simbolismo', 'Modernismo'],
          c: 0, dif: 'facil',
          exp: 'O Naturalismo tem base cientificista e determinista.'
        },
        {
          q: 'Em O Cortiço, o ambiente de moradia coletiva é praticamente um personagem. Esse destaque ao espaço mostra',
          alt: ['o meio como força sobre o comportamento humano', 'a fuga da realidade para o sonho e a morte', 'a vida simples e tranquila do campo', 'a perfeição formal da arte pela arte', 'a idealização do herói nacional'],
          c: 0, dif: 'medio',
          exp: 'O determinismo do meio é traço naturalista: o ambiente molda os personagens.'
        },
        {
          q: 'A diferença entre a protagonista idealizada de um romance romântico e as personagens de Machado de Assis está em que as de Machado são',
          alt: ['complexas e contraditórias, vistas com análise crítica', 'puras e perfeitas, sem conflitos internos', 'símbolos idealizados da identidade nacional', 'cavaleiros inspirados em ideais medievais', 'figuras fantásticas, sem relação com o real'],
          c: 0, dif: 'medio',
          exp: 'No Realismo, os personagens deixam de ser idealizados e passam a ser retratados com complexidade psicológica.'
        },
        {
          q: 'O narrador de "Memórias Póstumas" afirma dedicar a obra "ao verme que primeiro roeu as frias carnes do meu cadáver". Esse tom evidencia',
          alt: ['ironia e pessimismo do Realismo machadiano', 'sentimentalismo ufanista do Romantismo', 'otimismo e simplicidade do Arcadismo', 'exaltação religiosa do Barroco colonial', 'experimentação visual da poesia concreta'],
          c: 0, dif: 'dificil',
          exp: 'A dedicatória inesperada ao verme revela ironia, humor negro e pessimismo.'
        },
        {
          q: 'Entre as semelhanças entre Realismo e Naturalismo está a',
          alt: ['crítica social e a observação da realidade', 'idealização da natureza e do herói', 'busca da arte pela arte', 'uso do verso livre como regra', 'exaltação nacionalista da pátria'],
          c: 0, dif: 'dificil',
          exp: 'Ambos observam e criticam a sociedade, embora o Naturalismo enfatize o determinismo científico.'
        },
        {
          q: 'A obra O Ateneu, de Raul Pompeia, retrata um colégio interno como espaço de competição e hipocrisia. Essa crítica às instituições mostra',
          alt: ['denúncia social na prosa do fim do século XIX', 'valorização árcade do equilíbrio e da vida campestre', 'ufanismo e idealização do período romântico', 'experimentalismo da Semana de Arte Moderna', 'misticismo e sugestão dos poetas simbolistas'],
          c: 0, dif: 'dificil',
          exp: 'O Ateneu critica a instituição escolar e a sociedade, tendência da prosa realista-naturalista.'
        }
      ],
      pares: [
        { a: 'Machado de Assis', b: 'Ironia e análise psicológica' },
        { a: 'Brás Cubas', b: 'Narrador defunto-autor' },
        { a: 'Dom Casmurro', b: 'Narrador parcial e dúvida' },
        { a: 'Naturalismo', b: 'Determinismo e cientificismo' },
        { a: 'O Cortiço', b: 'Espaço coletivo e miséria' },
        { a: 'Zoomorfização', b: 'Humano descrito como animal' },
        { a: 'Aluísio Azevedo', b: 'Autor de O Cortiço' },
        { a: 'Realismo', b: 'Observa e critica a sociedade' }
      ]
    },

    /* ============ 5. PARNASIANISMO, SIMBOLISMO E PRÉ-MODERNISMO ============ */
    {
      id: 'parnasiano-simbolismo-pre',
      nome: 'Parnasianismo, Simbolismo e Pré-Modernismo',
      incidencia: 'media',
      resumo: 'Entre o fim do século XIX e 1922, três movimentos disputam espaço: a forma perfeita, a sugestão e a denúncia do Brasil real.',
      conceitos: [
        {
          titulo: 'Parnasianismo',
          texto: 'Lema: **"arte pela arte"**. Valoriza **forma rígida, objetividade, rima rica, métrica perfeita (soneto)** e temas clássicos. Linguagem culta e descrição precisa.\n\n- **Olavo Bilac** ("Profissão de Fé", "Ora (direis) ouvir estrelas"), Alberto de Oliveira, Raimundo Correia.\n- Desinteresse pelo social e pelo sentimento exposto (contrasta com o Romantismo).'
        },
        {
          titulo: 'Simbolismo',
          texto: 'Reação ao Parnasianismo e ao cientificismo. Valoriza o **subjetivo, o místico, o sonho, o inconsciente**.\n\n- **Musicalidade**: aliteração, assonância; **sinestesia** (mistura de sentidos); imagens vagas e sugestivas.\n- **Cruz e Sousa** (*Broquéis*, 1893; poeta negro que expressa dor e transcendência), **Alphonsus de Guimaraens** (misticismo).'
        },
        {
          titulo: 'Pré-Modernismo (1902–1922)',
          texto: 'Não é escola com um estilo único, mas um período de **transição** em que autores olham criticamente o Brasil real.\n\n- **Euclides da Cunha**: *Os Sertões* (1902), sobre Canudos; denuncia o abandono do sertanejo ("o sertanejo é, antes de tudo, um forte").\n- **Lima Barreto**: *Triste Fim de Policarpo Quaresma* (1915), crítica ao nacionalismo ingênuo e à burocracia.\n- **Monteiro Lobato**: *Urupês* (Jeca Tatu), visão do caipira.\n- **Augusto dos Anjos**: poesia com vocabulário científico e tom pessimista.'
        }
      ],
      pegadinhas: [
        'Confundir **Parnasianismo** (forma, objetividade, "arte pela arte") com **Simbolismo** (subjetividade, sugestão, misticismo).',
        'Tomar Pré-Modernismo como "modernismo": é anterior à Semana de 22 e ainda mantém traços tradicionais de linguagem.',
        'Esquecer que **Cruz e Sousa** é simbolista e Bilac, parnasiano.',
        'Achar que *Os Sertões* é apenas literatura de viagem: é obra de **denúncia social** com base científica e literária.'
      ],
      dicas: [
        'Sinestesia, vagueza e musicalidade = **Simbolismo**. Soneto perfeito e descrição objetiva = **Parnasianismo**.',
        'Pré-modernista = **crítica do Brasil real** (sertão, subúrbio, burocracia).',
        'Em dúvida entre escolas, procure o **tom** (emocional x frio, místico x racional, social x formal).'
      ],
      exemplo: {
        enunciado: 'Um poema usa "som azul" e "perfume branco", com palavras que sugerem em vez de descrever. Qual escola?',
        resolucao: 'Mistura de sensações (**sinestesia**) e linguagem sugestiva apontam para o **Simbolismo**. O Parnasianismo preferiria descrição objetiva e precisa.'
      },
      fontes: [F.inep, F.estrategia, F.bosi, F.candido],
      flashcards: [
        { f: 'Lema do Parnasianismo', v: 'Arte pela arte: valorização da forma, da perfeição e da objetividade.' },
        { f: 'Principais parnasianos', v: 'Olavo Bilac, Alberto de Oliveira e Raimundo Correia.' },
        { f: 'Principal poeta simbolista brasileiro', v: 'Cruz e Sousa (Broquéis).' },
        { f: 'O que é sinestesia?', v: 'Mistura de sensações de sentidos diferentes (cheiro "azul", som "doce").' },
        { f: 'Obra que denuncia a Guerra de Canudos', v: 'Os Sertões, de Euclides da Cunha (1902).' },
        { f: 'Quem escreveu Triste Fim de Policarpo Quaresma?', v: 'Lima Barreto.' },
        { f: 'Personagem associado ao Pré-Modernismo de Lobato', v: 'Jeca Tatu (Urupês).' },
        { f: 'O que é Pré-Modernismo?', v: 'Período de transição (1902–1922) com crítica social e ruptura inicial.' }
      ],
      quiz: [
        {
          q: 'Um poeta defende que o poema deve ser trabalhado como "uma joia", com rimas ricas e métrica perfeita, sem expor sentimentos pessoais. Essa visão é típica do',
          alt: ['Parnasianismo', 'Romantismo', 'Simbolismo', 'Modernismo', 'Arcadismo'],
          c: 0, dif: 'facil',
          exp: 'A valorização da forma e a objetividade da "arte pela arte" caracterizam o Parnasianismo.'
        },
        {
          q: 'Em versos como "Ó Formas alvas, brancas, formas claras / De luares, de neves, de neblinas", predominam sugestão, musicalidade e imagens vagas. Esse estilo é do',
          alt: ['Simbolismo', 'Parnasianismo', 'Naturalismo', 'Realismo', 'Pré-Modernismo'],
          c: 0, dif: 'medio',
          exp: 'Sugestão, aliteração, musicalidade e vagueza são traços do Simbolismo (Cruz e Sousa).'
        },
        {
          q: 'O livro "Os Sertões" combina descrição geográfica, análise social e narrativa da Guerra de Canudos. A obra é importante porque',
          alt: ['denuncia o abandono do sertanejo e o massacre', 'idealiza o indígena como herói nacional', 'celebra a modernidade e a vida urbana', 'defende a arte pela arte e a forma perfeita', 'exalta o pastoralismo e a vida bucólica'],
          c: 0, dif: 'medio',
          exp: 'Euclides da Cunha expõe o massacre de Canudos e o descaso do poder público, traço pré-modernista.'
        },
        {
          q: 'Em "Triste Fim de Policarpo Quaresma", o protagonista, nacionalista ingênuo, termina frustrado e punido. A obra critica',
          alt: ['o nacionalismo ufanista e a burocracia', 'o pessimismo barroco', 'a ciência', 'a defesa do soneto', 'o determinismo racial'],
          c: 0, dif: 'dificil',
          exp: 'Lima Barreto critica o nacionalismo ingênuo e as instituições, tema do Pré-Modernismo.'
        },
        {
          q: 'A personagem Jeca Tatu, criada por Monteiro Lobato, representa',
          alt: ['o caipira pobre, doente e atrasado', 'um herói indígena idealizado', 'o operário urbano organizado', 'um pastor árcade apaixonado', 'um burguês do Segundo Império'],
          c: 0, dif: 'medio',
          exp: 'Jeca Tatu simboliza, na visão de Lobato, o caipira abandonado e doente do início do século XX.'
        },
        {
          q: 'Entre os traços que distinguem o Simbolismo do Parnasianismo está',
          alt: ['a subjetividade e a sugestão, em oposição à objetividade', 'a rigidez formal e a descrição precisa', 'a defesa da razão iluminista', 'o uso do verso livre como regra', 'a linguagem coloquial'],
          c: 0, dif: 'medio',
          exp: 'O Simbolismo rejeita a frieza parnasiana e valoriza a subjetividade, o sonho e a sugestão.'
        },
        {
          q: 'Em um poema de Augusto dos Anjos aparecem expressões como "verme" e "protoplasma" para falar da condição humana. Esse vocabulário',
          alt: ['mistura termos científicos com tom pessimista', 'idealiza o amor pastoril', 'valoriza o nacionalismo ufanista', 'adota a linguagem coloquial modernista', 'segue o lirismo árcade'],
          c: 0, dif: 'dificil',
          exp: 'A poesia de Augusto dos Anjos une vocabulário científico e pessimismo, de modo singular.'
        },
        {
          q: 'O poeta Cruz e Sousa é fundamental na literatura brasileira porque',
          alt: ['expressou dor e transcendência como poeta simbolista', 'criou o Realismo brasileiro no século XIX', 'foi o principal nome da poesia parnasiana', 'inaugurou o romance regionalista nordestino', 'escreveu a Carta de Pero Vaz de Caminha'],
          c: 0, dif: 'medio',
          exp: 'Poeta negro e simbolista, Cruz e Sousa expressou sofrimento e anseio de transcendência em uma sociedade excludente.'
        }
      ],
      pares: [
        { a: 'Olavo Bilac', b: 'Parnasianismo' },
        { a: 'Cruz e Sousa', b: 'Simbolismo' },
        { a: 'Euclides da Cunha', b: 'Os Sertões' },
        { a: 'Lima Barreto', b: 'Policarpo Quaresma' },
        { a: 'Monteiro Lobato', b: 'Jeca Tatu' },
        { a: 'Sinestesia', b: 'Mistura de sentidos' },
        { a: 'Arte pela arte', b: 'Lema parnasiano' },
        { a: 'Augusto dos Anjos', b: 'Pessimismo e termos científicos' }
      ]
    },

    /* ============ 6. MODERNISMO 1ª FASE ============ */
    {
      id: 'modernismo-primeira-fase',
      nome: 'Modernismo: Semana de 22 e a 1ª fase',
      incidencia: 'alta',
      resumo: 'É o movimento mais cobrado: a ruptura com a tradição, a valorização da língua falada, do humor e da cultura brasileira.',
      conceitos: [
        {
          titulo: 'Semana de Arte Moderna (1922)',
          texto: 'Ocorreu no Theatro Municipal de São Paulo, em fevereiro de 1922, no centenário da Independência. Reuniu artistas que defendiam a **ruptura com a tradição acadêmica** e a **liberdade de criação**.\n\nInfluência das **vanguardas europeias** (Futurismo, Cubismo, Expressionismo, Dadaísmo, Surrealismo), mas com foco em **temas e língua brasileiros**.'
        },
        {
          titulo: 'Características da 1ª fase (1922–1930)',
          texto: '- **Verso livre** e abandono da métrica e rima rígidas.\n- **Linguagem coloquial**, próxima da fala do povo, com humor, ironia e **paródia**.\n- **Nacionalismo crítico**: olhar para o Brasil sem idealização.\n- **Cotidiano** como tema (cidade, trabalho, imigrantes).\n- **Experimentação** e valorização da cultura popular.'
        },
        {
          titulo: 'Principais nomes',
          texto: '- **Mário de Andrade**: *Paulicéia Desvairada* (1922), *Macunaíma* (1928, "herói sem nenhum caráter", mistura de lendas brasileiras).\n- **Oswald de Andrade**: **Manifesto Pau-Brasil** (1924) e **Manifesto Antropófago** (1928): devorar a cultura estrangeira e transformá-la ("Tupi or not tupi"). Poemas-piada e paródia da "Canção do Exílio".\n- **Manuel Bandeira**: "Os Sapos" (crítica ao Parnasianismo), "Poética", "Vou-me embora pra Pasárgada".\n- **Alcântara Machado**: *Brás, Bexiga e Barra Funda* (imigrantes italianos em São Paulo).\n- **Tarsila do Amaral** e **Anita Malfatti** nas artes visuais.'
        }
      ],
      pegadinhas: [
        'Achar que o Modernismo **copiou** a Europa: absorveu as vanguardas, mas criou algo com **identidade brasileira**.',
        'Confundir **antropofagia** (devorar o estrangeiro para recriá-lo) com rejeição à cultura de fora.',
        'Dizer que "Os Sapos", de Bandeira, é parnasiano: é **crítica** ao Parnasianismo.',
        'Esquecer que a **linguagem coloquial** é deliberada e artística, não "falta de cuidado".'
      ],
      dicas: [
        'Verso livre, humor, coloquial e paródia = **1ª fase modernista**.',
        'Em questão sobre "Pau-Brasil" ou "Antropofagia", procure a ideia de **absorver e transformar**.',
        'Se há paródia da "Canção do Exílio", lembre que é um recurso modernista.'
      ],
      exemplo: {
        enunciado: 'Um poema curto, em linguagem coloquial, brinca com a "Canção do Exílio", trocando as palmeiras por elementos do cotidiano. Que movimento e que recurso?',
        resolucao: '**Modernismo (1ª fase)**, com **paródia** e humor para criticar o ufanismo romântico e valorizar a linguagem e a realidade brasileiras.'
      },
      fontes: [F.inep, F.critica, F.estrategia, F.bosi],
      flashcards: [
        { f: 'Onde e quando ocorreu a Semana de Arte Moderna?', v: 'No Theatro Municipal de São Paulo, em fevereiro de 1922.' },
        { f: 'Características formais do Modernismo', v: 'Verso livre, linguagem coloquial, humor, ironia e paródia.' },
        { f: 'O que é antropofagia cultural?', v: 'Absorver e transformar criticamente a cultura estrangeira (Oswald de Andrade).' },
        { f: 'Macunaíma é definido como…', v: '"Herói sem nenhum caráter" (Mário de Andrade, 1928).' },
        { f: 'Poema de Bandeira que critica o Parnasianismo', v: '"Os Sapos".' },
        { f: 'Quem escreveu o Manifesto Pau-Brasil?', v: 'Oswald de Andrade (1924).' },
        { f: 'Obra sobre imigrantes italianos em SP', v: 'Brás, Bexiga e Barra Funda (Alcântara Machado).' },
        { f: 'Principais artistas visuais da 1ª fase', v: 'Tarsila do Amaral e Anita Malfatti.' }
      ],
      quiz: [
        {
          q: 'A Semana de Arte Moderna, em 1922, é considerada marco porque',
          alt: ['propôs a ruptura com padrões acadêmicos e a valorização da cultura nacional', 'restaurou a poesia parnasiana', 'introduziu o Romantismo no país', 'defendeu a imitação de modelos europeus clássicos', 'exaltou o ufanismo do século XIX'],
          c: 0, dif: 'facil',
          exp: 'O evento marcou a ruptura com padrões tradicionais e a busca de uma expressão artística brasileira.'
        },
        {
          q: 'Um poema usa verso livre, linguagem do dia a dia e tom humorístico para falar da cidade e do cotidiano. A estética mais provável é a do',
          alt: ['Modernismo (1ª fase)', 'Arcadismo', 'Barroco', 'Parnasianismo', 'Simbolismo'],
          c: 0, dif: 'facil',
          exp: 'Verso livre, coloquial e humor são marcas do primeiro Modernismo.'
        },
        {
          q: 'O Manifesto Antropófago, de Oswald de Andrade, propõe',
          alt: ['devorar a cultura estrangeira e recriá-la', 'isolar o país de toda influência externa', 'copiar fielmente as vanguardas europeias', 'retomar a tradição árcade e o bucolismo', 'exaltar o indianismo e o ufanismo românticos'],
          c: 0, dif: 'medio',
          exp: 'A antropofagia cultural é a ideia de absorver influências externas e recriá-las com identidade própria.'
        },
        {
          q: 'O herói de Macunaíma é definido como "sem nenhum caráter" porque',
          alt: ['reúne traços contraditórios, sem moral fixa', 'é um nobre cavaleiro de moral irrepreensível', 'é um cientista guiado pelo determinismo', 'é um poeta simbolista de vida mística', 'é um estrangeiro que descobre o país'],
          c: 0, dif: 'medio',
          exp: '"Sem caráter" significa sem identidade fixa: é um herói múltiplo e contraditório, reflexo do povo brasileiro.'
        },
        {
          q: 'Em "Os Sapos", de Manuel Bandeira, os sapos discutem poesia e a perfeição do verso. O poema funciona como',
          alt: ['sátira ao Parnasianismo', 'elogio ao formalismo parnasiano', 'poema épico', 'sermão religioso', 'relato de viagem'],
          c: 0, dif: 'medio',
          exp: 'O poema satiriza a rigidez e a vaidade parnasiana, tema defendido na Semana de 22.'
        },
        {
          q: 'A paródia de "Canção do Exílio" feita por modernistas tem como objetivo principal',
          alt: ['criticar o ufanismo e valorizar a realidade nacional', 'repetir a exaltação romântica da pátria', 'defender o nacionalismo ingênuo do século XIX', 'retomar o bucolismo e o equilíbrio árcades', 'resgatar o conflito religioso do Barroco'],
          c: 0, dif: 'dificil',
          exp: 'Ao parodiar, os modernistas dialogam criticamente com o texto original e propõem outra visão do país.'
        },
        {
          q: 'No Brasil, as vanguardas europeias (Cubismo, Futurismo, Surrealismo) foram',
          alt: ['absorvidas e reelaboradas com temas brasileiros', 'copiadas sem nenhuma adaptação local', 'rejeitadas por completo pelos artistas', 'ignoradas até meados da década de 1950', 'restritas apenas à pintura acadêmica'],
          c: 0, dif: 'dificil',
          exp: 'Os modernistas conheciam as vanguardas, mas as reinterpretaram com identidade nacional.'
        },
        {
          q: 'O livro "Brás, Bexiga e Barra Funda" retrata',
          alt: ['o cotidiano de imigrantes italianos em bairros de São Paulo', 'a vida de um pastor árcade', 'a corte portuguesa no Brasil colonial', 'a miséria do sertão nordestino', 'a elite do Segundo Império'],
          c: 0, dif: 'dificil',
          exp: 'Antônio de Alcântara Machado retrata imigrantes italianos e a cidade em transformação.'
        }
      ],
      pares: [
        { a: 'Semana de 22', b: 'Marco do Modernismo' },
        { a: 'Mário de Andrade', b: 'Macunaíma' },
        { a: 'Oswald de Andrade', b: 'Manifesto Antropófago' },
        { a: 'Manuel Bandeira', b: '"Os Sapos"' },
        { a: 'Verso livre', b: 'Sem métrica e rima fixas' },
        { a: 'Paródia', b: 'Imitação com crítica' },
        { a: 'Antropofagia', b: 'Devorar e transformar o estrangeiro' },
        { a: 'Tarsila do Amaral', b: 'Artista visual modernista' }
      ]
    },

    /* ============ 7. MODERNISMO 2ª E 3ª FASES ============ */
    {
      id: 'modernismo-segunda-terceira',
      nome: 'Modernismo: 2ª e 3ª fases (1930 em diante)',
      incidencia: 'alta',
      resumo: 'Prosa social do Nordeste, poesia de Drummond, introspecção de Clarice, linguagem de Guimarães Rosa e a poesia de João Cabral.',
      conceitos: [
        {
          titulo: '2ª fase (1930–1945): consolidação e crítica social',
          texto: '**Prosa regionalista e social**, com foco no Nordeste, seca, coronelismo e desigualdade:\n\n- **Graciliano Ramos**: *Vidas Secas* (1938), linguagem seca e enxuta, família de retirantes; *São Bernardo*; *Memórias do Cárcere*.\n- **Rachel de Queiroz**: *O Quinze* (seca de 1915).\n- **José Lins do Rego**, **Jorge Amado** (*Capitães da Areia*, meninos de rua em Salvador).\n\n**Poesia**: **Carlos Drummond de Andrade** ("No meio do caminho", "Poema de sete faces", "A rosa do povo"), poesia social e existencial, gauche; **Cecília Meireles**, **Vinicius de Moraes**, **Murilo Mendes**.'
        },
        {
          titulo: '3ª fase / Geração de 45 (a partir de 1945)',
          texto: '- **Clarice Lispector**: introspecção, fluxo de consciência, **epifania** (momento de revelação). *A Hora da Estrela* (Macabéa).\n- **Guimarães Rosa**: *Sagarana*, *Grande Sertão: Veredas* (1956); **linguagem inventiva**, neologismos, oralidade, o sertão como universo.\n- **João Cabral de Melo Neto**: "poesia de engenharia", precisão, concretude; *Morte e Vida Severina*.\n- **Ariano Suassuna**: *Auto da Compadecida* (cultura popular nordestina).\n- **Poesia concreta** (anos 50): uso do espaço da página e da visualidade (Noigandres).'
        },
        {
          titulo: 'Como reconhecer cada autor no texto',
          texto: '- Frases curtas, secas, falta de palavras, ambiente de seca = **Graciliano**.\n- Mundo interior, sensações, reflexões íntimas e momentos de revelação = **Clarice**.\n- Palavras inventadas, ritmo de fala sertaneja e mistura de erudito com popular = **Guimarães Rosa**.\n- Objetividade, imagens concretas, repetição, a miséria e a luta = **João Cabral**.\n- Humor sutil, cotidiano, dúvida existencial e crítica social = **Drummond**.'
        }
      ],
      pegadinhas: [
        'Confundir a **1ª fase** (ruptura, humor, experimentação) com a **2ª** (consolidação, crítica social profunda, regionalismo).',
        'Esquecer que **Clarice** é introspectiva (tema interior) e não regionalista.',
        'Achar que a linguagem seca de Graciliano é "pobreza": ela espelha a vida dos personagens.',
        'Confundir Guimarães Rosa com regionalismo "folclórico": é **experimentação de linguagem** universal.'
      ],
      dicas: [
        'Se o texto é sobre seca, miséria e fome, pense em **Graciliano, Rachel de Queiroz, João Cabral**.',
        'Questões sobre linguagem inventiva e oralidade = **Guimarães Rosa**.',
        'Nos poemas de Drummond, observe a **atitude do eu lírico** (gauche, tímido, solidário).'
      ],
      exemplo: {
        enunciado: 'Em um romance, a família de retirantes é descrita com frases curtas, pouca fala e imagens secas, como a paisagem do sertão. Que autor e escola?',
        resolucao: '**Graciliano Ramos (*Vidas Secas*)**, na 2ª fase do Modernismo. A linguagem enxuta espelha a aridez da paisagem e a falta de recursos dos personagens.'
      },
      fontes: [F.inep, F.critica, F.estrategia, F.bosi],
      flashcards: [
        { f: 'Tema central da prosa de 30', v: 'Crítica social e regionalismo: seca, miséria, coronelismo.' },
        { f: 'Quem escreveu Vidas Secas?', v: 'Graciliano Ramos (1938).' },
        { f: 'Marca da escrita de Clarice Lispector', v: 'Introspecção, fluxo de consciência e epifania.' },
        { f: 'Marca de Guimarães Rosa', v: 'Linguagem inventiva, neologismos e oralidade sertaneja.' },
        { f: 'Principal obra de Guimarães Rosa', v: 'Grande Sertão: Veredas (1956).' },
        { f: 'Marca da poesia de João Cabral', v: 'Precisão, concretude e "poesia de engenharia".' },
        { f: 'Poeta de "No meio do caminho"', v: 'Carlos Drummond de Andrade.' },
        { f: 'Quem escreveu Capitães da Areia?', v: 'Jorge Amado.' }
      ],
      quiz: [
        {
          q: 'Um romance retrata uma família de retirantes na seca, com linguagem concisa e direta, quase sem diálogo. Essa construção lembra a obra de',
          alt: ['Graciliano Ramos', 'Clarice Lispector', 'Machado de Assis', 'Olavo Bilac', 'José de Alencar'],
          c: 0, dif: 'facil',
          exp: 'Vidas Secas apresenta linguagem econômica que reflete a aridez e a privação das personagens.'
        },
        {
          q: 'Um conto acompanha uma mulher que, durante tarefas cotidianas, vive um momento de profunda revelação interior. Essa técnica é característica de',
          alt: ['Clarice Lispector', 'Jorge Amado', 'Alencar', 'Cruz e Sousa', 'Castro Alves'],
          c: 0, dif: 'medio',
          exp: 'A epifania, momento de revelação interior, é marca da prosa introspectiva de Clarice Lispector.'
        },
        {
          q: 'Quando um autor cria neologismos e usa a oralidade sertaneja de forma poética em uma narrativa, ele aproxima-se de',
          alt: ['Guimarães Rosa', 'Aluísio Azevedo', 'Gonçalves Dias', 'Bilac', 'Euclides da Cunha'],
          c: 0, dif: 'medio',
          exp: 'Guimarães Rosa reinventa a linguagem a partir da fala do sertão.'
        },
        {
          q: 'Em "No meio do caminho tinha uma pedra", Drummond repete a frase e o termo "pedra", o que',
          alt: ['cria ritmo e enfatiza o obstáculo e o sentimento de bloqueio', 'revela uma descrição científica da pedra', 'ilustra o romantismo ufanista', 'demonstra o formalismo parnasiano', 'sugere crítica à religião'],
          c: 0, dif: 'medio',
          exp: 'A repetição enfatiza o obstáculo e a obsessão com ele. É recurso modernista, de linguagem simples e impacto forte.'
        },
        {
          q: 'A poesia de João Cabral de Melo Neto, em "Morte e Vida Severina", retrata',
          alt: ['a vida do retirante, em linguagem objetiva', 'a vida na corte do Segundo Império', 'o amor idealizado de uma donzela', 'o cotidiano de pastores árcades', 'o sofrimento místico de um simbolista'],
          c: 0, dif: 'medio',
          exp: 'O poema narra o percurso de um retirante e foca em uma realidade dura, com precisão e concretude.'
        },
        {
          q: 'O que diferencia a prosa social dos anos 30 da prosa de Clarice Lispector é que a primeira',
          alt: ['volta-se ao social; a segunda, ao mundo interior', 'rejeita por completo a linguagem escrita', 'é escrita inteiramente em versos metrificados', 'tem caráter místico e simbolista', 'trata do ideal clássico greco-romano'],
          c: 0, dif: 'dificil',
          exp: 'A literatura de 30 focaliza a realidade social. Clarice concentra-se na introspecção e na consciência.'
        },
        {
          q: 'Em Capitães da Areia, Jorge Amado retrata meninos de rua em Salvador. A obra se insere na tendência de',
          alt: ['romance social e de denúncia da década de 1930', 'poesia concreta', 'indianismo romântico', 'literatura informativa do século XVI', 'Simbolismo'],
          c: 0, dif: 'dificil',
          exp: 'A obra aborda marginalização e injustiça, característica do romance social de 30.'
        },
        {
          q: 'A poesia concreta valoriza',
          alt: ['a visualidade das palavras e o espaço da página', 'a métrica rígida', 'o sentimentalismo exacerbado', 'o tom narrativo e épico', 'a linguagem rebuscada do Barroco'],
          c: 0, dif: 'dificil',
          exp: 'Os poetas concretos exploram o aspecto visual, sonoro e espacial das palavras.'
        }
      ],
      pares: [
        { a: 'Graciliano Ramos', b: 'Vidas Secas' },
        { a: 'Clarice Lispector', b: 'Introspecção e epifania' },
        { a: 'Guimarães Rosa', b: 'Grande Sertão: Veredas' },
        { a: 'Drummond', b: '"No meio do caminho"' },
        { a: 'João Cabral', b: 'Morte e Vida Severina' },
        { a: 'Jorge Amado', b: 'Capitães da Areia' },
        { a: 'Rachel de Queiroz', b: 'O Quinze' },
        { a: 'Poesia concreta', b: 'Visualidade da palavra' }
      ]
    },

    /* ============ 8. LITERATURA CONTEMPORÂNEA ============ */
    {
      id: 'literatura-contemporanea',
      nome: 'Literatura contemporânea: vozes negras, indígenas e periféricas',
      incidencia: 'alta',
      resumo: 'Provas recentes valorizam autores que dão voz a grupos antes silenciados. Entender o conceito e os nomes ajuda em interpretação e redação.',
      conceitos: [
        {
          titulo: 'Literatura afro-brasileira',
          texto: '- **Carolina Maria de Jesus**: *Quarto de Despejo* (1960), diário de uma catadora de papel moradora da favela do Canindé (SP). Retrato da fome e da exclusão.\n- **Conceição Evaristo**: *Ponciá Vicêncio* (2003); cunhou o conceito de **escrevivência**, a escrita que nasce da experiência de mulheres negras e transforma a vivência em literatura.\n- **Ana Maria Gonçalves**: *Um Defeito de Cor* (2006), romance histórico.\n- **Itamar Vieira Junior**: *Torto Arado* (2019), vida de trabalhadoras rurais e herança da escravidão.'
        },
        {
          titulo: 'Literatura indígena',
          texto: 'Autores indígenas contam suas próprias histórias e questionam a imagem idealizada do índio do Romantismo.\n\n- **Daniel Munduruku**: livros infantis e juvenis; valoriza saberes e memória.\n- **Eliane Potiguara**: poesia e defesa de direitos.\n- **Ailton Krenak**: *Ideias para adiar o fim do mundo* (2019), reflexão sobre natureza e modo de vida.\n- **Davi Kopenawa e Bruce Albert**: *A queda do céu*.'
        },
        {
          titulo: 'Poesia marginal, periférica e popular',
          texto: '- **Poesia marginal (anos 70)**: poemas curtos, coloquiais, distribuídos em mimeógrafo (Cacaso, Ana Cristina Cesar, **Paulo Leminski**).\n- **Literatura periférica**: nasce nas periferias urbanas. **Ferréz** (*Capão Pecado*, 2000), saraus (como a **Cooperifa**), slams, rap (**Racionais MC\'s**).\n- **Cordel**: tradição nordestina em versos, vendida em folhetos, com **Patativa do Assaré** e Leandro Gomes de Barros.\n- Tema comum: **denúncia social, identidade, memória e resistência**.'
        }
      ],
      pegadinhas: [
        'Achar que é "literatura menor": ela é **literatura** com valor estético e crítico.',
        'Confundir **escrevivência** com biografia comum: é um **conceito** que une experiência coletiva e criação literária.',
        'Esquecer que o diário de Carolina Maria de Jesus é **literatura de testemunho**, não só documento.',
        'Tratar o indígena apenas como tema: nas obras contemporâneas ele é **autor**, produz saber.'
      ],
      dicas: [
        'Perguntas costumam ligar o texto a **identidade, memória, desigualdade e resistência**.',
        'Se o texto fala de "voz" de um grupo antes silenciado, pense em **protagonismo** e **representatividade**.',
        'Em comparações com o Romantismo, destaque o **olhar de dentro** (autoria) em oposição ao **olhar de fora** idealizado.'
      ],
      exemplo: {
        enunciado: 'Conceição Evaristo afirma que sua escrita é "escrevivência". O que o termo significa?',
        resolucao: '**Escrevivência** é a escrita que nasce da vivência de mulheres negras: une experiência pessoal e coletiva, transformando memória e vida cotidiana em literatura, e desafia a ideia de que só haveria "um tipo" de autor.'
      },
      fontes: [F.inep, F.critica, F.candido, { titulo: 'EVARISTO, C. Ponciá Vicêncio; JESUS, C. M. Quarto de despejo (obras primárias)', url: '' }],
      flashcards: [
        { f: 'O que é "Quarto de Despejo"?', v: 'Diário de Carolina Maria de Jesus sobre a vida na favela (1960).' },
        { f: 'O que é escrevivência?', v: 'Conceito de Conceição Evaristo: escrita que nasce da vivência de mulheres negras.' },
        { f: 'Quem escreveu Torto Arado?', v: 'Itamar Vieira Junior (2019).' },
        { f: 'Quem escreveu Ideias para adiar o fim do mundo?', v: 'Ailton Krenak (2019).' },
        { f: 'O que é literatura periférica?', v: 'Literatura produzida nas periferias urbanas, com saraus, slams e denúncia social.' },
        { f: 'Poeta nordestino do cordel e da voz do sertão', v: 'Patativa do Assaré.' },
        { f: 'O que foi a poesia marginal?', v: 'Poesia dos anos 70, coloquial, distribuída de mão em mão (Leminski, Cacaso).' },
        { f: 'Por que a literatura indígena rompe com o Romantismo?', v: 'Porque o indígena passa de tema idealizado a autor.' }
      ],
      quiz: [
        {
          q: 'Em "Quarto de Despejo", Carolina Maria de Jesus registra o cotidiano de fome e discriminação na favela. A obra é importante porque',
          alt: ['dá voz a quem vive a pobreza, com olhar de dentro', 'idealiza a vida simples do campo', 'celebra o nacionalismo ufanista', 'segue a métrica rígida parnasiana', 'segue a tradição religiosa barroca'],
          c: 0, dif: 'facil',
          exp: 'O diário é um testemunho em primeira mão sobre a exclusão, escrito por quem a vivia.'
        },
        {
          q: 'O conceito de "escrevivência" refere-se a',
          alt: ['uma escrita que nasce da vivência de mulheres negras', 'um método científico de pesquisa social', 'uma técnica de contagem de sílabas', 'um gênero narrativo medieval português', 'um tipo de teatro de vanguarda'],
          c: 0, dif: 'medio',
          exp: 'Evaristo criou o termo para nomear a escrita que nasce da experiência coletiva de mulheres negras.'
        },
        {
          q: 'Em contraste com o indígena idealizado de Alencar, a literatura indígena contemporânea',
          alt: ['apresenta o indígena como autor e sujeito de sua história', 'mantém a idealização romântica', 'ignora a cultura indígena', 'é escrita exclusivamente por não indígenas', 'defende a assimilação total'],
          c: 0, dif: 'medio',
          exp: 'Autores como Munduruku e Krenak falam de dentro, com protagonismo e crítica.'
        },
        {
          q: 'Um sarau na periferia reúne poetas que leem textos sobre o cotidiano do bairro, com linguagem coloquial e crítica social. Isso exemplifica',
          alt: ['literatura periférica', 'poesia parnasiana', 'teatro clássico', 'epopeia camoniana', 'romance indianista'],
          c: 0, dif: 'facil',
          exp: 'Saraus e slams são espaços centrais da literatura periférica.'
        },
        {
          q: 'A poesia de cordel, com versos populares publicados em folhetos, é tradição principalmente',
          alt: ['nordestina, com oralidade e temas do cotidiano', 'indígena amazônica exclusivamente', 'europeia medieval sem relação com o Brasil', 'ligada ao Parnasianismo', 'do Barroco mineiro'],
          c: 0, dif: 'medio',
          exp: 'O cordel nasceu da cultura oral e é fortemente ligado ao Nordeste.'
        },
        {
          q: 'Em Torto Arado, a história das irmãs Bibiana e Belonísia revela',
          alt: ['as marcas da escravidão no campo e a luta por terra', 'um romance de cavalaria na Idade Média', 'a vida da corte portuguesa no Brasil', 'um enredo bucólico de pastores árcades', 'a descrição clínica de uma doença rara'],
          c: 0, dif: 'dificil',
          exp: 'O romance trata das heranças da escravidão, do trabalho rural e da disputa por terra.'
        },
        {
          q: 'O livro "Ideias para adiar o fim do mundo", de Ailton Krenak, questiona',
          alt: ['a ideia de humanidade separada da natureza', 'o ensino da gramática', 'a métrica poética', 'a escola literária do século XIX', 'o teatro grego'],
          c: 0, dif: 'dificil',
          exp: 'Krenak critica a separação entre ser humano e natureza e propõe outras formas de viver.'
        },
        {
          q: 'A poesia marginal dos anos 70 se caracteriza por',
          alt: ['poemas curtos e informais, de circulação independente', 'poemas épicos extensos de feitos heroicos', 'rigidez formal e métrica parnasiana', 'temas exclusivamente religiosos e barrocos', 'versos metrificados de rimas ricas'],
          c: 0, dif: 'dificil',
          exp: 'A poesia marginal circulou fora do mercado editorial tradicional, com linguagem cotidiana.'
        }
      ],
      pares: [
        { a: 'Carolina Maria de Jesus', b: 'Quarto de Despejo' },
        { a: 'Conceição Evaristo', b: 'Escrevivência' },
        { a: 'Itamar Vieira Junior', b: 'Torto Arado' },
        { a: 'Ailton Krenak', b: 'Ideias para adiar o fim do mundo' },
        { a: 'Daniel Munduruku', b: 'Autor indígena' },
        { a: 'Ferréz', b: 'Capão Pecado' },
        { a: 'Patativa do Assaré', b: 'Cordel' },
        { a: 'Paulo Leminski', b: 'Poesia marginal' }
      ]
    },

    /* ============ 9. LITERATURA PORTUGUESA ============ */
    {
      id: 'literatura-portuguesa',
      nome: 'Literatura portuguesa: de Camões a Saramago',
      incidencia: 'baixa',
      resumo: 'Aparece pouco, mas costuma cobrar Camões, Fernando Pessoa e Saramago, além da relação entre a literatura portuguesa e a brasileira.',
      conceitos: [
        {
          titulo: 'Medieval e Renascimento',
          texto: '- **Trovadorismo** (séc. XII–XIV): cantigas de **amor**, de **amigo** (voz feminina), de **escárnio** e de **maldizer** (sátira).\n- **Humanismo**: **Fernão Lopes** (crônicas), **Gil Vicente** (*Auto da Barca do Inferno*, sátira social).\n- **Classicismo**: **Luís de Camões**, *Os Lusíadas* (1572), epopeia sobre a viagem de Vasco da Gama; sonetos como "Amor é fogo que arde sem se ver" (paradoxos sobre o amor).'
        },
        {
          titulo: 'Séculos XIX e XX',
          texto: '- **Eça de Queirós** (Realismo): *O Primo Basílio*, *Os Maias*; crítica à sociedade burguesa e à Igreja.\n- **Fernando Pessoa**: o poeta dos **heterônimos** (**Alberto Caeiro**, o poeta da natureza e do simples; **Ricardo Reis**, clássico e estoico; **Álvaro de Campos**, moderno e inquieto) e do **ortônimo** (o próprio Pessoa, com *Mensagem*, 1934).\n- **José Saramago** (Nobel, 1998): *Ensaio sobre a Cegueira* (1995), alegoria sobre a perda de humanidade; estilo de períodos longos, diálogos sem travessão.'
        }
      ],
      pegadinhas: [
        'Confundir **heterônimo** (personalidade poética com estilo próprio) com **pseudônimo** (nome falso do mesmo autor).',
        'Achar que Camões é "romântico": é **classicista**, com ideal de equilíbrio e racionalidade renascentista.',
        'Dizer que Saramago usa pontuação "errada": é um **estilo** (poucos pontos, vírgulas, diálogos corridos).',
        'Confundir cantiga de **amigo** (eu lírico feminino, escrita por homem) com cantiga de amor (eu lírico masculino).'
      ],
      dicas: [
        'Pessoa aparece com frequência: memorize Caeiro (natureza), Reis (clássico), Campos (moderno).',
        'Em Camões, procure **paradoxos** e o equilíbrio entre razão e emoção.',
        'Saramago: procure **alegoria** (cegueira como metáfora social).'
      ],
      exemplo: {
        enunciado: 'Um poema afirma que o Tejo, apesar de maior, não é mais belo que o riacho da aldeia do poeta, porque este é o que ele conhece e vê todos os dias. Valoriza o concreto e o simples, sem abstrações. Qual heterônimo?',
        resolucao: '**Alberto Caeiro**, heterônimo de Pessoa: linguagem simples, apego ao concreto, valorização da natureza e rejeição ao pensamento abstrato.'
      },
      fontes: [F.inep, F.estrategia, F.bosi],
      flashcards: [
        { f: 'Cantiga de amigo: quem fala?', v: 'Um eu lírico feminino, mas escrita por um trovador.' },
        { f: 'Quem escreveu Os Lusíadas?', v: 'Luís de Camões (1572), epopeia do Classicismo.' },
        { f: 'Quem escreveu o Auto da Barca do Inferno?', v: 'Gil Vicente (Humanismo).' },
        { f: 'Quem foi Alberto Caeiro?', v: 'Heterônimo de Pessoa; poeta da natureza e do simples.' },
        { f: 'Quem foi Álvaro de Campos?', v: 'Heterônimo moderno e inquieto de Pessoa.' },
        { f: 'Quem foi Ricardo Reis?', v: 'Heterônimo clássico e estoico de Pessoa.' },
        { f: 'Qual a obra mais famosa de Saramago?', v: 'Ensaio sobre a Cegueira (1995); Nobel em 1998.' },
        { f: 'O que é heterônimo?', v: 'Personalidade literária criada pelo autor, com estilo e biografia próprios.' }
      ],
      quiz: [
        {
          q: 'Os Lusíadas, de Camões, celebram a viagem de Vasco da Gama às Índias. Em relação ao gênero, a obra é uma',
          alt: ['epopeia', 'cantiga de amigo', 'peça de teatro', 'crônica jornalística', 'carta pessoal'],
          c: 0, dif: 'facil',
          exp: 'Narrativa em versos sobre feitos heroicos de um povo: epopeia.'
        },
        {
          q: 'No Auto da Barca do Inferno, personagens de várias camadas sociais são julgados e punidos por seus vícios. Essa peça de Gil Vicente apresenta',
          alt: ['sátira social e crítica de costumes', 'exaltação da nobreza', 'idealização do pastoralismo', 'determinismo científico', 'poesia concreta'],
          c: 0, dif: 'medio',
          exp: 'A peça satiriza a corrupção e os vícios sociais, incluindo clero e nobreza.'
        },
        {
          q: 'Fernando Pessoa criou personalidades poéticas com estilos distintos, como Alberto Caeiro e Álvaro de Campos. Esse recurso é a',
          alt: ['heteronímia', 'pseudonímia', 'paródia', 'alegoria', 'metonímia'],
          c: 0, dif: 'medio',
          exp: 'Cada heterônimo tem estilo, ideias e biografia próprios, diferente de apenas assinar com outro nome.'
        },
        {
          q: 'Um poema defende a simplicidade, rejeita o pensamento complexo e afirma que "as coisas são o que são". O heterônimo que mais se aproxima é',
          alt: ['Alberto Caeiro', 'Álvaro de Campos', 'Ricardo Reis', 'Cruz e Sousa', 'Camões'],
          c: 0, dif: 'medio',
          exp: 'Caeiro é o poeta da natureza e do concreto, avesso à metafísica.'
        },
        {
          q: 'Em "Ensaio sobre a Cegueira", uma epidemia de cegueira branca atinge a população. Essa narrativa funciona como',
          alt: ['uma alegoria da desumanização social', 'um relato jornalístico de uma epidemia real', 'um tratado médico sobre a cegueira', 'uma epopeia clássica sobre navegações', 'uma comédia de costumes burgueses'],
          c: 0, dif: 'dificil',
          exp: 'A cegueira é metáfora para a incapacidade de ver o outro e para a perda de humanidade.'
        },
        {
          q: 'Em "Amor é fogo que arde sem se ver; / é ferida que dói e não se sente", Camões utiliza',
          alt: ['paradoxos para definir o sentimento amoroso', 'descrições científicas', 'linguagem coloquial moderna', 'sátira social', 'narrativa épica'],
          c: 0, dif: 'medio',
          exp: 'Ideias contraditórias (arder sem se ver, doer sem se sentir) expressam a natureza contraditória do amor.'
        },
        {
          q: 'Eça de Queirós, em "O Primo Basílio", critica',
          alt: ['a sociedade burguesa e seus valores', 'o Barroco', 'a nobreza medieval', 'a vida no sertão', 'o movimento concretista'],
          c: 0, dif: 'dificil',
          exp: 'Realista, Eça critica a hipocrisia e a superficialidade da burguesia lisboeta.'
        },
        {
          q: 'A característica principal das cantigas de escárnio e maldizer é',
          alt: ['a sátira, que critica pessoas e costumes', 'o louvor religioso', 'a idealização da mulher', 'o tom épico', 'a descrição científica'],
          c: 0, dif: 'facil',
          exp: 'Essas cantigas satirizam e criticam, com ironia.'
        }
      ],
      pares: [
        { a: 'Camões', b: 'Os Lusíadas' },
        { a: 'Gil Vicente', b: 'Auto da Barca do Inferno' },
        { a: 'Alberto Caeiro', b: 'Heterônimo da natureza' },
        { a: 'Fernando Pessoa', b: 'Heterônimos' },
        { a: 'Saramago', b: 'Ensaio sobre a Cegueira' },
        { a: 'Eça de Queirós', b: 'O Primo Basílio' },
        { a: 'Cantiga de amigo', b: 'Eu lírico feminino' },
        { a: 'Trovadorismo', b: 'Cantigas medievais' }
      ]
    }
  ]);
})();
