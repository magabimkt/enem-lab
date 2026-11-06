/* Matemática — CONTEÚDO-EXEMPLO (1 tema completo, serve de modelo para as demais disciplinas).
   Regras: 5 alternativas por questão, "c" = índice (0 a 4) da certa, explicação sem citar letras
   (as alternativas são embaralhadas na hora), pares curtos para os jogos. */
var F_MAT = {
  inep: { titulo: 'INEP — Matrizes de Referência do Enem (Matemática e suas Tecnologias)', url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem' },
  estrategia: { titulo: 'Estratégia Vestibulares — Assuntos que mais caem no Enem (análise de 1998 a 2020)', url: 'https://vestibulares.estrategia.com/portal/enem/assuntos-que-mais-caem-no-enem/' },
  iezzi: { titulo: 'IEZZI, G. et al. Matemática: Ciência e Aplicações (obra de referência)', url: '' }
};
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
        exp: '3 cm × 200.000 = 600.000 cm. Como 100.000 cm = 1 km, a distância real é de **6 km**.',
        res: '- **Escala 1:200.000** significa que 1 cm no mapa = 200.000 cm na realidade.\n- Distância real = 3 × 200.000 = 600.000 cm.\n- Converta: 100.000 cm = 1 km, então 600.000 cm = **6 km**.\n- ⚠️ Armadilha: esquecer de converter cm em km.'
      },
      {
        dif: 'facil',
        q: 'Uma loja oferece 15% de desconto em uma camiseta que custa R$ 80,00. Qual é o valor a pagar?',
        alt: ['R$ 12,00', 'R$ 65,00', 'R$ 66,00', 'R$ 68,00', 'R$ 92,00'],
        c: 3,
        exp: 'Desconto: 15% de 80 = 12. Preço final: 80 − 12 = **R$ 68,00** (ou 80 × 0,85).',
        res: '- **Desconto**: 15% de 80 = 0,15 × 80 = 12.\n- **Preço final**: 80 − 12 = **R$ 68,00**.\n- Atalho: pagar 85% do preço → 80 × 0,85 = 68.'
      },
      {
        dif: 'facil',
        q: 'Uma receita para 4 pessoas usa 300 g de farinha. Mantendo a proporção, quantos gramas são necessários para 10 pessoas?',
        alt: ['600 g', '650 g', '700 g', '750 g', '1.200 g'],
        c: 3,
        exp: 'Grandezas diretamente proporcionais: 300 ÷ 4 = 75 g por pessoa; 75 × 10 = **750 g**.',
        res: '- Mais pessoas, mais farinha: **grandezas diretamente proporcionais**.\n- Regra de três: 4 pessoas → 300 g; 10 pessoas → x.\n- x = (300 × 10) ÷ 4 = 3.000 ÷ 4 = **750 g**.'
      },
      {
        dif: 'medio',
        q: 'Três pedreiros constroem um muro em 12 dias. Mantendo o mesmo ritmo de trabalho, em quantos dias 4 pedreiros construiriam o mesmo muro?',
        alt: ['8 dias', '9 dias', '10 dias', '16 dias', '48 dias'],
        c: 1,
        exp: 'Mais pedreiros, menos dias: grandezas inversamente proporcionais. O produto é constante: 3 × 12 = 36 → 36 ÷ 4 = **9 dias**. Quem respondeu 16 tratou como regra de três direta.',
        res: '- Mais pedreiros, **menos** dias: grandezas **inversamente** proporcionais.\n- O produto é constante: 3 × 12 = 36 "pedreiro-dias".\n- Com 4 pedreiros: 36 ÷ 4 = **9 dias**.\n- ⚠️ Armadilha: tratar como regra de três direta dá 16 dias.'
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
        exp: 'Fatores: 1,2 × 0,8 = 0,96. O preço final é 96% do original, ou seja, **4% menor**. A segunda variação incide sobre uma base maior.',
        res: '- Aumento de 20% → fator 1,2. Redução de 20% → fator 0,8.\n- Fator total: 1,2 × 0,8 = 0,96.\n- O preço final é 96% do original: **4% menor**.\n- ⚠️ A segunda variação incide sobre um valor já maior, por isso não se anulam.'
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
        exp: 'Pontos percentuais são a diferença simples: 50 − 40 = 10. O crescimento relativo é 10 ÷ 40 = **25%**.',
        res: '- **Pontos percentuais** = diferença simples: 50 − 40 = **10 p.p.**\n- **Crescimento relativo** = aumento ÷ valor inicial = 10 ÷ 40 = 0,25 = **25%**.'
      },
      {
        dif: 'dificil',
        q: 'Uma torneira enche um tanque em 6 horas e outra enche o mesmo tanque em 3 horas. Funcionando juntas, em quanto tempo as duas enchem o tanque?',
        alt: ['1 hora', '1 hora e 30 minutos', '2 horas', '4 horas e 30 minutos', '9 horas'],
        c: 2,
        exp: 'Em 1 hora, a primeira enche 1/6 do tanque e a segunda 1/3. Juntas: 1/6 + 2/6 = 3/6 = 1/2 do tanque por hora. Logo, levam **2 horas**. Calcular a média (4h30) é um erro comum.',
        res: '- Em 1 hora, a primeira enche 1/6 do tanque e a segunda 1/3 (= 2/6).\n- Juntas: 1/6 + 2/6 = 3/6 = 1/2 tanque por hora.\n- Se enchem metade por hora, o tanque todo leva **2 horas**.\n- ⚠️ A média (4 h 30) é um erro comum.'
      },
      {
        dif: 'dificil',
        q: 'Um comerciante comprou uma mercadoria por R$ 60,00 e quer vendê-la obtendo um lucro de 25% **sobre o preço de venda**. Qual deve ser o preço de venda?',
        alt: ['R$ 75,00', 'R$ 80,00', 'R$ 85,00', 'R$ 90,00', 'R$ 100,00'],
        c: 1,
        exp: 'Se o lucro é 25% do preço de venda (P), o custo corresponde a 75% de P: 0,75 · P = 60 → P = **R$ 80,00**. Calcular 25% sobre o custo daria R$ 75,00, que é a armadilha.',
        res: '- Seja P o preço de venda. Lucro = 25% de P, então o custo é os 75% restantes.\n- 0,75 · P = 60.\n- P = 60 ÷ 0,75 = **R$ 80,00**.\n- ⚠️ Se o lucro fosse 25% sobre o custo, seria 60 × 1,25 = 75.'
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
  },
  /* ============ FUNÇÕES ============ */
  {
    id: 'funcoes',
    nome: 'Funções: afim, quadrática, exponencial e gráficos',
    incidencia: 'alta',
    resumo: 'O segundo assunto mais cobrado. Interpretar gráficos, modelar situações (taxa fixa + variável, lucro máximo, crescimento) e achar máximos e mínimos.',
    conceitos: [
      {
        titulo: 'Função afim (1º grau)',
        texto: 'f(x) = a·x + b. O **a** é a **taxa de variação** (inclinação) e o **b** é o valor inicial (onde o gráfico corta o eixo y).\n\n- a > 0: **crescente**; a < 0: **decrescente**.\n- Situações típicas: táxi (bandeirada **b** + preço por km **a**), plano de celular, salário fixo + comissão.\n- A raiz (onde f = 0) é x = −b/a.'
      },
      {
        titulo: 'Função quadrática (2º grau)',
        texto: 'f(x) = a·x² + b·x + c: o gráfico é uma **parábola**.\n\n- a > 0: concavidade para cima (**mínimo**); a < 0: para baixo (**máximo**).\n- **Vértice**: x_v = −b/(2a) e y_v = f(x_v). É o ponto de lucro máximo, altura máxima, custo mínimo.\n- **Raízes** (Bháskara): x = (−b ± √Δ)/(2a), com Δ = b² − 4ac. Soma das raízes = −b/a; produto = c/a.'
      },
      {
        titulo: 'Exponencial, logaritmo e leitura de gráficos',
        texto: '- **Exponencial** f(x) = a^x: crescimento ou decaimento por fator multiplicativo (juros compostos, populações, meia-vida).\n- **Logaritmo** é o inverso: log_a(b) = x significa a^x = b. Ex.: log₂ 32 = 5.\n- **Leitura de gráficos**: identifique **eixos, unidades, intervalos de crescimento e valores máximos e mínimos**. Muitas questões só pedem ler o gráfico, sem fórmula.'
      }
    ],
    pegadinhas: [
      'Confundir **taxa de variação** (a) com **valor inicial** (b) na função afim.',
      'Esquecer que o **máximo/mínimo** de uma parábola está no **vértice**, não nas raízes.',
      'Trocar o sinal de b na fórmula do vértice: x_v = **−b**/(2a).',
      'Tratar crescimento exponencial como linear: a razão é multiplicativa.'
    ],
    dicas: [
      'Monte a função a partir do enunciado: **valor fixo + (taxa × quantidade)**.',
      'Em problemas de máximo/mínimo com parábola, vá direto ao **vértice**.',
      'Em gráficos, teste os extremos e o ponto pedido antes de calcular.'
    ],
    exemplo: {
      enunciado: 'O lucro de uma loja é L(x) = −x² + 10x − 16, em milhares de reais, sendo x o número de peças vendidas (em centenas). Qual o lucro máximo?',
      resolucao: 'Como a < 0, há máximo no vértice: x_v = −10/(2·(−1)) = 5. L(5) = −25 + 50 − 16 = **9**. O lucro máximo é de **9 mil reais**.'
    },
    fontes: [F_MAT.inep, F_MAT.estrategia, F_MAT.iezzi],
    flashcards: [
      { f: 'Forma da função afim', v: 'f(x) = a·x + b, com taxa de variação a e valor inicial b.' },
      { f: 'Quando a função afim é crescente?', v: 'Quando a > 0.' },
      { f: 'Forma da função quadrática', v: 'f(x) = a·x² + b·x + c; gráfico é uma parábola.' },
      { f: 'Fórmula do vértice (x)', v: 'x_v = −b/(2a).' },
      { f: 'Fórmula de Bháskara', v: 'x = (−b ± √Δ)/(2a), com Δ = b² − 4ac.' },
      { f: 'Soma e produto das raízes', v: 'Soma = −b/a e produto = c/a.' },
      { f: 'O que significa log₂ 8 = 3?', v: '2 elevado a 3 é igual a 8.' },
      { f: 'Quando a parábola tem ponto de máximo?', v: 'Quando a < 0 (concavidade para baixo).' }
    ],
    quiz: [
      {
        q: 'Uma corrida de táxi cobra R$ 5,00 fixos mais R$ 2,00 por quilômetro. O valor de uma corrida de 12 km é de',
        alt: ['R$ 29,00', 'R$ 24,00', 'R$ 34,00', 'R$ 19,00', 'R$ 41,00'],
        c: 0, dif: 'facil',
        exp: 'P(x) = 5 + 2x; P(12) = 5 + 24 = 29.',
        res: '- Modele: **valor fixo + taxa × quantidade** → P(x) = 5 + 2x.\n- Substitua x = 12: P(12) = 5 + 2 · 12.\n- P(12) = 5 + 24 = **R$ 29,00**.'
      },
      {
        q: 'Em f(x) = 3x − 7, o valor de f(4) é',
        alt: ['5', '12', '−7', '19', '−5'],
        c: 0, dif: 'facil',
        exp: 'f(4) = 3·4 − 7 = 5.',
        res: '- Substitua x por 4: f(4) = 3 · 4 − 7.\n- f(4) = 12 − 7 = **5**.'
      },
      {
        q: 'As raízes de x² − 5x + 6 = 0 são',
        alt: ['2 e 3', '1 e 6', '−2 e −3', '5 e 6', '−1 e 6'],
        c: 0, dif: 'medio',
        exp: 'Soma 5 e produto 6 correspondem a 2 e 3.',
        res: '- Identifique a = 1, b = −5, c = 6.\n- Procure dois números com **soma = 5** (−b/a) e **produto = 6** (c/a): 2 e 3.\n- Confira: 2 + 3 = 5 e 2 · 3 = 6. Raízes: **2 e 3**.\n- Outra via: Δ = 25 − 24 = 1; x = (5 ± 1)/2 → 3 ou 2.'
      },
      {
        q: 'O gráfico de f(x) = x² − 6x + 5 tem valor mínimo igual a',
        alt: ['−4', '5', '3', '−6', '0'],
        c: 0, dif: 'medio',
        exp: 'x_v = 6/2 = 3 e f(3) = 9 − 18 + 5 = −4.',
        res: '- a = 1 > 0 → parábola com concavidade para cima, então tem **mínimo** no vértice.\n- x do vértice: x_v = −b/(2a) = 6/2 = 3.\n- y do vértice: f(3) = 9 − 18 + 5 = **−4**.'
      },
      {
        q: 'Uma colônia de bactérias dobra a cada hora. Se começa com 100, após 3 horas terá',
        alt: ['800', '300', '600', '1.000', '400'],
        c: 0, dif: 'medio',
        exp: '100 · 2³ = 800.',
        res: '- Dobrar a cada hora é multiplicar por 2 (crescimento **exponencial**).\n- Após 3 horas: 100 · 2³.\n- 100 · 8 = **800**.'
      },
      {
        q: 'O lucro L(x) = −x² + 10x − 16 é máximo quando x vale',
        alt: ['5', '16', '10', '2', '8'],
        c: 0, dif: 'dificil',
        exp: 'x_v = −10/(2·(−1)) = 5.',
        res: '- a = −1 < 0 → parábola para baixo, com **máximo** no vértice.\n- x_v = −b/(2a) = −10/(2 · (−1)) = −10/(−2) = **5**.\n- (O lucro máximo seria L(5) = −25 + 50 − 16 = 9.)'
      },
      {
        q: 'Qual o valor de log₂ 32?',
        alt: ['5', '16', '4', '2', '32'],
        c: 0, dif: 'medio',
        exp: '2⁵ = 32.',
        res: '- log₂ 32 = x significa 2^x = 32.\n- Potências de 2: 2, 4, 8, 16, **32** → é a 5ª.\n- Logo, x = **5**.'
      },
      {
        q: 'Um plano de celular custa R$ 40,00 fixos mais R$ 0,50 por GB extra. Se a conta foi R$ 52,00, foram usados de GB extra',
        alt: ['24', '12', '104', '4', '26'],
        c: 0, dif: 'dificil',
        exp: '40 + 0,5x = 52 → 0,5x = 12 → x = 24.',
        res: '- Modelo: 40 + 0,5 · x = 52, com x = GB extras.\n- 0,5 · x = 52 − 40 = 12.\n- x = 12 ÷ 0,5 = **24 GB**.'
      }
    ],
    pares: [
      { a: 'Função afim', b: 'Gráfico em linha reta' },
      { a: 'Função quadrática', b: 'Gráfico em parábola' },
      { a: 'Vértice', b: 'Máximo ou mínimo' },
      { a: 'a > 0 (afim)', b: 'Função crescente' },
      { a: 'Δ = b² − 4ac', b: 'Discriminante' },
      { a: 'Exponencial', b: 'Crescimento multiplicativo' },
      { a: 'log₂ 8', b: 'Vale 3' },
      { a: 'Valor inicial', b: 'Termo b da função afim' }
    ]
  },

  /* ============ GEOMETRIA PLANA ============ */
  {
    id: 'geometria-plana',
    nome: 'Geometria plana: áreas, semelhança e trigonometria',
    incidencia: 'alta',
    resumo: 'Áreas e perímetros, Pitágoras, semelhança de triângulos, círculo e razões trigonométricas aplicadas a situações reais (pisos, rampas, sombras).',
    conceitos: [
      {
        titulo: 'Áreas e perímetros',
        texto: '- **Retângulo**: A = b·h; **quadrado**: A = l²; **triângulo**: A = b·h/2; **trapézio**: A = (B+b)·h/2; **losango**: A = D·d/2.\n- **Círculo**: A = π·r²; **comprimento da circunferência**: C = 2π·r.\n- **Perímetro** é a soma dos lados.\n- Revestir uma superfície: número de peças = área da superfície ÷ área da peça (e some uma margem para perdas).\n- Se o lado de uma figura **dobra**, a área fica **4 vezes** maior.'
      },
      {
        titulo: 'Pitágoras e semelhança',
        texto: '**Teorema de Pitágoras** (triângulo retângulo): a² = b² + c². Trios famosos: 3-4-5 e 5-12-13.\n\n**Semelhança de triângulos**: ângulos iguais e lados **proporcionais**. É a ferramenta de problemas de **sombras**, alturas de postes e mapas: h/sombra é constante no mesmo instante.'
      },
      {
        titulo: 'Trigonometria no triângulo retângulo',
        texto: 'sen = cateto oposto/hipotenusa; cos = cateto adjacente/hipotenusa; tan = oposto/adjacente.\n\nValores notáveis: sen 30° = 1/2; cos 60° = 1/2; tan 45° = 1; sen 45° = √2/2; sen 60° = √3/2.\n\nSoma dos ângulos internos de um polígono: (n − 2)·180°. Triângulo: 180°.'
      }
    ],
    pegadinhas: [
      'Esquecer o **/2** na área do triângulo.',
      'Achar que dobrar o lado dobra a área: ela **quadruplica**.',
      'Usar o diâmetro no lugar do **raio** na área do círculo.',
      'Misturar unidades (cm com m) ao calcular áreas.'
    ],
    dicas: [
      'Desenhe a figura e marque **todos os dados** antes de calcular.',
      'Para sombras e alturas, monte **proporção entre triângulos semelhantes**.',
      'Converta todas as medidas para a **mesma unidade** primeiro.'
    ],
    exemplo: {
      enunciado: 'Uma pessoa de 1,8 m projeta sombra de 1,2 m. No mesmo instante, um poste projeta sombra de 6 m. Qual a altura do poste?',
      resolucao: 'Triângulos semelhantes: 1,8/1,2 = h/6 → h = 1,8 · 6 / 1,2 = **9 m**.'
    },
    fontes: [F_MAT.inep, F_MAT.estrategia, F_MAT.iezzi],
    flashcards: [
      { f: 'Área do triângulo', v: 'A = (base · altura)/2.' },
      { f: 'Área do círculo', v: 'A = π·r².' },
      { f: 'Teorema de Pitágoras', v: 'Hipotenusa² = cateto² + cateto².' },
      { f: 'Se o lado de um quadrado dobra, a área...', v: 'Quadruplica.' },
      { f: 'Soma dos ângulos internos de um triângulo', v: '180°.' },
      { f: 'sen 30°', v: '1/2.' },
      { f: 'tan 45°', v: '1.' },
      { f: 'Quantas peças cobrem um piso?', v: 'Área do piso dividida pela área de uma peça.' }
    ],
    quiz: [
      {
        q: 'Um retângulo mede 8 m por 5 m. Sua área e seu perímetro são, respectivamente,',
        alt: ['40 m² e 26 m', '13 m² e 40 m', '26 m² e 40 m', '40 m² e 13 m', '80 m² e 26 m'],
        c: 0, dif: 'facil',
        exp: 'Área 8 · 5 = 40; perímetro 2(8 + 5) = 26.',
        res: '- **Área** = base × altura = 8 × 5 = **40 m²**.\n- **Perímetro** = soma dos lados = 2 · (8 + 5) = **26 m**.'
      },
      {
        q: 'Os catetos de um triângulo retângulo medem 6 cm e 8 cm. A hipotenusa mede',
        alt: ['10 cm', '14 cm', '12 cm', '48 cm', '7 cm'],
        c: 0, dif: 'facil',
        exp: '6² + 8² = 100, logo a hipotenusa é 10.',
        res: '- Pitágoras: hipotenusa² = cateto² + cateto².\n- h² = 6² + 8² = 36 + 64 = 100.\n- h = √100 = **10 cm**. (É o trio 3-4-5 dobrado.)'
      },
      {
        q: 'Uma sala de 4 m por 5 m será coberta por pisos quadrados de 50 cm de lado. O número de peças é',
        alt: ['80', '20', '40', '160', '100'],
        c: 0, dif: 'medio',
        exp: 'Área da sala 20 m²; peça 0,25 m²; 20/0,25 = 80.',
        res: '- Área da sala: 4 × 5 = 20 m².\n- Peça: 50 cm = 0,5 m → área = 0,5 × 0,5 = 0,25 m².\n- Número de peças = 20 ÷ 0,25 = **80**.\n- ⚠️ Converta tudo para a mesma unidade antes.'
      },
      {
        q: 'Um círculo de raio 3 cm (π = 3,14) tem área de',
        alt: ['28,26 cm²', '18,84 cm²', '9,42 cm²', '56,52 cm²', '37,68 cm²'],
        c: 0, dif: 'medio',
        exp: 'A = π·r² = 3,14 · 9 = 28,26.',
        res: '- Fórmula: A = π · r².\n- A = 3,14 · 3² = 3,14 · 9.\n- A = **28,26 cm²**.'
      },
      {
        q: 'Ao dobrar a medida do lado de um quadrado, sua área',
        alt: ['fica 4 vezes maior', 'fica 2 vezes maior', 'fica 8 vezes maior', 'permanece igual', 'fica 3 vezes maior'],
        c: 0, dif: 'medio',
        exp: '(2l)² = 4l².',
        res: '- Lado l → área l². Lado 2l → área (2l)² = 4l².\n- A área fica **4 vezes maior** (o quadrado do fator).'
      },
      {
        q: 'Uma rampa deve vencer 3 m de altura com inclinação de 30° (sen 30° = 0,5). Seu comprimento é de',
        alt: ['6 m', '1,5 m', '3 m', '9 m', '5 m'],
        c: 0, dif: 'dificil',
        exp: 'sen 30° = altura/comprimento → comprimento = 3/0,5 = 6.',
        res: '- Desenhe o triângulo retângulo: a altura (3 m) é o cateto **oposto** ao ângulo de 30°; a rampa é a **hipotenusa**.\n- sen 30° = oposto ÷ hipotenusa → 0,5 = 3 ÷ c.\n- c = 3 ÷ 0,5 = **6 m**.'
      },
      {
        q: 'A soma dos ângulos internos de um hexágono é',
        alt: ['720°', '360°', '540°', '900°', '1.080°'],
        c: 0, dif: 'dificil',
        exp: '(6 − 2) · 180° = 720°.',
        res: '- Fórmula: S = (n − 2) · 180°, com n = número de lados.\n- Hexágono: n = 6 → S = 4 · 180°.\n- S = **720°**.'
      },
      {
        q: 'Um triângulo tem base de 10 cm e altura de 6 cm. Sua área é de',
        alt: ['30 cm²', '60 cm²', '16 cm²', '15 cm²', '120 cm²'],
        c: 0, dif: 'facil',
        exp: 'A = 10 · 6 / 2 = 30.',
        res: '- A = (base × altura) ÷ 2.\n- A = (10 × 6) ÷ 2 = 60 ÷ 2 = **30 cm²**.'
      }
    ],
    pares: [
      { a: 'Pitágoras', b: 'Hipotenusa ao quadrado' },
      { a: 'Área do círculo', b: 'π vezes raio ao quadrado' },
      { a: 'Triângulos semelhantes', b: 'Lados proporcionais' },
      { a: 'sen 30°', b: 'Vale 1/2' },
      { a: 'tan 45°', b: 'Vale 1' },
      { a: 'Perímetro', b: 'Soma dos lados' },
      { a: 'Trapézio', b: '(B + b) · h / 2' },
      { a: 'Soma dos ângulos do triângulo', b: '180°' }
    ]
  },

  /* ============ GEOMETRIA ESPACIAL ============ */
  {
    id: 'geometria-espacial',
    nome: 'Geometria espacial: volumes e capacidades',
    incidencia: 'alta',
    resumo: 'Volumes de prismas, cilindros, cones e esferas aplicados a caixas-d’água, piscinas, embalagens e conversão para litros.',
    conceitos: [
      {
        titulo: 'Volumes essenciais',
        texto: '- **Prisma/paralelepípedo**: V = (área da base) · altura. Cubo: V = a³.\n- **Cilindro**: V = π·r²·h.\n- **Cone**: V = (π·r²·h)/3 (um terço do cilindro de mesma base e altura).\n- **Pirâmide**: V = (área da base · h)/3.\n- **Esfera**: V = (4/3)·π·r³; área da superfície = 4π·r².'
      },
      {
        titulo: 'Unidades e capacidade',
        texto: '**1 m³ = 1.000 L**; **1 dm³ = 1 L**; 1 cm³ = 1 mL. Ao converter volume, lembre que as razões ficam **ao cubo**: 1 m³ = 1.000.000 cm³.\n\nExemplo: uma piscina de 10 m × 5 m × 2 m tem 100 m³ = **100.000 L**.'
      },
      {
        titulo: 'Efeito da escala e planificações',
        texto: 'Se todas as dimensões de um sólido **dobram**, o volume fica **8 vezes** maior (2³) e a área da superfície, 4 vezes. **Planificação**: a superfície é a soma das áreas das faces (embalagens, tintas, revestimentos). Para encher recipientes: **volume total ÷ volume de cada recipiente**.'
      }
    ],
    pegadinhas: [
      'Esquecer o **1/3** no cone e na pirâmide.',
      'Converter m³ para litros errando o fator (**1.000**, não 100).',
      'Usar o diâmetro no lugar do **raio**.',
      'Achar que dobrar as dimensões dobra o volume: ele fica **8 vezes** maior.'
    ],
    dicas: [
      'Identifique o sólido e escreva a fórmula **antes** de substituir.',
      'Converta tudo para **decímetros** se a resposta for em litros.',
      'Em questões de embalagem, compare **volume** e **área da superfície** (material gasto).'
    ],
    exemplo: {
      enunciado: 'Uma caixa-d’água cilíndrica tem raio de 1 m e altura de 2 m (use π = 3,14). Qual sua capacidade, em litros?',
      resolucao: 'V = π·r²·h = 3,14 · 1 · 2 = 6,28 m³ = **6.280 litros** (1 m³ = 1.000 L).'
    },
    fontes: [F_MAT.inep, F_MAT.estrategia, F_MAT.iezzi],
    flashcards: [
      { f: 'Volume do cilindro', v: 'V = π·r²·h.' },
      { f: 'Volume do cone', v: 'V = (π·r²·h)/3.' },
      { f: 'Volume da esfera', v: 'V = (4/3)·π·r³.' },
      { f: 'Volume do paralelepípedo', v: 'comprimento × largura × altura.' },
      { f: '1 m³ equivale a quantos litros?', v: '1.000 litros.' },
      { f: '1 dm³ equivale a...', v: '1 litro.' },
      { f: 'Dobrando todas as dimensões, o volume...', v: 'Fica 8 vezes maior.' },
      { f: 'Volume da pirâmide', v: '(área da base × altura)/3.' }
    ],
    quiz: [
      {
        q: 'Uma piscina mede 10 m de comprimento, 5 m de largura e 2 m de profundidade. Sua capacidade é de',
        alt: ['100.000 L', '100 L', '10.000 L', '1.000 L', '17.000 L'],
        c: 0, dif: 'facil',
        exp: '10 · 5 · 2 = 100 m³ = 100.000 L.',
        res: '- Volume = comprimento × largura × profundidade = 10 · 5 · 2 = **100 m³**.\n- 1 m³ = 1.000 L → 100 m³ = **100.000 L**.'
      },
      {
        q: 'Um cubo de aresta 3 cm tem volume de',
        alt: ['27 cm³', '9 cm³', '18 cm³', '6 cm³', '81 cm³'],
        c: 0, dif: 'facil',
        exp: '3³ = 27.',
        res: '- V = a³ = 3 · 3 · 3 = **27 cm³**.'
      },
      {
        q: 'Um cilindro tem raio 2 cm e altura 5 cm (π = 3). O volume é de',
        alt: ['60 cm³', '20 cm³', '30 cm³', '120 cm³', '15 cm³'],
        c: 0, dif: 'medio',
        exp: 'V = 3 · 4 · 5 = 60.',
        res: '- V = π · r² · h.\n- V = 3 · 2² · 5 = 3 · 4 · 5.\n- V = **60 cm³**.'
      },
      {
        q: 'O volume de um cone é, em relação ao do cilindro de mesma base e altura,',
        alt: ['um terço', 'o dobro', 'a metade', 'igual', 'um quarto'],
        c: 0, dif: 'medio',
        exp: 'V_cone = (π·r²·h)/3.',
        res: '- Cilindro: V = π · r² · h. Cone: V = (π · r² · h) ÷ 3.\n- Com a mesma base e a mesma altura, o cone tem **um terço** do volume do cilindro.'
      },
      {
        q: 'Se as arestas de um cubo dobram, o volume',
        alt: ['fica 8 vezes maior', 'fica 2 vezes maior', 'fica 4 vezes maior', 'não se altera', 'fica 6 vezes maior'],
        c: 0, dif: 'medio',
        exp: '(2a)³ = 8a³.',
        res: '- Aresta a → V = a³. Aresta 2a → V = (2a)³ = 8a³.\n- O volume fica **8 vezes maior** (o cubo do fator).'
      },
      {
        q: 'Uma esfera de raio 3 cm tem volume de',
        alt: ['36π cm³', '12π cm³', '9π cm³', '108π cm³', '27π cm³'],
        c: 0, dif: 'dificil',
        exp: '(4/3)·π·27 = 36π.',
        res: '- V = (4/3) · π · r³.\n- r³ = 27 → V = (4/3) · π · 27 = 4 · 9 · π.\n- V = **36π cm³**.'
      },
      {
        q: 'Um reservatório com 3 m³ de água é usado para encher garrafas de 2 litros. O número de garrafas é de',
        alt: ['1.500', '150', '6.000', '15', '600'],
        c: 0, dif: 'dificil',
        exp: '3 m³ = 3.000 L; 3.000/2 = 1.500.',
        res: '- Converta: 3 m³ = 3 × 1.000 = 3.000 L.\n- Número de garrafas = 3.000 ÷ 2 = **1.500**.'
      },
      {
        q: 'Uma caixa em forma de paralelepípedo tem base de 20 cm por 10 cm e altura de 5 cm. Seu volume em litros é de',
        alt: ['1 L', '10 L', '0,1 L', '100 L', '0,01 L'],
        c: 0, dif: 'dificil',
        exp: '20 · 10 · 5 = 1.000 cm³ = 1 L.',
        res: '- V = 20 · 10 · 5 = 1.000 cm³.\n- 1 cm³ = 1 mL → 1.000 cm³ = 1.000 mL.\n- 1.000 mL = **1 L**.'
      }
    ],
    pares: [
      { a: 'Cilindro', b: 'π·r²·h' },
      { a: 'Cone', b: 'Um terço do cilindro' },
      { a: 'Esfera', b: '(4/3)·π·r³' },
      { a: '1 m³', b: '1.000 litros' },
      { a: '1 dm³', b: '1 litro' },
      { a: '1 cm³', b: '1 mililitro' },
      { a: 'Cubo de aresta a', b: 'Volume a³' },
      { a: 'Planificação', b: 'Soma das áreas das faces' }
    ]
  },

  /* ============ PROBABILIDADE E COMBINATÓRIA ============ */
  {
    id: 'probabilidade-combinatoria',
    nome: 'Probabilidade e análise combinatória',
    incidencia: 'alta',
    resumo: 'Contagem (princípio multiplicativo, permutações, combinações) e probabilidade de eventos, inclusive complementar.',
    conceitos: [
      {
        titulo: 'Contagem',
        texto: '- **Princípio multiplicativo**: se há m modos de fazer uma coisa e n de fazer outra, há m·n modos de fazer as duas. Ex.: 3 camisas e 4 calças → 12 combinações.\n- **Fatorial**: n! = n·(n−1)·…·1.\n- **Permutação** de n elementos: n!. Com repetição: n!/(a!·b!…).\n- **Arranjo** (a ordem importa): A(n,p) = n!/(n−p)!. **Combinação** (a ordem não importa): C(n,p) = n!/(p!(n−p)!).'
      },
      {
        titulo: 'Probabilidade',
        texto: 'P(evento) = casos favoráveis ÷ casos possíveis (espaço equiprovável). O valor fica entre 0 e 1 (0% a 100%).\n\n- **Complementar**: P(não A) = 1 − P(A). Útil em "pelo menos um".\n- **Eventos independentes** (e): multiplica-se. **Mutuamente exclusivos** (ou): soma-se.\n- **Condicional**: P(A|B) = P(A e B)/P(B).'
      },
      {
        titulo: 'Como decidir',
        texto: 'Pergunte: **a ordem importa?** Se sim, arranjo/permutação; se não, combinação. Em probabilidade, escreva o **espaço amostral** e conte os favoráveis, ou use o **complementar** quando for mais curto.'
      }
    ],
    pegadinhas: [
      'Usar combinação quando a **ordem importa** (senhas, filas, pódios).',
      'Somar probabilidades de eventos **independentes** que devem ocorrer juntos (aqui se multiplica).',
      'Esquecer o complementar em "**pelo menos um**".',
      'Contar anagramas com letras repetidas sem dividir pelos fatoriais.'
    ],
    dicas: [
      'Teste a ordem com um exemplo: "AB" é diferente de "BA"?',
      'Em "pelo menos um", calcule **1 − P(nenhum)**.',
      'Probabilidade nunca passa de 1: use isso para eliminar alternativas.'
    ],
    exemplo: {
      enunciado: 'Qual a probabilidade de obter pelo menos uma cara em três lançamentos de uma moeda?',
      resolucao: 'O complementar é nenhuma cara (três coroas): (1/2)³ = 1/8. Logo, P = 1 − 1/8 = **7/8**.'
    },
    fontes: [F_MAT.inep, F_MAT.estrategia, F_MAT.iezzi],
    flashcards: [
      { f: 'Princípio multiplicativo', v: 'Número de modos = produto do número de modos de cada etapa.' },
      { f: 'Permutação de n elementos', v: 'n!.' },
      { f: 'Quando usar combinação?', v: 'Quando a ordem não importa.' },
      { f: 'Quando usar arranjo?', v: 'Quando a ordem importa.' },
      { f: 'Fórmula da probabilidade', v: 'Casos favoráveis ÷ casos possíveis.' },
      { f: 'Probabilidade do complementar', v: '1 − P(A).' },
      { f: 'Eventos independentes', v: 'A probabilidade conjunta é o produto.' },
      { f: 'Quanto vale C(5,2)?', v: '10.' }
    ],
    quiz: [
      {
        q: 'Uma pessoa tem 3 camisas e 4 calças. O número de combinações diferentes é de',
        alt: ['12', '7', '24', '6', '9'],
        c: 0, dif: 'facil',
        exp: '3 · 4 = 12.',
        res: '- **Princípio multiplicativo**: cada camisa combina com cada calça.\n- 3 · 4 = **12** combinações.'
      },
      {
        q: 'Ao lançar um dado comum, a probabilidade de sair um número par é de',
        alt: ['1/2', '1/3', '1/6', '2/3', '5/6'],
        c: 0, dif: 'facil',
        exp: 'Pares: 2, 4 e 6 → 3/6 = 1/2.',
        res: '- Possíveis: 6 faces (1 a 6). Favoráveis (pares): 2, 4, 6 → 3.\n- P = 3/6 = **1/2**.'
      },
      {
        q: 'Uma urna tem 3 bolas vermelhas e 2 azuis. A probabilidade de sortear uma azul é de',
        alt: ['2/5', '3/5', '1/2', '1/5', '2/3'],
        c: 0, dif: 'facil',
        exp: '2 favoráveis em 5 possíveis.',
        res: '- Total de bolas: 3 + 2 = 5. Favoráveis (azuis): 2.\n- P = 2/5.'
      },
      {
        q: 'Quantos pares podem ser formados com 5 pessoas, escolhendo 2 (a ordem não importa)?',
        alt: ['10', '20', '5', '25', '15'],
        c: 0, dif: 'medio',
        exp: 'C(5,2) = 5!/(2!·3!) = 10.',
        res: '- A ordem **não importa** (par A-B = par B-A) → **combinação**.\n- C(5,2) = 5! ÷ (2! · 3!) = (5 · 4) ÷ 2.\n- = 20 ÷ 2 = **10**.'
      },
      {
        q: 'O número de anagramas da palavra ENEM é',
        alt: ['12', '24', '6', '4', '8'],
        c: 0, dif: 'medio',
        exp: '4!/2! = 12, pois o símbolo repetido aparece duas vezes (ENEM tem dois "E").',
        res: '- ENEM tem 4 letras, mas o **E aparece 2 vezes**.\n- Permutação com repetição: 4! ÷ 2! = 24 ÷ 2.\n- = **12**.'
      },
      {
        q: 'Lançando duas moedas, a probabilidade de saírem duas caras é de',
        alt: ['1/4', '1/2', '1/3', '2/3', '3/4'],
        c: 0, dif: 'medio',
        exp: '1/2 · 1/2 = 1/4.',
        res: '- Os lançamentos são **independentes**: multiplica-se.\n- P(cara) · P(cara) = 1/2 · 1/2 = **1/4**.'
      },
      {
        q: 'Quantas senhas de 4 dígitos distintos podem ser formadas com os algarismos de 0 a 9?',
        alt: ['5.040', '10.000', '210', '40', '720'],
        c: 0, dif: 'dificil',
        exp: '10 · 9 · 8 · 7 = 5.040.',
        res: '- A ordem importa e **não pode repetir**: princípio multiplicativo.\n- 1º dígito: 10 opções; 2º: 9; 3º: 8; 4º: 7.\n- 10 · 9 · 8 · 7 = **5.040**.'
      },
      {
        q: 'A probabilidade de obter pelo menos uma cara em três lançamentos é de',
        alt: ['7/8', '1/8', '3/8', '1/2', '5/8'],
        c: 0, dif: 'dificil',
        exp: '1 − (1/2)³ = 7/8.',
        res: '- Usar o **complementar**: "pelo menos uma cara" = 1 − "nenhuma cara".\n- Nenhuma cara (3 coroas): (1/2)³ = 1/8.\n- P = 1 − 1/8 = **7/8**.'
      }
    ],
    pares: [
      { a: 'Princípio multiplicativo', b: 'Produto de possibilidades' },
      { a: '5!', b: '120' },
      { a: 'Combinação', b: 'Ordem não importa' },
      { a: 'Arranjo', b: 'Ordem importa' },
      { a: 'P(complementar)', b: '1 − P(A)' },
      { a: 'Eventos independentes', b: 'Multiplicam-se' },
      { a: 'Espaço amostral', b: 'Todos os resultados possíveis' },
      { a: 'Probabilidade máxima', b: 'Vale 1' }
    ]
  },

  /* ============ ESTATÍSTICA ============ */
  {
    id: 'estatistica-medias',
    nome: 'Estatística: médias, mediana, moda e gráficos',
    incidencia: 'alta',
    resumo: 'Medidas de tendência central e de dispersão, leitura de gráficos e tabelas e escolha da medida adequada.',
    conceitos: [
      {
        titulo: 'Medidas de tendência central',
        texto: '- **Média aritmética**: soma dos valores ÷ quantidade. **Média ponderada**: cada valor multiplica seu peso; soma ÷ soma dos pesos.\n- **Mediana**: valor central com os dados **ordenados** (se a quantidade é par, média dos dois centrais).\n- **Moda**: valor que mais se repete.\n- A média é sensível a valores extremos (outliers); a **mediana é mais robusta**.'
      },
      {
        titulo: 'Dispersão',
        texto: '**Amplitude** = maior − menor. **Variância** e **desvio padrão** medem o quanto os dados se afastam da média: **quanto maior o desvio padrão, mais heterogêneo** (disperso) é o conjunto. Duas turmas com a mesma média podem ter dispersões bem diferentes.'
      },
      {
        titulo: 'Gráficos e tabelas',
        texto: '**Colunas/barras** (comparar categorias), **linhas** (evolução no tempo), **setores/pizza** (partes de um todo, soma 100%), **histograma** (distribuição em intervalos), **boxplot**. Atenção a **escalas** e eixos truncados que exageram diferenças. Frequência relativa = frequência ÷ total.'
      }
    ],
    pegadinhas: [
      'Calcular a mediana **sem ordenar** os dados.',
      'Esquecer que, com quantidade par, a mediana é a **média dos dois centrais**.',
      'Usar média simples quando os valores têm **pesos** diferentes.',
      'Ignorar a escala do gráfico (eixo que não começa em zero).'
    ],
    dicas: [
      'Ordene sempre antes de achar a mediana.',
      'Para escolher a medida, pergunte: há **valores extremos**? Então prefira a mediana.',
      'Em gráficos de setores, converta a porcentagem em quantidade pelo total.'
    ],
    exemplo: {
      enunciado: 'As notas de um aluno são 6 (peso 2) e 9 (peso 3). Qual a média ponderada?',
      resolucao: '(6·2 + 9·3)/(2 + 3) = (12 + 27)/5 = **7,8**.'
    },
    fontes: [F_MAT.inep, F_MAT.estrategia, F_MAT.iezzi],
    flashcards: [
      { f: 'Média aritmética', v: 'Soma dos valores dividida pela quantidade.' },
      { f: 'Mediana', v: 'Valor central dos dados ordenados.' },
      { f: 'Moda', v: 'Valor que aparece com mais frequência.' },
      { f: 'Mediana com quantidade par', v: 'Média dos dois valores centrais.' },
      { f: 'O que mede o desvio padrão?', v: 'O grau de dispersão dos dados em torno da média.' },
      { f: 'Qual medida resiste a valores extremos?', v: 'A mediana.' },
      { f: 'Amplitude', v: 'Diferença entre o maior e o menor valor.' },
      { f: 'Gráfico ideal para partes de um todo', v: 'Gráfico de setores.' }
    ],
    quiz: [
      {
        q: 'A média dos números 4, 6, 8, 10 e 12 é',
        alt: ['8', '6', '10', '7', '9'],
        c: 0, dif: 'facil',
        exp: 'Soma 40; 40/5 = 8.',
        res: '- Some: 4 + 6 + 8 + 10 + 12 = 40.\n- Divida pela quantidade (5): 40 ÷ 5 = **8**.'
      },
      {
        q: 'A mediana do conjunto 3, 7, 5, 9, 1 é',
        alt: ['5', '7', '3', '9', '25'],
        c: 0, dif: 'facil',
        exp: 'Ordenado: 1, 3, 5, 7, 9; o central é 5.',
        res: '- **Ordene** os dados: 1, 3, 5, 7, 9.\n- Com 5 valores, a mediana é o do meio (3º): **5**.'
      },
      {
        q: 'A moda de 2, 3, 3, 4, 5, 3 é',
        alt: ['3', '2', '4', '5', '3,3'],
        c: 0, dif: 'facil',
        exp: 'O 3 aparece três vezes.',
        res: '- Conte as repetições: 2 (1x), **3 (3x)**, 4 (1x), 5 (1x).\n- A moda é o valor mais frequente: **3**.'
      },
      {
        q: 'A mediana de 2, 4, 6 e 10 é',
        alt: ['5', '4', '6', '5,5', '22'],
        c: 0, dif: 'medio',
        exp: 'Média dos centrais: (4 + 6)/2 = 5.',
        res: '- Os dados já estão ordenados: 2, 4, 6, 10.\n- São 4 valores (quantidade par) → média dos dois centrais: (4 + 6) ÷ 2.\n- = **5**.'
      },
      {
        q: 'Um aluno tem notas 6 (peso 2) e 9 (peso 3). A média ponderada é de',
        alt: ['7,8', '7,5', '8,0', '6,9', '7,0'],
        c: 0, dif: 'medio',
        exp: '(12 + 27)/5 = 7,8.',
        res: '- Média ponderada = soma(valor × peso) ÷ soma dos pesos.\n- Numerador: 6 · 2 + 9 · 3 = 12 + 27 = 39.\n- Denominador: 2 + 3 = 5 → 39 ÷ 5 = **7,8**.'
      },
      {
        q: 'Duas turmas têm a mesma média, mas a turma A tem desvio padrão maior. Isso indica que a turma A é',
        alt: ['mais heterogênea, com notas dispersas', 'mais homogênea, com notas próximas', 'necessariamente melhor que a B', 'necessariamente pior que a B', 'idêntica à B em dispersão'],
        c: 0, dif: 'dificil',
        exp: 'Maior desvio padrão significa maior dispersão em torno da média.',
        res: '- O **desvio padrão** mede o quanto os dados se afastam da média.\n- Maior desvio padrão = notas mais espalhadas = turma **mais heterogênea**.\n- A média igual não diz nada sobre a dispersão.'
      },
      {
        q: 'Em um grupo de salários com um valor extremamente alto, a medida mais representativa tende a ser',
        alt: ['a mediana', 'a amplitude', 'a média', 'o desvio padrão', 'o maior valor'],
        c: 0, dif: 'dificil',
        exp: 'A mediana é pouco afetada por valores extremos.',
        res: '- Um salário muito alto (valor extremo) puxa a **média** para cima.\n- A **mediana** depende da posição central, e não do tamanho dos extremos.\n- Por isso a mediana representa melhor o grupo.'
      },
      {
        q: 'Num gráfico de setores com 400 entrevistados, o setor de 25% representa',
        alt: ['100 pessoas', '25 pessoas', '40 pessoas', '200 pessoas', '4 pessoas'],
        c: 0, dif: 'medio',
        exp: '25% de 400 = 100.',
        res: '- O gráfico de setores mostra partes de um todo (100% = 400).\n- 25% de 400 = 0,25 × 400 = **100 pessoas**.'
      }
    ],
    pares: [
      { a: 'Média', b: 'Soma dividida pela quantidade' },
      { a: 'Mediana', b: 'Valor central' },
      { a: 'Moda', b: 'Valor mais frequente' },
      { a: 'Amplitude', b: 'Maior menos menor' },
      { a: 'Desvio padrão', b: 'Mede a dispersão' },
      { a: 'Média ponderada', b: 'Valores com pesos' },
      { a: 'Histograma', b: 'Distribuição por intervalos' },
      { a: 'Gráfico de setores', b: 'Partes de um todo' }
    ]
  },

  /* ============ EQUAÇÕES E SEQUÊNCIAS ============ */
  {
    id: 'equacoes-sequencias',
    nome: 'Equações, sistemas e progressões (PA e PG)',
    incidencia: 'media',
    resumo: 'Transformar problemas em equações, resolver sistemas simples e reconhecer padrões com progressões aritméticas e geométricas.',
    conceitos: [
      {
        titulo: 'Equações e sistemas',
        texto: '**Como traduzir**: defina a incógnita (x = o que se quer descobrir), escreva a relação do enunciado e resolva. **1º grau**: isole x. **2º grau**: Bháskara ou soma e produto.\n\n**Sistemas 2×2**: substituição ou adição. Ex.: x + y = 10 e x − y = 2 → somando, 2x = 12, x = 6 e y = 4. **Inequações**: igual às equações, mas **inverta o sinal ao multiplicar/dividir por negativo**.'
      },
      {
        titulo: 'Progressão aritmética (PA)',
        texto: 'Soma-se uma **razão r** constante: a_n = a₁ + (n−1)·r. **Soma**: S_n = (a₁ + a_n)·n/2. Aparece em planos de economia que crescem R$ r por mês, degraus, filas, parcelas que aumentam de forma constante.'
      },
      {
        titulo: 'Progressão geométrica (PG)',
        texto: 'Multiplica-se por uma **razão q** constante: a_n = a₁·q^(n−1). Aparece em **juros compostos, populações e decaimentos**. Se q > 1, cresce; se 0 < q < 1, decai. Soma da PG finita: S_n = a₁(qⁿ − 1)/(q − 1).'
      }
    ],
    pegadinhas: [
      'Esquecer de **inverter o sinal** da desigualdade ao dividir por negativo.',
      'Confundir PA (somar) com PG (multiplicar).',
      'Contar errado o número de termos: a_n usa **n − 1** vezes a razão.',
      'Responder o valor de x quando o enunciado pergunta outra grandeza.'
    ],
    dicas: [
      'Leia a pergunta final e **defina x** exatamente como o que ela pede.',
      'Confira a resposta **substituindo no enunciado**.',
      'Para saber se é PA ou PG, veja se a variação é **constante (somar)** ou **proporcional (multiplicar)**.'
    ],
    exemplo: {
      enunciado: 'Num cinema, o ingresso de adulto custa R$ 20 e o de criança R$ 10. Foram vendidos 30 ingressos, arrecadando R$ 450. Quantos eram de adultos?',
      resolucao: 'A + C = 30 e 20A + 10C = 450. Substituindo C = 30 − A: 20A + 300 − 10A = 450 → 10A = 150 → **A = 15**.'
    },
    fontes: [F_MAT.inep, F_MAT.estrategia, F_MAT.iezzi],
    flashcards: [
      { f: 'Termo geral da PA', v: 'a_n = a₁ + (n − 1)·r.' },
      { f: 'Soma dos n primeiros termos da PA', v: 'S_n = (a₁ + a_n)·n/2.' },
      { f: 'Termo geral da PG', v: 'a_n = a₁·q^(n − 1).' },
      { f: 'Diferença entre PA e PG', v: 'PA soma uma razão constante; PG multiplica por uma razão constante.' },
      { f: 'Como resolver um sistema 2×2 por adição?', v: 'Somar as equações para eliminar uma incógnita.' },
      { f: 'Inequação e sinal negativo', v: 'Ao multiplicar ou dividir por número negativo, inverte-se o sinal da desigualdade.' },
      { f: 'Soma das raízes de ax²+bx+c', v: '−b/a.' },
      { f: 'PG com razão entre 0 e 1', v: 'É decrescente.' }
    ],
    quiz: [
      {
        q: 'A solução da equação 2x + 7 = 19 é',
        alt: ['6', '13', '12', '5', '26'],
        c: 0, dif: 'facil',
        exp: '2x = 12 → x = 6.',
        res: '- Isole o termo com x: 2x = 19 − 7 = 12.\n- x = 12 ÷ 2 = **6**.\n- Confira: 2 · 6 + 7 = 19 ✓.'
      },
      {
        q: 'Se x + y = 10 e x − y = 2, os valores de x e y são, respectivamente,',
        alt: ['6 e 4', '8 e 2', '5 e 5', '7 e 3', '4 e 6'],
        c: 0, dif: 'facil',
        exp: 'Somando: 2x = 12, x = 6; então y = 4.',
        res: '- **Some** as duas equações: (x + y) + (x − y) = 10 + 2 → 2x = 12.\n- x = **6**.\n- Substitua em x + y = 10: 6 + y = 10 → y = **4**.'
      },
      {
        q: 'Em uma PA com primeiro termo 3 e razão 4, o décimo termo é',
        alt: ['39', '43', '40', '36', '47'],
        c: 0, dif: 'medio',
        exp: 'a₁₀ = 3 + 9·4 = 39.',
        res: '- Termo geral da PA: a_n = a₁ + (n − 1) · r.\n- a₁₀ = 3 + 9 · 4 = 3 + 36.\n- a₁₀ = **39**.'
      },
      {
        q: 'A soma dos números de 1 a 10 é',
        alt: ['55', '50', '45', '110', '60'],
        c: 0, dif: 'medio',
        exp: '(1 + 10)·10/2 = 55.',
        res: '- É uma PA: a₁ = 1, a₁₀ = 10, n = 10.\n- S = (a₁ + a_n) · n ÷ 2 = (1 + 10) · 10 ÷ 2.\n- S = 110 ÷ 2 = **55**.'
      },
      {
        q: 'Em uma PG com primeiro termo 2 e razão 3, o quinto termo é',
        alt: ['162', '486', '54', '30', '243'],
        c: 0, dif: 'medio',
        exp: '2 · 3⁴ = 162.',
        res: '- Termo geral da PG: a_n = a₁ · q^(n − 1).\n- a₅ = 2 · 3⁴ = 2 · 81.\n- a₅ = **162**.'
      },
      {
        q: 'As raízes de x² − 4x − 5 = 0 são',
        alt: ['5 e −1', '−5 e 1', '4 e −5', '1 e 5', '−4 e 5'],
        c: 0, dif: 'dificil',
        exp: 'Soma 4 e produto −5 correspondem a 5 e −1.',
        res: '- a = 1, b = −4, c = −5. Procure soma = 4 e produto = −5.\n- Números com produto −5: (5 e −1) ou (−5 e 1). A soma 4 vem de 5 + (−1).\n- Raízes: **5 e −1**.\n- Confira por Bháskara: Δ = 16 + 20 = 36 → x = (4 ± 6)/2 = 5 ou −1.'
      },
      {
        q: 'A solução da inequação 3x − 5 > 7 é',
        alt: ['x > 4', 'x < 4', 'x > 2', 'x > 12', 'x < 2'],
        c: 0, dif: 'dificil',
        exp: '3x > 12 → x > 4.',
        res: '- Some 5 aos dois lados: 3x > 12.\n- Divida por 3 (positivo, o sinal **não** inverte): x > 4.\n- Solução: **x > 4**.'
      },
      {
        q: 'Uma pessoa guarda R$ 50 no primeiro mês e aumenta R$ 10 a cada mês. Quanto guardará no 12º mês?',
        alt: ['R$ 160', 'R$ 170', 'R$ 150', 'R$ 120', 'R$ 180'],
        c: 0, dif: 'dificil',
        exp: 'PA: a₁₂ = 50 + 11·10 = 160.',
        res: '- Soma constante de 10 a cada mês → **PA** com a₁ = 50 e r = 10.\n- a₁₂ = 50 + 11 · 10 = 50 + 110.\n- a₁₂ = **R$ 160**.'
      }
    ],
    pares: [
      { a: 'PA', b: 'Soma uma razão constante' },
      { a: 'PG', b: 'Multiplica por razão constante' },
      { a: 'Sistema 2×2', b: 'Duas equações, duas incógnitas' },
      { a: 'Bháskara', b: 'Resolve o 2º grau' },
      { a: 'Soma de PA', b: '(a₁ + a_n)·n/2' },
      { a: 'Inequação', b: 'Inverte o sinal ao dividir por negativo' },
      { a: 'Juros compostos', b: 'Seguem uma PG' },
      { a: 'Incógnita', b: 'Valor a descobrir' }
    ]
  },

  /* ============ ARITMÉTICA E UNIDADES ============ */
  {
    id: 'aritmetica-unidades',
    nome: 'Aritmética, unidades e grandezas',
    incidencia: 'alta',
    resumo: 'O grupo "Aritmética" é o maior de todos: operações, múltiplos e divisores, potências, notação científica, conversão de unidades e grandezas como velocidade e consumo.',
    conceitos: [
      {
        titulo: 'Múltiplos, divisores e potências',
        texto: '- **MMC**: menor número múltiplo de dois ou mais (eventos que se repetem: quando coincidem?). Ex.: MMC(12, 18) = 36.\n- **MDC**: maior divisor comum (dividir em grupos iguais, cortar peças do maior tamanho). Ex.: MDC(24, 36) = 12.\n- **Critérios de divisibilidade**: por 2 (termina em par), 3 (soma dos algarismos), 5 (termina em 0 ou 5), 9.\n- **Potências**: aᵐ · aⁿ = aᵐ⁺ⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁻ⁿ = 1/aⁿ.'
      },
      {
        titulo: 'Notação científica e ordem de grandeza',
        texto: 'Um número é escrito como **a × 10ⁿ**, com 1 ≤ a < 10. Ex.: 450.000 = 4,5 × 10⁵; 0,00045 = 4,5 × 10⁻⁴. Para multiplicar, multiplique os coeficientes e **some os expoentes**. A notação científica é usada em distâncias astronômicas e tamanhos microscópicos.'
      },
      {
        titulo: 'Unidades e grandezas',
        texto: '- **Tempo**: 1 h = 60 min = 3.600 s.\n- **Comprimento/volume**: 1 km = 1.000 m; 1 L = 1.000 mL; 1 m³ = 1.000 L.\n- **Velocidade média**: v = distância ÷ tempo. **km/h ÷ 3,6 = m/s**.\n- **Consumo**: km por litro; **densidade**: massa/volume; **escala**.\n- Em contas do dia a dia (preço por unidade, rendimento de tinta, consumo de combustível), monte uma **regra de três** com unidades coerentes.'
      }
    ],
    pegadinhas: [
      'Confundir **MMC** (quando eventos coincidem) com **MDC** (divisão em grupos iguais).',
      'Errar o expoente ao passar para notação científica (sinal e quantidade de casas).',
      'Converter horas decimais como se fossem minutos (**1,5 h = 1 h 30 min**, não 1 h 50).',
      'Esquecer de usar a **mesma unidade** em todas as grandezas.'
    ],
    dicas: [
      'Para eventos periódicos, pense em **MMC**; para dividir em partes iguais, em **MDC**.',
      'Converta unidades **antes** de calcular.',
      'Em contas longas, estime com números redondos para eliminar alternativas.'
    ],
    exemplo: {
      enunciado: 'Dois ônibus saem juntos de um terminal. Um passa a cada 12 min e outro a cada 18 min. Depois de quanto tempo voltam a sair juntos?',
      resolucao: 'MMC(12, 18) = **36 minutos**.'
    },
    fontes: [F_MAT.inep, F_MAT.estrategia, F_MAT.iezzi],
    flashcards: [
      { f: 'Para que serve o MMC em problemas?', v: 'Descobrir quando eventos periódicos coincidem.' },
      { f: 'Para que serve o MDC em problemas?', v: 'Dividir em grupos ou peças iguais, do maior tamanho possível.' },
      { f: 'Produto de potências de mesma base', v: 'Somam-se os expoentes.' },
      { f: 'Notação científica de 0,00045', v: '4,5 × 10⁻⁴.' },
      { f: 'Como converter km/h para m/s?', v: 'Dividir por 3,6.' },
      { f: 'Velocidade média', v: 'Distância dividida pelo tempo.' },
      { f: '1,5 hora equivale a', v: '1 h 30 min.' },
      { f: '1 m³ em litros', v: '1.000 L.' }
    ],
    quiz: [
      {
        q: 'O MMC de 12 e 18 é',
        alt: ['36', '6', '72', '216', '24'],
        c: 0, dif: 'facil',
        exp: '12 = 2²·3 e 18 = 2·3²; MMC = 2²·3² = 36.',
        res: '- Fatore: 12 = 2² · 3 e 18 = 2 · 3².\n- MMC = fatores comuns e não comuns com o **maior** expoente: 2² · 3² = 4 · 9.\n- MMC = **36**.'
      },
      {
        q: 'Um carro percorre 150 km em 2 horas. A velocidade média é de',
        alt: ['75 km/h', '300 km/h', '150 km/h', '50 km/h', '65 km/h'],
        c: 0, dif: 'facil',
        exp: '150/2 = 75.',
        res: '- Velocidade média = distância ÷ tempo.\n- v = 150 ÷ 2 = **75 km/h**.'
      },
      {
        q: 'O número 0,00045 escrito em notação científica é',
        alt: ['4,5 × 10⁻⁴', '4,5 × 10⁴', '45 × 10⁻⁵', '4,5 × 10⁻³', '0,45 × 10⁻³'],
        c: 0, dif: 'medio',
        exp: 'Deslocando a vírgula 4 casas para a direita: 4,5 × 10⁻⁴.',
        res: '- Notação científica: a × 10ⁿ, com 1 ≤ a < 10.\n- Desloque a vírgula até 4,5: são 4 casas para a direita.\n- Vírgula para a direita → expoente **negativo**: 4,5 × 10⁻⁴.'
      },
      {
        q: 'Um carro faz 12 km por litro. Para percorrer 300 km, gastará',
        alt: ['25 L', '36 L', '2,5 L', '250 L', '15 L'],
        c: 0, dif: 'medio',
        exp: '300/12 = 25.',
        res: '- Consumo = distância ÷ rendimento.\n- 300 ÷ 12 = **25 L**.'
      },
      {
        q: 'Um ciclista a 36 km/h tem, em m/s, velocidade de',
        alt: ['10 m/s', '36 m/s', '3,6 m/s', '129,6 m/s', '100 m/s'],
        c: 0, dif: 'medio',
        exp: '36/3,6 = 10.',
        res: '- Conversão: km/h ÷ 3,6 = m/s.\n- 36 ÷ 3,6 = **10 m/s**.\n- (Por quê? 36 km/h = 36.000 m / 3.600 s = 10 m/s.)'
      },
      {
        q: 'Uma fita de 24 m e outra de 36 m serão cortadas em pedaços iguais, do maior tamanho possível. Cada pedaço terá',
        alt: ['12 m', '6 m', '4 m', '72 m', '3 m'],
        c: 0, dif: 'dificil',
        exp: 'MDC(24, 36) = 12.',
        res: '- Pedaços iguais, **do maior tamanho possível** → **MDC**.\n- 24 = 2³ · 3 e 36 = 2² · 3². MDC = fatores comuns com o **menor** expoente: 2² · 3 = 12.\n- Cada pedaço terá **12 m**.'
      },
      {
        q: 'Um evento ocorre a cada 3 horas e 45 minutos. Em minutos, esse intervalo é de',
        alt: ['225', '345', '180', '285', '45'],
        c: 0, dif: 'dificil',
        exp: '3 · 60 + 45 = 225.',
        res: '- 1 hora = 60 min → 3 h = 3 · 60 = 180 min.\n- Some os 45 min: 180 + 45 = **225 min**.'
      },
      {
        q: 'O valor de 2⁵ · 2³ é',
        alt: ['256', '64', '128', '16', '512'],
        c: 0, dif: 'dificil',
        exp: '2⁸ = 256.',
        res: '- Mesma base: **some os expoentes**.\n- 2⁵ · 2³ = 2⁸.\n- 2⁸ = **256**.'
      }
    ],
    pares: [
      { a: 'MMC', b: 'Eventos que coincidem' },
      { a: 'MDC', b: 'Divisão em partes iguais' },
      { a: 'km/h para m/s', b: 'Dividir por 3,6' },
      { a: 'Notação científica', b: 'a × 10ⁿ' },
      { a: 'Velocidade média', b: 'Distância por tempo' },
      { a: '1 h', b: '60 minutos' },
      { a: 'Potência de mesma base', b: 'Soma dos expoentes' },
      { a: 'Consumo', b: 'km por litro' }
    ]
  },

  /* ============ MATEMÁTICA FINANCEIRA ============ */
  {
    id: 'matematica-financeira',
    nome: 'Matemática financeira: juros, descontos e parcelamentos',
    incidencia: 'media',
    resumo: 'Juros simples e compostos, descontos à vista, parcelamento com juros embutidos e comparação de ofertas, aplicada ao consumo e ao crédito.',
    conceitos: [
      {
        titulo: 'Juros simples e compostos',
        texto: '- **Juros simples**: incidem sempre sobre o **capital inicial**: J = C·i·t; **Montante** M = C + J = C(1 + i·t). Crescimento **linear** (PA).\n- **Juros compostos**: incidem sobre o montante anterior ("juros sobre juros"): M = C·(1 + i)^t. Crescimento **exponencial** (PG).\n- Taxa e tempo devem estar na **mesma unidade** (ao mês, ao ano).\n- Para prazos longos, os juros compostos crescem **bem mais** que os simples.'
      },
      {
        titulo: 'Descontos, acréscimos e inflação',
        texto: 'Desconto = multiplicar por (1 − i); acréscimo = multiplicar por (1 + i). **Variações sucessivas** multiplicam-se: +10% e +10% = ×1,21 (+21%). **Inflação** corrói o poder de compra; **reajuste** abaixo da inflação significa perda real. **Entrada + parcelas**: some tudo e compare com o preço à vista.'
      },
      {
        titulo: 'Decisão de consumo',
        texto: 'Comparar **preço à vista × parcelado**: a diferença é o custo do crédito. **Cartão de crédito rotativo e cheque especial** têm juros muito altos. **Poupar e investir** exige comparar rendimento, risco e liquidez. Fique atento a "**sem juros**" (o preço pode estar embutido no valor à vista).'
      }
    ],
    pegadinhas: [
      'Somar variações percentuais sucessivas em vez de **multiplicar** os fatores.',
      'Misturar **taxa mensal** com **tempo em anos**.',
      'Usar juros simples quando o enunciado diz "**compostos**" (ou o contrário).',
      'Esquecer que o desconto incide sobre o **valor atual**, não sobre o original em etapas sucessivas.'
    ],
    dicas: [
      'Use sempre o **fator**: (1 + i) para acréscimos e (1 − i) para descontos.',
      'Em parcelamento, **some todas as parcelas** e compare com o valor à vista.',
      'Em juros compostos, calcule período a período quando o prazo for curto (2 ou 3).'
    ],
    exemplo: {
      enunciado: 'Um capital de R$ 1.000 é aplicado a juros compostos de 10% ao ano por 2 anos. Qual o montante?',
      resolucao: 'M = 1.000 · (1,1)² = 1.000 · 1,21 = **R$ 1.210,00**. Em juros simples seriam R$ 1.200,00.'
    },
    fontes: [F_MAT.inep, F_MAT.estrategia, F_MAT.iezzi],
    flashcards: [
      { f: 'Fórmula dos juros simples', v: 'J = C·i·t.' },
      { f: 'Fórmula do montante composto', v: 'M = C·(1 + i)^t.' },
      { f: 'Juros simples crescem como...', v: 'Uma PA (crescimento linear).' },
      { f: 'Juros compostos crescem como...', v: 'Uma PG (crescimento exponencial).' },
      { f: 'Fator de um desconto de 20%', v: '0,8.' },
      { f: 'Dois aumentos sucessivos de 10%', v: 'Equivalem a 21% (1,1 × 1,1 = 1,21).' },
      { f: 'Como comparar à vista e parcelado?', v: 'Somar as parcelas e comparar com o preço à vista.' },
      { f: 'O que é montante?', v: 'Capital mais juros.' }
    ],
    quiz: [
      {
        q: 'Um capital de R$ 1.000 rende juros simples de 2% ao mês durante 6 meses. O montante é de',
        alt: ['R$ 1.120,00', 'R$ 1.020,00', 'R$ 1.200,00', 'R$ 1.126,16', 'R$ 1.060,00'],
        c: 0, dif: 'facil',
        exp: 'J = 1.000 · 0,02 · 6 = 120; M = 1.120.',
        res: '- Juros simples: J = C · i · t.\n- J = 1.000 · 0,02 · 6 = 120.\n- Montante = capital + juros = 1.000 + 120 = **R$ 1.120,00**.'
      },
      {
        q: 'Um produto de R$ 500 tem 10% de desconto à vista. O preço final é de',
        alt: ['R$ 450,00', 'R$ 490,00', 'R$ 400,00', 'R$ 550,00', 'R$ 410,00'],
        c: 0, dif: 'facil',
        exp: '500 · 0,9 = 450.',
        res: '- Fator de desconto de 10% = 1 − 0,10 = 0,9.\n- 500 · 0,9 = **R$ 450,00**.'
      },
      {
        q: 'Um capital de R$ 1.000 aplicado a juros compostos de 10% ao ano, por 2 anos, resulta em',
        alt: ['R$ 1.210,00', 'R$ 1.200,00', 'R$ 1.100,00', 'R$ 1.020,00', 'R$ 1.220,00'],
        c: 0, dif: 'medio',
        exp: '1.000 · 1,1² = 1.210.',
        res: '- Juros compostos: M = C · (1 + i)^t.\n- M = 1.000 · (1,1)² = 1.000 · 1,21.\n- M = **R$ 1.210,00**.\n- (Em juros simples seriam R$ 1.200.)'
      },
      {
        q: 'Dois aumentos sucessivos de 10% equivalem a um aumento total de',
        alt: ['21%', '20%', '10%', '11%', '22%'],
        c: 0, dif: 'medio',
        exp: '1,1 · 1,1 = 1,21.',
        res: '- Cada aumento de 10% multiplica por 1,1.\n- Dois aumentos: 1,1 · 1,1 = 1,21.\n- 1,21 = +21% → **21%** (e não 20%).'
      },
      {
        q: 'Um produto custa R$ 900 à vista ou 3 parcelas de R$ 330. O valor total a prazo é maior em',
        alt: ['R$ 90,00', 'R$ 30,00', 'R$ 60,00', 'R$ 120,00', 'R$ 0,00'],
        c: 0, dif: 'medio',
        exp: '3 · 330 = 990; 990 − 900 = 90.',
        res: '- Total a prazo: 3 · 330 = R$ 990.\n- Diferença: 990 − 900 = **R$ 90,00** (custo do parcelamento).'
      },
      {
        q: 'Um salário de R$ 2.000 recebe reajuste de 8%. O novo salário é de',
        alt: ['R$ 2.160,00', 'R$ 2.080,00', 'R$ 2.800,00', 'R$ 2.016,00', 'R$ 2.180,00'],
        c: 0, dif: 'dificil',
        exp: '2.000 · 1,08 = 2.160.',
        res: '- Fator de aumento de 8% = 1,08.\n- 2.000 · 1,08 = **R$ 2.160,00**.\n- (Ou: 8% de 2.000 = 160; 2.000 + 160.)'
      },
      {
        q: 'Em prazos longos, os juros compostos rendem mais que os simples porque',
        alt: ['incidem também sobre os juros já acumulados', 'incidem apenas sobre o capital inicial', 'não dependem do tempo', 'têm taxa sempre menor', 'são pagos uma única vez'],
        c: 0, dif: 'dificil',
        exp: 'Os "juros sobre juros" tornam o crescimento exponencial.',
        res: '- Nos juros simples, os juros incidem só sobre o **capital inicial** (crescimento linear).\n- Nos compostos, os juros de cada período entram na base do período seguinte ("juros sobre juros"): crescimento **exponencial**.\n- Quanto maior o prazo, maior a diferença.'
      },
      {
        q: 'Uma loja anuncia "10% de desconto" seguido de "mais 10% de desconto". O desconto total é de',
        alt: ['19%', '20%', '10%', '21%', '9%'],
        c: 0, dif: 'dificil',
        exp: '0,9 · 0,9 = 0,81, ou seja, 19% de desconto.',
        res: '- Cada desconto de 10% multiplica por 0,9.\n- 0,9 · 0,9 = 0,81 → o cliente paga 81%.\n- Desconto total: 100% − 81% = **19%** (e não 20%).'
      }
    ],
    pares: [
      { a: 'Juros simples', b: 'Incidem sobre o capital' },
      { a: 'Juros compostos', b: 'Juros sobre juros' },
      { a: 'Montante', b: 'Capital mais juros' },
      { a: 'Desconto de 20%', b: 'Fator 0,8' },
      { a: 'Aumento de 10%', b: 'Fator 1,1' },
      { a: 'Variações sucessivas', b: 'Multiplicam-se' },
      { a: 'À vista x parcelado', b: 'Compare o total pago' },
      { a: 'Inflação', b: 'Perda do poder de compra' }
    ]
  }

]);
