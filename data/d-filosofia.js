/* Filosofia — Ciências Humanas e suas Tecnologias.
   O ENEM traz um fragmento de texto filosófico e pede interpretação: não exige decorar autores, mas
   reconhecer a ideia central, o problema e as diferenças entre pensadores. */
(function () {
  var F = {
    inep: { titulo: 'INEP — Matrizes de Referência do Enem (Ciências Humanas e suas Tecnologias)', url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem' },
    estrategia: { titulo: 'Estratégia Vestibulares — Assuntos que mais caem no Enem (análise de 1998 a 2020)', url: 'https://vestibulares.estrategia.com/portal/enem-e-vestibulares/enem/assuntos-que-mais-caem-no-enem/' },
    critica: { titulo: 'A Crítica (MS) — Enem 2026: veja os temas mais cobrados na prova de Ciências Humanas', url: 'https://acritica.net/educacao/enem-2026-veja-os-temas-mais-cobrados-na-prova-de-ciencias-humanas/' },
    catraca: { titulo: 'Catraca Livre — Enem 2026: 5 estratégias para estudar Ciências Humanas sem depender da memorização', url: 'https://catracalivre.com.br/educacao/enem-2026-5-estrategias-para-estudar-ciencias-humanas-sem-depender-da-memorizacao/' },
    chaui: { titulo: 'CHAUÍ, M. Convite à Filosofia (obra de referência)', url: '' },
    aranha: { titulo: 'ARANHA, M. L.; MARTINS, M. H. Filosofando: introdução à filosofia (obra de referência)', url: '' },
    textos: { titulo: 'Textos originais: Platão (A República), Aristóteles (Ética a Nicômaco), Descartes (Discurso do Método), Kant, Hobbes (Leviatã), Rousseau (Do Contrato Social)', url: '' }
  };

  ENEM.temas('filosofia', [
    /* ============ 1. POLÍTICA ============ */
    {
      id: 'filosofia-politica',
      nome: 'Filosofia política: poder, Estado e liberdade',
      incidencia: 'alta',
      resumo: 'Maquiavel, Hobbes, Locke, Rousseau, Montesquieu e Arendt. É o campo mais frequente da Filosofia: o ENEM compara visões sobre origem do Estado, poder e cidadania.',
      conceitos: [
        {
          titulo: 'Maquiavel e o contratualismo',
          texto: '- **Maquiavel** (*O Príncipe*): analisa a política como ela **é**, e não como deveria ser; separa **política e moral religiosa**. Distingue **virtù** (capacidade de agir) e **fortuna** (acaso). "Os fins justificam os meios" é uma simplificação.\n- **Contratualismo**: o Estado nasce de um **contrato social** entre indivíduos, que saem do **estado de natureza**.\n- **Hobbes** (*Leviatã*): no estado de natureza há "guerra de todos contra todos"; para ter segurança, cedem poder a um **soberano forte** (absolutismo).\n- **Locke**: no estado de natureza há **direitos naturais** (vida, liberdade, propriedade); o governo é legítimo se **protege esses direitos**, e o povo pode **resistir** a governos tiranos (liberalismo).\n- **Rousseau**: o homem nasce bom e a sociedade o corrompe (propriedade privada). Propõe a **vontade geral** e a **soberania popular**.'
        },
        {
          titulo: 'Montesquieu, Arendt e a política contemporânea',
          texto: '- **Montesquieu**: **separação dos poderes** (Legislativo, Executivo e Judiciário) para impedir abusos.\n- **Hannah Arendt**: a política é o espaço da **ação coletiva e da liberdade** no mundo público; analisou o **totalitarismo** e a **"banalidade do mal"** (pessoas comuns que obedecem sem pensar).\n- **Bobbio, Habermas**: democracia, esfera pública e deliberação.\n- **Poder x violência x autoridade**: Arendt distingue o poder (agir em conjunto) da violência (instrumento).'
        },
        {
          titulo: 'Como o ENEM cobra',
          texto: 'Geralmente apresenta um **trecho** de Hobbes, Locke, Rousseau ou Maquiavel e pede para identificar a **concepção de Estado/liberdade**. A estratégia é perguntar: o autor vê o ser humano como **egoísta ou bom**? O poder deve ser **concentrado ou limitado**? De onde vem a **legitimidade**?'
        }
      ],
      pegadinhas: [
        'Atribuir a Maquiavel a frase "os fins justificam os meios": ela é uma **simplificação** de sua obra.',
        'Confundir **Hobbes** (Estado forte para evitar a guerra) com **Locke** (Estado limitado que protege direitos).',
        'Achar que Rousseau defende o poder absoluto do rei: defende a **soberania popular**.',
        'Confundir "banalidade do mal" (Arendt) com a ideia de que o mal é "comum" no sentido de natural: ela mostra a **ausência de reflexão**.'
      ],
      dicas: [
        'Monte uma tabela mental: **natureza humana → Estado → legitimidade**. Hobbes (egoísta → absoluto), Locke (direitos → limitado), Rousseau (bom → vontade geral).',
        'No texto, procure palavras como "soberano", "contrato", "direitos naturais", "vontade geral".',
        'Relacione com a atualidade: democracia, direitos e abuso de poder.'
      ],
      exemplo: {
        enunciado: 'Um autor afirma que, sem um poder acima de todos, os homens vivem em "guerra de todos contra todos". Que posição política ele sustenta?',
        resolucao: 'A de **Hobbes**: como o ser humano é movido pelo medo e pelo interesse, só um **soberano forte**, instituído por contrato, garante a paz e a segurança.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.chaui, F.textos],
      flashcards: [
        { f: 'Ideia central de Hobbes', v: 'Estado forte (Leviatã) para evitar a guerra de todos contra todos.' },
        { f: 'Ideia central de Locke', v: 'Direitos naturais (vida, liberdade, propriedade) e governo limitado.' },
        { f: 'Ideia central de Rousseau', v: 'Vontade geral e soberania popular; a sociedade corrompe o homem.' },
        { f: 'O que Montesquieu defendeu?', v: 'Separação dos poderes em Legislativo, Executivo e Judiciário.' },
        { f: 'Maquiavel: virtù e fortuna', v: 'Capacidade de agir com habilidade (virtù) diante do acaso (fortuna).' },
        { f: 'O que é contrato social?', v: 'Pacto pelo qual indivíduos saem do estado de natureza e criam o Estado.' },
        { f: 'O que é a banalidade do mal (Arendt)?', v: 'O mal praticado por pessoas comuns que não refletem sobre seus atos.' },
        { f: 'Para Arendt, o que é poder?', v: 'Capacidade de agir em conjunto, diferente da violência.' }
      ],
      quiz: [
        {
          q: 'Para Hobbes, a criação do Estado é necessária porque, no estado de natureza,',
          alt: ['há uma guerra de todos contra todos e a vida é insegura', 'os homens vivem em harmonia espontânea e igualdade', 'a propriedade privada ainda não foi corrompida', 'a vontade geral já governa todas as pessoas', 'os poderes estão divididos em três órgãos'],
          c: 0, dif: 'facil',
          exp: 'Hobbes vê o ser humano como inseguro e competitivo; o Estado forte garante a paz.'
        },
        {
          q: 'Em Locke, um governo perde legitimidade quando',
          alt: ['viola os direitos naturais de vida, liberdade e propriedade', 'deixa de punir todos os cidadãos igualmente', 'aceita ser fiscalizado pelo Legislativo', 'reconhece a separação dos poderes', 'garante a livre manifestação do pensamento'],
          c: 0, dif: 'medio',
          exp: 'Para Locke, o governo existe para proteger direitos; se os viola, o povo pode resistir.'
        },
        {
          q: 'A noção de vontade geral, em Rousseau, expressa',
          alt: ['o interesse coletivo que fundamenta a soberania popular', 'a soma dos interesses privados de cada indivíduo', 'o desejo do soberano absoluto', 'a defesa do poder hereditário dos reis', 'a obediência cega às tradições religiosas'],
          c: 0, dif: 'medio',
          exp: 'A vontade geral busca o bem comum e é a base da soberania do povo.'
        },
        {
          q: 'A separação dos poderes, defendida por Montesquieu, tem como objetivo',
          alt: ['limitar o poder e evitar abusos por parte de quem governa', 'concentrar o poder nas mãos de um monarca', 'eliminar a função do Judiciário', 'reduzir a participação do Legislativo', 'impedir que as leis sejam escritas'],
          c: 0, dif: 'facil',
          exp: 'Dividir o poder em órgãos independentes cria freios e contrapesos.'
        },
        {
          q: 'Quando Maquiavel afirma que o governante deve conhecer a "verdade efetiva das coisas", ele propõe',
          alt: ['analisar a política como ela é, e não como deveria ser', 'subordinar a política à moral religiosa', 'seguir apenas a vontade divina', 'abolir o Estado e a lei', 'seguir o ideal da cidade perfeita'],
          c: 0, dif: 'dificil',
          exp: 'Maquiavel inaugura uma análise realista, que separa a política das exigências morais tradicionais.'
        },
        {
          q: 'Hannah Arendt, ao falar da "banalidade do mal", sugere que atrocidades podem ser cometidas por',
          alt: ['pessoas comuns que deixam de pensar criticamente sobre seus atos', 'monstros com natureza essencialmente má e cruel', 'apenas líderes religiosos de países distantes', 'estrangeiros sem acesso a nenhuma educação', 'pessoas que se recusam a obedecer a qualquer ordem'],
          c: 0, dif: 'dificil',
          exp: 'Ela observou que a ausência de reflexão permite a obediência a regimes totalitários.'
        },
        {
          q: 'Entre as ideias contratualistas, Hobbes e Locke diferem porque Locke defende',
          alt: ['um governo limitado, que respeita direitos naturais', 'um soberano absoluto e sem limites', 'o fim de qualquer forma de Estado', 'a abolição da propriedade privada', 'o governo exclusivo da Igreja'],
          c: 0, dif: 'medio',
          exp: 'Locke é liberal; Hobbes defende um Estado forte e concentrado.'
        },
        {
          q: 'Dizer que "os fins justificam os meios" como síntese de Maquiavel é considerado',
          alt: ['uma simplificação que não traduz a complexidade de sua obra', 'uma citação textual e literal de O Príncipe', 'a tese central da obra de Rousseau', 'um princípio moral formulado por Kant', 'uma ideia desenvolvida por Montesquieu'],
          c: 0, dif: 'dificil',
          exp: 'A frase é popular, mas Maquiavel analisa condições do poder e não apenas defende qualquer meio.'
        }
      ],
      pares: [
        { a: 'Hobbes', b: 'Leviatã e Estado absoluto' },
        { a: 'Locke', b: 'Direitos naturais e liberalismo' },
        { a: 'Rousseau', b: 'Vontade geral' },
        { a: 'Montesquieu', b: 'Separação dos poderes' },
        { a: 'Maquiavel', b: 'Política realista' },
        { a: 'Arendt', b: 'Banalidade do mal' },
        { a: 'Contrato social', b: 'Origem do Estado' },
        { a: 'Estado de natureza', b: 'Vida antes do Estado' }
      ]
    },

    /* ============ 2. ÉTICA ============ */
    {
      id: 'etica-moral',
      nome: 'Ética e moral: virtude, dever e responsabilidade',
      incidencia: 'alta',
      resumo: 'Diferença entre ética e moral, Aristóteles, Kant, utilitarismo, Sartre e Nietzsche. Questões pedem aplicar teorias a dilemas do cotidiano.',
      conceitos: [
        {
          titulo: 'Ética e moral',
          texto: '**Moral** é o conjunto de normas e valores de uma sociedade (varia no tempo e no espaço). **Ética** é a **reflexão filosófica** sobre a moral: o que é bom, justo, devido.\n\n- **Relativismo moral**: valores dependem da cultura. **Universalismo**: há princípios válidos para todos.\n- **Liberdade e responsabilidade**: só se pode responder moralmente por atos **livres**.'
        },
        {
          titulo: 'Grandes teorias éticas',
          texto: '- **Aristóteles** (ética das virtudes): a vida boa é a **felicidade (eudaimonia)**, alcançada pela prática das **virtudes**; a virtude é o **meio-termo** entre excesso e falta (coragem entre covardia e temeridade).\n- **Kant** (deontologia): age-se moralmente por **dever**, seguindo o **imperativo categórico**: "aja de modo que a máxima de sua ação possa se tornar lei universal"; trate a humanidade sempre como **fim**, nunca só como meio.\n- **Utilitarismo** (Bentham, Mill): é bom o que gera **maior felicidade para o maior número**; avalia as **consequências**.\n- **Nietzsche**: crítica à moral tradicional ("moral de rebanho"); propõe a **transvaloração dos valores**.\n- **Sartre** (existencialismo): "a existência precede a essência"; o ser humano é **livre e responsável** por suas escolhas.'
        },
        {
          titulo: 'Ética hoje',
          texto: 'Debates contemporâneos: **bioética** (reprodução assistida, eutanásia), **ética ambiental**, **ética digital** (privacidade, algoritmos, inteligência artificial), **ética profissional** e **ética na política**. O ENEM costuma partir de um **dilema** e pedir a teoria que o explica.'
        }
      ],
      pegadinhas: [
        'Confundir **moral** (normas vividas) com **ética** (reflexão sobre elas).',
        'Dizer que Kant avalia o ato pelas **consequências**: ele se baseia no **dever e na intenção**.',
        'Confundir o **utilitarismo** (consequências) com a **ética das virtudes** (caráter).',
        'Achar que Sartre defende liberdade sem responsabilidade: a liberdade implica **responsabilidade total**.'
      ],
      dicas: [
        'Faça a pergunta-chave: o autor julga o ato pela **intenção/dever** (Kant), pelas **consequências** (utilitarismo) ou pelo **caráter** (Aristóteles)?',
        'Aplique o imperativo categórico: "e se todos fizessem isso?".',
        'Em dilemas atuais, identifique **valores em conflito** (liberdade × segurança, privacidade × transparência).'
      ],
      exemplo: {
        enunciado: 'Uma pessoa devolve uma carteira achada na rua, não por medo de punição, mas porque considera isso correto. Qual ética explica?',
        resolucao: 'A **ética kantiana**: o valor moral está em agir **por dever**, e não por interesse ou medo. A máxima "devolver o que não é meu" pode ser universalizada.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.chaui, F.textos],
      flashcards: [
        { f: 'Diferença entre ética e moral', v: 'Moral: normas e valores vividos; ética: reflexão filosófica sobre eles.' },
        { f: 'O que é o imperativo categórico?', v: 'Princípio de Kant: aja segundo uma máxima que possa valer como lei universal.' },
        { f: 'Para Aristóteles, o que é virtude?', v: 'Hábito de agir com equilíbrio, o meio-termo entre excesso e falta.' },
        { f: 'O que é eudaimonia?', v: 'Felicidade ou vida plena, fim da ação humana em Aristóteles.' },
        { f: 'Princípio do utilitarismo', v: 'Maior felicidade para o maior número de pessoas.' },
        { f: 'O que significa "a existência precede a essência" (Sartre)?', v: 'Primeiro existimos, e depois nos definimos por nossas escolhas.' },
        { f: 'O que é relativismo moral?', v: 'Ideia de que os valores morais dependem da cultura e do contexto.' },
        { f: 'O que é deontologia?', v: 'Ética baseada no dever, como a de Kant.' }
      ],
      quiz: [
        {
          q: 'Para Kant, uma ação tem valor moral quando é realizada',
          alt: ['por dever, segundo uma regra que possa valer para todos', 'em busca de prazer e satisfação imediata', 'apenas para evitar punições legais', 'somente se gerar lucro ao agente', 'conforme a opinião da maioria da sociedade'],
          c: 0, dif: 'facil',
          exp: 'O imperativo categórico exige que a ação seja universalizável e feita por dever.'
        },
        {
          q: 'Na ética de Aristóteles, a virtude é entendida como',
          alt: ['o meio-termo entre o excesso e a falta, fruto do hábito', 'a obediência a ordens divinas', 'a busca do prazer individual', 'a negação das paixões humanas', 'a indiferença diante do bem e do mal'],
          c: 0, dif: 'medio',
          exp: 'A coragem, por exemplo, é um equilíbrio entre covardia e temeridade.'
        },
        {
          q: 'O utilitarismo avalia a moralidade de uma ação',
          alt: ['pelas consequências, buscando a maior felicidade para o maior número', 'pela intenção do agente, independentemente do resultado', 'pela obediência às tradições religiosas', 'pelo caráter virtuoso do indivíduo', 'pela vontade do governante'],
          c: 0, dif: 'medio',
          exp: 'Bentham e Mill medem o valor das ações pelo bem-estar produzido.'
        },
        {
          q: 'Sartre afirma que "o homem está condenado a ser livre" para indicar que',
          alt: ['cada pessoa é responsável por suas escolhas, sem desculpas externas', 'a liberdade é uma ilusão criada pela sociedade', 'o destino de cada pessoa já está traçado por Deus', 'as pessoas não precisam tomar decisões na vida', 'a sociedade escolhe o caminho de cada indivíduo'],
          c: 0, dif: 'medio',
          exp: 'Sem uma essência dada, o indivíduo constrói a si mesmo e responde por isso.'
        },
        {
          q: 'A diferença entre ética e moral pode ser descrita assim:',
          alt: ['a moral reúne normas vividas; a ética reflete filosoficamente sobre elas', 'a ética é uma lista de proibições; a moral, uma ciência', 'ambas significam exatamente a mesma coisa', 'a moral é universal; a ética depende de cada cultura', 'a ética vale apenas para profissionais'],
          c: 0, dif: 'facil',
          exp: 'A ética faz a análise crítica das normas morais.'
        },
        {
          q: 'Quando alguém compra produtos de marcas que exploram trabalhadores e justifica dizendo que "todo mundo faz", o argumento é criticado por',
          alt: ['não universalizar o dever nem considerar as consequências sociais', 'seguir à risca o imperativo categórico de Kant', 'respeitar a dignidade humana dos trabalhadores', 'buscar a felicidade do maior número de pessoas', 'seguir a ética das virtudes de Aristóteles'],
          c: 0, dif: 'dificil',
          exp: 'A prática comum não justifica o ato, que trata pessoas como meios e gera dano coletivo.'
        },
        {
          q: 'O relativismo moral sustenta que',
          alt: ['os valores morais variam conforme a cultura e o contexto', 'existem regras morais idênticas em todas as épocas', 'a moral é uma lei da natureza', 'só há uma ética correta', 'valores são sempre impostos por um único líder'],
          c: 0, dif: 'medio',
          exp: 'Para o relativismo, não há padrão moral único válido para todos.'
        },
        {
          q: 'Os algoritmos que decidem quem recebe crédito geram um debate de ética digital sobre',
          alt: ['transparência, vieses e responsabilidade nas decisões automatizadas', 'o fim de qualquer uso de tecnologia no crédito', 'a proibição de qualquer coleta de dados digitais', 'a desnecessidade de qualquer tipo de regulação', 'a irrelevância dos direitos individuais nas redes'],
          c: 0, dif: 'dificil',
          exp: 'A ética digital discute discriminação algorítmica, privacidade e prestação de contas.'
        }
      ],
      pares: [
        { a: 'Kant', b: 'Imperativo categórico' },
        { a: 'Aristóteles', b: 'Virtude como meio-termo' },
        { a: 'Utilitarismo', b: 'Maior felicidade para o maior número' },
        { a: 'Sartre', b: 'Liberdade e responsabilidade' },
        { a: 'Nietzsche', b: 'Transvaloração dos valores' },
        { a: 'Eudaimonia', b: 'Vida plena e feliz' },
        { a: 'Deontologia', b: 'Ética do dever' },
        { a: 'Bioética', b: 'Dilemas da vida e da saúde' }
      ]
    },

    /* ============ 3. CONHECIMENTO ============ */
    {
      id: 'teoria-conhecimento',
      nome: 'Teoria do conhecimento: razão, experiência e ciência',
      incidencia: 'alta',
      resumo: 'Racionalismo, empirismo, Platão, Descartes, Bacon, Kant, Popper e Kuhn. Responde: como conhecemos? O que é verdade? O que é ciência?',
      conceitos: [
        {
          titulo: 'De Platão à Idade Moderna',
          texto: '- **Platão**: mundo sensível (aparências) × mundo das ideias (verdade). **Alegoria da caverna**: prisioneiros veem sombras; o filósofo sai e alcança o conhecimento verdadeiro.\n- **Aristóteles**: o conhecimento parte da **experiência**, com a lógica como instrumento.\n- **Racionalismo** (Descartes): a razão é a fonte segura do saber; **dúvida metódica** → "**penso, logo existo**" (*cogito*). Método: evidência, análise, síntese, enumeração.\n- **Empirismo** (Bacon, Locke, Hume): o conhecimento vem da **experiência sensível**; Bacon critica os **ídolos** (preconceitos) que impedem o saber.\n- **Kant**: síntese entre os dois; conhecemos o **fenômeno** (o que aparece) moldado por categorias da razão; o **noumeno** (coisa em si) escapa.'
        },
        {
          titulo: 'Verdade e ciência',
          texto: '- **Verdade**: correspondência com a realidade, coerência ou utilidade.\n- **Popper**: uma teoria é científica se pode ser **falseada** (refutada) por testes; o conhecimento avança por **conjecturas e refutações**.\n- **Kuhn**: a ciência passa por **revoluções**; um **paradigma** domina até acumular anomalias e ser substituído.\n- **Senso comum × ciência × filosofia**: senso comum é espontâneo; ciência usa método; filosofia questiona pressupostos.\n- **Pós-verdade, fake news e pensamento crítico**: temas atuais.'
        }
      ],
      pegadinhas: [
        'Confundir **racionalismo** (razão) com **empirismo** (experiência).',
        'Achar que Descartes duvida de tudo por ceticismo: a dúvida é um **método** para chegar a certezas.',
        'Dizer que Popper exige que a teoria seja **provada**: exige que possa ser **refutada**.',
        'Interpretar a alegoria da caverna como história sobre arquitetura: é sobre **conhecimento e educação**.'
      ],
      dicas: [
        'Na caverna: sombras = aparências/opinião; saída = ascensão ao conhecimento; sol = Bem/Verdade.',
        'Diferencie **fonte do saber**: razão (Descartes) × experiência (Bacon, Hume) × síntese (Kant).',
        'Em textos atuais, relacione a ciência com **método, evidência e revisão**, e a desinformação com **falta de checagem**.'
      ],
      exemplo: {
        enunciado: 'Na alegoria da caverna, o que representa o prisioneiro que sai e contempla a luz do sol?',
        resolucao: 'O **filósofo** que se liberta das aparências (sombras) e alcança o **conhecimento verdadeiro**, a realidade inteligível. O texto trata de educação como libertação.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.chaui, F.textos],
      flashcards: [
        { f: 'O que a caverna de Platão simboliza?', v: 'A passagem da ignorância (sombras) ao conhecimento verdadeiro (luz).' },
        { f: 'O que é o cogito de Descartes?', v: '"Penso, logo existo": primeira certeza, que resiste à dúvida.' },
        { f: 'O que é dúvida metódica?', v: 'Duvidar de tudo como método para encontrar uma verdade indubitável.' },
        { f: 'Racionalismo x empirismo', v: 'Racionalismo: o saber vem da razão; empirismo: vem da experiência.' },
        { f: 'O que são os ídolos de Bacon?', v: 'Preconceitos e falsas noções que impedem o conhecimento.' },
        { f: 'Critério de científicidade em Popper', v: 'Falseabilidade: a teoria deve poder ser refutada por testes.' },
        { f: 'O que é paradigma em Kuhn?', v: 'Conjunto de teorias e métodos aceitos pela comunidade científica.' },
        { f: 'Fenômeno x noumeno (Kant)', v: 'Fenômeno é o que aparece a nós; noumeno é a coisa em si.' }
      ],
      quiz: [
        {
          q: 'A alegoria da caverna, de Platão, é uma metáfora sobre',
          alt: ['a superação da ignorância rumo ao conhecimento verdadeiro', 'a construção de abrigos nos tempos pré-históricos', 'a vida política na cidade de Atenas clássica', 'a origem do universo explicada pelos deuses', 'o fim do pensamento racional na Grécia'],
          c: 0, dif: 'facil',
          exp: 'As sombras representam aparências; a saída da caverna simboliza o acesso à verdade.'
        },
        {
          q: 'A dúvida metódica de Descartes tem por objetivo',
          alt: ['encontrar uma certeza indubitável que sirva de fundamento ao saber', 'afirmar de modo definitivo que nada pode ser conhecido', 'rejeitar o uso da razão na busca da verdade', 'valorizar apenas as informações dos sentidos', 'defender as opiniões do senso comum'],
          c: 0, dif: 'medio',
          exp: 'Descartes duvida para chegar ao cogito, primeira verdade segura.'
        },
        {
          q: 'O empirismo defende que o conhecimento tem origem',
          alt: ['na experiência sensível', 'em ideias inatas', 'na revelação divina exclusivamente', 'na pura dedução matemática', 'na tradição familiar'],
          c: 0, dif: 'facil',
          exp: 'Para os empiristas, nada está no intelecto que não tenha passado pelos sentidos.'
        },
        {
          q: 'Segundo Popper, o que distingue uma teoria científica de uma não científica é',
          alt: ['a possibilidade de ser testada e refutada', 'a quantidade de adeptos que ela possui', 'a certeza absoluta de que é verdadeira', 'sua antiguidade na tradição', 'o prestígio do cientista que a propôs'],
          c: 0, dif: 'medio',
          exp: 'A falseabilidade é o critério de demarcação da ciência.'
        },
        {
          q: 'Para Thomas Kuhn, a ciência avança por',
          alt: ['revoluções em que um paradigma é substituído por outro', 'acúmulo linear e contínuo de verdades', 'abandono completo do método', 'simples opinião de especialistas', 'retorno ao senso comum'],
          c: 0, dif: 'dificil',
          exp: 'Anomalias acumuladas geram crise e a adoção de novo paradigma.'
        },
        {
          q: 'Francis Bacon chama de "ídolos" os',
          alt: ['preconceitos e falsas noções que obstruem o conhecimento', 'deuses cultuados em templos antigos', 'instrumentos usados no laboratório', 'resultados de experimentos corretos', 'axiomas da geometria'],
          c: 0, dif: 'dificil',
          exp: 'O cientista deve libertar-se dos ídolos para observar a natureza com rigor.'
        },
        {
          q: 'A diferença entre senso comum e conhecimento científico está em que a ciência',
          alt: ['usa método, evidências e verificação sistemática', 'dispensa qualquer prova', 'depende de crenças sem teste', 'aceita todas as ideias como verdadeiras', 'ignora a observação'],
          c: 0, dif: 'facil',
          exp: 'O saber científico é metódico e sujeito a crítica e revisão.'
        },
        {
          q: 'A disseminação de notícias falsas nas redes torna importante o exercício de',
          alt: ['pensamento crítico, checagem de fontes e análise de evidências', 'aceitar tudo o que viraliza', 'confiar somente em quem tem muitos seguidores', 'evitar a leitura de qualquer texto', 'abolir o debate público'],
          c: 0, dif: 'dificil',
          exp: 'A filosofia incentiva questionar pressupostos e verificar a validade dos argumentos.'
        }
      ],
      pares: [
        { a: 'Platão', b: 'Mundo das ideias e a caverna' },
        { a: 'Descartes', b: 'Cogito e dúvida metódica' },
        { a: 'Bacon', b: 'Empirismo e ídolos' },
        { a: 'Kant', b: 'Fenômeno e noumeno' },
        { a: 'Popper', b: 'Falseabilidade' },
        { a: 'Kuhn', b: 'Paradigmas e revoluções' },
        { a: 'Racionalismo', b: 'Razão como fonte do saber' },
        { a: 'Empirismo', b: 'Experiência como fonte do saber' }
      ]
    },

    /* ============ 4. ORIGENS ============ */
    {
      id: 'origens-filosofia',
      nome: 'Origens da filosofia: do mito ao logos',
      incidencia: 'media',
      resumo: 'Surgimento do pensamento filosófico na Grécia, pré-socráticos, Sócrates, Platão, Aristóteles e diferenças entre mito, religião, ciência e filosofia.',
      conceitos: [
        {
          titulo: 'Mito e logos',
          texto: 'O **mito** explica a origem do mundo por narrativas com deuses e forças sobrenaturais. A **filosofia** (séc. VI a.C., Grécia) busca explicações racionais (**logos**), com argumentos e crítica. Isso não significa que o mito é "falso": ele tem função simbólica e cultural.\n\n**Pré-socráticos**: procuram o **princípio (arché)** de tudo: Tales (água), Anaxímenes (ar), Heráclito (fogo e devir: "tudo flui"), Parmênides (o ser é imutável), Demócrito (átomos).'
        },
        {
          titulo: 'Sócrates, Platão e Aristóteles',
          texto: '- **Sócrates**: método do **diálogo** (ironia e **maiêutica**, "parto das ideias"), "só sei que nada sei"; busca definir virtudes; foi condenado em Atenas.\n- **Platão**: teoria das **ideias**, a caverna, a **República** (cidade justa governada por filósofos).\n- **Aristóteles**: **lógica**, observação da natureza, ética das virtudes, política ("o homem é um animal político"), **substância/matéria e forma**.\n- **Sofistas**: mestres de retórica, relativismo ("o homem é a medida de todas as coisas", Protágoras).'
        },
        {
          titulo: 'Para que serve a filosofia?',
          texto: 'A filosofia **questiona pressupostos**, analisa conceitos, desenvolve **argumentação** e **pensamento crítico**. Convida à **admiração** (thauma) e à dúvida. Diferencia-se da religião (fé/revelação) e da ciência (método empírico específico), embora dialogue com elas.'
        }
      ],
      pegadinhas: [
        'Dizer que a filosofia "acabou com" o mito: eles **coexistem**, com funções diferentes.',
        'Confundir **ironia socrática** (fingir ignorância para provocar reflexão) com zombaria.',
        'Atribuir a Sócrates escritos próprios: seu pensamento chega por **Platão e Xenofonte**.',
        'Confundir **sofistas** (retórica e relativismo) com filósofos que buscam verdades universais.'
      ],
      dicas: [
        'Memorize cada pré-socrático por **uma palavra**: Tales/água, Heráclito/devir, Parmênides/ser, Demócrito/átomo.',
        'Para Sócrates, pense em **perguntar e definir**, não em ensinar respostas prontas.',
        'Compare **mito × logos** pelo tipo de explicação: sobrenatural × racional.'
      ],
      exemplo: {
        enunciado: 'O método socrático da maiêutica consiste em:',
        resolucao: 'Fazer perguntas para que o interlocutor **chegue por si mesmo à verdade**, "dando à luz" as ideias. O professor não transmite respostas prontas, mas conduz à reflexão.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.chaui, F.aranha],
      flashcards: [
        { f: 'O que é logos?', v: 'Razão, discurso racional e argumentado.' },
        { f: 'O que é arché?', v: 'Princípio originário de todas as coisas, buscado pelos pré-socráticos.' },
        { f: 'O que é maiêutica?', v: 'Método socrático de fazer perguntas para auxiliar o "parto" das ideias.' },
        { f: 'Heráclito: ideia central', v: 'Tudo está em constante mudança (devir).' },
        { f: 'Parmênides: ideia central', v: 'O ser é uno, imutável e eterno.' },
        { f: 'Quem eram os sofistas?', v: 'Mestres de retórica que defendiam, em geral, o relativismo.' },
        { f: 'Aristóteles: "animal político"', v: 'O ser humano realiza-se vivendo em comunidade, na pólis.' },
        { f: 'Por que Sócrates foi condenado?', v: 'Acusado de corromper a juventude e de impiedade, em Atenas, em 399 a.C.' }
      ],
      quiz: [
        {
          q: 'A passagem do mito ao logos marca o nascimento da filosofia porque',
          alt: ['propõe explicações racionais, baseadas em argumentos', 'extingue qualquer forma de crença religiosa', 'exige obediência cega à tradição', 'rejeita a linguagem e o diálogo', 'aceita narrativas sem questionamento'],
          c: 0, dif: 'facil',
          exp: 'A filosofia busca justificar suas afirmações por meio da razão.'
        },
        {
          q: 'Os pré-socráticos dedicaram-se principalmente a',
          alt: ['investigar o princípio originário de todas as coisas (arché)', 'elaborar leis para regular o comércio entre cidades', 'catalogar as constelações para orientar a navegação', 'defender a retórica como arte de persuadir', 'criticar o uso da razão na explicação do mundo'],
          c: 0, dif: 'medio',
          exp: 'Tales, Anaxímenes, Heráclito e outros buscaram o elemento básico da natureza.'
        },
        {
          q: 'A ironia socrática consiste em',
          alt: ['fingir ignorância para levar o interlocutor a examinar suas certezas', 'ridicularizar publicamente quem discorda do mestre', 'ensinar aos discípulos respostas já prontas', 'defender a retórica como arte de convencer', 'recusar o diálogo com os jovens atenienses'],
          c: 0, dif: 'medio',
          exp: 'Ao perguntar, Sócrates revelava contradições e estimulava a busca pela verdade.'
        },
        {
          q: 'A frase "o homem é a medida de todas as coisas", de Protágoras, expressa',
          alt: ['o relativismo dos sofistas', 'o racionalismo de Descartes', 'a teoria das ideias de Platão', 'o imperativo categórico de Kant', 'a física de Newton'],
          c: 0, dif: 'dificil',
          exp: 'Para o relativismo, a verdade depende do ponto de vista humano.'
        },
        {
          q: 'Para Aristóteles, o ser humano é um "animal político" porque',
          alt: ['realiza sua natureza vivendo em comunidade, na pólis', 'é incapaz de viver em sociedade', 'prefere o isolamento ao convívio', 'depende apenas de instintos', 'rejeita as leis e as instituições'],
          c: 0, dif: 'medio',
          exp: 'A vida política permite o desenvolvimento das virtudes e da vida boa.'
        },
        {
          q: 'A principal diferença entre filosofia e religião, em termos de método, é que a filosofia',
          alt: ['fundamenta suas afirmações em argumentos racionais e crítica', 'baseia-se em revelações sem questionamento', 'recusa o uso de conceitos', 'proíbe a dúvida', 'dispensa o diálogo'],
          c: 0, dif: 'dificil',
          exp: 'A filosofia exige justificação racional e abertura à crítica.'
        },
        {
          q: 'Heráclito é lembrado pela ideia de que',
          alt: ['tudo muda continuamente, como um rio que nunca é o mesmo', 'o ser é imutável, eterno e único', 'a água é o princípio de todas as coisas', 'o mundo é composto de átomos indivisíveis', 'nada existe fora da mente humana'],
          c: 0, dif: 'facil',
          exp: 'O devir, a mudança constante, é central em Heráclito.'
        },
        {
          q: 'Em A República, Platão defende que a cidade justa deve ser governada por',
          alt: ['filósofos, que conhecem o Bem e a justiça', 'comerciantes que acumulam riquezas', 'soldados sem formação', 'tiranos que impõem leis', 'qualquer pessoa sorteada sem preparo'],
          c: 0, dif: 'dificil',
          exp: 'Para Platão, o conhecimento do Bem qualifica o governante.'
        }
      ],
      pares: [
        { a: 'Tales', b: 'Água como princípio' },
        { a: 'Heráclito', b: 'Devir, tudo flui' },
        { a: 'Parmênides', b: 'Ser imutável' },
        { a: 'Demócrito', b: 'Átomos' },
        { a: 'Sócrates', b: 'Maiêutica e ironia' },
        { a: 'Platão', b: 'Mundo das ideias' },
        { a: 'Aristóteles', b: 'Lógica e animal político' },
        { a: 'Sofistas', b: 'Retórica e relativismo' }
      ]
    },

    /* ============ 5. CONTEMPORÂNEA ============ */
    {
      id: 'filosofia-contemporanea',
      nome: 'Filosofia contemporânea: poder, cultura e sociedade',
      incidencia: 'media',
      resumo: 'Foucault, Escola de Frankfurt, Beauvoir, Byung-Chul Han e outros pensadores que analisam poder, consumo, tecnologia, gênero e vida digital.',
      conceitos: [
        {
          titulo: 'Poder, corpo e disciplina',
          texto: '- **Foucault**: o poder não está só no Estado, mas **difuso** em instituições (escola, prisão, hospital). **Sociedade disciplinar**: vigilância e normalização dos corpos (panóptico, de Bentham). **Biopoder**: gestão da vida e das populações.\n- **Simone de Beauvoir**: "não se nasce mulher, torna-se mulher": gênero é **construção social** (*O Segundo Sexo*).\n- **Existencialismo** (Sartre): liberdade e responsabilidade.'
        },
        {
          titulo: 'Escola de Frankfurt e a sociedade de consumo',
          texto: '**Adorno, Horkheimer, Marcuse, Benjamin**: criticam a **indústria cultural** (cultura transformada em mercadoria, padronizada e voltada ao lucro), a **razão instrumental** (razão a serviço do domínio e da eficiência) e o **consumismo**. Benjamin analisa a **reprodutibilidade técnica** da arte e a perda da "aura".\n\n**Debord**: "sociedade do espetáculo". **Baudrillard**: simulacros e hiperrealidade.'
        },
        {
          titulo: 'Tecnologia, redes e subjetividade',
          texto: '- **Zygmunt Bauman**: **modernidade líquida** — relações, trabalho e identidades instáveis.\n- **Byung-Chul Han**: **sociedade do desempenho e do cansaço**: o sujeito se autoexplora; a transparência e a hiperconexão geram esgotamento e depressão.\n- **Ética e tecnologia**: privacidade, vigilância, algoritmos, inteligência artificial.\n- **Habermas**: esfera pública, ação comunicativa e debate democrático.'
        }
      ],
      pegadinhas: [
        'Atribuir a Foucault a ideia de que o poder é só repressão: ele é também **produtivo** (cria saberes, normas, sujeitos).',
        'Confundir **indústria cultural** com "toda cultura de massa é ruim": é uma **crítica à padronização** e mercantilização.',
        'Dizer que Beauvoir nega diferenças biológicas: ela destaca a **construção social** do papel de gênero.',
        'Confundir **sociedade disciplinar** (Foucault) com **sociedade do desempenho** (Han).'
      ],
      dicas: [
        'Para Foucault, procure **vigilância, norma, instituição e poder**.',
        'Para Han, procure **autoexploração, cansaço, transparência e positividade**.',
        'Relacione textos de redes sociais e consumo com **indústria cultural** e **sociedade do espetáculo**.'
      ],
      exemplo: {
        enunciado: 'Uma pessoa se cobra produtividade constante, mesmo sem chefe. Que conceito de Byung-Chul Han explica?',
        resolucao: 'A **sociedade do desempenho**: o sujeito torna-se empresário de si, explorando-se voluntariamente, o que leva ao **cansaço e esgotamento**.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.chaui, F.aranha],
      flashcards: [
        { f: 'O que é o panóptico?', v: 'Modelo de prisão em que todos podem ser vigiados; símbolo da sociedade disciplinar (Foucault).' },
        { f: 'O que é biopoder?', v: 'Poder que gerencia a vida, a saúde e as populações.' },
        { f: 'Frase de Beauvoir', v: '"Não se nasce mulher, torna-se mulher."' },
        { f: 'O que é indústria cultural?', v: 'Produção padronizada de cultura como mercadoria (Adorno e Horkheimer).' },
        { f: 'O que é razão instrumental?', v: 'Razão voltada a meios eficientes, sem refletir sobre fins.' },
        { f: 'O que é modernidade líquida (Bauman)?', v: 'Época de vínculos frágeis e identidades instáveis.' },
        { f: 'O que é sociedade do desempenho (Han)?', v: 'Sociedade em que o indivíduo se explora em nome da produtividade.' },
        { f: 'O que é a sociedade do espetáculo (Debord)?', v: 'Sociedade em que as relações são mediadas por imagens.' }
      ],
      quiz: [
        {
          q: 'O panóptico, em Foucault, serve de metáfora para',
          alt: ['mecanismos de vigilância que levam o indivíduo a se autodisciplinar', 'a liberdade total de expressão nas instituições', 'o fim de qualquer forma de poder na sociedade', 'a obediência exclusiva aos reis absolutos', 'a ausência de instituições na vida moderna'],
          c: 0, dif: 'medio',
          exp: 'A possibilidade de ser observado induz comportamentos normatizados.'
        },
        {
          q: 'A afirmação de Beauvoir "não se nasce mulher, torna-se mulher" indica que',
          alt: ['o gênero é uma construção social e histórica', 'o papel da mulher é determinado pela natureza', 'a mulher deve seguir seu destino biológico', 'não existe diferença entre as culturas', 'o gênero não tem relação com a sociedade'],
          c: 0, dif: 'medio',
          exp: 'Para a autora, o papel social feminino é produzido por normas culturais.'
        },
        {
          q: 'Adorno e Horkheimer criticam a indústria cultural porque ela',
          alt: ['padroniza a cultura e a transforma em mercadoria, enfraquecendo a crítica', 'estimula a livre criação sem qualquer fim lucrativo', 'impede a circulação de informações entre as pessoas', 'elimina o consumo de bens culturais na sociedade', 'defende exclusivamente a cultura erudita tradicional'],
          c: 0, dif: 'medio',
          exp: 'A cultura de massa, guiada pelo lucro, tende a uniformizar e anestesiar.'
        },
        {
          q: 'Byung-Chul Han descreve a sociedade atual como do desempenho porque',
          alt: ['o indivíduo se cobra e se explora, levando ao cansaço e ao esgotamento', 'as pessoas são proibidas por lei de trabalhar', 'o Estado impõe vigilância física em todo lugar', 'a tecnologia foi totalmente abolida das cidades', 'o ócio é obrigatório e fiscalizado pelo governo'],
          c: 0, dif: 'dificil',
          exp: 'A lógica da positividade ("você pode tudo") gera autoexploração.'
        },
        {
          q: 'A modernidade líquida, conceito de Bauman, caracteriza-se por',
          alt: ['relações, trabalhos e identidades instáveis e flexíveis', 'estruturas sociais rígidas e imutáveis', 'estabilidade absoluta das instituições', 'ausência de qualquer tecnologia', 'valorização exclusiva da tradição'],
          c: 0, dif: 'dificil',
          exp: 'Tudo tende a mudar rapidamente, enfraquecendo vínculos duradouros.'
        },
        {
          q: 'Segundo Foucault, o poder nas sociedades modernas',
          alt: ['circula de forma difusa em escolas, prisões e hospitais', 'pertence somente ao rei e aos nobres da corte', 'inexiste fora da esfera do governo central', 'é sempre exercido por meio da força física direta', 'não produz saberes, normas nem comportamentos sociais'],
          c: 0, dif: 'facil',
          exp: 'O poder circula em redes e produz comportamentos, saberes e sujeitos.'
        },
        {
          q: 'Um influenciador que vende estilo de vida padronizado para milhões de seguidores ilustra',
          alt: ['a lógica da indústria cultural e da sociedade do espetáculo', 'a ética kantiana do dever', 'a dúvida metódica cartesiana', 'a alegoria da caverna aplicada à ciência', 'o contrato social de Rousseau'],
          c: 0, dif: 'dificil',
          exp: 'Imagens e consumo padronizados são temas centrais de Adorno e Debord.'
        },
        {
          q: 'A razão instrumental, criticada pela Escola de Frankfurt, é aquela que',
          alt: ['se concentra na eficiência dos meios e ignora a reflexão sobre os fins', 'busca a verdade absoluta apenas pela contemplação', 'rejeita completamente o uso da técnica', 'valoriza a emoção acima de qualquer lógica', 'nega a possibilidade de qualquer conhecimento'],
          c: 0, dif: 'dificil',
          exp: 'A razão passa a servir ao controle e à produtividade, sem questionar valores.'
        }
      ],
      pares: [
        { a: 'Foucault', b: 'Poder, vigilância e disciplina' },
        { a: 'Beauvoir', b: 'Gênero como construção social' },
        { a: 'Adorno', b: 'Indústria cultural' },
        { a: 'Debord', b: 'Sociedade do espetáculo' },
        { a: 'Bauman', b: 'Modernidade líquida' },
        { a: 'Byung-Chul Han', b: 'Sociedade do cansaço' },
        { a: 'Habermas', b: 'Esfera pública' },
        { a: 'Benjamin', b: 'Reprodutibilidade técnica da arte' }
      ]
    },

    /* ============ 6. ESTÉTICA ============ */
    {
      id: 'estetica-arte',
      nome: 'Estética: arte, beleza e experiência',
      incidencia: 'baixa',
      resumo: 'O que é arte? O belo é universal ou cultural? Platão, Aristóteles, Kant, Nietzsche, Benjamin e a arte contemporânea.',
      conceitos: [
        {
          titulo: 'O que é belo?',
          texto: '- **Platão**: a arte é **imitação** (mimese) da aparência, afastada da verdade; mas o belo pode conduzir às ideias.\n- **Aristóteles**: a arte imita para **revelar o universal**; a tragédia provoca a **catarse** (purificação das emoções).\n- **Kant**: o juízo de gosto é **subjetivo, mas com pretensão de universalidade**; o belo agrada sem interesse.\n- **Nietzsche**: o **apolíneo** (ordem, forma) e o **dionisíaco** (impulso, embriaguez) na arte.'
        },
        {
          titulo: 'Arte, técnica e mercado',
          texto: '**Walter Benjamin**: a **reprodutibilidade técnica** (fotografia, cinema) faz a obra perder sua **aura** (autenticidade, unicidade), mas democratiza o acesso.\n\n- **Indústria cultural** e arte como mercadoria.\n- **Arte engajada** (denúncia social), **arte de vanguarda** (ruptura, como o Dadaísmo e **Duchamp**, com o "readymade").\n- **Patrimônio e diversidade**: arte indígena, popular, afro-brasileira e periférica.'
        }
      ],
      pegadinhas: [
        'Confundir **catarse** (purificação emocional) com mera diversão.',
        'Dizer que Kant afirma que "gosto não se discute" no sentido relativista simples: ele busca **universalidade** do juízo.',
        'Achar que reprodutibilidade técnica é só perda: Benjamin vê também **democratização**.',
        'Entender "mimese" como cópia perfeita: é **imitação/representação**.'
      ],
      dicas: [
        'Procure as palavras: **mimese, catarse, aura, belo, gosto**.',
        'Relacione a arte a **função social**: denunciar, emocionar, educar, vender.',
        'Em obras como o "readymade", pense na **pergunta que a obra faz**: o que é arte?'
      ],
      exemplo: {
        enunciado: 'Por que uma fotografia reproduzida milhares de vezes tem, segundo Benjamin, menos "aura" que um quadro original?',
        resolucao: 'Porque a **unicidade e o aqui e agora** da obra se perdem quando ela é copiada em série. Em contrapartida, a reprodução torna a arte **acessível** a mais pessoas.'
      },
      fontes: [F.inep, F.estrategia, F.chaui, F.aranha],
      flashcards: [
        { f: 'O que é mimese?', v: 'Imitação ou representação da realidade pela arte.' },
        { f: 'O que é catarse?', v: 'Purificação das emoções provocada pela arte, como a tragédia.' },
        { f: 'O que é aura (Benjamin)?', v: 'Autenticidade e unicidade de uma obra, perdida com a reprodução técnica.' },
        { f: 'Apolíneo x dionisíaco', v: 'Ordem e forma (apolíneo) x impulso e êxtase (dionisíaco).' },
        { f: 'O que é o juízo de gosto em Kant?', v: 'Julgamento do belo, subjetivo, mas com pretensão universal.' },
        { f: 'O que é readymade?', v: 'Objeto comum elevado a obra de arte, como o urinol de Duchamp.' },
        { f: 'Platão e a arte', v: 'Arte como imitação da aparência, afastada da verdade.' },
        { f: 'O que é arte engajada?', v: 'Arte com intenção de intervir em questões sociais e políticas.' }
      ],
      quiz: [
        {
          q: 'Na Poética de Aristóteles, a catarse designa',
          alt: ['a purificação das emoções provocada pela experiência da tragédia', 'a cópia fiel dos objetos do mundo real', 'a venda de obras de arte a colecionadores', 'a condenação da música nas cidades gregas', 'a proibição do teatro pelas autoridades'],
          c: 0, dif: 'medio',
          exp: 'Ao sentir piedade e temor, o espectador purifica suas emoções.'
        },
        {
          q: 'Para Walter Benjamin, a reprodutibilidade técnica da obra de arte',
          alt: ['faz perder a aura, mas amplia o acesso do público', 'aumenta a unicidade da obra', 'impede qualquer difusão cultural', 'torna a arte sempre mais cara', 'elimina o papel social da arte'],
          c: 0, dif: 'medio',
          exp: 'A reprodução em massa democratiza, mas altera a relação com a obra original.'
        },
        {
          q: 'Em Platão, a arte é vista com desconfiança porque',
          alt: ['imita a aparência das coisas, distante da verdade das ideias', 'ensina diretamente a verdade superior das ideias', 'é fruto exclusivo da razão pura do filósofo', 'revela o mundo inteligível aos espectadores', 'substitui a filosofia como caminho de saber'],
          c: 0, dif: 'dificil',
          exp: 'Se o mundo sensível já é cópia, a arte seria cópia da cópia.'
        },
        {
          q: 'A oposição apolíneo-dionisíaco em Nietzsche refere-se à tensão entre',
          alt: ['ordem e forma de um lado e impulso e êxtase de outro', 'razão e fé religiosa no mundo medieval', 'riqueza e pobreza nas cidades gregas', 'campo e cidade na sociedade antiga', 'ciência e senso comum na vida cotidiana'],
          c: 0, dif: 'dificil',
          exp: 'A arte grega, para Nietzsche, nasce da combinação desses dois impulsos.'
        },
        {
          q: 'O gesto de Duchamp de expor um objeto comum como obra provoca a reflexão sobre',
          alt: ['os limites do que se considera arte', 'a obrigação de imitar a natureza', 'o domínio de técnicas tradicionais', 'a inutilidade dos museus', 'a perfeição do desenho acadêmico'],
          c: 0, dif: 'medio',
          exp: 'O readymade questiona o papel do artista e da instituição na definição da arte.'
        },
        {
          q: 'A arte engajada caracteriza-se por',
          alt: ['usar a criação artística para discutir questões sociais e políticas', 'evitar qualquer relação com o contexto social', 'produzir apenas objetos de decoração', 'rejeitar o contato com o público em geral', 'buscar apenas valor comercial no mercado'],
          c: 0, dif: 'facil',
          exp: 'O artista assume posição diante da realidade em que vive.'
        },
        {
          q: 'A noção de mimese refere-se a',
          alt: ['imitar ou representar a realidade por meio da arte', 'proibir a criação de imagens e esculturas', 'copiar com exatidão um único quadro famoso', 'abolir a imaginação do processo criativo', 'produzir apenas objetos de uso doméstico'],
          c: 0, dif: 'facil',
          exp: 'Mimese é a representação da realidade pelo artista.'
        },
        {
          q: 'A valorização da arte indígena, afro-brasileira e periférica no debate atual relaciona-se a',
          alt: ['reconhecimento da diversidade cultural e crítica a padrões eurocêntricos', 'rejeição de qualquer forma de produção artística', 'defesa de um único padrão estético universal', 'proibição das manifestações culturais populares', 'monopólio das grandes galerias sobre a arte'],
          c: 0, dif: 'dificil',
          exp: 'Questiona-se a ideia de que a arte "legítima" seja apenas a europeia ou erudita.'
        }
      ],
      pares: [
        { a: 'Mimese', b: 'Imitação da realidade' },
        { a: 'Catarse', b: 'Purificação das emoções' },
        { a: 'Aura', b: 'Unicidade da obra' },
        { a: 'Apolíneo', b: 'Ordem e forma' },
        { a: 'Dionisíaco', b: 'Impulso e êxtase' },
        { a: 'Duchamp', b: 'Readymade' },
        { a: 'Kant', b: 'Juízo de gosto' },
        { a: 'Arte engajada', b: 'Intervenção social' }
      ]
    }
  ]);
})();
