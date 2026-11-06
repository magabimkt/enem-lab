/* Química — Ciências da Natureza e suas Tecnologias.
   Incidência (Estratégia, 1998–2020): Química geral ~33%, Físico-química ~30%, Orgânica ~17%, Ambiental ~15%.
   O ENEM contextualiza: água, alimentos, combustíveis, poluição, materiais. Exige interpretar texto, tabela e gráfico, e fazer contas simples. */
(function () {
  var F = {
    inep: { titulo: 'INEP — Matrizes de Referência do Enem (Ciências da Natureza e suas Tecnologias)', url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem' },
    estrategia: { titulo: 'Estratégia Vestibulares — Assuntos que mais caem no Enem (análise de 1998 a 2020)', url: 'https://vestibulares.estrategia.com/portal/enem/assuntos-que-mais-caem-no-enem/' },
    querobolsa: { titulo: 'Quero Bolsa — Esquenta Enem: o que mais cai na prova de Ciências da Natureza', url: 'https://querobolsa.com.br/revista/esquenta-enem-o-que-mais-cai-na-prova-de-ciencias-da-natureza' },
    feltre: { titulo: 'FELTRE, R. Química (obra de referência)', url: '' },
    atkins: { titulo: 'ATKINS, P.; JONES, L. Princípios de Química (obra de referência)', url: '' }
  };

  ENEM.temas('quimica', [
    /* ============ 1. AMBIENTAL ============ */
    {
      id: 'quimica-ambiental',
      nome: 'Química ambiental: poluição, água e combustíveis',
      incidencia: 'alta',
      resumo: 'Efeito estufa, chuva ácida, camada de ozônio, tratamento de água e esgoto, lixo, combustíveis e química verde.',
      conceitos: [
        {
          titulo: 'Poluição atmosférica',
          texto: '- **Efeito estufa**: CO₂, CH₄, N₂O e vapor de água retêm radiação infravermelha; o excesso intensifica o aquecimento global (queima de combustíveis fósseis, desmatamento).\n- **Chuva ácida**: SO₂ e NOₓ + água → H₂SO₄ e HNO₃ (queima de carvão e petróleo, veículos); corrói monumentos, solos e águas.\n- **Camada de ozônio (O₃)**: absorve UV; destruída por **CFCs** (liberam cloro).\n- **Smog fotoquímico**, **monóxido de carbono (CO)** (tóxico: liga-se à hemoglobina), **material particulado**.\n- **Catalisadores veiculares**: convertem CO, NOₓ e hidrocarbonetos em CO₂, N₂ e H₂O.'
        },
        {
          titulo: 'Água, esgoto e resíduos',
          texto: '**Tratamento de água**: captação, **floculação** (sulfato de alumínio), decantação, filtração, **cloração**, correção de pH e fluoretação. **Esgoto**: matéria orgânica consome O₂ (**DBO**); **eutrofização** por nitratos e fosfatos. **Metais pesados** (Hg, Pb, Cd) são tóxicos e bioacumulativos. **Lixo**: aterros, **chorume**, compostagem, **reciclagem** (vidro, papel, plástico, alumínio), **incineração**.'
        },
        {
          titulo: 'Combustíveis e química verde',
          texto: '**Fósseis** (petróleo, carvão, gás natural) e **renováveis** (etanol, biodiesel, biogás). A queima completa gera CO₂ e H₂O; a incompleta, **CO e fuligem**. O **etanol** tem balanço de carbono menor porque a cana absorve CO₂. **Química verde**: reduzir resíduos, usar insumos renováveis e processos mais seguros; **economia circular**.'
        }
      ],
      pegadinhas: [
        'Confundir **ozônio na estratosfera** (protetor) com **ozônio na troposfera** (poluente).',
        'Atribuir a chuva ácida ao **CO₂**: ela decorre de óxidos de **enxofre e nitrogênio** (o CO₂ acidifica levemente a água, mas não é o foco).',
        'Dizer que combustível renovável "não emite CO₂": emite, mas o carbono foi **recentemente absorvido**.',
        'Esquecer que **cloração** desinfeta, mas **não remove** metais pesados.'
      ],
      dicas: [
        'Associe poluentes e problemas: **CFC–ozônio; SOₓ/NOₓ–chuva ácida; CO₂/CH₄–efeito estufa; N e P–eutrofização**.',
        'Em tratamento de água, siga a **ordem das etapas**.',
        'Em questões de combustíveis, compare **energia liberada, emissões e origem**.'
      ],
      exemplo: {
        enunciado: 'Por que o catalisador dos automóveis reduz a poluição?',
        resolucao: 'Porque promove reações que convertem gases tóxicos (**CO, NOₓ e hidrocarbonetos não queimados**) em substâncias menos nocivas (**CO₂, N₂ e H₂O**).'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.feltre],
      flashcards: [
        { f: 'Gases do efeito estufa', v: 'CO₂, CH₄, N₂O e vapor de água, entre outros.' },
        { f: 'Causa da chuva ácida', v: 'Óxidos de enxofre e de nitrogênio que reagem com a água.' },
        { f: 'Quem destrói a camada de ozônio?', v: 'Os CFCs, por liberarem cloro.' },
        { f: 'Por que o CO é perigoso?', v: 'Liga-se à hemoglobina e impede o transporte de oxigênio.' },
        { f: 'Função do sulfato de alumínio no tratamento de água', v: 'Provocar a floculação e a decantação das impurezas.' },
        { f: 'O que é DBO?', v: 'Demanda biológica de oxigênio, medida da matéria orgânica na água.' },
        { f: 'O que é chorume?', v: 'Líquido escuro e tóxico gerado pela decomposição do lixo.' },
        { f: 'O que é química verde?', v: 'Prevenir a poluição reduzindo resíduos e usando processos mais seguros.' }
      ],
      quiz: [
        {
          q: 'A chuva ácida é formada principalmente a partir da reação da água com',
          alt: ['óxidos de enxofre e de nitrogênio', 'gás nitrogênio e gás hélio', 'oxigênio e vapor de água', 'gás argônio e neônio', 'hidrogênio puro'],
          c: 0, dif: 'facil',
          exp: 'SO₂ e NOₓ originam ácidos sulfúrico e nítrico.'
        },
        {
          q: 'Os CFCs são prejudiciais à camada de ozônio porque',
          alt: ['liberam átomos de cloro que decompõem o O₃', 'absorvem toda a radiação ultravioleta', 'produzem ozônio em excesso', 'reagem com o nitrogênio do ar', 'aumentam o oxigênio da estratosfera'],
          c: 0, dif: 'medio',
          exp: 'O cloro catalisa a destruição das moléculas de ozônio.'
        },
        {
          q: 'No tratamento da água, a etapa de floculação visa',
          alt: ['agregar as partículas em suspensão para facilitar a decantação', 'adicionar flúor para proteger os dentes', 'eliminar sais dissolvidos por destilação', 'neutralizar totalmente o pH da água', 'aumentar a salinidade da água tratada'],
          c: 0, dif: 'medio',
          exp: 'O sulfato de alumínio forma flocos que arrastam as impurezas.'
        },
        {
          q: 'A queima incompleta de combustíveis em motores pode liberar',
          alt: ['monóxido de carbono, gás tóxico', 'apenas gás oxigênio', 'somente vapor de água', 'gás hélio e neônio', 'água destilada pura'],
          c: 0, dif: 'facil',
          exp: 'Sem oxigênio suficiente, forma-se CO em vez de CO₂.'
        },
        {
          q: 'O etanol é considerado um combustível de menor impacto no efeito estufa, pois',
          alt: ['o CO₂ emitido foi absorvido pela cana durante seu crescimento', 'não gera nenhum gás ao ser queimado', 'é extraído diretamente do petróleo bruto', 'não depende de nenhum processo agrícola', 'libera apenas oxigênio ao queimar'],
          c: 0, dif: 'medio',
          exp: 'O ciclo do carbono é parcialmente fechado, ao contrário dos fósseis.'
        },
        {
          q: 'O excesso de fosfatos e nitratos em rios provoca',
          alt: ['eutrofização e queda do oxigênio dissolvido', 'aumento da transparência da água', 'proliferação de peixes de águas limpas', 'aumento do oxigênio na água', 'redução da quantidade de algas'],
          c: 0, dif: 'medio',
          exp: 'Nutrientes estimulam algas; sua decomposição consome O₂.'
        },
        {
          q: 'A reciclagem do alumínio é vantajosa porque',
          alt: ['economiza muita energia em comparação à produção a partir do minério', 'consome mais energia que a extração do minério', 'gera sempre mais lixo que a produção nova', 'dispensa o uso de qualquer indústria no processo', 'transforma o alumínio em plástico reciclável'],
          c: 0, dif: 'dificil',
          exp: 'Refundir o metal gasta bem menos energia do que obtê-lo da bauxita.'
        },
        {
          q: 'Metais pesados como o mercúrio são perigosos em corpos d\'água porque',
          alt: ['são tóxicos e se acumulam ao longo da cadeia alimentar', 'são totalmente degradados pelas bactérias', 'ficam inofensivos ao se dissolverem na água', 'servem de nutrientes essenciais para os peixes', 'evaporam e deixam o ecossistema'],
          c: 0, dif: 'dificil',
          exp: 'Não são degradados e sofrem bioacumulação e biomagnificação.'
        }
      ],
      pares: [
        { a: 'CFC', b: 'Destrói o ozônio' },
        { a: 'SO₂ e NOₓ', b: 'Chuva ácida' },
        { a: 'CO₂ e CH₄', b: 'Efeito estufa' },
        { a: 'Floculação', b: 'Agrega impurezas' },
        { a: 'Cloração', b: 'Desinfecta a água' },
        { a: 'Chorume', b: 'Líquido do lixo' },
        { a: 'Catalisador veicular', b: 'Reduz gases tóxicos' },
        { a: 'Etanol', b: 'Combustível renovável' }
      ]
    },

    /* ============ 2. ATOMÍSTICA, TABELA, LIGAÇÕES ============ */
    {
      id: 'atomo-tabela-ligacoes',
      nome: 'Átomo, tabela periódica e ligações químicas',
      incidencia: 'alta',
      resumo: 'Modelos atômicos, distribuição eletrônica, propriedades periódicas, ligações iônica, covalente e metálica, polaridade e forças intermoleculares.',
      conceitos: [
        {
          titulo: 'Átomo e tabela periódica',
          texto: '- **Átomo**: prótons (+), nêutrons (0) e elétrons (−). **Número atômico (Z)** = prótons; **massa (A)** = prótons + nêutrons. **Isótopos**: mesmo Z, A diferente. **Íons**: ganho/perda de elétrons.\n- **Modelos**: Dalton (esfera), Thomson (pudim de passas), Rutherford (núcleo), Bohr (níveis de energia).\n- **Tabela periódica** organizada por **número atômico**: períodos (linhas) e famílias (colunas). Elementos da mesma família têm propriedades semelhantes (alcalinos, alcalino-terrosos, halogênios, gases nobres).\n- **Propriedades periódicas**: raio atômico, **eletronegatividade**, energia de ionização.'
        },
        {
          titulo: 'Ligações químicas',
          texto: '- **Iônica**: metal + ametal (transferência de elétrons); sólidos de alto ponto de fusão, conduzem eletricidade quando **fundidos ou dissolvidos** (NaCl).\n- **Covalente**: ametal + ametal (compartilhamento de elétrons); moléculas (H₂O, CO₂).\n- **Metálica**: mar de elétrons; conduz eletricidade e calor, maleável e dúctil.\n- **Polaridade**: depende da eletronegatividade e da **geometria**. A água é polar; o CO₂ é apolar (linear).'
        },
        {
          titulo: 'Forças intermoleculares e propriedades',
          texto: 'Do mais fraco ao mais forte: **dipolo induzido** (apolares), **dipolo permanente** (polares) e **ligações de hidrogênio** (H ligado a F, O ou N). Quanto mais fortes, **maiores os pontos de fusão/ebulição** e a solubilidade em solventes polares. "**Semelhante dissolve semelhante**": polar dissolve polar (água e sal); apolar dissolve apolar (gordura e gasolina). Água: alto ponto de ebulição por ligações de hidrogênio.'
        }
      ],
      pegadinhas: [
        'Confundir **número atômico** (prótons) com **número de massa** (prótons + nêutrons).',
        'Achar que **ligações de hidrogênio** são ligações covalentes: são **forças intermoleculares**.',
        'Dizer que todo composto com ligação polar é polar: depende da **geometria** (CO₂ é apolar).',
        'Esquecer que compostos iônicos sólidos **não conduzem** eletricidade (só fundidos ou em solução).'
      ],
      dicas: [
        'Compare pontos de ebulição pelas **forças intermoleculares** e pelo tamanho da molécula.',
        'Para solubilidade, aplique "**semelhante dissolve semelhante**".',
        'Na tabela, **eletronegatividade e energia de ionização crescem** para a direita e para cima.'
      ],
      exemplo: {
        enunciado: 'Por que óleo e água não se misturam?',
        resolucao: 'A água é **polar** (com ligações de hidrogênio) e o óleo é **apolar**. Como semelhante dissolve semelhante, as moléculas não interagem o suficiente para formar mistura homogênea.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.feltre, F.atkins],
      flashcards: [
        { f: 'O que define o número atômico?', v: 'O número de prótons do átomo.' },
        { f: 'O que são isótopos?', v: 'Átomos do mesmo elemento com números de massa diferentes.' },
        { f: 'Ligação iônica', v: 'Transferência de elétrons, em geral entre metal e ametal.' },
        { f: 'Ligação covalente', v: 'Compartilhamento de pares de elétrons entre ametais.' },
        { f: 'Quando ocorre ligação de hidrogênio?', v: 'Quando H está ligado a F, O ou N.' },
        { f: 'O que é eletronegatividade?', v: 'Tendência de um átomo de atrair elétrons em uma ligação.' },
        { f: 'Por que a água tem alto ponto de ebulição?', v: 'Pelas fortes ligações de hidrogênio entre suas moléculas.' },
        { f: 'Regra de solubilidade', v: 'Semelhante dissolve semelhante.' }
      ],
      quiz: [
        {
          q: 'Átomos de mesmo número atômico e diferentes números de massa são chamados de',
          alt: ['isótopos', 'isóbaros', 'isótonos', 'alótropos', 'isômeros'],
          c: 0, dif: 'facil',
          exp: 'Isótopos pertencem ao mesmo elemento, com número diferente de nêutrons.'
        },
        {
          q: 'O cloreto de sódio (NaCl) conduz corrente elétrica quando',
          alt: ['dissolvido em água ou fundido', 'sólido e seco', 'em forma de cristal puro', 'misturado ao óleo', 'resfriado a baixas temperaturas'],
          c: 0, dif: 'medio',
          exp: 'Os íons ficam livres para se mover apenas em solução ou fundido.'
        },
        {
          q: 'A água tem ponto de ebulição mais alto que o do sulfeto de hidrogênio (H₂S) devido às',
          alt: ['ligações de hidrogênio entre suas moléculas', 'ligações iônicas entre os átomos', 'ligações metálicas', 'forças de dipolo induzido apenas', 'forças gravitacionais'],
          c: 0, dif: 'medio',
          exp: 'As ligações de hidrogênio exigem mais energia para serem rompidas.'
        },
        {
          q: 'A gasolina (apolar) é pouco solúvel na água (polar) porque',
          alt: ['polares dissolvem polares e apolares dissolvem apolares', 'a gasolina é mais densa que a água', 'a água reage quimicamente com a gasolina', 'a água é um sólido nessas condições', 'a gasolina possui ligações iônicas'],
          c: 0, dif: 'facil',
          exp: 'Falta afinidade entre as moléculas de natureza diferente.'
        },
        {
          q: 'Nos metais, a condutividade elétrica é explicada',
          alt: ['pela liberdade de movimento dos elétrons de valência', 'pela presença de íons fixos', 'pela existência de ligações de hidrogênio', 'pela ausência total de elétrons', 'pelo compartilhamento de pares eletrônicos fixos'],
          c: 0, dif: 'medio',
          exp: 'O "mar de elétrons" permite a condução.'
        },
        {
          q: 'Na tabela periódica, os halogênios (F, Cl, Br, I) possuem',
          alt: ['7 elétrons na camada de valência e tendência a formar ânions', '1 elétron na camada de valência', '2 elétrons na camada de valência', 'camada de valência completa com 8 elétrons', 'apenas elétrons no nível mais interno'],
          c: 0, dif: 'medio',
          exp: 'Os halogênios tendem a ganhar um elétron.'
        },
        {
          q: 'O CO₂ é uma molécula apolar mesmo com ligações polares porque',
          alt: ['sua geometria linear faz os dipolos se anularem', 'não possui ligações covalentes', 'seus átomos têm a mesma eletronegatividade', 'é uma molécula iônica', 'é formada por metais'],
          c: 0, dif: 'dificil',
          exp: 'Os vetores de polaridade têm sentidos opostos e se cancelam.'
        },
        {
          q: 'O modelo atômico de Rutherford trouxe a ideia de que',
          alt: ['o átomo tem um núcleo pequeno e denso, com eletrosfera ao redor', 'o átomo é uma esfera maciça e indivisível', 'os elétrons estão incrustados em uma massa positiva', 'os elétrons ocupam níveis de energia quantizados', 'o átomo não possui partículas internas'],
          c: 0, dif: 'dificil',
          exp: 'O experimento da lâmina de ouro revelou o núcleo.'
        }
      ],
      pares: [
        { a: 'Isótopos', b: 'Mesmo Z, A diferente' },
        { a: 'Iônica', b: 'Transferência de elétrons' },
        { a: 'Covalente', b: 'Compartilhamento de elétrons' },
        { a: 'Metálica', b: 'Mar de elétrons' },
        { a: 'Ligação de hidrogênio', b: 'H ligado a F, O ou N' },
        { a: 'Halogênios', b: 'Família 17' },
        { a: 'Rutherford', b: 'Núcleo do átomo' },
        { a: 'Eletronegatividade', b: 'Atração por elétrons' }
      ]
    },

    /* ============ 3. FUNÇÕES INORGÂNICAS ============ */
    {
      id: 'funcoes-inorganicas-ph',
      nome: 'Ácidos, bases, sais, óxidos e pH',
      incidencia: 'alta',
      resumo: 'Funções inorgânicas, reações de neutralização, escala de pH, indicadores e aplicações no cotidiano (alimentos, limpeza, solo).',
      conceitos: [
        {
          titulo: 'Funções inorgânicas',
          texto: '- **Ácidos** liberam H⁺ em água (HCl, H₂SO₄, HNO₃, ácido acético); sabor azedo.\n- **Bases** liberam OH⁻ (NaOH, Ca(OH)₂, NH₃); sabão, soda cáustica, cal.\n- **Sais**: produto da neutralização (NaCl, CaCO₃, NaHCO₃).\n- **Óxidos**: ácidos (SO₂, CO₂, NO₂), básicos (CaO, Na₂O), anfóteros e neutros (CO).\n- **Neutralização**: ácido + base → sal + água.'
        },
        {
          titulo: 'pH e indicadores',
          texto: '**pH = −log[H⁺]**. Escala de 0 a 14 a 25 °C: **pH < 7 ácido**, **= 7 neutro**, **> 7 básico**. Cada unidade de pH equivale a **10 vezes** a concentração de H⁺ (pH 3 é 10× mais ácido que pH 4). Indicadores: fenolftaleína, **repolho roxo**, papel tornassol. **Solução-tampão** resiste a variações de pH (sangue).'
        },
        {
          titulo: 'Aplicações',
          texto: '**Antiácidos** (bases fracas) neutralizam o excesso de HCl no estômago. **Calagem** corrige solos ácidos com CaO/CaCO₃. **Chuva ácida** e **acidificação dos oceanos** (CO₂ dissolvido forma H₂CO₃). **Limpeza**: bases dissolvem gorduras; ácidos removem incrustações. **Conservação de alimentos**: vinagre, ácido cítrico. **Cuidado** com misturas (água sanitária + ácido libera cloro, tóxico).'
        }
      ],
      pegadinhas: [
        'Achar que quanto **menor o pH, menos ácido**: é o contrário.',
        'Dizer que pH 3 e pH 4 diferem pouco: a diferença é de **10 vezes** na concentração de H⁺.',
        'Confundir **ácido forte** (muito ionizado) com **ácido concentrado** (muita quantidade).',
        'Achar que todo sal é "salgado" ou neutro: sais podem tornar a solução ácida ou básica.'
      ],
      dicas: [
        'Memorize: **ácido < 7 < base** e que a escala é logarítmica.',
        'Em neutralização, lembre: **ácido + base → sal + água**.',
        'No cotidiano, relacione cada produto a **seu pH aproximado** (limão ~2; água ~7; sabão ~10).'
      ],
      exemplo: {
        enunciado: 'Um refrigerante tem pH 3 e um suco, pH 4. Quantas vezes o refrigerante é mais ácido?',
        resolucao: 'A cada unidade de pH, a concentração de H⁺ varia 10 vezes. Logo, o refrigerante (pH 3) é **10 vezes mais ácido** que o suco (pH 4).'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.feltre, F.atkins],
      flashcards: [
        { f: 'Fórmula do pH', v: 'pH = −log[H⁺].' },
        { f: 'pH ácido, neutro e básico', v: 'Menor que 7, igual a 7 e maior que 7.' },
        { f: 'Neutralização', v: 'Ácido + base → sal + água.' },
        { f: 'Função do antiácido', v: 'Neutralizar o excesso de ácido clorídrico do estômago.' },
        { f: 'O que é calagem?', v: 'Aplicação de cal ao solo para corrigir a acidez.' },
        { f: 'Indicador natural comum', v: 'Suco de repolho roxo.' },
        { f: 'O que é solução-tampão?', v: 'Solução que resiste a mudanças bruscas de pH.' },
        { f: 'Por que não misturar água sanitária e ácidos?', v: 'Pode liberar gás cloro, tóxico.' }
      ],
      quiz: [
        {
          q: 'Uma solução com pH 2 é, em relação a outra com pH 4,',
          alt: ['100 vezes mais ácida', '2 vezes mais ácida', '2 vezes menos ácida', '100 vezes menos ácida', 'igualmente ácida'],
          c: 0, dif: 'medio',
          exp: 'A diferença de duas unidades de pH corresponde a 10² = 100 vezes na concentração de H⁺.'
        },
        {
          q: 'Os antiácidos aliviam a azia porque',
          alt: ['são bases que neutralizam o excesso de ácido no estômago', 'são ácidos fortes que reduzem o pH', 'aumentam a produção de suco gástrico', 'eliminam toda a acidez do organismo', 'são sais que não reagem com ácidos'],
          c: 0, dif: 'facil',
          exp: 'A reação de neutralização forma sal e água.'
        },
        {
          q: 'A calagem de solos ácidos consiste em',
          alt: ['adicionar compostos básicos, como o calcário, para elevar o pH', 'adicionar ácido sulfúrico ao solo cultivado', 'irrigar apenas com água destilada', 'retirar todos os microrganismos da terra', 'cobrir o solo com plástico escuro'],
          c: 0, dif: 'medio',
          exp: 'O calcário neutraliza a acidez e favorece as culturas.'
        },
        {
          q: 'O CO₂ dissolvido nos oceanos contribui para sua acidificação porque',
          alt: ['forma ácido carbônico ao reagir com a água', 'forma uma base forte na água salgada', 'aumenta o pH da água', 'libera hidróxido de sódio', 'reage com o cloreto de sódio formando água pura'],
          c: 0, dif: 'dificil',
          exp: 'CO₂ + H₂O ⇌ H₂CO₃, que libera H⁺.'
        },
        {
          q: 'O sabão e a soda cáustica apresentam, em solução, caráter',
          alt: ['básico, com pH maior que 7', 'ácido, com pH menor que 7', 'neutro, com pH igual a 7', 'ácido forte', 'indefinido'],
          c: 0, dif: 'facil',
          exp: 'Soluções básicas liberam OH⁻ e dissolvem gorduras.'
        },
        {
          q: 'Uma solução com [H⁺] = 10⁻³ mol/L tem pH igual a',
          alt: ['3', '−3', '11', '7', '1'],
          c: 0, dif: 'medio',
          exp: 'pH = −log(10⁻³) = 3.'
        },
        {
          q: 'A solução-tampão do sangue é importante porque',
          alt: ['mantém o pH quase constante mesmo com ácidos ou bases', 'faz o pH variar bastante ao longo do dia', 'transforma o sangue em uma solução ácida', 'impede a circulação do oxigênio nas veias', 'elimina todos os íons presentes no plasma'],
          c: 0, dif: 'dificil',
          exp: 'Variações pequenas de pH sanguíneo já causam danos graves.'
        },
        {
          q: 'A mistura de água sanitária com produtos de limpeza ácidos é perigosa porque',
          alt: ['pode liberar gás cloro, tóxico', 'produz apenas água e sal', 'aumenta o poder de limpeza sem riscos', 'forma gás oxigênio puro', 'neutraliza a toxicidade'],
          c: 0, dif: 'dificil',
          exp: 'Hipoclorito e ácido formam Cl₂, irritante e tóxico.'
        }
      ],
      pares: [
        { a: 'Ácido', b: 'Libera H⁺' },
        { a: 'Base', b: 'Libera OH⁻' },
        { a: 'pH 7', b: 'Neutro' },
        { a: 'Neutralização', b: 'Forma sal e água' },
        { a: 'Calagem', b: 'Corrige solo ácido' },
        { a: 'Antiácido', b: 'Base fraca' },
        { a: 'Tampão', b: 'Estabiliza o pH' },
        { a: 'Repolho roxo', b: 'Indicador natural' }
      ]
    },

    /* ============ 4. ESTEQUIOMETRIA E SOLUÇÕES ============ */
    {
      id: 'estequiometria-solucoes',
      nome: 'Mol, estequiometria e soluções',
      incidencia: 'alta',
      resumo: 'Quantidade de matéria, balanceamento, cálculos estequiométricos, rendimento, concentração e diluição. Contas simples em contextos reais.',
      conceitos: [
        {
          titulo: 'Mol e massa molar',
          texto: '**1 mol = 6,0·10²³ entidades** (constante de Avogadro). **Massa molar** (g/mol) = soma das massas atômicas. Ex.: H₂O = 18 g/mol; CO₂ = 44 g/mol. **n = m/M** (mols = massa ÷ massa molar). Volume molar de gás nas CNTP: **22,4 L/mol**.'
        },
        {
          titulo: 'Estequiometria',
          texto: 'Usa a **proporção em mols** dos coeficientes da equação **balanceada**.\n\nEx.: 2 H₂ + O₂ → 2 H₂O: 2 mol de H₂ reagem com 1 mol de O₂ e formam 2 mol de H₂O.\n\n- **Reagente limitante**: o que acaba primeiro e determina a quantidade de produto.\n- **Reagente em excesso**: sobra.\n- **Rendimento** = (obtido ÷ teórico) × 100.\n- **Pureza** dos reagentes e **Lei de Lavoisier** (conservação das massas).'
        },
        {
          titulo: 'Soluções',
          texto: '**Concentração comum** C = m (g) / V (L), em g/L. **Concentração em mol/L** (molaridade) M = n/V. **Título e porcentagem** (% m/m, % v/v), **ppm** (mg/kg ou mg/L, para contaminantes). **Diluição**: C₁V₁ = C₂V₂ (a quantidade de soluto não muda). **Mistura** de soluções. **Solubilidade** depende da temperatura (gráficos de curvas).'
        }
      ],
      pegadinhas: [
        'Calcular sem **balancear** a equação.',
        'Confundir **massa** (g) com **quantidade de matéria** (mol).',
        'Esquecer de converter **mL em L**.',
        'Achar que, ao diluir, a **quantidade de soluto** diminui: o que muda é o **volume**.'
      ],
      dicas: [
        'Roteiro: **balancear → converter para mols → usar proporção → converter para o que se pede**.',
        'Em diluição, use **C₁V₁ = C₂V₂**.',
        'Em ppm, 1 ppm = 1 mg de soluto por kg (ou L) de solução.'
      ],
      exemplo: {
        enunciado: 'Quantos mols de H₂O são formados na reação de 4 mol de H₂ com excesso de O₂ (2 H₂ + O₂ → 2 H₂O)?',
        resolucao: 'A proporção H₂ : H₂O é 2 : 2, ou seja, 1 : 1. Logo, 4 mol de H₂ formam **4 mol de H₂O**.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.feltre, F.atkins],
      flashcards: [
        { f: 'Constante de Avogadro', v: 'Aproximadamente 6,0·10²³ entidades por mol.' },
        { f: 'Massa molar da água', v: '18 g/mol.' },
        { f: 'Fórmula da quantidade de matéria', v: 'n = m/M.' },
        { f: 'Volume molar nas CNTP', v: '22,4 L/mol.' },
        { f: 'O que é reagente limitante?', v: 'O reagente que acaba primeiro e limita a quantidade de produto.' },
        { f: 'Fórmula de rendimento', v: '(quantidade obtida ÷ quantidade teórica) × 100.' },
        { f: 'Fórmula de diluição', v: 'C₁V₁ = C₂V₂.' },
        { f: 'Concentração comum', v: 'Massa de soluto por volume de solução (g/L).' }
      ],
      quiz: [
        {
          q: 'Quantos mols existem em 36 g de água (M = 18 g/mol)?',
          alt: ['2 mol', '0,5 mol', '18 mol', '4 mol', '36 mol'],
          c: 0, dif: 'facil',
          exp: 'n = 36/18 = 2 mol.'
        },
        {
          q: 'A concentração de uma solução com 20 g de sal em 500 mL é de',
          alt: ['40 g/L', '10 g/L', '4 g/L', '20 g/L', '400 g/L'],
          c: 0, dif: 'medio',
          exp: '500 mL = 0,5 L; C = 20/0,5 = 40 g/L.'
        },
        {
          q: 'Se 100 mL de uma solução 2 mol/L são diluídos até 400 mL, a nova concentração é de',
          alt: ['0,5 mol/L', '8 mol/L', '2 mol/L', '4 mol/L', '1,5 mol/L'],
          c: 0, dif: 'medio',
          exp: 'C₂ = C₁V₁/V₂ = 2 × 100 / 400 = 0,5 mol/L.'
        },
        {
          q: 'Na equação N₂ + 3 H₂ → 2 NH₃, 6 mol de H₂ produzem',
          alt: ['4 mol de NH₃', '2 mol de NH₃', '6 mol de NH₃', '3 mol de NH₃', '12 mol de NH₃'],
          c: 0, dif: 'medio',
          exp: 'A proporção H₂ : NH₃ é 3 : 2; 6 mol de H₂ geram 4 mol de NH₃.'
        },
        {
          q: 'O reagente limitante é aquele que',
          alt: ['acaba primeiro e determina a quantidade de produto formado', 'sobra em excesso ao final da reação', 'possui sempre a maior massa molar do sistema', 'está sempre presente em maior quantidade', 'não participa da reação química em questão'],
          c: 0, dif: 'facil',
          exp: 'Quando acaba, a reação para.'
        },
        {
          q: 'Uma reação teórica forneceria 50 g de produto, mas só se obtiveram 40 g. O rendimento foi de',
          alt: ['80%', '125%', '20%', '40%', '90%'],
          c: 0, dif: 'dificil',
          exp: 'Rendimento = 40/50 × 100 = 80%.'
        },
        {
          q: 'A Lei de Lavoisier afirma que, em um sistema fechado, durante uma reação,',
          alt: ['a massa total dos reagentes é igual à massa total dos produtos', 'a massa dos produtos é sempre maior que a dos reagentes', 'a massa dos reagentes é sempre maior que a dos produtos', 'os átomos são criados durante a reação', 'os átomos são destruídos durante a reação'],
          c: 0, dif: 'dificil',
          exp: 'Os átomos se rearranjam, mas a massa se conserva.'
        },
        {
          q: 'Em uma água contaminada com 5 ppm de um poluente, há',
          alt: ['5 mg do poluente por litro de água', '5 g por litro', '5 kg por litro', '5 mg por mililitro', '0,5 g por litro'],
          c: 0, dif: 'dificil',
          exp: '1 ppm equivale a 1 mg de soluto por kg (ou L) de solução diluída.'
        }
      ],
      pares: [
        { a: 'Mol', b: '6,0·10²³ entidades' },
        { a: 'Massa molar', b: 'g/mol' },
        { a: 'Volume molar CNTP', b: '22,4 L/mol' },
        { a: 'Reagente limitante', b: 'Acaba primeiro' },
        { a: 'Rendimento', b: 'Obtido sobre teórico' },
        { a: 'Lavoisier', b: 'Conservação das massas' },
        { a: 'Diluição', b: 'C₁V₁ = C₂V₂' },
        { a: 'ppm', b: 'mg por kg ou litro' }
      ]
    },

    /* ============ 5. TERMOQUÍMICA, CINÉTICA E EQUILÍBRIO ============ */
    {
      id: 'termoquimica-cinetica-equilibrio',
      nome: 'Termoquímica, cinética e equilíbrio químico',
      incidencia: 'alta',
      resumo: 'Energia nas reações, velocidade das reações, catalisadores, equilíbrio e deslocamento (Le Chatelier). Muito ligado a combustíveis, alimentos e indústria.',
      conceitos: [
        {
          titulo: 'Termoquímica',
          texto: '- **Reação exotérmica**: libera calor (ΔH < 0); ex.: combustão. **Endotérmica**: absorve calor (ΔH > 0); ex.: fotossíntese, dissolução de nitrato de amônio (compressas frias).\n- **Entalpia de combustão**: energia liberada na queima de 1 mol; compare combustíveis por **kJ/g** ou **kJ/mol**.\n- **Lei de Hess**: o ΔH total é a soma dos ΔH das etapas.\n- **Energia nos alimentos**: carboidratos e proteínas ≈ 4 kcal/g; **gorduras** ≈ 9 kcal/g.'
        },
        {
          titulo: 'Cinética química',
          texto: '**Velocidade** depende de **temperatura**, **concentração**, **superfície de contato** (sólidos triturados reagem mais rápido), **catalisador** e luz. **Teoria das colisões**: as partículas precisam de **energia mínima (energia de ativação)** e orientação adequada. **Catalisador** acelera a reação **reduzindo a energia de ativação**, sem ser consumido (enzimas são catalisadores biológicos).'
        },
        {
          titulo: 'Equilíbrio químico',
          texto: 'Em reações reversíveis, o **equilíbrio** ocorre quando as velocidades direta e inversa se igualam e as concentrações permanecem constantes (equilíbrio dinâmico). **Princípio de Le Chatelier**: o sistema se desloca para minimizar uma perturbação. **Aumentar reagente** → favorece produtos; **aquecer** → favorece o sentido endotérmico; **aumentar pressão** → favorece o lado com **menos mols de gás**. **Catalisador não desloca** o equilíbrio. Aplicações: Haber-Bosch (amônia), refrigerantes (CO₂ + água), pH do sangue.'
        }
      ],
      pegadinhas: [
        'Confundir **exotérmica** (libera calor, ΔH<0) com **endotérmica** (absorve, ΔH>0).',
        'Dizer que o catalisador **aumenta o rendimento** ou desloca o equilíbrio: só acelera.',
        'Achar que, no equilíbrio, a reação "para": ela continua nos dois sentidos, com velocidades iguais.',
        'Esquecer que a **temperatura** afeta velocidade e equilíbrio.'
      ],
      dicas: [
        'Em Le Chatelier, pergunte: **o que foi perturbado e para onde o sistema reage?**',
        'Em energia de alimentos, use **4-4-9 kcal/g**.',
        'Em cinética, aumentar a **superfície de contato** acelera reações com sólidos.'
      ],
      exemplo: {
        enunciado: 'Por que um comprimido efervescente dissolve mais rápido se for triturado?',
        resolucao: 'Porque a **superfície de contato** com a água aumenta, o que eleva a frequência de colisões efetivas e, portanto, a **velocidade da reação**.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.feltre, F.atkins],
      flashcards: [
        { f: 'Reação exotérmica', v: 'Libera calor; ΔH negativo.' },
        { f: 'Reação endotérmica', v: 'Absorve calor; ΔH positivo.' },
        { f: 'Lei de Hess', v: 'O ΔH total é a soma dos ΔH das etapas.' },
        { f: 'Energia por grama: carboidratos, proteínas e gorduras', v: 'Aproximadamente 4, 4 e 9 kcal/g.' },
        { f: 'Efeito do catalisador', v: 'Diminui a energia de ativação e acelera a reação, sem ser consumido.' },
        { f: 'Fatores que alteram a velocidade', v: 'Temperatura, concentração, superfície de contato e catalisador.' },
        { f: 'Princípio de Le Chatelier', v: 'O sistema em equilíbrio reage para minimizar a perturbação imposta.' },
        { f: 'O catalisador desloca o equilíbrio?', v: 'Não; só acelera o alcance do equilíbrio.' }
      ],
      quiz: [
        {
          q: 'Em uma compressa fria instantânea, a dissolução do sal na água é',
          alt: ['endotérmica, pois absorve calor do ambiente', 'exotérmica, pois libera calor', 'um processo sem troca de energia', 'uma combustão', 'uma reação nuclear'],
          c: 0, dif: 'medio',
          exp: 'A absorção de calor causa a sensação de frio.'
        },
        {
          q: 'A função de um catalisador em uma reação é',
          alt: ['diminuir a energia de ativação e aumentar a velocidade', 'aumentar a quantidade de produto no equilíbrio', 'ser consumido totalmente', 'elevar a temperatura da reação', 'alterar o ΔH da reação'],
          c: 0, dif: 'facil',
          exp: 'O catalisador cria um caminho alternativo de menor energia.'
        },
        {
          q: 'Alimentos ricos em gordura fornecem mais energia por grama porque as gorduras',
          alt: ['liberam cerca de 9 kcal/g, mais que carboidratos e proteínas', 'liberam cerca de 1 kcal/g, menos que as proteínas', 'não são oxidadas pelo organismo humano', 'são compostas apenas de sais minerais', 'contêm grande quantidade de água'],
          c: 0, dif: 'facil',
          exp: 'Gorduras têm maior valor energético por massa.'
        },
        {
          q: 'No equilíbrio químico, as velocidades das reações direta e inversa são',
          alt: ['iguais, e as concentrações permanecem constantes', 'nulas, pois a reação para', 'sempre diferentes', 'crescentes com o tempo', 'dependentes apenas do catalisador'],
          c: 0, dif: 'medio',
          exp: 'É um equilíbrio dinâmico: a reação continua, sem variação líquida.'
        },
        {
          q: 'Ao aumentar a concentração de um reagente em equilíbrio, o sistema tende a',
          alt: ['formar mais produtos para consumir o excesso', 'formar ainda mais reagentes no sistema', 'permanecer sem qualquer alteração', 'liberar o catalisador da reação', 'parar de reagir completamente'],
          c: 0, dif: 'medio',
          exp: 'Le Chatelier: o sistema se desloca no sentido que atenua a perturbação.'
        },
        {
          q: 'A conservação de alimentos na geladeira funciona porque a diminuição da temperatura',
          alt: ['reduz a velocidade das reações de decomposição', 'acelera a ação dos microrganismos', 'aumenta a energia de ativação a zero', 'esteriliza o alimento permanentemente', 'aumenta o ΔH das reações'],
          c: 0, dif: 'dificil',
          exp: 'Temperaturas baixas diminuem as colisões efetivas e o metabolismo microbiano.'
        },
        {
          q: 'A combustão de combustíveis é um processo exotérmico, pois',
          alt: ['libera energia na forma de calor e luz', 'absorve calor do ambiente', 'não envolve variação de energia', 'consome luz para ocorrer', 'só ocorre em baixas temperaturas'],
          c: 0, dif: 'facil',
          exp: 'A energia das ligações dos produtos é menor que a dos reagentes.'
        },
        {
          q: 'Para o equilíbrio N₂ + 3 H₂ ⇌ 2 NH₃ (4 mol de gás reagentes e 2 mol de gás produtos), aumentar a pressão',
          alt: ['desloca o equilíbrio para a formação de NH₃', 'desloca o equilíbrio para os reagentes', 'não altera o equilíbrio', 'impede a formação de amônia', 'transforma o N₂ em H₂'],
          c: 0, dif: 'dificil',
          exp: 'O aumento de pressão favorece o lado com menor número de mols de gás.'
        }
      ],
      pares: [
        { a: 'Exotérmica', b: 'Libera calor' },
        { a: 'Endotérmica', b: 'Absorve calor' },
        { a: 'Catalisador', b: 'Reduz a energia de ativação' },
        { a: 'Le Chatelier', b: 'Deslocamento do equilíbrio' },
        { a: 'Lei de Hess', b: 'Soma de ΔH' },
        { a: 'Gorduras', b: '9 kcal/g' },
        { a: 'Superfície de contato', b: 'Mais velocidade' },
        { a: 'Equilíbrio dinâmico', b: 'Velocidades iguais' }
      ]
    },

    /* ============ 6. ELETROQUÍMICA ============ */
    {
      id: 'eletroquimica',
      nome: 'Eletroquímica: pilhas, baterias, eletrólise e corrosão',
      incidencia: 'media',
      resumo: 'Reações de oxirredução, pilhas e baterias, eletrólise, galvanização e corrosão.',
      conceitos: [
        {
          titulo: 'Oxirredução',
          texto: '**Oxidação**: perda de elétrons (aumenta o NOX). **Redução**: ganho de elétrons (diminui o NOX). O **agente oxidante** sofre redução; o **agente redutor** sofre oxidação. Em toda reação redox há transferência de elétrons. Exemplos: ferrugem, combustão, respiração celular, branqueamento.'
        },
        {
          titulo: 'Pilhas e baterias',
          texto: 'Pilha: reação redox espontânea gera corrente. **Ânodo (polo negativo)**: onde ocorre **oxidação**. **Cátodo (polo positivo)**: onde ocorre **redução**. Elétrons vão do ânodo ao cátodo pelo fio externo; a **ponte salina** fecha o circuito. Exemplos: pilha de **Daniell** (Zn/Cu), pilhas alcalinas, **baterias de lítio-íon** (recarregáveis), chumbo-ácido (carros). Descarte correto evita contaminação por **metais pesados**.'
        },
        {
          titulo: 'Eletrólise e corrosão',
          texto: '**Eletrólise**: corrente elétrica provoca reação **não espontânea**. Usos: obtenção de **alumínio**, cloro e soda, **galvanização** (cromagem, niquelagem, folheado), **purificação do cobre**. **Corrosão** do ferro: oxidação em presença de O₂ e água. Proteção: **pintura**, **galvanização com zinco** (metal de sacrifício), **ligas** (aço inox).'
        }
      ],
      pegadinhas: [
        'Trocar ânodo e cátodo: ânodo = **oxidação**; cátodo = **redução** (em pilhas e em eletrólises).',
        'Achar que o agente oxidante **é oxidado**: ele causa a oxidação e **se reduz**.',
        'Confundir **pilha** (espontânea, gera energia) com **eletrólise** (consome energia).',
        'Dizer que a ferrugem ocorre sem água ou oxigênio: precisa de ambos.'
      ],
      dicas: [
        'Memorize: **ânodo – oxida; cátodo – reduz**; elétrons vão do ânodo ao cátodo.',
        'Em corrosão, procure o **metal de sacrifício** (mais reativo que o ferro, como o zinco).',
        'Em questões ambientais, lembre do **descarte de pilhas e baterias**.'
      ],
      exemplo: {
        enunciado: 'Por que a galvanização com zinco protege o ferro, mesmo se a camada for riscada?',
        resolucao: 'Porque o zinco é mais reativo que o ferro e **oxida primeiro** (metal de sacrifício), preservando o ferro.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.feltre, F.atkins],
      flashcards: [
        { f: 'O que é oxidação?', v: 'Perda de elétrons.' },
        { f: 'O que é redução?', v: 'Ganho de elétrons.' },
        { f: 'Agente oxidante', v: 'Substância que provoca a oxidação de outra e se reduz.' },
        { f: 'Onde ocorre oxidação na pilha?', v: 'No ânodo (polo negativo).' },
        { f: 'Onde ocorre redução na pilha?', v: 'No cátodo (polo positivo).' },
        { f: 'Para que serve a ponte salina?', v: 'Manter a neutralidade elétrica e fechar o circuito.' },
        { f: 'O que é eletrólise?', v: 'Reação provocada por corrente elétrica, não espontânea.' },
        { f: 'O que é metal de sacrifício?', v: 'Metal mais reativo que se oxida no lugar do que se quer proteger.' }
      ],
      quiz: [
        {
          q: 'Em uma pilha, a oxidação ocorre no',
          alt: ['ânodo', 'cátodo', 'fio condutor', 'recipiente de vidro', 'ponte salina'],
          c: 0, dif: 'facil',
          exp: 'No ânodo (polo negativo) há perda de elétrons.'
        },
        {
          q: 'A diferença fundamental entre pilha e eletrólise é que a pilha',
          alt: ['gera corrente por reação espontânea; a eletrólise consome energia', 'consome corrente elétrica para provocar reações', 'não envolve nenhuma transferência de elétrons', 'só ocorre quando há soluções de ácidos', 'não produz nenhum tipo de energia útil'],
          c: 0, dif: 'medio',
          exp: 'Pilha converte energia química em elétrica; eletrólise faz o inverso.'
        },
        {
          q: 'A ferrugem do ferro ocorre quando ele é exposto a',
          alt: ['oxigênio e umidade', 'apenas gás nitrogênio seco', 'vácuo absoluto', 'somente luz visível', 'gás hélio'],
          c: 0, dif: 'facil',
          exp: 'A oxidação do ferro requer O₂ e água.'
        },
        {
          q: 'O descarte inadequado de pilhas e baterias é um problema ambiental porque',
          alt: ['contêm metais pesados que contaminam solo e água', 'liberam apenas gás oxigênio puro', 'se degradam em poucos minutos', 'não possuem metais', 'aumentam a camada de ozônio'],
          c: 0, dif: 'medio',
          exp: 'Chumbo, cádmio e mercúrio são tóxicos e bioacumulativos.'
        },
        {
          q: 'Na galvanização do ferro com zinco, o zinco',
          alt: ['oxida no lugar do ferro, funcionando como metal de sacrifício', 'reduz o ferro e o torna mais frágil', 'impede a passagem de qualquer elétron', 'reage com o ferro formando mais ferrugem', 'é menos reativo que o ferro protegido'],
          c: 0, dif: 'dificil',
          exp: 'O zinco é mais reativo e se oxida preferencialmente.'
        },
        {
          q: 'Em uma reação redox, o agente redutor',
          alt: ['sofre oxidação, perdendo elétrons', 'sofre redução, ganhando elétrons', 'não participa da reação', 'ganha prótons do solvente', 'é sempre um gás'],
          c: 0, dif: 'medio',
          exp: 'Ao se oxidar, o agente redutor fornece elétrons para outra espécie.'
        },
        {
          q: 'A obtenção industrial do alumínio a partir da bauxita é feita por',
          alt: ['eletrólise, com alto consumo de energia elétrica', 'simples aquecimento ao ar livre', 'filtração do minério em peneiras', 'destilação fracionada da bauxita', 'reação direta com a água do mar'],
          c: 0, dif: 'dificil',
          exp: 'O óxido de alumínio fundido é reduzido por corrente elétrica.'
        },
        {
          q: 'Os elétrons, em uma pilha, circulam pelo fio externo',
          alt: ['do ânodo para o cátodo', 'do cátodo para o ânodo', 'da ponte salina para o ar', 'apenas dentro da solução', 'sem direção definida'],
          c: 0, dif: 'dificil',
          exp: 'Os elétrons liberados na oxidação seguem para o cátodo, onde ocorre a redução.'
        }
      ],
      pares: [
        { a: 'Oxidação', b: 'Perda de elétrons' },
        { a: 'Redução', b: 'Ganho de elétrons' },
        { a: 'Ânodo', b: 'Polo da oxidação' },
        { a: 'Cátodo', b: 'Polo da redução' },
        { a: 'Eletrólise', b: 'Reação forçada por corrente' },
        { a: 'Pilha', b: 'Gera corrente' },
        { a: 'Zinco', b: 'Metal de sacrifício' },
        { a: 'Ferrugem', b: 'Oxidação do ferro' }
      ]
    },

    /* ============ 7. ORGÂNICA ============ */
    {
      id: 'quimica-organica',
      nome: 'Química orgânica: funções, isomeria, reações e polímeros',
      incidencia: 'alta',
      resumo: 'Hidrocarbonetos, funções oxigenadas e nitrogenadas, isomeria, esterificação, saponificação, polímeros e biocombustíveis.',
      conceitos: [
        {
          titulo: 'Carbono e funções orgânicas',
          texto: 'O **carbono** forma 4 ligações, cadeias longas e variadas. **Hidrocarbonetos** (alcanos, alcenos, alcinos, aromáticos) são a base de petróleo e gás. Funções oxigenadas:\n\n- **Álcool** (–OH): etanol.\n- **Aldeído** (–CHO) e **cetona** (C=O): formol, acetona.\n- **Ácido carboxílico** (–COOH): vinagre (ácido acético).\n- **Éster** (–COO–): aromas de frutas, óleos e gorduras (triglicerídeos).\n- **Éter** (–O–), **fenol**. Nitrogenadas: **amina** e **amida** (proteínas).'
        },
        {
          titulo: 'Propriedades, isomeria e reações',
          texto: 'Pontos de ebulição crescem com o **tamanho da cadeia** e as forças intermoleculares (álcoois e ácidos > hidrocarbonetos). **Isomeria**: compostos com a **mesma fórmula** e estruturas diferentes (de cadeia, de posição, de função, **óptica** e geométrica). Reações importantes: **combustão**, **esterificação** (ácido + álcool → éster + água), **hidrólise** de ésteres e **saponificação** (gordura + base forte → sabão + glicerol), **adição**, **substituição**, **oxidação de álcoois**.'
        },
        {
          titulo: 'Polímeros, biocombustíveis e bioquímica',
          texto: '**Polímeros**: macromoléculas de monômeros (polietileno, PVC, PET, náilon, borracha, poliestireno); plásticos persistem no ambiente, por isso a importância da **reciclagem** e dos **biodegradáveis**. **Biocombustíveis**: etanol, **biodiesel** (transesterificação de óleos). **Sabões e detergentes** possuem parte polar e apolar (**micelas** removem gordura). **Carboidratos, lipídios, proteínas** (aminoácidos) e **ácidos nucleicos** são compostos orgânicos biológicos.'
        }
      ],
      pegadinhas: [
        'Confundir **isômeros** (mesma fórmula molecular, estruturas diferentes) com **isótopos**.',
        'Trocar **álcool** (–OH ligado a carbono saturado) com **ácido carboxílico** (–COOH).',
        'Dizer que o sabão "dissolve" a gordura: ele forma **micelas** que a envolvem.',
        'Achar que todo plástico é biodegradável: a maioria **persiste** por décadas.'
      ],
      dicas: [
        'Identifique o **grupo funcional** primeiro e depois o nome da função.',
        'Em isomeria, compare **fórmula molecular × estrutura**.',
        'Em polímeros, pense em **monômero → polímero** e no **impacto ambiental**.'
      ],
      exemplo: {
        enunciado: 'Como o sabão atua na remoção da gordura?',
        resolucao: 'A molécula de sabão tem uma **cabeça polar** (solúvel em água) e uma **cauda apolar** (solúvel em gordura). As caudas envolvem a gordura, formando **micelas** que são arrastadas pela água.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.feltre, F.atkins],
      flashcards: [
        { f: 'Grupo funcional do álcool', v: 'Hidroxila (–OH) ligada a carbono saturado.' },
        { f: 'Grupo funcional do ácido carboxílico', v: 'Carboxila (–COOH).' },
        { f: 'Reação de esterificação', v: 'Ácido carboxílico + álcool → éster + água.' },
        { f: 'Saponificação', v: 'Gordura + base forte → sabão + glicerol.' },
        { f: 'O que são isômeros?', v: 'Compostos com mesma fórmula molecular e estruturas diferentes.' },
        { f: 'O que é um polímero?', v: 'Macromolécula formada pela repetição de unidades menores (monômeros).' },
        { f: 'O que é biodiesel?', v: 'Combustível obtido de óleos e gorduras por transesterificação.' },
        { f: 'Como o sabão remove gordura?', v: 'Formando micelas com cauda apolar voltada para a gordura.' }
      ],
      quiz: [
        {
          q: 'A hidroxila (–OH) é o grupo funcional característico dos',
          alt: ['álcoois', 'ácidos carboxílicos', 'ésteres', 'aldeídos', 'hidrocarbonetos'],
          c: 0, dif: 'facil',
          exp: 'O etanol é um exemplo.'
        },
        {
          q: 'A saponificação é a reação entre',
          alt: ['uma gordura ou óleo e uma base forte, formando sabão e glicerol', 'um ácido e um álcool, formando éster e água', 'água e gás carbônico, formando ácido', 'dois hidrocarbonetos, formando um polímero', 'um ácido e o sal de cozinha, formando base'],
          c: 0, dif: 'medio',
          exp: 'O hidróxido hidrolisa o éster e produz sal de ácido graxo (sabão).'
        },
        {
          q: 'O vinagre tem sabor azedo por conter',
          alt: ['ácido acético, um ácido carboxílico', 'etanol puro', 'acetona', 'glicerol', 'cloreto de sódio'],
          c: 0, dif: 'facil',
          exp: 'O ácido acético resulta da oxidação do etanol.'
        },
        {
          q: 'Os plásticos de PET, por serem polímeros, geram preocupação ambiental porque',
          alt: ['demoram muito tempo para se degradar no ambiente', 'se decompõem em poucas horas', 'são consumidos por todos os animais', 'não são feitos de carbono', 'se transformam em água'],
          c: 0, dif: 'medio',
          exp: 'A resistência dos polímeros dificulta a decomposição natural.'
        },
        {
          q: 'O biodiesel é produzido, principalmente, a partir de',
          alt: ['óleos vegetais ou gorduras animais', 'carvão mineral', 'gás natural', 'minérios de ferro', 'areia e argila'],
          c: 0, dif: 'medio',
          exp: 'A transesterificação de triglicerídeos com álcool produz o biodiesel.'
        },
        {
          q: 'Os compostos etanol (C₂H₆O) e éter dimetílico (C₂H₆O) são exemplos de isômeros de',
          alt: ['função', 'posição', 'cadeia', 'núcleo atômico', 'massa atômica'],
          c: 0, dif: 'dificil',
          exp: 'Têm a mesma fórmula, mas funções diferentes (álcool e éter).'
        },
        {
          q: 'Os aromas artificiais de frutas costumam pertencer à função',
          alt: ['éster', 'sal inorgânico', 'hidreto', 'óxido', 'base'],
          c: 0, dif: 'dificil',
          exp: 'Ésteres de baixa massa molar possuem odores agradáveis.'
        },
        {
          q: 'A combustão completa de um hidrocarboneto produz',
          alt: ['CO₂ e H₂O', 'apenas CO', 'carbono sólido', 'H₂ e O₂', 'NH₃ e N₂'],
          c: 0, dif: 'facil',
          exp: 'Com oxigênio em quantidade suficiente, o carbono vira CO₂ e o hidrogênio, água.'
        }
      ],
      pares: [
        { a: 'Álcool', b: 'Grupo –OH' },
        { a: 'Ácido carboxílico', b: 'Grupo –COOH' },
        { a: 'Éster', b: 'Aromas e gorduras' },
        { a: 'Isômeros', b: 'Mesma fórmula, estrutura diferente' },
        { a: 'Saponificação', b: 'Produz sabão' },
        { a: 'Polímero', b: 'Muitos monômeros' },
        { a: 'Biodiesel', b: 'De óleos e gorduras' },
        { a: 'Micela', b: 'Envolve a gordura' }
      ]
    }
  ]);
})();
