/* Redação — 7 temas: competências, estrutura, proposta de intervenção, coesão,
   repertório, norma culta e o que anula a redação. Exemplos de texto são originais (feitos para estudo). */
(function () {
  'use strict';
  var F = {
    cartilha: { titulo: 'INEP — A Redação no Enem: Cartilha do Participante (edição 2024, cópia em PDF)', url: 'https://static.poder360.com.br/2024/11/a_redacao_no_enem_2024_cartilha_do_participante.pdf' },
    folhape: { titulo: 'Folha de Pernambuco — Cartilha reúne orientações para a redação do Enem 2026', url: 'https://www.folhape.com.br/noticias/cartilha-reune-orientacoes-para-a-redacao-do-enem-2026/513554/' },
    querobolsa: { titulo: 'Quero Bolsa — Redação do Enem: como conseguir a nota máxima na Competência 5', url: 'https://querobolsa.com.br/revista/redacao-do-enem-como-conseguir-a-nota-maxima-na-competencia-5' },
    bechara: { titulo: 'BECHARA, E. Moderna Gramática Portuguesa (obra de referência)', url: '' }
  };

  ENEM.temas('redacao', [
    /* ============ 1. COMPETÊNCIAS ============ */
    {
      id: 'competencias-nota',
      nome: 'As 5 competências e como a nota é calculada',
      incidencia: 'alta',
      resumo: 'A redação vale até 1.000 pontos: cinco competências de 0 a 200. Entender o que cada corretor procura é o primeiro passo para escrever com método.',
      conceitos: [
        {
          titulo: 'As cinco competências',
          texto: '- **C1 — Norma culta**: gramática, ortografia, pontuação, concordância.\n- **C2 — Tema e tipo textual**: entender o tema, usar **repertório sociocultural** e escrever um texto dissertativo-argumentativo.\n- **C3 — Argumentação**: selecionar e organizar informações e argumentos para defender um **ponto de vista**.\n- **C4 — Coesão**: ligar frases e parágrafos com conectivos e referências.\n- **C5 — Proposta de intervenção**: apresentar solução detalhada, respeitando os direitos humanos.\n\nCada uma vale **0, 40, 80, 120, 160 ou 200** pontos.'
        },
        {
          titulo: 'Como a nota final é formada',
          texto: 'Dois corretores avaliam o texto de forma independente, cada um dando até 1.000 pontos. A nota final é a **média** das duas notas. Se houver grande diferença entre eles (mais de 100 pontos no total ou mais de 80 em uma competência), um **terceiro corretor** avalia.\n\nVale lembrar: não existe "nota por criatividade". Todas as competências têm o mesmo peso.'
        },
        {
          titulo: 'Onde estão os pontos mais fáceis de ganhar',
          texto: 'A C5 é a mais **previsível**: com os cinco elementos (agente, ação, meio, finalidade, detalhamento), você garante a nota. A C4 também é treinável: basta variar conectivos e retomar ideias com pronomes. Já C1 depende de revisão cuidadosa.'
        }
      ],
      pegadinhas: [
        'Achar que a nota depende só da gramática: **quatro** das cinco competências não são sobre isso.',
        'Pensar que um texto "bonito" mas sem proposta de intervenção leva nota alta: a C5 pode zerar.',
        'Achar que o texto decorado e genérico agrada: a banca valoriza o que **se conecta ao tema**.',
        'Esquecer que são **dois corretores**: a clareza ajuda os dois a concordarem.'
      ],
      dicas: [
        'Antes de escrever, repasse mentalmente: **C1 a C5**, uma por uma.',
        'Releia o texto cinco vezes, uma para cada competência, na fase de revisão.',
        'Treine com a **grade de correção** do INEP e atribua notas ao seu próprio texto.'
      ],
      exemplo: {
        enunciado: 'Um texto teve: C1 = 160, C2 = 160, C3 = 120, C4 = 160 e C5 = 200. Qual a nota desse corretor?',
        resolucao: '160 + 160 + 120 + 160 + 200 = **800** pontos. Ao ver que a C3 foi a mais baixa, a pessoa sabe que deve treinar a **organização dos argumentos**.'
      },
      fontes: [F.cartilha, F.folhape],
      flashcards: [
        { f: 'Quantas competências a redação do Enem avalia?', v: 'Cinco, de 0 a 200 pontos cada.' },
        { f: 'Nota máxima da redação', v: '1.000 pontos.' },
        { f: 'Quantos corretores avaliam cada texto?', v: 'Dois, de forma independente (a nota final é a média).' },
        { f: 'O que avalia a C1?', v: 'Domínio da norma culta da língua portuguesa.' },
        { f: 'O que avalia a C2?', v: 'Compreensão do tema, tipo textual e repertório sociocultural.' },
        { f: 'O que avalia a C3?', v: 'Seleção e organização de argumentos em defesa de um ponto de vista.' },
        { f: 'O que avalia a C4?', v: 'Coesão: mecanismos que articulam as partes do texto.' },
        { f: 'O que avalia a C5?', v: 'Proposta de intervenção detalhada que respeite os direitos humanos.' }
      ],
      quiz: [
        {
          q: 'A nota máxima da redação do Enem é de',
          alt: ['1.000 pontos', '800 pontos', '500 pontos', '200 pontos', '100 pontos'],
          c: 0, dif: 'facil',
          exp: 'São cinco competências de até 200 pontos: 5 × 200 = 1.000.'
        },
        {
          q: 'A proposta de intervenção é avaliada pela competência',
          alt: ['5', '1', '2', '3', '4'],
          c: 0, dif: 'facil',
          exp: 'A competência 5 trata da proposta de intervenção respeitando os direitos humanos.'
        },
        {
          q: 'A nota final do participante na redação é obtida pela',
          alt: ['média das notas dos dois corretores', 'soma das notas dos dois corretores', 'maior das duas notas', 'menor das duas notas', 'nota de um corretor sorteado'],
          c: 0, dif: 'medio',
          exp: 'Cada corretor avalia de forma independente e a nota final é a média.'
        },
        {
          q: 'O uso de conectivos e de pronomes para ligar frases e parágrafos é avaliado na competência',
          alt: ['4', '1', '2', '3', '5'],
          c: 0, dif: 'medio',
          exp: 'A coesão e o encadeamento de ideias pertencem à competência 4.'
        },
        {
          q: 'A competência 2 exige, entre outras coisas,',
          alt: ['repertório sociocultural pertinente ao tema', 'apenas ortografia correta', 'proposta com cinco elementos', 'uso de conectivos variados', 'um texto narrativo bem escrito'],
          c: 0, dif: 'medio',
          exp: 'A competência 2 avalia a compreensão do tema, o tipo textual e o repertório.'
        },
        {
          q: 'Cada competência vale uma pontuação que pode ser',
          alt: ['0, 40, 80, 120, 160 ou 200', 'de 0 a 100, de 10 em 10', 'apenas 0 ou 200', 'de 0 a 10', 'de 100 a 300'],
          c: 0, dif: 'medio',
          exp: 'Os níveis de cada competência vão de 0 a 200, de 40 em 40.'
        },
        {
          q: 'Dois corretores atribuem notas muito discrepantes. Nesse caso,',
          alt: ['um terceiro corretor avalia o texto', 'prevalece a maior nota', 'a redação é anulada', 'prevalece a menor nota', 'o participante pode escolher a nota'],
          c: 0, dif: 'dificil',
          exp: 'Diferença superior a 100 pontos no total ou a 80 em uma competência leva a um terceiro corretor.'
        },
        {
          q: 'Um participante recebeu 120 em todas as competências. Sua nota é de',
          alt: ['600', '120', '480', '720', '1.000'],
          c: 0, dif: 'dificil',
          exp: '5 × 120 = 600.'
        }
      ],
      pares: [
        { a: 'C1', b: 'Norma culta' },
        { a: 'C2', b: 'Tema, tipo textual e repertório' },
        { a: 'C3', b: 'Argumentos e ponto de vista' },
        { a: 'C4', b: 'Coesão' },
        { a: 'C5', b: 'Proposta de intervenção' },
        { a: 'Nota máxima', b: '1.000 pontos' },
        { a: 'Corretores', b: 'Dois, e a nota final é a média' },
        { a: 'Terceiro corretor', b: 'Entra em caso de grande discrepância' }
      ]
    },

    /* ============ 2. ESTRUTURA ============ */
    {
      id: 'estrutura-dissertativa',
      nome: 'Estrutura do texto dissertativo-argumentativo',
      incidencia: 'alta',
      resumo: 'Introdução com tese, dois parágrafos de desenvolvimento e uma conclusão com proposta. Um modelo simples para organizar o raciocínio em 30 linhas.',
      conceitos: [
        {
          titulo: 'O que é dissertar e argumentar',
          texto: 'Texto **dissertativo-argumentativo** defende um **ponto de vista (tese)** sobre um problema, sustentado por **argumentos**. Ele não conta uma história (narração) nem apenas descreve: ele **convence**. Fica na 3ª pessoa ou em linguagem impessoal; evite "eu acho".'
        },
        {
          titulo: 'Os quatro parágrafos',
          texto: '1. **Introdução**: contextualiza o tema, apresenta a **tese** e, se quiser, antecipa os dois argumentos.\n2. **Desenvolvimento 1**: primeiro argumento + explicação + repertório.\n3. **Desenvolvimento 2**: segundo argumento + explicação + repertório.\n4. **Conclusão**: retoma a tese e traz a **proposta de intervenção** completa.\n\nO texto tem no máximo **30 linhas** (com até 7 linhas manuscritas, o texto é considerado insuficiente).'
        },
        {
          titulo: 'Tese, argumento, repertório',
          texto: '- **Tese**: sua posição. Ex.: "O uso excessivo de telas na infância prejudica o desenvolvimento."\n- **Argumento**: o motivo que sustenta a tese. Ex.: "porque reduz o tempo de brincadeira e de sono".\n- **Repertório**: dado, lei, obra ou fato que reforça o argumento.\n\nUm argumento sem explicação é só uma afirmação. Use a fórmula **afirmação → porque → exemplo/dado → consequência**.'
        }
      ],
      pegadinhas: [
        'Escrever uma **narrativa** ("era uma vez...") no lugar de argumentar.',
        'Terminar o texto **sem** proposta de intervenção.',
        'Usar a 1ª pessoa de forma opinativa e vaga ("eu acho que...").',
        'Dedicar um parágrafo inteiro a dois argumentos sem desenvolver nenhum.'
      ],
      dicas: [
        'Faça um **rascunho de 5 minutos**: tese, dois argumentos e proposta.',
        'Em cada desenvolvimento, termine com uma **consequência** e retome a tese.',
        'Conte as linhas: melhor chegar a 25–30 do que parar em 15.'
      ],
      exemplo: {
        enunciado: 'Tema fictício de treino: "O impacto do uso excessivo de telas na infância". Monte o esqueleto do texto.',
        resolucao: '**Tese**: o uso excessivo de telas prejudica o desenvolvimento infantil. **Argumento 1**: reduz brincadeira e convívio. **Argumento 2**: atrapalha o sono e a atenção. **Proposta**: o Ministério da Educação (agente) deve promover (ação) campanhas nas escolas e nas redes (meio) para orientar as famílias (finalidade), com palestras de psicólogos (detalhamento).'
      },
      fontes: [F.cartilha, F.querobolsa],
      flashcards: [
        { f: 'Texto dissertativo-argumentativo', v: 'Defende um ponto de vista com argumentos, sem narrar.' },
        { f: 'Tese', v: 'A posição que o texto defende.' },
        { f: 'Quantos parágrafos tem o modelo clássico?', v: 'Quatro: introdução, dois de desenvolvimento e conclusão.' },
        { f: 'Onde vai a proposta de intervenção?', v: 'Na conclusão (pode ser o último parágrafo).' },
        { f: 'Limite máximo de linhas', v: '30 linhas.' },
        { f: 'Fórmula de um bom argumento', v: 'Afirmação, explicação, exemplo ou dado e consequência.' },
        { f: 'O que fazer na conclusão?', v: 'Retomar a tese e apresentar a proposta de intervenção.' },
        { f: 'Tipo textual que o Enem NÃO pede', v: 'Narração, poema ou carta pessoal.' }
      ],
      quiz: [
        {
          q: 'O texto pedido na redação do Enem é do tipo',
          alt: ['dissertativo-argumentativo', 'narrativo', 'descritivo', 'poético', 'epistolar'],
          c: 0, dif: 'facil',
          exp: 'A prova exige um texto dissertativo-argumentativo em prosa.'
        },
        {
          q: 'A tese é',
          alt: ['o ponto de vista defendido no texto', 'o título da redação', 'a frase final do texto', 'um dado estatístico', 'a lista de referências'],
          c: 0, dif: 'facil',
          exp: 'A tese é a posição do autor, desenvolvida pelos argumentos.'
        },
        {
          q: 'O limite máximo de linhas da redação é de',
          alt: ['30', '20', '25', '40', '15'],
          c: 0, dif: 'facil',
          exp: 'O texto deve ter até 30 linhas.'
        },
        {
          q: 'No modelo clássico, a proposta de intervenção aparece',
          alt: ['na conclusão', 'na introdução', 'no primeiro desenvolvimento', 'no título', 'em qualquer lugar, sem diferença'],
          c: 0, dif: 'medio',
          exp: 'Tradicionalmente ela fecha o texto, retomando a tese.'
        },
        {
          q: 'Para tornar um argumento convincente, é recomendável',
          alt: ['explicá-lo e sustentá-lo com um exemplo ou dado', 'repetir a mesma ideia em outras palavras', 'apresentar apenas a opinião pessoal', 'usar um tom emotivo e narrativo', 'omitir as causas do problema'],
          c: 0, dif: 'medio',
          exp: 'Argumento sem explicação e prova é só afirmação.'
        },
        {
          q: 'Escrever "eu acho que o problema é grave" é pouco adequado porque',
          alt: ['enfraquece a objetividade do texto argumentativo', 'é proibido pela banca', 'zera a competência 5', 'altera o tipo textual para narração', 'reduz o número de linhas'],
          c: 0, dif: 'medio',
          exp: 'O ideal é a linguagem impessoal e argumentos, não impressões.'
        },
        {
          q: 'Em uma redação que apresenta uma história de um personagem e termina sem opinião, há problema de',
          alt: ['tipo textual', 'norma culta', 'proposta de intervenção apenas', 'coesão com pronomes', 'número de linhas'],
          c: 0, dif: 'dificil',
          exp: 'A narração foge do tipo dissertativo-argumentativo.'
        },
        {
          q: 'Qual sequência descreve melhor o desenvolvimento de um bom parágrafo argumentativo?',
          alt: ['ideia central, explicação, exemplo e retomada da tese', 'exemplo, narração e conclusão sem tese', 'proposta, resumo e agradecimento', 'dado solto, opinião e dúvida', 'definição, piada e despedida'],
          c: 0, dif: 'dificil',
          exp: 'O parágrafo argumentativo apresenta, explica, comprova e retoma a tese.'
        }
      ],
      pares: [
        { a: 'Tese', b: 'Ponto de vista defendido' },
        { a: 'Argumento', b: 'Razão que sustenta a tese' },
        { a: 'Introdução', b: 'Contexto e tese' },
        { a: 'Desenvolvimento', b: 'Argumentos explicados e comprovados' },
        { a: 'Conclusão', b: 'Retomada da tese e proposta' },
        { a: 'Limite do texto', b: '30 linhas' },
        { a: 'Linguagem', b: 'Impessoal e formal' },
        { a: 'Narração', b: 'Não é o tipo pedido' }
      ]
    },

    /* ============ 3. PROPOSTA DE INTERVENÇÃO ============ */
    {
      id: 'proposta-intervencao',
      nome: 'Proposta de intervenção (Competência 5)',
      incidencia: 'alta',
      resumo: 'A proposta precisa de cinco elementos: agente, ação, meio/modo, finalidade e detalhamento. É a competência mais fácil de dominar com treino.',
      conceitos: [
        {
          titulo: 'Os cinco elementos',
          texto: '1. **Agente**: quem vai agir (Ministério da Educação, mídia, escola, família, ONGs).\n2. **Ação**: o que será feito (criar, promover, fiscalizar, ampliar).\n3. **Meio/modo**: como será feito (por meio de campanhas, leis, parcerias).\n4. **Finalidade**: para quê (para reduzir, garantir, conscientizar).\n5. **Detalhamento**: explicação de um dos elementos acima (quem, como, onde, exemplo).\n\nQuanto mais elementos válidos, maior a nota: cinco elementos permitem o nível máximo.'
        },
        {
          titulo: 'Direitos humanos',
          texto: 'A proposta **não pode ferir os direitos humanos**: nada de violência, tortura, censura, pena de morte ou ideias discriminatórias. Se houver desrespeito, a **redação inteira pode ser anulada** (nota zero). Prefira soluções baseadas em educação, políticas públicas, fiscalização e diálogo.'
        },
        {
          titulo: 'Proposta nítida e ligada ao problema',
          texto: 'A solução precisa estar **ligada à discussão do texto**. Se você falou de falta de informação, proponha campanhas e aulas; se falou de falta de fiscalização, proponha fiscalização. Evite propostas vagas ("a sociedade deve se unir") e fórmulas decoradas que não conversam com o tema.'
        }
      ],
      pegadinhas: [
        'Usar agente **genérico demais** ("a sociedade", "todos nós").',
        'Esquecer a **finalidade** (o "para quê").',
        'Fazer proposta que **ofende direitos humanos** (ex.: "castigar fisicamente").',
        'Apresentar proposta **sem ligação** com os argumentos do texto.'
      ],
      dicas: [
        'Memorize a ordem: **Quem? Faz o quê? Como? Para quê? Exemplo?**',
        'Escolha agentes **específicos** e coerentes com a ação.',
        'Use o detalhamento para explicar o **meio** ou o agente com um exemplo concreto.'
      ],
      exemplo: {
        enunciado: 'Redija uma proposta para reduzir a evasão escolar entre jovens que trabalham.',
        resolucao: '**Agente**: o Ministério da Educação, em parceria com as secretarias estaduais. **Ação**: deve ampliar a oferta de cursos noturnos. **Meio**: por meio de financiamento e de aulas em formato híbrido. **Finalidade**: a fim de garantir a permanência dos estudantes. **Detalhamento**: com bolsas-auxílio para jovens que comprovem vínculo de trabalho.'
      },
      fontes: [F.cartilha, F.querobolsa],
      flashcards: [
        { f: 'Elemento 1 da proposta', v: 'Agente: quem executa a ação.' },
        { f: 'Elemento 2 da proposta', v: 'Ação: o que será feito.' },
        { f: 'Elemento 3 da proposta', v: 'Meio ou modo: como será feito.' },
        { f: 'Elemento 4 da proposta', v: 'Finalidade: o objetivo da ação.' },
        { f: 'Elemento 5 da proposta', v: 'Detalhamento: explicação ou exemplo de algum elemento.' },
        { f: 'O que acontece se a proposta violar direitos humanos?', v: 'A redação pode ser anulada (nota zero).' },
        { f: 'Exemplo de agente adequado', v: 'Ministério da Educação, escola, mídia, ONG.' },
        { f: 'Como a proposta deve se relacionar com o texto?', v: 'Deve resolver o problema discutido nos argumentos.' }
      ],
      quiz: [
        {
          q: 'Em "O governo federal deve criar campanhas...", o trecho "O governo federal" é o',
          alt: ['agente', 'meio', 'finalidade', 'detalhamento', 'tese'],
          c: 0, dif: 'facil',
          exp: 'O agente é quem executa a ação proposta.'
        },
        {
          q: 'Em "...a fim de reduzir a desigualdade", o trecho indica a',
          alt: ['finalidade', 'ação', 'tese', 'introdução', 'ironia'],
          c: 0, dif: 'facil',
          exp: 'Expressões como "a fim de" apontam o objetivo da ação.'
        },
        {
          q: 'Quantos elementos a proposta precisa apresentar para atingir a pontuação máxima?',
          alt: ['cinco', 'dois', 'três', 'quatro', 'seis'],
          c: 0, dif: 'facil',
          exp: 'Agente, ação, meio, finalidade e detalhamento.'
        },
        {
          q: 'Qual agente é mais adequado para uma proposta de educação?',
          alt: ['o Ministério da Educação', 'a sociedade', 'todos nós', 'as pessoas', 'alguém'],
          c: 0, dif: 'medio',
          exp: 'Agentes específicos são mais bem avaliados do que termos vagos.'
        },
        {
          q: 'Qual proposta desrespeita os direitos humanos e pode anular a redação?',
          alt: ['punir fisicamente os infratores', 'criar campanhas educativas', 'ampliar o acesso à saúde', 'fiscalizar as empresas', 'oferecer cursos gratuitos'],
          c: 0, dif: 'medio',
          exp: 'A violência física fere a dignidade humana, e a redação pode ser anulada.'
        },
        {
          q: 'O detalhamento serve para',
          alt: ['explicar um elemento da proposta', 'repetir a tese do texto', 'substituir a conclusão', 'corrigir erros gramaticais', 'citar um autor famoso'],
          c: 0, dif: 'medio',
          exp: 'Ele aprofunda o agente, a ação, o meio ou a finalidade.'
        },
        {
          q: 'A proposta "A sociedade deve se unir para resolver o problema" é fraca porque',
          alt: ['o agente é vago e faltam meio e detalhamento', 'cita direitos humanos em excesso', 'tem finalidade em excesso', 'é longa demais', 'usa vocabulário difícil'],
          c: 0, dif: 'dificil',
          exp: 'A proposta fica genérica e deixa de apresentar os elementos exigidos.'
        },
        {
          q: 'Em "...por meio de palestras nas escolas", o trecho indica',
          alt: ['o meio ou modo', 'o agente', 'a tese', 'a finalidade', 'o título'],
          c: 0, dif: 'dificil',
          exp: '"Por meio de" apresenta como a ação será feita.'
        }
      ],
      pares: [
        { a: 'Agente', b: 'Quem age' },
        { a: 'Ação', b: 'O que será feito' },
        { a: 'Meio/modo', b: 'Como será feito' },
        { a: 'Finalidade', b: 'Para quê' },
        { a: 'Detalhamento', b: 'Explicação ou exemplo' },
        { a: '"a fim de"', b: 'Introduz a finalidade' },
        { a: '"por meio de"', b: 'Introduz o meio' },
        { a: 'Violação dos direitos humanos', b: 'Pode anular a redação' }
      ]
    },

    /* ============ 4. COESÃO ============ */
    {
      id: 'coesao-conectivos',
      nome: 'Coesão: conectivos e retomadas (Competência 4)',
      incidencia: 'alta',
      resumo: 'Como ligar ideias dentro das frases, entre parágrafos e ao longo do texto, sem repetir palavras e sem exagerar nos conectivos.',
      conceitos: [
        {
          titulo: 'Conectivos por relação de sentido',
          texto: '- **Adição**: além disso, ademais, também.\n- **Oposição**: porém, contudo, no entanto, entretanto.\n- **Causa**: porque, visto que, uma vez que, já que.\n- **Consequência**: portanto, logo, assim, por conseguinte.\n- **Conclusão**: em suma, diante disso, dessa forma.\n- **Exemplo**: por exemplo, a saber.\n\nO conectivo deve **combinar com a ideia**: "porém" não indica causa.'
        },
        {
          titulo: 'Retomadas e referenciação',
          texto: 'Evite repetir a mesma palavra: use **pronomes** (isso, tal, esse), **sinônimos** ("o problema", "essa realidade") e **substituições** (a escola → "a instituição"). Cada parágrafo deve começar com **uma ligação** com o anterior, como "Em primeiro lugar", "Além disso" e "Portanto".'
        },
        {
          titulo: 'Evitar exagero e erro',
          texto: 'Conectivos demais soam artificiais. O ideal é **variar e usar com propósito**. Cuidado também com a **repetição de conectivo** ("além disso" em dois parágrafos), com "mas" no início de períodos e com uso de **"onde"** para algo que não seja lugar (troque por "em que" ou "no qual").'
        }
      ],
      pegadinhas: [
        'Usar **"onde"** para algo que não é lugar.',
        'Repetir o mesmo conectivo em todos os parágrafos.',
        'Usar "porém" quando a ideia é de **causa** ou **adição**.',
        'Começar parágrafo **sem nenhuma ligação** com o anterior.'
      ],
      dicas: [
        'Monte um "kit" com **2–3 conectivos por relação** e varie na prova.',
        'No início do 2º e 3º parágrafos, use conectivos que mostrem a **progressão** do texto.',
        'Releia perguntando: esse conectivo diz o que realmente quero dizer?'
      ],
      exemplo: {
        enunciado: 'Una as frases com o conectivo adequado: "O acesso à internet cresceu." / "Muitas escolas continuam sem conexão."',
        resolucao: 'Há uma ideia de **oposição**: "O acesso à internet cresceu; **no entanto**, muitas escolas continuam sem conexão."'
      },
      fontes: [F.cartilha, F.bechara],
      flashcards: [
        { f: 'Conectivo de adição', v: 'Além disso, ademais, também.' },
        { f: 'Conectivo de oposição', v: 'Porém, contudo, no entanto, entretanto.' },
        { f: 'Conectivo de causa', v: 'Porque, visto que, uma vez que, já que.' },
        { f: 'Conectivo de consequência', v: 'Portanto, logo, assim, por conseguinte.' },
        { f: 'Conectivo de conclusão', v: 'Em suma, diante disso, dessa forma.' },
        { f: 'Quando usar "onde"?', v: 'Somente para indicar lugar.' },
        { f: 'Para que servem os pronomes na coesão?', v: 'Retomar termos sem repeti-los (isso, tal, esse).' },
        { f: 'Por que variar conectivos?', v: 'Para evitar repetição e mostrar domínio de recursos coesivos.' }
      ],
      quiz: [
        {
          q: 'O conectivo "contudo" indica uma relação de',
          alt: ['oposição', 'causa', 'adição', 'conclusão', 'tempo'],
          c: 0, dif: 'facil',
          exp: '"Contudo" é conectivo de oposição, como "porém" e "no entanto".'
        },
        {
          q: 'Para indicar consequência, é adequado usar',
          alt: ['portanto', 'porém', 'embora', 'ainda que', 'apesar de'],
          c: 0, dif: 'facil',
          exp: '"Portanto" liga uma conclusão ou consequência à ideia anterior.'
        },
        {
          q: 'Em "O desemprego cresceu; ___, muitas famílias perderam renda", o espaço fica melhor preenchido com',
          alt: ['consequentemente', 'entretanto', 'embora', 'apesar disso', 'caso contrário'],
          c: 0, dif: 'medio',
          exp: 'A perda de renda é consequência do desemprego.'
        },
        {
          q: 'O uso do termo "onde" está adequado em',
          alt: ['A cidade onde nasci é pequena.', 'O livro onde li isso é antigo.', 'A lei onde se previa a multa foi revogada.', 'A situação onde ocorreu o erro foi grave.', 'Há momentos onde sinto medo.'],
          c: 0, dif: 'medio',
          exp: '"Onde" só indica lugar; nas demais, usa-se "em que" ou "no qual".'
        },
        {
          q: 'Substituir "a escola" por "a instituição" é um recurso de',
          alt: ['retomada por substituição', 'oposição', 'ironia', 'conclusão', 'exemplificação'],
          c: 0, dif: 'medio',
          exp: 'A retomada evita repetir a mesma palavra e mantém a coesão.'
        },
        {
          q: 'A expressão "visto que" introduz uma',
          alt: ['causa', 'oposição', 'finalidade', 'condição', 'exemplo'],
          c: 0, dif: 'medio',
          exp: '"Visto que" equivale a "porque": explica o motivo.'
        },
        {
          q: 'Qual prática prejudica a competência 4?',
          alt: ['repetir o mesmo conectivo em todos os parágrafos', 'usar pronomes para retomar ideias', 'variar conectivos conforme a relação', 'iniciar parágrafos com ligação ao anterior', 'usar sinônimos para evitar repetições'],
          c: 0, dif: 'dificil',
          exp: 'A repetição mostra repertório limitado de recursos coesivos.'
        },
        {
          q: 'Em "O problema é grave. ___ exige atenção do poder público", qual opção retoma melhor a ideia anterior?',
          alt: ['Isso', 'Onde', 'Porém', 'Embora', 'Caso'],
          c: 0, dif: 'dificil',
          exp: '"Isso" é pronome demonstrativo que retoma a frase anterior.'
        }
      ],
      pares: [
        { a: 'Porém / contudo', b: 'Oposição' },
        { a: 'Além disso', b: 'Adição' },
        { a: 'Portanto', b: 'Conclusão ou consequência' },
        { a: 'Visto que', b: 'Causa' },
        { a: 'Por exemplo', b: 'Exemplificação' },
        { a: 'Pronome', b: 'Retoma sem repetir' },
        { a: 'Onde', b: 'Só para lugar' },
        { a: 'Em suma', b: 'Fechamento do texto' }
      ]
    },

    /* ============ 5. REPERTÓRIO ============ */
    {
      id: 'repertorio-argumentacao',
      nome: 'Repertório sociocultural e argumentação',
      incidencia: 'alta',
      resumo: 'Repertório é o conhecimento que você traz para provar sua tese. Para valer pontos, precisa ser legítimo, pertinente ao tema e produtivo (usado no argumento).',
      conceitos: [
        {
          titulo: 'O que é repertório e quando ele vale',
          texto: 'Repertório sociocultural são **informações externas** ao texto motivador: leis, dados de órgãos como IBGE, filósofos, obras, filmes, fatos históricos. Para valer, deve ser:\n\n- **Legitimado**: de área do saber reconhecida (ciência, história, literatura).\n- **Pertinente**: relacionado ao tema.\n- **Produtivo**: usado para **sustentar um argumento**, não apenas citado.\n\nCopiar os textos motivadores **não** conta como repertório.'
        },
        {
          titulo: 'Fontes de repertório',
          texto: '- **Dados**: IBGE, ONU, OMS, Unicef (use com cuidado, só os que você sabe de fato).\n- **Leis**: Constituição Federal de 1988, ECA, Marco Civil da Internet.\n- **Filosofia/Sociologia**: Bauman (modernidade líquida), Foucault, Durkheim.\n- **História e Geografia**: fatos e processos.\n- **Obras**: livros, filmes, séries, música.\n\nPrefira poucas referências bem explicadas a muitas sem conexão.'
        },
        {
          titulo: 'Repertório de bolso',
          texto: '"Repertório de bolso" é a citação **pronta e genérica**, que serve para qualquer tema (por exemplo, a mesma frase de um autor encaixada em todo texto). A banca percebe quando **não se conecta ao tema**. Use um repertório que se conecte: explique **o que é**, **o que diz** e **como prova o seu argumento**.'
        }
      ],
      pegadinhas: [
        'Inventar **dados, números ou citações** que não conhece.',
        'Citar um autor sem **explicar a relação** com o tema.',
        'Usar o mesmo repertório **decorado** em qualquer tema.',
        'Achar que repertório vale por **quantidade**, e não por qualidade.'
      ],
      dicas: [
        'Monte um banco de repertório por **eixo** (educação, saúde, tecnologia, meio ambiente, desigualdade).',
        'Use a estrutura: **referência → o que diz → ligação com o problema**.',
        'Se não tiver certeza de um número, **não cite o número**; use a ideia geral.'
      ],
      exemplo: {
        enunciado: 'Como usar de forma produtiva a Constituição Federal em uma redação sobre o acesso à educação?',
        resolucao: 'A Constituição de 1988 garante a educação como **direito de todos** e dever do Estado. Contudo, a evasão escolar mostra que esse direito nem sempre é efetivo. Assim, a referência **sustenta o argumento** de que há distância entre a lei e a prática.'
      },
      fontes: [F.cartilha, F.folhape, F.querobolsa],
      flashcards: [
        { f: 'O que é repertório sociocultural?', v: 'Conhecimento externo (leis, dados, autores, fatos) que sustenta os argumentos.' },
        { f: 'Três características do repertório que vale pontos', v: 'Legitimado, pertinente ao tema e produtivo.' },
        { f: 'Repertório de bolso', v: 'Citação pronta e genérica, sem conexão real com o tema.' },
        { f: 'Copiar o texto motivador vale como repertório?', v: 'Não; as linhas copiadas são desconsideradas.' },
        { f: 'Como usar uma referência?', v: 'Citar, explicar o que diz e ligar ao argumento.' },
        { f: 'Exemplo de lei útil em redações', v: 'Constituição Federal de 1988.' },
        { f: 'Autor associado à "modernidade líquida"', v: 'Zygmunt Bauman.' },
        { f: 'Qualidade ou quantidade de repertório?', v: 'Qualidade: poucas referências bem desenvolvidas.' }
      ],
      quiz: [
        {
          q: 'Repertório sociocultural é',
          alt: ['conhecimento externo que sustenta argumentos', 'o conjunto de textos motivadores', 'a lista de conectivos do texto', 'a proposta de intervenção', 'o título da redação'],
          c: 0, dif: 'facil',
          exp: 'É o saber que o participante traz de fora para fortalecer seus argumentos.'
        },
        {
          q: 'Um repertório produtivo é aquele que',
          alt: ['é usado para sustentar um argumento', 'aparece só no final do texto', 'é copiado dos motivadores', 'contém muitos números', 'não se relaciona ao tema'],
          c: 0, dif: 'facil',
          exp: 'A referência precisa servir ao argumento, não ficar solta.'
        },
        {
          q: 'O "repertório de bolso" é problemático porque',
          alt: ['é genérico e não se conecta ao tema', 'cita leis demais', 'é sempre falso', 'tem muitas linhas', 'só usa fontes brasileiras'],
          c: 0, dif: 'medio',
          exp: 'A citação pronta e desconectada não demonstra compreensão do tema.'
        },
        {
          q: 'Qual atitude é mais segura ao citar dados?',
          alt: ['usar apenas os que se conhecem, sem inventar números', 'inventar uma porcentagem convincente', 'citar um autor sem saber o que ele diz', 'copiar números dos motivadores', 'omitir qualquer referência'],
          c: 0, dif: 'medio',
          exp: 'Informações falsas prejudicam a credibilidade e a pertinência.'
        },
        {
          q: 'A Constituição Federal de 1988 pode servir de repertório principalmente para',
          alt: ['mostrar direitos garantidos em lei', 'comprovar dados de pesquisas de 2025', 'substituir a proposta de intervenção', 'narrar uma história', 'enfeitar a introdução'],
          c: 0, dif: 'medio',
          exp: 'A Constituição é fonte legítima sobre direitos e deveres do Estado.'
        },
        {
          q: 'Qual item NÃO é repertório legitimado?',
          alt: ['uma frase de efeito sem autoria', 'um dado do IBGE', 'um artigo da Constituição', 'uma obra literária', 'um fato histórico'],
          c: 0, dif: 'dificil',
          exp: 'Frases sem autoria nem relação com saberes reconhecidos não contam como repertório legitimado.'
        },
        {
          q: 'Para o repertório ser produtivo, o participante deve',
          alt: ['explicar sua relação com o argumento', 'apenas citar o nome do autor', 'usar o mesmo em todas as provas', 'colocá-lo apenas na introdução', 'evitar contextualizar'],
          c: 0, dif: 'dificil',
          exp: 'Citar é pouco: é preciso interpretar e ligar ao tema.'
        },
        {
          q: 'Em relação ao repertório, é melhor',
          alt: ['poucas referências bem desenvolvidas', 'muitas citações sem explicação', 'apenas citar nomes famosos', 'copiar frases dos motivadores', 'evitar qualquer referência externa'],
          c: 0, dif: 'dificil',
          exp: 'A qualidade e a conexão com a tese valem mais que a quantidade.'
        }
      ],
      pares: [
        { a: 'Repertório legitimado', b: 'De área do saber reconhecida' },
        { a: 'Repertório pertinente', b: 'Relacionado ao tema' },
        { a: 'Repertório produtivo', b: 'Sustenta o argumento' },
        { a: 'Repertório de bolso', b: 'Genérico e decorado' },
        { a: 'Constituição de 1988', b: 'Fonte sobre direitos' },
        { a: 'IBGE', b: 'Fonte de dados do Brasil' },
        { a: 'Bauman', b: 'Modernidade líquida' },
        { a: 'Cópia dos motivadores', b: 'Não vale como repertório' }
      ]
    },

    /* ============ 6. NORMA CULTA ============ */
    {
      id: 'norma-culta',
      nome: 'Norma culta: erros que mais custam pontos (C1)',
      incidencia: 'alta',
      resumo: 'Os deslizes mais comuns em redações: concordância, crase, vírgula, ortografia, registro informal e estrutura de frases.',
      conceitos: [
        {
          titulo: 'Concordância, regência e crase',
          texto: '- **Concordância**: "As **crianças** precisam de proteção" (sujeito e verbo no plural). Cuidado com sujeito distante do verbo.\n- **Regência**: "assistir **ao** filme", "obedecer **à** lei", "preferir A **a** B".\n- **Crase**: use antes de palavra feminina quando houver preposição **a** + artigo **a**. Ex.: "Refiro-me **à** escola". Não use antes de verbos ou de palavras masculinas.'
        },
        {
          titulo: 'Vírgula e pontuação',
          texto: 'Use a vírgula para separar **elementos de uma lista**, **orações adjuntas** deslocadas, **apostos** e **conectivos** como "porém", "portanto" (entre vírgulas). **Nunca** separe sujeito e verbo com uma vírgula ("A educação, é um direito" ✗). Frases muito longas e sem pontuação prejudicam a clareza.'
        },
        {
          titulo: 'Registro formal e ortografia',
          texto: 'Evite **gírias, abreviações e marcas de oralidade** ("tá", "né", "a gente", "pra"). Atenção às confusões: **mal/mau**, **mas/mais**, **porque/por que/por quê/porquê**, **há/a**, **afim/a fim**. Sempre releia, procurando **troca de letras** e **acentuação**. Se estiver em dúvida, reescreva com palavras que domine.'
        }
      ],
      pegadinhas: [
        'Separar o **sujeito do verbo** com vírgula.',
        'Usar "**a gente**" e "**pra**" em texto formal.',
        'Trocar **mal** (oposto de bem) por **mau** (oposto de bom).',
        'Usar crase antes de **verbo** ou de palavra **masculina**.'
      ],
      dicas: [
        'Prefira **frases curtas e diretas**: elas reduzem os erros de sintaxe.',
        'Se tiver dúvida sobre uma palavra, troque por um **sinônimo seguro**.',
        'Reserve 5 minutos para uma **leitura final só de gramática**.'
      ],
      exemplo: {
        enunciado: 'Corrija: "Os jovens, precisam de oportunidades, pra que possam se desenvolver."',
        resolucao: '"Os jovens **precisam** de oportunidades **para que** possam se desenvolver." Foi retirada a **vírgula entre sujeito e verbo** e trocado "pra" por "para" (registro formal).'
      },
      fontes: [F.cartilha, F.bechara],
      flashcards: [
        { f: 'Mal x mau', v: 'Mal é o contrário de bem; mau é o contrário de bom.' },
        { f: 'Porque x por que', v: 'Porque explica (resposta); por que pergunta (pergunta).' },
        { f: 'Regência de "assistir" (ver)', v: 'Assistir ao filme (com a preposição a).' },
        { f: 'Regência de "preferir"', v: 'Preferir A a B.' },
        { f: 'Pode usar vírgula entre sujeito e verbo?', v: 'Não, em regra.' },
        { f: 'Quando usar crase?', v: 'Quando houver preposição a + artigo a (palavra feminina).' },
        { f: 'A gente x nós', v: 'No texto formal, prefira "nós".' },
        { f: 'Há x a', v: 'Há indica tempo passado; a indica distância ou tempo futuro.' }
      ],
      quiz: [
        {
          q: 'A frase com concordância adequada é',
          alt: ['As crianças precisam de proteção.', 'As crianças precisa de proteção.', 'As criança precisam de proteção.', 'As crianças precisam proteção.', 'A crianças precisam de proteção.'],
          c: 0, dif: 'facil',
          exp: 'O verbo concorda com o sujeito no plural.'
        },
        {
          q: 'Completa corretamente: "O aluno foi ___ escola pela manhã."',
          alt: ['à', 'a', 'há', 'as', 'ah'],
          c: 0, dif: 'facil',
          exp: 'Verbo de movimento "ir a" + artigo "a": usa-se crase.'
        },
        {
          q: 'Qual opção está de acordo com a norma culta?',
          alt: ['O mau uso da internet traz riscos.', 'O mal uso da internet traz riscos.', 'O mau-uso da internet trás riscos.', 'O mal-uso da internet trazem riscos.', 'O mal uso da internet traz risco.'],
          c: 0, dif: 'medio',
          exp: '"Mau" é o oposto de bom e vem antes do substantivo "uso".'
        },
        {
          q: 'A forma adequada é',
          alt: ['Preferimos estudar a trabalhar.', 'Preferimos mais estudar do que trabalhar.', 'Preferimos estudar do que trabalhar.', 'Preferimos estudar que trabalhar.', 'Preferimos estudar de que trabalhar.'],
          c: 0, dif: 'medio',
          exp: 'O verbo "preferir" rege "A a B".'
        },
        {
          q: 'Em qual opção a vírgula está incorreta?',
          alt: ['Os jovens, precisam de apoio.', 'Os jovens, porém, precisam de apoio.', 'Os jovens precisam de apoio, escola e saúde.', 'Apesar disso, os jovens precisam de apoio.', 'Os jovens, que estudam, precisam de apoio.'],
          c: 0, dif: 'medio',
          exp: 'Não se separa o sujeito do verbo com vírgula.'
        },
        {
          q: 'Qual sentença usa registro formal?',
          alt: ['Os jovens necessitam de oportunidades.', 'A gente precisa de oportunidades.', 'Os jovens tão precisando de oportunidades.', 'Os jovens precisam pra ter oportunidades.', 'Os jovens, né, precisam de oportunidades.'],
          c: 0, dif: 'dificil',
          exp: 'As demais apresentam marcas de oralidade ou gíria.'
        },
        {
          q: 'Em "Não sei ___ ele desistiu", completa-se com',
          alt: ['por que', 'porque', 'porquê', 'por quê', 'pôr que'],
          c: 0, dif: 'dificil',
          exp: 'Pergunta indireta: "por que" (= por qual motivo).'
        },
        {
          q: 'Em "Assisti ___ filme ontem", o uso correto é',
          alt: ['ao', 'o', 'à', 'a', 'há'],
          c: 0, dif: 'dificil',
          exp: 'Assistir (ver) pede a preposição "a": "ao filme".'
        }
      ],
      pares: [
        { a: 'Mal', b: 'Contrário de bem' },
        { a: 'Mau', b: 'Contrário de bom' },
        { a: 'Crase', b: 'Preposição a + artigo a' },
        { a: 'Concordância', b: 'Sujeito e verbo combinam' },
        { a: 'Regência', b: 'Relação verbo e preposição' },
        { a: 'Registro formal', b: 'Sem gírias nem oralidade' },
        { a: 'Por que (pergunta)', b: 'Por qual motivo' },
        { a: 'Vírgula', b: 'Não separa sujeito e verbo' }
      ]
    },

    /* ============ 7. TEMA E ZERO ============ */
    {
      id: 'tema-e-anulacao',
      nome: 'Tema, textos motivadores e o que zera a redação',
      incidencia: 'alta',
      resumo: 'Como ler a proposta, delimitar o tema, evitar fuga e conhecer as situações que anulam a redação. Inclui como usar o tempo de prova.',
      conceitos: [
        {
          titulo: 'Como ler a proposta',
          texto: 'A proposta traz o **tema** (um recorte de um assunto maior), **textos motivadores** e as **instruções**. Ação passo a passo:\n\n1. Sublinhe as **palavras-chave** do tema.\n2. Leia os motivadores para entender **contexto e dados**, sem copiar.\n3. Defina o **problema** e a **tese**.\n4. Planeje os argumentos antes de escrever.\n\nTratar apenas o assunto geral (tangenciar o tema) reduz muito a nota. Responda ao **recorte exato**.'
        },
        {
          titulo: 'O que anula (zera) a redação',
          texto: 'Entre as situações de **nota zero**:\n\n- **Fuga total ao tema**.\n- Texto com **até 7 linhas** (insuficiente).\n- **Parte deliberadamente desconectada** do tema.\n- **Identificação** do candidato no texto (nome, assinatura).\n- Texto escrito **em língua estrangeira** ou ilegível.\n- **Desrespeito aos direitos humanos**, quando a banca assim classifica.\n- Texto em branco.\n\nAtenção: **fugir do tipo textual** (por exemplo, escrever um poema) também prejudica seriamente a nota.'
        },
        {
          titulo: 'Cópia e tempo de prova',
          texto: 'Linhas **copiadas dos textos motivadores** são **descontadas** da contagem. Reescreva com suas palavras. Sobre o tempo: a redação cai no **1º dia**. Reserve cerca de **1h30** para ela: 10 min planejamento, 50–60 min escrever, 10–15 min revisar e passar a limpo (se manuscrito), sem deixar para o final.'
        }
      ],
      pegadinhas: [
        'Escrever sobre o **assunto geral** e ignorar o recorte do tema.',
        'Copiar trechos dos **textos motivadores**.',
        'Colocar **nome ou assinatura** no corpo do texto.',
        'Deixar a redação para os **últimos minutos**.'
      ],
      dicas: [
        'Sublinhe as **palavras-chave** do tema e confira-as no final.',
        'Escreva a tese em **uma frase** e não saia dela.',
        'Faça um **rascunho** enxuto antes de escrever a versão final.'
      ],
      exemplo: {
        enunciado: 'Tema: "Desafios para a valorização da leitura no Brasil". O que NÃO pode acontecer?',
        resolucao: 'Escrever apenas sobre "educação em geral" (**tangenciar**) ou sobre "a importância da escola" sem tratar da **leitura** é erro de recorte. Também é incorreto copiar frases do texto motivador ou assinar o texto.'
      },
      fontes: [F.cartilha, F.folhape],
      flashcards: [
        { f: 'O que é fugir do tema?', v: 'Não desenvolver o assunto proposto; leva a nota zero em casos totais.' },
        { f: 'Tangenciar o tema', v: 'Abordar o assunto geral sem tratar o recorte; reduz a nota.' },
        { f: 'Texto insuficiente', v: 'Até 7 linhas: a redação é anulada.' },
        { f: 'Posso me identificar no texto?', v: 'Não; identificação fora do campo próprio anula a redação.' },
        { f: 'Posso copiar os motivadores?', v: 'Não; as linhas copiadas são descontadas.' },
        { f: 'Texto em língua estrangeira', v: 'Anula a redação.' },
        { f: 'Quando cai a redação?', v: 'No primeiro dia de prova.' },
        { f: 'Primeiro passo ao ler a proposta', v: 'Sublinhar as palavras-chave do tema.' }
      ],
      quiz: [
        {
          q: 'Fugir totalmente do tema proposto resulta em',
          alt: ['redação com nota zero', 'perda apenas de 40 pontos', 'desconto na C1', 'acréscimo de uma linha', 'nova avaliação gratuita'],
          c: 0, dif: 'facil',
          exp: 'Fuga ao tema anula a redação.'
        },
        {
          q: 'Colocar o nome do candidato no corpo do texto',
          alt: ['anula a redação', 'aumenta a nota', 'não tem efeito', 'vale como repertório', 'é obrigatório'],
          c: 0, dif: 'facil',
          exp: 'Identificação fora do local apropriado anula a redação.'
        },
        {
          q: 'Os trechos copiados dos textos motivadores',
          alt: ['são desconsiderados na contagem', 'valem como repertório', 'aumentam a nota da C2', 'são exigidos pela banca', 'substituem a proposta'],
          c: 0, dif: 'medio',
          exp: 'As linhas copiadas não contam e podem comprometer o texto.'
        },
        {
          q: 'Tangenciar o tema significa',
          alt: ['tratar o assunto geral sem o recorte', 'copiar o tema da prova', 'deixar a folha em branco', 'escrever o texto em verso', 'usar língua estrangeira'],
          c: 0, dif: 'medio',
          exp: 'O texto tangencia quando fala do tema amplo, mas ignora o recorte.'
        },
        {
          q: 'Um texto com apenas 5 linhas é considerado',
          alt: ['insuficiente e recebe nota zero', 'excelente pela objetividade', 'ideal para a C5', 'regular', 'válido se tiver proposta'],
          c: 0, dif: 'medio',
          exp: 'Até 7 linhas manuscritas, o texto é insuficiente e é anulado.'
        },
        {
          q: 'Qual é o melhor primeiro passo diante do tema?',
          alt: ['sublinhar as palavras-chave e definir o recorte', 'copiar o primeiro motivador', 'escrever o primeiro parágrafo sem plano', 'decorar um texto pronto', 'contar as linhas'],
          c: 0, dif: 'dificil',
          exp: 'Entender o recorte evita fuga e tangenciamento.'
        },
        {
          q: 'Sobre o planejamento, é recomendável',
          alt: ['reservar tempo para rascunho, escrita e revisão', 'escrever apenas nos últimos 10 minutos', 'pular o planejamento para ganhar tempo', 'usar o tempo todo na introdução', 'evitar a revisão'],
          c: 0, dif: 'dificil',
          exp: 'Dividir o tempo reduz erros e aumenta a qualidade.'
        },
        {
          q: 'Escrever um poema no lugar do texto dissertativo-argumentativo',
          alt: ['foge ao tipo textual e prejudica a nota', 'é aceito se for criativo', 'garante o repertório', 'melhora a C4', 'dispensa a proposta'],
          c: 0, dif: 'dificil',
          exp: 'O Enem exige um texto dissertativo-argumentativo em prosa.'
        }
      ],
      pares: [
        { a: 'Fuga ao tema', b: 'Anula a redação' },
        { a: 'Tangenciamento', b: 'Reduz a nota' },
        { a: 'Texto insuficiente', b: 'Até 7 linhas' },
        { a: 'Cópia dos motivadores', b: 'Linhas descontadas' },
        { a: 'Identificação no texto', b: 'Anula a redação' },
        { a: 'Palavras-chave', b: 'Delimitam o tema' },
        { a: 'Textos motivadores', b: 'Dão contexto, não são para copiar' },
        { a: 'Dia da redação', b: 'Primeiro dia de prova' }
      ]
    }
  ]);
})();
