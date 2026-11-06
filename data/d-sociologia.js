/* Sociologia — Ciências Humanas e suas Tecnologias.
   O ENEM cobra a aplicação de conceitos a situações reais (trabalho, cultura, desigualdade, cidadania, movimentos sociais)
   a partir de textos, charges e dados. Os clássicos aparecem como ferramentas de leitura da realidade. */
(function () {
  var F = {
    inep: { titulo: 'INEP — Matrizes de Referência do Enem (Ciências Humanas e suas Tecnologias)', url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem' },
    estrategia: { titulo: 'Estratégia Vestibulares — Assuntos que mais caem no Enem (análise de 1998 a 2020)', url: 'https://vestibulares.estrategia.com/portal/enem-e-vestibulares/enem/assuntos-que-mais-caem-no-enem/' },
    critica: { titulo: 'A Crítica (MS) — Enem 2026: veja os temas mais cobrados na prova de Ciências Humanas', url: 'https://acritica.net/educacao/enem-2026-veja-os-temas-mais-cobrados-na-prova-de-ciencias-humanas/' },
    catraca: { titulo: 'Catraca Livre — Enem 2026: 5 estratégias para estudar Ciências Humanas sem depender da memorização', url: 'https://catracalivre.com.br/educacao/enem-2026-5-estrategias-para-estudar-ciencias-humanas-sem-depender-da-memorizacao/' },
    ibge: { titulo: 'IBGE — Indicadores sociais e Censo (consulta recomendada)', url: 'https://www.ibge.gov.br/' },
    giddens: { titulo: 'GIDDENS, A. Sociologia (obra de referência)', url: '' },
    tomazi: { titulo: 'TOMAZI, N. D. (org.). Sociologia para o ensino médio (obra de referência)', url: '' },
    classicos: { titulo: 'Textos clássicos: Durkheim (As regras do método sociológico), Weber (A ética protestante e o espírito do capitalismo), Marx e Engels (Manifesto Comunista)', url: '' }
  };

  ENEM.temas('sociologia', [
    /* ============ 1. CLÁSSICOS ============ */
    {
      id: 'sociologia-classica',
      nome: 'Sociologia clássica: Durkheim, Weber, Marx e Comte',
      incidencia: 'alta',
      resumo: 'Os fundadores da disciplina e suas lentes para interpretar a sociedade: fato social, ação social e luta de classes.',
      conceitos: [
        {
          titulo: 'Surgimento da Sociologia',
          texto: 'A Sociologia surge no século XIX, em meio às transformações da **Revolução Industrial** e da **Revolução Francesa**: urbanização, desigualdade e novas relações de trabalho exigiam explicações. **Comte** propõe o **positivismo**: estudar a sociedade com o método das ciências naturais ("ordem e progresso").'
        },
        {
          titulo: 'Os três clássicos',
          texto: '- **Durkheim**: o objeto é o **fato social**: maneiras de agir, pensar e sentir que são **exteriores** ao indivíduo, **coercitivas** e **gerais**. Conceitos: **solidariedade mecânica** (sociedades tradicionais, semelhança) e **orgânica** (divisão do trabalho, interdependência); **anomia** (ausência ou fragilidade de normas); estudo do **suicídio**.\n- **Weber**: sociologia **compreensiva**; estuda a **ação social** (com sentido atribuído pelo agente); tipos de ação (racional com relação a fins, a valores, afetiva, tradicional); **tipos de dominação** (tradicional, carismática, legal-racional); **burocracia**; relação entre **ética protestante e capitalismo**; "desencantamento do mundo".\n- **Marx**: **materialismo histórico**; a história é história da **luta de classes** (burguesia × proletariado); **modos de produção**; **mais-valia**; **alienação** do trabalhador; **ideologia**.'
        },
        {
          titulo: 'Como comparar',
          texto: '**Durkheim** olha a **sociedade** (coesão e normas); **Weber** olha o **indivíduo e o sentido da ação**; **Marx** olha o **conflito de classes e a economia**. Cada um oferece uma lente diferente para o mesmo problema, como o desemprego, a violência ou a corrupção.'
        }
      ],
      pegadinhas: [
        'Confundir **fato social** (exterior e coercitivo) com qualquer ato individual.',
        'Atribuir a Weber a visão de que a economia explica tudo: ele destaca o **sentido da ação** e a cultura.',
        'Dizer que Marx trata de "luta de ricos contra pobres" de forma genérica: é a luta entre **classes definidas pela posição na produção**.',
        'Confundir **anomia** (fragilidade de normas) com "desordem total".'
      ],
      dicas: [
        'Associe: Durkheim = **fato social/coesão**; Weber = **ação social/compreensão**; Marx = **classes/conflito**.',
        'Para dominação, memorize: **tradicional, carismática, legal-racional**.',
        'Em questões, aplique o conceito ao **exemplo do texto** (greve, religião, trabalho, violência).'
      ],
      exemplo: {
        enunciado: 'Um texto afirma que, em tempos de crise, a falta de normas claras e o enfraquecimento dos laços sociais aumentam o sofrimento e o isolamento. Que conceito se aplica?',
        resolucao: '**Anomia** (Durkheim): estado de fragilidade das normas e dos vínculos sociais, que pode levar a comportamentos desviantes e ao sentimento de falta de rumo.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.giddens, F.classicos],
      flashcards: [
        { f: 'O que é fato social (Durkheim)?', v: 'Modo de agir, pensar e sentir exterior ao indivíduo, coercitivo e geral.' },
        { f: 'Solidariedade mecânica x orgânica', v: 'Mecânica: baseada na semelhança; orgânica: baseada na divisão do trabalho e na interdependência.' },
        { f: 'O que é anomia?', v: 'Fragilidade ou ausência de normas sociais claras.' },
        { f: 'O que é ação social (Weber)?', v: 'Ação com sentido subjetivo, orientada para o comportamento dos outros.' },
        { f: 'Tipos de dominação (Weber)', v: 'Tradicional, carismática e legal-racional.' },
        { f: 'O que é mais-valia (Marx)?', v: 'Valor produzido pelo trabalhador e apropriado pelo capitalista.' },
        { f: 'O que é alienação (Marx)?', v: 'Perda do controle do trabalhador sobre o produto e o sentido de seu trabalho.' },
        { f: 'Lema do positivismo (Comte)', v: '"Ordem e progresso."' }
      ],
      quiz: [
        {
          q: 'Para Durkheim, o fato social caracteriza-se por ser',
          alt: ['exterior ao indivíduo, coercitivo e geral na sociedade', 'uma escolha individual sem qualquer influência social', 'um fenômeno natural independente da cultura', 'uma emoção íntima não compartilhada', 'um ato isolado sem consequências coletivas'],
          c: 0, dif: 'facil',
          exp: 'Normas, costumes e instituições orientam as pessoas de fora para dentro.'
        },
        {
          q: 'A diferença entre solidariedade mecânica e orgânica está em que a orgânica',
          alt: ['se baseia na interdependência gerada pela divisão do trabalho', 'se baseia na semelhança e na tradição entre os membros', 'surge apenas em sociedades sem divisão do trabalho', 'depende de crenças religiosas idênticas', 'ocorre apenas em grupos de caçadores'],
          c: 0, dif: 'medio',
          exp: 'Nas sociedades modernas, cada indivíduo depende do trabalho especializado dos outros.'
        },
        {
          q: 'Em Weber, uma liderança baseada em qualidades pessoais excepcionais e na devoção dos seguidores é um exemplo de dominação',
          alt: ['carismática', 'tradicional', 'legal-racional', 'burocrática', 'anômica'],
          c: 0, dif: 'medio',
          exp: 'A autoridade carismática funda-se no dom pessoal do líder.'
        },
        {
          q: 'Na perspectiva marxista, a mais-valia refere-se',
          alt: ['ao valor criado pelo trabalhador e apropriado pelo capitalista', 'ao salário integral que o trabalhador recebe', 'à doação de bens pelos mais ricos aos pobres', 'à valorização do trabalho artesanal no mercado', 'ao lucro dividido igualmente entre todos'],
          c: 0, dif: 'medio',
          exp: 'O capitalista fica com a diferença entre o valor criado e o salário pago.'
        },
        {
          q: 'A burocracia, para Weber, é típica da dominação legal-racional e visa',
          alt: ['garantir eficiência e previsibilidade por meio de regras impessoais', 'preservar costumes tradicionais sem alterações', 'seguir a vontade de um único líder carismático', 'eliminar todas as regras do funcionamento', 'proteger privilégios hereditários'],
          c: 0, dif: 'dificil',
          exp: 'Regras, hierarquia e impessoalidade caracterizam o modelo burocrático.'
        },
        {
          q: 'Quando um trabalhador não se reconhece no produto de seu trabalho nem controla o processo produtivo, Marx fala em',
          alt: ['alienação', 'solidariedade orgânica', 'anomia', 'ação afetiva', 'burocratização'],
          c: 0, dif: 'facil',
          exp: 'A alienação é a perda de controle e sentido sobre a atividade produtiva.'
        },
        {
          q: 'A sociologia surgiu no século XIX, em grande parte, para',
          alt: ['compreender as transformações trazidas pela industrialização e urbanização', 'estudar exclusivamente a vida rural da época medieval', 'rejeitar o método científico nas explicações', 'defender o absolutismo monárquico na Europa', 'substituir a filosofia antiga como disciplina'],
          c: 0, dif: 'medio',
          exp: 'A sociedade industrial gerou novos problemas e demandas de explicação.'
        },
        {
          q: 'Um estudo que busca entender o sentido que os envolvidos dão à sua ação, como em uma greve, aproxima-se da abordagem de',
          alt: ['Weber, com sua sociologia compreensiva', 'Comte, com a lei dos três estados', 'Durkheim, que descarta a subjetividade', 'Platão, na teoria das ideias', 'Kant, no imperativo categórico'],
          c: 0, dif: 'dificil',
          exp: 'Weber propõe interpretar o sentido subjetivo das ações sociais.'
        }
      ],
      pares: [
        { a: 'Durkheim', b: 'Fato social e anomia' },
        { a: 'Weber', b: 'Ação social e burocracia' },
        { a: 'Marx', b: 'Luta de classes e mais-valia' },
        { a: 'Comte', b: 'Positivismo' },
        { a: 'Solidariedade orgânica', b: 'Divisão do trabalho' },
        { a: 'Dominação carismática', b: 'Autoridade pelo dom do líder' },
        { a: 'Alienação', b: 'Perda do sentido do trabalho' },
        { a: 'Anomia', b: 'Fragilidade das normas' }
      ]
    },

    /* ============ 2. CULTURA ============ */
    {
      id: 'cultura-identidade',
      nome: 'Cultura, identidade e diversidade',
      incidencia: 'alta',
      resumo: 'Cultura, etnocentrismo, relativismo cultural, indústria cultural, cultura de massa, identidade, patrimônio e globalização cultural.',
      conceitos: [
        {
          titulo: 'Conceitos básicos',
          texto: '**Cultura** é o conjunto de saberes, valores, práticas e símbolos aprendidos socialmente. Não existe cultura "superior" ou "inferior".\n\n- **Etnocentrismo**: julgar outras culturas pelos padrões da sua, considerando a sua como superior.\n- **Relativismo cultural**: compreender cada cultura em seus próprios termos, sem hierarquizar.\n- **Aculturação**, **hibridismo** e **transculturação**: trocas e fusões.\n- **Diversidade cultural**, **identidade** e **alteridade** (reconhecer o outro).\n- **Cultura erudita, popular e de massa**.'
        },
        {
          titulo: 'Indústria cultural, mídia e consumo',
          texto: 'A **indústria cultural** (Adorno e Horkheimer) transforma a cultura em **mercadoria padronizada**. Hoje, as **redes sociais** e os algoritmos criam **bolhas**, influenciam o consumo e moldam identidades. O **consumismo** liga identidade a bens; a **cultura digital** amplia a participação e também a desinformação.\n\n**Cultura política**: valores e práticas sobre poder e cidadania.'
        },
        {
          titulo: 'Patrimônio e povos tradicionais',
          texto: '**Patrimônio material e imaterial** (festas, saberes, ofícios, línguas) é protegido pelo **IPHAN** e pela **Constituição**. **Povos indígenas, quilombolas e comunidades tradicionais** lutam por reconhecimento e território. A **valorização da diversidade** combate o **preconceito** e a **intolerância** (religiosa, racial, regional).'
        }
      ],
      pegadinhas: [
        'Confundir **etnocentrismo** (hierarquizar culturas) com **relativismo cultural** (compreender sem hierarquizar).',
        'Dizer que o **relativismo** aceita qualquer violação: ele não impede a defesa de **direitos humanos**, que é debate.',
        'Achar que cultura popular é "menos cultura" que a erudita: ambas são válidas.',
        'Confundir **globalização cultural** com homogeneização total: há também **resistência e hibridismo**.'
      ],
      dicas: [
        'Frases que julgam ("povos atrasados", "costume primitivo") → provável **etnocentrismo**.',
        'Em imagens de festas, rituais, músicas, pense em **patrimônio imaterial**.',
        'Em textos sobre redes, associe a **indústria cultural, algoritmos e bolhas**.'
      ],
      exemplo: {
        enunciado: 'Um turista critica um ritual local por considerá-lo "primitivo", comparando-o com seus próprios costumes. Que atitude sociológica isso revela?',
        resolucao: '**Etnocentrismo**: tomar a própria cultura como padrão para julgar outra. A atitude oposta seria o **relativismo cultural**, que busca compreender o ritual a partir de seu contexto e significado.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.catraca, F.giddens, F.tomazi],
      flashcards: [
        { f: 'O que é cultura?', v: 'Conjunto de saberes, valores e práticas aprendidos e compartilhados socialmente.' },
        { f: 'O que é etnocentrismo?', v: 'Julgar outras culturas a partir dos padrões da própria, considerando-a superior.' },
        { f: 'O que é relativismo cultural?', v: 'Compreender cada cultura em seus próprios termos, sem hierarquizar.' },
        { f: 'O que é alteridade?', v: 'Reconhecimento do outro como diferente e legítimo.' },
        { f: 'O que é indústria cultural?', v: 'Produção padronizada de cultura como mercadoria, voltada ao consumo de massa.' },
        { f: 'O que é patrimônio imaterial?', v: 'Saberes, festas, ofícios, línguas e tradições de um povo.' },
        { f: 'O que é hibridismo cultural?', v: 'Mistura de elementos de diferentes culturas.' },
        { f: 'O que são bolhas nas redes sociais?', v: 'Ambientes em que algoritmos mostram só conteúdos semelhantes aos que o usuário já consome.' }
      ],
      quiz: [
        {
          q: 'Considerar a própria cultura superior e julgar as demais por seus padrões é',
          alt: ['etnocentrismo', 'relativismo cultural', 'alteridade', 'hibridismo cultural', 'patrimônio imaterial'],
          c: 0, dif: 'facil',
          exp: 'Etnocentrismo é tomar a própria cultura como medida das outras.'
        },
        {
          q: 'O relativismo cultural defende que cada cultura deve ser compreendida',
          alt: ['em seu próprio contexto, sem hierarquias de superioridade', 'a partir dos padrões europeus', 'por meio da eliminação das diferenças', 'como atrasada em relação à moderna', 'apenas pela sua tecnologia'],
          c: 0, dif: 'facil',
          exp: 'Evita-se julgar práticas por critérios externos ao contexto em que ocorrem.'
        },
        {
          q: 'A indústria cultural é criticada por',
          alt: ['padronizar produtos culturais e transformá-los em mercadoria', 'proibir qualquer forma de arte', 'preservar apenas manifestações populares', 'impedir o acesso a qualquer informação', 'restringir a cultura às elites'],
          c: 0, dif: 'medio',
          exp: 'A lógica do lucro tende a uniformizar gostos e desestimular a crítica.'
        },
        {
          q: 'O fenômeno das bolhas nas redes sociais é problemático porque',
          alt: ['reduz o contato com opiniões diferentes e reforça crenças já existentes', 'amplia sempre o diálogo entre grupos opostos', 'impede o uso de qualquer plataforma digital', 'garante informações plenamente verificadas', 'elimina a influência dos algoritmos nas redes'],
          c: 0, dif: 'medio',
          exp: 'Algoritmos que filtram conteúdo podem aprofundar polarizações.'
        },
        {
          q: 'A proteção de festas, saberes e ofícios tradicionais como patrimônio imaterial busca',
          alt: ['preservar a memória e a identidade de grupos e povos', 'impedir qualquer mudança cultural', 'proibir a criação de novas manifestações', 'privilegiar apenas a cultura erudita', 'eliminar a diversidade regional'],
          c: 0, dif: 'medio',
          exp: 'Reconhecer o patrimônio imaterial valoriza práticas vivas e comunidades.'
        },
        {
          q: 'A mistura de elementos culturais de diferentes origens, como em muitas festas populares brasileiras, é chamada de',
          alt: ['hibridismo cultural', 'etnocentrismo', 'anomia', 'isolamento cultural', 'mais-valia'],
          c: 0, dif: 'medio',
          exp: 'Culturas em contato produzem formas novas, combinando influências.'
        },
        {
          q: 'A afirmação de que há culturas "superiores" e "inferiores" é contrariada pela Antropologia porque',
          alt: ['cada cultura tem lógica e valor próprios, sem hierarquia universal', 'existe apenas uma cultura verdadeiramente legítima', 'a tecnologia define o valor de cada povo', 'a cultura erudita é a única que tem valor', 'a cultura é inata e transmitida pela herança biológica'],
          c: 0, dif: 'dificil',
          exp: 'A antropologia moderna rejeita hierarquias culturais e o determinismo biológico.'
        },
        {
          q: 'O respeito à alteridade implica',
          alt: ['reconhecer o outro como diferente, com direito de existir e se expressar', 'tentar assimilar o outro à própria cultura', 'ignorar as diferenças culturais entre os grupos', 'impor um único modo de vida a todos', 'evitar qualquer contato com o que é diferente'],
          c: 0, dif: 'dificil',
          exp: 'Alteridade é o reconhecimento do outro em sua diferença, sem inferiorizá-lo.'
        }
      ],
      pares: [
        { a: 'Etnocentrismo', b: 'Julgar o outro por si mesmo' },
        { a: 'Relativismo cultural', b: 'Compreender sem hierarquizar' },
        { a: 'Alteridade', b: 'Reconhecer o outro' },
        { a: 'Indústria cultural', b: 'Cultura como mercadoria' },
        { a: 'Hibridismo', b: 'Mistura de culturas' },
        { a: 'Patrimônio imaterial', b: 'Saberes e festas' },
        { a: 'Bolha digital', b: 'Conteúdo filtrado por algoritmo' },
        { a: 'Cultura de massa', b: 'Produzida para grande público' }
      ]
    },

    /* ============ 3. ESTADO, PODER, CIDADANIA ============ */
    {
      id: 'estado-cidadania',
      nome: 'Estado, poder, democracia e cidadania',
      incidencia: 'alta',
      resumo: 'Poder, Estado, formas de governo, Constituição de 1988, direitos civis, políticos e sociais, participação e corrupção.',
      conceitos: [
        {
          titulo: 'Poder e Estado',
          texto: '**Poder** é a capacidade de influenciar ou impor decisões. Para **Weber**, o **Estado** detém o **monopólio legítimo da violência física** em um território. **Formas de governo**: monarquia, república; **regimes**: democrático, autoritário, totalitário. **Democracia**: soberania popular, eleições livres, pluralismo, liberdade de expressão, separação dos poderes.'
        },
        {
          titulo: 'Cidadania e direitos (T. H. Marshall)',
          texto: 'Cidadania é a **participação plena** na vida social e política. Para **Marshall**, conquistou-se em etapas:\n\n- **Direitos civis** (séc. XVIII): liberdade, propriedade, igualdade perante a lei.\n- **Direitos políticos** (séc. XIX): voto e participação.\n- **Direitos sociais** (séc. XX): trabalho, saúde, educação, previdência.\n\nNo Brasil, **José Murilo de Carvalho** observa uma **ordem inversa**: direitos sociais vieram antes (Era Vargas), os políticos oscilaram e os civis ainda são desiguais. A **Constituição de 1988** ampliou direitos; **direitos humanos** são universais.'
        },
        {
          titulo: 'Participação e problemas políticos',
          texto: '**Partidos, sindicatos, associações, conselhos e movimentos** são canais de participação. Debates atuais: **corrupção**, **abstenção**, **desinformação eleitoral**, **representatividade** (mulheres, negros, indígenas), **voto obrigatório**, **plebiscito e referendo**, **ativismo digital**.'
        }
      ],
      pegadinhas: [
        'Confundir **Estado** (instituições permanentes) com **governo** (grupo que administra temporariamente).',
        'Achar que democracia é só **votar**: inclui direitos, pluralismo e controle do poder.',
        'Confundir **direitos civis, políticos e sociais**: pense em liberdade, voto e bem-estar.',
        'Dizer que o Estado é neutro: está sempre em **disputa de interesses**.'
      ],
      dicas: [
        'Associe cada direito a um **símbolo**: civil = liberdade/justiça; político = voto; social = saúde, educação, trabalho.',
        'Em questões sobre participação, procure **canais coletivos** (sindicato, conselhos, associações).',
        'Para a Constituição de 1988, pense em **ampliação de direitos** e em instrumentos como a **ação popular**.'
      ],
      exemplo: {
        enunciado: 'Direito ao voto, a se candidatar e a se organizar em partidos: a que tipo de direito se refere?',
        resolucao: '**Direitos políticos**, que garantem participação nas decisões do Estado (votar, ser votado, organizar-se).'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.giddens, F.tomazi],
      flashcards: [
        { f: 'Estado x governo', v: 'Estado: conjunto permanente de instituições; governo: grupo que administra por tempo determinado.' },
        { f: 'Monopólio legítimo da violência (Weber)', v: 'Característica do Estado moderno em um território.' },
        { f: 'Direitos civis', v: 'Liberdade, propriedade, igualdade perante a lei, acesso à justiça.' },
        { f: 'Direitos políticos', v: 'Votar, ser votado, organizar-se politicamente.' },
        { f: 'Direitos sociais', v: 'Educação, saúde, trabalho, moradia, previdência.' },
        { f: 'O que é plebiscito?', v: 'Consulta popular feita antes da decisão.' },
        { f: 'O que é referendo?', v: 'Consulta popular para aprovar ou rejeitar uma decisão já tomada.' },
        { f: 'Marca de um regime totalitário', v: 'Controle do Estado sobre todos os aspectos da vida, partido único e repressão.' }
      ],
      quiz: [
        {
          q: 'O direito de votar e ser votado é classificado como direito',
          alt: ['político', 'civil', 'social', 'econômico', 'ambiental'],
          c: 0, dif: 'facil',
          exp: 'Direitos políticos asseguram participação nas decisões do Estado.'
        },
        {
          q: 'Para Max Weber, uma característica do Estado moderno é o',
          alt: ['monopólio legítimo do uso da força em um território', 'fim da burocracia', 'domínio exclusivo da Igreja', 'governo sem leis', 'poder baseado apenas na tradição'],
          c: 0, dif: 'medio',
          exp: 'Somente o Estado pode, legitimamente, usar a coerção física para fazer cumprir as leis.'
        },
        {
          q: 'A noção de cidadania plena envolve, segundo Marshall,',
          alt: ['direitos civis, políticos e sociais', 'apenas o direito de votar', 'somente o dever de pagar impostos', 'a ausência de obrigações', 'a posse de bens materiais'],
          c: 0, dif: 'medio',
          exp: 'A cidadania se constrói pela combinação dessas três dimensões.'
        },
        {
          q: 'A diferença entre plebiscito e referendo é que o referendo',
          alt: ['consulta o povo para aprovar ou rejeitar uma decisão já tomada', 'consulta o povo antes da elaboração da norma', 'é realizado apenas em regimes ditatoriais e autoritários', 'não envolve o voto direto da população', 'serve apenas para a escolha do presidente da República'],
          c: 0, dif: 'dificil',
          exp: 'Plebiscito é prévio; referendo é posterior à elaboração da medida.'
        },
        {
          q: 'A participação em conselhos, associações e sindicatos exemplifica',
          alt: ['canais de participação política além do voto', 'o fim da cidadania', 'a ausência de democracia', 'o domínio de um único partido', 'a censura aos movimentos sociais'],
          c: 0, dif: 'facil',
          exp: 'A cidadania ativa inclui organização coletiva e pressão sobre o poder público.'
        },
        {
          q: 'A baixa representatividade de mulheres, negros e indígenas no Parlamento brasileiro é discutida como',
          alt: ['um desafio para a democracia e para a igualdade política', 'prova de plena igualdade política', 'ausência de qualquer desigualdade', 'consequência da abolição do voto', 'resultado de leis que proíbem candidaturas'],
          c: 0, dif: 'medio',
          exp: 'A sub-representação indica barreiras à participação política de certos grupos.'
        },
        {
          q: 'José Murilo de Carvalho observa que, no Brasil, a conquista dos direitos',
          alt: ['seguiu ordem diferente da inglesa, com os sociais antes dos políticos', 'seguiu exatamente o mesmo padrão dos países europeus', 'começou com a concessão do voto universal e secreto', 'ocorreu sem qualquer tipo de conflito ou disputa', 'foi concluída ainda durante o século XIX'],
          c: 0, dif: 'dificil',
          exp: 'Direitos sociais foram ampliados em ditaduras e populismo, antes da plena democracia.'
        },
        {
          q: 'A difusão de desinformação em campanhas eleitorais afeta a democracia porque',
          alt: ['compromete a formação livre e informada da opinião dos eleitores', 'garante maior participação consciente da população', 'elimina a necessidade de eleições periódicas', 'aumenta a transparência das campanhas', 'dispensa o debate público sobre candidatos'],
          c: 0, dif: 'dificil',
          exp: 'A democracia depende de acesso a informações confiáveis para decisões livres.'
        }
      ],
      pares: [
        { a: 'Direitos civis', b: 'Liberdade e igualdade legal' },
        { a: 'Direitos políticos', b: 'Voto e participação' },
        { a: 'Direitos sociais', b: 'Saúde, educação e trabalho' },
        { a: 'Plebiscito', b: 'Consulta antes da decisão' },
        { a: 'Referendo', b: 'Consulta depois da decisão' },
        { a: 'Estado', b: 'Instituições permanentes' },
        { a: 'Governo', b: 'Gestão temporária' },
        { a: 'Totalitarismo', b: 'Controle total e partido único' }
      ]
    },

    /* ============ 4. TRABALHO ============ */
    {
      id: 'trabalho-capitalismo',
      nome: 'Trabalho, capitalismo e mundo do trabalho',
      incidencia: 'alta',
      resumo: 'Divisão do trabalho, taylorismo, fordismo, toyotismo, flexibilização, desemprego, informalidade, uberização e direitos trabalhistas.',
      conceitos: [
        {
          titulo: 'Trabalho e organização da produção',
          texto: '**Trabalho** transforma a natureza e constitui o ser humano; no capitalismo, é **mercadoria** (venda da força de trabalho por salário).\n\n- **Taylorismo**: gerência científica; tarefas fragmentadas, cronometragem, controle do tempo.\n- **Fordismo**: linha de montagem, produção e consumo em massa.\n- **Toyotismo**: produção flexível, equipes, "just in time", terceirização.\n- **Divisão social e técnica do trabalho**.'
        },
        {
          titulo: 'Transformações recentes',
          texto: '**Flexibilização** e **precarização**: contratos temporários, terceirização, informalidade. **Uberização**: trabalho por aplicativos, sem vínculo formal, com controle algorítmico. **Teletrabalho** e **economia de plataformas**. **Desemprego estrutural** (automação) e **subemprego**.\n\n**Direitos trabalhistas**: CLT, salário mínimo, jornada, férias, FGTS; **sindicatos** e **greves**. **Trabalho análogo ao escravo** persiste e é crime. **Desigualdades**: gênero, raça, idade.'
        },
        {
          titulo: 'Sociedade de consumo e saúde',
          texto: '**Consumismo** associa valor e identidade a bens. Há debate sobre **saúde mental e trabalho** (burnout), **tempo livre** e **qualidade de vida**. Para Marx, a **alienação** e a **mais-valia** explicam a exploração; para Weber, a racionalização do trabalho.'
        }
      ],
      pegadinhas: [
        'Confundir **taylorismo** (controle de tempos e movimentos) com **fordismo** (linha de montagem e consumo em massa).',
        'Achar que **uberização** é "empreendedorismo livre": costuma envolver **ausência de direitos** e controle algorítmico.',
        'Dizer que **informalidade** é sempre escolha: muitas vezes é falta de alternativas.',
        'Esquecer que **desemprego** tem causas estruturais (tecnologia, ciclos econômicos).'
      ],
      dicas: [
        'Diferencie: **Taylor** (tempo), **Ford** (linha), **Toyota** (flexibilidade).',
        'Em textos sobre aplicativos, procure **autonomia aparente × precarização**.',
        'Relacione trabalho e direitos com a **CLT**, **sindicatos** e **movimentos sociais**.'
      ],
      exemplo: {
        enunciado: 'Entregadores por aplicativo trabalham longas jornadas, sem vínculo formal nem direitos garantidos. Que processo sociológico isso ilustra?',
        resolucao: 'A **uberização** e a **precarização do trabalho**: relações flexíveis e sem proteção, com gestão por algoritmos. O trabalhador assume custos e riscos, enquanto a plataforma controla preços e tarefas.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.giddens, F.classicos],
      flashcards: [
        { f: 'Taylorismo', v: 'Controle científico do tempo e do movimento, com tarefas fragmentadas.' },
        { f: 'Fordismo', v: 'Linha de montagem e produção em massa, para consumo em massa.' },
        { f: 'Toyotismo', v: 'Produção flexível, sob demanda e com trabalhadores polivalentes.' },
        { f: 'O que é uberização?', v: 'Trabalho intermediado por plataformas, sem vínculo formal e com controle algorítmico.' },
        { f: 'O que é precarização?', v: 'Perda de direitos, estabilidade e proteção no trabalho.' },
        { f: 'O que é terceirização?', v: 'Contratação de outra empresa para executar parte das atividades.' },
        { f: 'O que é desemprego estrutural?', v: 'Eliminação de postos por mudanças tecnológicas e econômicas duradouras.' },
        { f: 'O que é a CLT?', v: 'Consolidação das Leis do Trabalho (1943), que reúne direitos dos trabalhadores formais.' }
      ],
      quiz: [
        {
          q: 'A linha de montagem e a produção em massa são marcas do',
          alt: ['fordismo', 'toyotismo', 'artesanato medieval', 'trabalho servil', 'extrativismo colonial'],
          c: 0, dif: 'facil',
          exp: 'Henry Ford padronizou e acelerou a produção por meio da esteira.'
        },
        {
          q: 'O toyotismo difere do fordismo por privilegiar',
          alt: ['produção flexível, sob demanda, com trabalhadores polivalentes', 'estoques volumosos de mercadorias', 'tarefas extremamente repetitivas em cada posto', 'trabalho individual isolado', 'ausência de qualquer controle de qualidade'],
          c: 0, dif: 'medio',
          exp: 'O just in time reduz estoques e exige flexibilidade e trabalho em equipe.'
        },
        {
          q: 'A uberização do trabalho caracteriza-se por',
          alt: ['relações mediadas por plataformas, sem vínculo formal e controle algorítmico', 'contratos com plenos direitos trabalhistas garantidos', 'estabilidade no emprego garantida por lei', 'jornada fixa de oito horas e presença sindical', 'ausência de qualquer tecnologia na intermediação'],
          c: 0, dif: 'medio',
          exp: 'O trabalhador aparece como autônomo, mas depende das regras da plataforma.'
        },
        {
          q: 'O taylorismo buscava aumentar a produtividade por meio',
          alt: ['do controle do tempo e da divisão rígida de tarefas', 'da autonomia total dos trabalhadores', 'da eliminação das metas', 'da produção artesanal', 'da participação dos operários na gestão'],
          c: 0, dif: 'medio',
          exp: 'Taylor cronometrava movimentos para eliminar desperdícios.'
        },
        {
          q: 'O desemprego estrutural está relacionado a',
          alt: ['mudanças tecnológicas e econômicas que eliminam postos permanentemente', 'falta de vontade de trabalhar de parte da população', 'períodos curtos de férias coletivas nas empresas', 'aumento de impostos sobre o consumo de bens', 'queda passageira da demanda por produtos sazonais'],
          c: 0, dif: 'dificil',
          exp: 'A automação e a reorganização produtiva reduzem determinados empregos de forma duradoura.'
        },
        {
          q: 'Para Marx, a alienação no trabalho ocorre quando o trabalhador',
          alt: ['não controla o processo nem se reconhece no produto de sua atividade', 'é dono dos meios de produção da empresa', 'organiza a produção em cooperativas autogeridas', 'recebe todo o valor que produz com o trabalho', 'escolhe livremente o horário e as metas da tarefa'],
          c: 0, dif: 'dificil',
          exp: 'A divisão do trabalho e a propriedade privada separam o trabalhador do resultado de seu trabalho.'
        },
        {
          q: 'A existência de trabalho análogo ao de escravo na atualidade é',
          alt: ['crime, apesar da abolição formal, e ainda persiste em alguns setores', 'prática permitida por lei em áreas rurais', 'um fenômeno do passado, já totalmente extinto', 'conduta legal em empresas privadas de grande porte', 'forma moderna de contrato regular de trabalho'],
          c: 0, dif: 'medio',
          exp: 'Fiscalizações ainda resgatam trabalhadores em condições degradantes.'
        },
        {
          q: 'A terceirização é criticada, por parte de sindicatos, por',
          alt: ['poder reduzir salários e direitos e fragmentar os trabalhadores', 'garantir estabilidade vitalícia aos contratados', 'ampliar a participação dos sindicatos nas empresas', 'eliminar qualquer custo para as empresas', 'dispensar a assinatura de contratos de trabalho'],
          c: 0, dif: 'dificil',
          exp: 'A contratação por empresa intermediária pode enfraquecer garantias e a ação coletiva.'
        }
      ],
      pares: [
        { a: 'Taylorismo', b: 'Controle do tempo' },
        { a: 'Fordismo', b: 'Linha de montagem' },
        { a: 'Toyotismo', b: 'Produção flexível' },
        { a: 'Uberização', b: 'Trabalho por aplicativos' },
        { a: 'Precarização', b: 'Perda de direitos' },
        { a: 'Mais-valia', b: 'Exploração em Marx' },
        { a: 'Terceirização', b: 'Contrata empresa intermediária' },
        { a: 'CLT', b: 'Direitos trabalhistas' }
      ]
    },

    /* ============ 5. DESIGUALDADE ============ */
    {
      id: 'desigualdade-estratificacao',
      nome: 'Desigualdade, estratificação e preconceito',
      incidencia: 'alta',
      resumo: 'Classes sociais, mobilidade, desigualdade de renda, racismo estrutural, gênero, preconceito, discriminação e políticas afirmativas.',
      conceitos: [
        {
          titulo: 'Estratificação e classes',
          texto: '**Estratificação social** é a hierarquização de grupos. Modelos: **castas** (hereditária e fechada), **estamentos** (direito/status), **classes** (renda e posição econômica; mobilidade possível).\n\n- **Marx**: classes definidas pela relação com os meios de produção.\n- **Weber**: classe, **status** e **poder**.\n- **Mobilidade social**: ascendente ou descendente; no Brasil, a **desigualdade é alta** e a mobilidade é limitada.\n- **Indicadores**: renda, escolaridade, Gini, pobreza e extrema pobreza.'
        },
        {
          titulo: 'Raça, gênero e outras desigualdades',
          texto: '- **Racismo estrutural**: desigualdade racial reproduzida por instituições, mesmo sem intenção individual. **Preconceito** (ideia prévia) × **discriminação** (ação) × **racismo** (sistema).\n- **Democracia racial**: ideia (associada a Freyre) criticada por **Florestan Fernandes** por **mascarar o racismo**.\n- **Gênero**: papéis socialmente construídos; **machismo**, **violência contra a mulher** (Lei Maria da Penha), **desigualdade salarial**.\n- **Interseccionalidade** (Kimberlé Crenshaw): sobreposição de desigualdades (raça, gênero, classe).\n- **Capacitismo, etarismo, LGBTfobia, xenofobia.**'
        },
        {
          titulo: 'Políticas afirmativas e inclusão',
          texto: '**Ações afirmativas**: cotas raciais e sociais em universidades (Lei de Cotas, 2012), concursos, programas de transferência de renda (**Bolsa Família**), **acessibilidade**. Buscam **reparar desigualdades históricas** e ampliar oportunidades. Gera debate sobre **mérito e equidade**.'
        }
      ],
      pegadinhas: [
        'Confundir **preconceito** (opinião prévia), **discriminação** (ação) e **racismo estrutural** (sistema).',
        'Dizer que o Brasil é uma "democracia racial" plena: os dados mostram **desigualdades raciais** persistentes.',
        'Achar que as cotas são "privilégio": são ações para **corrigir desigualdades históricas**.',
        'Confundir **casta** (nascimento, fechado) com **classe** (renda, mobilidade possível).'
      ],
      dicas: [
        'Em tabelas e gráficos, compare **renda, escolaridade e emprego por raça e gênero**.',
        'Para racismo, pense em **estrutura**, e não só em atitudes individuais.',
        'Use **interseccionalidade** quando o texto envolver mais de uma desigualdade.'
      ],
      exemplo: {
        enunciado: 'Dados mostram que mulheres negras têm, em média, os menores rendimentos do mercado de trabalho. Que conceito ajuda a explicar?',
        resolucao: '**Interseccionalidade**: raça, gênero e classe se combinam e aprofundam as desigualdades. O resultado não é a soma de discriminações isoladas, mas uma posição específica de vulnerabilidade.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.ibge, F.giddens],
      flashcards: [
        { f: 'Casta x classe', v: 'Casta: posição hereditária e fechada; classe: baseada na posição econômica, com mobilidade possível.' },
        { f: 'O que é mobilidade social?', v: 'Mudança de posição na hierarquia social, ascendente ou descendente.' },
        { f: 'O que é racismo estrutural?', v: 'Desigualdade racial reproduzida pelo funcionamento normal das instituições.' },
        { f: 'Preconceito x discriminação', v: 'Preconceito é a ideia prévia; discriminação é a ação que prejudica.' },
        { f: 'O que é interseccionalidade?', v: 'Combinação de desigualdades (raça, gênero, classe) que se reforçam.' },
        { f: 'O que são ações afirmativas?', v: 'Políticas que buscam reduzir desigualdades históricas, como as cotas.' },
        { f: 'Crítica de Florestan Fernandes', v: 'O mito da democracia racial esconde o racismo e a desigualdade.' },
        { f: 'Para que serve a Lei Maria da Penha?', v: 'Combater a violência doméstica e familiar contra a mulher.' }
      ],
      quiz: [
        {
          q: 'A principal diferença entre classe social e casta é que, na classe,',
          alt: ['a mobilidade é possível, pois depende da posição econômica', 'a posição é hereditária e imutável', 'o nascimento determina totalmente o destino', 'o contato entre grupos é proibido', 'a religião define a ocupação'],
          c: 0, dif: 'facil',
          exp: 'Nas sociedades de classes, é possível ascender ou descer socialmente.'
        },
        {
          q: 'O racismo estrutural pode ser descrito como',
          alt: ['desigualdade racial reproduzida pelo funcionamento das instituições sociais', 'apenas insultos individuais e isolados entre pessoas', 'um fenômeno restrito ao passado da escravidão', 'ausência total de preconceito nas instituições', 'uma questão exclusivamente de renda das famílias'],
          c: 0, dif: 'medio',
          exp: 'Mesmo sem intenção individual, regras e práticas podem reproduzir desvantagens.'
        },
        {
          q: 'Florestan Fernandes criticou o mito da democracia racial porque ele',
          alt: ['escondia o racismo e as desigualdades vividas pela população negra', 'comprovava a plena igualdade racial no país', 'defendia a segregação racial oficial', 'era uma política do regime de Apartheid', 'foi criada pelos movimentos antirracistas'],
          c: 0, dif: 'medio',
          exp: 'A ideia de harmonia racial impedia o reconhecimento da discriminação.'
        },
        {
          q: 'As políticas de cotas em universidades públicas têm como objetivo',
          alt: ['ampliar o acesso de grupos historicamente excluídos', 'reduzir a qualidade do ensino superior', 'eliminar o vestibular e o Enem', 'beneficiar apenas as elites do país', 'impedir a mobilidade social ascendente'],
          c: 0, dif: 'facil',
          exp: 'As cotas buscam reparar desigualdades históricas de acesso à educação.'
        },
        {
          q: 'O conceito de interseccionalidade enfatiza que',
          alt: ['raça, gênero e classe se combinam e produzem formas específicas de desigualdade', 'cada desigualdade atua de forma totalmente isolada', 'a desigualdade só depende da renda', 'a discriminação não existe', 'o gênero é irrelevante nas relações sociais'],
          c: 0, dif: 'medio',
          exp: 'Mulheres negras, por exemplo, enfrentam combinação de racismo e machismo.'
        },
        {
          q: 'A distinção entre preconceito e discriminação está em que a discriminação é',
          alt: ['a ação concreta que prejudica alguém com base em estereótipos', 'uma ideia prévia que não chega a ser praticada', 'sinônimo de tolerância entre os grupos', 'uma política pública de inclusão social', 'um sentimento natural e inevitável das pessoas'],
          c: 0, dif: 'medio',
          exp: 'O preconceito é uma atitude mental; a discriminação é seu efeito prático.'
        },
        {
          q: 'A Lei Maria da Penha representa',
          alt: ['um instrumento de combate à violência doméstica contra a mulher', 'uma norma de incentivo à industrialização do país', 'uma política de reforma agrária em larga escala', 'uma lei de proteção aos biomas e à fauna', 'uma regra que extingue direitos trabalhistas básicos'],
          c: 0, dif: 'facil',
          exp: 'A lei de 2006 criou mecanismos de proteção e punição para agressores.'
        },
        {
          q: 'A persistente desigualdade de renda entre brasileiros brancos e negros pode ser interpretada como',
          alt: ['efeito de desigualdades históricas no acesso a educação e emprego', 'resultado de diferenças naturais de talento entre grupos', 'reflexo de uma democracia racial plenamente realizada', 'consequência apenas de escolhas pessoais isoladas', 'prova de que o racismo já foi totalmente superado'],
          c: 0, dif: 'dificil',
          exp: 'A herança da escravidão e a discriminação seguem moldando oportunidades.'
        }
      ],
      pares: [
        { a: 'Casta', b: 'Posição hereditária e fechada' },
        { a: 'Classe', b: 'Posição econômica com mobilidade' },
        { a: 'Racismo estrutural', b: 'Desigualdade nas instituições' },
        { a: 'Democracia racial', b: 'Mito criticado por Florestan' },
        { a: 'Interseccionalidade', b: 'Raça, gênero e classe combinados' },
        { a: 'Cotas', b: 'Ação afirmativa' },
        { a: 'Maria da Penha', b: 'Violência doméstica' },
        { a: 'Gini', b: 'Mede desigualdade de renda' }
      ]
    },

    /* ============ 6. MOVIMENTOS SOCIAIS ============ */
    {
      id: 'movimentos-sociais',
      nome: 'Movimentos sociais, violência e direitos humanos',
      incidencia: 'media',
      resumo: 'Movimentos sociais clássicos e contemporâneos, protestos, ativismo digital, violência urbana, direitos humanos e justiça.',
      conceitos: [
        {
          titulo: 'Movimentos sociais',
          texto: '**Movimentos sociais** são ações coletivas organizadas para reivindicar direitos, mudar normas ou resistir a opressões. Exemplos: **movimento operário**, **sufragista e feminista**, **negro**, **LGBTQIA+**, **ambientalista**, **indígena**, **MST**, **estudantil**, **pelos direitos das pessoas com deficiência**.\n\n- **Novos movimentos sociais**: identidade, cultura, ambiente.\n- **Ativismo digital**: mobilizações pelas redes (hashtags, abaixo-assinados), com vantagens e riscos (superficialidade, desinformação).\n- **Desobediência civil** e **greves** como formas de ação.'
        },
        {
          titulo: 'Violência e direitos humanos',
          texto: '- **Violência**: física, simbólica (Bourdieu: imposição de valores que legitima desigualdades), institucional e estrutural.\n- **Violência urbana**: ligada a desigualdade, tráfico, ausência do Estado e **letalidade policial**, que atinge mais jovens negros e pobres.\n- **Direitos humanos**: universais e indivisíveis (Declaração de 1948); **ECA**, **Estatuto do Idoso**, **Lei de Combate ao Racismo**.\n- **Sistema prisional** e **encarceramento em massa**; **justiça restaurativa**; **segurança pública cidadã**.'
        },
        {
          titulo: 'Participação e mudança social',
          texto: 'Movimentos influenciaram leis e políticas, como **direito de voto às mulheres**, **Lei Maria da Penha**, **cotas** e a **Constituição de 1988**. A mudança social é lenta, conflituosa e contraditória. Instrumentos: **mobilização, pressão política, litígio, cultura**.'
        }
      ],
      pegadinhas: [
        'Achar que movimentos sociais são só "baderna": são ações coletivas legítimas que buscam direitos.',
        'Confundir **violência simbólica** (imposição de valores) com violência física.',
        'Dizer que direitos humanos protegem "só criminosos": são **universais**, para todos.',
        'Achar que ativismo digital basta para a mudança: ele é **um** canal entre outros.'
      ],
      dicas: [
        'Identifique **quem reivindica, o que, contra quem e por quais meios**.',
        'Em violência, relacione **desigualdade, território e ausência de políticas públicas**.',
        'Use **Bourdieu** para violência simbólica e **Foucault/Weber** para poder e coerção.'
      ],
      exemplo: {
        enunciado: 'Um grupo usa a hashtag e protestos para pressionar por leis de proteção às mulheres. Que tipo de ação é essa?',
        resolucao: '**Ação coletiva de movimento social**, combinando **ativismo digital** e **mobilização nas ruas**, com o objetivo de ampliar direitos por meio da pressão política.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.giddens, F.tomazi],
      flashcards: [
        { f: 'O que é movimento social?', v: 'Ação coletiva organizada para reivindicar direitos ou transformar a sociedade.' },
        { f: 'O que é violência simbólica (Bourdieu)?', v: 'Imposição de valores e visões de mundo que legitima desigualdades.' },
        { f: 'O que é desobediência civil?', v: 'Descumprimento pacífico e consciente de uma norma considerada injusta.' },
        { f: 'O que é o MST?', v: 'Movimento dos Trabalhadores Rurais Sem Terra, que luta pela reforma agrária.' },
        { f: 'O que é ativismo digital?', v: 'Mobilização política por meio das redes e plataformas.' },
        { f: 'O que é a Declaração Universal dos Direitos Humanos?', v: 'Documento da ONU (1948) com direitos básicos de todas as pessoas.' },
        { f: 'O que é justiça restaurativa?', v: 'Abordagem que busca reparar danos e restabelecer relações, e não só punir.' },
        { f: 'O que é ECA?', v: 'Estatuto da Criança e do Adolescente (1990), que garante proteção integral.' }
      ],
      quiz: [
        {
          q: 'Um movimento social caracteriza-se por',
          alt: ['ação coletiva organizada em defesa de direitos ou mudanças sociais', 'atividade individual sem objetivo político', 'ação de um governo contra a população', 'ausência de qualquer organização', 'defesa exclusiva de interesses privados'],
          c: 0, dif: 'facil',
          exp: 'São grupos que se articulam para reivindicar, resistir ou transformar normas.'
        },
        {
          q: 'A violência simbólica, em Bourdieu, é aquela que',
          alt: ['impõe valores que legitimam desigualdades, muitas vezes sem ser percebida', 'envolve sempre agressão física visível', 'ocorre apenas em situações de guerra declarada', 'é praticada somente por criminosos condenados', 'não tem efeitos sociais mensuráveis'],
          c: 0, dif: 'dificil',
          exp: 'Ela naturaliza hierarquias por meio da cultura, da linguagem e da educação.'
        },
        {
          q: 'Os direitos humanos são considerados universais porque',
          alt: ['valem para todas as pessoas, sem distinção de origem, raça ou crença', 'são válidos somente para cidadãos de cada país', 'protegem apenas grupos majoritários da sociedade', 'dependem da religião adotada por cada governo', 'se aplicam apenas a quem cumpre as leis'],
          c: 0, dif: 'facil',
          exp: 'A Declaração de 1948 afirma a dignidade inerente a todos os seres humanos.'
        },
        {
          q: 'A desobediência civil consiste em',
          alt: ['descumprir pacificamente uma norma injusta, assumindo as consequências', 'atacar violentamente as instituições do Estado e seus agentes', 'ignorar as leis apenas por conveniência pessoal', 'obedecer a todas as ordens do governo sem questionar', 'apoiar abertamente regimes autoritários e ditaduras'],
          c: 0, dif: 'medio',
          exp: 'Gandhi e Martin Luther King usaram essa estratégia em suas lutas.'
        },
        {
          q: 'A violência urbana está relacionada, em grande medida, a',
          alt: ['desigualdades sociais e ausência de políticas públicas em certos territórios', 'uma característica biológica de grupos pobres', 'apenas escolhas individuais isoladas e sem contexto', 'prosperidade econômica distribuída uniformemente', 'ausência de qualquer forma de organização criminosa'],
          c: 0, dif: 'medio',
          exp: 'A sociologia explica a violência por fatores sociais e institucionais, não por traços inatos.'
        },
        {
          q: 'O ativismo digital é limitado quando',
          alt: ['a mobilização se restringe às curtidas e não gera ação concreta', 'envolve debate e organização coletiva dos grupos', 'complementa os protestos realizados nas ruas', 'amplia a visibilidade de causas importantes', 'reúne pessoas em torno de pautas comuns'],
          c: 0, dif: 'medio',
          exp: 'A adesão superficial pode substituir a participação efetiva, embora redes também mobilizem.'
        },
        {
          q: 'A justiça restaurativa propõe',
          alt: ['reparar danos e restabelecer relações, além de responsabilizar o agressor', 'aumentar apenas a severidade das penas aplicadas', 'abolir qualquer tipo de responsabilização', 'apagar os registros de crimes do sistema', 'eliminar o papel da vítima no processo'],
          c: 0, dif: 'dificil',
          exp: 'O foco é o diálogo entre vítima, ofensor e comunidade para reparar o dano.'
        },
        {
          q: 'A luta histórica de mulheres pelo direito ao voto exemplifica',
          alt: ['como movimentos sociais podem provocar mudanças legais e políticas', 'a ausência de participação política feminina', 'uma concessão espontânea dos governos às mulheres', 'a inutilidade de qualquer mobilização coletiva', 'um fenômeno sem relação com direitos políticos'],
          c: 0, dif: 'facil',
          exp: 'O sufragismo mobilizou campanhas por décadas até a conquista do voto.'
        }
      ],
      pares: [
        { a: 'MST', b: 'Reforma agrária' },
        { a: 'Sufragismo', b: 'Direito ao voto feminino' },
        { a: 'Violência simbólica', b: 'Bourdieu' },
        { a: 'Desobediência civil', b: 'Descumprimento pacífico da norma' },
        { a: 'Ativismo digital', b: 'Mobilização em redes' },
        { a: 'ECA', b: 'Proteção à criança e ao adolescente' },
        { a: 'Direitos humanos', b: 'Universais e indivisíveis' },
        { a: 'Justiça restaurativa', b: 'Reparar danos e relações' }
      ]
    },

    /* ============ 7. SOCIOLOGIA BRASILEIRA ============ */
    {
      id: 'sociologia-brasil',
      nome: 'Pensamento social brasileiro e sociedade contemporânea',
      incidencia: 'media',
      resumo: 'Gilberto Freyre, Sérgio Buarque de Holanda, Florestan Fernandes, Darcy Ribeiro; Bauman e a modernidade líquida; consumo, mídia e redes sociais.',
      conceitos: [
        {
          titulo: 'Interpretações do Brasil',
          texto: '- **Gilberto Freyre** (*Casa-Grande & Senzala*): destacou a miscigenação e a influência africana e indígena na cultura; sua ideia de **democracia racial** foi criticada por mascarar a desigualdade.\n- **Sérgio Buarque de Holanda** (*Raízes do Brasil*): o **"homem cordial"** (relações pessoais e afetivas que invadem o espaço público, dificultando a impessoalidade das instituições; não significa "bondoso").\n- **Florestan Fernandes**: estudou o **racismo** e a integração do negro na sociedade de classes; criticou a **democracia racial**.\n- **Darcy Ribeiro** (*O Povo Brasileiro*): formação de um povo mestiço; **etnia nacional**.\n- **Caio Prado Jr.**, **Celso Furtado**: formação econômica e subdesenvolvimento.'
        },
        {
          titulo: 'Sociedade contemporânea',
          texto: '- **Bauman**: **modernidade líquida** — relações e identidades frágeis; consumo e individualismo.\n- **Giddens**: reflexividade e riscos da modernidade.\n- **Bourdieu**: **capital cultural, social e econômico**; **habitus**; reprodução social pela escola.\n- **Sociedade do consumo, mídia e redes**: formação de opinião, cultura da imagem, fake news.\n- **Globalização, migrações, meio ambiente e pandemias** como temas sociais atuais.'
        },
        {
          titulo: 'Como aplicar',
          texto: 'Questões do ENEM costumam trazer **um trecho** de um intérprete do Brasil e pedir a ideia central. A estratégia é identificar **o que o autor valoriza** (miscigenação, cordialidade, classe, raça) e **qual crítica** foi feita a ele depois.'
        }
      ],
      pegadinhas: [
        'Interpretar "homem cordial" como "pessoa gentil": significa **predomínio de laços pessoais e emocionais** nas relações sociais.',
        'Aceitar a **democracia racial** como retrato fiel: foi **criticada** por esconder o racismo.',
        'Confundir **capital cultural** (conhecimentos, gostos, diplomas) com capital econômico.',
        'Achar que Bauman fala de "líquido" só como metáfora de água: é sobre **instabilidade das relações**.'
      ],
      dicas: [
        'Associe: Freyre = miscigenação; Sérgio Buarque = homem cordial; Florestan = racismo; Darcy = povo mestiço.',
        'Em Bourdieu, pense em **escola e reprodução das desigualdades**.',
        'Em questões de consumo e redes, use Bauman: **vínculos frágeis, identidades instáveis**.'
      ],
      exemplo: {
        enunciado: 'Alguém tenta resolver um problema na repartição pública apelando para "conhecidos" em vez de seguir o procedimento formal. Que ideia de Sérgio Buarque de Holanda ajuda a interpretar?',
        resolucao: 'O **homem cordial**: predomínio de relações pessoais e afetivas no espaço público, o que dificulta a **impessoalidade** das regras e favorece favores e privilégios.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.giddens, F.tomazi],
      flashcards: [
        { f: 'Ideia central de Casa-Grande & Senzala', v: 'Valorização da miscigenação e da contribuição de indígenas e africanos na formação do Brasil.' },
        { f: 'O que é o homem cordial?', v: 'Sujeito guiado por laços pessoais e afetivos, que leva essa lógica ao espaço público.' },
        { f: 'Crítica de Florestan à democracia racial', v: 'Ela esconde o racismo e a desigualdade.' },
        { f: 'Quem escreveu O Povo Brasileiro?', v: 'Darcy Ribeiro.' },
        { f: 'O que é modernidade líquida?', v: 'Época de relações, identidades e instituições instáveis (Bauman).' },
        { f: 'O que é habitus (Bourdieu)?', v: 'Disposições adquiridas que orientam percepções e ações das pessoas.' },
        { f: 'Capital cultural', v: 'Conhecimentos, gostos, títulos e hábitos valorizados socialmente.' },
        { f: 'O que é reprodução social?', v: 'Processo pelo qual as desigualdades se mantêm entre gerações, inclusive via escola.' }
      ],
      quiz: [
        {
          q: 'O conceito de "homem cordial", de Sérgio Buarque de Holanda, refere-se',
          alt: ['à tendência de levar relações pessoais ao espaço público', 'à bondade natural atribuída ao povo brasileiro', 'à ausência de conflitos entre as classes sociais', 'ao respeito absoluto às regras impessoais', 'à rejeição de qualquer vínculo afetivo no trabalho'],
          c: 0, dif: 'medio',
          exp: 'A cordialidade é a prevalência do coração e da intimidade sobre a impessoalidade.'
        },
        {
          q: 'A ideia de democracia racial foi criticada por sociólogos como Florestan Fernandes porque',
          alt: ['ocultava o racismo e a desigualdade que afetavam a população negra', 'provava a inexistência de preconceito', 'foi inventada pelos movimentos negros', 'garantia plena igualdade de oportunidades', 'decorria de políticas de segregação oficial'],
          c: 0, dif: 'medio',
          exp: 'Os estudos mostraram persistência de desigualdades raciais.'
        },
        {
          q: 'Para Bauman, a modernidade líquida caracteriza-se por',
          alt: ['relações e identidades flexíveis e instáveis, em constante mudança', 'instituições sólidas e imutáveis ao longo do tempo', 'estabilidade nos vínculos de trabalho e família', 'rejeição total do consumo e da publicidade', 'ausência de tecnologia nas relações sociais'],
          c: 0, dif: 'medio',
          exp: 'Na sociedade de consumo, vínculos tendem a ser temporários e descartáveis.'
        },
        {
          q: 'Para Bourdieu, a escola pode contribuir para a reprodução social porque',
          alt: ['valoriza o capital cultural que as classes privilegiadas já possuem', 'garante o mesmo ponto de partida a todos os alunos', 'elimina as diferenças de origem entre os estudantes', 'distribui o capital econômico de forma igualitária', 'impede o acesso de qualquer grupo ao ensino'],
          c: 0, dif: 'dificil',
          exp: 'Alunos com mais capital cultural tendem a ser favorecidos pelos critérios escolares.'
        },
        {
          q: 'Darcy Ribeiro, em O Povo Brasileiro, interpreta o Brasil como',
          alt: ['uma sociedade formada pela mistura de matrizes indígena, africana e europeia', 'um país de plena homogeneidade étnica e cultural', 'uma extensão cultural direta do continente europeu', 'um povo sem história própria e sem identidade', 'uma sociedade totalmente livre de conflitos sociais'],
          c: 0, dif: 'medio',
          exp: 'Ele destaca a formação mestiça e as marcas da violência colonial.'
        },
        {
          q: 'O capital cultural, em Bourdieu, inclui',
          alt: ['conhecimentos, hábitos, títulos e gostos valorizados socialmente', 'apenas o dinheiro depositado em contas bancárias', 'bens imóveis e terras de uma família', 'somente o número de amigos nas redes', 'recursos naturais de um determinado país'],
          c: 0, dif: 'facil',
          exp: 'É um recurso simbólico que influencia posições sociais.'
        },
        {
          q: 'Gilberto Freyre ganhou destaque ao',
          alt: ['valorizar a contribuição de africanos e indígenas à cultura brasileira', 'defender a superioridade racial dos europeus', 'negar a existência da miscigenação no país', 'rejeitar o estudo da vida doméstica e familiar', 'propor a volta do regime escravista'],
          c: 0, dif: 'facil',
          exp: 'Casa-Grande & Senzala deslocou a explicação do Brasil do determinismo racial para a cultura.'
        },
        {
          q: 'No consumo contemporâneo, a ideia de obsolescência rápida de produtos e relações é associada à',
          alt: ['modernidade líquida', 'sociedade feudal', 'solidariedade mecânica', 'dominação tradicional', 'cultura camponesa isolada'],
          c: 0, dif: 'dificil',
          exp: 'Bauman descreve a lógica do descartável que alcança também os laços sociais.'
        }
      ],
      pares: [
        { a: 'Gilberto Freyre', b: 'Miscigenação e Casa-Grande' },
        { a: 'Sérgio Buarque', b: 'Homem cordial' },
        { a: 'Florestan Fernandes', b: 'Crítica ao mito da democracia racial' },
        { a: 'Darcy Ribeiro', b: 'O Povo Brasileiro' },
        { a: 'Bauman', b: 'Modernidade líquida' },
        { a: 'Bourdieu', b: 'Capital cultural e habitus' },
        { a: 'Celso Furtado', b: 'Subdesenvolvimento' },
        { a: 'Reprodução social', b: 'Desigualdade entre gerações' }
      ]
    }
  ]);
})();
