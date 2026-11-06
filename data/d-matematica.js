/* Matemática — CONTEÚDO-EXEMPLO (1 tema completo, serve de modelo para as demais disciplinas).
   Regras: 5 alternativas por questão, "c" = índice (0 a 4) da certa, explicação sem citar letras
   (as alternativas são embaralhadas na hora), pares curtos para os jogos. */
ENEM.temas('matematica', [
  {
    id: 'proporcao',
    nome: 'Razão, proporção e porcentagem',
    incidencia: 'alta',
    resumo: 'A base de quase toda a prova de Matemática: escala, regra de três, descontos, aumentos e variações sucessivas.',
    conceitos: [
      {
        titulo: 'Razão e proporção',
        texto: '**Razão** é a comparação entre duas grandezas por divisão (a/b). **Proporção** é a igualdade entre duas razões (a/b = c/d).\n\nPropriedade fundamental: o produto dos extremos é igual ao produto dos meios (a·d = b·c).\n\nEm uma **escala 1:n**, 1 unidade no desenho representa n unidades reais.'
      },
      {
        titulo: 'Regra de três: direta ou inversa?',
        texto: 'Antes de calcular, pergunte: "se uma grandeza **dobra**, a outra dobra ou cai pela metade?"\n\n- **Direta**: as duas crescem juntas (a razão entre elas é constante). Ex.: quantidade de farinha e número de pessoas.\n- **Inversa**: uma cresce, a outra diminui (o produto entre elas é constante). Ex.: número de operários e dias de obra.'
      },
      {
        titulo: 'Porcentagem com fator multiplicativo',
        texto: 'x% significa x/100. O jeito mais seguro de resolver é usar o **fator**:\n\n- Aumento de x% → multiplique por (1 + x/100). Ex.: +20% → ×1,2\n- Desconto de x% → multiplique por (1 − x/100). Ex.: −15% → ×0,85\n\nEm variações **sucessivas**, multiplique os fatores. Nunca some as porcentagens.'
      },
      {
        titulo: 'Pontos percentuais x porcentagem',
        texto: 'Se um índice sobe de 40% para 50%, a variação é de **10 pontos percentuais** (diferença simples). Em termos relativos, o crescimento é de 10/40 = **25%**.'
      }
    ],
    pegadinhas: [
      'Somar descontos sucessivos: −10% e −10% não dá −20%. O fator é 0,9 × 0,9 = 0,81, ou seja, −19%.',
      'Aumentar 20% e depois reduzir 20% **não** volta ao valor original, porque a base mudou: 1,2 × 0,8 = 0,96 (4% a menos).',
      'Tratar como direta uma grandeza inversa (mais operários → menos dias, não mais).',
      'Misturar unidades (m com cm, km/h com m/s) antes de converter.',
      'Confundir "pontos percentuais" com "porcentagem" em questões de pesquisas e índices.'
    ],
    dicas: [
      'Escreva qual é a **base (100%)** antes de qualquer conta.',
      'Prefira o fator multiplicativo (1,2; 0,9) a calcular "tira e põe" porcentagem por porcentagem.',
      'Nas alternativas, estime a ordem de grandeza: muitas vezes duas ou três já saem na estimativa.',
      'Em escala, escreva a conversão por extenso (1 cm = 2 km) e só depois multiplique.'
    ],
    exemplo: {
      enunciado: 'Um produto de R$ 200,00 recebe um desconto de 10% e, em seguida, mais 10% sobre o novo preço. Qual é o preço final?',
      resolucao: 'Fator de cada desconto: 0,9.\nPreço final = 200 × 0,9 × 0,9 = **R$ 162,00**.\nO desconto total foi de 19%, e não de 20%.'
    },
    fontes: [
      { titulo: 'INEP — Matriz de Referência do ENEM (Matemática e suas Tecnologias)', url: '' },
      { titulo: 'INEP — Provas e gabaritos de edições anteriores (para treino com questões reais)', url: '' }
    ],
    flashcards: [
      { f: 'O que é razão?', v: 'Comparação entre duas grandezas por divisão (a/b).' },
      { f: 'O que é proporção?', v: 'Igualdade entre duas razões: a/b = c/d.' },
      { f: 'Propriedade fundamental das proporções', v: 'Em a/b = c/d, o produto dos extremos é igual ao dos meios: a·d = b·c.' },
      { f: 'Grandezas diretamente proporcionais', v: 'Quando uma aumenta, a outra aumenta na mesma razão (a razão entre elas é constante).' },
      { f: 'Grandezas inversamente proporcionais', v: 'Quando uma aumenta, a outra diminui na mesma razão (o produto entre elas é constante).' },
      { f: 'Como calcular um aumento de x%?', v: 'Multiplique por (1 + x/100). Ex.: +20% → ×1,2.' },
      { f: 'Como calcular um desconto de x%?', v: 'Multiplique por (1 − x/100). Ex.: −15% → ×0,85.' },
      { f: 'Variações percentuais sucessivas', v: 'Multiplique os fatores; não some as porcentagens. Ex.: −10% e −10% → ×0,81 (−19%).' },
      { f: 'O que significa escala 1:n?', v: '1 unidade no desenho representa n unidades reais.' },
      { f: 'O que é ponto percentual?', v: 'A diferença simples entre duas porcentagens. De 40% para 50% = +10 pontos percentuais.' }
    ],
    quiz: [
      {
        dif: 'facil',
        q: 'Em um mapa, a escala é 1:200.000. Dois pontos que distam 3 cm no mapa estão, na realidade, a quantos quilômetros um do outro?',
        alt: ['0,6 km', '3 km', '6 km', '60 km', '600 km'],
        c: 2,
        exp: '3 cm × 200.000 = 600.000 cm. Como 100.000 cm = 1 km, a distância real é de **6 km**.'
      },
      {
        dif: 'facil',
        q: 'Uma loja oferece 15% de desconto em uma camiseta que custa R$ 80,00. Qual é o valor a pagar?',
        alt: ['R$ 12,00', 'R$ 65,00', 'R$ 66,00', 'R$ 68,00', 'R$ 92,00'],
        c: 3,
        exp: 'Desconto: 15% de 80 = 12. Preço final: 80 − 12 = **R$ 68,00** (ou 80 × 0,85).'
      },
      {
        dif: 'facil',
        q: 'Uma receita para 4 pessoas usa 300 g de farinha. Mantendo a proporção, quantos gramas são necessários para 10 pessoas?',
        alt: ['600 g', '650 g', '700 g', '750 g', '1.200 g'],
        c: 3,
        exp: 'Grandezas diretamente proporcionais: 300 ÷ 4 = 75 g por pessoa; 75 × 10 = **750 g**.'
      },
      {
        dif: 'medio',
        q: 'Três pedreiros constroem um muro em 12 dias. Mantendo o mesmo ritmo de trabalho, em quantos dias 4 pedreiros construiriam o mesmo muro?',
        alt: ['8 dias', '9 dias', '10 dias', '16 dias', '48 dias'],
        c: 1,
        exp: 'Mais pedreiros, menos dias: grandezas inversamente proporcionais. O produto é constante: 3 × 12 = 36 → 36 ÷ 4 = **9 dias**. Quem respondeu 16 tratou como regra de três direta.'
      },
      {
        dif: 'medio',
        q: 'O preço de um produto aumentou 20% e, na semana seguinte, diminuiu 20% sobre o novo valor. Em relação ao preço original, o preço final é',
        alt: [
          'igual ao original.',
          '4% menor que o original.',
          '4% maior que o original.',
          '20% menor que o original.',
          '20% maior que o original.'
        ],
        c: 1,
        exp: 'Fatores: 1,2 × 0,8 = 0,96. O preço final é 96% do original, ou seja, **4% menor**. A segunda variação incide sobre uma base maior.'
      },
      {
        dif: 'medio',
        q: 'Uma pesquisa mostrou que a aprovação de um serviço subiu de 40% para 50%. Esse aumento corresponde a',
        alt: [
          '10 pontos percentuais, o que representa um crescimento relativo de 25%.',
          '10%, tanto em pontos percentuais quanto em crescimento relativo.',
          '25 pontos percentuais.',
          '10 pontos percentuais, o que representa um crescimento relativo de 10%.',
          '50% de crescimento relativo.'
        ],
        c: 0,
        exp: 'Pontos percentuais são a diferença simples: 50 − 40 = 10. O crescimento relativo é 10 ÷ 40 = **25%**.'
      },
      {
        dif: 'dificil',
        q: 'Uma torneira enche um tanque em 6 horas e outra enche o mesmo tanque em 3 horas. Funcionando juntas, em quanto tempo as duas enchem o tanque?',
        alt: ['1 hora', '1 hora e 30 minutos', '2 horas', '4 horas e 30 minutos', '9 horas'],
        c: 2,
        exp: 'Em 1 hora, a primeira enche 1/6 do tanque e a segunda 1/3. Juntas: 1/6 + 2/6 = 3/6 = 1/2 do tanque por hora. Logo, levam **2 horas**. Calcular a média (4h30) é um erro comum.'
      },
      {
        dif: 'dificil',
        q: 'Um comerciante comprou uma mercadoria por R$ 60,00 e quer vendê-la obtendo um lucro de 25% **sobre o preço de venda**. Qual deve ser o preço de venda?',
        alt: ['R$ 75,00', 'R$ 80,00', 'R$ 85,00', 'R$ 90,00', 'R$ 100,00'],
        c: 1,
        exp: 'Se o lucro é 25% do preço de venda (P), o custo corresponde a 75% de P: 0,75 · P = 60 → P = **R$ 80,00**. Calcular 25% sobre o custo daria R$ 75,00, que é a armadilha.'
      }
    ],
    pares: [
      { a: 'Razão', b: 'Divisão entre duas grandezas' },
      { a: 'Proporção', b: 'Igualdade entre duas razões' },
      { a: 'Diretamente proporcionais', b: 'Razão constante' },
      { a: 'Inversamente proporcionais', b: 'Produto constante' },
      { a: 'Desconto de 15%', b: 'Multiplicar por 0,85' },
      { a: 'Aumento de 20%', b: 'Multiplicar por 1,2' },
      { a: 'Escala 1:100', b: '1 cm no desenho = 100 cm reais' },
      { a: 'Ponto percentual', b: 'Diferença simples entre percentuais' }
    ]
  }
]);
