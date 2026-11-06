/* Artes, Educação Física e TIC — Linguagens, Códigos e suas Tecnologias.
   O ENEM trata esses temas como LINGUAGENS: o que a obra, o corpo ou a tecnologia comunica, e que efeito tem na sociedade. */
(function () {
  var F = {
    inep: { titulo: 'INEP — Matrizes de Referência do Enem (competências e habilidades de Linguagens)', url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem' },
    critica: { titulo: 'A Crítica (MS) — Enem 2026: professores indicam o que revisar na prova de Linguagens', url: 'https://acritica.net/educacao/enem-2026-professores-indicam-o-que-revisar-para-a-prova-de-linguagens/' },
    estrategia: { titulo: 'Estratégia Vestibulares — Assuntos que mais caem no Enem (análise de 1998 a 2020)', url: 'https://vestibulares.estrategia.com/portal/enem-e-vestibulares/enem/assuntos-que-mais-caem-no-enem/' },
    iphan: { titulo: 'IPHAN — Instituto do Patrimônio Histórico e Artístico Nacional (portal oficial)', url: 'https://www.gov.br/iphan/pt-br' }
  };

  ENEM.temas('artes-tic', [
    /* ============ 1. VANGUARDAS EUROPEIAS ============ */
    {
      id: 'vanguardas-europeias',
      nome: 'Artes visuais: vanguardas europeias',
      incidencia: 'media',
      resumo: 'Cubismo, Futurismo, Dadaísmo, Surrealismo, Expressionismo, Impressionismo e Pop Art aparecem sempre com uma obra ou texto para identificar. Memorize o "slogan" de cada um.',
      conceitos: [
        {
          titulo: 'Do Impressionismo ao Expressionismo',
          texto: '- **Impressionismo** (fim do séc. XIX): capta a **luz e a impressão do instante**, com pinceladas soltas, pintura ao ar livre. **Monet** (*Impressão, nascer do sol*).\n- **Expressionismo** (início do séc. XX): expressa **emoções intensas**, com deformação e cores fortes. **Munch** (*O Grito*); no Brasil, **Anita Malfatti** (*A Boba*) e **Lasar Segall**.'
        },
        {
          titulo: 'Cubismo, Futurismo, Dadaísmo e Surrealismo',
          texto: '- **Cubismo**: decompõe os objetos em **formas geométricas** e mostra vários pontos de vista ao mesmo tempo. **Picasso** e **Braque**. *Guernica* (1937) denuncia o bombardeio da cidade espanhola de Guernica na Guerra Civil.\n- **Futurismo** (1909, Marinetti): exalta **velocidade, máquina, tecnologia e a vida moderna**, rompe com o passado.\n- **Dadaísmo**: **antiarte**, humor e absurdo, reação à Primeira Guerra. **Duchamp**, *A Fonte* (1917): objeto comum (um urinol) apresentado como arte, o **ready-made**.\n- **Surrealismo** (Breton, 1924): **sonho e inconsciente**, ligados às ideias de Freud. **Dalí** (*A persistência da memória*), **Magritte**.'
        },
        {
          titulo: 'Pop Art e arte e consumo',
          texto: '**Pop Art** (anos 1950–60, EUA e Inglaterra): usa imagens da **cultura de massa** (publicidade, quadrinhos, celebridades, produtos).\n\n- **Andy Warhol**: latas de sopa Campbell, retratos de Marilyn Monroe, repetição em série.\n- **Roy Lichtenstein**: ampliação de quadrinhos.\n\nIdeia central: a arte dialoga com o consumo e questiona a separação entre "arte erudita" e "cultura popular".'
        }
      ],
      pegadinhas: [
        'Confundir **Cubismo** (geometria, múltiplas perspectivas) com **Surrealismo** (sonho, inconsciente).',
        'Dizer que o **Dadaísmo** é "arte sem sentido": ele **questiona** o que é arte, como crítica à sociedade e à guerra.',
        'Achar que o **Futurismo** valoriza o passado: ele **exalta a máquina** e rejeita a tradição.',
        'Confundir **Impressionismo** (luz e instante) com **Expressionismo** (emoção e deformação).'
      ],
      dicas: [
        'Decore a ideia-chave: **Cubismo = formas geométricas; Futurismo = velocidade; Dadá = antiarte; Surrealismo = sonho; Pop = consumo**.',
        'Em obras reproduzidas, descreva: cores, formas, tema, sensação. Depois relacione ao movimento.',
        'Questões comparam a obra com um **contexto histórico** (guerras, industrialização, consumo).'
      ],
      exemplo: {
        enunciado: 'Uma obra apresenta um objeto de uso comum (um urinol), assinado e exposto em um museu, com o título "A Fonte". Que movimento e que conceito?',
        resolucao: '**Dadaísmo**, com Marcel Duchamp. O conceito é o **ready-made**: ao deslocar um objeto comum para o museu, o artista questiona o que define uma obra de arte.'
      },
      fontes: [F.inep, F.estrategia, F.critica, { titulo: 'GOMBRICH, E. H. A história da arte (obra de referência)', url: '' }],
      flashcards: [
        { f: 'Ideia central do Cubismo', v: 'Decompor a realidade em formas geométricas e vários pontos de vista (Picasso, Braque).' },
        { f: 'O que é Guernica?', v: 'Painel de Picasso (1937) que denuncia o bombardeio de Guernica na Guerra Civil Espanhola.' },
        { f: 'Ideia central do Futurismo', v: 'Exaltar velocidade, máquinas e vida moderna, rompendo com o passado.' },
        { f: 'O que é ready-made?', v: 'Objeto comum apresentado como obra de arte (Duchamp, Dadaísmo).' },
        { f: 'Ideia central do Surrealismo', v: 'Explorar sonhos e o inconsciente (Dalí, Magritte).' },
        { f: 'Ideia central do Impressionismo', v: 'Capturar a luz e a impressão do instante (Monet).' },
        { f: 'Ideia central do Expressionismo', v: 'Expressar emoções intensas com formas deformadas e cores fortes (Munch).' },
        { f: 'Ideia central da Pop Art', v: 'Usar imagens do consumo e da cultura de massa (Warhol, Lichtenstein).' }
      ],
      quiz: [
        {
          q: 'Em um quadro, um rosto é mostrado de frente e de perfil ao mesmo tempo, com formas geométricas. Esse recurso é típico do',
          alt: ['Cubismo', 'Impressionismo', 'Surrealismo', 'Pop Art', 'Arcadismo'],
          c: 0, dif: 'facil',
          exp: 'O Cubismo decompõe a figura e apresenta vários pontos de vista simultâneos.'
        },
        {
          q: 'Quando um artista expõe um objeto comum, como um urinol, e o intitula "A Fonte", ele propõe',
          alt: ['uma reflexão sobre o que pode ser considerado arte', 'uma cópia fiel da natureza', 'uma pintura realista de paisagem', 'a idealização do belo clássico', 'uma obra religiosa'],
          c: 0, dif: 'medio',
          exp: 'O ready-made de Duchamp questiona os critérios que definem a arte.'
        },
        {
          q: 'O quadro "Guernica", de Picasso, é reconhecido por',
          alt: ['denunciar os horrores da guerra por meio de formas fragmentadas', 'retratar a beleza de uma paisagem campestre', 'celebrar o progresso da tecnologia', 'ilustrar um anúncio de produto', 'reproduzir um sonho em cores suaves'],
          c: 0, dif: 'medio',
          exp: 'A obra expressa a dor e a violência do bombardeio por meio de formas distorcidas.'
        },
        {
          q: 'O Futurismo, em seus manifestos, exaltava',
          alt: ['velocidade, máquinas e a vida moderna', 'a natureza e a vida no campo', 'a tradição clássica grega', 'o sonho e o inconsciente', 'a fé e a religiosidade medieval'],
          c: 0, dif: 'facil',
          exp: 'Os futuristas valorizavam a velocidade e a tecnologia, rompendo com o passado.'
        },
        {
          q: 'Em um quadro, relógios derretem em uma paisagem silenciosa, como em um sonho. A obra mais provavelmente se filia ao',
          alt: ['Surrealismo', 'Cubismo', 'Realismo', 'Pop Art', 'Neoclassicismo'],
          c: 0, dif: 'medio',
          exp: 'Imagens oníricas e ilógicas (como em "A persistência da memória", de Dalí) são típicas do Surrealismo.'
        },
        {
          q: 'Uma obra reproduz, em série e cores fortes, a imagem de uma lata de sopa. Essa escolha de tema dialoga com',
          alt: ['a cultura de consumo e a produção em massa', 'o ideal de beleza do Renascimento', 'a religiosidade do Barroco', 'o sonho do Surrealismo', 'a geometria do Cubismo'],
          c: 0, dif: 'medio',
          exp: 'A Pop Art de Warhol faz dos produtos de consumo o assunto da arte.'
        },
        {
          q: 'A diferença central entre Impressionismo e Expressionismo está em que o primeiro',
          alt: ['busca captar a luz do instante e o segundo, emoções intensas', 'usa só preto e branco e o segundo só cores quentes', 'é arte religiosa e o segundo, política', 'é de origem asiática e o segundo, africana', 'é escultura e o segundo, arquitetura'],
          c: 0, dif: 'dificil',
          exp: 'O Impressionismo observa a luz e o efeito do instante; o Expressionismo deforma para expressar sentimentos.'
        },
        {
          q: 'A obra "A Boba", de Anita Malfatti, provocou críticas fortes em 1917 porque',
          alt: ['rompia com o academicismo, usando cores expressionistas', 'copiava obras do Renascimento italiano', 'retratava a corte do Império com fidelidade', 'era uma tela religiosa de padrão tradicional', 'usava a técnica do mosaico bizantino'],
          c: 0, dif: 'dificil',
          exp: 'A estética expressionista de Anita surpreendeu o público, acostumado ao academicismo, e preparou a Semana de 22.'
        }
      ],
      pares: [
        { a: 'Cubismo', b: 'Formas geométricas e múltiplos pontos de vista' },
        { a: 'Futurismo', b: 'Velocidade e máquina' },
        { a: 'Dadaísmo', b: 'Antiarte e ready-made' },
        { a: 'Surrealismo', b: 'Sonho e inconsciente' },
        { a: 'Impressionismo', b: 'Luz e instante' },
        { a: 'Expressionismo', b: 'Emoção intensa' },
        { a: 'Pop Art', b: 'Consumo e cultura de massa' },
        { a: 'Guernica', b: 'Denúncia da guerra (Picasso)' }
      ]
    },

    /* ============ 2. ARTE BRASILEIRA ============ */
    {
      id: 'arte-brasileira-patrimonio',
      nome: 'Arte brasileira, patrimônio e museus',
      incidencia: 'alta',
      resumo: 'Arte brasileira e patrimônio são os tópicos mais frequentes de Artes no ENEM. O foco é relacionar obra, época e valor cultural.',
      conceitos: [
        {
          titulo: 'Linha do tempo da arte brasileira',
          texto: '- **Arte rupestre** (pré-história): pinturas na **Serra da Capivara (PI)**, Patrimônio Mundial da UNESCO.\n- **Barroco mineiro** (séc. XVIII): **Aleijadinho** (Antônio Francisco Lisboa), *Profetas de Congonhas* e Igreja de São Francisco de Assis (Ouro Preto).\n- **Missão Artística Francesa** (1816): neoclassicismo, **Debret** e **Taunay**; **Academia Imperial de Belas Artes**. Academicismo: **Victor Meirelles** (*Primeira Missa no Brasil*), **Pedro Américo** (*Independência ou Morte*).\n- **Modernismo**: **Tarsila do Amaral** (*Abaporu*, 1928, símbolo da Antropofagia; *Operários*, 1933), **Candido Portinari** (*Retirantes*, *Café*, *Guerra e Paz*), **Di Cavalcanti**, **Anita Malfatti**.'
        },
        {
          titulo: 'Patrimônio cultural: material e imaterial',
          texto: '- **Patrimônio material**: bens físicos (edifícios, centros históricos, objetos, paisagens). Protegido por **tombamento**.\n- **Patrimônio imaterial**: saberes, celebrações, formas de expressão e lugares (**registro**). Exemplos: **capoeira** (roda e ofício dos mestres), **frevo**, **samba de roda do Recôncavo Baiano**, **ofício das baianas de acarajé**, **Círio de Nazaré**.\n\nO **IPHAN** (criado em 1937) protege o patrimônio nacional. A **UNESCO** reconhece bens como Patrimônio Mundial (Ouro Preto foi um dos primeiros no Brasil, em 1980).'
        },
        {
          titulo: 'Museus e a preservação da memória',
          texto: 'O museu **preserva, pesquisa, expõe e educa**. Hoje os museus também usam **tecnologias** (visitas virtuais, realidade aumentada) para ampliar o acesso.\n\nNo ENEM, perguntas costumam tratar da **importância de preservar** o patrimônio para a memória e a identidade, do papel de **comunidades** como guardiãs de saberes e de questões como acesso, inclusão e digitalização do acervo.'
        }
      ],
      pegadinhas: [
        'Confundir **patrimônio material** (tombamento) com **imaterial** (registro de saberes e celebrações).',
        'Achar que patrimônio é **só prédio antigo**: inclui modos de fazer, festas e danças.',
        'Atribuir *Abaporu* a Portinari: é de **Tarsila do Amaral**.',
        'Dizer que o Barroco mineiro é "europeu": é **brasileiro**, de matriz colonial e com artistas mestiços como Aleijadinho.'
      ],
      dicas: [
        'Procure a **função social** da obra: religiosa, histórica, de denúncia, identitária.',
        'Em patrimônio, ligue sempre com **identidade e memória coletiva**.',
        'Observe **materiais e técnicas** (pedra-sabão em Aleijadinho, tinta a óleo em Tarsila) para reconhecer a época.'
      ],
      exemplo: {
        enunciado: 'O "ofício das baianas de acarajé" e a "roda de capoeira" foram reconhecidos como patrimônio. Que tipo de patrimônio são?',
        resolucao: '**Patrimônio imaterial**: são saberes, práticas e formas de expressão transmitidos entre gerações. Por isso são **registrados** (e não "tombados" como um prédio).'
      },
      fontes: [F.inep, F.iphan, F.estrategia, F.critica],
      flashcards: [
        { f: 'Quem foi Aleijadinho?', v: 'Antônio Francisco Lisboa, escultor e arquiteto do Barroco mineiro (Congonhas, Ouro Preto).' },
        { f: 'Quem pintou o Abaporu?', v: 'Tarsila do Amaral (1928), símbolo da Antropofagia.' },
        { f: 'Missão Artística Francesa (1816): efeito', v: 'Introduziu o neoclassicismo e criou a Academia Imperial de Belas Artes.' },
        { f: 'Patrimônio material x imaterial', v: 'Material: bens físicos (tombamento). Imaterial: saberes e celebrações (registro).' },
        { f: 'O que faz o IPHAN?', v: 'Protege e promove o patrimônio cultural brasileiro (criado em 1937).' },
        { f: 'Onde fica a Serra da Capivara?', v: 'No Piauí; abriga arte rupestre, Patrimônio Mundial da UNESCO.' },
        { f: 'Quem pintou "Retirantes" e "Café"?', v: 'Candido Portinari.' },
        { f: 'Função social do museu', v: 'Preservar, pesquisar, expor e educar sobre a memória cultural.' }
      ],
      quiz: [
        {
          q: 'O "Frevo" e o "samba de roda do Recôncavo Baiano" foram registrados como bens do patrimônio cultural brasileiro. Esse tipo de patrimônio é classificado como',
          alt: ['imaterial', 'material móvel', 'material imóvel', 'natural geológico', 'arqueológico'],
          c: 0, dif: 'facil',
          exp: 'Danças, músicas e saberes transmitidos entre gerações compõem o patrimônio imaterial.'
        },
        {
          q: 'A conservação do conjunto arquitetônico de Ouro Preto como patrimônio histórico tem como principal justificativa',
          alt: ['preservar a memória e a identidade históricas', 'estimular a construção de arranha-céus', 'impedir qualquer atividade turística', 'transformar a cidade em polo industrial', 'proibir restaurações em prédios antigos'],
          c: 0, dif: 'facil',
          exp: 'Os bens tombados são protegidos por seu valor histórico, artístico e identitário.'
        },
        {
          q: 'A obra "Abaporu", de Tarsila do Amaral, foi o ponto de partida do Movimento Antropofágico porque',
          alt: ['sua figura inspirou a ideia de devorar o estrangeiro', 'retratava a corte imperial com fidelidade', 'copiava a técnica do Barroco mineiro', 'era uma tela religiosa de padrão colonial', 'seguia o rigor neoclássico francês'],
          c: 0, dif: 'medio',
          exp: '"Abaporu" (o que come gente, em tupi) inspirou Oswald de Andrade a propor a antropofagia cultural.'
        },
        {
          q: 'As esculturas dos "Profetas", em Congonhas, feitas em pedra-sabão por Aleijadinho, são exemplos de',
          alt: ['arte barroca brasileira', 'arte neoclássica francesa', 'arte rupestre', 'arte pop', 'arte digital'],
          c: 0, dif: 'medio',
          exp: 'Aleijadinho é o grande nome do Barroco mineiro, com forte expressão e dramaticidade.'
        },
        {
          q: 'A Missão Artística Francesa, de 1816, contribuiu para a arte brasileira ao',
          alt: ['introduzir o ensino acadêmico neoclássico', 'criar a arte rupestre brasileira', 'iniciar o Modernismo no Rio de Janeiro', 'extinguir o Barroco de imediato', 'inventar o grafite nas cidades'],
          c: 0, dif: 'medio',
          exp: 'Os artistas franceses fundaram a Academia Imperial de Belas Artes e difundiram o Neoclassicismo.'
        },
        {
          q: 'O patrimônio imaterial se diferencia do material porque',
          alt: ['envolve saberes e práticas, não só objetos', 'é sempre mais antigo que o material', 'só existe dentro de museus', 'é protegido somente na Europa', 'não possui valor cultural reconhecido'],
          c: 0, dif: 'medio',
          exp: 'Imaterial é o patrimônio das práticas, celebrações e formas de expressão.'
        },
        {
          q: 'Quando uma comunidade reconhece e preserva uma receita tradicional, uma dança ou um ofício, ela contribui para',
          alt: ['manter a memória e a identidade coletivas', 'o fim da cultura local', 'o isolamento da comunidade', 'a padronização cultural mundial', 'a destruição de bens históricos'],
          c: 0, dif: 'dificil',
          exp: 'A preservação de práticas tradicionais mantém viva a identidade cultural e a memória do grupo.'
        },
        {
          q: 'Um museu virtual que digitaliza seu acervo e o disponibiliza on-line contribui principalmente para',
          alt: ['ampliar o acesso do público à cultura e à memória', 'substituir a necessidade de preservar objetos físicos', 'cobrar mais caro dos visitantes', 'impedir pesquisas', 'esconder o acervo do público'],
          c: 0, dif: 'dificil',
          exp: 'A digitalização amplia o acesso, sem eliminar a importância da conservação dos bens físicos.'
        }
      ],
      pares: [
        { a: 'Aleijadinho', b: 'Barroco mineiro' },
        { a: 'Tarsila do Amaral', b: 'Abaporu' },
        { a: 'Portinari', b: 'Retirantes e Café' },
        { a: 'Debret', b: 'Missão Artística Francesa' },
        { a: 'Tombamento', b: 'Proteção do patrimônio material' },
        { a: 'Registro', b: 'Proteção do patrimônio imaterial' },
        { a: 'IPHAN', b: 'Órgão de proteção do patrimônio' },
        { a: 'Serra da Capivara', b: 'Arte rupestre no Piauí' }
      ]
    },

    /* ============ 3. ARTE CONTEMPORÂNEA ============ */
    {
      id: 'arte-contemporanea',
      nome: 'Arte contemporânea e arte urbana',
      incidencia: 'media',
      resumo: 'Instalações, performance, grafite e arte digital desafiam a ideia tradicional de "obra". O ENEM pergunta sobre a função da arte, a participação do público e a ocupação do espaço urbano.',
      conceitos: [
        {
          titulo: 'O que muda na arte contemporânea',
          texto: 'A arte deixa de se limitar a pintura e escultura em museus. Surgem:\n\n- **Instalação**: obra que ocupa um espaço e envolve o visitante.\n- **Performance**: a ação do artista (ou do público) é a obra.\n- **Videoarte e arte digital**: uso de tecnologia.\n- **Arte urbana**: grafite, muralismo, intervenções nas ruas.\n- **Arte participativa**: o público completa a obra.\n\nO **conceito** (a ideia) muitas vezes importa mais que a técnica.'
        },
        {
          titulo: 'Nomes brasileiros',
          texto: '- **Hélio Oiticica**: *Parangolés* (capas vestidas e dançadas por passistas), ligado à Tropicália; experiência corporal.\n- **Lygia Clark**: *Bichos* (esculturas manipuláveis), o público participa.\n- **Vik Muniz**: usa materiais inusitados (lixo, chocolate, açúcar) para recriar imagens; *Lixo Extraordinário* (catadores de Jardim Gramacho).\n- **Os Gêmeos** e **Eduardo Kobra**: grafite e murais que transformam a paisagem urbana.'
        },
        {
          titulo: 'Grafite x pichação e o espaço público',
          texto: 'O **grafite** é reconhecido como expressão artística e frequentemente comissionado. A **pichação** é a escrita com assinatura ou mensagem (tag), muitas vezes ilegal e considerada vandalismo, embora seja também forma de expressão de jovens e de afirmação de identidade.\n\nO debate envolve **direito à cidade, propriedade, arte e ordem pública**. A arte urbana democratiza o acesso, ao tirar a arte do museu.'
        }
      ],
      pegadinhas: [
        'Achar que arte contemporânea "não é arte": ela amplia o **conceito de arte** e exige análise da **ideia**.',
        'Confundir **grafite** (arte urbana valorizada) com **pichação** (muitas vezes ilegal); o ENEM aborda o **debate**.',
        'Dizer que performance exige palco: ela pode ocorrer em **qualquer espaço**.',
        'Esquecer que o público pode **ser parte da obra** (arte participativa).'
      ],
      dicas: [
        'Pergunte: **o que a obra propõe? Que experiência cria? Que crítica faz?**',
        'Em textos sobre arte urbana, relacione com **democratização do acesso, identidade e cidadania**.',
        'Em obras com materiais incomuns, procure o **significado** da escolha do material.'
      ],
      exemplo: {
        enunciado: 'Uma artista monta uma sala cheia de espelhos e luzes e convida os visitantes a caminhar entre elas. Que tipo de obra é?',
        resolucao: '**Instalação**: ocupa o espaço e envolve o público, que percorre a obra e faz parte da experiência.'
      },
      fontes: [F.inep, F.estrategia, F.critica],
      flashcards: [
        { f: 'O que é instalação?', v: 'Obra que ocupa um espaço e envolve o visitante.' },
        { f: 'O que é performance?', v: 'Arte em que a ação do artista (ou do público) é a obra.' },
        { f: 'O que são Parangolés?', v: 'Capas coloridas criadas por Hélio Oiticica, vestidas e dançadas pelo público.' },
        { f: 'O que são os "Bichos" de Lygia Clark?', v: 'Esculturas articuladas manipuláveis pelo público.' },
        { f: 'O que Vik Muniz usa em suas obras?', v: 'Materiais inusitados (lixo, chocolate, açúcar) para recriar imagens.' },
        { f: 'Grafite x pichação', v: 'Grafite: arte urbana reconhecida. Pichação: escrita de assinatura, muitas vezes ilegal.' },
        { f: 'O que é arte participativa?', v: 'Obra que só se completa com a ação do público.' },
        { f: 'Por que a arte urbana democratiza a arte?', v: 'Porque leva a arte às ruas, fora de museus e galerias.' }
      ],
      quiz: [
        {
          q: 'Em uma exposição, o visitante precisa vestir capas coloridas e dançar para completar a experiência da obra. Esse tipo de proposta é característico da',
          alt: ['arte participativa', 'pintura de cavalete', 'arte rupestre', 'escultura clássica', 'arte parnasiana'],
          c: 0, dif: 'facil',
          exp: 'O público é parte da obra, como nos Parangolés de Hélio Oiticica.'
        },
        {
          q: 'Um artista utiliza lixo reciclável para criar grandes retratos de catadores. Esse uso de materiais busca',
          alt: ['chamar atenção para o trabalho dos catadores', 'esconder o tema social do público', 'imitar a pintura do Renascimento', 'defender o desperdício de materiais', 'ocultar a origem do material'],
          c: 0, dif: 'medio',
          exp: 'O material da obra faz parte do seu significado, e o artista dá visibilidade a quem vive do lixo.'
        },
        {
          q: 'Os murais de grafite em grandes avenidas transformam a paisagem urbana e',
          alt: ['levam a arte a quem não frequenta museus', 'só podem ser vistos em galerias', 'impedem o acesso à cidade', 'substituem a educação artística', 'são produzidos sem qualquer intenção'],
          c: 0, dif: 'medio',
          exp: 'A arte nas ruas democratiza o acesso e dialoga com o cotidiano.'
        },
        {
          q: 'A principal diferença entre uma pintura tradicional e uma instalação é que a instalação',
          alt: ['ocupa um espaço e envolve o visitante', 'é sempre produzida em preto e branco', 'só existe reproduzida em livros', 'é menor do que uma pintura comum', 'não tem ideia nem conceito por trás'],
          c: 0, dif: 'medio',
          exp: 'A instalação trabalha o ambiente e a experiência de quem circula nele.'
        },
        {
          q: 'Em uma performance, a obra é',
          alt: ['a ação realizada pelo artista ou pelo público', 'exclusivamente uma tela', 'apenas uma escultura de mármore', 'um texto escrito', 'uma fotografia retocada'],
          c: 0, dif: 'facil',
          exp: 'Na performance, o gesto, o corpo e o tempo da ação constituem a obra.'
        },
        {
          q: 'O debate entre grafite e pichação envolve questões como',
          alt: ['propriedade, direito à cidade e expressão artística', 'apenas escolha de cores', 'proibição de qualquer imagem', 'valor de materiais de pintura', 'o tamanho das letras do alfabeto'],
          c: 0, dif: 'dificil',
          exp: 'A discussão atravessa temas de propriedade, ordem pública, identidade e arte.'
        },
        {
          q: 'Obras como "Bichos", de Lygia Clark, convidam o espectador a manipulá-las. Isso muda o papel do público, que',
          alt: ['passa de observador a participante da obra', 'deixa de ser relevante', 'precisa ficar a distância', 'apenas compra a obra', 'deve ficar em silêncio absoluto'],
          c: 0, dif: 'dificil',
          exp: 'A arte participativa dissolve a fronteira entre obra e espectador.'
        },
        {
          q: 'Na arte contemporânea, muitas obras valorizam principalmente',
          alt: ['o conceito e a experiência que propõem', 'a cópia fiel da natureza', 'o uso exclusivo de pintura a óleo', 'a rigidez acadêmica', 'a produção em série sem ideia'],
          c: 0, dif: 'dificil',
          exp: 'A ideia, o contexto e a experiência são centrais, mais que a técnica tradicional.'
        }
      ],
      pares: [
        { a: 'Instalação', b: 'Obra que ocupa um espaço' },
        { a: 'Performance', b: 'A ação é a obra' },
        { a: 'Hélio Oiticica', b: 'Parangolés' },
        { a: 'Lygia Clark', b: 'Bichos' },
        { a: 'Vik Muniz', b: 'Lixo Extraordinário' },
        { a: 'Grafite', b: 'Arte urbana reconhecida' },
        { a: 'Arte participativa', b: 'Público completa a obra' },
        { a: 'Videoarte', b: 'Arte com imagem em movimento' }
      ]
    },

    /* ============ 4. MÚSICA, DANÇA, TEATRO E CINEMA ============ */
    {
      id: 'musica-danca-teatro',
      nome: 'Música, dança, teatro e cinema',
      incidencia: 'media',
      resumo: 'As linguagens artísticas do corpo, do som e da cena aparecem ligadas à identidade, à crítica social e à história do Brasil.',
      conceitos: [
        {
          titulo: 'Música: elementos e gêneros brasileiros',
          texto: '**Elementos do som**: altura (grave/agudo), duração, intensidade (forte/fraco), timbre (a "cor" do som). **Ritmo, melodia e harmonia** organizam a música.\n\n- **Samba** (raízes afro-brasileiras), **choro** (Pixinguinha), **baião** (Luiz Gonzaga, nordeste).\n- **Bossa Nova** (fim dos anos 50; João Gilberto, Tom Jobim, Vinicius): batida suave, harmonia sofisticada.\n- **Tropicália** (1967–68; Caetano Veloso, Gilberto Gil, Os Mutantes): mistura MPB e rock, crítica e antropofagia.\n- **Manguebeat** (anos 90, Recife; Chico Science & Nação Zumbi): mistura maracatu e rock.\n- **Rap/hip hop** (Racionais MC\'s), **funk**, **forró**, **sertanejo**: expressam realidades de periferias e do campo.'
        },
        {
          titulo: 'Dança e teatro',
          texto: '- **Dança**: balé clássico (técnica rígida), dança moderna e contemporânea (liberdade de movimento), **danças populares** brasileiras (frevo, maracatu, samba, bumba meu boi) e **hip hop/breaking** (cultura de rua).\n- **Teatro**: nasce na **Grécia antiga** (tragédia e comédia). **Brecht** propõe o **distanciamento** (o público reflete, não só se emociona). **Augusto Boal** cria o **Teatro do Oprimido**, em que o espectador vira **"espect-ator"** e participa da cena. No Brasil, destacam-se o **Teatro de Arena** e o **Teatro Oficina**.'
        },
        {
          titulo: 'Cinema como linguagem',
          texto: 'O cinema combina imagem, som, movimento e montagem. **Planos** (geral, médio, close-up) criam sentidos: um *close* mostra emoção; um plano geral situa o espaço.\n\nNo Brasil, o **Cinema Novo** (anos 60, **Glauber Rocha**: "uma ideia na cabeça e uma câmera na mão") discutiu desigualdade e identidade nacional. O cinema brasileiro contemporâneo tem reconhecimento internacional.'
        }
      ],
      pegadinhas: [
        'Confundir **ritmo** (organização no tempo) com **melodia** (sequência de notas).',
        'Dizer que a **Tropicália** negou a tradição brasileira: ela **misturou** tradição e influências internacionais.',
        'Achar que **teatro do oprimido** é teatro triste: é método de **participação social**.',
        'Tratar funk e rap como "não música": são **gêneros legítimos** com história e função social.'
      ],
      dicas: [
        'Em letras de música, identifique o **contexto histórico** (ditadura, desigualdade, festa popular).',
        'Para Boal e Brecht, lembre: **público ativo**, não passivo.',
        'Relacione cada gênero musical ao seu **grupo social e região** de origem.'
      ],
      exemplo: {
        enunciado: 'Em um espetáculo, os espectadores são convidados a entrar em cena e propor soluções para um conflito social encenado. Que proposta teatral é essa?',
        resolucao: '**Teatro do Oprimido**, de Augusto Boal. O espectador torna-se **"espect-ator"**, participa e transforma a cena, ligando arte e ação social.'
      },
      fontes: [F.inep, F.estrategia, F.critica],
      flashcards: [
        { f: 'Quais são os quatro parâmetros do som?', v: 'Altura, duração, intensidade e timbre.' },
        { f: 'Quem foi Pixinguinha?', v: 'Compositor, saxofonista e figura central do choro.' },
        { f: 'O que foi a Tropicália?', v: 'Movimento de 1967–68 que misturou MPB, rock e experimentação (Caetano, Gil, Os Mutantes).' },
        { f: 'O que é manguebeat?', v: 'Movimento de Recife nos anos 90 (Chico Science) que mistura maracatu e rock.' },
        { f: 'O que é Teatro do Oprimido?', v: 'Método de Augusto Boal em que o espectador participa da cena (espect-ator).' },
        { f: 'Distanciamento brechtiano', v: 'Estratégia para que o público reflita criticamente, sem se limitar à emoção.' },
        { f: 'O que foi o Cinema Novo?', v: 'Movimento dos anos 60 (Glauber Rocha) de cinema crítico sobre o Brasil.' },
        { f: 'Danças populares brasileiras', v: 'Frevo, maracatu, samba, bumba meu boi, entre outras.' }
      ],
      quiz: [
        {
          q: 'O "timbre" de um instrumento musical é a característica que permite',
          alt: ['distinguir instrumentos que tocam a mesma nota', 'medir a velocidade de uma música', 'indicar o volume do som produzido', 'saber quantas pessoas tocam juntas', 'ouvir somente sons graves'],
          c: 0, dif: 'medio',
          exp: 'Timbre é a "cor" do som, que diferencia, por exemplo, um violão de uma flauta tocando a mesma nota.'
        },
        {
          q: 'A Tropicália (1967–68), de Caetano Veloso e Gilberto Gil, ficou conhecida por',
          alt: ['misturar elementos da cultura brasileira e do rock internacional', 'rejeitar qualquer influência estrangeira', 'defender o fim da música popular', 'abandonar letras com crítica social', 'usar exclusivamente instrumentos clássicos'],
          c: 0, dif: 'medio',
          exp: 'A Tropicália fez uma fusão experimental, em diálogo com a ideia modernista de antropofagia.'
        },
        {
          q: 'No manguebeat, de Chico Science & Nação Zumbi, a mistura de maracatu com guitarras elétricas expressa',
          alt: ['a união entre tradição regional e cultura global', 'o abandono da cultura popular', 'a defesa do isolamento cultural', 'uma crítica à música eletrônica apenas', 'a imitação exata de bandas estrangeiras'],
          c: 0, dif: 'medio',
          exp: 'O manguebeat combina tradição pernambucana e linguagem do rock e da música pop contemporânea.'
        },
        {
          q: 'No Teatro do Oprimido, o espectador é chamado de "espect-ator" porque',
          alt: ['participa da cena e propõe mudanças', 'só observa em silêncio', 'só aplaude no final', 'interpreta personagens de comédia', 'não pode entrar no teatro'],
          c: 0, dif: 'facil',
          exp: 'Boal propõe que o público deixe a passividade e atue na construção da cena.'
        },
        {
          q: 'O distanciamento proposto por Brecht tem como objetivo',
          alt: ['estimular a reflexão crítica do público', 'provocar apenas emoção e identificação', 'esconder o tema social', 'transformar o teatro em cinema', 'eliminar a atuação'],
          c: 0, dif: 'dificil',
          exp: 'Brecht quer que o público não se perca na emoção e pense criticamente sobre o que vê.'
        },
        {
          q: 'O slogan "uma ideia na cabeça e uma câmera na mão", do Cinema Novo, expressa',
          alt: ['uma produção criativa e crítica, com poucos recursos', 'a ausência de roteiros', 'a dependência de grandes estúdios', 'o abandono da realidade brasileira', 'a opção por filmes apenas comerciais'],
          c: 0, dif: 'dificil',
          exp: 'O lema reflete um cinema de baixo orçamento, comprometido com a crítica da realidade.'
        },
        {
          q: 'O hip hop, que inclui rap, DJ, breaking e grafite, é considerado',
          alt: ['uma cultura de rua que expressa vivências da periferia', 'um estilo exclusivo da música clássica', 'uma tradição medieval europeia', 'uma dança restrita a salões da elite', 'uma forma de teatro da Grécia antiga'],
          c: 0, dif: 'medio',
          exp: 'O hip hop reúne quatro elementos e dá voz a jovens de periferias, com forte crítica social.'
        },
        {
          q: 'Em um filme, um primeiro plano do rosto de uma personagem (close-up) é usado principalmente para',
          alt: ['destacar emoções e reações da personagem', 'mostrar o espaço geográfico inteiro', 'ocultar a personagem', 'indicar o fim do filme', 'substituir o som'],
          c: 0, dif: 'facil',
          exp: 'O close-up aproxima o espectador das expressões e dos sentimentos.'
        }
      ],
      pares: [
        { a: 'Timbre', b: 'Qualidade que distingue os instrumentos' },
        { a: 'Bossa Nova', b: 'João Gilberto e Tom Jobim' },
        { a: 'Tropicália', b: 'Mistura MPB e rock' },
        { a: 'Manguebeat', b: 'Chico Science, Recife' },
        { a: 'Teatro do Oprimido', b: 'Augusto Boal' },
        { a: 'Distanciamento', b: 'Brecht' },
        { a: 'Cinema Novo', b: 'Glauber Rocha' },
        { a: 'Hip hop', b: 'Rap, DJ, breaking e grafite' }
      ]
    },

    /* ============ 5. EDUCAÇÃO FÍSICA ============ */
    {
      id: 'educacao-fisica',
      nome: 'Educação Física: corpo, esporte, saúde e cultura',
      incidencia: 'media',
      resumo: 'O ENEM trata o corpo como linguagem e como produto social: esporte, mídia, padrões de beleza, saúde e inclusão.',
      conceitos: [
        {
          titulo: 'Cultura corporal de movimento',
          texto: 'A Educação Física estuda práticas corporais como **jogos, esportes, ginásticas, lutas e danças**, entendidas como **cultura** (história, valores e significados).\n\n- **Jogos tradicionais e indígenas** (peteca, corrida de toras, arco e flecha) valorizam identidades.\n- **Lutas** (capoeira, judô, jiu-jitsu): disciplina, história e respeito.\n- **Esporte**: pode ser de **rendimento** (competição, resultado), **participação/lazer** (diversão e saúde) ou **educacional**.'
        },
        {
          titulo: 'Corpo, mídia e padrões de beleza',
          texto: 'A mídia e as redes sociais promovem padrões de beleza que influenciam **autoestima e comportamento**. Problemas associados: **dietas extremas**, uso de **anabolizantes**, transtornos de imagem corporal.\n\nO ENEM valoriza o **olhar crítico**: o corpo não é só "máquina"; é **identidade, saúde e expressão**, e a diversidade de corpos deve ser respeitada.'
        },
        {
          titulo: 'Esporte, sociedade e inclusão',
          texto: '- **Esporte e mídia**: espetáculo, publicidade, naturalização da violência em torcidas.\n- **Doping**: uso de substâncias para melhorar o desempenho de modo ilegítimo; fere a **ética esportiva** e a saúde.\n- **Inclusão**: esportes paralímpicos e adaptados, respeito às pessoas com deficiência, igualdade de gênero no esporte.\n- **Saúde**: o **sedentarismo** é fator de risco para doenças crônicas. A **OMS** recomenda, para adultos, de **150 a 300 minutos** de atividade física moderada por semana.'
        }
      ],
      pegadinhas: [
        'Confundir **esporte de rendimento** (resultado, competição) com **esporte de participação** (lazer, saúde).',
        'Achar que atividade física é **só para quem quer emagrecer**: serve à saúde física e mental.',
        'Tratar o **doping** como "estratégia": é prática antiética e perigosa.',
        'Aceitar padrões de beleza como "naturais": são **construções culturais**.'
      ],
      dicas: [
        'Procure a **dimensão social** da prática (inclusão, mídia, consumo, identidade).',
        'Questões sobre saúde costumam valorizar **hábitos regulares e equilibrados**, e não soluções rápidas.',
        'Se o texto fala de torcida ou mídia, relacione com **violência, espetáculo e consumo**.'
      ],
      exemplo: {
        enunciado: 'Um texto critica jovens que usam anabolizantes por pressão estética. Que ideia o ENEM espera que você relacione?',
        resolucao: 'A **pressão dos padrões de beleza**, ampliada pela mídia e pelas redes, pode levar a riscos à saúde. A resposta valoriza **saúde, diversidade corporal e olhar crítico**.'
      },
      fontes: [F.inep, F.estrategia, F.critica, { titulo: 'Organização Mundial da Saúde — Diretrizes sobre atividade física e comportamento sedentário (consulte no site oficial da OMS)', url: '' }],
      flashcards: [
        { f: 'O que é cultura corporal de movimento?', v: 'Conjunto de práticas corporais (jogos, esportes, lutas, ginásticas e danças) vistas como cultura.' },
        { f: 'Esporte de rendimento', v: 'Competição com foco em resultado e desempenho.' },
        { f: 'Esporte de participação', v: 'Prática voltada ao lazer, à saúde e à convivência.' },
        { f: 'O que é doping?', v: 'Uso de substâncias proibidas para melhorar o desempenho esportivo.' },
        { f: 'O que é sedentarismo?', v: 'Falta de atividade física regular, fator de risco para doenças.' },
        { f: 'Quanto a OMS recomenda para adultos?', v: 'De 150 a 300 minutos semanais de atividade física moderada.' },
        { f: 'Por que a capoeira é importante?', v: 'Une luta, dança, música e história da resistência afro-brasileira.' },
        { f: 'Como a mídia influencia o corpo?', v: 'Promove padrões de beleza que afetam autoestima e comportamentos.' }
      ],
      quiz: [
        {
          q: 'A capoeira é reconhecida como patrimônio cultural por reunir',
          alt: ['luta, dança, música e resistência afro-brasileira', 'apenas técnicas de combate esportivo', 'regras de um jogo coletivo moderno', 'práticas exclusivas de academias', 'exercícios de ginástica artística'],
          c: 0, dif: 'medio',
          exp: 'A capoeira integra movimento, música e memória afro-brasileira.'
        },
        {
          q: 'Em uma atividade de lazer entre amigos, o foco é a diversão e a convivência. Esse tipo de prática corresponde ao esporte de',
          alt: ['participação', 'rendimento profissional', 'alto desempenho', 'competição olímpica', 'treinamento militar'],
          c: 0, dif: 'facil',
          exp: 'Quando o foco é lazer e saúde, trata-se do esporte de participação.'
        },
        {
          q: 'Quando redes sociais divulgam um único padrão de corpo como ideal, elas podem',
          alt: ['gerar insatisfação e comportamentos de risco', 'eliminar qualquer preocupação com saúde', 'tornar todos os corpos iguais', 'incentivar sempre a diversidade', 'substituir a educação física'],
          c: 0, dif: 'medio',
          exp: 'A pressão por padrões inatingíveis está associada a insatisfação e a práticas prejudiciais.'
        },
        {
          q: 'O doping no esporte é considerado grave porque',
          alt: ['fere a ética esportiva e pode prejudicar a saúde', 'melhora a saúde de todos os atletas', 'é incentivado pelas regras', 'aumenta a igualdade entre competidores', 'é comum em jogos recreativos de bairro'],
          c: 0, dif: 'medio',
          exp: 'O doping viola a igualdade de condições e oferece riscos à saúde dos atletas.'
        },
        {
          q: 'Os esportes paralímpicos contribuem para a inclusão porque',
          alt: ['valorizam a capacidade de pessoas com deficiência', 'excluem pessoas com deficiência da prática', 'dispensam regras e competição', 'são apenas demonstrações sem competição', 'substituem os esportes tradicionais'],
          c: 0, dif: 'facil',
          exp: 'O esporte adaptado amplia a visibilidade e o direito à prática esportiva.'
        },
        {
          q: 'O estilo de vida sedentário é considerado fator de risco porque',
          alt: ['está associado a doenças crônicas, como diabetes', 'aumenta sempre o condicionamento físico', 'não tem relação nenhuma com a saúde', 'é recomendado pela OMS a adultos', 'previne todas as doenças do coração'],
          c: 0, dif: 'medio',
          exp: 'A falta de atividade física regular está ligada a diversas doenças crônicas.'
        },
        {
          q: 'Os Jogos dos Povos Indígenas, com corrida de toras e arco e flecha, destacam',
          alt: ['práticas corporais ligadas à identidade dos povos', 'o esporte exclusivamente profissional', 'a eliminação das tradições locais', 'a busca por recordes mundiais apenas', 'competições sem qualquer sentido cultural'],
          c: 0, dif: 'dificil',
          exp: 'Os jogos valorizam as tradições, a identidade e a convivência entre povos.'
        },
        {
          q: 'A cobertura esportiva da mídia, muitas vezes, privilegia o espetáculo e o consumo. Uma consequência possível é',
          alt: ['o esporte virar produto, com foco no resultado', 'a ausência total de torcedores', 'a extinção dos esportes coletivos', 'o fim de qualquer patrocínio', 'o desinteresse completo do público'],
          c: 0, dif: 'dificil',
          exp: 'A mercantilização do esporte coloca o espetáculo e o resultado em primeiro plano.'
        }
      ],
      pares: [
        { a: 'Esporte de rendimento', b: 'Foco em resultado' },
        { a: 'Esporte de participação', b: 'Foco em lazer e saúde' },
        { a: 'Doping', b: 'Prática antiética de superação' },
        { a: 'Sedentarismo', b: 'Risco para doenças crônicas' },
        { a: 'Capoeira', b: 'Luta, dança e resistência' },
        { a: 'Paralimpíadas', b: 'Esporte e inclusão' },
        { a: 'Padrão de beleza', b: 'Construção cultural' },
        { a: 'Cultura corporal', b: 'Jogos, esportes, lutas, dança' }
      ]
    },

    /* ============ 6. TIC E CULTURA DIGITAL ============ */
    {
      id: 'tic-cultura-digital',
      nome: 'TIC e cultura digital: redes, desinformação e direitos',
      incidencia: 'alta',
      resumo: 'Tecnologia é tema transversal em Linguagens: como a internet muda a comunicação, o trabalho, a privacidade e a forma de informar-se.',
      conceitos: [
        {
          titulo: 'Linguagens e práticas digitais',
          texto: '- **Hipertexto**: texto com links que o leitor percorre em ordem própria.\n- **Multimodalidade**: texto + imagem + som + vídeo.\n- **Cultura participativa**: o usuário produz e compartilha (memes, vídeos, comentários).\n- **Memes**: unidades de humor e opinião que circulam e se transformam.\n- **Netiqueta**: boas práticas de convivência on-line.\n- **Letramento digital**: saber buscar, avaliar, criar e usar informações em meios digitais.'
        },
        {
          titulo: 'Desinformação, algoritmos e bolhas',
          texto: '**Fake news / desinformação**: conteúdo falso ou enganoso espalhado como verdade. Geralmente apela à **emoção** e a "furos" sem fonte.\n\n**Algoritmos** organizam o que vemos, com base no que curtimos. Isso pode criar **bolhas** (só vemos opiniões parecidas com as nossas) e **câmaras de eco**.\n\nComo se proteger: **checar a fonte e a data**, buscar a notícia em mais de um veículo, desconfiar de textos muito alarmistas, usar **agências de checagem** e **desconfiar de imagens fora de contexto** ou **geradas por IA**.'
        },
        {
          titulo: 'Direitos, privacidade e inclusão',
          texto: '- **Marco Civil da Internet** (Lei 12.965/2014): princípios de uso da internet no Brasil (liberdade de expressão, neutralidade, privacidade).\n- **LGPD** (Lei 13.709/2018): proteção de **dados pessoais** (consentimento, uso adequado, direitos do titular).\n- **Direitos autorais** e licenças abertas (**Creative Commons**).\n- **Cyberbullying**: violência on-line, que causa danos reais.\n- **Exclusão digital**: falta de acesso à internet e a equipamentos; aprofunda desigualdades na escola e no trabalho.\n- **Trabalho por plataformas**: entregadores e motoristas de aplicativo, precarização e direitos.\n- **Inteligência artificial**: automatiza tarefas, mas levanta questões de autoria, vieses e deepfakes.'
        }
      ],
      pegadinhas: [
        'Achar que "se está na internet, é verdade" ou que "se viralizou, é confiável".',
        'Tratar a tecnologia como **neutra**: ela traz benefícios e riscos, e os efeitos dependem do uso.',
        'Confundir **liberdade de expressão** com direito de divulgar **desinformação** ou ofender sem consequências.',
        'Esquecer a dimensão da **desigualdade**: nem todos têm acesso às tecnologias.'
      ],
      dicas: [
        'Em questões sobre redes sociais, procure **benefícios e riscos** e uma postura crítica.',
        'Associe **privacidade → LGPD**, **regras da internet → Marco Civil**, **checagem → fonte e data**.',
        'Em textos sobre trabalho por aplicativo, observe **direitos, autonomia e precarização**.'
      ],
      exemplo: {
        enunciado: 'Um jovem recebe, no grupo da família, um áudio alarmista dizendo que "o governo vai proibir x", sem fonte. O que fazer antes de compartilhar?',
        resolucao: 'Verificar a **fonte**, a **data** e se há **confirmação em outros veículos ou agências de checagem**. Conteúdos alarmistas e sem fonte são sinais de **desinformação**. Compartilhar sem checar amplia o problema.'
      },
      fontes: [F.inep, F.critica, F.estrategia, { titulo: 'BRASIL. Lei nº 13.709/2018 (LGPD) e Lei nº 12.965/2014 (Marco Civil da Internet) — consulte o texto oficial no Planalto', url: '' }],
      flashcards: [
        { f: 'O que é hipertexto?', v: 'Texto com links, lido em ordem escolhida pelo leitor.' },
        { f: 'O que é uma bolha de filtro?', v: 'Ambiente em que algoritmos mostram principalmente conteúdos que combinam com seus gostos.' },
        { f: 'O que é desinformação?', v: 'Conteúdo falso ou enganoso divulgado como se fosse verdadeiro.' },
        { f: 'O que protege a LGPD?', v: 'Os dados pessoais dos cidadãos (Lei 13.709/2018).' },
        { f: 'O que é o Marco Civil da Internet?', v: 'Lei 12.965/2014: princípios, direitos e deveres para o uso da internet no Brasil.' },
        { f: 'O que é exclusão digital?', v: 'Falta de acesso à internet, a equipamentos ou à capacitação para usá-los.' },
        { f: 'O que é cultura participativa?', v: 'Cultura em que os usuários criam e compartilham conteúdos (memes, vídeos, textos).' },
        { f: 'Como checar uma notícia?', v: 'Ver fonte e data, buscar em outros veículos e usar agências de checagem.' }
      ],
      quiz: [
        {
          q: 'A Lei Geral de Proteção de Dados (LGPD) tem como principal objetivo',
          alt: ['proteger dados pessoais e a privacidade', 'proibir o uso de redes sociais', 'limitar a venda de celulares', 'criar um novo aplicativo oficial', 'extinguir a internet no país'],
          c: 0, dif: 'facil',
          exp: 'A LGPD regula como dados pessoais são coletados e tratados.'
        },
        {
          q: 'Algoritmos que selecionam o que aparece em redes sociais com base nos gostos do usuário podem',
          alt: ['formar bolhas que limitam o contato com opiniões diferentes', 'eliminar qualquer desinformação', 'garantir pluralidade de ideias', 'impedir a personalização', 'substituir todas as fontes jornalísticas'],
          c: 0, dif: 'medio',
          exp: 'A personalização pode reforçar o que já pensamos, criando bolhas.'
        },
        {
          q: 'Um texto muito alarmista, sem fonte e que pede "compartilhe urgente" apresenta indícios de',
          alt: ['desinformação', 'reportagem investigativa', 'pesquisa científica revisada', 'documento oficial', 'verbete de enciclopédia'],
          c: 0, dif: 'facil',
          exp: 'Apelo emocional, urgência e ausência de fonte são sinais clássicos de desinformação.'
        },
        {
          q: 'A exclusão digital é um problema social porque',
          alt: ['aprofunda desigualdades de acesso a estudo e trabalho', 'garante igualdade de oportunidades a todos', 'desaparece sozinha com o tempo', 'só afeta pessoas idosas', 'não interfere na vida escolar'],
          c: 0, dif: 'medio',
          exp: 'Quem não tem acesso fica em desvantagem em estudos, emprego e serviços.'
        },
        {
          q: 'O fenômeno dos memes, que circulam e são recriados por usuários, ilustra',
          alt: ['a cultura participativa na internet', 'a proibição da criação de conteúdo', 'a ausência de humor na rede', 'a regulamentação de direitos autorais', 'o fim das redes sociais'],
          c: 0, dif: 'medio',
          exp: 'Os memes mostram usuários criando, compartilhando e transformando conteúdos.'
        },
        {
          q: 'Entregadores e motoristas de aplicativo discutem a ideia de "autonomia" porque',
          alt: ['a flexibilidade convive com a falta de direitos', 'têm todos os direitos de empregados formais', 'não dependem das plataformas para trabalhar', 'recebem salário fixo garantido', 'a tecnologia eliminou a necessidade de trabalho'],
          c: 0, dif: 'dificil',
          exp: 'O debate envolve flexibilidade versus proteção social, pois não há vínculo empregatício tradicional.'
        },
        {
          q: 'Ao receber uma imagem de um fato impressionante, uma atitude crítica é',
          alt: ['verificar a origem, a data e se não foi manipulada', 'compartilhar imediatamente', 'acreditar por ser viral', 'apagar sem ler', 'enviar apenas aos amigos próximos'],
          c: 0, dif: 'medio',
          exp: 'Imagens podem estar fora de contexto, editadas ou geradas por IA. É preciso checar.'
        },
        {
          q: 'O Marco Civil da Internet (2014) é importante porque',
          alt: ['fixa princípios, direitos e deveres para a internet', 'proíbe o acesso à rede no país', 'cria impostos sobre mensagens', 'extingue as redes sociais', 'só trata de comércio eletrônico'],
          c: 0, dif: 'dificil',
          exp: 'A lei fixa princípios como liberdade de expressão, privacidade e neutralidade da rede.'
        }
      ],
      pares: [
        { a: 'LGPD', b: 'Proteção de dados pessoais' },
        { a: 'Marco Civil', b: 'Princípios da internet no Brasil' },
        { a: 'Fake news', b: 'Desinformação' },
        { a: 'Algoritmo', b: 'Seleciona conteúdos para o usuário' },
        { a: 'Bolha de filtro', b: 'Só vemos o que já gostamos' },
        { a: 'Exclusão digital', b: 'Falta de acesso à tecnologia' },
        { a: 'Hipertexto', b: 'Texto com links' },
        { a: 'Creative Commons', b: 'Licenças abertas de uso' }
      ]
    }
  ]);
})();
