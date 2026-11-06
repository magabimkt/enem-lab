/* Língua Portuguesa e Interpretação — Linguagens, Códigos e suas Tecnologias.
   Fontes de incidência: levantamentos de cursinhos (aproximados) + Matriz de Referência do INEP. */
(function () {
  var F = {
    inep: { titulo: 'INEP — Matrizes de Referência do Enem (competências e habilidades de Linguagens)', url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem' },
    critica: { titulo: 'A Crítica (MS) — Enem 2026: professores indicam o que revisar na prova de Linguagens', url: 'https://acritica.net/educacao/enem-2026-professores-indicam-o-que-revisar-para-a-prova-de-linguagens/' },
    aprova: { titulo: 'Aprova Total — Linguagens no Enem: conteúdos e dicas', url: 'https://aprovatotal.com.br/linguagens-enem/' },
    estrategia: { titulo: 'Estratégia Vestibulares — Assuntos que mais caem no Enem (análise de 1998 a 2020)', url: 'https://vestibulares.estrategia.com/portal/enem-e-vestibulares/enem/assuntos-que-mais-caem-no-enem/' }
  };

  ENEM.temas('portugues', [
    /* ============ 1. GÊNEROS TEXTUAIS ============ */
    {
      id: 'generos-textuais',
      nome: 'Gêneros textuais e suas finalidades',
      incidencia: 'alta',
      resumo: 'É o assunto que mais aparece em Linguagens: mais de um terço das questões pede que você reconheça o gênero, a finalidade e o público do texto (charge, notícia, post, canção, artigo de opinião...).',
      conceitos: [
        {
          titulo: 'O que é um gênero textual',
          texto: 'Gêneros são "moldes" de texto que usamos em situações reais de comunicação. Cada um tem **finalidade**, **público**, **suporte** (onde circula) e uma **estrutura** típica.\n\nEx.: uma mensagem de WhatsApp para o grupo da turma e um e-mail para a coordenação falam do mesmo assunto, mas mudam a linguagem, o tom e o tamanho, porque a situação é outra.\n\nNo ENEM, o comando da questão muitas vezes já "entrega" o gênero. Leia o comando antes do texto.'
        },
        {
          titulo: 'Jornalísticos: informar x opinar',
          texto: '- **Notícia / reportagem**: informam. Linguagem objetiva, 3ª pessoa, fatos, fontes citadas (quem, o quê, quando, onde, como, por quê).\n- **Artigo de opinião**: defende um ponto de vista com argumentos. Tem tese, assinatura de quem escreve e verbos/adjetivos de avaliação.\n- **Editorial**: opinião do **veículo** (não de uma pessoa); geralmente não é assinado.\n- **Resenha / crítica**: descreve e avalia uma obra (filme, livro, jogo).\n- **Carta do leitor / carta aberta**: o leitor reage a algo ou se dirige a alguém publicamente.'
        },
        {
          titulo: 'Humor e persuasão: charge, cartum, tirinha, propaganda',
          texto: '- **Charge**: humor crítico sobre um fato **atual** (política, sociedade). Só faz sentido se você conhece o contexto.\n- **Cartum**: humor crítico **atemporal**, sem ligação com um fato específico.\n- **Tirinha**: sequência curta de quadros, quase sempre com virada final humorística.\n- **Propaganda / campanha**: quer convencer ou mudar comportamento (comprar, doar, vacinar). Observe imagem, slogan e a quem se dirige.\n\nNesses gêneros, o sentido nasce da **soma** entre texto verbal e não verbal (cores, expressão dos personagens, enquadramento).'
        },
        {
          titulo: 'Gêneros digitais e literários',
          texto: '- **Post, meme, thread, comentário, vídeo curto**: circulam em redes, misturam texto, imagem e som e dependem de repertório compartilhado (o meme só funciona se você "conhece a piada").\n- **Crônica**: narra ou comenta o cotidiano com tom leve, subjetivo e muitas vezes irônico.\n- **Conto, poema, letra de canção**: função estética; a linguagem chama atenção para si mesma.\n- **Verbete, infográfico, bula, manual**: informam ou instruem de forma objetiva e esquemática.'
        }
      ],
      pegadinhas: [
        'Confundir **charge** (fato atual, depende do contexto) com **cartum** (humor atemporal).',
        'Chamar de "notícia" um texto que traz opinião: se há tese e adjetivos de julgamento, é artigo de opinião ou editorial.',
        'Responder pelo **assunto** quando a questão pergunta pela **finalidade** (informar, persuadir, instruir, entreter).',
        'Ignorar o **suporte e a data**: o mesmo texto muda de sentido se foi publicado em jornal, rede social ou panfleto de campanha.'
      ],
      dicas: [
        'Antes de ler o texto, leia o **comando**: ele costuma dizer o gênero ou o que se espera que você identifique.',
        'Pergunte sempre: "quem fala, para quem, para quê e onde isso circula?".',
        'Em charge e propaganda, descreva a imagem em uma frase **antes** de ler as alternativas.'
      ],
      exemplo: {
        enunciado: 'Um texto assinado por um professor afirma: "A escola deve ensinar educação financeira, pois jovens endividados tornam-se adultos vulneráveis". Qual é o gênero e a finalidade predominantes?',
        resolucao: 'Há **tese** ("a escola deve ensinar educação financeira") e **argumento** ("pois jovens endividados..."), com autoria identificada.\nGênero: **artigo de opinião**. Finalidade: **persuadir** o leitor a aceitar um ponto de vista.\nSe o texto apenas relatasse que "a escola X incluiu a disciplina", seria notícia (informar).'
      },
      fontes: [F.inep, F.critica, F.aprova, { titulo: 'MARCUSCHI, L. A. Gêneros textuais: definição e funcionalidade (obra de referência)', url: '' }],
      flashcards: [
        { f: 'Qual a diferença entre charge e cartum?', v: 'Charge critica um **fato atual** e depende do contexto. Cartum é humor crítico **atemporal**.' },
        { f: 'Quem assina o editorial?', v: 'Ninguém, em geral: expressa a opinião do **veículo** de comunicação, não de uma pessoa.' },
        { f: 'Qual a marca principal de uma notícia?', v: 'Linguagem objetiva, fatos e fontes, 3ª pessoa (quem, o quê, quando, onde, como, por quê).' },
        { f: 'Qual a marca principal de um artigo de opinião?', v: 'Tese defendida com argumentos, geralmente com autoria e avaliação do autor.' },
        { f: 'O que é a finalidade de um texto?', v: 'O objetivo de quem escreve: informar, persuadir, instruir, entreter, expressar sentimentos.' },
        { f: 'O que é suporte de um texto?', v: 'O meio em que ele circula (jornal, rede social, outdoor, livro, podcast).' },
        { f: 'Para que serve uma resenha?', v: 'Descrever e **avaliar** uma obra (filme, livro, série), orientando o público.' },
        { f: 'Como o sentido surge em uma propaganda?', v: 'Da combinação entre texto verbal (slogan) e não verbal (imagem, cores), direcionada a um público-alvo.' }
      ],
      quiz: [
        {
          q: 'Em um perfil de rede social, um jovem publica: "Se você acha que estudar na véspera funciona, o seu cérebro tem uma notícia para dar". O texto usa humor para criticar um hábito dos colegas. A finalidade predominante é',
          alt: ['persuadir o leitor a mudar um comportamento usando humor', 'informar com neutralidade os resultados de uma pesquisa', 'instruir o leitor com passos para organizar o estudo', 'relatar um fato ocorrido durante uma prova', 'registrar um diário íntimo sem destinatário'],
          c: 0, dif: 'facil',
          exp: 'O autor critica um hábito e quer que o leitor repense a atitude, e o humor é o recurso para isso. Não há objetividade jornalística nem passo a passo; é persuasão com tom bem-humorado.'
        },
        {
          q: 'Um texto de jornal apresenta, sem identificar autoria, a posição do próprio veículo sobre a falta de transporte público noturno, defendendo a ampliação das linhas. Esse texto é um',
          alt: ['editorial', 'cartum', 'verbete', 'reportagem policial', 'relato de viagem'],
          c: 0, dif: 'facil',
          exp: 'Editorial é o gênero em que o veículo, sem assinatura individual, defende uma posição institucional sobre um tema.'
        },
        {
          q: 'Uma imagem mostra um prefeito entregando uma enorme conta de luz a um cidadão minúsculo, com o título "Reajuste de ontem". O humor só é compreendido por quem sabe do aumento anunciado na véspera. Esse gênero é uma',
          alt: ['charge, pois critica um fato atual', 'bula, pois orienta o consumidor', 'resenha, pois avalia uma obra', 'fábula, pois traz uma moral atemporal', 'notícia, pois relata dados com objetividade'],
          c: 0, dif: 'facil',
          exp: 'A dependência do contexto imediato (o reajuste anunciado na véspera) caracteriza a charge. Se o humor fosse atemporal, seria cartum.'
        },
        {
          q: 'Observe o trecho: "O filme acerta ao mostrar a rotina de entregadores de aplicativo, mas escorrega no final apressado. Vale a ida ao cinema". Pelo conjunto de marcas, trata-se de',
          alt: ['uma resenha crítica', 'uma notícia de cultura', 'uma entrevista pingue-pongue', 'um manual de instruções', 'uma carta de apresentação'],
          c: 0, dif: 'medio',
          exp: 'Há descrição da obra e avaliação com orientação ao leitor ("vale a ida"), o que caracteriza a resenha. Notícia não faria julgamentos de valor.'
        },
        {
          q: 'Uma campanha mostra um adolescente ao celular, com o slogan "Seu amigo precisa de você, não só de curtida". O texto busca principalmente',
          alt: ['sensibilizar o público para valorizar o contato real e o apoio emocional', 'divulgar o lançamento de um novo aplicativo', 'ensinar a usar as configurações de privacidade', 'comprovar cientificamente o efeito das redes sociais', 'narrar a biografia de uma celebridade'],
          c: 0, dif: 'medio',
          exp: 'O slogan apela à emoção e ao comportamento do público jovem, típico de campanha de conscientização. Não informa dados científicos nem ensina uma técnica.'
        },
        {
          q: 'Um texto afirma: "Segundo o IBGE, 9 em cada 10 domicílios têm acesso à internet, mas a qualidade da conexão varia entre regiões". Que marcas indicam um texto informativo e não opinativo?',
          alt: ['Citação de fonte e dados, sem juízo de valor explícito', 'Uso de verbos no imperativo para convencer', 'Presença de humor e ironia', 'Linguagem poética com rimas', 'Primeira pessoa e relato pessoal'],
          c: 0, dif: 'medio',
          exp: 'Fonte identificada e dado estatístico apresentados de forma objetiva, sem adjetivos de avaliação, são marcas do texto informativo.'
        },
        {
          q: 'Um jovem escreve no jornal da cidade: "Prezada prefeitura, a iluminação da praça do bairro está apagada há dois meses. Peço providências". Pelo conjunto de elementos (destinatário específico, reivindicação, circulação pública), o gênero é',
          alt: ['carta aberta de reivindicação', 'crônica de humor', 'verbete de dicionário', 'cartum', 'reportagem investigativa'],
          c: 0, dif: 'dificil',
          exp: 'O texto se dirige a um destinatário (prefeitura), formula um pedido e circula em espaço público, características da carta aberta. Crônica e reportagem não têm esse destinatário e esse pedido direto.'
        },
        {
          q: 'Dois textos tratam do mesmo fato: um empresário fez doações a uma escola. O primeiro diz "Empresário doa 200 computadores a escola municipal". O segundo diz "Gesto louvável: empresário mostra o caminho que todos devem seguir". A diferença essencial entre eles é que',
          alt: ['o primeiro informa e o segundo expressa avaliação e opinião', 'o primeiro usa linguagem poética e o segundo, técnica', 'ambos têm a mesma finalidade, só mudam as palavras', 'o segundo é mais objetivo que o primeiro', 'o primeiro é publicidade e o segundo é notícia'],
          c: 0, dif: 'dificil',
          exp: 'O título informativo relata o fato de forma objetiva. O segundo traz adjetivo avaliativo ("louvável") e prescrição ("todos devem seguir"), marcas de opinião.'
        }
      ],
      pares: [
        { a: 'Charge', b: 'Humor crítico sobre fato atual' },
        { a: 'Cartum', b: 'Humor crítico atemporal' },
        { a: 'Editorial', b: 'Opinião do próprio veículo' },
        { a: 'Artigo de opinião', b: 'Tese e argumentos do autor' },
        { a: 'Notícia', b: 'Informa fatos de modo objetivo' },
        { a: 'Resenha', b: 'Descreve e avalia uma obra' },
        { a: 'Crônica', b: 'Comenta o cotidiano com subjetividade' },
        { a: 'Suporte', b: 'Meio em que o texto circula' }
      ]
    },

    /* ============ 2. FUNÇÕES DA LINGUAGEM ============ */
    {
      id: 'funcoes-linguagem',
      nome: 'Funções da linguagem',
      incidencia: 'alta',
      resumo: 'Cai praticamente todo ano. Cada função destaca um elemento da comunicação: emissor, receptor, mensagem, código, canal ou contexto.',
      conceitos: [
        {
          titulo: 'Os seis elementos da comunicação',
          texto: 'Para cada função existe um elemento em foco (modelo de Roman Jakobson):\n\n- **Emissor**: quem fala.\n- **Receptor**: quem recebe.\n- **Mensagem**: o conteúdo e a forma do que é dito.\n- **Código**: a língua ou sistema de signos usado.\n- **Canal**: o meio físico/psicológico do contato (voz, tela, papel).\n- **Contexto (referente)**: o assunto, a realidade a que a mensagem se refere.'
        },
        {
          titulo: 'As seis funções e como reconhecê-las',
          texto: '- **Emotiva (expressiva)**: foco no **emissor**. 1ª pessoa, sentimentos, exclamações. "Estou muito ansioso pelo resultado!"\n- **Conativa (apelativa)**: foco no **receptor**. Imperativo, vocativo, convencimento. "Venha, aproveite e compre agora!"\n- **Referencial (informativa)**: foco no **contexto**. 3ª pessoa, dados, objetividade. "A prova terá 180 questões."\n- **Poética**: foco na **mensagem**. Rima, ritmo, jogo de sons, imagens.\n- **Fática**: foco no **canal**. Testar ou manter o contato: "Alô?", "Está me ouvindo?", "Né?"\n- **Metalinguística**: foco no **código**. A linguagem fala da própria linguagem (dicionário, poema sobre poesia, gramática).'
        },
        {
          titulo: 'Funções misturadas: qual é a predominante?',
          texto: 'Quase nenhum texto tem uma função só. O ENEM pede a **predominante**. Para decidir:\n\n1. Qual é o objetivo central do texto (expressar, convencer, informar, chamar atenção para a forma, manter contato, explicar o código)?\n2. Que marcas gramaticais aparecem (pessoa verbal, imperativo, adjetivos, rima, interrogações de contato)?\n\nEx.: uma propaganda pode informar (referencial), mas se o objetivo é levar o leitor a comprar, a predominante é a **conativa**.'
        }
      ],
      pegadinhas: [
        'Marcar **referencial** só porque há informação: se o texto manda, pede ou convence, a predominante é a **conativa**.',
        'Confundir **emotiva** (foco em quem fala, sentimentos) com **poética** (foco na construção da mensagem).',
        'Chamar de **metalinguística** qualquer texto "sobre linguagem": é preciso que a **própria linguagem** seja usada para falar de si (ex.: um poema que fala sobre fazer poemas).',
        'Esquecer que a função **fática** não carrega conteúdo: ela só abre, mantém ou testa o canal.'
      ],
      dicas: [
        'Memorize o par **função → foco**: emotiva/emissor, conativa/receptor, referencial/contexto, poética/mensagem, fática/canal, metalinguística/código.',
        'Procure a **marca gramatical**: 1ª pessoa (emotiva), imperativo/vocativo (conativa), 3ª pessoa e dados (referencial).',
        'Em letras de música e poemas, a poética quase sempre aparece, mas confira se há outra predominante.'
      ],
      exemplo: {
        enunciado: 'Em um grupo de estudos, alguém escreve no áudio: "Oi, tá me ouvindo? O som tá cortando aí. Alô?". Qual função predomina?',
        resolucao: 'O foco é **testar o canal** de comunicação (se o áudio está funcionando). Predomina a função **fática**.'
      },
      fontes: [F.inep, F.critica, { titulo: 'JAKOBSON, R. Linguística e comunicação (obra de referência para as funções da linguagem)', url: '' }],
      flashcards: [
        { f: 'Função emotiva: qual o foco e a marca típica?', v: 'Foco no **emissor**. 1ª pessoa, sentimentos, exclamações.' },
        { f: 'Função conativa: qual o foco e a marca típica?', v: 'Foco no **receptor**. Imperativo, vocativo, apelo ao leitor.' },
        { f: 'Função referencial: qual o foco e a marca típica?', v: 'Foco no **contexto**. 3ª pessoa, dados, objetividade.' },
        { f: 'Função poética: qual o foco?', v: 'A **mensagem** em si: ritmo, rima, sonoridade, imagens.' },
        { f: 'Função fática: qual o foco?', v: 'O **canal**: abrir, manter ou testar o contato ("alô?", "tá me ouvindo?").' },
        { f: 'Função metalinguística: qual o foco?', v: 'O **código**: a linguagem falando sobre a própria linguagem.' },
        { f: 'O que fazer quando há mais de uma função no texto?', v: 'Identificar o **objetivo central** e escolher a predominante.' },
        { f: 'Quem propôs o modelo das seis funções da linguagem?', v: 'Roman Jakobson.' }
      ],
      quiz: [
        {
          q: 'Um aluno publica: "Estou tão feliz que mal consigo respirar! Passei no simulado!". A função da linguagem predominante é',
          alt: ['emotiva', 'conativa', 'referencial', 'metalinguística', 'fática'],
          c: 0, dif: 'facil',
          exp: 'O foco está no emissor, com 1ª pessoa, exclamações e expressão de sentimento. É a função emotiva.'
        },
        {
          q: 'Em um cartaz da campanha de vacinação lê-se: "Atualize sua carteirinha. Procure o posto mais próximo!". A função predominante é',
          alt: ['conativa', 'poética', 'emotiva', 'metalinguística', 'fática'],
          c: 0, dif: 'facil',
          exp: 'Os verbos no imperativo (atualize, procure) visam levar o receptor a agir, marca da função conativa.'
        },
        {
          q: 'No trecho "Segundo a Organização Mundial da Saúde, adultos devem praticar ao menos 150 minutos de atividade física moderada por semana", prevalece a função',
          alt: ['referencial', 'emotiva', 'conativa', 'poética', 'fática'],
          c: 0, dif: 'facil',
          exp: 'Há informação objetiva sobre a realidade, em 3ª pessoa, com fonte. Isso é função referencial.'
        },
        {
          q: 'Em um verbete de dicionário lê-se: "Metáfora: figura de linguagem que consiste na comparação implícita entre dois elementos". O uso da linguagem para explicar um termo da própria língua revela função',
          alt: ['metalinguística', 'fática', 'emotiva', 'conativa', 'referencial apenas'],
          c: 0, dif: 'medio',
          exp: 'O código (a língua) é o assunto do texto: a linguagem explica a própria linguagem. É a metalinguagem.'
        },
        {
          q: 'Em "Cantar é preciso, viver não é preciso / cantiga de sino que só ressoa e só soa", a atenção do leitor é desviada para a sonoridade das palavras e para o jogo de sentidos. A função predominante é',
          alt: ['poética', 'referencial', 'conativa', 'fática', 'emotiva'],
          c: 0, dif: 'medio',
          exp: 'O foco recai sobre a construção da mensagem (repetição de sons, paralelismo, jogo de sentidos), traço da função poética.'
        },
        {
          q: 'Durante uma chamada de vídeo, a professora pergunta: "Pessoal, estão me vendo? Está dando para ouvir direito?". Essa fala tem como objetivo principal',
          alt: ['verificar se o canal de comunicação está funcionando', 'convencer os alunos a participar', 'informar um dado da disciplina', 'explicar o significado de uma palavra', 'expressar um sentimento pessoal'],
          c: 0, dif: 'medio',
          exp: 'Testar áudio e vídeo é cuidar do canal, o que define a função fática.'
        },
        {
          q: 'Uma propaganda traz a frase: "Nosso curso tem 120 aulas e certificado. Garanta já a sua vaga!". Há informações, mas a função predominante é a conativa porque',
          alt: ['o objetivo final é induzir o leitor a agir, e o imperativo evidencia isso', 'o texto está em 3ª pessoa e é impessoal', 'há rimas e jogos de sonoridade', 'a linguagem é usada para explicar o código da língua', 'o foco é o sentimento do emissor'],
          c: 0, dif: 'dificil',
          exp: 'A informação (120 aulas, certificado) está a serviço de convencer. O imperativo "garanta" mostra que o foco é o receptor.'
        },
        {
          q: 'Um poema inicia assim: "Escrever um poema é lapidar o silêncio, é cavar a palavra até o osso". O texto fala da criação poética usando recursos poéticos. As funções predominantes são',
          alt: ['poética e metalinguística', 'fática e conativa', 'referencial e emotiva', 'conativa e referencial', 'fática e emotiva'],
          c: 0, dif: 'dificil',
          exp: 'O poema trabalha a linguagem de forma criativa (poética) e tem como tema o próprio fazer poético (metalinguística).'
        }
      ],
      pares: [
        { a: 'Emotiva', b: 'Foco no emissor' },
        { a: 'Conativa', b: 'Foco no receptor' },
        { a: 'Referencial', b: 'Foco no contexto' },
        { a: 'Poética', b: 'Foco na mensagem' },
        { a: 'Fática', b: 'Foco no canal' },
        { a: 'Metalinguística', b: 'Foco no código' },
        { a: 'Imperativo', b: 'Marca da função conativa' },
        { a: '"Alô, tá me ouvindo?"', b: 'Exemplo de função fática' }
      ]
    },

    /* ============ 3. VARIAÇÃO LINGUÍSTICA ============ */
    {
      id: 'variacao-linguistica',
      nome: 'Variação linguística e preconceito linguístico',
      incidencia: 'alta',
      resumo: 'A língua muda conforme região, grupo social, situação e época. O ENEM cobra o respeito às variedades e a adequação da linguagem a cada contexto.',
      conceitos: [
        {
          titulo: 'Os quatro tipos de variação',
          texto: '- **Geográfica (diatópica)**: regiões. "Macaxeira", "aipim" e "mandioca" nomeiam a mesma raiz; o "r" do interior paulista é diferente do carioca.\n- **Social (diastrática)**: grupos, escolaridade, idade, profissão. Gírias de jovens, jargões de médicos e de gamers.\n- **Situacional (diafásica)**: grau de formalidade. Você fala diferente em uma entrevista de emprego e em um grupo de amigos.\n- **Histórica (diacrônica)**: o tempo. "Vossa mercê" virou "você" e "vc".'
        },
        {
          titulo: 'Norma-padrão, norma culta e variedades populares',
          texto: 'A **norma-padrão** é um modelo idealizado, descrito em gramáticas. A **norma culta** é o uso real de pessoas escolarizadas em situações formais. As **variedades populares** são tão legítimas quanto qualquer outra: têm regras próprias e coerentes.\n\nNão existe "falar certo" e "falar errado" de forma absoluta. Existe **adequação**: usar a variedade que combina com a situação, o interlocutor e o objetivo.'
        },
        {
          titulo: 'Preconceito linguístico',
          texto: 'É julgar uma pessoa, seu caráter ou sua inteligência pela forma como ela fala. Atinge sotaques regionais, falantes de menor escolaridade e comunidades tradicionais. O linguista **Marcos Bagno** popularizou o tema no Brasil.\n\nNo ENEM, a resposta correta costuma **valorizar a diversidade**, reconhecer que toda variedade cumpre sua função comunicativa e defender o ensino da norma culta **sem desprezar** as demais variedades.'
        },
        {
          titulo: 'Registro formal e informal; gírias, jargões e estrangeirismos',
          texto: '- **Registro formal**: planejado, vocabulário mais amplo, pouca gíria (relatórios, seminários, redação do ENEM).\n- **Registro informal**: espontâneo, abreviações, gírias (conversas, mensagens).\n- **Gíria**: vocabulário de um grupo, que muda rápido.\n- **Jargão**: vocabulário técnico de uma profissão ou área.\n- **Estrangeirismo**: palavra de outra língua incorporada ("deletar", "feedback", "mouse").'
        }
      ],
      pegadinhas: [
        'Escolher a alternativa que diz que a fala popular é "errada" ou "pobre": o ENEM trata toda variedade como legítima.',
        'Confundir **variação regional** (lugar) com **social** (grupo, escolaridade, idade).',
        'Achar que **norma culta = única língua correta**: ela é a variedade mais prestigiada e exigida em contextos formais, mas não "a verdadeira".',
        'Dizer que gíria ou mensagem de celular "estragam" o idioma: elas são **adequadas** em seus contextos.'
      ],
      dicas: [
        'Pergunte: **quem fala, onde, com quem e em que situação?** A resposta mostra o tipo de variação.',
        'Desconfie de alternativas com "certo/errado", "feio", "pobre", "corrompido": costumam ser a pegadinha.',
        'Em textos de cantores, cordelistas e escritores regionais, a variedade escolhida é um recurso de **identidade e estilo**.'
      ],
      exemplo: {
        enunciado: 'Uma jovem usa "tipo, mano, é muito massa" em um vídeo com os amigos, mas na entrevista de estágio diz "Considero a oportunidade muito relevante para minha formação". Que conceito explica a mudança?',
        resolucao: 'A mudança ocorre porque a situação é outra (conversa informal x entrevista). É a **variação situacional (diafásica)**, ligada ao grau de formalidade. Ela demonstra **adequação linguística**, não "erro".'
      },
      fontes: [F.inep, F.critica, F.estrategia, { titulo: 'BAGNO, M. Preconceito linguístico: o que é, como se faz (obra de referência)', url: '' }],
      flashcards: [
        { f: 'O que é variação diatópica?', v: 'Variação **geográfica**: muda conforme a região (macaxeira, aipim, mandioca).' },
        { f: 'O que é variação diastrática?', v: 'Variação **social**: grupo, idade, escolaridade, profissão.' },
        { f: 'O que é variação diafásica?', v: 'Variação **situacional**: muda conforme o grau de formalidade.' },
        { f: 'O que é variação diacrônica?', v: 'Variação no **tempo**: a língua muda ao longo da história.' },
        { f: 'O que é preconceito linguístico?', v: 'Julgar a pessoa ou desvalorizá-la pela maneira como fala.' },
        { f: 'Diferença entre gíria e jargão?', v: 'Gíria: vocabulário de grupo social. Jargão: vocabulário técnico de uma profissão ou área.' },
        { f: 'O que é adequação linguística?', v: 'Escolher a variedade e o registro certos para a situação e o interlocutor.' },
        { f: 'O que é estrangeirismo?', v: 'Palavra de outra língua usada no português (feedback, deletar, mouse).' }
      ],
      quiz: [
        {
          q: 'Em uma rede social, um jovem do interior escreve "Oxente, a prova tá massa, visse?". A marca linguística que identifica a variação geográfica é',
          alt: ['o uso de "oxente" e "visse", típicos da região', 'a ausência total de pontuação no texto', 'a abreviação de várias palavras comuns', 'a presença de estrangeirismos de origem inglesa', 'o uso de jargão técnico da área de saúde'],
          c: 0, dif: 'facil',
          exp: 'Expressões como "oxente" e "visse" são características de falares regionais, o que configura variação geográfica.'
        },
        {
          q: 'Um entregador explica o trabalho ao cliente: "A rota deu match com o app e o pedido tá em coleta". As palavras destacadas fazem parte de um vocabulário típico de uma área profissional, ou seja, de um',
          alt: ['jargão', 'dialeto regional antigo', 'registro literário', 'arcaísmo', 'idioleto individual'],
          c: 0, dif: 'facil',
          exp: 'Vocabulário técnico de uma atividade profissional é jargão.'
        },
        {
          q: 'Em um debate sobre a fala de moradores do campo, um aluno diz: "Eles falam errado porque não estudaram". Do ponto de vista dos estudos linguísticos, essa afirmação',
          alt: ['revela preconceito linguístico, pois toda variedade tem regras e legitimidade', 'está correta, pois só existe uma forma legítima de falar', 'mostra respeito à diversidade', 'comprova a superioridade da norma culta', 'trata de variação diacrônica'],
          c: 0, dif: 'medio',
          exp: 'Considerar a fala de um grupo "errada" por sua escolaridade ou origem é preconceito linguístico. As variedades populares têm regras próprias e cumprem sua função.'
        },
        {
          q: 'Um professor escreve a seguinte mensagem ao grupo de amigos: "E aí, galera, bora marcar o rolê?" e, em seguida, um e-mail à diretoria: "Solicito autorização para realizar a atividade". A diferença entre os dois textos se explica por',
          alt: ['variação situacional, pois mudam o interlocutor e o grau de formalidade', 'variação histórica, pois são textos de séculos diferentes', 'variação geográfica, pois foram escritos em estados distintos', 'erro de português no primeiro texto', 'estrangeirismos no segundo texto'],
          c: 0, dif: 'medio',
          exp: 'A situação e o destinatário mudaram, logo o registro muda. O primeiro é informal; o segundo, formal. Nenhum é "errado".'
        },
        {
          q: 'A palavra "vossa mercê" deu origem a "você" e, depois, a formas como "cê" e "vc". Esse percurso ilustra',
          alt: ['variação histórica (diacrônica)', 'variação geográfica (diatópica)', 'variação situacional apenas', 'estrangeirismo', 'jargão profissional'],
          c: 0, dif: 'medio',
          exp: 'A transformação de uma forma ao longo do tempo é variação histórica.'
        },
        {
          q: 'Um cordelista nordestino compõe versos com falares da região e os apresenta em escolas. Do ponto de vista da variação linguística, essa escolha',
          alt: ['valoriza a identidade cultural e é adequada ao gênero e ao público', 'mostra desconhecimento da língua', 'deve ser corrigida por não seguir a norma-padrão', 'é um erro por prejudicar a comunicação', 'só seria aceita se fosse traduzida'],
          c: 0, dif: 'medio',
          exp: 'No cordel, a variedade regional é recurso de identidade, estilo e aproximação com o público. É adequação, não erro.'
        },
        {
          q: 'Ao defender o ensino da norma culta na escola, um linguista afirma que isso deve ocorrer "sem desprezar as variedades que o aluno traz de casa". A ideia central dessa posição é que',
          alt: ['a norma culta amplia o repertório sem excluir outras variedades', 'a norma culta é a única variedade que possui regras', 'as variedades populares devem ser abandonadas pelos alunos', 'a escola não deve ensinar gramática em nenhuma etapa', 'a língua é imutável e não muda com o tempo'],
          c: 0, dif: 'dificil',
          exp: 'A escola amplia o repertório do aluno (acesso à norma culta) e respeita as demais variedades. Conhecer várias variedades permite escolher a mais adequada em cada situação.'
        },
        {
          q: 'Uma campanha de saúde usa "Se liga: vacina é coisa séria" em vídeos para adolescentes e "Procure uma unidade de saúde e verifique seu calendário vacinal" em comunicados oficiais. Ao diversificar a linguagem, a campanha demonstra',
          alt: ['adequação ao público e à situação de comunicação', 'desrespeito ao idioma', 'preferência pela norma-padrão em todos os contextos', 'predomínio do jargão técnico', 'uso de variação regional exclusivamente'],
          c: 0, dif: 'dificil',
          exp: 'A linguagem é ajustada ao público-alvo (jovens x instituições). Isso é adequação e atende ao objetivo de comunicar bem.'
        }
      ],
      pares: [
        { a: 'Diatópica', b: 'Variação por região' },
        { a: 'Diastrática', b: 'Variação por grupo social' },
        { a: 'Diafásica', b: 'Variação por situação' },
        { a: 'Diacrônica', b: 'Variação no tempo' },
        { a: 'Gíria', b: 'Vocabulário de um grupo social' },
        { a: 'Jargão', b: 'Vocabulário técnico profissional' },
        { a: 'Norma culta', b: 'Uso formal de pessoas escolarizadas' },
        { a: 'Adequação', b: 'Linguagem ajustada à situação' }
      ]
    },

    /* ============ 4. COESÃO E CONECTIVOS ============ */
    {
      id: 'coesao-coerencia',
      nome: 'Coesão, coerência e conectivos',
      incidencia: 'media',
      resumo: 'Os conectivos ligam ideias e mostram a relação lógica entre elas (oposição, causa, concessão...). Errar o conectivo é errar o sentido do texto.',
      conceitos: [
        {
          titulo: 'Coesão x coerência',
          texto: '**Coesão** é a ligação das partes do texto por meios linguísticos (pronomes, conectivos, repetições, sinônimos). **Coerência** é o sentido global: as ideias fazem sentido juntas e com o mundo.\n\nUm texto pode ter muitos conectivos e ser incoerente ("Choveu, portanto fui à praia de biquíni"). E um texto pode ser coerente com poucos conectivos, desde que o leitor consiga reconstruir as relações.'
        },
        {
          titulo: 'Coesão referencial: retomar sem repetir',
          texto: 'Serve para retomar ou antecipar algo já dito:\n\n- **Pronomes**: "Maria chegou. **Ela** estava cansada."\n- **Sinônimos e expressões equivalentes**: "o ator... o artista... o protagonista".\n- **Elipse**: omissão de termo já conhecido ("Comprei o livro e [eu] li em dois dias").\n\nNa questão, procure **a quem ou a que** o pronome se refere (o termo retomado é o **antecedente**).'
        },
        {
          titulo: 'Conectivos e relações de sentido',
          texto: '- **Adição**: e, além disso, também.\n- **Oposição**: mas, porém, contudo, todavia, entretanto, no entanto.\n- **Concessão**: embora, ainda que, mesmo que, apesar de. (O fato é admitido, mas **não impede** a ideia principal.)\n- **Causa**: porque, pois, já que, visto que, uma vez que.\n- **Consequência**: de modo que, tanto que, portanto.\n- **Conclusão**: portanto, logo, assim, por isso.\n- **Condição**: se, caso, desde que, a menos que.\n- **Finalidade**: para que, a fim de.\n- **Conformidade**: conforme, segundo.\n- **Comparação**: como, tal qual, mais que.'
        }
      ],
      pegadinhas: [
        'Confundir **oposição** ("Estudei, **mas** não passei") com **concessão** ("**Embora** tenha estudado, não passou"): na concessão, a ideia principal fica na outra oração.',
        'Achar que "pois" é sempre causa: depois do verbo ("Estudou, **pois**, o resultado é bom") ele pode indicar conclusão. Cuidado e leia a frase inteira.',
        'Trocar um conectivo por outro de **sentido diferente** só porque a frase "parece" certa.',
        'Em "o qual", "cujo", "que": esquecer de identificar o antecedente.'
      ],
      dicas: [
        'Troque o conectivo por outro de sentido conhecido e veja se a frase continua lógica.',
        'Em questões de reescrita, o gabarito mantém a **mesma relação lógica** (causa por causa, oposição por oposição).',
        'Circule os pronomes do trecho e ligue com seta ao termo que eles retomam.'
      ],
      exemplo: {
        enunciado: 'Qual a relação de sentido entre as ideias em: "**Embora** tenha dormido pouco, o aluno foi bem na prova"?',
        resolucao: '"Embora" introduz uma **concessão**: o fato (dormir pouco) seria um obstáculo esperado, mas não impediu o resultado. Equivale a "apesar de ter dormido pouco".'
      },
      fontes: [F.inep, F.critica, F.aprova, { titulo: 'KOCH, I. V.; TRAVAGLIA, L. C. A coerência textual / KOCH, I. V. A coesão textual (obras de referência)', url: '' }],
      flashcards: [
        { f: 'O que é coesão textual?', v: 'Ligação entre as partes do texto por recursos linguísticos (pronomes, conectivos, retomadas).' },
        { f: 'O que é coerência textual?', v: 'O sentido global do texto: as ideias fazem sentido juntas e com a realidade.' },
        { f: 'Conectivos de oposição', v: 'Mas, porém, contudo, todavia, entretanto, no entanto.' },
        { f: 'Conectivos de concessão', v: 'Embora, ainda que, mesmo que, apesar de.' },
        { f: 'Conectivos de causa', v: 'Porque, pois, já que, visto que, uma vez que.' },
        { f: 'Conectivos de conclusão', v: 'Portanto, logo, assim, por isso.' },
        { f: 'Conectivos de condição', v: 'Se, caso, desde que, a menos que.' },
        { f: 'O que é antecedente de um pronome?', v: 'O termo já mencionado que o pronome retoma.' }
      ],
      quiz: [
        {
          q: 'No período "Estudei bastante, **mas** não consegui a nota desejada", o conectivo destacado estabelece relação de',
          alt: ['oposição', 'causa', 'finalidade', 'condição', 'conclusão'],
          c: 0, dif: 'facil',
          exp: '"Mas" contrapõe duas ideias (esforço x resultado não esperado). É oposição.'
        },
        {
          q: 'Em "**Se** houver tempo, farei a revisão da redação", a palavra destacada indica',
          alt: ['condição', 'comparação', 'concessão', 'causa', 'adição'],
          c: 0, dif: 'facil',
          exp: 'A revisão depende de uma hipótese (haver tempo), por isso é condição.'
        },
        {
          q: 'A frase "**Embora** o cursinho fosse caro, ela decidiu se matricular" pode ser reescrita, mantendo o sentido, como',
          alt: ['Apesar de o cursinho ser caro, ela decidiu se matricular.', 'Como o cursinho era caro, ela decidiu se matricular.', 'Porque o cursinho era caro, ela decidiu se matricular.', 'Se o cursinho fosse caro, ela decidiria se matricular.', 'O cursinho era caro, portanto ela decidiu se matricular.'],
          c: 0, dif: 'medio',
          exp: '"Embora" e "apesar de" expressam concessão: o fato admitido não impede a decisão. As outras alternativas trocam a relação lógica por causa, condição ou conclusão.'
        },
        {
          q: 'No trecho "O trânsito estava caótico; **por isso**, muitos candidatos saíram mais cedo", o conectivo destacado introduz',
          alt: ['uma consequência', 'uma oposição', 'uma concessão', 'uma finalidade', 'uma comparação'],
          c: 0, dif: 'medio',
          exp: '"Por isso" indica o resultado do que foi dito antes (o trânsito caótico levou a sair mais cedo). É consequência/conclusão.'
        },
        {
          q: '"A diretora chamou a aluna e **lhe** entregou o certificado." O pronome "lhe" retoma',
          alt: ['a aluna', 'a diretora', 'o certificado', 'o certificado e a aluna', 'ninguém, pois não retoma termo algum'],
          c: 0, dif: 'medio',
          exp: 'O pronome átono "lhe" substitui o complemento indireto: para quem entregou? Para a aluna.'
        },
        {
          q: 'Em "Chegou atrasado, **pois** o ônibus quebrou no caminho", o termo "pois" introduz',
          alt: ['a causa do atraso', 'uma conclusão sem relação com a ideia anterior', 'uma ideia de oposição', 'uma condição', 'uma finalidade'],
          c: 0, dif: 'medio',
          exp: 'O ônibus ter quebrado explica o atraso. É relação de causa.'
        },
        {
          q: 'Na sequência "Todos querem usar o celular nas aulas. **Contudo**, a escola o proíbe", o conectivo marca',
          alt: ['uma ideia que contraria a expectativa criada antes', 'uma explicação da frase anterior', 'a adição de um argumento do mesmo sentido', 'uma hipótese', 'uma comparação'],
          c: 0, dif: 'dificil',
          exp: '"Contudo" opõe a proibição da escola ao desejo dos alunos. É relação de oposição.'
        },
        {
          q: 'Observe: "A cidade investiu em ciclovias, **de modo que** o número de ciclistas aumentou". A expressão destacada estabelece com a oração anterior uma relação de',
          alt: ['consequência', 'oposição', 'concessão', 'condição', 'proporção'],
          c: 0, dif: 'dificil',
          exp: 'O aumento de ciclistas é o resultado do investimento. "De modo que" liga a consequência.'
        }
      ],
      pares: [
        { a: 'Mas / porém', b: 'Oposição' },
        { a: 'Embora', b: 'Concessão' },
        { a: 'Porque / já que', b: 'Causa' },
        { a: 'Portanto / logo', b: 'Conclusão' },
        { a: 'Se / caso', b: 'Condição' },
        { a: 'Para que', b: 'Finalidade' },
        { a: 'Pronome', b: 'Retoma termo anterior' },
        { a: 'Coerência', b: 'Sentido global do texto' }
      ]
    },

    /* ============ 5. FIGURAS DE LINGUAGEM ============ */
    {
      id: 'figuras-linguagem',
      nome: 'Figuras de linguagem e sentido figurado',
      incidencia: 'media',
      resumo: 'Poemas, letras de música, propagandas e crônicas usam figuras para criar efeitos de sentido. O ENEM pergunta o que a figura provoca, não só o nome dela.',
      conceitos: [
        {
          titulo: 'Figuras de palavra (jogo de sentidos)',
          texto: '- **Metáfora**: comparação implícita. "Meu celular é meu órgão extra." (sem "como")\n- **Comparação**: com conectivo. "Rápido como um raio."\n- **Metonímia**: troca por proximidade (autor pela obra, parte pelo todo). "Li Machado" (a obra), "Cem cabeças de gado".\n- **Catacrese**: metáfora tão usada que virou palavra comum: "pé da mesa", "braço da cadeira".\n- **Sinestesia**: mistura de sentidos. "Voz doce", "cor quente".'
        },
        {
          titulo: 'Figuras de pensamento (ideia e intenção)',
          texto: '- **Ironia**: dizer o contrário do que se pensa para criticar. "Que ótimo, perdi o ônibus de novo!"\n- **Hipérbole**: exagero. "Já falei mil vezes."\n- **Eufemismo**: suavizar algo difícil. "Ele nos deixou" (morreu).\n- **Antítese**: oposição de ideias. "Amor e ódio", "luz e sombra".\n- **Paradoxo**: ideias contraditórias que revelam uma verdade. "Só sei que nada sei."\n- **Personificação (prosopopeia)**: seres inanimados com ações humanas. "A cidade acordou cansada."'
        },
        {
          titulo: 'Como responder no ENEM',
          texto: 'O ENEM raramente pede apenas "qual é a figura". Costuma perguntar:\n\n- Que **efeito de sentido** a figura provoca? (humor, crítica, ênfase, poesia, emoção)\n- Que **crítica ou ideia** ela transmite?\n\nPasso a passo: 1) leia o sentido literal; 2) perceba o que "não bate" com a realidade; 3) interprete o sentido figurado; 4) diga o efeito.'
        }
      ],
      pegadinhas: [
        'Confundir **metáfora** (sem conectivo) com **comparação** (com como, tal, igual).',
        'Confundir **metonímia** (relação de proximidade: "li Drummond") com metáfora (semelhança).',
        'Achar que toda frase com exagero é hipérbole sem ver a **intenção**: pode ser ironia (dizer o oposto).',
        'Responder apenas o nome da figura quando a pergunta é sobre o **efeito** de sentido.'
      ],
      dicas: [
        'Se a questão pede o **efeito**, pense em palavras como ênfase, crítica, humor, ironia, aproximação do leitor.',
        'Teste: é "A é B" sem conectivo? Provável metáfora. "A é como B"? Comparação.',
        'Em propagandas, a figura costuma servir para **chamar atenção** e **persuadir**.'
      ],
      exemplo: {
        enunciado: 'Em "A internet caiu e o meu humor caiu junto", qual figura aparece e qual é o efeito?',
        resolucao: 'O verbo "cair" é usado para a internet (sentido literal) e para o humor (sentido figurado): há uma **metáfora** que liga um problema técnico a um estado emocional. O efeito é **humor e identificação** com o leitor, que vive a mesma frustração.'
      },
      fontes: [F.inep, F.aprova, F.critica, { titulo: 'CEREJA, W. R.; MAGALHÃES, T. C. Português: linguagens (gramática e figuras de linguagem; obra de referência)', url: '' }],
      flashcards: [
        { f: 'O que é metáfora?', v: 'Comparação implícita, sem conectivo ("Time é família").' },
        { f: 'O que é metonímia?', v: 'Substituição por proximidade de sentido (autor pela obra: "Li Clarice").' },
        { f: 'O que é ironia?', v: 'Dizer o contrário do que se pensa, geralmente para criticar ou provocar humor.' },
        { f: 'O que é hipérbole?', v: 'Exagero para dar ênfase ("morri de rir").' },
        { f: 'O que é eufemismo?', v: 'Suavizar uma ideia dura ("faleceu" no lugar de "morreu").' },
        { f: 'O que é antítese?', v: 'Aproximação de ideias opostas ("amor e ódio").' },
        { f: 'O que é personificação?', v: 'Atribuir ações ou qualidades humanas a seres não humanos.' },
        { f: 'O que é sinestesia?', v: 'Mistura de sensações de sentidos diferentes ("voz aveludada").' }
      ],
      quiz: [
        {
          q: 'No verso "O tempo é um rio que corre sem parar", a figura de linguagem predominante é',
          alt: ['metáfora', 'comparação', 'ironia', 'eufemismo', 'hipérbole'],
          c: 0, dif: 'facil',
          exp: 'O tempo é identificado com um rio diretamente, sem conectivo comparativo. É metáfora.'
        },
        {
          q: 'Em "Meu pai está comprando um Fusca antigo e leu Machado de Assis durante a viagem", o termo "Machado de Assis" é usado para indicar a obra do autor. Trata-se de',
          alt: ['metonímia', 'metáfora', 'antítese', 'paradoxo', 'sinestesia'],
          c: 0, dif: 'facil',
          exp: 'O nome do autor é usado no lugar de sua obra, relação de proximidade típica da metonímia.'
        },
        {
          q: 'Ao ver o aluno chegar quarenta minutos atrasado no primeiro dia de simulado, a professora diz: "Que pontualidade admirável!". A figura usada é',
          alt: ['ironia', 'eufemismo', 'personificação', 'metonímia', 'comparação'],
          c: 0, dif: 'medio',
          exp: 'A professora diz o contrário do que pensa (elogia o atraso) para criticar. É ironia.'
        },
        {
          q: 'No trecho "A cidade acordou devagar, bocejando entre os ônibus lotados", a figura de linguagem predominante é',
          alt: ['personificação', 'antítese', 'paradoxo', 'eufemismo', 'catacrese'],
          c: 0, dif: 'medio',
          exp: 'A cidade, um ser inanimado, recebe ações humanas (acordar, bocejar). É personificação.'
        },
        {
          q: 'Em uma campanha, o slogan diz: "Doe sangue: a vida pede passagem". O efeito de sentido provocado pela expressão "a vida pede passagem" é',
          alt: ['sensibilizar o leitor ao ligar a doação ao valor da vida', 'informar dados estatísticos sobre doadores', 'explicar o funcionamento do banco de sangue', 'criar humor por meio do absurdo', 'descrever objetivamente um procedimento'],
          c: 0, dif: 'medio',
          exp: 'A vida é personificada (pede passagem) para sensibilizar e convencer o público. O efeito é emotivo e persuasivo.'
        },
        {
          q: 'Em "Ele nos deixou ontem, depois de longa enfermidade", a expressão "nos deixou" é um exemplo de',
          alt: ['eufemismo', 'ironia', 'hipérbole', 'antítese', 'comparação'],
          c: 0, dif: 'medio',
          exp: '"Deixou" suaviza a ideia de morte. É eufemismo.'
        },
        {
          q: 'No verso "É ferida que dói e não se sente", a ideia contraditória que expressa uma verdade sobre o amor é',
          alt: ['um paradoxo', 'uma comparação simples', 'um eufemismo', 'uma catacrese', 'uma metonímia'],
          c: 0, dif: 'dificil',
          exp: 'Dói e não se sente são ideias que se contradizem na superfície, mas revelam uma verdade sobre a experiência amorosa. É paradoxo.'
        },
        {
          q: 'Na frase "Estou morrendo de fome, comeria um boi inteiro", o recurso que dá ênfase por exagero é a',
          alt: ['hipérbole', 'metonímia', 'personificação', 'antítese', 'eufemismo'],
          c: 0, dif: 'facil',
          exp: 'Exagerar a quantidade que se comeria enfatiza a fome. É hipérbole.'
        }
      ],
      pares: [
        { a: 'Metáfora', b: 'Comparação sem conectivo' },
        { a: 'Metonímia', b: 'Troca por proximidade' },
        { a: 'Ironia', b: 'Dizer o contrário para criticar' },
        { a: 'Hipérbole', b: 'Exagero expressivo' },
        { a: 'Eufemismo', b: 'Suaviza ideia dura' },
        { a: 'Antítese', b: 'Ideias opostas lado a lado' },
        { a: 'Paradoxo', b: 'Contradição que revela verdade' },
        { a: 'Personificação', b: 'Humaniza o não humano' }
      ]
    },

    /* ============ 6. INTERPRETAÇÃO ============ */
    {
      id: 'interpretacao-texto',
      nome: 'Interpretação de textos: tese, inferência e intertextualidade',
      incidencia: 'alta',
      resumo: 'Quase toda questão de Linguagens é interpretação. Dominar tese, argumentos, ironia, implícitos e intertextualidade aumenta o acerto em todas as áreas.',
      conceitos: [
        {
          titulo: 'Tese, argumentos e ponto de vista',
          texto: '**Tese** é a ideia central defendida. **Argumentos** a sustentam (dados, exemplos, autoridade, comparação, causa e consequência).\n\nPara achar a tese: busque a frase que responde "o autor quer que eu concorde com o quê?". Marcas de opinião: adjetivos, advérbios ("infelizmente"), verbos de avaliação ("deve", "é preciso").'
        },
        {
          titulo: 'Explícito x implícito: pressupostos, subentendidos e inferência',
          texto: '- **Explícito**: está escrito.\n- **Pressuposto**: ideia implícita **marcada na própria frase**. "Ele **parou** de fumar" pressupõe que antes fumava.\n- **Subentendido**: depende do contexto e da intenção. "Está calor aqui" pode significar "abra a janela".\n- **Inferência**: conclusão que você tira combinando pistas do texto.\n\nA resposta correta precisa estar **apoiada no texto**: se for preciso "inventar" informação, está errada.'
        },
        {
          titulo: 'Intertextualidade',
          texto: 'É o diálogo entre textos.\n\n- **Citação**: traz o trecho entre aspas.\n- **Paráfrase**: repete a ideia com outras palavras (mesmo sentido).\n- **Paródia**: imita um texto conhecido para **criticar ou fazer humor** (sentido diferente ou oposto).\n- **Alusão**: referência indireta a outro texto ou fato.\n\nPergunta típica: "o texto B dialoga com o A de que forma?" Verifique se **mantém** ou **inverte** o sentido original.'
        },
        {
          titulo: 'Texto verbal + não verbal e as armadilhas das alternativas',
          texto: 'Em charges, propagandas e tirinhas, imagem e palavra se completam. Observe cores, expressões, tamanhos, ausências.\n\nArmadilhas comuns nas alternativas:\n- **Extrapolação**: vai além do que o texto diz.\n- **Reducionismo**: toma uma parte como se fosse o todo.\n- **Contradição**: diz o oposto do texto.\n- **Verdade fora do texto**: é correta, mas não responde à pergunta.'
        }
      ],
      pegadinhas: [
        'Escolher uma alternativa **verdadeira no mundo real**, mas que o texto **não afirma**.',
        'Cair na **extrapolação**: palavras como "sempre", "nunca", "todos", "apenas" quase sempre revelam excesso.',
        'Esquecer de ler o **título, o subtítulo e a fonte**: eles trazem pistas do ponto de vista.',
        'Interpretar ironia ao pé da letra, tomando o elogio irônico como elogio verdadeiro.'
      ],
      dicas: [
        'Leia o **comando** primeiro; depois o texto buscando só o que ele pede.',
        'Elimine as alternativas absurdas ou que contradizem o texto antes de comparar as restantes.',
        'Em paródias e intertextos, descubra qual é o **texto original** e o que mudou.'
      ],
      exemplo: {
        enunciado: 'Leia: "Depois que o aplicativo mudou a política, os entregadores **continuam** sem seguro". O que está pressuposto?',
        resolucao: 'O verbo "continuam" pressupõe que **já estavam sem seguro antes** da mudança. Esse é um pressuposto marcado por palavra do próprio texto, diferente de um subentendido, que depende do contexto.'
      },
      fontes: [F.inep, F.critica, F.aprova, { titulo: 'KOCH, I. V.; ELIAS, V. M. Ler e compreender: os sentidos do texto (obra de referência)', url: '' }],
      flashcards: [
        { f: 'O que é tese?', v: 'A ideia central que o autor defende no texto.' },
        { f: 'O que é um pressuposto?', v: 'Informação implícita marcada na própria frase (ex.: "continua" indica que já era assim).' },
        { f: 'O que é um subentendido?', v: 'Ideia implícita que depende do contexto e da intenção de quem fala.' },
        { f: 'Paráfrase x paródia?', v: 'Paráfrase mantém o sentido; paródia transforma, em geral para criticar ou fazer humor.' },
        { f: 'O que é intertextualidade?', v: 'O diálogo entre textos (citação, paráfrase, paródia, alusão).' },
        { f: 'O que é extrapolação em uma alternativa?', v: 'Afirmar algo que vai além do que o texto diz.' },
        { f: 'O que é reducionismo?', v: 'Tomar uma parte do texto como se fosse a ideia completa.' },
        { f: 'Como achar a tese rapidamente?', v: 'Pergunte: com o que o autor quer que eu concorde? Procure verbos e adjetivos de opinião.' }
      ],
      quiz: [
        {
          q: 'Em "Após a mudança de professor, a turma voltou a participar das aulas", o verbo "voltou" pressupõe que',
          alt: ['a turma já havia participado antes', 'a turma nunca participou', 'o professor anterior era melhor', 'a participação diminuiu depois', 'a mudança foi apenas administrativa'],
          c: 0, dif: 'facil',
          exp: '"Voltar a" indica retorno a um estado anterior: a turma já participava.'
        },
        {
          q: 'Um anúncio de academia traz a frase: "Quem pensa em desistir, pensa em recomeçar". Para o leitor atento, o texto sugere que',
          alt: ['a desistência pode ser passageira e há recomeço', 'ninguém desiste de treinar na academia', 'recomeçar uma atividade física é impossível', 'a academia não aceita quem já desistiu antes', 'o exercício físico é sempre perigoso e arriscado'],
          c: 0, dif: 'medio',
          exp: 'A frase associa a vontade de desistir à possibilidade de recomeço, ideia sugerida e não declarada literalmente.'
        },
        {
          q: 'Uma canção de protesto retoma, com ironia, os versos de um hino cívico, mas troca "gigante pela própria natureza" por "gigante só no preço do aluguel". Essa relação entre os textos é uma',
          alt: ['paródia, pois transforma o original para criticar', 'paráfrase, pois mantém o mesmo sentido', 'citação direta sem alteração', 'tradução fiel', 'repetição sem intenção'],
          c: 0, dif: 'medio',
          exp: 'Há imitação do texto original com mudança de sentido e intenção crítica. É paródia.'
        },
        {
          q: 'Um artigo defende que "a escola deve ensinar a lidar com fake news, e não só a decorar conteúdos". A tese do autor é',
          alt: ['a escola deve incluir o combate à desinformação em sua formação', 'a escola não deve ensinar conteúdos', 'as fake news aparecem só na internet', 'os alunos são os únicos responsáveis pela desinformação', 'a internet deve ser proibida na escola'],
          c: 0, dif: 'medio',
          exp: 'A tese é a ideia central defendida: incluir o enfrentamento à desinformação no ensino. As outras alternativas extrapolam ou contradizem o texto.'
        },
        {
          q: 'Texto: "A cidade tem 40 ciclovias, mas muitas terminam em avenidas sem sinalização." Uma alternativa que EXTRAPOLA o texto é',
          alt: ['Ninguém usa as ciclovias da cidade.', 'Há ciclovias na cidade.', 'Algumas ciclovias terminam em avenidas sem sinalização.', 'O texto critica a falta de continuidade da estrutura cicloviária.', 'Existe um problema de sinalização relatado no texto.'],
          c: 0, dif: 'medio',
          exp: 'O texto não afirma que ninguém usa as ciclovias; isso é extrapolação. As demais alternativas derivam do que foi dito.'
        },
        {
          q: 'No título "Estudantes ainda não têm acesso a computadores nas escolas públicas", a palavra "ainda" indica que',
          alt: ['a situação é considerada um problema que pode mudar', 'o acesso nunca existirá', 'todas as escolas já têm computadores', 'o acesso é irrelevante', 'o autor aprova a situação'],
          c: 0, dif: 'dificil',
          exp: '"Ainda" marca a expectativa de mudança e uma avaliação negativa da situação atual.'
        },
        {
          q: 'Em uma tirinha, um personagem diz "Que bom que a internet caiu na véspera da entrega do trabalho!" enquanto aparece de cabeça entre as mãos. O sentido do texto é',
          alt: ['irônico: a expressão é de alegria, mas a imagem mostra desespero', 'literal: ele está feliz', 'informativo: explica como a internet funciona', 'poético: foca na sonoridade das palavras', 'instrucional: ensina a entregar trabalhos'],
          c: 0, dif: 'dificil',
          exp: 'A contradição entre o enunciado de alegria e a imagem de desespero revela ironia, que só se percebe unindo texto verbal e imagem.'
        },
        {
          q: 'Uma crônica retoma o ditado "quem espera sempre alcança" para afirmar que "hoje, quem só espera fica para trás". O trecho dialoga com o ditado para',
          alt: ['questionar o sentido original, propondo uma visão contrária', 'confirmar integralmente a ideia do ditado', 'traduzir o ditado para outra língua', 'explicar a origem histórica do ditado', 'trocar o ditado por uma receita'],
          c: 0, dif: 'dificil',
          exp: 'A crônica usa o ditado conhecido para contestá-lo, relação típica de intertextualidade com sentido contrário.'
        }
      ],
      pares: [
        { a: 'Tese', b: 'Ideia central defendida' },
        { a: 'Pressuposto', b: 'Implícito marcado na frase' },
        { a: 'Subentendido', b: 'Implícito que depende do contexto' },
        { a: 'Paráfrase', b: 'Mesma ideia com outras palavras' },
        { a: 'Paródia', b: 'Imitação com crítica ou humor' },
        { a: 'Alusão', b: 'Referência indireta a outro texto' },
        { a: 'Extrapolação', b: 'Vai além do que o texto diz' },
        { a: 'Inferência', b: 'Conclusão a partir de pistas' }
      ]
    },

    /* ============ 7. GRAMÁTICA NO TEXTO ============ */
    {
      id: 'gramatica-no-texto',
      nome: 'Gramática no texto: pontuação, verbos e pronomes',
      incidencia: 'media',
      resumo: 'O ENEM não cobra regra decorada: cobra o EFEITO de sentido dos recursos gramaticais (vírgula, tempo verbal, pronome, ordem das palavras).',
      conceitos: [
        {
          titulo: 'Pontuação e sentido',
          texto: 'A vírgula pode mudar o significado:\n\n- "Não, espere." (pare) x "Não espere." (não aguarde)\n- "Os alunos, que estudaram, passaram." (todos estudaram e passaram) x "Os alunos que estudaram passaram." (só os que estudaram)\n\nOutros sinais: **dois-pontos** (explicação ou citação), **ponto e vírgula** (separa itens ou ideias relacionadas), **reticências** (suspense, hesitação, continuidade), **aspas** (citação, ironia, estrangeirismo, destaque).'
        },
        {
          titulo: 'Tempos e modos verbais',
          texto: '- **Presente**: fato atual, verdade geral ("A água ferve a 100 °C").\n- **Pretérito perfeito**: fato concluído; **imperfeito**: hábito ou fato em andamento no passado.\n- **Futuro do presente**: certeza; **futuro do pretérito**: hipótese ou possibilidade ("Eu estudaria mais, se tivesse tempo").\n- **Subjuntivo**: dúvida, desejo, condição ("Espero que você **passe**").\n- **Imperativo**: ordem, pedido, conselho.\n\nNo ENEM, vale perguntar: "que efeito esse tempo verbal cria?" (certeza, hipótese, atualidade, ordem).'
        },
        {
          titulo: 'Pronomes e ambiguidade',
          texto: 'Pronomes retomam termos. Quando há dois possíveis antecedentes, surge **ambiguidade**: "Maria disse à Ana que **ela** passou" (quem passou?).\n\nOutros pontos que mexem no sentido:\n- **Ordem das palavras**: "Só ele leu o livro" x "Ele só leu o livro".\n- **Voz passiva**: "Os pesquisadores publicaram o estudo" x "O estudo foi publicado" (esconde o agente).\n- **Crase**: indica fusão de "a + a" e pode mudar o sentido ("Fui à escola").'
        }
      ],
      pegadinhas: [
        'Julgar vírgula por "pausa na fala": ela segue a **estrutura da frase** (separa adjunto deslocado, aposto, vocativo, orações).',
        'Confundir **futuro do pretérito** (hipótese) com **pretérito imperfeito** (hábito no passado).',
        'Ignorar a **ambiguidade** de pronomes ("ele", "ela", "seu") quando há dois referentes possíveis.',
        'Aceitar que a **voz passiva** é sempre "neutra": ela pode ocultar o responsável pela ação.'
      ],
      dicas: [
        'Em questões de pontuação, leia a frase **sem** a vírgula e **com** ela e compare os sentidos.',
        'Em verbos, associe: **futuro do pretérito = hipótese**, **subjuntivo = dúvida/desejo**, **imperativo = ordem**.',
        'Se a pergunta é "o que a gramática faz aqui?", fale do **efeito** (ênfase, ambiguidade, atenuação).'
      ],
      exemplo: {
        enunciado: 'Qual a diferença de sentido entre "Os alunos, que fizeram simulado, foram bem" e "Os alunos que fizeram simulado foram bem"?',
        resolucao: 'Com vírgulas (oração **explicativa**): **todos** os alunos fizeram simulado e foram bem.\nSem vírgulas (oração **restritiva**): apenas **os alunos que fizeram** simulado foram bem; talvez outros não tenham feito.'
      },
      fontes: [F.inep, F.aprova, F.critica, { titulo: 'BECHARA, E. Moderna gramática portuguesa (obra de referência)', url: '' }],
      flashcards: [
        { f: 'O que faz o futuro do pretérito?', v: 'Expressa hipótese ou possibilidade ("faria", "iria").' },
        { f: 'Para que serve o modo subjuntivo?', v: 'Dúvida, desejo, condição, incerteza.' },
        { f: 'O que é oração explicativa x restritiva?', v: 'Explicativa (com vírgulas) vale para todos; restritiva (sem vírgula) restringe o grupo.' },
        { f: 'Para que serve o ponto e vírgula?', v: 'Separar ideias relacionadas ou itens longos de uma enumeração.' },
        { f: 'O que fazem os dois-pontos?', v: 'Introduzem explicação, enumeração ou citação.' },
        { f: 'O que são aspas irônicas?', v: 'Aspas que indicam que a palavra não é usada no sentido literal ou que o autor discorda dela.' },
        { f: 'O que é ambiguidade?', v: 'Frase com mais de uma interpretação possível.' },
        { f: 'O que a voz passiva pode ocultar?', v: 'O agente da ação ("Erros foram cometidos").' }
      ],
      quiz: [
        {
          q: 'A ausência ou presença de vírgula muda o sentido em "Os alunos, que estudaram, passaram" e "Os alunos que estudaram passaram". No primeiro caso,',
          alt: ['todos os alunos estudaram e passaram', 'só alguns alunos estudaram', 'ninguém estudou', 'apenas os que estudaram passaram', 'não se pode saber se estudaram'],
          c: 0, dif: 'medio',
          exp: 'A oração entre vírgulas é explicativa e se aplica a todos os alunos.'
        },
        {
          q: 'Em "Se eu tivesse mais tempo, estudaria todos os dias", o verbo "estudaria" expressa',
          alt: ['uma hipótese dependente de condição', 'uma ordem', 'um fato concluído', 'uma certeza', 'um hábito passado'],
          c: 0, dif: 'facil',
          exp: 'O futuro do pretérito indica possibilidade condicionada ("se eu tivesse mais tempo").'
        },
        {
          q: 'No trecho: Na campanha, o político prometeu "resolver" o problema da saúde. O uso de aspas na palavra "resolver" serve para',
          alt: ['sugerir dúvida ou ironia sobre o cumprimento da promessa', 'indicar uma citação literal de dicionário', 'destacar um estrangeirismo', 'marcar um erro de ortografia', 'iniciar um diálogo'],
          c: 0, dif: 'medio',
          exp: 'As aspas distanciam o autor da palavra e criam ironia, sugerindo que a promessa pode não se realizar.'
        },
        {
          q: 'Em "Maria contou à amiga que ela havia passado no vestibular", há ambiguidade porque',
          alt: ['não fica claro a quem "ela" se refere', 'o verbo principal está no futuro do presente', 'faltam vírgulas para separar as orações', 'não há nenhum pronome presente na frase', 'o tempo verbal predominante é o imperativo'],
          c: 0, dif: 'medio',
          exp: '"Ela" pode retomar Maria ou a amiga, dois antecedentes possíveis.'
        },
        {
          q: 'Em "Espero que você consiga a vaga", o modo subjuntivo expressa',
          alt: ['desejo, algo não concretizado', 'certeza absoluta', 'um fato passado', 'uma ordem', 'uma pergunta'],
          c: 0, dif: 'facil',
          exp: 'O subjuntivo é usado para desejos, dúvidas e hipóteses.'
        },
        {
          q: 'Na frase "Erros foram cometidos durante a gestão", o uso da voz passiva produz o efeito de',
          alt: ['ocultar quem cometeu os erros', 'destacar quem cometeu os erros', 'indicar uma ordem', 'expressar uma hipótese', 'criar um tom poético'],
          c: 0, dif: 'dificil',
          exp: 'Sem agente expresso, o texto não diz quem errou. É uma forma de atenuar ou omitir a responsabilidade.'
        },
        {
          q: 'A diferença entre "Só ele leu o livro" e "Ele só leu o livro" está em que',
          alt: ['no primeiro, só ele leu; no segundo, apenas leu e nada mais', 'os dois têm exatamente o mesmo sentido', 'no primeiro, o livro não chegou a ser lido', 'no segundo, outra pessoa também leu o livro', 'ambos indicam uma ação que ainda vai acontecer'],
          c: 0, dif: 'dificil',
          exp: 'A posição de "só" muda o termo que ela restringe. No primeiro, restringe "ele"; no segundo, restringe a ação.'
        },
        {
          q: 'Os dois-pontos em "Faltava apenas uma coisa: coragem" servem para',
          alt: ['introduzir uma explicação ou esclarecimento', 'indicar fim da frase', 'marcar uma pergunta', 'sinalizar suspense com interrupção', 'separar o vocativo'],
          c: 0, dif: 'facil',
          exp: 'Após os dois-pontos vem o esclarecimento do que "faltava".'
        }
      ],
      pares: [
        { a: 'Futuro do pretérito', b: 'Hipótese ou possibilidade' },
        { a: 'Subjuntivo', b: 'Dúvida, desejo ou condição' },
        { a: 'Imperativo', b: 'Ordem, pedido ou conselho' },
        { a: 'Dois-pontos', b: 'Explicação ou citação' },
        { a: 'Aspas irônicas', b: 'Distanciamento ou crítica' },
        { a: 'Oração explicativa', b: 'Vale para todo o grupo' },
        { a: 'Oração restritiva', b: 'Limita o grupo' },
        { a: 'Voz passiva', b: 'Pode ocultar o agente' }
      ]
    }
  ]);
})();
