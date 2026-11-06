/* Geografia — Ciências Humanas e suas Tecnologias.
   O ENEM cobra leitura de mapas, gráficos e textos, relacionando sociedade, território, natureza e economia.
   Temas mais recorrentes (levantamentos de terceiros): meio ambiente, população, geopolítica, urbanização, agropecuária. */
(function () {
  var F = {
    inep: { titulo: 'INEP — Matrizes de Referência do Enem (Ciências Humanas e suas Tecnologias)', url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem' },
    estrategia: { titulo: 'Estratégia Vestibulares — Assuntos que mais caem no Enem (análise de 1998 a 2020)', url: 'https://vestibulares.estrategia.com/portal/enem-e-vestibulares/enem/assuntos-que-mais-caem-no-enem/' },
    critica: { titulo: 'A Crítica (MS) — Enem 2026: veja os temas mais cobrados na prova de Ciências Humanas', url: 'https://acritica.net/educacao/enem-2026-veja-os-temas-mais-cobrados-na-prova-de-ciencias-humanas/' },
    catraca: { titulo: 'Catraca Livre — Enem 2026: 5 estratégias para estudar Ciências Humanas sem depender da memorização', url: 'https://catracalivre.com.br/educacao/enem-2026-5-estrategias-para-estudar-ciencias-humanas-sem-depender-da-memorizacao/' },
    ibge: { titulo: 'IBGE — Atlas geográfico escolar e dados do Censo (consulta recomendada)', url: 'https://www.ibge.gov.br/' },
    santos: { titulo: 'SANTOS, M. A natureza do espaço (obra de referência)', url: '' },
    moreira: { titulo: 'MOREIRA, I. Geografia — conceitos e leitura de mapas (obra de referência)', url: '' }
  };

  ENEM.temas('geografia', [
    /* ============ 1. MEIO AMBIENTE ============ */
    {
      id: 'meio-ambiente',
      nome: 'Meio ambiente: clima, biomas e questão ambiental',
      incidencia: 'alta',
      resumo: 'Aquecimento global, desmatamento, biomas brasileiros, recursos hídricos e desenvolvimento sustentável. É o eixo mais frequente da Geografia e dialoga com Biologia e Química.',
      conceitos: [
        {
          titulo: 'Clima, aquecimento global e acordos',
          texto: 'O **efeito estufa** é natural e mantém a Terra habitável. O problema é o **aumento das emissões** de gases como CO₂ e metano (queima de combustíveis fósseis, desmatamento, pecuária), que intensifica o **aquecimento global**.\n\n- **Consequências**: derretimento de geleiras, elevação do nível do mar, eventos extremos (secas, enchentes), perda de biodiversidade.\n- **Acordos**: Conferência do Rio (1992), **Protocolo de Kyoto** (1997), **Acordo de Paris** (2015), que busca limitar o aquecimento a bem menos de 2 °C.\n- **Ilhas de calor**: cidades mais quentes por concreto, asfalto e pouca vegetação. **Inversão térmica**: o ar frio preso perto do solo concentra poluentes.'
        },
        {
          titulo: 'Biomas e domínios morfoclimáticos do Brasil',
          texto: '- **Amazônia**: maior floresta tropical; desmatamento, garimpo e "arco do desmatamento".\n- **Cerrado**: savana com árvores retorcidas; expansão agrícola (soja); é o berço de muitas águas (nascentes).\n- **Mata Atlântica**: muito reduzida; concentra grande parte da população.\n- **Caatinga**: semiárido, vegetação adaptada à seca; desertificação.\n- **Pantanal**: maior planície alagável; queimadas.\n- **Pampa**: campos do Sul.\n\nO ENEM relaciona **bioma, uso da terra e conflitos** (povos tradicionais, agronegócio, mineração).'
        },
        {
          titulo: 'Recursos naturais e sustentabilidade',
          texto: '- **Desenvolvimento sustentável**: atender às necessidades presentes sem comprometer as gerações futuras.\n- **Energia**: fontes **renováveis** (hidrelétrica, solar, eólica, biomassa) e **não renováveis** (petróleo, carvão). A matriz elétrica brasileira é majoritariamente renovável, mas com impactos (hidrelétricas alagam áreas).\n- **Água**: distribuição desigual, crise hídrica, contaminação; **bacias hidrográficas** como unidade de gestão.\n- **Resíduos sólidos**: lixões, aterros, coleta seletiva, **logística reversa** e **economia circular**.'
        }
      ],
      pegadinhas: [
        'Confundir **efeito estufa** (natural) com **aquecimento global** (intensificação por ações humanas).',
        'Achar que o **Cerrado** é "menos importante" que a Amazônia: é crucial para as águas e muito desmatado.',
        'Dizer que energia **renovável** não causa impacto algum: toda fonte tem impactos sociais e ambientais.',
        'Confundir **inversão térmica** (fenômeno atmosférico local) com aquecimento global.'
      ],
      dicas: [
        'Em textos e gráficos, procure **causa humana, consequência e solução proposta**.',
        'Associe cada bioma a **uma pressão principal**: Amazônia (desmatamento), Cerrado (soja), Caatinga (seca), Pantanal (queimadas).',
        'Em questões de sustentabilidade, a resposta costuma equilibrar **economia, sociedade e ambiente**.'
      ],
      exemplo: {
        enunciado: 'Por que o aumento de áreas de concreto e asfalto nas metrópoles favorece as chamadas ilhas de calor?',
        resolucao: 'Porque esses materiais **absorvem e retêm calor**, e a falta de vegetação reduz a **sombra e a evapotranspiração**. Também a poluição e os prédios dificultam a dispersão do ar quente, deixando o centro urbano mais quente que a periferia vegetada.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.ibge, F.santos],
      flashcards: [
        { f: 'Efeito estufa x aquecimento global', v: 'O efeito estufa é natural; o aquecimento global é sua intensificação por emissões humanas.' },
        { f: 'Principal gás do efeito estufa emitido por queima de combustíveis', v: 'Dióxido de carbono (CO₂).' },
        { f: 'O que é o Acordo de Paris?', v: 'Acordo (2015) para limitar o aquecimento global, com metas nacionais de redução de emissões.' },
        { f: 'O que é inversão térmica?', v: 'Camada de ar frio presa perto do solo, que retém poluentes.' },
        { f: 'Bioma com maior expansão da soja', v: 'Cerrado.' },
        { f: 'Bioma do semiárido', v: 'Caatinga.' },
        { f: 'O que é desenvolvimento sustentável?', v: 'Atender às necessidades atuais sem comprometer as futuras gerações.' },
        { f: 'O que é logística reversa?', v: 'Retorno de produtos e embalagens ao fabricante para reaproveitamento ou descarte correto.' }
      ],
      quiz: [
        {
          q: 'O aquecimento global é entendido como a intensificação do efeito estufa em razão',
          alt: ['do aumento das emissões de gases por atividades humanas', 'da redução natural da radiação solar', 'do esfriamento dos oceanos tropicais', 'da diminuição do dióxido de carbono atmosférico', 'do fim da camada de ozônio sobre os polos'],
          c: 0, dif: 'facil',
          exp: 'A queima de combustíveis fósseis e o desmatamento ampliam a concentração de gases que retêm calor.'
        },
        {
          q: 'A inversão térmica agrava a poluição em grandes cidades porque',
          alt: ['uma camada de ar frio sob o ar quente impede a dispersão dos poluentes', 'o ar quente sobe e leva os poluentes para a estratosfera', 'a chuva ácida aumenta a evaporação dos rios', 'os ventos fortes acumulam gases nos subúrbios', 'o vapor de água reduz a quantidade de gases no ar'],
          c: 0, dif: 'medio',
          exp: 'A camada de ar quente funciona como tampa e mantém o ar frio, com poluentes, junto ao solo.'
        },
        {
          q: 'O Cerrado é considerado "berço das águas" do Brasil porque',
          alt: ['abriga nascentes de importantes bacias hidrográficas do país', 'possui os maiores rios navegáveis do planeta', 'tem clima equatorial úmido o ano inteiro', 'concentra grandes geleiras e lagos glaciais', 'recebe água salgada de manguezais extensos'],
          c: 0, dif: 'medio',
          exp: 'Nascentes do Cerrado alimentam bacias como Tocantins-Araguaia, São Francisco e Paraná.'
        },
        {
          q: 'Entre os impactos de usinas hidrelétricas de grande porte, destaca-se',
          alt: ['o alagamento de áreas, com deslocamento de populações e perda de biodiversidade', 'a emissão de grandes quantidades de fumaça e carvão', 'o esgotamento rápido das reservas de petróleo', 'o aumento da dependência de combustíveis importados', 'a contaminação do solo por resíduos radioativos'],
          c: 0, dif: 'medio',
          exp: 'Embora renovável, a hidrelétrica altera ecossistemas e comunidades ribeirinhas.'
        },
        {
          q: 'O desenvolvimento sustentável pode ser definido como aquele que',
          alt: ['atende às necessidades presentes sem comprometer as das gerações futuras', 'prioriza o lucro imediato acima do uso dos recursos', 'interrompe toda atividade econômica nas áreas verdes', 'preserva a natureza e ignora as demandas sociais', 'depende exclusivamente de tecnologias importadas'],
          c: 0, dif: 'facil',
          exp: 'O conceito integra dimensões econômica, social e ambiental.'
        },
        {
          q: 'A desertificação em áreas do semiárido nordestino é agravada principalmente por',
          alt: ['desmatamento, uso inadequado do solo e períodos longos de seca', 'excesso de chuvas e inundações frequentes', 'intensa atividade vulcânica na região', 'formação de geleiras nas serras próximas', 'elevação do nível do mar na costa'],
          c: 0, dif: 'dificil',
          exp: 'A degradação do solo e da vegetação, somada à escassez de chuva, amplia o processo.'
        },
        {
          q: 'Uma política de logística reversa para eletroeletrônicos busca',
          alt: ['recolher produtos usados para reaproveitar materiais e evitar descarte incorreto', 'estimular o descarte de aparelhos em lixões a céu aberto', 'reduzir a vida útil dos aparelhos para vender mais unidades', 'proibir a reciclagem de componentes metálicos e plásticos', 'transferir todo o lixo eletrônico para países vizinhos'],
          c: 0, dif: 'dificil',
          exp: 'A logística reversa responsabiliza a cadeia produtiva pelo retorno e destino correto dos resíduos.'
        },
        {
          q: 'O chamado "arco do desmatamento" na Amazônia refere-se',
          alt: ['à faixa de borda da floresta onde avançam pecuária, soja e extração ilegal', 'a um conjunto de ilhas fluviais preservadas', 'ao trecho central da floresta intocado por qualquer atividade', 'a uma cordilheira que limita o bioma ao norte', 'a um corredor ecológico protegido por lei federal'],
          c: 0, dif: 'dificil',
          exp: 'Nessa faixa, do Maranhão ao Acre, a fronteira agropecuária pressiona a floresta.'
        }
      ],
      pares: [
        { a: 'Efeito estufa', b: 'Fenômeno natural de retenção de calor' },
        { a: 'Acordo de Paris', b: 'Metas contra o aquecimento global' },
        { a: 'Inversão térmica', b: 'Poluentes presos perto do solo' },
        { a: 'Caatinga', b: 'Bioma do semiárido' },
        { a: 'Pantanal', b: 'Planície alagável' },
        { a: 'Cerrado', b: 'Berço das águas e soja' },
        { a: 'Biomassa', b: 'Fonte de energia renovável' },
        { a: 'Logística reversa', b: 'Retorno de resíduos à cadeia' }
      ]
    },

    /* ============ 2. POPULAÇÃO E MIGRAÇÕES ============ */
    {
      id: 'populacao-migracoes',
      nome: 'População, demografia e migrações',
      incidencia: 'alta',
      resumo: 'Transição demográfica, pirâmides etárias, IDH, desigualdade, migrações internas e internacionais, refugiados. Muito cobrado com gráficos e tabelas.',
      conceitos: [
        {
          titulo: 'Crescimento e estrutura da população',
          texto: '- **Taxa de natalidade** e **mortalidade** definem o crescimento vegetativo.\n- **Transição demográfica**: de natalidade e mortalidade altas → mortalidade cai primeiro (crescimento acelerado) → natalidade cai → população tende a estabilizar e **envelhecer**.\n- **Pirâmide etária**: base larga = muitos jovens; base estreita e topo largo = **envelhecimento**. O Brasil está em **envelhecimento acelerado**, com fim do "bônus demográfico".\n- **Indicadores**: **IDH** (renda, educação, longevidade), expectativa de vida, mortalidade infantil. O **índice de Gini** mede desigualdade de renda.'
        },
        {
          titulo: 'Migrações',
          texto: '- **Migração interna**: êxodo rural, migração nordestina para o Sudeste (anos 1950–80), migração de retorno, deslocamento para fronteiras agrícolas (Centro-Oeste, Norte).\n- **Migração pendular**: deslocamento diário entre cidade-dormitório e cidade-polo.\n- **Migração internacional**: busca de trabalho, **refugiados** (guerras, perseguições, crises climáticas e econômicas). Exemplos recentes no Brasil: venezuelanos, haitianos.\n- **Xenofobia** e **direitos dos migrantes** são debates frequentes.'
        },
        {
          titulo: 'Trabalho e desigualdade',
          texto: 'A **população economicamente ativa (PEA)** inclui empregados e desempregados que buscam trabalho. O **mercado informal** é grande no Brasil.\n\nA **desigualdade** aparece em renda, gênero, raça, regiões e acesso a serviços (saneamento, saúde, educação). A **urbanização acelerada** gerou periferias e desigualdade socioespacial.'
        }
      ],
      pegadinhas: [
        'Interpretar pirâmide com base estreita como "população jovem": é o contrário, **envelhecimento**.',
        'Confundir **migrante** (deslocamento por escolha ou necessidade) com **refugiado** (foge de perseguição ou conflito, com proteção internacional).',
        'Achar que IDH mede só **renda**: inclui educação e longevidade.',
        'Dizer que a baixa natalidade é sempre problema: relaciona-se a educação, trabalho feminino e urbanização.'
      ],
      dicas: [
        'Ao ler uma pirâmide, observe **base, meio e topo** e o que isso indica para o futuro.',
        'Em migrações, procure **fatores de expulsão** (falta de emprego, conflito) e **de atração** (renda, serviços).',
        'Interprete gráficos pelo **título, unidade e período** antes de olhar os números.'
      ],
      exemplo: {
        enunciado: 'Uma pirâmide etária com base estreita e topo largo indica qual tendência demográfica?',
        resolucao: '**Envelhecimento populacional**: menos nascimentos e mais idosos. Isso aumenta a pressão sobre previdência e saúde e reduz a proporção de pessoas em idade ativa no futuro.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.ibge],
      flashcards: [
        { f: 'O que é crescimento vegetativo?', v: 'Diferença entre natalidade e mortalidade.' },
        { f: 'O que indica uma pirâmide de base estreita?', v: 'Queda da natalidade e envelhecimento da população.' },
        { f: 'O que mede o IDH?', v: 'Renda, educação e longevidade.' },
        { f: 'O que mede o índice de Gini?', v: 'Desigualdade de renda (0 = igualdade; 1 = desigualdade máxima).' },
        { f: 'O que é migração pendular?', v: 'Deslocamento diário entre residência e trabalho ou estudo em outra cidade.' },
        { f: 'O que é êxodo rural?', v: 'Saída da população do campo para as cidades.' },
        { f: 'Quem é refugiado?', v: 'Pessoa que deixa seu país por perseguição, guerra ou violações de direitos.' },
        { f: 'O que é bônus demográfico?', v: 'Período em que há muitos adultos em idade ativa em relação a crianças e idosos.' }
      ],
      quiz: [
        {
          q: 'Uma pirâmide etária de base estreita e topo alargado caracteriza um país com',
          alt: ['envelhecimento populacional e baixa natalidade', 'população predominantemente jovem e alta natalidade', 'crescimento populacional muito acelerado', 'mortalidade infantil elevada e poucos idosos', 'grande entrada de imigrantes jovens'],
          c: 0, dif: 'facil',
          exp: 'Poucos nascimentos e mais idosos indicam envelhecimento da população.'
        },
        {
          q: 'O Índice de Desenvolvimento Humano (IDH) combina indicadores de',
          alt: ['renda, educação e longevidade', 'temperatura, relevo e vegetação', 'exportações, importações e dívida pública', 'área territorial, população e densidade', 'crescimento industrial e produção agrícola'],
          c: 0, dif: 'facil',
          exp: 'O IDH resume três dimensões: renda, educação e saúde (expectativa de vida).'
        },
        {
          q: 'A principal diferença entre migrante econômico e refugiado é que o refugiado',
          alt: ['foge de guerra ou perseguição e possui proteção internacional', 'escolhe livremente mudar de país por lazer', 'viaja apenas para visitar parentes', 'se desloca dentro do mesmo município', 'mantém residência fixa em dois países'],
          c: 0, dif: 'medio',
          exp: 'Refugiados saem por ameaça à vida ou à liberdade e têm proteção em tratados internacionais.'
        },
        {
          q: 'A migração pendular nas regiões metropolitanas ocorre quando trabalhadores',
          alt: ['moram em uma cidade e se deslocam diariamente para trabalhar em outra', 'mudam de estado em busca de terras agrícolas', 'migram sazonalmente para colher safras', 'retornam ao campo depois de décadas na cidade', 'deixam o país em busca de refúgio'],
          c: 0, dif: 'medio',
          exp: 'As cidades-dormitório dependem desse deslocamento diário para o centro econômico.'
        },
        {
          q: 'A queda da natalidade nas últimas décadas no Brasil relaciona-se, em grande parte, a',
          alt: ['urbanização, maior escolaridade feminina e acesso a planejamento familiar', 'proibição legal do uso de métodos contraceptivos', 'aumento da mortalidade infantil nas cidades', 'crescimento do êxodo urbano para o campo', 'fim da participação feminina no mercado de trabalho'],
          c: 0, dif: 'medio',
          exp: 'Mudanças sociais e econômicas reduziram o número médio de filhos por mulher.'
        },
        {
          q: 'O fim do "bônus demográfico" traz como desafio',
          alt: ['sustentar previdência e saúde com menos pessoas em idade ativa', 'aumentar o número de escolas infantis em todos os municípios', 'enfrentar o excesso de jovens sem emprego', 'conter o crescimento acelerado da natalidade', 'reduzir a expectativa de vida da população'],
          c: 0, dif: 'dificil',
          exp: 'Com mais idosos proporcionalmente, cresce a pressão sobre os sistemas de seguridade social.'
        },
        {
          q: 'A migração nordestina para o Sudeste a partir dos anos 1950 esteve ligada',
          alt: ['à oferta de empregos industriais, somada às secas e à falta de terras no Nordeste', 'à descoberta de ouro nas serras do litoral fluminense', 'à proibição legal da agricultura no semiárido nordestino', 'à abertura de fronteiras com a Argentina e o Uruguai', 'à criação de grandes reservas indígenas no litoral sul'],
          c: 0, dif: 'dificil',
          exp: 'Fatores de atração (indústria) e de expulsão (seca, concentração fundiária) explicam o fluxo.'
        },
        {
          q: 'Um índice de Gini próximo de 1 em um país indica',
          alt: ['forte concentração de renda e grande desigualdade', 'distribuição de renda igualitária', 'ausência de população economicamente ativa', 'crescimento populacional nulo', 'predomínio absoluto do setor agrícola'],
          c: 0, dif: 'medio',
          exp: 'Quanto mais perto de 1, maior a desigualdade de renda.'
        }
      ],
      pares: [
        { a: 'IDH', b: 'Renda, educação e longevidade' },
        { a: 'Índice de Gini', b: 'Desigualdade de renda' },
        { a: 'Êxodo rural', b: 'Campo → cidade' },
        { a: 'Migração pendular', b: 'Deslocamento diário' },
        { a: 'Refugiado', b: 'Foge de guerra ou perseguição' },
        { a: 'Bônus demográfico', b: 'Muitos adultos em idade ativa' },
        { a: 'Natalidade', b: 'Nascimentos por mil habitantes' },
        { a: 'PEA', b: 'População economicamente ativa' }
      ]
    },

    /* ============ 3. AGRÁRIA ============ */
    {
      id: 'agraria-agronegocio',
      nome: 'Espaço agrário: agronegócio, terra e conflitos',
      incidencia: 'alta',
      resumo: 'Estrutura fundiária, agricultura familiar x agronegócio, revolução verde, reforma agrária, uso de agrotóxicos e fronteira agrícola.',
      conceitos: [
        {
          titulo: 'Estrutura fundiária e conflitos',
          texto: 'O Brasil tem **alta concentração de terras**: poucos latifúndios ocupam grande parte da área rural. Isso gera **conflitos no campo** (MST, comunidades quilombolas, povos indígenas, posseiros).\n\n- **Reforma agrária**: redistribuição de terras para reduzir desigualdade e ampliar a produção de alimentos.\n- **Agricultura familiar**: produz grande parte dos alimentos básicos do mercado interno e emprega muitas pessoas.\n- **Terras indígenas e quilombolas** têm proteção constitucional (CF/1988).'
        },
        {
          titulo: 'Modernização do campo e agronegócio',
          texto: '- **Revolução Verde** (a partir dos anos 1960): sementes selecionadas, adubos químicos, agrotóxicos, mecanização, aumento da produtividade; impactos: **concentração de terras, êxodo rural, contaminação**.\n- **Agronegócio**: cadeia que integra produção, indústria e comércio; destaque para **soja, milho, cana-de-açúcar, carne e café**; o Brasil é um grande exportador.\n- **Fronteira agrícola**: avanço sobre Cerrado e Amazônia (MATOPIBA).\n- **Commodities**: produtos primários negociados em bolsas, com preços definidos internacionalmente; economia vulnerável a oscilações.'
        },
        {
          titulo: 'Sustentabilidade no campo',
          texto: 'Alternativas ao modelo intensivo: **agroecologia**, **agricultura orgânica**, **sistemas agroflorestais**, **rotação de culturas**, **plantio direto**. Debates sobre **transgênicos**, **agrotóxicos**, **uso da água** e **desmatamento**.'
        }
      ],
      pegadinhas: [
        'Achar que o **agronegócio** produz a maior parte dos alimentos do prato do brasileiro: boa parte vem da **agricultura familiar**.',
        'Confundir **latifúndio** (grande propriedade, muitas vezes improdutiva ou monocultora) com **agricultura familiar**.',
        'Dizer que a **Revolução Verde** não teve impactos negativos: houve concentração fundiária e contaminação.',
        'Confundir **commodity** (produto primário padronizado) com produto industrializado de marca.'
      ],
      dicas: [
        'Em mapas e gráficos agrícolas, identifique **produto, região, tipo de produtor e destino** (mercado interno ou exportação).',
        'Relacione **modernização do campo** a êxodo rural, concentração de terras e impacto ambiental.',
        'Para conflitos, pense em **terra, água, trabalho e identidade** (povos tradicionais).'
      ],
      exemplo: {
        enunciado: 'Por que a economia de um país que exporta principalmente soja e minério de ferro é considerada vulnerável?',
        resolucao: 'Porque são **commodities**, com preços definidos no mercado internacional. Quedas de preço ou de demanda externa afetam diretamente a receita, o emprego e a balança comercial do país.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.ibge, F.santos],
      flashcards: [
        { f: 'O que é latifúndio?', v: 'Grande propriedade rural, em geral concentrada e com monocultura ou pecuária extensiva.' },
        { f: 'O que é reforma agrária?', v: 'Redistribuição de terras para reduzir a concentração fundiária.' },
        { f: 'O que foi a Revolução Verde?', v: 'Modernização agrícola com sementes, adubos, agrotóxicos e máquinas.' },
        { f: 'O que são commodities?', v: 'Produtos primários padronizados, com preço definido no mercado internacional.' },
        { f: 'O que é agricultura familiar?', v: 'Produção em pequenas propriedades, com trabalho predominantemente da família.' },
        { f: 'O que é MATOPIBA?', v: 'Fronteira agrícola entre Maranhão, Tocantins, Piauí e Bahia.' },
        { f: 'O que é agroecologia?', v: 'Agricultura que une conhecimento tradicional, ciência e respeito aos ecossistemas.' },
        { f: 'O que é rotação de culturas?', v: 'Alternância de cultivos para conservar o solo e reduzir pragas.' }
      ],
      quiz: [
        {
          q: 'A concentração fundiária brasileira gera, entre outros efeitos,',
          alt: ['conflitos no campo e disputas por terra', 'ampla distribuição de propriedades pequenas', 'diminuição do êxodo rural', 'fim do agronegócio exportador', 'extinção das terras indígenas'],
          c: 0, dif: 'facil',
          exp: 'A desigualdade no acesso à terra alimenta tensões entre grandes proprietários e movimentos sociais.'
        },
        {
          q: 'Um impacto negativo associado à Revolução Verde foi',
          alt: ['a contaminação por agrotóxicos e a concentração de terras', 'a redução do uso de máquinas agrícolas', 'o aumento do trabalho manual nas lavouras', 'a volta da policultura de subsistência', 'o fim da exportação de grãos'],
          c: 0, dif: 'medio',
          exp: 'A modernização trouxe produtividade, mas também riscos ambientais e exclusão de pequenos produtores.'
        },
        {
          q: 'Os produtos classificados como commodities têm como característica',
          alt: ['preços definidos no mercado internacional e pouco valor agregado', 'alto grau de industrialização e marca própria', 'produção restrita ao mercado local', 'preços fixos determinados pelo governo', 'venda exclusiva em lojas especializadas'],
          c: 0, dif: 'medio',
          exp: 'Soja, minério e petróleo bruto são exemplos de produtos cujos preços oscilam globalmente.'
        },
        {
          q: 'A agricultura familiar é importante para o Brasil porque',
          alt: ['responde por grande parte dos alimentos consumidos no mercado interno', 'domina a exportação de soja e minério', 'ocupa a maior parte das terras agrícolas', 'dispensa o uso de mão de obra', 'se concentra apenas em monoculturas de exportação'],
          c: 0, dif: 'medio',
          exp: 'Pequenos produtores fornecem alimentos básicos, como mandioca, feijão e leite.'
        },
        {
          q: 'A expansão da fronteira agrícola sobre o Cerrado nas últimas décadas relaciona-se',
          alt: ['ao cultivo de soja e milho em grandes áreas mecanizadas', 'ao crescimento do extrativismo familiar de pequeno porte', 'à criação de unidades de conservação em larga escala', 'ao abandono das terras pelos grandes produtores', 'à expansão da agricultura de subsistência no litoral'],
          c: 0, dif: 'medio',
          exp: 'O relevo plano e a correção do solo favoreceram a agricultura mecanizada.'
        },
        {
          q: 'Os sistemas agroflorestais e a agroecologia são apresentados como alternativas porque',
          alt: ['conciliam produção de alimentos com conservação do solo e da biodiversidade', 'dependem exclusivamente do uso intensivo de agrotóxicos', 'eliminam a presença de árvores nas áreas de lavoura', 'exigem o desmatamento de grandes áreas para o plantio', 'reduzem a diversidade de espécies cultivadas no campo'],
          c: 0, dif: 'dificil',
          exp: 'Essas práticas diversificam cultivos e reduzem o uso de insumos químicos.'
        },
        {
          q: 'Terras indígenas e quilombolas são reconhecidas na Constituição de 1988 como',
          alt: ['territórios com direitos garantidos a seus povos tradicionais', 'áreas livres para exploração por qualquer empresa', 'propriedades exclusivas do Estado, sem moradores', 'zonas sem proteção legal', 'terrenos destinados apenas à mineração'],
          c: 0, dif: 'dificil',
          exp: 'A Constituição reconhece direitos territoriais de povos indígenas e comunidades quilombolas.'
        },
        {
          q: 'A dependência de exportações de commodities torna a economia vulnerável porque',
          alt: ['quedas de preço no mercado externo reduzem receitas e empregos', 'os preços são sempre estáveis', 'a demanda externa nunca varia', 'a indústria nacional cresce sem esforço', 'a balança comercial é sempre superavitária'],
          c: 0, dif: 'dificil',
          exp: 'Os preços das commodities oscilam e o país tem pouco controle sobre eles.'
        }
      ],
      pares: [
        { a: 'Latifúndio', b: 'Grande propriedade concentrada' },
        { a: 'Reforma agrária', b: 'Redistribuição de terras' },
        { a: 'Revolução Verde', b: 'Modernização com agroquímicos' },
        { a: 'Commodities', b: 'Produtos primários cotados em bolsa' },
        { a: 'Agroecologia', b: 'Produção em equilíbrio com a natureza' },
        { a: 'MATOPIBA', b: 'Fronteira agrícola do Cerrado' },
        { a: 'Agricultura familiar', b: 'Alimentos do mercado interno' },
        { a: 'Rotação de culturas', b: 'Conserva o solo' }
      ]
    },

    /* ============ 4. URBANIZAÇÃO ============ */
    {
      id: 'urbanizacao',
      nome: 'Urbanização, cidades e infraestrutura',
      incidencia: 'alta',
      resumo: 'Crescimento urbano brasileiro, metropolização, segregação socioespacial, mobilidade, saneamento, moradia e problemas urbanos.',
      conceitos: [
        {
          titulo: 'Urbanização brasileira',
          texto: 'O Brasil passou de país rural a **urbano** (cerca de 85% da população) em poucas décadas, especialmente entre 1950 e 1980, pelo **êxodo rural** e pela industrialização. A urbanização foi **rápida e desigual**.\n\n- **Metrópoles** e **regiões metropolitanas** (São Paulo, Rio, Belo Horizonte).\n- **Conurbação**: junção de áreas urbanas de cidades vizinhas.\n- **Rede urbana**: hierarquia entre cidades (metrópoles, capitais regionais, cidades médias e pequenas).\n- **Cidades médias** crescem e desconcentram a população.'
        },
        {
          titulo: 'Problemas urbanos',
          texto: '- **Segregação socioespacial**: ricos em áreas valorizadas, pobres em periferias e áreas de risco; **favelas e ocupações** por falta de moradia acessível.\n- **Déficit habitacional** e **especulação imobiliária**; **gentrificação** (valorização que expulsa moradores antigos).\n- **Mobilidade**: trânsito, transporte público precário, tempo de deslocamento; alternativas (metrô, BRT, ciclovias).\n- **Saneamento básico**: água, esgoto, resíduos e drenagem desiguais.\n- **Enchentes**, **ilhas de calor**, **poluição** e **violência urbana**.'
        },
        {
          titulo: 'Direito à cidade e planejamento',
          texto: '**Plano diretor** e **Estatuto da Cidade (2001)** orientam o planejamento: **função social da propriedade**, participação popular, regularização fundiária. Debates atuais: **cidades sustentáveis**, **moradia digna**, **áreas verdes**, **transporte público de qualidade** e **cidades inteligentes**.'
        }
      ],
      pegadinhas: [
        'Confundir **urbanização** (aumento da proporção de população urbana) com **crescimento de uma cidade**.',
        'Achar que **favelas** são um fenômeno apenas "de ilegalidade": resultam de **falta de acesso à moradia e à terra urbana**.',
        'Confundir **conurbação** (cidades coladas) com **metropolização**.',
        'Dizer que a gentrificação é só "melhoria": também **expulsa** moradores de menor renda.'
      ],
      dicas: [
        'Em imagens de paisagem urbana, observe **contrastes** (verticalização, favelas, áreas verdes).',
        'Nas questões, relacione **uso do solo, renda e infraestrutura**.',
        'Cite sempre a **função social da propriedade** quando o tema for moradia e especulação.'
      ],
      exemplo: {
        enunciado: 'Por que moradores de baixa renda tendem a ocupar encostas e margens de rios nas grandes cidades?',
        resolucao: 'Porque o **solo urbano bem localizado é caro** (especulação imobiliária) e faltam políticas de moradia popular. Sem acesso ao mercado formal, ocupam **áreas de risco**, mais vulneráveis a deslizamentos e enchentes.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.ibge, F.santos],
      flashcards: [
        { f: 'O que é conurbação?', v: 'Junção física de áreas urbanas de cidades vizinhas.' },
        { f: 'O que é segregação socioespacial?', v: 'Separação espacial entre grupos sociais, por renda, nas cidades.' },
        { f: 'O que é gentrificação?', v: 'Valorização de uma área que leva à expulsão de moradores de menor renda.' },
        { f: 'O que é déficit habitacional?', v: 'Falta de moradias adequadas para a população.' },
        { f: 'O que é o Estatuto da Cidade?', v: 'Lei (2001) que regulamenta a política urbana e a função social da propriedade.' },
        { f: 'O que é plano diretor?', v: 'Instrumento básico do planejamento urbano municipal.' },
        { f: 'O que é especulação imobiliária?', v: 'Retenção de terrenos à espera de valorização.' },
        { f: 'O que é BRT?', v: 'Transporte rápido por ônibus em corredores exclusivos.' }
      ],
      quiz: [
        {
          q: 'O principal fator da urbanização acelerada no Brasil entre 1950 e 1980 foi',
          alt: ['a industrialização e o êxodo rural', 'o fim da industrialização', 'a proibição de migração interna', 'a expansão das áreas rurais', 'o aumento das exportações de café'],
          c: 0, dif: 'facil',
          exp: 'Empregos urbanos e a modernização do campo atraíram milhões de pessoas para as cidades.'
        },
        {
          q: 'A segregação socioespacial nas grandes cidades manifesta-se quando',
          alt: ['os mais ricos ocupam áreas bem equipadas e os pobres, periferias carentes', 'todos os grupos sociais convivem nos mesmos bairros e serviços', 'a infraestrutura é igual em todas as regiões da cidade', 'não existem diferenças de moradia entre os grupos', 'a renda não influencia o local de residência das pessoas'],
          c: 0, dif: 'medio',
          exp: 'O preço do solo e a renda definem quem acessa serviços e localização privilegiada.'
        },
        {
          q: 'A gentrificação de bairros centrais pode resultar em',
          alt: ['valorização imobiliária e deslocamento de moradores de menor renda', 'barateamento dos aluguéis para os moradores antigos', 'abandono total dos imóveis do bairro', 'redução do preço do solo urbano', 'fim das desigualdades sociais'],
          c: 0, dif: 'medio',
          exp: 'A revitalização eleva custos e pode expulsar os moradores originais.'
        },
        {
          q: 'O Estatuto da Cidade (2001) estabelece como princípio que a propriedade urbana deve',
          alt: ['cumprir uma função social, atendendo ao bem coletivo', 'servir apenas ao lucro do proprietário', 'ser mantida vazia à espera de valorização', 'ser isenta de qualquer regulamentação', 'ser sempre pública e gratuita'],
          c: 0, dif: 'medio',
          exp: 'O direito de propriedade é condicionado ao interesse social e ao planejamento da cidade.'
        },
        {
          q: 'Investir em transporte público de massa nas metrópoles contribui para',
          alt: ['reduzir congestionamentos, poluição e tempo de deslocamento', 'aumentar o uso de carros particulares', 'ampliar a poluição sonora e do ar', 'estimular a ocupação de áreas de risco', 'concentrar empregos no centro apenas'],
          c: 0, dif: 'facil',
          exp: 'Mais transporte coletivo diminui a dependência do automóvel individual.'
        },
        {
          q: 'A conurbação ocorre quando',
          alt: ['o crescimento de cidades vizinhas leva à junção de suas áreas urbanas', 'uma cidade perde população para o campo continuamente', 'duas cidades se separam por causa de rios e montanhas', 'a população rural se isola no interior do país', 'cidades pequenas deixam de existir após a migração'],
          c: 0, dif: 'medio',
          exp: 'Em regiões metropolitanas, a malha urbana torna-se contínua entre municípios.'
        },
        {
          q: 'A impermeabilização do solo nas cidades agrava as enchentes porque',
          alt: ['reduz a infiltração da água da chuva e aumenta o escoamento superficial', 'aumenta a absorção da água da chuva pelo solo', 'diminui a quantidade de chuva que cai sobre a cidade', 'amplia a vegetação nas margens dos rios urbanos', 'facilita a drenagem natural dos terrenos da cidade'],
          c: 0, dif: 'dificil',
          exp: 'Asfalto e concreto impedem a infiltração e sobrecarregam o sistema de drenagem.'
        },
        {
          q: 'A falta de saneamento básico em periferias urbanas está associada a',
          alt: ['maior incidência de doenças de veiculação hídrica', 'queda de doenças infecciosas', 'melhoria imediata da qualidade da água', 'ausência de problemas de saúde pública', 'diminuição da mortalidade infantil'],
          c: 0, dif: 'dificil',
          exp: 'Sem água tratada e esgoto, crescem doenças como diarreias e leptospirose.'
        }
      ],
      pares: [
        { a: 'Conurbação', b: 'Cidades vizinhas coladas' },
        { a: 'Gentrificação', b: 'Valorização que expulsa moradores' },
        { a: 'Segregação socioespacial', b: 'Separação por renda no espaço' },
        { a: 'Estatuto da Cidade', b: 'Função social da propriedade' },
        { a: 'Plano diretor', b: 'Planejamento urbano municipal' },
        { a: 'Déficit habitacional', b: 'Falta de moradia adequada' },
        { a: 'Impermeabilização', b: 'Aumenta enchentes' },
        { a: 'Êxodo rural', b: 'Campo → cidade' }
      ]
    },

    /* ============ 5. GLOBALIZAÇÃO E GEOPOLÍTICA ============ */
    {
      id: 'globalizacao-geopolitica',
      nome: 'Globalização, geopolítica e ordem mundial',
      incidencia: 'alta',
      resumo: 'Redes, fluxos, multinacionais, blocos econômicos, divisão internacional do trabalho, conflitos atuais e a multipolaridade.',
      conceitos: [
        {
          titulo: 'Globalização e redes',
          texto: 'A **globalização** é a intensificação de fluxos de capital, mercadorias, informação e pessoas pelo mundo, impulsionada por **tecnologias de transporte e comunicação**.\n\n- **Empresas multinacionais** e **cadeias globais de valor**: produção fragmentada em vários países.\n- **Divisão internacional do trabalho**: países centrais (tecnologia, serviços) e periféricos (commodities, mão de obra barata), que se reconfigura.\n- **Desigualdades**: a globalização é **seletiva**; há exclusão digital.\n- **Cultura**: homogeneização x resistência e hibridização cultural.'
        },
        {
          titulo: 'Blocos econômicos e organizações',
          texto: '- **Blocos**: **União Europeia** (mercado comum e moeda), **Mercosul** (união aduaneira, com Argentina, Brasil, Paraguai, Uruguai), **USMCA/T-MEC**, **BRICS**, ASEAN.\n- **Organizações**: **ONU**, **OMC** (comércio), **FMI** e **Banco Mundial** (finanças), **OTAN** (defesa).\n- **Protecionismo x livre-comércio**: tarifas, subsídios e guerras comerciais (EUA x China).'
        },
        {
          titulo: 'Geopolítica atual',
          texto: 'A ordem mundial pós-Guerra Fria evoluiu de **unipolar (EUA)** para **multipolar**, com ascensão da **China**.\n\n- **Conflitos**: Rússia–Ucrânia, Oriente Médio (Israel e Palestina), disputas no Mar do Sul da China.\n- **Recursos estratégicos**: petróleo, gás, água, minerais críticos e tecnologia (semicondutores).\n- **Terrorismo**, **refugiados**, **crises migratórias** e **segurança alimentar**.\n- **Soft power** (influência cultural) e **ciberguerra**.'
        }
      ],
      pegadinhas: [
        'Dizer que a globalização atinge todos **igualmente**: ela é desigual e seletiva.',
        'Confundir **Mercosul** (união aduaneira) com **União Europeia** (mercado comum e moeda única em parte dos países).',
        'Considerar que a **China** é apenas "fábrica": também investe em tecnologia, infraestrutura global e finanças.',
        'Atribuir aos conflitos atuais uma única causa: costumam ter fatores **históricos, econômicos e territoriais**.'
      ],
      dicas: [
        'Em mapas de fluxos, identifique **origem, destino e tipo de fluxo** (capital, mercadoria, pessoas).',
        'Relacione blocos econômicos a **graus de integração** (livre-comércio → união aduaneira → mercado comum → união econômica).',
        'Use o **Mundo multipolar** para contextualizar disputas entre EUA, China, Rússia e UE.'
      ],
      exemplo: {
        enunciado: 'Uma empresa projeta um celular nos EUA, fabrica peças na Ásia e monta em outro país. Que característica da globalização isso ilustra?',
        resolucao: 'As **cadeias globais de valor** e a **fragmentação da produção**, possíveis graças a transportes e comunicações modernas. A empresa busca custos menores e mercados, o que também aprofunda a divisão internacional do trabalho.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.santos],
      flashcards: [
        { f: 'O que é globalização?', v: 'Intensificação de fluxos de capitais, mercadorias, informações e pessoas em escala mundial.' },
        { f: 'O que são empresas multinacionais?', v: 'Empresas que atuam em vários países, com sede em um deles.' },
        { f: 'Níveis de integração dos blocos (do menor ao maior)', v: 'Livre-comércio → união aduaneira → mercado comum → união econômica e monetária.' },
        { f: 'O que é o Mercosul?', v: 'Bloco sul-americano com união aduaneira (Brasil, Argentina, Paraguai e Uruguai).' },
        { f: 'O que faz a OMC?', v: 'Regula o comércio internacional e resolve disputas comerciais.' },
        { f: 'O que é protecionismo?', v: 'Uso de tarifas e subsídios para proteger a produção nacional.' },
        { f: 'O que é soft power?', v: 'Influência exercida por cultura, valores e diplomacia, sem força militar.' },
        { f: 'O que são BRICS?', v: 'Grupo de economias emergentes que reúne Brasil, Rússia, Índia, China e África do Sul, entre outros.' }
      ],
      quiz: [
        {
          q: 'A globalização é considerada seletiva porque',
          alt: ['seus benefícios não alcançam todos os países e grupos de forma igual', 'atinge igualmente todos os povos e países do mundo', 'elimina a desigualdade entre países ricos e pobres', 'impede o comércio internacional entre as nações', 'dispensa o uso de tecnologias de comunicação'],
          c: 0, dif: 'facil',
          exp: 'Regiões e pessoas excluídas do acesso a tecnologia e capital ficam à margem do processo.'
        },
        {
          q: 'A fragmentação da produção em diferentes países por uma mesma empresa caracteriza',
          alt: ['as cadeias globais de valor', 'o isolamento econômico dos países', 'a produção artesanal local', 'o regime de economia fechada', 'a autarquia nacional'],
          c: 0, dif: 'medio',
          exp: 'Etapas da produção são distribuídas conforme custos, tecnologia e mercados.'
        },
        {
          q: 'O Mercosul pode ser classificado como',
          alt: ['uma união aduaneira, com tarifa externa comum entre os membros', 'uma união monetária com moeda única', 'um bloco militar de defesa', 'uma zona sem comércio entre os países', 'uma organização exclusivamente cultural'],
          c: 0, dif: 'medio',
          exp: 'O Mercosul adota uma Tarifa Externa Comum, mas não tem moeda única.'
        },
        {
          q: 'A Organização Mundial do Comércio (OMC) tem como função principal',
          alt: ['regular o comércio entre os países e mediar disputas comerciais', 'fiscalizar eleições nacionais nos países-membros', 'financiar guerras entre blocos econômicos rivais', 'impor uma moeda única a todos os países', 'organizar exércitos multinacionais de defesa'],
          c: 0, dif: 'medio',
          exp: 'A OMC estabelece regras para o comércio global e resolve conflitos entre membros.'
        },
        {
          q: 'A ascensão da China nas últimas décadas contribuiu para a configuração de uma ordem mundial',
          alt: ['multipolar, com mais de um centro de poder econômico e político', 'bipolar entre EUA e URSS', 'unipolar sob domínio exclusivo da Europa', 'sem qualquer influência econômica asiática', 'baseada somente em colônias'],
          c: 0, dif: 'medio',
          exp: 'Hoje há disputas e cooperação entre EUA, China, UE, Rússia e outras potências.'
        },
        {
          q: 'Quando países impõem tarifas para proteger a indústria nacional, adotam uma política',
          alt: ['protecionista', 'de livre-comércio irrestrito', 'de integração monetária', 'de isolamento militar', 'de união política'],
          c: 0, dif: 'facil',
          exp: 'Tarifas e subsídios reduzem a concorrência externa sobre produtores locais.'
        },
        {
          q: 'A exclusão digital é um exemplo de como a globalização',
          alt: ['reproduz desigualdades entre regiões e grupos sociais', 'garante acesso à internet para todos', 'elimina a necessidade de infraestrutura', 'reduz a importância da informação', 'dispensa investimentos em educação'],
          c: 0, dif: 'dificil',
          exp: 'Quem não tem conexão ou formação digital fica em desvantagem econômica e social.'
        },
        {
          q: 'Minerais críticos e semicondutores tornaram-se centrais na geopolítica porque',
          alt: ['são insumos estratégicos para tecnologia, energia limpa e defesa', 'perderam valor para a indústria', 'não têm uso na produção de eletrônicos', 'são abundantes e baratos em todos os países', 'são utilizados apenas na agricultura'],
          c: 0, dif: 'dificil',
          exp: 'O controle sobre esses recursos influencia a competição entre potências.'
        }
      ],
      pares: [
        { a: 'Multinacional', b: 'Empresa atuante em vários países' },
        { a: 'Mercosul', b: 'União aduaneira sul-americana' },
        { a: 'União Europeia', b: 'Mercado comum e moeda (euro)' },
        { a: 'OMC', b: 'Regula o comércio mundial' },
        { a: 'OTAN', b: 'Aliança militar ocidental' },
        { a: 'Protecionismo', b: 'Proteção à produção nacional' },
        { a: 'Soft power', b: 'Influência cultural' },
        { a: 'Mundo multipolar', b: 'Vários centros de poder' }
      ]
    },

    /* ============ 6. INDUSTRIA E ENERGIA ============ */
    {
      id: 'industria-energia',
      nome: 'Industrialização, trabalho e matriz energética',
      incidencia: 'media',
      resumo: 'Revoluções industriais, industrialização brasileira, desindustrialização, tipos de energia e a matriz energética do Brasil.',
      conceitos: [
        {
          titulo: 'Revoluções industriais e organização do trabalho',
          texto: '- **1ª Revolução** (séc. XVIII): vapor, carvão, têxteis.\n- **2ª Revolução** (séc. XIX): eletricidade, petróleo, aço, linha de montagem (**fordismo**).\n- **3ª Revolução** (séc. XX): eletrônica, informática, **toyotismo** (produção flexível, "just in time").\n- **4ª Revolução** (atual): inteligência artificial, automação, internet das coisas.\n\n**Efeitos no trabalho**: automação, **precarização**, terceirização, trabalho remoto e por aplicativos.'
        },
        {
          titulo: 'Industrialização brasileira',
          texto: 'A indústria cresceu com a **substituição de importações** (anos 1930–50), a ação do **Estado** (CSN, Petrobras) e a entrada de **multinacionais** (anos 1950, JK). Concentrou-se no **Sudeste** (SP).\n\n- **Desconcentração industrial** para o interior e outras regiões (guerra fiscal).\n- **Desindustrialização**: perda do peso da indústria no PIB, aumento do setor de serviços e das exportações de commodities.'
        },
        {
          titulo: 'Energia e matriz energética',
          texto: '- **Não renováveis**: petróleo, gás natural, carvão mineral, nuclear (urânio).\n- **Renováveis**: hidráulica, solar, eólica, biomassa (etanol), geotérmica.\n- **Brasil**: matriz elétrica com forte participação **hidrelétrica**, crescimento de **eólica e solar**; matriz energética com petróleo e **etanol**. **Pré-sal**: grandes reservas offshore.\n- **Transição energética**: reduzir combustíveis fósseis para mitigar o aquecimento global.'
        }
      ],
      pegadinhas: [
        'Confundir **fordismo** (linha de montagem, produção em massa) com **toyotismo** (produção flexível, sob demanda).',
        'Achar que **desindustrialização** significa fim de toda indústria: é a perda de **participação relativa**.',
        'Dizer que o etanol é energia "limpa" sem impactos: tem impactos de uso da terra.',
        'Confundir **matriz energética** (todas as fontes de energia) com **matriz elétrica** (só eletricidade).'
      ],
      dicas: [
        'Compare sempre **fordismo × toyotismo** quando o tema for organização da produção.',
        'Para energia, classifique a fonte em **renovável × não renovável** e liste um impacto.',
        'Em questões sobre trabalho, relacione tecnologia a **precarização e novas profissões**.'
      ],
      exemplo: {
        enunciado: 'Qual a diferença entre matriz energética e matriz elétrica?',
        resolucao: 'A **matriz energética** reúne todas as fontes usadas (combustíveis, eletricidade, etc.). A **matriz elétrica** é só o conjunto de fontes que geram **eletricidade**. No Brasil, a matriz elétrica é bem mais renovável que a energética.'
      },
      fontes: [F.inep, F.estrategia, F.critica, F.ibge],
      flashcards: [
        { f: 'O que caracteriza o fordismo?', v: 'Linha de montagem, produção em massa e padronização.' },
        { f: 'O que caracteriza o toyotismo?', v: 'Produção flexível, sob demanda (just in time), trabalhadores polivalentes.' },
        { f: 'O que é substituição de importações?', v: 'Estratégia de produzir internamente o que antes se importava.' },
        { f: 'O que é desindustrialização?', v: 'Perda de participação da indústria na economia.' },
        { f: 'Fontes renováveis de energia', v: 'Hidráulica, solar, eólica, biomassa, geotérmica.' },
        { f: 'O que é o pré-sal?', v: 'Reservas de petróleo em camada profunda sob o fundo do mar.' },
        { f: 'Matriz energética x matriz elétrica', v: 'A primeira inclui todas as fontes de energia; a segunda, apenas as que geram eletricidade.' },
        { f: 'O que é a 4ª Revolução Industrial?', v: 'Integração de automação, inteligência artificial, internet das coisas e dados.' }
      ],
      quiz: [
        {
          q: 'O toyotismo diferencia-se do fordismo por adotar',
          alt: ['produção flexível, sob demanda, com trabalhadores polivalentes', 'linha de montagem rígida e produção em massa', 'trabalho exclusivamente artesanal', 'estoques gigantes de peças', 'especialização extrema de cada operário'],
          c: 0, dif: 'medio',
          exp: 'O toyotismo busca eficiência com estoques mínimos (just in time) e flexibilidade.'
        },
        {
          q: 'A industrialização brasileira por substituição de importações caracterizou-se por',
          alt: ['produzir internamente bens antes importados, com apoio do Estado', 'importar todos os produtos manufaturados', 'abandonar a indústria de base', 'proibir investimentos estrangeiros', 'concentrar a economia no extrativismo'],
          c: 0, dif: 'medio',
          exp: 'A crise de 1929 e a ação do Estado impulsionaram a produção nacional.'
        },
        {
          q: 'A desindustrialização de um país é identificada quando',
          alt: ['a indústria perde participação no PIB e no emprego', 'a indústria passa a ser a única atividade', 'o setor de serviços desaparece', 'a agricultura é abolida', 'o número de fábricas dobra'],
          c: 0, dif: 'medio',
          exp: 'Ocorre redução do peso relativo da indústria, geralmente com aumento de serviços ou commodities.'
        },
        {
          q: 'Entre as fontes renováveis de energia está',
          alt: ['a energia eólica', 'o carvão mineral', 'o petróleo', 'o gás natural', 'o urânio enriquecido'],
          c: 0, dif: 'facil',
          exp: 'A energia dos ventos se renova naturalmente, ao contrário dos combustíveis fósseis.'
        },
        {
          q: 'O etanol de cana-de-açúcar é considerado alternativa aos combustíveis fósseis porque',
          alt: ['é renovável e emite menos gases de efeito estufa no ciclo de produção', 'não provoca nenhum impacto ambiental ou social', 'dispensa o uso de terras agrícolas para o cultivo', 'é extraído das reservas de petróleo do pré-sal', 'é um derivado direto do carvão mineral'],
          c: 0, dif: 'dificil',
          exp: 'O etanol é renovável, mas seu cultivo exige terra e pode gerar impactos.'
        },
        {
          q: 'A automação e a inteligência artificial no mundo do trabalho provocam',
          alt: ['extinção de funções e surgimento de novas ocupações, exigindo requalificação', 'aumento do trabalho manual repetitivo em todos os setores', 'fim de qualquer necessidade de formação profissional', 'redução da importância da tecnologia na produção', 'garantia de emprego igual para todos os trabalhadores'],
          c: 0, dif: 'medio',
          exp: 'Tecnologias eliminam tarefas e criam outras, com impacto desigual sobre trabalhadores.'
        },
        {
          q: 'A concentração industrial no Sudeste brasileiro explica-se, em parte, por',
          alt: ['mercado consumidor, infraestrutura, capital do café e mão de obra', 'ausência de portos, ferrovias e rodovias na região', 'falta de energia elétrica e de mercado consumidor', 'proibição legal de fábricas em outras regiões', 'clima impróprio para o desenvolvimento de cidades'],
          c: 0, dif: 'dificil',
          exp: 'O capital cafeeiro, a imigração e a infraestrutura favoreceram São Paulo.'
        },
        {
          q: 'A transição energética consiste em',
          alt: ['reduzir o uso de combustíveis fósseis e ampliar fontes de baixo carbono', 'ampliar a queima de carvão mineral nas usinas', 'aumentar a dependência do petróleo importado', 'abandonar o uso da energia elétrica nas cidades', 'proibir o uso de qualquer fonte renovável'],
          c: 0, dif: 'dificil',
          exp: 'É a mudança gradual para fontes limpas, para mitigar o aquecimento global.'
        }
      ],
      pares: [
        { a: 'Fordismo', b: 'Linha de montagem' },
        { a: 'Toyotismo', b: 'Produção flexível' },
        { a: 'Desindustrialização', b: 'Perda de peso da indústria' },
        { a: 'Pré-sal', b: 'Petróleo em águas profundas' },
        { a: 'Energia eólica', b: 'Fonte renovável' },
        { a: 'Carvão mineral', b: 'Fonte não renovável' },
        { a: 'Matriz energética', b: 'Todas as fontes de energia' },
        { a: 'Etanol', b: 'Biocombustível da cana' }
      ]
    },

    /* ============ 7. CARTOGRAFIA ============ */
    {
      id: 'cartografia',
      nome: 'Cartografia, escalas e leitura de mapas',
      incidencia: 'media',
      resumo: 'Orientação, coordenadas, fusos horários, escala e projeções. Questões costumam exigir cálculo simples e interpretação de mapas e imagens.',
      conceitos: [
        {
          titulo: 'Orientação, coordenadas e fusos',
          texto: '- **Pontos cardeais** e **rosa dos ventos**.\n- **Latitude** (distância ao Equador; 0° a 90° N/S) e **longitude** (distância ao Meridiano de Greenwich; 0° a 180° L/O).\n- **Fusos horários**: a Terra gira 360° em 24 h, então cada **15° de longitude = 1 hora**. Para o leste, o horário é **adiantado**; para o oeste, **atrasado**. O Brasil tem 4 fusos (em relação a Greenwich, de −2 a −5 h).\n- **Linhas imaginárias**: Equador, trópicos de Câncer e Capricórnio, círculos polares.'
        },
        {
          titulo: 'Escala e projeções',
          texto: '**Escala** relaciona a distância no mapa à distância real. Ex.: **1:100.000** significa que 1 cm no mapa = 100.000 cm (1 km) no terreno. Escala **grande** mostra pouca área com muito detalhe; escala **pequena** mostra grandes áreas com menos detalhe.\n\n**Projeções cartográficas** distorcem algo para representar a esfera em um plano. A **projeção de Mercator** deforma as áreas em altas latitudes; a de **Peters** preserva áreas; a **azimutal** é usada para polos.'
        },
        {
          titulo: 'Tipos de mapas e geotecnologias',
          texto: '- **Mapas temáticos** (população, clima, vegetação), **topográficos**, **coropléticos** (cores por intensidade) e **anamorfoses**.\n- **Sensoriamento remoto** (satélites), **GPS** e **SIG** (sistemas de informação geográfica) ajudam a monitorar desmatamento, cidades e clima.\n- **Curvas de nível** representam o relevo: quanto mais próximas, mais **íngreme**.'
        }
      ],
      pegadinhas: [
        'Confundir **escala grande** (muito detalhe, pouca área) com **escala pequena** (pouco detalhe, muita área).',
        'Errar o sentido do fuso: o **leste** tem horas **adiantadas**.',
        'Achar que Mercator mostra tamanhos reais: **distorce áreas** perto dos polos.',
        'Confundir **latitude** (paralelos) com **longitude** (meridianos).'
      ],
      dicas: [
        'Para fusos: **diferença de longitude ÷ 15 = diferença de horas**. Depois, aplique o sentido (leste +, oeste −).',
        'Em escala, converta tudo para a mesma unidade antes de calcular.',
        'Curvas de nível **próximas** = declive **forte**; **afastadas** = terreno **suave**.'
      ],
      exemplo: {
        enunciado: 'Em um mapa de escala 1:200.000, dois pontos estão a 5 cm. Qual a distância real?',
        resolucao: '5 cm × 200.000 = **1.000.000 cm = 10 km**. Basta multiplicar a distância medida pelo denominador e converter para quilômetros (100.000 cm = 1 km).'
      },
      fontes: [F.inep, F.estrategia, F.ibge, F.moreira],
      flashcards: [
        { f: 'O que é latitude?', v: 'Distância angular ao Equador (0° a 90° norte ou sul).' },
        { f: 'O que é longitude?', v: 'Distância angular ao meridiano de Greenwich (0° a 180° leste ou oeste).' },
        { f: 'Quantos graus de longitude equivalem a 1 hora?', v: '15 graus.' },
        { f: 'No sentido leste, o horário é...', v: 'Adiantado (mais tarde).' },
        { f: 'O que significa a escala 1:50.000?', v: '1 cm no mapa equivale a 50.000 cm (500 m) no terreno.' },
        { f: 'Escala grande ou pequena: qual mostra mais detalhes?', v: 'A escala grande (menor área, maior detalhe).' },
        { f: 'O que indicam curvas de nível muito próximas?', v: 'Relevo íngreme.' },
        { f: 'O que é SIG?', v: 'Sistema de Informação Geográfica, que integra dados espaciais em mapas.' }
      ],
      quiz: [
        {
          q: 'Se em um ponto da Terra são 12 h, em outro ponto 45° a leste o horário será',
          alt: ['15 h', '9 h', '12 h', '10 h', '18 h'],
          c: 0, dif: 'medio',
          exp: '45° ÷ 15° = 3 horas. A leste, o horário é adiantado: 12 h + 3 h = 15 h.'
        },
        {
          q: 'Em um mapa com escala 1:500.000, uma distância de 4 cm corresponde, no terreno, a',
          alt: ['20 km', '2 km', '200 km', '0,2 km', '50 km'],
          c: 0, dif: 'medio',
          exp: '4 × 500.000 = 2.000.000 cm = 20 km.'
        },
        {
          q: 'Em relação à escala, é correto afirmar que uma escala grande',
          alt: ['representa áreas menores com maior detalhamento', 'representa grandes áreas com poucos detalhes', 'não tem relação com o nível de detalhe', 'só é usada em mapas-múndi', 'impede a representação de ruas'],
          c: 0, dif: 'facil',
          exp: 'Escalas grandes (1:1.000, por exemplo) mostram pouca área com muito detalhe.'
        },
        {
          q: 'Em um mapa topográfico, curvas de nível muito próximas indicam',
          alt: ['terreno com declive acentuado', 'terreno plano', 'área alagada', 'presença de oceano', 'ausência de relevo'],
          c: 0, dif: 'facil',
          exp: 'A proximidade das curvas significa grande variação de altitude em curta distância.'
        },
        {
          q: 'A projeção de Mercator é criticada porque',
          alt: ['distorce o tamanho das áreas em altas latitudes, ampliando-as', 'reduz o tamanho dos continentes tropicais a pontos', 'não representa meridianos nem paralelos', 'só mostra o Hemisfério Sul', 'representa o relevo em escala real'],
          c: 0, dif: 'dificil',
          exp: 'Regiões próximas aos polos aparecem muito maiores do que são, o que causa interpretações enganosas.'
        },
        {
          q: 'O sensoriamento remoto por satélite é útil para',
          alt: ['monitorar desmatamento, queimadas e crescimento urbano', 'medir exclusivamente a população por pesquisa de campo', 'substituir toda a cartografia por desenhos', 'eliminar a necessidade de dados', 'identificar apenas fronteiras políticas'],
          c: 0, dif: 'medio',
          exp: 'Imagens de satélite permitem acompanhar mudanças da superfície ao longo do tempo.'
        },
        {
          q: 'A longitude é medida em relação ao',
          alt: ['Meridiano de Greenwich', 'Equador', 'Trópico de Câncer', 'Círculo Polar Ártico', 'Trópico de Capricórnio'],
          c: 0, dif: 'facil',
          exp: 'A longitude parte do meridiano de Greenwich (0°); a latitude parte do Equador.'
        },
        {
          q: 'Um mapa que usa cores para mostrar a densidade demográfica por estado é um mapa',
          alt: ['coroplético (temático)', 'topográfico de relevo', 'de projeção azimutal polar', 'de navegação marítima', 'de rosa dos ventos'],
          c: 0, dif: 'dificil',
          exp: 'Mapas coropléticos usam gradações de cor para representar a intensidade de um fenômeno por área.'
        }
      ],
      pares: [
        { a: 'Latitude', b: 'Distância ao Equador' },
        { a: 'Longitude', b: 'Distância a Greenwich' },
        { a: '15° de longitude', b: '1 hora de diferença' },
        { a: 'Escala grande', b: 'Mais detalhe, menos área' },
        { a: 'Escala pequena', b: 'Menos detalhe, mais área' },
        { a: 'Curvas de nível', b: 'Representam o relevo' },
        { a: 'Mercator', b: 'Distorce áreas nos polos' },
        { a: 'SIG', b: 'Dados espaciais em mapas' }
      ]
    },

    /* ============ 8. RELEVO, HIDROGRAFIA, CLIMA ============ */
    {
      id: 'natureza-brasil',
      nome: 'Relevo, hidrografia e clima do Brasil',
      incidencia: 'media',
      resumo: 'Formas do relevo brasileiro, bacias hidrográficas, massas de ar e tipos climáticos; relação entre natureza e ocupação do território.',
      conceitos: [
        {
          titulo: 'Relevo brasileiro',
          texto: 'O relevo do Brasil é formado, em grande parte, por **planaltos** e **planícies**, com **altitudes modestas** (poucas áreas acima de 1.200 m). Estruturas antigas e erodidas.\n\n- **Planaltos**: Brasileiro (Atlântico, Central), das Guianas, Meridional.\n- **Planícies**: Amazônica, do Pantanal, Costeira.\n- **Depressões**: Sertaneja do São Francisco.\n- **Ponto culminante**: Pico da Neblina (AM).\n- **Agentes** que modelam o relevo: erosão, intemperismo, tectonismo e ação humana (voçorocas, assoreamento).'
        },
        {
          titulo: 'Hidrografia',
          texto: 'Brasil tem uma das maiores redes hidrográficas do mundo. **Bacias**: Amazônica (maior), Tocantins-Araguaia, São Francisco ("rio da integração nacional"), Paraná, Paraguai, Atlântico (Leste, Sudeste, Sul).\n\n- Rios de **planalto**: potencial hidrelétrico. Rios de **planície**: navegáveis.\n- **Aquífero Guarani**: grande reserva subterrânea (Brasil, Argentina, Paraguai, Uruguai).\n- Problemas: poluição, assoreamento, uso desigual, secas e crises hídricas.'
        },
        {
          titulo: 'Clima e fenômenos',
          texto: '- **Equatorial** (Amazônia: quente e úmido), **tropical** (verão chuvoso e inverno seco), **tropical de altitude**, **semiárido** (pouca chuva e irregular), **subtropical** (temperaturas amenas, geadas).\n- **Massas de ar**: Equatorial, Tropical, Polar; **frentes frias**.\n- **El Niño** (aquecimento do Pacífico: secas no Norte/Nordeste e chuvas no Sul) e **La Niña** (efeito inverso).\n- **Rios voadores**: umidade da Amazônia que abastece chuvas no Centro-Sul.'
        }
      ],
      pegadinhas: [
        'Achar que o Brasil tem relevo muito elevado: predominam **altitudes modestas**.',
        'Dizer que o Pico da Neblina é o ponto mais alto do Brasil e esquecer que está no **Amazonas**.',
        'Confundir **El Niño** com **La Niña**, ou atribuir a ambos os mesmos efeitos.',
        'Atribuir a seca nordestina apenas à "falta de água": há questões de **clima, política e acesso à água**.'
      ],
      dicas: [
        'Associe cada bacia a um **símbolo**: Amazônica (maior), São Francisco (integração), Paraná (hidrelétricas).',
        'Use **climograma**: barras = chuva; linha = temperatura.',
        'Relacione clima, vegetação e solo para explicar **ocupação humana**.'
      ],
      exemplo: {
        enunciado: 'Por que o Rio São Francisco é chamado de "rio da integração nacional"?',
        resolucao: 'Porque atravessa várias regiões (Sudeste e Nordeste), ligando áreas com economias e culturas distintas. Foi **via de povoamento e transporte** e fornece água e energia no semiárido.'
      },
      fontes: [F.inep, F.estrategia, F.ibge, F.moreira],
      flashcards: [
        { f: 'Ponto culminante do Brasil', v: 'Pico da Neblina (AM).' },
        { f: 'Maior bacia hidrográfica do Brasil', v: 'Bacia Amazônica.' },
        { f: 'O que é o Aquífero Guarani?', v: 'Grande reserva de água subterrânea que abrange Brasil, Argentina, Paraguai e Uruguai.' },
        { f: 'Clima predominante na Amazônia', v: 'Equatorial (quente e úmido).' },
        { f: 'Clima do sertão nordestino', v: 'Semiárido (pouca chuva e irregular).' },
        { f: 'Efeito do El Niño no Brasil', v: 'Seca no Norte/Nordeste e chuvas intensas no Sul.' },
        { f: 'O que são rios voadores?', v: 'Correntes de vapor de água da Amazônia que levam umidade ao Centro-Sul.' },
        { f: 'O que é assoreamento?', v: 'Acúmulo de sedimentos que rebaixa a profundidade de rios e lagos.' }
      ],
      quiz: [
        {
          q: 'O relevo do Brasil é caracterizado principalmente por',
          alt: ['planaltos e planícies, com altitudes modestas', 'grandes cadeias montanhosas recentes e muito elevadas', 'vulcões ativos em toda a costa', 'geleiras permanentes nas serras', 'extensas áreas acima de 4.000 metros'],
          c: 0, dif: 'facil',
          exp: 'O relevo é antigo e erodido, com poucas altitudes elevadas.'
        },
        {
          q: 'O assoreamento de rios é provocado principalmente por',
          alt: ['desmatamento e erosão que levam sedimentos ao leito', 'aumento da vegetação nas margens', 'excesso de matas ciliares preservadas', 'redução natural da chuva', 'aumento da profundidade por dragagem'],
          c: 0, dif: 'medio',
          exp: 'Sem vegetação, o solo é carregado para os rios e reduz sua profundidade.'
        },
        {
          q: 'O fenômeno El Niño costuma provocar no Brasil',
          alt: ['seca no Norte e Nordeste e chuvas acima do normal no Sul', 'chuvas intensas e constantes em todo o Nordeste', 'frio extremo e geadas em toda a Amazônia', 'ausência total de chuvas na Região Sul', 'neve frequente em todas as regiões do país'],
          c: 0, dif: 'medio',
          exp: 'O aquecimento do Pacífico altera a circulação atmosférica e a distribuição das chuvas.'
        },
        {
          q: 'O clima semiárido do sertão nordestino caracteriza-se por',
          alt: ['baixos índices de chuva, irregulares e mal distribuídos', 'chuvas abundantes o ano inteiro', 'temperaturas negativas no inverno', 'neve nas serras', 'umidade constante e florestas densas'],
          c: 0, dif: 'facil',
          exp: 'A escassez e irregularidade de chuvas definem o semiárido e a vegetação de caatinga.'
        },
        {
          q: 'Os chamados "rios voadores" são importantes porque',
          alt: ['levam umidade da Amazônia para o Centro-Sul, influenciando as chuvas', 'são rios que correm sobre as montanhas mais altas', 'secam completamente todo ano na região amazônica', 'impedem a formação de nuvens no litoral', 'transportam blocos de gelo para o Sul do país'],
          c: 0, dif: 'dificil',
          exp: 'O vapor emitido pela floresta contribui para chuvas distantes; o desmatamento ameaça esse ciclo.'
        },
        {
          q: 'O Rio São Francisco é conhecido como "rio da integração nacional" porque',
          alt: ['liga o Sudeste ao Nordeste, servindo ao povoamento e à economia regional', 'atravessa apenas a Região Sul do território', 'deságua no Oceano Pacífico, no litoral peruano', 'corre inteiramente dentro da floresta Amazônica', 'é considerado o maior rio do planeta'],
          c: 0, dif: 'medio',
          exp: 'Seu curso conecta regiões distintas e abastece áreas do semiárido.'
        },
        {
          q: 'Um climograma com chuvas concentradas no verão e inverno seco é típico do clima',
          alt: ['tropical', 'equatorial', 'semiárido', 'polar', 'desértico'],
          c: 0, dif: 'dificil',
          exp: 'O clima tropical apresenta duas estações bem marcadas: verão chuvoso e inverno seco.'
        },
        {
          q: 'O Aquífero Guarani merece atenção porque',
          alt: ['é uma grande reserva subterrânea de água compartilhada por quatro países', 'é um rio de curso extenso na bacia Amazônica', 'é uma geleira localizada na Cordilheira dos Andes', 'é um lago salgado situado no Pantanal', 'é uma represa de usina hidrelétrica no Paraná'],
          c: 0, dif: 'dificil',
          exp: 'Sua gestão exige cooperação entre Brasil, Argentina, Paraguai e Uruguai.'
        }
      ],
      pares: [
        { a: 'Pico da Neblina', b: 'Ponto culminante do Brasil' },
        { a: 'Bacia Amazônica', b: 'Maior bacia hidrográfica' },
        { a: 'Aquífero Guarani', b: 'Água subterrânea compartilhada' },
        { a: 'Semiárido', b: 'Chuva escassa e irregular' },
        { a: 'El Niño', b: 'Aquecimento do Pacífico' },
        { a: 'Rios voadores', b: 'Umidade da Amazônia' },
        { a: 'Assoreamento', b: 'Sedimentos nos rios' },
        { a: 'Rio São Francisco', b: 'Integração nacional' }
      ]
    }
  ]);
})();
