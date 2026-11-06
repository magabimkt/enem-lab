/* História — Ciências Humanas e suas Tecnologias.
   Incidência (1998–2020, levantamento de terceiros): História do Brasil ~50%, História geral ~30%.
   O ENEM cobra PROCESSOS, causas e consequências, e a leitura de fontes; datas isoladas importam pouco. */
(function () {
  var F = {
    inep: { titulo: 'INEP — Matrizes de Referência do Enem (Ciências Humanas e suas Tecnologias)', url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem' },
    estrategia: { titulo: 'Estratégia Vestibulares — Assuntos que mais caem no Enem (análise de 1998 a 2020)', url: 'https://vestibulares.estrategia.com/portal/enem-e-vestibulares/enem/assuntos-que-mais-caem-no-enem/' },
    critica: { titulo: 'A Crítica (MS) — Enem 2026: veja os temas mais cobrados na prova de Ciências Humanas', url: 'https://acritica.net/educacao/enem-2026-veja-os-temas-mais-cobrados-na-prova-de-ciencias-humanas/' },
    catraca: { titulo: 'Catraca Livre — Enem 2026: 5 estratégias para estudar Ciências Humanas sem depender da memorização', url: 'https://catracalivre.com.br/educacao/enem-2026-5-estrategias-para-estudar-ciencias-humanas-sem-depender-da-memorizacao/' },
    fausto: { titulo: 'FAUSTO, B. História do Brasil (obra de referência)', url: '' },
    schwarcz: { titulo: 'SCHWARCZ, L. M.; STARLING, H. Brasil: uma biografia (obra de referência)', url: '' },
    hobsbawm: { titulo: 'HOBSBAWM, E. A era das revoluções / Era dos extremos (obras de referência)', url: '' }
  };

  ENEM.temas('historia', [
    /* ============ 1. BRASIL COLÔNIA ============ */
    {
      id: 'brasil-colonia',
      nome: 'Brasil Colônia: economia, escravidão e resistência',
      incidencia: 'alta',
      resumo: 'Como Portugal organizou a colônia, por que a escravidão sustentou a economia e como indígenas e africanos resistiram. Costuma aparecer ligada a fontes (cartas, gravuras, leis).',
      conceitos: [
        {
          titulo: 'Colonização e economia',
          texto: '- **Pau-brasil** (extrativismo, 1500–1530) com trabalho indígena (escambo).\n- **Capitanias hereditárias** (1534) e **Governo-Geral** (1549): tentativa de controlar e ocupar o território.\n- **Açúcar** (séc. XVI–XVII, Nordeste): engenho, **monocultura** de exportação, **latifúndio** e **mão de obra escrava**.\n- **Mineração** (séc. XVIII, Minas, Goiás, Mato Grosso): **quinto** (imposto de 20%), **derrama** e casas de fundição; deslocou o eixo econômico para o Sudeste. A capital passou a Salvador (1549) e ao Rio de Janeiro (1763).\n- **Pecuária** e **sertão**: interiorização do povoamento.'
        },
        {
          titulo: 'Sociedade escravista e resistência',
          texto: 'A colônia foi uma sociedade **hierarquizada**: senhores, trabalhadores livres pobres e **escravizados africanos e indígenas**. O tráfico atlântico trouxe milhões de africanos.\n\n**Formas de resistência**: fugas, **quilombos** (o de **Palmares**, liderado por **Zumbi**, até 1695), revoltas, sabotagem e preservação de culturas (religiões, língua, música, culinária). Indígenas resistiram com guerras e alianças (**Confederação dos Tamoios**) e foram alvo das **bandeiras** e do aldeamento missionário.'
        },
        {
          titulo: 'Conflitos coloniais e movimentos de contestação',
          texto: '- **União Ibérica** (1580–1640) e **invasões holandesas** (Nordeste, governo de Maurício de Nassau).\n- **Inconfidência Mineira** (1789): elite de Minas contra a **derrama** e o domínio da metrópole; **Tiradentes** foi executado.\n- **Conjuração Baiana** (1798): mais popular (alfaiates), com ideais de **igualdade** e fim da escravidão.\n- **Política pombalina** (séc. XVIII): centralização e fortalecimento do Estado português.\n\nEsses movimentos mostram a **crise do sistema colonial**, ligada ao Iluminismo e à Independência dos EUA.'
        }
      ],
      pegadinhas: [
        'Dizer que os africanos escravizados foram "passivos": a **resistência** foi permanente (quilombos, fugas, revoltas, cultura).',
        'Confundir **Inconfidência Mineira** (elite, contra a derrama) com **Conjuração Baiana** (camadas populares, ideais de igualdade).',
        'Achar que a mineração acabou com o latifúndio e o trabalho escravo: ela os **manteve**.',
        'Tratar a "descoberta" como encontro pacífico: houve **violência, epidemias e escravização** de povos originários.'
      ],
      dicas: [
        'Leia o **documento**: quem escreve, para quem e com que interesse? (um cronista português não é neutro).',
        'Ligue a economia à **mão de obra** (açúcar/ouro → escravidão africana) e ao **espaço** (Nordeste → Sudeste).',
        'Em questões sobre resistência, procure **agência** de indígenas e africanos, e não só a ação dos colonizadores.'
      ],
      exemplo: {
        enunciado: 'Um texto afirma que, no século XVIII, o Estado português aumentou a cobrança de impostos sobre o ouro, e que isso gerou revolta entre a elite local de Minas Gerais. A qual episódio o texto se refere?',
        resolucao: 'À **Inconfidência Mineira (1789)**. A cobrança do **quinto** e a ameaça de **derrama** (cobrança forçada dos impostos atrasados) estimularam a conspiração, inspirada em ideias iluministas e na independência dos EUA.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.fausto, F.schwarcz],
      flashcards: [
        { f: 'O que foram as capitanias hereditárias?', v: 'Divisão do território em lotes entregues a donatários (1534) para ocupar e explorar a colônia.' },
        { f: 'Base da economia açucareira', v: 'Monocultura de exportação, latifúndio e trabalho escravo.' },
        { f: 'O que era o quinto?', v: 'Imposto de 20% sobre o ouro extraído, devido à Coroa.' },
        { f: 'O que era a derrama?', v: 'Cobrança forçada dos impostos atrasados quando a cota de ouro não era atingida.' },
        { f: 'Quem liderou o Quilombo dos Palmares?', v: 'Zumbi (Palmares resistiu até 1695).' },
        { f: 'Diferença entre Inconfidência Mineira e Conjuração Baiana', v: 'A primeira foi da elite (contra a derrama); a segunda, popular (igualdade e fim da escravidão).' },
        { f: 'O que foi a União Ibérica?', v: 'Período (1580–1640) em que Portugal esteve sob a Coroa espanhola.' },
        { f: 'Por que a capital passou para o Rio de Janeiro (1763)?', v: 'Pelo deslocamento econômico para o Sudeste (ouro) e a defesa do Sul.' }
      ],
      quiz: [
        {
          q: 'O sistema de produção açucareira do Brasil colonial baseava-se em',
          alt: ['monocultura, latifúndio e trabalho escravo', 'pequenas propriedades e trabalho assalariado', 'indústria têxtil e operários livres', 'cooperativas de camponeses autônomos', 'comércio apenas interno e sem exportação'],
          c: 0, dif: 'facil',
          exp: 'O engenho combinava grande propriedade, plantio de um só produto voltado à exportação e trabalho escravo.'
        },
        {
          q: 'A cobrança do quinto e da derrama sobre o ouro nas Minas gerais gerou descontentamento entre os mineradores porque',
          alt: ['aumentava a carga tributária imposta pela metrópole', 'reduzia o preço dos escravizados', 'proibia a extração de ouro', 'garantia autonomia política às vilas', 'extinguia as casas de fundição'],
          c: 0, dif: 'facil',
          exp: 'Os impostos elevados e a ameaça de cobrança forçada sobre o ouro prejudicavam os mineradores e alimentaram revoltas.'
        },
        {
          q: 'O Quilombo dos Palmares, que resistiu por quase um século, representa',
          alt: ['uma organização de escravizados fugidos com autonomia política e econômica', 'um engenho de açúcar de grande porte, voltado à exportação', 'um aldeamento jesuíta onde indígenas eram catequizados e aprendiam ofícios', 'uma vila fundada por bandeirantes para controlar a extração de ouro', 'um acampamento militar holandês instalado durante a ocupação do Nordeste'],
          c: 0, dif: 'medio',
          exp: 'Palmares foi um grande quilombo, com produção própria e organização política, símbolo da resistência negra.'
        },
        {
          q: 'A Conjuração Baiana (1798) distingue-se da Inconfidência Mineira por',
          alt: ['ter participação popular e propostas de igualdade social e fim da escravidão', 'ser uma revolta apenas de grandes proprietários de minas', 'defender a manutenção do domínio português', 'não ter qualquer influência iluminista', 'ter ocorrido após a Independência do Brasil'],
          c: 0, dif: 'medio',
          exp: 'Alfaiates, soldados e escravizados participaram, e as propostas incluíam igualdade e abolição, ao contrário do projeto elitista de Minas.'
        },
        {
          q: 'Observe o trecho de uma carta jesuíta do século XVI: "Os índios são fáceis de converter, mas difíceis de manter nas aldeias". Para o historiador, esse documento deve ser lido considerando que',
          alt: ['expressa o ponto de vista de um missionário europeu, com interesses próprios', 'é uma descrição neutra e completa do modo de vida dos indígenas', 'foi escrito por um líder indígena para registrar a sua própria visão', 'dispensa qualquer análise de contexto, pois relata fatos objetivos', 'trata do comércio de ouro e dos impostos cobrados em Minas Gerais'],
          c: 0, dif: 'medio',
          exp: 'Fontes têm autoria, interesses e contexto. Aqui, a visão é a de um religioso europeu que catequizava.'
        },
        {
          q: 'A mineração no século XVIII provocou mudanças como',
          alt: ['deslocamento do eixo econômico para o Sudeste e crescimento urbano', 'abolição imediata da escravidão nas regiões mineradoras do país', 'desaparecimento do latifúndio e fim do controle da metrópole', 'industrialização acelerada das vilas e dos centros mineradores', 'fim do monopólio comercial português sobre a colônia'],
          c: 0, dif: 'medio',
          exp: 'O ouro atraiu população para Minas e fez a economia e a capital se deslocarem para o Centro-Sul.'
        },
        {
          q: 'Entre as formas de resistência dos africanos escravizados, além de fugas e quilombos, destaca-se',
          alt: ['a preservação de religiões, músicas e saberes, base de culturas afro-brasileiras', 'o abandono total de qualquer prática cultural de origem africana', 'a adoção integral dos costumes e da religião dos senhores', 'o isolamento voluntário em cidades europeias distantes do litoral', 'a proibição, pelos próprios africanos, do uso de seus idiomas'],
          c: 0, dif: 'dificil',
          exp: 'A manutenção e a recriação de práticas culturais foram formas de resistência e de construção de identidade.'
        },
        {
          q: 'A política pombalina (séc. XVIII), ao expulsar os jesuítas e centralizar o poder, teve como objetivo',
          alt: ['fortalecer o Estado português e aumentar a arrecadação na colônia', 'ampliar a autonomia das ordens religiosas', 'descentralizar o governo colonial', 'estimular a independência do Brasil', 'extinguir o comércio com a Inglaterra'],
          c: 0, dif: 'dificil',
          exp: 'Pombal buscava reforçar o poder do Estado e a eficiência fiscal sobre a colônia.'
        }
      ],
      pares: [
        { a: 'Quinto', b: 'Imposto de 20% sobre o ouro' },
        { a: 'Derrama', b: 'Cobrança forçada de impostos' },
        { a: 'Zumbi', b: 'Líder de Palmares' },
        { a: 'Tiradentes', b: 'Inconfidência Mineira' },
        { a: 'Conjuração Baiana', b: 'Revolta popular de 1798' },
        { a: 'Engenho', b: 'Unidade de produção de açúcar' },
        { a: 'Capitanias', b: 'Lotes hereditários (1534)' },
        { a: 'Pombal', b: 'Centralização do Estado português' }
      ]
    },

    /* ============ 2. BRASIL IMPÉRIO ============ */
    {
      id: 'brasil-imperio',
      nome: 'Brasil Império: Independência, escravidão e abolição',
      incidencia: 'alta',
      resumo: 'Da Independência (1822) à queda do Império (1889): centralização do poder, café, tráfico, abolição gradual e a transição para a República.',
      conceitos: [
        {
          titulo: 'Independência e Primeiro Reinado (1808–1831)',
          texto: '- **1808**: chegada da corte portuguesa ao Rio, **abertura dos portos** às nações amigas.\n- **1822**: Independência, com **D. Pedro I**. Foi um processo **conservador**: manteve a **monarquia, o latifúndio e a escravidão**.\n- **Constituição de 1824**: **outorgada**; criou o **Poder Moderador**, exercido pelo imperador. Voto censitário.\n- **Confederação do Equador (1824)**: revolta republicana no Nordeste. Pedro I **abdicou em 1831**.'
        },
        {
          titulo: 'Regências e Segundo Reinado (1831–1889)',
          texto: '- **Regências** (1831–1840): revoltas provinciais como **Cabanagem** (PA), **Farroupilha** (RS), **Sabinada** (BA), **Balaiada** (MA), **Revolta dos Malês** (BA, 1835, escravizados muçulmanos).\n- **Segundo Reinado** (D. Pedro II, 1840–1889): estabilidade política, **café** no Vale do Paraíba e depois no Oeste Paulista.\n- **Guerra do Paraguai** (1864–1870): fortaleceu o Exército, endividou o país e ampliou as críticas à escravidão e à monarquia.'
        },
        {
          titulo: 'Abolição e fim do Império',
          texto: '**Pressão inglesa** e movimentos abolicionistas levaram a medidas graduais:\n\n- **Lei Eusébio de Queirós** (1850): fim do tráfico atlântico.\n- **Lei de Terras** (1850): terra só por compra, dificultando o acesso de pobres e libertos.\n- **Lei do Ventre Livre** (1871), **Lei dos Sexagenários** (1885).\n- **Lei Áurea** (13 de maio de 1888): abolição **sem indenização aos libertos e sem políticas de inclusão**.\n\n**1889**: Proclamação da República por um **golpe militar**, apoiado por fazendeiros do café, militares e setores urbanos.'
        }
      ],
      pegadinhas: [
        'Achar que a Lei Áurea **incluiu** os libertos: eles ficaram sem terra, trabalho e direitos (consequências sociais até hoje).',
        'Dizer que a Independência foi "popular e revolucionária": manteve elites, **escravidão** e monarquia.',
        'Confundir **Lei do Ventre Livre** (1871) com **Lei Áurea** (1888).',
        'Esquecer que a **Lei de Terras** (1850) foi anterior à abolição e pensada para limitar o acesso à terra dos futuros libertos e imigrantes.'
      ],
      dicas: [
        'Em questões de abolição, relacione **economia (café), imigração, pressão inglesa e resistência escrava**.',
        'Em imagens (gravuras, charges), observe **quem é representado** e **de que modo**.',
        'Pense em **continuidades**: o que não mudou com a Independência e com a abolição?'
      ],
      exemplo: {
        enunciado: 'A Lei Eusébio de Queirós (1850) proibiu o tráfico de africanos, mas a escravidão continuou. Que fator ajuda a explicar isso?',
        resolucao: 'A proibição do **tráfico** atendeu à pressão inglesa, mas não extinguia a **escravidão** em si. A economia cafeeira ainda dependia do trabalho escravo, por isso houve tráfico interno e abolição apenas gradual até 1888.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.fausto, F.schwarcz],
      flashcards: [
        { f: 'O que foi o Poder Moderador?', v: 'Poder exercido pelo imperador (Constituição de 1824), acima dos demais, que podia dissolver a Câmara.' },
        { f: 'Por que a Independência foi "conservadora"?', v: 'Manteve monarquia, latifúndio e escravidão.' },
        { f: 'O que foi a Lei de Terras (1850)?', v: 'Estabeleceu que a terra só poderia ser obtida por compra, restringindo o acesso de pobres e libertos.' },
        { f: 'O que foi a Guerra do Paraguai?', v: 'Conflito (1864–1870) entre a Tríplice Aliança e o Paraguai; fortaleceu o Exército.' },
        { f: 'Quando foi proibido o tráfico atlântico no Brasil?', v: 'Em 1850, pela Lei Eusébio de Queirós.' },
        { f: 'O que previa a Lei do Ventre Livre?', v: 'Liberdade para filhos de escravizadas nascidos a partir de 1871 (com condições).' },
        { f: 'Data da Lei Áurea', v: '13 de maio de 1888.' },
        { f: 'Quem proclamou a República e como?', v: 'Militares, liderados por Deodoro da Fonseca, em um golpe em 15/11/1889.' }
      ],
      quiz: [
        {
          q: 'A Independência do Brasil (1822) é considerada um processo conservador porque',
          alt: ['manteve a monarquia, o latifúndio e a escravidão', 'aboliu imediatamente a escravidão', 'criou uma república democrática', 'distribuiu terras aos camponeses', 'garantiu o voto universal'],
          c: 0, dif: 'facil',
          exp: 'A elite que apoiou D. Pedro I preservou a estrutura social e econômica da colônia.'
        },
        {
          q: 'A Constituição de 1824 criou o Poder Moderador, que permitia ao imperador',
          alt: ['dissolver a Câmara e interferir nos demais poderes', 'ser fiscalizado pelo Judiciário e pelo Senado vitalício', 'perder o cargo por decisão de voto popular direto', 'dividir igualmente o poder com a Assembleia', 'extinguir a escravidão por decreto próprio'],
          c: 0, dif: 'medio',
          exp: 'O Poder Moderador, exclusivo do imperador, ficava acima dos demais poderes.'
        },
        {
          q: 'A Lei Áurea (1888) tem como limite histórico o fato de',
          alt: ['não ter garantido terra, trabalho e inclusão social aos libertos', 'ter mantido a escravidão até o século XX', 'ter sido votada por ex-escravos', 'ter indenizado os libertos', 'ter dado cidadania plena a todos'],
          c: 0, dif: 'medio',
          exp: 'A abolição não veio acompanhada de políticas de inclusão, o que gerou desigualdades persistentes.'
        },
        {
          q: 'A Lei de Terras, de 1850, ao estabelecer a compra como única forma de acesso à terra, teve como efeito',
          alt: ['dificultar o acesso de libertos e pobres à propriedade', 'democratizar a distribuição de terras', 'extinguir os latifúndios', 'incentivar a reforma agrária', 'garantir terras aos indígenas'],
          c: 0, dif: 'medio',
          exp: 'Sem dinheiro, pobres e futuros libertos não conseguiam comprar terras, o que favoreceu os grandes proprietários.'
        },
        {
          q: 'A Guerra do Paraguai teve como consequência no Brasil',
          alt: ['o fortalecimento do Exército e do debate sobre abolição e República', 'o aumento da popularidade do tráfico e do Império', 'o fim do Poder Moderador e a vitória do federalismo', 'a independência das províncias do Sul do Brasil', 'a redução do endividamento externo do governo imperial'],
          c: 0, dif: 'dificil',
          exp: 'Soldados negros e a experiência militar fortaleceram o Exército como ator político e alimentaram críticas ao regime.'
        },
        {
          q: 'A Revolta dos Malês (1835), em Salvador, foi um levante de',
          alt: ['africanos escravizados e libertos, muitos muçulmanos', 'fazendeiros contra a cobrança de impostos', 'soldados contra o governo regencial', 'imigrantes europeus do Sul', 'indígenas contra os jesuítas'],
          c: 0, dif: 'medio',
          exp: 'Os malês eram africanos muçulmanos, e a revolta mostra a resistência escrava urbana.'
        },
        {
          q: 'A Proclamação da República (1889) resultou de uma articulação entre',
          alt: ['militares, cafeicultores e setores urbanos descontentes com a monarquia', 'camponeses e operários organizados em partidos revolucionários', 'a nobreza imperial e a Igreja Católica em defesa do trono', 'imigrantes europeus e comerciantes estrangeiros recém-chegados', 'comandantes da Marinha britânica e banqueiros ingleses'],
          c: 0, dif: 'dificil',
          exp: 'O golpe teve apoio de militares e de fazendeiros, sem participação popular direta.'
        },
        {
          q: 'A pressão inglesa contra o tráfico de africanos no século XIX ocorria porque',
          alt: ['a Inglaterra industrial buscava ampliar mercados e reduzir a concorrência escravista', 'a Inglaterra não tinha nenhum interesse comercial nem político no Brasil', 'a Inglaterra era então o maior país escravista do mundo', 'o tráfico era ilegal em todo o mundo desde o ano de 1500', 'o Brasil ainda era uma colônia sob domínio inglês direto'],
          c: 0, dif: 'dificil',
          exp: 'A Inglaterra, em plena Revolução Industrial, passou a combater o tráfico também por interesses econômicos.'
        }
      ],
      pares: [
        { a: 'Poder Moderador', b: 'Poder exclusivo do imperador' },
        { a: 'Lei Eusébio de Queirós', b: 'Fim do tráfico atlântico (1850)' },
        { a: 'Lei de Terras', b: 'Terra só por compra (1850)' },
        { a: 'Lei Áurea', b: 'Abolição em 13/05/1888' },
        { a: 'Guerra do Paraguai', b: 'Fortaleceu o Exército' },
        { a: 'Revolta dos Malês', b: 'Levante de africanos em Salvador' },
        { a: 'Farroupilha', b: 'Revolta gaúcha da Regência' },
        { a: 'Cabanagem', b: 'Revolta popular no Pará' }
      ]
    },

    /* ============ 3. REPÚBLICA VELHA ============ */
    {
      id: 'republica-velha',
      nome: 'República Velha (1889–1930): oligarquias e conflitos sociais',
      incidencia: 'alta',
      resumo: 'Um regime controlado por oligarquias, com exclusão da maioria da população. É o momento de Canudos, Contestado, Revolta da Vacina, Revolta da Chibata e do movimento operário.',
      conceitos: [
        {
          titulo: 'Como o poder funcionava',
          texto: '- **Constituição de 1891**: federalista, presidencialista, **voto aberto** e masculino, exclusão de analfabetos e mulheres.\n- **Coronelismo**: grandes proprietários (coronéis) controlavam votos locais (**voto de cabresto**, fraude eleitoral, favores).\n- **Política dos governadores** e **política do café com leite**: alternância no poder entre as oligarquias de **São Paulo** (café) e **Minas Gerais** (leite/pecuária).\n- Economia centrada no **café**; início da industrialização em SP e imigração europeia.'
        },
        {
          titulo: 'Conflitos e revoltas',
          texto: '- **Canudos** (BA, 1896–97): comunidade de camponeses liderada por **Antônio Conselheiro**, destruída pelo Exército; descrita por **Euclides da Cunha** (*Os Sertões*).\n- **Contestado** (PR/SC, 1912–16): camponeses expulsos de terras pela ferrovia e por empresas.\n- **Revolta da Vacina** (RJ, 1904): reação à vacinação obrigatória e às reformas urbanas autoritárias (Pereira Passos), em meio ao **bota-abaixo**.\n- **Revolta da Chibata** (1910): marinheiros negros contra castigos físicos; líder **João Cândido**.\n- **Cangaço** e **movimentos messiânicos** no sertão.'
        },
        {
          titulo: 'Operários, tenentes e o fim do regime',
          texto: '- **Movimento operário**: imigrantes anarquistas e socialistas; **greve geral de 1917** em SP, por melhores salários e jornada menor.\n- **Tenentismo** (anos 1920): jovens oficiais contra a corrupção e o voto de cabresto; **Revolta dos 18 do Forte** (1922), **Coluna Prestes**.\n- **Semana de Arte Moderna (1922)**: renovação cultural.\n- **Crise de 1929** derrubou o preço do café; a **Revolução de 1930** levou **Getúlio Vargas** ao poder e encerrou o regime oligárquico.'
        }
      ],
      pegadinhas: [
        'Achar que a República foi "democrática" desde o início: o **voto era restrito e fraudado**.',
        'Confundir **Canudos** (messianismo, sertão da Bahia) com **Contestado** (Sul, disputa por terras).',
        'Tratar a **Revolta da Vacina** só como "ignorância do povo": envolveu **reformas urbanas e expulsão de pobres**.',
        'Dizer que o "café com leite" foi "acordo formal": era um pacto **informal** entre oligarquias.'
      ],
      dicas: [
        'Em charges e textos da época, procure o **ponto de vista** (oligarquias, Exército, imprensa).',
        'Pense sempre em **quem tinha e quem não tinha direitos** (voto, terra, saúde).',
        'Ligue conflitos rurais à **concentração de terras** e conflitos urbanos à **reforma e exclusão social**.'
      ],
      exemplo: {
        enunciado: 'Na Primeira República, coronéis ofereciam favores a eleitores em troca de votos e fiscalizavam seu voto em cédulas abertas. Como se chama esse mecanismo?',
        resolucao: '**Voto de cabresto**, base do **coronelismo**. O voto aberto (não secreto) permitia a pressão sobre o eleitor e garantia a permanência das oligarquias.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.fausto],
      flashcards: [
        { f: 'O que foi a política do café com leite?', v: 'Acordo informal em que SP (café) e MG (leite) alternavam-se na presidência.' },
        { f: 'O que é coronelismo?', v: 'Poder político local de grandes proprietários, baseado em favores e controle de votos.' },
        { f: 'Quem foi Antônio Conselheiro?', v: 'Líder da comunidade de Canudos (BA).' },
        { f: 'Qual foi a causa da Revolta da Chibata?', v: 'Castigos físicos impostos a marinheiros, em sua maioria negros (líder João Cândido).' },
        { f: 'Por que ocorreu a Revolta da Vacina?', v: 'Vacinação obrigatória contra a varíola e reformas urbanas autoritárias no Rio, em 1904.' },
        { f: 'O que foi o Tenentismo?', v: 'Movimento de jovens oficiais contra as oligarquias e a corrupção nos anos 1920.' },
        { f: 'O que encerrou a Primeira República?', v: 'A Revolução de 1930, após a crise do café e uma disputa eleitoral.' },
        { f: 'Greve geral de 1917', v: 'Mobilização operária em SP por melhores salários e condições de trabalho.' }
      ],
      quiz: [
        {
          q: 'A prática do "voto de cabresto" na Primeira República significava',
          alt: ['pressão de coronéis sobre os eleitores, que votavam em candidatos indicados', 'voto secreto e universal', 'participação ampla de mulheres', 'fiscalização pela Justiça Eleitoral independente', 'eleições com cédulas padronizadas'],
          c: 0, dif: 'facil',
          exp: 'O coronel controlava o voto dos eleitores dependentes, o que sustentava as oligarquias.'
        },
        {
          q: 'A política do café com leite caracterizou-se por',
          alt: ['revezamento de presidentes paulistas e mineiros', 'domínio das oligarquias do Nordeste', 'fim das eleições', 'governo de militares', 'participação de operários no poder'],
          c: 0, dif: 'facil',
          exp: 'O acordo informal entre SP e MG controlava a presidência da República.'
        },
        {
          q: 'A Guerra de Canudos (1896–97) foi motivada pelo fato de',
          alt: ['uma comunidade sertaneja autônoma ser vista como ameaça pelo governo e latifundiários', 'imigrantes italianos disputarem terras com fazendeiros de café', 'militares pretenderem restaurar a monarquia no sertão baiano', 'operários exigirem jornada de oito horas nas fábricas locais', 'indígenas atacarem as fazendas de café do Oeste Paulista'],
          c: 0, dif: 'medio',
          exp: 'O arraial de Canudos, com organização própria, foi alvo de repressão das forças republicanas.'
        },
        {
          q: 'A Revolta da Vacina (1904) revela que as medidas sanitárias da época',
          alt: ['foram impostas de forma autoritária, sem diálogo com a população pobre', 'tiveram apoio unânime da população do Rio de Janeiro', 'ignoraram por completo as doenças que atingiam a cidade', 'foram aprovadas por votação popular em plebiscito', 'eliminaram a pobreza e as moradias precárias do centro'],
          c: 0, dif: 'medio',
          exp: 'A população reagiu à vacinação obrigatória e às reformas urbanas, que expulsaram pobres do centro.'
        },
        {
          q: 'A Revolta da Chibata (1910) foi uma reação dos marinheiros contra',
          alt: ['castigos físicos e maus-tratos na Marinha', 'o voto aberto e as fraudes eleitorais da época', 'a política de incentivo à imigração europeia', 'a vacinação obrigatória contra a varíola no Rio', 'a cobrança de impostos sobre a exportação de café'],
          c: 0, dif: 'facil',
          exp: 'Os marinheiros, em maioria negros, exigiam o fim dos castigos corporais, herança da escravidão.'
        },
        {
          q: 'O movimento tenentista nos anos 1920 defendia',
          alt: ['o fim da corrupção e do voto de cabresto, com reformas políticas', 'a volta da monarquia e do Poder Moderador ao Brasil', 'a manutenção das oligarquias no controle da República', 'a abolição do Exército e a criação de milícias', 'a reforma agrária completa e imediata no país'],
          c: 0, dif: 'medio',
          exp: 'Os tenentes criticavam as fraudes eleitorais e o poder das oligarquias.'
        },
        {
          q: 'A crise de 1929 contribuiu para o fim da Primeira República porque',
          alt: ['derrubou o preço do café e enfraqueceu as oligarquias cafeeiras', 'aumentou o preço do café e fortaleceu os fazendeiros', 'tornou o voto secreto e obrigatório em todo o país', 'extinguiu o Exército e as milícias estaduais', 'ampliou a imigração e a oferta de mão de obra'],
          c: 0, dif: 'dificil',
          exp: 'A queda dos preços do café atingiu a base econômica do poder oligárquico.'
        },
        {
          q: 'A greve geral de 1917 em São Paulo evidenciou',
          alt: ['a organização do movimento operário urbano por direitos', 'o apoio dos coronéis aos sindicatos', 'a ausência de industrialização', 'a política do café com leite', 'a vitória dos latifundiários'],
          c: 0, dif: 'dificil',
          exp: 'Operários, muitos imigrantes, reivindicaram melhores salários e jornada, mostrando a formação de uma classe trabalhadora.'
        }
      ],
      pares: [
        { a: 'Coronelismo', b: 'Poder local dos grandes proprietários' },
        { a: 'Café com leite', b: 'Alternância SP e MG' },
        { a: 'Canudos', b: 'Antônio Conselheiro' },
        { a: 'Contestado', b: 'Conflito de terras no Sul' },
        { a: 'Revolta da Vacina', b: 'Rio de Janeiro, 1904' },
        { a: 'Revolta da Chibata', b: 'João Cândido' },
        { a: 'Tenentismo', b: 'Oficiais contra as oligarquias' },
        { a: 'Greve de 1917', b: 'Movimento operário em SP' }
      ]
    },

    /* ============ 4. ERA VARGAS E DEMOCRACIA POPULISTA ============ */
    {
      id: 'era-vargas-populismo',
      nome: 'Era Vargas e República de 1946: trabalhismo, JK e Jango',
      incidencia: 'alta',
      resumo: 'De 1930 a 1964: industrialização, direitos trabalhistas, nacionalismo, o desenvolvimentismo de JK e a crise que levou ao golpe.',
      conceitos: [
        {
          titulo: 'Governos de Vargas (1930–1945)',
          texto: '- **Governo Provisório** (1930–34): centralização; voto feminino (1932); **Revolução Constitucionalista** (SP, 1932).\n- **Governo Constitucional** (1934–37): Constituição de 1934; polarização entre **Aliança Nacional Libertadora** e **Ação Integralista**; **Intentona Comunista** (1935).\n- **Estado Novo** (1937–45): ditadura; censura (**DIP**), propaganda, repressão, nacionalismo.\n- **Direitos trabalhistas**: salário mínimo (1940), **CLT** (1943), previdência; **controle dos sindicatos** (sindicato oficial).\n- **Industrialização**: **CSN** (1941), Vale do Rio Doce. Brasil na Segunda Guerra com a **FEB** (Itália).'
        },
        {
          titulo: 'Populismo e democracia (1945–1964)',
          texto: '- **Dutra** (1946–51): Constituição de 1946; abertura política, mas repressão ao Partido Comunista.\n- **Vargas** (1951–54): nacionalismo econômico, **Petrobras** (1953, "O petróleo é nosso"); crise política e **suicídio** em 1954.\n- **JK** (1956–61): **"50 anos em 5"**, **Plano de Metas**, indústria automobilística, **Brasília** (1960); aumento da dívida e da inflação.\n- **Jânio Quadros** (1961): renúncia; **João Goulart (Jango)** assumiu com poderes reduzidos (parlamentarismo) e depois propôs **reformas de base**.\n- **Populismo**: líderes que se relacionam diretamente com as massas urbanas, com discurso nacionalista e direitos sociais.'
        }
      ],
      pegadinhas: [
        'Tratar as leis trabalhistas como "dádiva" sem lembrar de **lutas operárias** e do **controle dos sindicatos**.',
        'Confundir **Estado Novo** (ditadura de 1937) com **Governo Constitucional** (1934–37).',
        'Dizer que JK era "contra o capital estrangeiro": seu plano atraiu **empresas estrangeiras**.',
        'Esquecer que o populismo combina **direitos sociais** e **controle político**.'
      ],
      dicas: [
        'Em propaganda e cartazes do Estado Novo, perceba o **culto ao líder** e a imagem do "pai dos pobres".',
        'Relacione industrialização ao **nacionalismo** (CSN, Petrobras) e a **JK** (capital estrangeiro).',
        'Questões sobre trabalhismo valorizam **direitos conquistados e limites** (controle, exclusão rural).'
      ],
      exemplo: {
        enunciado: 'Um cartaz do Estado Novo mostra Vargas como "protetor dos trabalhadores". Que análise é adequada?',
        resolucao: 'Há **propaganda política** (DIP) que associa o líder à proteção social, reforçando sua imagem. É importante lembrar que os direitos vieram acompanhados de **controle dos sindicatos** e **repressão** à oposição.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.fausto],
      flashcards: [
        { f: 'O que foi o Estado Novo?', v: 'Ditadura de Vargas (1937–1945), com censura, propaganda e repressão.' },
        { f: 'O que era o DIP?', v: 'Departamento de Imprensa e Propaganda, que controlava a comunicação no Estado Novo.' },
        { f: 'O que é a CLT?', v: 'Consolidação das Leis do Trabalho (1943), que reuniu direitos trabalhistas.' },
        { f: 'O que foi o Plano de Metas de JK?', v: '"50 anos em 5": energia, transporte, indústria e Brasília.' },
        { f: 'Qual a importância da CSN?', v: 'Siderúrgica criada em 1941; base da indústria de base.' },
        { f: 'O que foi a Petrobras e quando surgiu?', v: 'Estatal do petróleo criada em 1953, após a campanha "O petróleo é nosso".' },
        { f: 'O que foram as reformas de base de Jango?', v: 'Propostas de reformas agrária, urbana, educacional e outras, no início dos anos 1960.' },
        { f: 'O que é populismo?', v: 'Estilo político de líderes que se relacionam diretamente com as massas, com discurso nacionalista e direitos sociais.' }
      ],
      quiz: [
        {
          q: 'A Consolidação das Leis do Trabalho (1943) é entendida pelos historiadores como',
          alt: ['resultado de lutas operárias, também usada para controlar o movimento sindical', 'um presente espontâneo do governo, sem conflito', 'medida que eliminou os sindicatos', 'legislação que garantia direitos só aos camponeses', 'lei que proibiu o salário mínimo'],
          c: 0, dif: 'medio',
          exp: 'As conquistas trabalhistas vieram de pressões sociais e foram acompanhadas de controle do Estado sobre os sindicatos.'
        },
        {
          q: 'O Estado Novo (1937–1945) caracterizou-se por',
          alt: ['censura, centralização política e propaganda do governo', 'ampla liberdade de imprensa', 'multipartidarismo e eleições livres', 'fim da intervenção do Estado na economia', 'valorização das oligarquias regionais'],
          c: 0, dif: 'facil',
          exp: 'O regime foi autoritário e usou o DIP para construir a imagem de Vargas.'
        },
        {
          q: 'A construção da Companhia Siderúrgica Nacional (1941) simboliza',
          alt: ['o investimento estatal na indústria de base', 'o fim da industrialização', 'a volta da economia agrária', 'a privatização das ferrovias', 'o fim do nacionalismo econômico'],
          c: 0, dif: 'facil',
          exp: 'A CSN, com apoio dos EUA, foi marco da indústria de base brasileira.'
        },
        {
          q: 'O slogan "50 anos em 5", de Juscelino Kubitschek, resumia a proposta de',
          alt: ['acelerar o desenvolvimento econômico e a industrialização', 'reduzir os gastos do Estado', 'fechar o país ao capital estrangeiro', 'extinguir a indústria automobilística', 'abolir a construção de rodovias'],
          c: 0, dif: 'facil',
          exp: 'O Plano de Metas buscou crescimento rápido, com atração de empresas estrangeiras.'
        },
        {
          q: 'A construção de Brasília (1960) teve como um dos objetivos',
          alt: ['integrar o interior do país ao desenvolvimento nacional', 'transferir a capital para o litoral', 'desativar rodovias federais', 'fechar o Congresso', 'eliminar a indústria'],
          c: 0, dif: 'medio',
          exp: 'A mudança da capital simbolizou a interiorização e o projeto modernizador.'
        },
        {
          q: 'O populismo de Vargas e de Jango pode ser entendido como',
          alt: ['relação direta entre líder e massas urbanas, com direitos e controle político', 'regime em que as massas decidiam tudo sem a mediação de líderes', 'rejeição total do nacionalismo e dos direitos sociais', 'ausência de qualquer política social voltada aos trabalhadores', 'defesa do Estado mínimo e do livre mercado sem restrições'],
          c: 0, dif: 'medio',
          exp: 'O populismo combinou direitos sociais, discurso nacionalista e o controle político dos trabalhadores.'
        },
        {
          q: 'A campanha "O petróleo é nosso" resultou na',
          alt: ['criação da Petrobras, com monopólio estatal do petróleo', 'privatização das reservas', 'venda da CSN', 'proibição da exploração do petróleo', 'entrega do petróleo a empresas estrangeiras'],
          c: 0, dif: 'medio',
          exp: 'A campanha nacionalista levou à criação da Petrobras em 1953.'
        },
        {
          q: 'As "reformas de base" propostas por João Goulart foram contestadas porque',
          alt: ['atingiam interesses de grandes proprietários e setores conservadores', 'defendiam a manutenção do latifúndio e da estrutura agrária', 'eram apoiadas por todas as elites e pelas Forças Armadas', 'reduziam o poder dos sindicatos e dos movimentos rurais', 'propunham a privatização da educação pública e da saúde'],
          c: 0, dif: 'dificil',
          exp: 'As propostas, como a reforma agrária, enfrentaram forte oposição de elites e militares, preparando o golpe de 1964.'
        }
      ],
      pares: [
        { a: 'CLT', b: 'Direitos trabalhistas (1943)' },
        { a: 'DIP', b: 'Propaganda e censura do Estado Novo' },
        { a: 'CSN', b: 'Siderúrgica estatal' },
        { a: 'Petrobras', b: 'O petróleo é nosso' },
        { a: 'JK', b: '50 anos em 5 e Brasília' },
        { a: 'Jango', b: 'Reformas de base' },
        { a: 'Populismo', b: 'Líder e massas urbanas' },
        { a: 'FEB', b: 'Brasil na Segunda Guerra' }
      ]
    },

    /* ============ 5. DITADURA E REDEMOCRATIZAÇÃO ============ */
    {
      id: 'ditadura-redemocratizacao',
      nome: 'Ditadura militar e redemocratização (1964–1988)',
      incidencia: 'alta',
      resumo: 'Golpe, Atos Institucionais, censura, "milagre econômico", resistência, Diretas Já e a Constituição de 1988. Frequente em textos, músicas e charges.',
      conceitos: [
        {
          titulo: 'Golpe e endurecimento (1964–1974)',
          texto: '- **1964**: golpe civil-militar contra João Goulart, sob a Guerra Fria e o anticomunismo; apoio de setores empresariais, imprensa e Igreja conservadora, e dos **EUA**.\n- **Atos Institucionais (AIs)**: **AI-1** (cassações), **AI-2** (bipartidarismo: **ARENA** e **MDB**), **AI-5** (13/12/1968): fechou o Congresso, ampliou censura, tortura e prisões.\n- **Milagre econômico (1968–73)**: crescimento rápido, obras (**Transamazônica**), concentração de renda e endividamento externo.\n- **Repressão**: perseguição, tortura, desaparecimentos; **guerrilha** (Araguaia) e oposição armada.'
        },
        {
          titulo: 'Resistência e cultura',
          texto: 'Movimento estudantil, sindicatos, Igreja progressista e artistas resistiram.\n\n- **Canções de protesto**, festivais, **Tropicália**; o teatro e o cinema criticaram o regime e sofreram censura.\n- **Imprensa alternativa** (jornais nanicos) e movimentos sociais (comunidades eclesiais de base).\n- Músicas como "Cálice" (Chico Buarque e Gilberto Gil) usam **duplo sentido** para driblar a censura.'
        },
        {
          titulo: 'Abertura e Constituição de 1988',
          texto: '- **Distensão "lenta, gradual e segura"** (Geisel e Figueiredo) em meio à crise econômica (petróleo, dívida externa).\n- **Lei da Anistia** (1979).\n- **Diretas Já** (1983–84): campanha por eleições diretas; a emenda **foi derrotada**, mas a mobilização foi decisiva.\n- **1985**: eleição indireta de Tancredo Neves; assume **José Sarney**.\n- **Constituição de 1988** ("Constituição Cidadã"): direitos civis, políticos e sociais, voto de analfabetos e a partir dos 16, proteção a indígenas e ao meio ambiente, racismo como crime inafiançável.'
        }
      ],
      pegadinhas: [
        'Chamar o golpe de "revolução" sem discutir o conceito: o ENEM usa **golpe civil-militar** e analisa **apoio civil**.',
        'Dizer que o milagre econômico "resolveu" a desigualdade: **concentrou renda**.',
        'Pensar que as **Diretas Já** conseguiram a eleição direta imediata: a emenda foi **derrotada**.',
        'Esquecer que a **Constituição de 1988** foi fruto de ampla mobilização social.'
      ],
      dicas: [
        'Em letras e charges, procure a **crítica indireta** à censura e à repressão.',
        'Pergunte: **quem apoiou, quem se beneficiou, quem foi reprimido?**',
        'Relacione direitos da Constituição de 1988 com as **demandas dos movimentos sociais** dos anos 1970–80.'
      ],
      exemplo: {
        enunciado: 'A música "Cálice" (1973) usa a palavra "cale-se" em trocadilho com "cálice". Que contexto explica esse recurso?',
        resolucao: 'O trocadilho foi uma forma de **driblar a censura da ditadura**, denunciando o silenciamento imposto aos artistas. É exemplo de **resistência cultural** por meio de linguagem figurada.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.schwarcz],
      flashcards: [
        { f: 'O que foi o AI-5?', v: 'Ato (13/12/1968) que fechou o Congresso e ampliou a censura e a repressão.' },
        { f: 'O que foram ARENA e MDB?', v: 'Os dois partidos permitidos pelo bipartidarismo após o AI-2: governo (ARENA) e oposição consentida (MDB).' },
        { f: 'O que foi o milagre econômico?', v: 'Crescimento acelerado (1968–73), com concentração de renda e endividamento.' },
        { f: 'O que foi a Lei da Anistia (1979)?', v: 'Permitiu o retorno de exilados, mas também protegeu agentes da repressão.' },
        { f: 'O que foram as Diretas Já?', v: 'Campanha (1983–84) por eleições diretas para presidente.' },
        { f: 'Como foi eleito Tancredo Neves?', v: 'Por eleição indireta no Colégio Eleitoral, em 1985.' },
        { f: 'Por que a CF de 1988 é "Cidadã"?', v: 'Ampliou direitos civis, políticos e sociais.' },
        { f: 'O que era a censura prévia?', v: 'Exame prévio de jornais, músicas e peças para impedir críticas ao regime.' }
      ],
      quiz: [
        {
          q: 'O Ato Institucional nº 5 (1968) marcou o período mais repressivo da ditadura porque',
          alt: ['fechou o Congresso e ampliou censura, prisões e torturas', 'restabeleceu as eleições diretas para presidente da República', 'extinguiu o bipartidarismo e criou novos partidos', 'instituiu a Constituição Cidadã de 1988', 'concedeu anistia ampla aos perseguidos políticos'],
          c: 0, dif: 'facil',
          exp: 'O AI-5 deu poderes extraordinários ao governo e aprofundou a repressão.'
        },
        {
          q: 'O chamado "milagre econômico" (1968–73) caracterizou-se por',
          alt: ['crescimento acelerado com concentração de renda e aumento da dívida externa', 'distribuição igualitária da renda entre todas as regiões', 'queda da inflação sem qualquer endividamento externo', 'estatização total da economia e fim das empresas privadas', 'redução das obras públicas e dos investimentos em infraestrutura'],
          c: 0, dif: 'medio',
          exp: 'Houve crescimento forte, mas com desigualdade e dependência de empréstimos externos.'
        },
        {
          q: 'A canção "Apesar de você", de Chico Buarque, e "Cálice", em parceria com Gilberto Gil, foram compostas durante a ditadura. Esse tipo de canção revela',
          alt: ['uso de linguagem figurada para criticar o regime sob censura', 'apoio explícito dos artistas ao governo militar', 'ausência de censura sobre a produção musical', 'total liberdade de expressão garantida pela lei', 'desinteresse político dos artistas daquele período'],
          c: 0, dif: 'medio',
          exp: 'Os artistas usaram metáforas e duplos sentidos para driblar a censura.'
        },
        {
          q: 'A campanha das Diretas Já (1983–84) reivindicava',
          alt: ['eleições diretas para presidente da República', 'a volta da monarquia', 'o fim do voto', 'a manutenção do bipartidarismo', 'a convocação de uma ditadura'],
          c: 0, dif: 'facil',
          exp: 'Milhões de pessoas foram às ruas pelo voto direto, embora a emenda tenha sido rejeitada.'
        },
        {
          q: 'A Lei da Anistia (1979) é objeto de debate porque',
          alt: ['permitiu a volta de exilados, mas beneficiou também agentes da repressão', 'puniu todos os envolvidos em crimes durante o regime', 'impediu o retorno dos exilados políticos ao país', 'extinguiu a censura imediatamente após ser aprovada', 'criou o AI-5 e fechou o Congresso Nacional'],
          c: 0, dif: 'dificil',
          exp: 'A lei teve efeito duplo: reintegrou perseguidos e protegeu torturadores de punição.'
        },
        {
          q: 'A Constituição de 1988 é chamada de "Cidadã" porque',
          alt: ['ampliou direitos civis, políticos e sociais após a ditadura', 'restringiu o direito de voto aos alfabetizados', 'manteve a censura prévia sobre jornais e artistas', 'extinguiu os partidos políticos de oposição', 'suspendeu as eleições por tempo indeterminado'],
          c: 0, dif: 'facil',
          exp: 'Garantiu direitos amplos e foi fruto da mobilização social da redemocratização.'
        },
        {
          q: 'O bipartidarismo imposto pelo AI-2 (ARENA e MDB) tinha como efeito',
          alt: ['limitar a pluralidade política e controlar a oposição', 'ampliar o número de partidos', 'garantir plena liberdade partidária', 'fortalecer o Parlamento contra o governo', 'permitir eleições diretas para presidente'],
          c: 0, dif: 'medio',
          exp: 'Com dois partidos, o regime controlava a oposição e mantinha aparência de legalidade.'
        },
        {
          q: 'A obra da Transamazônica, nos anos 1970, ilustra',
          alt: ['a integração nacional pretendida pelo regime, com forte impacto socioambiental', 'uma política voltada à preservação da floresta amazônica', 'o abandono total da região pelo governo federal', 'o fim dos investimentos em rodovias e em energia', 'uma ampla reforma agrária com distribuição de terras'],
          c: 0, dif: 'dificil',
          exp: 'Megaobras buscavam integrar o território, mas afetaram povos indígenas, florestas e comunidades.'
        }
      ],
      pares: [
        { a: 'AI-5', b: 'Fechou o Congresso (1968)' },
        { a: 'ARENA e MDB', b: 'Bipartidarismo' },
        { a: 'Milagre econômico', b: 'Crescimento com desigualdade' },
        { a: 'Anistia', b: 'Lei de 1979' },
        { a: 'Diretas Já', b: 'Campanha por eleições diretas' },
        { a: 'Constituição de 1988', b: 'Constituição Cidadã' },
        { a: 'Censura', b: 'Controle prévio de obras e jornais' },
        { a: 'Transamazônica', b: 'Megaobra da ditadura' }
      ]
    },

    /* ============ 6. IDADE MODERNA ============ */
    {
      id: 'idade-moderna',
      nome: 'Idade Moderna: Renascimento, Reformas, Absolutismo e Iluminismo',
      incidencia: 'alta',
      resumo: 'Em 2026, a Idade Moderna aparece entre os conteúdos mais citados por professores. Entenda as mudanças de mentalidade, poder e economia que geram o mundo contemporâneo.',
      conceitos: [
        {
          titulo: 'Renascimento, Reformas e Grandes Navegações',
          texto: '- **Renascimento** (séc. XIV–XVI, Itália): **humanismo** e **antropocentrismo**, valorização da razão e da ciência, retomada da Antiguidade clássica (Leonardo da Vinci, Michelangelo, Maquiavel).\n- **Reforma Protestante** (1517, **Lutero**): crítica à Igreja (venda de indulgências); surge o protestantismo (luteranismo, calvinismo, anglicanismo). **Contrarreforma**: Concílio de Trento, Inquisição, Companhia de Jesus.\n- **Grandes Navegações** (séc. XV–XVI): **Portugal e Espanha** buscam novas rotas e mercados; conquista da América, tráfico de escravizados, **expansão do capitalismo comercial**.'
        },
        {
          titulo: 'Absolutismo e mercantilismo',
          texto: '- **Absolutismo**: poder concentrado no **rei** (Luís XIV, "o Estado sou eu"), justificado pelo direito divino; sustentado por burocracia e exército.\n- **Mercantilismo**: **metalismo** (acúmulo de ouro e prata), **balança comercial favorável**, protecionismo e **monopólio colonial**.\n- Alianças entre **rei e burguesia**.'
        },
        {
          titulo: 'Iluminismo e revoluções',
          texto: '**Iluminismo** (séc. XVIII): confiança na **razão** e crítica ao absolutismo e à intolerância. **Locke** (direitos naturais, governo por consentimento), **Montesquieu** (separação dos poderes), **Voltaire** (liberdade de expressão e tolerância), **Rousseau** (soberania popular).\n\n- **Revolução Inglesa** (1688, Gloriosa): limita o poder do rei.\n- **Independência dos EUA** (1776).\n- **Revolução Francesa** (1789): fim do absolutismo; **Declaração dos Direitos do Homem e do Cidadão**: "liberdade, igualdade e fraternidade".\n- **Revolução Industrial** (Inglaterra, séc. XVIII): máquina a vapor, fábricas, urbanização e **nova classe operária**.'
        }
      ],
      pegadinhas: [
        'Dizer que o Renascimento "negou" a religião: ele deslocou o foco para o **ser humano** (antropocentrismo), sem eliminar a fé.',
        'Confundir **mercantilismo** (acúmulo de metais, protecionismo) com **liberalismo econômico** (livre mercado).',
        'Achar que a Revolução Francesa foi só "da burguesia": houve forte participação **popular**.',
        'Atribuir a **separação dos poderes** a Rousseau: é de **Montesquieu**.'
      ],
      dicas: [
        'Associe cada pensador a **uma ideia-chave**: Locke (direitos naturais), Montesquieu (separação dos poderes), Voltaire (tolerância), Rousseau (soberania popular).',
        'Em questões sobre a Revolução Industrial, ligue **tecnologia, trabalho e urbanização**.',
        'Pergunte: **quem ganhou e quem perdeu** com cada mudança (burguesia, camponeses, operários, colonizados).'
      ],
      exemplo: {
        enunciado: 'Um filósofo defende que o poder do Estado deve ser dividido em Legislativo, Executivo e Judiciário, para evitar abusos. A quem se refere?',
        resolucao: '**Montesquieu**, em *O Espírito das Leis*. A separação dos poderes inspirou constituições modernas, incluindo a brasileira.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.hobsbawm],
      flashcards: [
        { f: 'O que é antropocentrismo?', v: 'Visão que coloca o ser humano no centro do universo (Renascimento).' },
        { f: 'O que desencadeou a Reforma Protestante?', v: 'A crítica de Lutero (1517) à venda de indulgências e a outras práticas da Igreja.' },
        { f: 'O que é mercantilismo?', v: 'Política econômica de acúmulo de metais, balança comercial favorável e monopólio colonial.' },
        { f: 'Quem defendeu a separação dos poderes?', v: 'Montesquieu.' },
        { f: 'Ideia-chave de Locke', v: 'Direitos naturais (vida, liberdade e propriedade) e governo por consentimento.' },
        { f: 'O que é absolutismo?', v: 'Sistema em que o poder do rei é concentrado e sem limites, justificado pelo direito divino.' },
        { f: 'O que foi a Declaração dos Direitos do Homem e do Cidadão?', v: 'Documento da Revolução Francesa (1789) que proclamou liberdade e igualdade perante a lei.' },
        { f: 'Efeitos da Revolução Industrial', v: 'Fábricas, urbanização, nova classe operária e novas desigualdades.' }
      ],
      quiz: [
        {
          q: 'O Renascimento cultural, ao valorizar a razão, a ciência e a capacidade humana, expressa',
          alt: ['uma visão antropocêntrica de mundo', 'o fim de toda religiosidade', 'um retorno ao feudalismo', 'a defesa do absolutismo', 'o domínio da superstição'],
          c: 0, dif: 'facil',
          exp: 'O antropocentrismo coloca o ser humano como centro de interesse, sem abolir a fé.'
        },
        {
          q: 'A Reforma Protestante teve como um de seus estopins',
          alt: ['a crítica de Lutero à venda de indulgências', 'a descoberta da América', 'a Revolução Francesa', 'a invenção da máquina a vapor', 'a Guerra do Paraguai'],
          c: 0, dif: 'facil',
          exp: 'As 95 teses de Lutero (1517) denunciavam a venda de indulgências.'
        },
        {
          q: 'O mercantilismo caracterizava-se por',
          alt: ['intervenção do Estado, acúmulo de metais e monopólio colonial', 'livre-comércio sem interferência do governo', 'ausência de colônias', 'incentivo à importação de manufaturas', 'abolição de tarifas alfandegárias'],
          c: 0, dif: 'medio',
          exp: 'Os Estados absolutistas buscavam riqueza via metais, colônias e protecionismo.'
        },
        {
          q: 'A ideia iluminista de que o governo deve respeitar direitos naturais e governar com consentimento dos governados está associada a',
          alt: ['John Locke', 'Luís XIV', 'Martinho Lutero', 'Napoleão', 'Maquiavel apenas'],
          c: 0, dif: 'medio',
          exp: 'Locke defendeu direitos naturais (vida, liberdade, propriedade) e limites ao poder.'
        },
        {
          q: 'A Declaração dos Direitos do Homem e do Cidadão (1789) é considerada marco porque',
          alt: ['proclamou igualdade perante a lei e liberdade como princípios universais', 'restaurou o poder absoluto do rei sobre a nobreza', 'defendeu a manutenção da escravidão nas colônias', 'proibiu a burguesia de participar das assembleias', 'extinguiu a Assembleia e o Terceiro Estado'],
          c: 0, dif: 'medio',
          exp: 'O documento influenciou constituições e declarações de direitos no mundo todo.'
        },
        {
          q: 'A Revolução Industrial transformou a sociedade ao',
          alt: ['criar fábricas, urbanizar cidades e formar uma classe operária', 'extinguir o comércio', 'tornar o campo mais populoso que as cidades', 'eliminar a burguesia', 'acabar com o trabalho assalariado'],
          c: 0, dif: 'facil',
          exp: 'A mecanização gerou êxodo rural, cidades industriais e novas relações de trabalho.'
        },
        {
          q: 'O absolutismo francês, sintetizado em "O Estado sou eu", baseava-se na ideia de',
          alt: ['poder concentrado no rei, de origem divina', 'soberania popular exercida por eleições livres', 'divisão do poder entre Legislativo, Executivo e Judiciário', 'república democrática com voto universal', 'governo coletivo de operários e camponeses'],
          c: 0, dif: 'medio',
          exp: 'O rei concentrava o poder e o justificava como derivado de Deus.'
        },
        {
          q: 'A diferença entre mercantilismo e liberalismo econômico está em que o liberalismo',
          alt: ['defende o livre mercado e a menor intervenção do Estado', 'valoriza o monopólio colonial e a balança favorável', 'exige o acúmulo de metais preciosos', 'fortalece o absolutismo e o poder do rei', 'rejeita a propriedade privada dos meios de produção'],
          c: 0, dif: 'dificil',
          exp: 'O liberalismo surge criticando o intervencionismo mercantilista e defendendo a livre concorrência.'
        }
      ],
      pares: [
        { a: 'Antropocentrismo', b: 'Ser humano no centro' },
        { a: 'Lutero', b: 'Reforma Protestante' },
        { a: 'Mercantilismo', b: 'Metais, protecionismo, colônias' },
        { a: 'Montesquieu', b: 'Separação dos poderes' },
        { a: 'Locke', b: 'Direitos naturais' },
        { a: 'Voltaire', b: 'Tolerância e liberdade de expressão' },
        { a: 'Absolutismo', b: 'Poder concentrado no rei' },
        { a: 'Revolução Industrial', b: 'Fábricas e classe operária' }
      ]
    },

    /* ============ 7. MUNDO CONTEMPORÂNEO ============ */
    {
      id: 'mundo-contemporaneo',
      nome: 'Mundo contemporâneo: guerras, totalitarismos e Guerra Fria',
      incidencia: 'alta',
      resumo: 'Imperialismo, duas guerras mundiais, Revolução Russa, crise de 1929, nazifascismo, Guerra Fria e descolonização: base para entender conflitos e a ordem mundial atual.',
      conceitos: [
        {
          titulo: 'Imperialismo, Primeira Guerra e Revolução Russa',
          texto: '- **Imperialismo/neocolonialismo** (séc. XIX): disputa por mercados e matérias-primas; **Conferência de Berlim** (1884–85) dividiu a África.\n- **Primeira Guerra** (1914–18): rivalidades imperialistas, nacionalismos, alianças; **Tratado de Versalhes** (1919) puniu a Alemanha.\n- **Revolução Russa** (1917): derrubou o czar; os **bolcheviques** (Lenin) instalaram um regime socialista; criação da **URSS** (1922).'
        },
        {
          titulo: 'Crise de 1929, totalitarismos e Segunda Guerra',
          texto: '- **Crise de 1929**: quebra da Bolsa de Nova York; desemprego e instabilidade; **New Deal** (EUA) com intervenção do Estado.\n- **Totalitarismos**: **fascismo** (Mussolini, Itália) e **nazismo** (Hitler, Alemanha): nacionalismo extremo, culto ao líder, propaganda, repressão, racismo e antissemitismo.\n- **Segunda Guerra** (1939–45): **Holocausto**; bombas atômicas em Hiroshima e Nagasaki; criação da **ONU** (1945) e da **Declaração Universal dos Direitos Humanos** (1948).'
        },
        {
          titulo: 'Guerra Fria e descolonização',
          texto: '- **Guerra Fria** (1947–1991): disputa **EUA x URSS** sem confronto direto: corrida armamentista e espacial, **OTAN** e **Pacto de Varsóvia**, **Plano Marshall**, **Revolução Cubana** (1959), **Guerras da Coreia e do Vietnã**, **Muro de Berlim** (1961–89).\n- **Fim da URSS** (1991): hegemonia dos EUA.\n- **Descolonização** (Ásia e África): independência da **Índia** (1947), **Conferência de Bandung** (1955), guerras de libertação (Argélia).\n- **Apartheid** na África do Sul (1948–1994); **Nelson Mandela**.'
        }
      ],
      pegadinhas: [
        'Confundir **Guerra Fria** (disputa indireta, sem guerra direta entre as superpotências) com guerra "quente".',
        'Dizer que o nazismo foi **apenas** consequência de Versalhes: houve também **crise econômica, nacionalismo, racismo e propaganda**.',
        'Esquecer a **dimensão colonial** das guerras mundiais e o papel dos povos colonizados.',
        'Tratar a ONU como "governo mundial": é uma **organização de Estados** com limites.'
      ],
      dicas: [
        'Em cartazes e imagens de propaganda, identifique **quem fala, o que exalta e o que oculta**.',
        'Ligue **crise econômica → radicalização política** (1929 e nazismo).',
        'Relacione Guerra Fria a **conflitos regionais** (Coreia, Vietnã, Cuba, Afeganistão).'
      ],
      exemplo: {
        enunciado: 'Qual a principal característica da Guerra Fria?',
        resolucao: 'A **disputa de poder, ideologia e influência entre EUA (capitalismo) e URSS (socialismo)**, sem confronto militar direto entre eles, mas com corrida armamentista e guerras indiretas em outros países.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.hobsbawm],
      flashcards: [
        { f: 'O que foi a Conferência de Berlim (1884–85)?', v: 'Reunião que definiu a partilha da África entre potências europeias.' },
        { f: 'O que foi o Tratado de Versalhes?', v: 'Acordo (1919) que encerrou a Primeira Guerra e impôs punições à Alemanha.' },
        { f: 'O que foi a Revolução Russa?', v: 'Revolução de 1917 que levou os bolcheviques ao poder e criou a URSS.' },
        { f: 'O que foi o New Deal?', v: 'Programa de Roosevelt, com intervenção estatal, para enfrentar a crise de 1929.' },
        { f: 'Marcas do totalitarismo', v: 'Partido único, culto ao líder, propaganda, repressão e controle da vida social.' },
        { f: 'O que foi o Holocausto?', v: 'Extermínio sistemático de judeus e outros grupos pelo regime nazista.' },
        { f: 'O que foi o Muro de Berlim?', v: 'Símbolo da Guerra Fria (1961–1989) que dividiu Berlim.' },
        { f: 'O que foi o apartheid?', v: 'Regime de segregação racial na África do Sul (1948–1994).' }
      ],
      quiz: [
        {
          q: 'A partilha da África pelas potências europeias, formalizada em Berlim (1884–85), refletiu',
          alt: ['a disputa por mercados e matérias-primas, sem consulta aos povos africanos', 'a defesa da autonomia política dos povos africanos', 'um acordo negociado entre africanos e europeus', 'o fim do imperialismo e do colonialismo no continente', 'uma política de igualdade entre as nações'],
          c: 0, dif: 'facil',
          exp: 'As potências dividiram o território com base em seus interesses econômicos e estratégicos.'
        },
        {
          q: 'A crise de 1929 ajuda a explicar o crescimento de regimes autoritários porque',
          alt: ['o desemprego e a instabilidade favoreceram discursos radicais e nacionalistas', 'a economia mundial cresceu rapidamente e sem desemprego', 'a democracia foi fortalecida em todos os países', 'os preços subiram sem desemprego nem instabilidade', 'a ONU já existia e controlava os mercados'],
          c: 0, dif: 'medio',
          exp: 'A crise econômica criou terreno para propostas autoritárias, como o nazismo.'
        },
        {
          q: 'A propaganda nazista, com cartazes e rádios controlados pelo Estado, buscava',
          alt: ['moldar a opinião pública e reforçar o culto ao líder', 'garantir a existência de uma imprensa livre', 'estimular o pluralismo político no país', 'divulgar os direitos humanos universais', 'estimular a crítica ao governo nazista'],
          c: 0, dif: 'facil',
          exp: 'O controle da comunicação foi central para o regime totalitário.'
        },
        {
          q: 'A criação da ONU (1945) e a Declaração Universal dos Direitos Humanos (1948) foram respostas',
          alt: ['às violências da Segunda Guerra, como o Holocausto', 'à Revolução Francesa e ao Iluminismo', 'à Primeira Guerra e ao Tratado de Versalhes', 'ao fim da Guerra Fria em 1991', 'à crise financeira mundial de 2008'],
          c: 0, dif: 'medio',
          exp: 'O pós-guerra buscou instituições e princípios para evitar novas atrocidades.'
        },
        {
          q: 'O Plano Marshall (1947) e a criação da OTAN (1949) integravam a estratégia dos EUA de',
          alt: ['conter o avanço do comunismo e reconstruir a Europa Ocidental', 'apoiar o regime socialista da União Soviética', 'promover a revolução socialista na Europa', 'abolir o capitalismo e estatizar as indústrias', 'incentivar a descolonização da Ásia e da África'],
          c: 0, dif: 'medio',
          exp: 'Ajuda econômica e aliança militar buscavam fortalecer o bloco capitalista.'
        },
        {
          q: 'A descolonização da Ásia e da África após a Segunda Guerra foi estimulada por',
          alt: ['movimentos de libertação nacional e o enfraquecimento das potências europeias', 'o fortalecimento do imperialismo europeu na África', 'a Revolução Industrial inglesa do século XVIII', 'a Reforma Protestante e as guerras de religião', 'o Renascimento cultural e comercial italiano'],
          c: 0, dif: 'medio',
          exp: 'Os movimentos nacionais e a perda de poder das metrópoles aceleraram as independências.'
        },
        {
          q: 'O apartheid, na África do Sul, caracterizava-se por',
          alt: ['segregação racial institucionalizada e privação de direitos da maioria negra', 'igualdade racial garantida por lei desde 1948', 'democracia plena com voto universal e igualitário', 'fim do racismo e integração entre os grupos', 'proibição do voto para a minoria branca'],
          c: 0, dif: 'facil',
          exp: 'O regime separou legalmente a população por raça, em benefício da minoria branca.'
        },
        {
          q: 'A queda do Muro de Berlim (1989) simboliza',
          alt: ['o enfraquecimento do bloco soviético e o fim da Guerra Fria', 'o início da Guerra Fria entre EUA e URSS', 'a vitória do nazismo na Segunda Guerra', 'a criação da OTAN e do Pacto de Varsóvia', 'o começo da Primeira Guerra Mundial'],
          c: 0, dif: 'dificil',
          exp: 'O fim do muro marcou o colapso do socialismo real no Leste Europeu e a reunificação alemã.'
        }
      ],
      pares: [
        { a: 'Versalhes', b: 'Punição à Alemanha em 1919' },
        { a: 'Revolução Russa', b: 'Bolcheviques e URSS' },
        { a: 'New Deal', b: 'Intervenção do Estado nos EUA' },
        { a: 'Nazismo', b: 'Racismo e culto a Hitler' },
        { a: 'ONU', b: 'Organização criada em 1945' },
        { a: 'OTAN', b: 'Aliança militar ocidental' },
        { a: 'Muro de Berlim', b: 'Símbolo da Guerra Fria' },
        { a: 'Apartheid', b: 'Segregação racial na África do Sul' }
      ]
    },

    /* ============ 8. AMÉRICA, ÁFRICA E HISTORIOGRAFIA ============ */
    {
      id: 'america-africa-diversidade',
      nome: 'América, África, diversidade cultural e conhecimento histórico',
      incidencia: 'media',
      resumo: 'Povos originários, conquista e independências latino-americanas, reinos africanos, diáspora e a crítica ao eurocentrismo. Em 2026, diversidade cultural e construção do conhecimento histórico estão entre os temas citados.',
      conceitos: [
        {
          titulo: 'Povos originários e conquista da América',
          texto: '- **Maias, astecas e incas**: civilizações com agricultura, astronomia, arquitetura e organização política complexas.\n- **Conquista espanhola**: **Cortés** (México) e **Pizarro** (Peru); epidemias, violência e exploração do trabalho (**encomienda**, **mita**).\n- **Independências latino-americanas** (séc. XIX): lideradas por criollos (**Bolívar**, **San Martín**); o **Haiti (1804)** foi a primeira república negra, nascida de uma revolta de escravizados.'
        },
        {
          titulo: 'África e diáspora',
          texto: '- **Reinos africanos**: Kush, Axum, Gana, **Mali** (Mansa Musa), Songai, Benin, Congo: comércio, metalurgia, cidades e universidades (Tombuctu).\n- **Tráfico atlântico**: milhões de pessoas escravizadas levadas à América (séculos XVI–XIX), com a participação de europeus e de elites africanas locais.\n- **Diáspora** formou culturas afro-americanas (religiões, ritmos, culinária).\n- No Brasil: **Lei 10.639/2003** e **Lei 11.645/2008** tornaram obrigatório o ensino da história e cultura **afro-brasileira, africana e indígena**.'
        },
        {
          titulo: 'Como o historiador trabalha',
          texto: '- **Fontes históricas**: escritas, orais, materiais, imagéticas. Nenhuma é "neutra"; é preciso analisar **autoria, contexto e finalidade**.\n- **Eurocentrismo**: interpretar o mundo a partir da Europa como centro. A historiografia atual valoriza **outros pontos de vista**.\n- **Memória e patrimônio**: o que se lembra ou esquece é disputa política.\n- **Tempo histórico**: permanências, mudanças, rupturas.'
        }
      ],
      pegadinhas: [
        'Descrever os povos originários como "primitivos": tinham **sociedades complexas**.',
        'Tratar a África como um bloco homogêneo e "sem história" antes da colonização.',
        'Confundir **memória** (reconstrução do passado pelo presente) com **história** (análise crítica com método).',
        'Ler a fonte como verdade: ela é **testemunho** de alguém, com interesses.'
      ],
      dicas: [
        'Pergunte à fonte: **quem produziu, quando, para quem e por quê?**',
        'Em questões sobre diversidade, valorize **protagonismo** de povos indígenas e afrodescendentes.',
        'Em questões sobre conquistas, perceba **resistência e adaptação** dos povos colonizados.'
      ],
      exemplo: {
        enunciado: 'Um livro didático antigo apresenta a conquista da América apenas pelo ponto de vista dos europeus. Que crítica a historiografia atual faria?',
        resolucao: 'Faria uma crítica ao **eurocentrismo**: a narrativa ignora a **perspectiva e a agência dos povos originários** e naturaliza a violência da conquista.'
      },
      fontes: [F.inep, F.critica, F.catraca, F.schwarcz],
      flashcards: [
        { f: 'Civilizações pré-colombianas mais conhecidas', v: 'Maias, astecas e incas.' },
        { f: 'O que foi a encomienda/mita?', v: 'Sistemas de trabalho compulsório imposto aos indígenas nas colônias espanholas.' },
        { f: 'Por que o Haiti é importante na história?', v: 'Foi a primeira república independente de maioria negra (1804), nascida de revolta de escravizados.' },
        { f: 'Quem foram Bolívar e San Martín?', v: 'Líderes das independências hispano-americanas.' },
        { f: 'O que foi o Reino do Mali?', v: 'Império africano rico em ouro e comércio, famoso por Mansa Musa e Tombuctu.' },
        { f: 'O que é eurocentrismo?', v: 'Visão que toma a Europa como centro e modelo para interpretar o mundo.' },
        { f: 'O que determina a Lei 10.639/2003?', v: 'Ensino obrigatório da história e cultura afro-brasileira e africana.' },
        { f: 'Para que serve a análise de fontes?', v: 'Para entender autoria, contexto e finalidade e interpretar criticamente o passado.' }
      ],
      quiz: [
        {
          q: 'Ao analisar uma crônica de um conquistador espanhol sobre os astecas, o historiador deve considerar que',
          alt: ['o texto expressa o olhar e os interesses do conquistador', 'trata-se de relato totalmente neutro', 'foi escrito por um líder asteca', 'dispensa análise de contexto', 'descreve a economia atual'],
          c: 0, dif: 'facil',
          exp: 'Toda fonte tem autoria e finalidade, e deve ser interpretada criticamente.'
        },
        {
          q: 'A Revolução do Haiti (1804) é considerada um marco porque',
          alt: ['resultou de revolta de escravizados e criou a primeira república negra', 'manteve a escravidão sob o controle da metrópole francesa', 'foi liderada por colonizadores e grandes proprietários', 'foi apoiada por todas as potências coloniais da época', 'extinguiu o capitalismo e a propriedade nas Américas'],
          c: 0, dif: 'medio',
          exp: 'A revolta de escravizados venceu a metrópole francesa e proclamou a independência.'
        },
        {
          q: 'Quando se apresenta a África antes da colonização como um continente sem história, comete-se',
          alt: ['um erro eurocêntrico', 'um acerto científico', 'uma valorização da diversidade', 'um reconhecimento dos reinos africanos', 'uma análise de fontes orais'],
          c: 0, dif: 'medio',
          exp: 'A África teve reinos, cidades e saberes complexos; ignorá-los é uma visão eurocêntrica.'
        },
        {
          q: 'A Lei 11.645/2008 torna obrigatório, nas escolas, o estudo da história e da cultura',
          alt: ['afro-brasileira e indígena', 'apenas europeia', 'somente norte-americana', 'exclusivamente medieval', 'apenas asiática'],
          c: 0, dif: 'medio',
          exp: 'A lei amplia a de 2003 e inclui os povos indígenas, valorizando a diversidade cultural brasileira.'
        },
        {
          q: 'O tráfico atlântico de africanos escravizados teve como consequência',
          alt: ['a formação de culturas afro-americanas e a diáspora africana', 'o fim das trocas comerciais', 'o desaparecimento de todas as culturas africanas', 'a abolição imediata da escravidão', 'a independência de todas as colônias'],
          c: 0, dif: 'medio',
          exp: 'A diáspora levou saberes, religiões e ritmos que moldaram as culturas das Américas.'
        },
        {
          q: 'A mita e a encomienda, no Peru e no México coloniais, eram',
          alt: ['formas de trabalho compulsório impostas aos indígenas', 'sistemas de trabalho assalariado livre', 'tipos de impostos sobre o comércio', 'ordens religiosas', 'cargos políticos hereditários'],
          c: 0, dif: 'dificil',
          exp: 'Os espanhóis exploraram o trabalho indígena em minas e fazendas por esses sistemas.'
        },
        {
          q: 'A discussão sobre o que deve ser lembrado, esquecido ou ensinado sobre o passado mostra que',
          alt: ['a memória é um campo de disputas políticas e sociais', 'o passado é sempre consensual', 'a história independe do presente', 'os documentos falam por si', 'não há interesse em preservar o passado'],
          c: 0, dif: 'dificil',
          exp: 'Memória e patrimônio dependem de escolhas, interesses e disputas no presente.'
        },
        {
          q: 'A tradição oral de povos africanos e indígenas, como fonte histórica, é',
          alt: ['uma fonte legítima, que exige análise crítica como as demais', 'uma fonte sem valor para a pesquisa histórica', 'sempre falsa por não ser escrita', 'dispensada quando há documentos escritos', 'irrelevante para o estudo do passado'],
          c: 0, dif: 'dificil',
          exp: 'A historiografia atual reconhece a oralidade como fonte de conhecimento histórico.'
        }
      ],
      pares: [
        { a: 'Incas', b: 'Civilização andina' },
        { a: 'Astecas', b: 'Civilização do México central' },
        { a: 'Mita', b: 'Trabalho compulsório indígena' },
        { a: 'Haiti (1804)', b: 'Primeira república negra' },
        { a: 'Bolívar', b: 'Independência hispano-americana' },
        { a: 'Mali', b: 'Reino africano de Mansa Musa' },
        { a: 'Eurocentrismo', b: 'Europa como centro do mundo' },
        { a: 'Diáspora africana', b: 'Dispersão forçada de africanos' }
      ]
    },

    /* ============ 9. ANTIGUIDADE E IDADE MÉDIA ============ */
    {
      id: 'antiguidade-medieval',
      nome: 'Antiguidade e Idade Média: cidadania, império e feudalismo',
      incidencia: 'media',
      resumo: 'Grécia, Roma e o mundo medieval aparecem ligados a conceitos atuais, como democracia, cidadania, direito, trabalho e poder da Igreja.',
      conceitos: [
        {
          titulo: 'Grécia: pólis, democracia e cidadania',
          texto: 'A **pólis** (cidade-Estado) foi a base da vida política grega. Em **Atenas**, a **democracia direta** permitia que cidadãos votassem nas leis na **ágora/assembleia**.\n\nMas **cidadania era restrita**: só homens adultos, filhos de atenienses, eram cidadãos. **Mulheres, escravos e estrangeiros (metecos)** ficavam excluídos.\n\nA **Grécia** deixou legados na **filosofia, no teatro e na ciência**.'
        },
        {
          titulo: 'Roma: República, Império e direito',
          texto: '- **República** (509–27 a.C.): Senado, magistrados; expansão militar.\n- **Império** (a partir de 27 a.C., com Augusto): poder do imperador, **Pax Romana**, trabalho **escravo**, cidades, estradas.\n- **Direito romano**: base de sistemas jurídicos modernos.\n- **Cristianismo** foi perseguido e depois oficializado (Constantino, Teodósio). Queda do Império do Ocidente em **476**.'
        },
        {
          titulo: 'Idade Média: feudalismo, Igreja e transformações',
          texto: '- **Feudalismo**: economia agrária, **servidão**, **suserania e vassalagem**, poder descentralizado.\n- **Igreja Católica**: influência política, cultural e econômica.\n- **Cruzadas**, **renascimento comercial e urbano** (burgos), **Peste Negra** (séc. XIV), crise do feudalismo e surgimento da burguesia.\n- **Islamismo**: expansão árabe, comércio e ciência.'
        }
      ],
      pegadinhas: [
        'Dizer que a democracia ateniense era "igual à de hoje": era **direta e restrita**.',
        'Achar que a Idade Média foi "idade das trevas": houve **produção cultural, técnica e comercial**.',
        'Confundir **servo** (preso à terra, com obrigações) com **escravo** (propriedade de outro).',
        'Ignorar que a **escravidão** foi base da economia romana.'
      ],
      dicas: [
        'Compare **conceitos antigos e atuais** (cidadania, democracia, direito) para identificar permanências e diferenças.',
        'Para o feudalismo, lembre: **terra, servidão, vassalagem, Igreja**.',
        'Cuidado com anacronismo: não julgue o passado com valores de hoje sem contexto.'
      ],
      exemplo: {
        enunciado: 'Por que se diz que a democracia ateniense era limitada?',
        resolucao: 'Porque a **cidadania era restrita** a uma minoria: homens adultos nascidos em Atenas. Mulheres, escravizados e estrangeiros não participavam das decisões.'
      },
      fontes: [F.inep, F.estrategia, F.critica],
      flashcards: [
        { f: 'O que era a pólis?', v: 'Cidade-Estado grega, centro da vida política e social.' },
        { f: 'Quem era cidadão em Atenas?', v: 'Homens adultos, filhos de atenienses.' },
        { f: 'O que foi a Pax Romana?', v: 'Período de estabilidade do Império Romano (séc. I–II).' },
        { f: 'Contribuição do direito romano', v: 'Base de muitos sistemas jurídicos modernos.' },
        { f: 'O que é suserania e vassalagem?', v: 'Relação de lealdade entre senhores feudais (suserano e vassalo).' },
        { f: 'O que era a servidão?', v: 'Trabalho do servo na terra do senhor, com obrigações, sem ser escravo.' },
        { f: 'O que foi a Peste Negra?', v: 'Epidemia do século XIV que dizimou a população europeia e agravou a crise feudal.' },
        { f: 'Quando caiu o Império Romano do Ocidente?', v: 'Em 476 d.C.' }
      ],
      quiz: [
        {
          q: 'A democracia ateniense é considerada limitada porque',
          alt: ['excluía mulheres, escravos e estrangeiros da cidadania', 'permitia o voto de todos os habitantes', 'era um governo de um único rei', 'não tinha assembleia', 'excluía os homens adultos'],
          c: 0, dif: 'facil',
          exp: 'Apenas uma minoria de homens adultos nascidos em Atenas participava das decisões.'
        },
        {
          q: 'O trabalho escravo no Império Romano foi',
          alt: ['base da produção agrícola e de serviços', 'proibido em todo o Império', 'raro e sem importância', 'exercido apenas por soldados', 'extinto com a Pax Romana'],
          c: 0, dif: 'medio',
          exp: 'A economia romana dependia amplamente da mão de obra escrava.'
        },
        {
          q: 'No feudalismo, a relação entre suserano e vassalo baseava-se em',
          alt: ['trocas de proteção e fidelidade, em uma sociedade descentralizada', 'livre-comércio entre iguais em mercados urbanos', 'democracia direta nas assembleias populares', 'trabalho assalariado nas grandes manufaturas', 'soberania popular exercida por eleições'],
          c: 0, dif: 'medio',
          exp: 'A lealdade pessoal e a doação de terras estruturavam o poder.'
        },
        {
          q: 'O renascimento comercial e urbano na Baixa Idade Média contribuiu para',
          alt: ['o fortalecimento da burguesia e a crise do feudalismo', 'o fortalecimento absoluto dos senhores feudais', 'o fim das cidades', 'o desaparecimento do comércio', 'a volta da economia de subsistência apenas'],
          c: 0, dif: 'medio',
          exp: 'O comércio ampliou cidades e fortaleceu uma nova classe, a burguesia.'
        },
        {
          q: 'A Peste Negra, no século XIV, teve como efeito',
          alt: ['queda da população e mudanças nas relações de trabalho no campo', 'aumento imediato da população europeia', 'fortalecimento do sistema feudal e da servidão', 'desaparecimento das cidades europeias', 'extinção do comércio entre Oriente e Ocidente'],
          c: 0, dif: 'dificil',
          exp: 'A mortandade gerou escassez de mão de obra e agravou a crise do sistema feudal.'
        },
        {
          q: 'A noção de "Idade das Trevas" para a Idade Média é criticada porque',
          alt: ['desconsidera produções culturais, técnicas e comerciais do período', 'o período teve pleno desenvolvimento industrial', 'não existiu Igreja', 'não havia agricultura', 'não houve cidades'],
          c: 0, dif: 'dificil',
          exp: 'A historiografia atual destaca universidades, arte, técnicas agrícolas e comércio.'
        },
        {
          q: 'O direito romano é importante até hoje porque',
          alt: ['serviu de base a muitos códigos jurídicos modernos', 'foi totalmente abandonado após a queda de Roma', 'não tinha leis escritas nem tribunais', 'tratava apenas de assuntos religiosos', 'proibia o comércio entre as províncias'],
          c: 0, dif: 'facil',
          exp: 'Conceitos como contrato, propriedade e cidadania derivam do direito romano.'
        },
        {
          q: 'Comparar cidadania na Grécia antiga e hoje exige evitar o anacronismo, que consiste em',
          alt: ['julgar o passado com valores e categorias do presente, sem contexto', 'estudar o contexto histórico da época analisada', 'analisar criticamente as fontes disponíveis', 'comparar as sociedades com método e cuidado', 'identificar permanências e mudanças no tempo'],
          c: 0, dif: 'dificil',
          exp: 'Anacronismo é atribuir ao passado ideias e conceitos de outra época. O historiador deve contextualizar.'
        }
      ],
      pares: [
        { a: 'Pólis', b: 'Cidade-Estado grega' },
        { a: 'Metecos', b: 'Estrangeiros sem cidadania' },
        { a: 'Pax Romana', b: 'Estabilidade do Império' },
        { a: 'Feudalismo', b: 'Servidão e vassalagem' },
        { a: 'Servo', b: 'Preso à terra do senhor' },
        { a: 'Burgos', b: 'Cidades comerciais medievais' },
        { a: 'Peste Negra', b: 'Epidemia do século XIV' },
        { a: 'Anacronismo', b: 'Julgar o passado pelo presente' }
      ]
    }
  ]);
})();
