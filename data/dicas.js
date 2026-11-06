/* ENEM Lab — dicas. Categorias vazias aparecem como "em breve".
   Cada dica: { titulo, texto, fonte } — a fonte deve ser verificável. */
(function () {
  'use strict';
  window.DICAS = [
    {
      id: 'estudo', emoji: '🧠', nome: 'Como estudar (neurociência da aprendizagem)',
      itens: [
        {
          titulo: 'Teste-se em vez de reler',
          texto: 'Tentar lembrar a informação sem olhar (flashcards, quiz, resumo de memória) fixa mais do que reler o texto. O esforço de recuperar é o que fortalece a memória.',
          fonte: 'Roediger & Karpicke (2006), Psychological Science — "Test-enhanced learning"'
        },
        {
          titulo: 'Espace as revisões',
          texto: 'Revisar em dias diferentes (hoje, amanhã, em alguns dias) retém mais que concentrar tudo em uma única sessão. Os flashcards do ENEM Lab já seguem esse calendário.',
          fonte: 'Dunlosky et al. (2013), Psychological Science in the Public Interest — prática distribuída e prática de testes têm alta utilidade'
        },
        {
          titulo: 'Misture os assuntos (intercalação)',
          texto: 'Alternar tipos de problema na mesma sessão parece mais difícil, mas melhora a capacidade de escolher a estratégia certa — exatamente o que a prova exige. Use o quiz misto.',
          fonte: 'Rohrer & Taylor (2007), Instructional Science — "The shuffling of mathematics problems improves learning"'
        },
        {
          titulo: 'Durma: o sono consolida o que você estudou',
          texto: 'Parte da consolidação da memória acontece durante o sono. Trocar a noite de sono por mais horas de estudo costuma render menos.',
          fonte: 'Diekelmann & Born (2010), Nature Reviews Neuroscience — "The memory function of sleep"'
        },
        {
          titulo: 'Pergunte "por quê?" ao estudar',
          texto: 'Explicar para si mesmo por que um fato é verdadeiro cria conexões entre ideias. Depois de ler um conceito, tente explicá-lo com suas palavras.',
          fonte: 'Dunlosky et al. (2013) — interrogação elaborativa e autoexplicação'
        }
      ]
    },
    {
      id: 'prova', emoji: '🎯', nome: 'Estratégia na prova',
      itens: [
        {
          titulo: 'Chegue cedo: os portões fecham pontualmente',
          texto: 'No Enem 2026, os portões abrem às 12h e fecham às 13h, em ponto, nos dois dias (horário de Brasília). A prova começa às 13h30. Quem chega depois não entra. Confira o local e a sala no Cartão de Confirmação com antecedência e, se puder, conheça o trajeto antes.',
          fonte: 'Vestibulando Web — Horários e o que levar nas provas do Enem 2026 (confirme sempre no edital e no Cartão de Confirmação do INEP)'
        },
        {
          titulo: 'Documento original com foto e caneta certa',
          texto: 'Leve o documento oficial de identificação original e com foto (cópia, foto ou impressão de documento digital não valem; versões digitais só nos aplicativos oficiais). A caneta deve ser esferográfica de tinta preta e corpo transparente. Leve mais de uma, porque a falha de uma caneta custa tempo.',
          fonte: 'Vestibulando Web — Horários e o que levar nas provas do Enem 2026'
        },
        {
          titulo: 'Eletrônicos desligados e guardados no envelope',
          texto: 'Celular, relógio inteligente, fones, calculadora e chaves vão para o envelope porta-objetos fornecido pela aplicação. Ele deve ficar lacrado, embaixo da cadeira, e os aparelhos precisam ficar desligados durante toda a prova. Descumprir pode levar à eliminação.',
          fonte: 'Vestibulando Web — Horários e o que levar nas provas do Enem 2026'
        },
        {
          titulo: 'Água e lanche podem ser levados',
          texto: 'Água e lanche são permitidos. Alimentos caseiros devem estar em embalagem transparente, e os industrializados, lacrados ou com rótulo visível. Um lanche simples ajuda a manter a energia nas mais de cinco horas de prova.',
          fonte: 'Vestibulando Web — Horários e o que levar nas provas do Enem 2026'
        },
        {
          titulo: 'A nota não é a soma de acertos (TRI)',
          texto: 'As provas objetivas usam a Teoria de Resposta ao Item: a nota depende mais do padrão das suas respostas do que do total de acertos. Quem domina o conteúdo costuma acertar as questões fáceis, as médias e algumas difíceis. Acertar só difíceis e errar fáceis parece palpite, e esses acertos valem menos. Por isso, garanta primeiro as questões que você domina.',
          fonte: 'Guia da Carreira — Entenda como funciona a Teoria de Resposta ao Item do Enem (a recomendação prática é do ENEM Lab)'
        },
        {
          titulo: 'Questão difícil não tem de ser resolvida na hora',
          texto: 'Se uma questão travar você, marque no caderno, passe para a seguinte e volte depois. Como a nota valoriza a coerência, é melhor garantir as questões que você sabe do que gastar dez minutos em uma só. Elimine as alternativas claramente erradas antes de decidir.',
          fonte: 'Guia da Carreira — Entenda como funciona a TRI (recomendação prática do ENEM Lab, a partir da lógica da TRI)'
        },
        {
          titulo: 'A redação não usa TRI e cai no 1º dia',
          texto: 'A redação é corrigida por pessoas (dois avaliadores) em cinco competências de até 200 pontos, e não entra na TRI. Em 2026, ela está no primeiro dia, 8 de novembro. Reserve tempo para planejar, escrever e revisar, e não deixe para os últimos minutos.',
          fonte: 'Folha de Pernambuco — Cartilha reúne orientações para a redação do Enem 2026; Guia da Carreira — TRI'
        }
      ]
    },
    {
      id: 'redacao', emoji: '✍️', nome: 'Redação',
      itens: [
        {
          titulo: 'Conheça as cinco competências',
          texto: 'Cada competência vale de 0 a 200 pontos: norma culta, compreensão do tema e tipo textual, argumentação, coesão e proposta de intervenção. Dois avaliadores corrigem de forma independente e a nota final é a média. Ao revisar o texto, repasse uma competência por vez.',
          fonte: 'INEP — A Redação no Enem: Cartilha do Participante; Folha de Pernambuco — Cartilha reúne orientações para a redação do Enem 2026'
        },
        {
          titulo: 'Proposta de intervenção com cinco elementos',
          texto: 'Inclua agente (quem faz), ação (o que fazer), meio ou modo (como), finalidade (para quê) e detalhamento (explicação ou exemplo). Ela deve ser ligada ao problema discutido e respeitar os direitos humanos.',
          fonte: 'INEP — A Redação no Enem: Cartilha do Participante (edição 2024)'
        },
        {
          titulo: 'Evite o "repertório de bolso"',
          texto: 'A cartilha recomenda evitar referências prontas e genéricas que não se conectam ao tema. Use poucas referências, bem explicadas, e mostre como elas sustentam seu argumento. Ler com frequência amplia vocabulário e repertório.',
          fonte: 'Folha de Pernambuco — Cartilha reúne orientações para a redação do Enem 2026'
        },
        {
          titulo: 'Não copie os textos motivadores',
          texto: 'Linhas copiadas dos textos motivadores são descontadas do total. Use-os para entender o contexto e reescreva as ideias com suas palavras.',
          fonte: 'Folha de Pernambuco — Cartilha reúne orientações para a redação do Enem 2026'
        },
        {
          titulo: 'O que pode anular a redação',
          texto: 'Entre os motivos de nota zero estão: fugir totalmente do tema, escrever até 7 linhas (texto insuficiente), parte deliberadamente desconectada do tema, identificação do candidato fora do espaço próprio, texto em língua estrangeira e letra ilegível. O limite é de 30 linhas.',
          fonte: 'Folha de Pernambuco — Cartilha reúne orientações para a redação do Enem 2026'
        },
        {
          titulo: 'Direitos humanos: respeite-os na proposta',
          texto: 'A proposta deve respeitar a dignidade humana, a igualdade de direitos e a valorização das diferenças. Prefira soluções baseadas em educação, políticas públicas e diálogo, e evite qualquer ideia de violência ou discriminação.',
          fonte: 'Folha de Pernambuco — Cartilha reúne orientações para a redação do Enem 2026'
        },
        {
          titulo: 'Treine escrevendo e corrigindo',
          texto: 'Use os temas de Redação do ENEM Lab para praticar cada competência e escreva textos completos com tempo marcado. Depois, corrija o seu próprio texto com a lista das cinco competências e reescreva o parágrafo mais fraco.',
          fonte: 'INEP — A Redação no Enem: Cartilha do Participante (método de treino do ENEM Lab)'
        }
      ]
    },
    {
      id: 'rotina', emoji: '🌙', nome: 'Rotina e bem-estar',
      itens: [
        {
          titulo: 'Escreva suas preocupações antes da prova',
          texto: 'Antes de uma prova importante, dedicar uns 10 minutos a escrever o que o preocupa reduziu o efeito da ansiedade no desempenho em estudos com estudantes. É um exercício simples para fazer na véspera ou na manhã da prova.',
          fonte: 'Ramirez & Beilock (2011), Science — "Writing about testing worries boosts exam performance in the classroom"'
        },
        {
          titulo: 'Mexa o corpo: exercício ajuda a cognição',
          texto: 'Atividade física regular está associada a melhor desempenho cognitivo e à saúde do cérebro. Uma caminhada, mesmo curta, entre os blocos de estudo ajuda a espairecer e a manter a energia.',
          fonte: 'Hillman, Erickson & Kramer (2008), Nature Reviews Neuroscience — "Be smart, exercise your heart"'
        },
        {
          titulo: 'Pausas curtas ajudam a manter o foco',
          texto: 'Breves pausas de atenção ao longo de uma tarefa longa ajudam a sustentar o desempenho, que tende a cair quando se foca sem parar. Alterne blocos de estudo com intervalos curtos, sem celular.',
          fonte: 'Ariga & Lleras (2011), Cognition — "Brief and rare mental breaks keep you focused"'
        },
        {
          titulo: 'Deixe o celular longe enquanto estuda',
          texto: 'Mesmo em silêncio, o celular à vista pode reduzir a capacidade cognitiva disponível. Guarde-o em outro cômodo durante os blocos de estudo e use um alarme só para marcar o fim do bloco.',
          fonte: 'Ward et al. (2017), Journal of the Association for Consumer Research — "Brain Drain: the mere presence of one\'s own smartphone reduces available cognitive capacity"'
        },
        {
          titulo: 'Transforme intenção em plano "se... então..."',
          texto: 'Definir antes quando e onde vai estudar (por exemplo: "se for 19h, então abro o quiz do tema do dia") aumenta a chance de cumprir o plano. Monte uma rotina simples e repita no mesmo horário.',
          fonte: 'Gollwitzer & Sheeran (2006), Advances in Experimental Social Psychology — meta-análise sobre intenções de implementação'
        },
        {
          titulo: 'Na véspera, durma: não vire a noite',
          texto: 'A memória se consolida durante o sono. Na noite anterior à prova, prefira uma revisão leve e uma boa noite de sono a estudar até tarde, porque cansaço atrapalha a atenção e o raciocínio no dia seguinte.',
          fonte: 'Diekelmann & Born (2010), Nature Reviews Neuroscience — "The memory function of sleep"'
        }
      ]
    }
  ];
})();
