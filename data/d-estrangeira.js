/* Língua Estrangeira (Inglês e Espanhol) — Linguagens, Códigos e suas Tecnologias.
   No ENEM, o candidato escolhe inglês OU espanhol (5 questões). Os textos são autênticos (tweets, anúncios, poemas,
   notícias, gráficos) e as perguntas são em português: o foco é COMPREENDER, não traduzir palavra por palavra. */
(function () {
  var F = {
    inep: { titulo: 'INEP — Matrizes de Referência do Enem (competências e habilidades de Linguagens)', url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem' },
    critica: { titulo: 'A Crítica (MS) — Enem 2026: professores indicam o que revisar na prova de Linguagens', url: 'https://acritica.net/educacao/enem-2026-professores-indicam-o-que-revisar-para-a-prova-de-linguagens/' },
    estrategia: { titulo: 'Estratégia Vestibulares — Assuntos que mais caem no Enem (análise de 1998 a 2020)', url: 'https://vestibulares.estrategia.com/portal/enem-e-vestibulares/enem/assuntos-que-mais-caem-no-enem/' }
  };

  ENEM.temas('estrangeira', [
    /* ============ 1. INGLÊS: ESTRATÉGIAS DE LEITURA ============ */
    {
      id: 'ingles-leitura',
      nome: 'Inglês: estratégias de leitura e gêneros',
      incidencia: 'alta',
      resumo: 'Cerca de 80% das questões de inglês cobram interpretação de texto. Você não precisa traduzir tudo: precisa entender a ideia, a finalidade e o contexto.',
      conceitos: [
        {
          titulo: 'Leia como um detetive: contexto antes de palavras',
          texto: 'Antes do texto, olhe: **título**, **fonte**, **imagem**, **formato** (tweet, anúncio, notícia, poema, gráfico) e o **comando** da questão (em português).\n\nDepois, leia o texto buscando a **ideia geral** (skimming). Só depois procure um detalhe específico (scanning). Palavras desconhecidas raramente impedem a compreensão: use o contexto e as palavras parecidas com o português.'
        },
        {
          titulo: 'Cognatos e palavras-chave',
          texto: '**Cognatos** são palavras parecidas com o português e com o mesmo sentido: *information*, *important*, *government*, *pollution*, *education*, *family*.\n\nPalavras repetidas e em destaque (negrito, título, números) costumam ser a chave. Os **nomes próprios**, **datas** e **números** ajudam a entender o tema.'
        },
        {
          titulo: 'Gêneros que mais aparecem',
          texto: '- **Anúncio/propaganda**: slogans curtos, verbos no imperativo, apelo ao leitor.\n- **Tweet/post/meme**: linguagem informal, abreviações, hashtags, humor ou opinião.\n- **Notícia/reportagem**: fatos, dados, citações.\n- **Poema/letra de canção**: linguagem figurada; atenção a imagens e sentimentos.\n- **Gráfico/infográfico/tirinha**: o dado e a imagem completam o sentido.\n- **Textos sobre cultura e sociedade**: identidade, tecnologia, meio ambiente, saúde, trabalho.'
        },
        {
          titulo: 'Marcadores que mostram a relação das ideias',
          texto: '- **but, however, although, though, despite, in spite of**: contraste/concessão.\n- **because, since, as**: causa. (*since* também pode significar "desde que").\n- **so, therefore, as a result**: consequência.\n- **if, unless**: condição.\n- **also, moreover, besides**: adição.\n\nEles indicam para onde a ideia vai e ajudam a achar a ideia principal.'
        }
      ],
      pegadinhas: [
        'Procurar traduzir **palavra por palavra** e travar: o objetivo é entender o sentido geral.',
        'Escolher a alternativa só porque repete palavras do texto: ela pode **distorcer** a ideia.',
        'Cair em **falsos cognatos** (palavras parecidas com sentido diferente, como *actually*, *pretend*, *library*).',
        'Responder pelo que você **acha** do assunto, e não pelo que o texto **diz**.'
      ],
      dicas: [
        'Leia o **comando** em português primeiro: ele diz o que procurar.',
        'Marque **verbos**, **conectores** e **números**: eles mostram a ideia e a relação entre as informações.',
        'Em tweets e anúncios, pense em **quem fala, para quem e com qual objetivo**.',
        'Treine lendo notícias e legendas em inglês 10 minutos por dia: o vocabulário vem do hábito.'
      ],
      exemplo: {
        enunciado: 'Texto: "Studying with friends can be fun, but only if you stay focused." Qual é a ideia central?',
        resolucao: '"**but**" marca contraste: estudar com amigos pode ser divertido, **mas** só funciona se houver foco. A ideia central é: **o estudo em grupo é positivo se houver concentração**.'
      },
      fontes: [F.inep, F.critica, F.estrategia],
      flashcards: [
        { f: 'O que é skimming?', v: 'Leitura rápida para captar a ideia geral do texto.' },
        { f: 'O que é scanning?', v: 'Leitura para localizar uma informação específica (dado, nome, data).' },
        { f: 'O que são cognatos?', v: 'Palavras parecidas em duas línguas, com o mesmo sentido (information, important).' },
        { f: 'O que significa "however"?', v: 'No entanto, contudo (contraste).' },
        { f: 'O que significa "although"?', v: 'Embora, apesar de que (concessão).' },
        { f: 'O que significa "therefore"?', v: 'Portanto (conclusão).' },
        { f: 'O que é falso cognato?', v: 'Palavra parecida com o português, mas de sentido diferente.' },
        { f: 'Primeiro passo ao ler uma questão de língua estrangeira?', v: 'Ler o comando em português e observar título, fonte e imagem.' }
      ],
      quiz: [
        {
          q: 'Observe o anúncio: "Sale! Everything must go. 50% off all shoes this weekend only." O principal objetivo do texto é',
          alt: ['divulgar uma promoção por tempo limitado', 'informar sobre uma pesquisa científica', 'ensinar a fabricar sapatos', 'relatar uma viagem de fim de semana', 'criticar o consumo exagerado'],
          c: 0, dif: 'facil',
          exp: '"Sale", "50% off" e "this weekend only" indicam promoção por tempo limitado.'
        },
        {
          q: 'Em "Although it was raining, they kept playing soccer in the street", a ideia principal é que',
          alt: ['eles continuaram jogando, mesmo com a chuva', 'eles pararam de jogar por causa da chuva', 'eles começaram a jogar depois da chuva', 'a chuva só começou quando eles terminaram', 'eles não gostam de jogar na rua'],
          c: 0, dif: 'facil',
          exp: '"Although" introduz concessão: a chuva não impediu que continuassem jogando.'
        },
        {
          q: 'Tweet: "Just finished my exam. I feel like I could sleep for a week! #relief". O tom do texto expressa',
          alt: ['alívio e cansaço após a prova', 'raiva do professor', 'tristeza por ter reprovado', 'indiferença', 'medo do resultado'],
          c: 0, dif: 'facil',
          exp: '"Just finished", "sleep for a week" e "#relief" indicam alívio misturado com cansaço.'
        },
        {
          q: 'No texto: "According to the survey, 70% of teenagers use social media for more than three hours a day, while only 20% read books regularly", a palavra "while" estabelece uma relação de',
          alt: ['contraste entre os hábitos dos jovens', 'causa entre o uso das redes e a leitura', 'tempo exato de uma atividade', 'condição para a pesquisa', 'finalidade do uso das redes'],
          c: 0, dif: 'medio',
          exp: 'Os dois percentuais são comparados: muitos usam redes e poucos leem. "While" marca esse contraste.'
        },
        {
          q: 'Em: "Don\'t text and drive. Arrive alive." o texto tem como objetivo',
          alt: ['alertar os motoristas contra o uso do celular ao dirigir', 'vender um aplicativo de mensagens', 'informar o preço de um carro', 'contar a história de um motorista', 'defender o uso do celular no trânsito'],
          c: 0, dif: 'medio',
          exp: 'O imperativo e a rima em "drive/alive" formam um slogan de campanha de segurança.'
        },
        {
          q: 'Poema: "The city sleeps, / but the screens stay awake, / glowing like small moons / in the hands of tired people". A imagem das "small moons" representa',
          alt: ['telas de celular acesas à noite', 'a lua cheia iluminando a cidade', 'um apagão que deixou a cidade escura', 'lâmpadas de rua recém-instaladas', 'a beleza do céu estrelado'],
          c: 0, dif: 'dificil',
          exp: 'As telas brilhantes são comparadas a pequenas luas: o poema fala do uso de telas na madrugada.'
        },
        {
          q: 'Em "The government announced a new program to reduce pollution in large cities", o tema central é',
          alt: ['uma medida para diminuir a poluição urbana', 'o aumento do trânsito', 'a falta de moradia', 'a abertura de novas escolas', 'um evento esportivo'],
          c: 0, dif: 'medio',
          exp: '"Government", "program", "reduce" e "pollution" são cognatos e mostram que o assunto é uma ação contra a poluição.'
        },
        {
          q: 'Em "Remote work is convenient; however, it can make people feel isolated", o conectivo "however" mostra que',
          alt: ['o trabalho remoto tem uma desvantagem que contrasta com a vantagem citada', 'o trabalho remoto é sempre ruim', 'o trabalho remoto não existe mais', 'as pessoas preferem o escritório por causa do transporte', 'o trabalho remoto é obrigatório'],
          c: 0, dif: 'dificil',
          exp: '"However" introduz contraste: depois da vantagem (conveniente), apresenta uma desvantagem (isolamento).'
        }
      ],
      pares: [
        { a: 'However', b: 'No entanto' },
        { a: 'Although', b: 'Embora' },
        { a: 'Therefore', b: 'Portanto' },
        { a: 'Because', b: 'Porque' },
        { a: 'Skimming', b: 'Leitura geral rápida' },
        { a: 'Scanning', b: 'Busca por informação específica' },
        { a: 'Cognate', b: 'Palavra parecida e de mesmo sentido' },
        { a: 'Moreover', b: 'Além disso' }
      ]
    },

    /* ============ 2. INGLÊS: VOCABULÁRIO E GRAMÁTICA NO CONTEXTO ============ */
    {
      id: 'ingles-vocabulario',
      nome: 'Inglês: falsos cognatos, verbos e vocabulário em contexto',
      incidencia: 'media',
      resumo: 'A gramática isolada quase não cai. O que pesa é vocabulário em contexto, falsos cognatos, tempos verbais e palavras que mudam o sentido da frase.',
      conceitos: [
        {
          titulo: 'Falsos cognatos mais cobrados',
          texto: '- **actually** = na verdade (não "atualmente"; atualmente = *currently*).\n- **pretend** = fingir (não "pretender").\n- **library** = biblioteca (livraria = *bookstore*).\n- **college** = faculdade (colégio = *school*).\n- **attend** = comparecer, frequentar (não "atender").\n- **parents** = pais (parentes = *relatives*).\n- **push** = empurrar (puxar = *pull*).\n- **realize** = perceber, dar-se conta.\n- **eventually** = por fim (não "eventualmente").\n- **novel** = romance.\n- **support** = apoiar (suportar = *stand*).\n- **resume** = retomar (currículo = *résumé / CV*).'
        },
        {
          titulo: 'Verbos e tempos mais frequentes',
          texto: '- **Simple present**: hábitos e verdades gerais ("She works at a hospital").\n- **Present continuous**: ação em andamento ("They are studying now").\n- **Simple past**: fato concluído ("I **finished** the test").\n- **Present perfect (have/has + particípio)**: experiência ou fato que ainda importa ("I have lived here for 5 years").\n- **Future (will / going to)**: planos e previsões.\n- **Modais**: *can* (capacidade), *should* (conselho), *must* (obrigação/ certeza), *may/might* (possibilidade).'
        },
        {
          titulo: 'Phrasal verbs e expressões comuns',
          texto: 'São verbos com partícula que mudam o sentido: **give up** (desistir), **look for** (procurar), **look after** (cuidar de), **find out** (descobrir), **figure out** (entender, resolver), **carry on** (continuar), **turn off/on** (desligar/ligar), **set up** (configurar).\n\nTambém comuns em textos sobre tecnologia: **log in**, **sign up**, **download**, **feedback**, **update**.'
        }
      ],
      pegadinhas: [
        'Traduzir *actually* por "atualmente" e *eventually* por "eventualmente".',
        'Confundir *parents* (pais) com "parentes" (*relatives*).',
        'Traduzir phrasal verbs **palavra por palavra** (*give up* não é "dar para cima").',
        'Ignorar o tempo verbal: *have lived* (ainda vive) ≠ *lived* (morou, já não mora).'
      ],
      dicas: [
        'Se uma palavra "parece português" mas a frase fica estranha, desconfie de **falso cognato**.',
        'No present perfect, procure pistas como *for*, *since*, *already*, *yet*, *ever*.',
        'Leia o phrasal verb **inteiro**: o sentido está na junção verbo + partícula.'
      ],
      exemplo: {
        enunciado: 'Em "I thought the test would be easy, but actually it was very hard", o que "actually" significa?',
        resolucao: '"Actually" = **na verdade**. A frase diz: "Achei que a prova seria fácil, mas **na verdade** foi muito difícil". Não significa "atualmente".'
      },
      fontes: [F.inep, F.critica],
      flashcards: [
        { f: 'Actually significa…', v: 'Na verdade (não "atualmente").' },
        { f: 'Pretend significa…', v: 'Fingir (não "pretender").' },
        { f: 'Library significa…', v: 'Biblioteca.' },
        { f: 'Parents significa…', v: 'Pais (parentes = relatives).' },
        { f: 'Attend significa…', v: 'Comparecer, frequentar.' },
        { f: 'Eventually significa…', v: 'Por fim, com o tempo.' },
        { f: 'Give up significa…', v: 'Desistir.' },
        { f: 'Para que serve o present perfect?', v: 'Experiências ou fatos passados com ligação com o presente (have/has + particípio).' }
      ],
      quiz: [
        {
          q: 'Na frase "Actually, I prefer tea to coffee", a palavra "actually" é melhor traduzida por',
          alt: ['na verdade', 'atualmente', 'ativamente', 'apenas', 'ainda'],
          c: 0, dif: 'facil',
          exp: '"Actually" é falso cognato e significa "na verdade".'
        },
        {
          q: 'Em "My parents are coming to my graduation", a palavra "parents" refere-se a',
          alt: ['mãe e pai', 'primos e tios', 'amigos da faculdade', 'professores', 'vizinhos'],
          c: 0, dif: 'facil',
          exp: '"Parents" = pais. Parentes é "relatives".'
        },
        {
          q: 'Em "He decided to give up smoking", a expressão "give up" tem sentido de',
          alt: ['desistir', 'ganhar', 'subir', 'oferecer', 'esperar'],
          c: 0, dif: 'facil',
          exp: '"Give up" é phrasal verb: desistir de algo.'
        },
        {
          q: 'A frase "I have lived in Recife for ten years" indica que a pessoa',
          alt: ['ainda mora em Recife', 'morou em Recife, mas se mudou', 'vai se mudar para Recife', 'nunca morou em Recife', 'está viajando a Recife'],
          c: 0, dif: 'medio',
          exp: 'O present perfect com "for" indica uma situação que começou no passado e continua no presente.'
        },
        {
          q: 'Em "The students must attend all classes", o verbo "attend" tem o sentido de',
          alt: ['comparecer', 'atender ao telefone', 'esperar', 'ignorar', 'cancelar'],
          c: 0, dif: 'medio',
          exp: '"Attend" = comparecer, frequentar. O falso cognato não é "atender".'
        },
        {
          q: 'No cartaz "You should drink more water", o modal "should" expressa',
          alt: ['um conselho', 'uma ordem obrigatória', 'uma impossibilidade', 'uma habilidade', 'um desejo de viajar'],
          c: 0, dif: 'medio',
          exp: '"Should" indica conselho ou recomendação.'
        },
        {
          q: 'Em "After several failed attempts, she eventually passed the exam", a palavra "eventually" indica que',
          alt: ['por fim, ela passou', 'talvez ela passe um dia', 'ela passou na primeira tentativa', 'ela não passou', 'ela ainda vai fazer a prova'],
          c: 0, dif: 'dificil',
          exp: '"Eventually" = por fim, depois de um tempo ou de um processo. Não significa "eventualmente".'
        },
        {
          q: 'Em "Don\'t give up; keep trying", o conselho é',
          alt: ['continuar tentando, sem desistir', 'devolver o objeto emprestado', 'subir de nível', 'procurar um novo emprego', 'esperar em silêncio'],
          c: 0, dif: 'medio',
          exp: '"Give up" = desistir; "keep trying" = continue tentando. O texto incentiva a persistência.'
        }
      ],
      pares: [
        { a: 'Actually', b: 'Na verdade' },
        { a: 'Pretend', b: 'Fingir' },
        { a: 'Library', b: 'Biblioteca' },
        { a: 'Parents', b: 'Pais' },
        { a: 'Attend', b: 'Comparecer' },
        { a: 'Push', b: 'Empurrar' },
        { a: 'Give up', b: 'Desistir' },
        { a: 'Look for', b: 'Procurar' }
      ]
    },

    /* ============ 3. ESPANHOL: ESTRATÉGIAS DE LEITURA ============ */
    {
      id: 'espanhol-leitura',
      nome: 'Espanhol: estratégias de leitura e gêneros',
      incidencia: 'alta',
      resumo: 'Por ser próximo do português, o espanhol permite compreender muito pelo contexto. Cuidado com as armadilhas: falsos amigos e o excesso de confiança.',
      conceitos: [
        {
          titulo: 'Como a prova costuma ser',
          texto: 'Em geral há **dois ou três textos** em espanhol e **cinco questões** em português. Os textos são autênticos: crônicas, poemas, reportagens, tirinhas, anúncios, campanhas, tweets.\n\nO que se cobra: **compreensão global**, **inferência**, **vocabulário em contexto** e **relações culturais** (hispanidade, identidade, língua e sociedade). Gramática isolada cai pouco.'
        },
        {
          titulo: 'Semelhanças e diferenças com o português',
          texto: 'Muitas palavras são iguais ou muito parecidas (*familia*, *importante*, *ciudad*, *trabajo*), mas há diferenças de **grafia** (ñ, ll, ch), de **pronúncia** e de **artigo** (*el mar*, *la sal*).\n\nCuidado com os **heterossemânticos** ("falsos amigos") e com palavras que significam coisa parecida, mas com outra intenção.'
        },
        {
          titulo: 'Passo a passo para ler bem',
          texto: '1. Leia o **comando** em português.\n2. Observe **título, imagem e fonte**.\n3. Leia o texto buscando a **ideia geral**.\n4. Releia só os trechos necessários para responder.\n5. Elimine alternativas que **contradizem** o texto ou **extrapolam**.\n6. Se houver uma palavra "suspeita" (falso amigo), teste o sentido no contexto.'
        }
      ],
      pegadinhas: [
        'Achar que "entendo tudo" porque é parecido com o português e **escolher por intuição**.',
        'Cair em **falsos amigos** (como *exquisito*, *embarazada*, *rato*).',
        'Dar mais peso a uma palavra solta do que à **ideia do parágrafo**.',
        'Responder com base no **seu conhecimento** do tema, e não no texto.'
      ],
      dicas: [
        'Leia o título e o primeiro e o último parágrafos: eles resumem muita coisa.',
        'Sublinhe os **verbos** e os **conectores** (*pero*, *aunque*, *sin embargo*, *por eso*).',
        'Em textos de humor ou de campanha, pergunte: "qual é a intenção?".'
      ],
      exemplo: {
        enunciado: 'Texto: "Aunque el café es popular, muchos jóvenes prefieren el té." Qual é a ideia?',
        resolucao: '"**Aunque**" = embora (concessão). Embora o café seja popular, muitos jovens preferem o chá. A ideia central é a **preferência dos jovens pelo chá**.'
      },
      fontes: [F.inep, F.critica],
      flashcards: [
        { f: 'Pero', v: 'Mas.' },
        { f: 'Aunque', v: 'Embora, mesmo que.' },
        { f: 'Sin embargo', v: 'No entanto.' },
        { f: 'Por eso', v: 'Por isso.' },
        { f: 'Porque / por qué', v: 'Porque (resposta) / por quê (pergunta).' },
        { f: 'Quantos textos em espanhol costuma haver na prova?', v: 'Dois ou três, com cinco questões em português.' },
        { f: 'O que são falsos amigos?', v: 'Palavras parecidas com o português, mas de sentido diferente (heterossemânticos).' },
        { f: 'Primeiro passo na leitura em língua estrangeira', v: 'Ler o comando e observar título, imagem e fonte.' }
      ],
      quiz: [
        {
          q: 'Texto: "Aunque llovía, salimos a caminar por el parque". Qual a ideia central?',
          alt: ['Foram caminhar, mesmo com a chuva', 'Ficaram em casa por causa da chuva', 'Caminharam depois da chuva', 'A chuva começou no parque', 'Não gostam de caminhar'],
          c: 0, dif: 'facil',
          exp: '"Aunque" indica concessão: apesar da chuva, saíram para caminhar.'
        },
        {
          q: 'Em um cartaz lê-se: "No tires basura en la calle. Cuidemos nuestra ciudad". O texto tem a finalidade de',
          alt: ['conscientizar sobre a limpeza da cidade', 'anunciar uma promoção de produtos', 'convidar para uma festa na rua', 'relatar um acidente de trânsito', 'ensinar uma receita regional'],
          c: 0, dif: 'facil',
          exp: '"No tires basura" e "cuidemos nuestra ciudad" formam um apelo de conscientização.'
        },
        {
          q: 'Tirinha: "— ¿Por qué no estudias? — Porque el mundo es muy grande y mi tiempo es muy pequeño". A fala do segundo personagem sugere',
          alt: ['uma desculpa bem-humorada para não estudar', 'um planejamento rigoroso de estudos', 'uma crítica à escola', 'uma reclamação do clima', 'um convite para viajar'],
          c: 0, dif: 'medio',
          exp: 'A resposta dá uma justificativa exagerada para não estudar, com humor.'
        },
        {
          q: 'No título "Jóvenes usan menos el celular para llamar y más para chatear", o texto trata de',
          alt: ['mudança do uso do celular entre jovens', 'a proibição do celular', 'o preço dos celulares', 'uma festa de aniversário', 'uma pesquisa sobre alimentação'],
          c: 0, dif: 'medio',
          exp: 'O contraste "menos para llamar / más para chatear" mostra a mudança de hábito dos jovens.'
        },
        {
          q: 'Em "El museo abre de martes a domingo; sin embargo, los lunes permanece cerrado", o conectivo "sin embargo" indica',
          alt: ['contraste: fecha às segundas', 'causa do fechamento semanal', 'conclusão sobre o horário de verão', 'dúvida sobre os horários', 'adição de um novo horário'],
          c: 0, dif: 'medio',
          exp: '"Sin embargo" = no entanto. Contrasta o funcionamento diário com o fechamento de segunda.'
        },
        {
          q: 'Em um poema: "Mi casa es pequeña, pero cabe el mundo en ella". O verso sugere que',
          alt: ['mesmo pequena, a casa abriga muito', 'a casa é grande demais para ele', 'o autor quer mudar de casa', 'a casa é fria e vazia', 'o poeta não gosta do mundo'],
          c: 0, dif: 'dificil',
          exp: 'O contraste entre "pequeña" e "cabe el mundo" cria uma imagem de amplitude afetiva.'
        },
        {
          q: 'Na campanha "Cuida tu salud: duerme bien, come bien, mueve tu cuerpo", predomina o uso de',
          alt: ['verbos no imperativo, para orientar o leitor', 'verbos no passado, para narrar uma história', 'perguntas retóricas', 'termos científicos complexos', 'diálogos de personagens'],
          c: 0, dif: 'medio',
          exp: '"Cuida", "duerme", "come", "mueve" são imperativos, típicos de campanha.'
        },
        {
          q: 'O que mais ajuda a evitar erros ao ler um texto em espanhol?',
          alt: ['usar o contexto e desconfiar de falsos amigos', 'traduzir cada palavra isoladamente', 'ignorar o título e as imagens', 'escolher a alternativa mais longa', 'confiar só no conhecimento prévio'],
          c: 0, dif: 'dificil',
          exp: 'O contexto resolve a maioria das dúvidas; e falsos amigos pedem atenção especial.'
        }
      ],
      pares: [
        { a: 'Pero', b: 'Mas' },
        { a: 'Aunque', b: 'Embora' },
        { a: 'Sin embargo', b: 'No entanto' },
        { a: 'Por eso', b: 'Por isso' },
        { a: 'Además', b: 'Além disso' },
        { a: 'Imperativo', b: 'Marca de campanhas e anúncios' },
        { a: 'Heterossemântico', b: 'Falso amigo' },
        { a: 'Comando', b: 'Leia primeiro, em português' }
      ]
    },

    /* ============ 4. ESPANHOL: FALSOS AMIGOS E HISPANIDADE ============ */
    {
      id: 'espanhol-falsos-hispanidade',
      nome: 'Espanhol: falsos amigos, vocabulário e hispanidade',
      incidencia: 'media',
      resumo: 'Entender palavras que enganam e conhecer a diversidade cultural dos países hispânicos ajuda em qualquer texto de espanhol.',
      conceitos: [
        {
          titulo: 'Falsos amigos (heterossemânticos) mais comuns',
          texto: '- **embarazada** = grávida (não "embaraçada").\n- **exquisito** = delicioso, refinado (não "esquisito"; esquisito = *raro, extraño*).\n- **cena** = jantar (não "cena").\n- **rato** = momento, instante (rato animal = *rata/ratón*).\n- **apellido** = sobrenome (não "apelido"; apelido = *apodo*).\n- **largo** = comprido (não "largo").\n- **oficina** = escritório, local de trabalho.\n- **vaso** = copo (não "vaso de planta"; planta = *maceta*).\n- **taza** = xícara (taça = *copa*).\n- **rubio** = loiro (não "rubro").\n- **tirar** = jogar, lançar.\n- **polvo** = pó (o animal é *pulpo*).'
        },
        {
          titulo: 'Hispanidade: diversidade cultural',
          texto: 'O espanhol é falado em mais de 20 países, com variações de vocabulário, sotaque e costumes. A **hispanidade** reconhece essa pluralidade cultural.\n\n- **Literatura**: Miguel de Cervantes (*Dom Quixote*), Gabriel García Márquez (*Cem Anos de Solidão*, realismo mágico, Colômbia), Pablo Neruda (Chile), Jorge Luis Borges (Argentina), Isabel Allende (Chile).\n- **Artes**: Frida Kahlo (México), Pablo Picasso (Espanha), Diego Rivera (México).\n- **Quadrinhos**: **Mafalda**, de Quino (Argentina), crítica social em tirinhas.\n- **Datas e celebrações**: Dia dos Mortos (México), Dia da Hispanidade (12 de outubro), carnavais e festas locais.'
        },
        {
          titulo: 'Relação com o Brasil',
          texto: 'O Brasil faz fronteira com quase todos os países da América do Sul de língua espanhola. O **Mercosul** (Brasil, Argentina, Uruguai e Paraguai, entre outros) ampliou a importância do espanhol para trabalho, comércio e cultura.\n\nTextos do ENEM costumam abordar **identidade latino-americana, migração, tecnologia, meio ambiente e direitos**.'
        }
      ],
      pegadinhas: [
        'Traduzir *exquisito* como "esquisito": em espanhol é elogio (delicioso, refinado).',
        'Traduzir *embarazada* como "embaraçada": significa grávida.',
        'Confundir *apellido* (sobrenome) com apelido (*apodo*).',
        'Achar que "hispanidade" é só a Espanha: inclui **toda a comunidade hispano-falante**.'
      ],
      dicas: [
        'Crie uma lista pessoal de **10 falsos amigos** e revise toda semana (flashcards e jogos ajudam).',
        'Em textos culturais, procure **identidade, memória e diversidade** como temas centrais.',
        'Se a palavra parecer "esquisita", teste o contexto: o sentido costuma ficar claro.'
      ],
      exemplo: {
        enunciado: 'Em "La cena estuvo exquisita", qual é o sentido?',
        resolucao: '"Cena" = **jantar**; "exquisita" = **deliciosa**. A frase significa "O jantar estava delicioso", e não "a cena estava esquisita".'
      },
      fontes: [F.inep, F.critica],
      flashcards: [
        { f: 'Embarazada', v: 'Grávida (não "embaraçada").' },
        { f: 'Exquisito', v: 'Delicioso, refinado (não "esquisito").' },
        { f: 'Apellido', v: 'Sobrenome.' },
        { f: 'Cena', v: 'Jantar.' },
        { f: 'Rato', v: 'Momento, instante.' },
        { f: 'Vaso', v: 'Copo.' },
        { f: 'Oficina', v: 'Escritório.' },
        { f: 'Dia da Hispanidade', v: '12 de outubro.' }
      ],
      quiz: [
        {
          q: 'Na frase "María está embarazada de seis meses", a palavra "embarazada" significa',
          alt: ['grávida', 'envergonhada', 'embaraçada', 'cansada', 'viajante'],
          c: 0, dif: 'facil',
          exp: '"Embarazada" = grávida. É falso amigo de "embaraçada".'
        },
        {
          q: 'Em "La comida estaba exquisita", a intenção do falante é',
          alt: ['elogiar a comida', 'criticar a comida', 'dizer que a comida era esquisita', 'recusar o convite', 'pedir a conta'],
          c: 0, dif: 'facil',
          exp: '"Exquisita" = deliciosa. É elogio, não crítica.'
        },
        {
          q: '"Mi apellido es Fernández" significa',
          alt: ['meu sobrenome é Fernández', 'meu apelido é Fernández', 'meu amigo é Fernández', 'meu bairro é Fernández', 'meu professor é Fernández'],
          c: 0, dif: 'facil',
          exp: '"Apellido" = sobrenome. Apelido é "apodo".'
        },
        {
          q: 'Em "Espera un rato, ya vuelvo", a palavra "rato" indica',
          alt: ['um momento', 'um animal', 'uma pergunta', 'uma briga', 'uma música'],
          c: 0, dif: 'medio',
          exp: '"Un rato" = um momento.'
        },
        {
          q: 'A tira Mafalda, do argentino Quino, é conhecida por',
          alt: ['abordar temas sociais com humor crítico', 'narrar aventuras de super-heróis', 'apresentar receitas de cozinha', 'divulgar produtos de supermercado', 'ensinar gramática espanhola'],
          c: 0, dif: 'medio',
          exp: 'Mafalda faz crítica social e política, por meio do olhar de uma menina questionadora.'
        },
        {
          q: 'O "Dia da Hispanidade" (12 de outubro) está relacionado a',
          alt: ['uma data ligada à comunidade hispânica', 'o início do ano letivo no Brasil', 'o fim da Segunda Guerra Mundial', 'uma festa agrícola brasileira', 'a independência do Brasil'],
          c: 0, dif: 'medio',
          exp: 'A data é associada à língua e à cultura hispânicas, embora seja tema de debate histórico.'
        },
        {
          q: 'Em "Pon el agua en el vaso", a palavra "vaso" refere-se a',
          alt: ['copo', 'vaso de flores', 'balde', 'prato', 'garrafa'],
          c: 0, dif: 'medio',
          exp: '"Vaso" em espanhol é copo. O vaso de plantas é "maceta".'
        },
        {
          q: 'A obra "Cem Anos de Solidão", de Gabriel García Márquez, é associada a qual estilo literário latino-americano?',
          alt: ['realismo mágico', 'Parnasianismo', 'Arcadismo', 'concretismo', 'Naturalismo'],
          c: 0, dif: 'dificil',
          exp: 'O realismo mágico mistura elementos fantásticos e cotidianos de forma natural.'
        }
      ],
      pares: [
        { a: 'Embarazada', b: 'Grávida' },
        { a: 'Exquisito', b: 'Delicioso' },
        { a: 'Apellido', b: 'Sobrenome' },
        { a: 'Cena', b: 'Jantar' },
        { a: 'Rato', b: 'Momento' },
        { a: 'Vaso', b: 'Copo' },
        { a: 'Mafalda', b: 'Tirinha de Quino' },
        { a: 'Realismo mágico', b: 'García Márquez' }
      ]
    }
  ]);
})();
