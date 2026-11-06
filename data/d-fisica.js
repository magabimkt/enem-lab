/* Física — Ciências da Natureza e suas Tecnologias.
   Incidência (Estratégia, 1998–2020): Mecânica ~26%, Eletricidade ~19%, Ondulatória ~15%, Termologia ~13%, Cinemática ~8%.
   O ENEM cobra interpretação, situações do cotidiano e energia; poucas contas, quase sempre simples. */
(function () {
  var F = {
    inep: { titulo: 'INEP — Matrizes de Referência do Enem (Ciências da Natureza e suas Tecnologias)', url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem' },
    estrategia: { titulo: 'Estratégia Vestibulares — Assuntos que mais caem no Enem (análise de 1998 a 2020)', url: 'https://vestibulares.estrategia.com/portal/enem/assuntos-que-mais-caem-no-enem/' },
    querobolsa: { titulo: 'Quero Bolsa — Esquenta Enem: o que mais cai na prova de Ciências da Natureza', url: 'https://querobolsa.com.br/revista/esquenta-enem-o-que-mais-cai-na-prova-de-ciencias-da-natureza' },
    gref: { titulo: 'GREF — Física conceitual e do cotidiano (obra de referência)', url: '' },
    halliday: { titulo: 'HALLIDAY, D.; RESNICK, R. Fundamentos de Física (obra de referência)', url: '' }
  };

  ENEM.temas('fisica', [
    /* ============ 1. ENERGIA ============ */
    {
      id: 'energia-trabalho-potencia',
      nome: 'Trabalho, energia, potência e rendimento',
      incidencia: 'alta',
      resumo: 'Conceitos mais cobrados da Mecânica: conservação de energia, transformações, potência, rendimento e consumo. Muito ligado a situações reais e a meio ambiente.',
      conceitos: [
        {
          titulo: 'Formas de energia e conservação',
          texto: '- **Energia cinética**: Ec = m·v²/2 (depende da massa e do quadrado da velocidade).\n- **Energia potencial gravitacional**: Ep = m·g·h; **elástica**: Ep = k·x²/2.\n- **Energia mecânica** = cinética + potencial. Sem atrito, ela se **conserva**: a perda de altura vira velocidade.\n- Com atrito, parte vira **calor** (energia dissipada), mas a **energia total do universo se conserva** (princípio da conservação).\n- **Trabalho** (W = F·d·cosθ): energia transferida por uma força, medido em **joule (J)**.'
        },
        {
          titulo: 'Potência, rendimento e consumo',
          texto: '**Potência** é a rapidez com que se realiza trabalho ou se transforma energia: P = E/Δt; unidade **watt (W)** = 1 J/s. **Quilowatt-hora (kWh)** é unidade de **energia** (1 kWh = 1.000 W durante 1 h), usada na conta de luz.\n\n**Rendimento** η = energia útil / energia total. Nenhuma máquina tem 100%: sempre há **dissipação**. Exemplos: lâmpada LED rende mais que a incandescente; motor a combustão rende cerca de 25–35%.'
        },
        {
          titulo: 'Fontes e transformações',
          texto: 'Usinas **hidrelétricas** (energia potencial da água → cinética → elétrica), **termelétricas** (calor → vapor → turbina), **eólicas**, **solares** (fotovoltaica converte luz em eletricidade), **nucleares** (fissão). Toda usina é uma **cadeia de transformações** com perdas. Alternativas renováveis diminuem emissões, mas têm impactos próprios.'
        }
      ],
      pegadinhas: [
        'Confundir **potência** (rapidez) com **energia** (quantidade): kWh é energia, não potência.',
        'Achar que a energia "se perde": ela se **transforma** (dissipação não é destruição).',
        'Esquecer que a energia cinética depende do **quadrado** da velocidade: dobrando v, quadruplica Ec.',
        'Dizer que um aparelho de maior potência "gasta mais" sempre: depende do **tempo de uso**.'
      ],
      dicas: [
        'Em consumo de energia: **E (kWh) = P (kW) × tempo (h)**.',
        'Em transformações, monte o fluxo: **forma inicial → formas intermediárias → forma final** e onde há perdas.',
        'Em rendimento, calcule **útil ÷ total** e verifique se o resultado é menor que 100%.'
      ],
      exemplo: {
        enunciado: 'Um chuveiro de 4.000 W é usado 30 minutos por dia durante 30 dias. Qual o consumo mensal?',
        resolucao: 'P = 4 kW; tempo = 0,5 h × 30 = 15 h. E = 4 × 15 = **60 kWh**. Se o kWh custa R$ 0,80, o custo é R$ 48,00.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.halliday, F.gref],
      flashcards: [
        { f: 'Fórmula da energia cinética', v: 'Ec = m·v²/2.' },
        { f: 'Fórmula da energia potencial gravitacional', v: 'Ep = m·g·h.' },
        { f: 'Unidade de potência', v: 'Watt (W) = joule por segundo.' },
        { f: 'kWh mede o quê?', v: 'Energia (1 kWh = 3,6 milhões de joules).' },
        { f: 'O que é rendimento?', v: 'Razão entre a energia útil e a energia total fornecida.' },
        { f: 'Princípio da conservação da energia', v: 'A energia não é criada nem destruída; apenas se transforma.' },
        { f: 'O que acontece se a velocidade dobra?', v: 'A energia cinética quadruplica.' },
        { f: 'Transformações em uma hidrelétrica', v: 'Potencial da água → cinética → energia elétrica.' }
      ],
      quiz: [
        {
          q: 'Um carro dobra a velocidade. Sua energia cinética',
          alt: ['quadruplica', 'dobra', 'fica pela metade', 'permanece igual', 'triplica'],
          c: 0, dif: 'facil',
          exp: 'Como Ec depende de v², dobrar a velocidade multiplica a energia por quatro.'
        },
        {
          q: 'Um aparelho de 2.000 W funciona por 3 horas. A energia consumida é de',
          alt: ['6 kWh', '2 kWh', '3 kWh', '600 kWh', '0,6 kWh'],
          c: 0, dif: 'facil',
          exp: '2 kW × 3 h = 6 kWh.'
        },
        {
          q: 'Em uma usina hidrelétrica, a sequência de transformações de energia é',
          alt: ['potencial da água, cinética nas turbinas e elétrica no gerador', 'química do combustível, térmica e elétrica', 'solar, química e potencial', 'nuclear, térmica e cinética da água', 'elétrica, mecânica e potencial'],
          c: 0, dif: 'medio',
          exp: 'A queda da água converte energia potencial em movimento das turbinas e depois em eletricidade.'
        },
        {
          q: 'Uma máquina recebe 400 J e realiza 100 J de trabalho útil. O rendimento é de',
          alt: ['25%', '75%', '40%', '100%', '4%'],
          c: 0, dif: 'medio',
          exp: 'η = 100 ÷ 400 = 0,25, ou 25%. O restante é dissipado, principalmente como calor.'
        },
        {
          q: 'Quando um corpo desliza com atrito e para, a energia mecânica inicial',
          alt: ['se transforma em energia térmica, sem desaparecer', 'é totalmente destruída', 'se converte em massa', 'é criada a partir do nada', 'permanece como energia cinética'],
          c: 0, dif: 'medio',
          exp: 'A energia total se conserva; o atrito converte parte dela em calor.'
        },
        {
          q: 'Trocar lâmpadas incandescentes por LED reduz o consumo porque as LED',
          alt: ['têm maior rendimento e transformam menos energia em calor', 'produzem energia a partir do ar ambiente', 'têm potência muito maior que as demais', 'dispensam o uso da eletricidade da rede', 'violam o princípio da conservação da energia'],
          c: 0, dif: 'medio',
          exp: 'Com maior rendimento luminoso, a mesma iluminação exige menos potência.'
        },
        {
          q: 'A unidade kWh, presente na conta de luz, é uma unidade de',
          alt: ['energia', 'potência', 'tensão', 'corrente elétrica', 'resistência'],
          c: 0, dif: 'dificil',
          exp: 'kWh = potência × tempo, portanto é energia.'
        },
        {
          q: 'Uma bola de 0,5 kg é solta de 10 m de altura (g = 10 m/s², sem resistência do ar). Sua energia potencial inicial é de',
          alt: ['50 J', '5 J', '500 J', '20 J', '100 J'],
          c: 0, dif: 'dificil',
          exp: 'Ep = m·g·h = 0,5 × 10 × 10 = 50 J, que se converte em energia cinética na queda.'
        }
      ],
      pares: [
        { a: 'Energia cinética', b: 'Energia do movimento' },
        { a: 'Energia potencial', b: 'Energia armazenada' },
        { a: 'Potência', b: 'Energia por segundo' },
        { a: 'Joule', b: 'Unidade de energia' },
        { a: 'Watt', b: 'Unidade de potência' },
        { a: 'Rendimento', b: 'Útil sobre total' },
        { a: 'Dissipação', b: 'Energia vira calor' },
        { a: 'Hidrelétrica', b: 'Usa a queda da água' }
      ]
    },

    /* ============ 2. CINEMÁTICA E DINÂMICA ============ */
    {
      id: 'cinematica-dinamica',
      nome: 'Cinemática e leis de Newton',
      incidencia: 'alta',
      resumo: 'Movimento uniforme e variado, gráficos, queda livre, forças, atrito, impulso. Cobrado em situações de trânsito, esportes e segurança.',
      conceitos: [
        {
          titulo: 'Cinemática',
          texto: '- **Velocidade média**: v = Δs/Δt. Atenção às unidades: **km/h ÷ 3,6 = m/s**.\n- **MRU** (velocidade constante): s = s₀ + v·t; gráfico s×t é uma **reta**.\n- **MRUV** (aceleração constante): v = v₀ + a·t; s = s₀ + v₀t + at²/2; v² = v₀² + 2aΔs.\n- **Queda livre**: aceleração g ≈ 10 m/s² (sem resistência do ar, corpos de massas diferentes caem juntos).\n- **Gráficos**: em v×t, a **inclinação** é a aceleração e a **área** é o deslocamento.'
        },
        {
          titulo: 'Leis de Newton',
          texto: '- **1ª (inércia)**: sem força resultante, o corpo mantém repouso ou MRU. Explica o cinto de segurança.\n- **2ª**: **F = m·a** (força resultante). Unidade: newton (N).\n- **3ª (ação e reação)**: forças de mesmo módulo e direção, sentidos opostos, **em corpos diferentes**.\n- **Peso** P = m·g (força); **massa** é quantidade de matéria. **Normal**, **tração**, **atrito** (estático e cinético; opõe-se ao movimento ou à tendência).'
        },
        {
          titulo: 'Impulso, quantidade de movimento e segurança',
          texto: '**Quantidade de movimento** Q = m·v. **Impulso** I = F·Δt = variação de Q. Para reduzir a força numa colisão, aumenta-se o **tempo de interação**: **airbag**, cinto, zonas de deformação, capacete. **Colisões**: conserva-se Q no sistema isolado.'
        }
      ],
      pegadinhas: [
        'Confundir **massa** (kg, constante) com **peso** (N, depende de g).',
        'Dizer que as forças de ação e reação "se anulam": atuam em **corpos diferentes**.',
        'Esquecer de converter **km/h para m/s** (dividir por 3,6).',
        'Achar que é preciso força para manter um corpo em MRU: sem força resultante, ele **continua** em movimento.'
      ],
      dicas: [
        'Em gráficos v×t, ligue **área = distância** e **inclinação = aceleração**.',
        'Em segurança (cinto, airbag), raciocine com **impulso: maior tempo, menor força**.',
        'Desenhe as forças em diagrama antes de aplicar F = m·a.'
      ],
      exemplo: {
        enunciado: 'Um carro a 72 km/h passa a 36 km/h em 5 s, com desaceleração constante. Qual a desaceleração?',
        resolucao: '72 km/h = 20 m/s e 36 km/h = 10 m/s. a = Δv/Δt = (10 − 20)/5 = **−2 m/s²** (desaceleração de 2 m/s²).'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.halliday, F.gref],
      flashcards: [
        { f: 'Conversão de km/h para m/s', v: 'Dividir por 3,6.' },
        { f: '1ª lei de Newton', v: 'Inércia: sem força resultante, o corpo mantém repouso ou MRU.' },
        { f: '2ª lei de Newton', v: 'F = m·a.' },
        { f: '3ª lei de Newton', v: 'A toda ação corresponde uma reação de mesma intensidade e sentido oposto, em corpos diferentes.' },
        { f: 'Massa x peso', v: 'Massa é quantidade de matéria (kg); peso é a força gravitacional (N), P = m·g.' },
        { f: 'No gráfico v×t, a área representa', v: 'O deslocamento.' },
        { f: 'Para que serve o airbag?', v: 'Aumentar o tempo da colisão, reduzindo a força média sobre o corpo.' },
        { f: 'O que é impulso?', v: 'Produto da força pelo tempo de atuação; igual à variação da quantidade de movimento.' }
      ],
      quiz: [
        {
          q: 'O cinto de segurança protege os ocupantes em uma freada brusca por causa da',
          alt: ['inércia, pois o corpo tende a continuar em movimento', 'ação e reação entre o banco e o motorista', 'força peso', 'conservação da energia térmica', 'lei da gravitação'],
          c: 0, dif: 'facil',
          exp: 'Sem força resultante, o corpo mantém sua velocidade; o cinto aplica a força que o freia.'
        },
        {
          q: 'Um corpo de 2 kg sofre uma força resultante de 10 N. Sua aceleração é de',
          alt: ['5 m/s²', '20 m/s²', '0,2 m/s²', '12 m/s²', '8 m/s²'],
          c: 0, dif: 'facil',
          exp: 'a = F/m = 10/2 = 5 m/s².'
        },
        {
          q: 'Um carro a 72 km/h mantém velocidade constante por 10 s. A distância percorrida é de',
          alt: ['200 m', '720 m', '72 m', '20 m', '2.000 m'],
          c: 0, dif: 'medio',
          exp: '72 km/h = 20 m/s; 20 × 10 = 200 m.'
        },
        {
          q: 'O airbag reduz o risco de lesões porque',
          alt: ['aumenta o tempo de parada do corpo, diminuindo a força média', 'impede qualquer mudança na velocidade do corpo', 'elimina a inércia do ocupante do veículo', 'aumenta a velocidade do corpo no impacto', 'reduz a massa efetiva do ocupante'],
          c: 0, dif: 'medio',
          exp: 'Com o mesmo impulso, um tempo maior significa menor força.'
        },
        {
          q: 'As forças de ação e reação não se anulam porque',
          alt: ['atuam em corpos diferentes', 'têm módulos diferentes', 'têm a mesma direção e o mesmo sentido', 'só existem em repouso', 'ocorrem em instantes distintos'],
          c: 0, dif: 'medio',
          exp: 'Para anular, as forças precisariam atuar no mesmo corpo.'
        },
        {
          q: 'Um astronauta na Lua tem, em relação à Terra,',
          alt: ['a mesma massa e peso menor', 'a mesma massa e o mesmo peso', 'massa menor e o mesmo peso', 'massa maior e peso menor', 'massa e peso maiores'],
          c: 0, dif: 'medio',
          exp: 'A massa é invariante; o peso depende de g, que é menor na Lua.'
        },
        {
          q: 'Em um gráfico velocidade × tempo, uma reta horizontal indica',
          alt: ['movimento uniforme, com aceleração nula', 'repouso absoluto', 'aceleração constante e positiva', 'aceleração crescente', 'movimento em sentido contrário'],
          c: 0, dif: 'dificil',
          exp: 'Velocidade constante significa aceleração zero.'
        },
        {
          q: 'No vácuo, uma pena e uma pedra soltas da mesma altura',
          alt: ['chegam ao solo ao mesmo tempo', 'a pedra chega bem antes', 'a pena chega antes', 'ficam suspensas', 'não caem'],
          c: 0, dif: 'dificil',
          exp: 'Sem resistência do ar, a aceleração é igual para todos os corpos.'
        }
      ],
      pares: [
        { a: '1ª lei de Newton', b: 'Inércia' },
        { a: '2ª lei de Newton', b: 'F = m·a' },
        { a: '3ª lei de Newton', b: 'Ação e reação' },
        { a: 'MRU', b: 'Velocidade constante' },
        { a: 'MRUV', b: 'Aceleração constante' },
        { a: 'Peso', b: 'Massa vezes g' },
        { a: 'Airbag', b: 'Aumenta o tempo do impacto' },
        { a: 'Newton (N)', b: 'Unidade de força' }
      ]
    },

    /* ============ 3. ELETRICIDADE ============ */
    {
      id: 'eletricidade',
      nome: 'Eletricidade: circuitos, potência e consumo',
      incidencia: 'alta',
      resumo: 'Corrente, tensão, resistência, Lei de Ohm, associação de resistores, potência elétrica, consumo, fusíveis e segurança.',
      conceitos: [
        {
          titulo: 'Grandezas e Lei de Ohm',
          texto: '- **Corrente elétrica (i)**: fluxo de cargas; ampère (A). **Tensão (U)**: diferença de potencial; volt (V). **Resistência (R)**: oposição à corrente; ohm (Ω).\n- **Lei de Ohm**: U = R·i.\n- **Potência elétrica**: P = U·i = R·i² = U²/R.\n- **Efeito Joule**: a resistência transforma energia elétrica em calor (chuveiro, ferro, fusível).\n- **Condutores** (metais) e **isolantes** (borracha, plástico).'
        },
        {
          titulo: 'Circuitos',
          texto: '**Série**: mesma corrente em todos; as tensões se somam; se um elemento queima, o circuito abre. **Paralelo**: mesma tensão em todos; as correntes se somam; é o padrão das residências (cada aparelho funciona independentemente). A resistência equivalente em série é a **soma**; em paralelo, é **menor** que a menor.\n\n**Fusível e disjuntor** protegem contra **sobrecarga** e **curto-circuito**. O **fio terra** descarrega correntes de fuga; **choque** depende da corrente que atravessa o corpo.'
        },
        {
          titulo: 'Consumo e eficiência',
          texto: 'Consumo (kWh) = potência (kW) × tempo (h). Para economizar: aparelhos **eficientes** (selo Procel), desligar o que não é usado, evitar **stand-by**, horário de pico. A **tarifa** e a **bandeira tarifária** refletem o custo de geração. **Geradores e pilhas** convertem outras energias em elétrica.'
        }
      ],
      pegadinhas: [
        'Achar que ligar mais aparelhos em **paralelo** aumenta a tensão: aumenta a **corrente total**.',
        'Confundir **corrente** (A) com **tensão** (V) e **potência** (W).',
        'Dizer que o chuveiro "no inverno gasta mais" apenas pelo tempo: a posição "inverno" tem **maior potência** (menor resistência).',
        'Esquecer que fusível deve ser dimensionado para a **corrente do circuito**.'
      ],
      dicas: [
        'Em circuitos residenciais, pense **paralelo**: mesma tensão (110/127 V ou 220 V).',
        'Use **P = U·i** para achar a corrente de um aparelho e dimensionar o disjuntor.',
        'Em chuveiro, **menor resistência → maior corrente → maior potência → mais calor**.'
      ],
      exemplo: {
        enunciado: 'Um chuveiro de 4.400 W é ligado a 220 V. Qual a corrente?',
        resolucao: 'i = P/U = 4.400/220 = **20 A**. Por isso o circuito precisa de fios e disjuntor adequados a essa corrente.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.halliday, F.gref],
      flashcards: [
        { f: 'Lei de Ohm', v: 'U = R·i.' },
        { f: 'Fórmulas da potência elétrica', v: 'P = U·i = R·i² = U²/R.' },
        { f: 'Associação em série', v: 'Mesma corrente; tensões se somam.' },
        { f: 'Associação em paralelo', v: 'Mesma tensão; correntes se somam.' },
        { f: 'O que é efeito Joule?', v: 'Transformação de energia elétrica em calor ao passar por um resistor.' },
        { f: 'Função do fusível', v: 'Interromper o circuito em caso de corrente excessiva.' },
        { f: 'Função do fio terra', v: 'Escoar correntes de fuga e proteger contra choques.' },
        { f: 'Instalações residenciais usam qual associação?', v: 'Paralelo.' }
      ],
      quiz: [
        {
          q: 'Em uma residência, os aparelhos são ligados em paralelo para que',
          alt: ['cada um receba a mesma tensão e funcione de forma independente', 'a corrente seja igual em todos os aparelhos', 'a tensão se divida entre eles', 'todos desliguem se um falhar', 'a resistência total aumente'],
          c: 0, dif: 'facil',
          exp: 'No paralelo, a tensão é a mesma e cada ramo pode ser ligado ou desligado sozinho.'
        },
        {
          q: 'Um resistor de 4 Ω é submetido a 12 V. A corrente que o atravessa é de',
          alt: ['3 A', '48 A', '8 A', '0,33 A', '16 A'],
          c: 0, dif: 'facil',
          exp: 'i = U/R = 12/4 = 3 A.'
        },
        {
          q: 'Um aparelho de 1.100 W em 110 V consome corrente de',
          alt: ['10 A', '1 A', '100 A', '1.210 A', '0,1 A'],
          c: 0, dif: 'medio',
          exp: 'i = P/U = 1.100/110 = 10 A.'
        },
        {
          q: 'Um chuveiro elétrico aquece a água porque',
          alt: ['a resistência converte energia elétrica em calor (efeito Joule)', 'o fio terra produz calor ao conduzir corrente', 'a tensão se transforma em corrente elétrica', 'o fusível aquece a água ao se fundir', 'a própria água gera eletricidade ao passar'],
          c: 0, dif: 'medio',
          exp: 'O efeito Joule dissipa a energia na resistência.'
        },
        {
          q: 'Para o chuveiro esquentar mais (posição inverno), o mecanismo é',
          alt: ['diminuir a resistência, o que aumenta a corrente e a potência', 'aumentar a resistência, reduzindo a potência', 'trocar a tensão da rede', 'ligar o fio terra', 'reduzir a vazão a zero'],
          c: 0, dif: 'dificil',
          exp: 'Com U constante, P = U²/R: menor R, maior potência.'
        },
        {
          q: 'Cinco lâmpadas de 20 W ficam acesas 4 horas por dia durante 30 dias. O consumo mensal é de',
          alt: ['12 kWh', '120 kWh', '2,4 kWh', '600 kWh', '1,2 kWh'],
          c: 0, dif: 'medio',
          exp: '5 × 20 = 100 W = 0,1 kW; 0,1 × 4 × 30 = 12 kWh.'
        },
        {
          q: 'O disjuntor, ao desarmar, protege a instalação porque',
          alt: ['interrompe a passagem de corrente excessiva', 'aumenta a tensão do circuito', 'reduz a resistência dos fios', 'produz energia extra', 'liga o fio terra'],
          c: 0, dif: 'medio',
          exp: 'Sobrecargas e curto-circuitos elevam a corrente e podem causar incêndios.'
        },
        {
          q: 'Em um circuito em série com duas lâmpadas, se uma delas queimar,',
          alt: ['a outra também apaga, pois o circuito é interrompido', 'a outra fica mais brilhante que antes', 'a outra continua funcionando normalmente', 'a tensão dobra sobre a lâmpada restante', 'a corrente aumenta no circuito inteiro'],
          c: 0, dif: 'dificil',
          exp: 'No circuito em série existe um único caminho para a corrente.'
        }
      ],
      pares: [
        { a: 'Lei de Ohm', b: 'U = R·i' },
        { a: 'Volt', b: 'Unidade de tensão' },
        { a: 'Ampère', b: 'Unidade de corrente' },
        { a: 'Ohm', b: 'Unidade de resistência' },
        { a: 'Paralelo', b: 'Mesma tensão' },
        { a: 'Série', b: 'Mesma corrente' },
        { a: 'Efeito Joule', b: 'Eletricidade vira calor' },
        { a: 'Fusível', b: 'Protege contra sobrecarga' }
      ]
    },

    /* ============ 4. ONDULATÓRIA E ÓPTICA ============ */
    {
      id: 'ondulatoria-optica',
      nome: 'Ondulatória, som, luz e óptica',
      incidencia: 'alta',
      resumo: 'Características das ondas, fenômenos ondulatórios, som, luz, espelhos, lentes e visão.',
      conceitos: [
        {
          titulo: 'Ondas',
          texto: 'Onda transporta **energia** sem transportar matéria. **Mecânicas** (som; precisam de meio) e **eletromagnéticas** (luz, rádio, micro-ondas; propagam-se no vácuo).\n\n- **Equação fundamental**: v = λ·f (velocidade = comprimento de onda × frequência).\n- **Fenômenos**: reflexão, refração (mudança de meio), difração (contornar obstáculos), interferência, polarização (só ondas transversais), ressonância.\n- **Espectro eletromagnético**: rádio, micro-ondas, infravermelho, luz visível, ultravioleta, raios X e gama (de menor a maior frequência/energia).'
        },
        {
          titulo: 'Som',
          texto: 'Onda **mecânica longitudinal**; no ar, cerca de **340 m/s**. **Altura** (grave/agudo) depende da **frequência**; **intensidade** (volume) da amplitude; **timbre** distingue as fontes. **Eco**, **reverberação** e **efeito Doppler** (mudança da frequência percebida quando fonte ou observador se movem). O **ultrassom** é usado em exames e sonares. Poluição sonora afeta a saúde.'
        },
        {
          titulo: 'Luz e óptica',
          texto: '- **Reflexão**: ângulo de incidência = ângulo de reflexão; **espelhos** planos (imagem virtual e simétrica), côncavos (convergem) e convexos (divergem; retrovisores, ampliam o campo de visão).\n- **Refração**: luz muda de velocidade e direção; explica miragens, o "quebrar" do lápis na água, **fibras ópticas** (reflexão total).\n- **Lentes**: convergentes (corrigem **hipermetropia**), divergentes (corrigem **miopia**). Olho: córnea, cristalino, retina.\n- **Cores**: um objeto aparenta a cor que **reflete**; luz branca contém todas as cores (dispersão, arco-íris).'
        }
      ],
      pegadinhas: [
        'Dizer que o som se propaga no vácuo: precisa de **meio material**.',
        'Confundir **altura** (frequência) com **intensidade** (amplitude).',
        'Trocar as lentes: **miopia = divergente**; **hipermetropia = convergente**.',
        'Achar que a refração muda a frequência: muda a **velocidade e o comprimento de onda**, a frequência permanece.'
      ],
      dicas: [
        'Use v = λ·f e lembre: ao mudar de meio, **f se mantém**.',
        'No espectro, ordene por energia: **rádio < micro-ondas < IV < visível < UV < X < gama**.',
        'Para espelhos e lentes, desenhe os **raios principais** quando necessário.'
      ],
      exemplo: {
        enunciado: 'Uma onda sonora tem frequência de 500 Hz e comprimento de onda de 0,68 m. Qual a velocidade?',
        resolucao: 'v = λ·f = 0,68 × 500 = **340 m/s**, valor típico do som no ar.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.halliday, F.gref],
      flashcards: [
        { f: 'Equação fundamental da ondulatória', v: 'v = λ·f.' },
        { f: 'O som se propaga no vácuo?', v: 'Não, precisa de meio material.' },
        { f: 'O que determina se um som é grave ou agudo?', v: 'A frequência.' },
        { f: 'O que determina o volume?', v: 'A amplitude (intensidade).' },
        { f: 'O que é refração?', v: 'Mudança de velocidade e direção da onda ao passar de um meio para outro.' },
        { f: 'O que é difração?', v: 'Capacidade de uma onda contornar obstáculos ou fendas.' },
        { f: 'Lente que corrige a miopia', v: 'Divergente.' },
        { f: 'Lente que corrige a hipermetropia', v: 'Convergente.' }
      ],
      quiz: [
        {
          q: 'A diferença entre uma onda sonora e uma onda luminosa é que o som',
          alt: ['precisa de meio material para se propagar', 'se propaga apenas no vácuo', 'é uma onda eletromagnética', 'tem velocidade maior que a luz', 'é sempre transversal'],
          c: 0, dif: 'facil',
          exp: 'A luz é eletromagnética e se propaga no vácuo; o som é mecânico.'
        },
        {
          q: 'Uma onda tem frequência de 10 Hz e comprimento de onda de 2 m. Sua velocidade é de',
          alt: ['20 m/s', '5 m/s', '12 m/s', '0,2 m/s', '8 m/s'],
          c: 0, dif: 'facil',
          exp: 'v = λ·f = 2 × 10 = 20 m/s.'
        },
        {
          q: 'O que diferencia um som agudo de um grave é a',
          alt: ['frequência', 'amplitude', 'velocidade no ar', 'distância da fonte', 'cor da fonte sonora'],
          c: 0, dif: 'facil',
          exp: 'Sons agudos têm frequência alta; graves, baixa.'
        },
        {
          q: 'O espelho convexo é usado em retrovisores porque ele',
          alt: ['amplia o campo de visão, formando imagens menores', 'forma imagens maiores que o objeto', 'concentra todos os raios em um ponto', 'impede qualquer reflexão', 'produz imagens reais invertidas'],
          c: 0, dif: 'medio',
          exp: 'Espelhos convexos divergem os raios e cobrem uma área maior.'
        },
        {
          q: 'Uma pessoa míope precisa usar lentes',
          alt: ['divergentes', 'convergentes', 'planas', 'coloridas', 'sem curvatura'],
          c: 0, dif: 'medio',
          exp: 'A lente divergente afasta o ponto de convergência para a retina.'
        },
        {
          q: 'Quando uma ambulância se aproxima, o som parece mais agudo, fenômeno conhecido como',
          alt: ['efeito Doppler', 'eco', 'reverberação', 'difração', 'interferência destrutiva'],
          c: 0, dif: 'medio',
          exp: 'A aproximação da fonte aumenta a frequência percebida.'
        },
        {
          q: 'A comunicação por fibras ópticas baseia-se no fenômeno de',
          alt: ['reflexão total da luz', 'absorção da luz', 'difração do som', 'efeito Joule', 'indução eletromagnética'],
          c: 0, dif: 'dificil',
          exp: 'A luz sofre sucessivas reflexões totais no interior da fibra.'
        },
        {
          q: 'Entre as radiações a seguir, a de maior energia é',
          alt: ['raios gama', 'ondas de rádio', 'micro-ondas', 'luz visível', 'infravermelho'],
          c: 0, dif: 'dificil',
          exp: 'No espectro, a energia cresce das ondas de rádio aos raios gama.'
        }
      ],
      pares: [
        { a: 'Frequência', b: 'Define som grave ou agudo' },
        { a: 'Amplitude', b: 'Define o volume' },
        { a: 'Refração', b: 'Mudança de meio' },
        { a: 'Difração', b: 'Contornar obstáculos' },
        { a: 'Efeito Doppler', b: 'Fonte em movimento' },
        { a: 'Lente divergente', b: 'Corrige miopia' },
        { a: 'Lente convergente', b: 'Corrige hipermetropia' },
        { a: 'Raios gama', b: 'Maior energia no espectro' }
      ]
    },

    /* ============ 5. TERMOLOGIA ============ */
    {
      id: 'termologia',
      nome: 'Termologia: calor, temperatura e termodinâmica',
      incidencia: 'alta',
      resumo: 'Calor e temperatura, calorimetria, mudanças de estado, propagação do calor, dilatação e máquinas térmicas.',
      conceitos: [
        {
          titulo: 'Calor, temperatura e calorimetria',
          texto: '**Temperatura** mede o grau de agitação das partículas; **calor** é energia **em trânsito** devido à diferença de temperatura (do mais quente para o mais frio, até o equilíbrio térmico).\n\n- **Calor sensível**: Q = m·c·ΔT (muda a temperatura). O **calor específico** da água é alto (1 cal/g·°C), por isso o mar regula o clima.\n- **Calor latente**: Q = m·L (muda o estado, com temperatura constante).\n- **Escalas**: Celsius, Kelvin (K = °C + 273) e Fahrenheit.'
        },
        {
          titulo: 'Propagação do calor e dilatação',
          texto: '**Condução** (contato; metais conduzem bem), **convecção** (correntes de fluido; geladeira, brisas), **irradiação** (ondas eletromagnéticas; calor do Sol, no vácuo). **Isolantes térmicos**: isopor, ar, lã, vidro duplo. **Garrafa térmica**: reduz as três formas. **Efeito estufa** retém radiação infravermelha.\n\n**Dilatação**: sólidos, líquidos e gases aumentam de volume ao serem aquecidos (juntas em pontes e trilhos; termômetros).'
        },
        {
          titulo: 'Termodinâmica',
          texto: '**1ª lei**: conservação da energia (Q = ΔU + W). **2ª lei**: o calor flui espontaneamente do quente para o frio e **nenhuma máquina térmica tem rendimento de 100%**; parte do calor é sempre rejeitada. **Motores a combustão**, **geladeiras** (retiram calor do interior e o liberam fora, com trabalho externo) e **usinas termelétricas** seguem esses princípios.'
        }
      ],
      pegadinhas: [
        'Confundir **calor** (energia em trânsito) com **temperatura** (agitação das partículas).',
        'Dizer que o frio "entra" na casa: o **calor sai** (ou entra) pelo fluxo do quente ao frio.',
        'Esquecer que, em mudança de estado, a **temperatura permanece constante**.',
        'Achar que o metal é "mais frio" ao toque: ele apenas **conduz mais rápido** o calor da mão.'
      ],
      dicas: [
        'Para calorimetria, escreva **Q = m·c·ΔT** e verifique as unidades.',
        'Em questões de conforto térmico, identifique **qual processo de propagação** domina.',
        'Em máquinas, lembre: o **rendimento é sempre menor que 100%** (2ª lei).'
      ],
      exemplo: {
        enunciado: 'Quanto calor é necessário para elevar de 20 °C a 70 °C a temperatura de 200 g de água (c = 1 cal/g·°C)?',
        resolucao: 'Q = m·c·ΔT = 200 × 1 × 50 = **10.000 cal** (10 kcal).'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.halliday, F.gref],
      flashcards: [
        { f: 'Calor x temperatura', v: 'Calor é energia em trânsito; temperatura mede a agitação das partículas.' },
        { f: 'Fórmula do calor sensível', v: 'Q = m·c·ΔT.' },
        { f: 'Fórmula do calor latente', v: 'Q = m·L.' },
        { f: 'Conversão de Celsius para Kelvin', v: 'K = °C + 273.' },
        { f: 'Três formas de propagação do calor', v: 'Condução, convecção e irradiação.' },
        { f: 'Qual propagação ocorre no vácuo?', v: 'Irradiação.' },
        { f: '2ª lei da termodinâmica (ideia)', v: 'O calor flui do quente para o frio e nenhuma máquina térmica tem rendimento de 100%.' },
        { f: 'Por que o mar suaviza o clima?', v: 'A água tem alto calor específico e varia pouco de temperatura.' }
      ],
      quiz: [
        {
          q: 'A brisa marítima durante o dia ocorre porque a terra, em relação ao mar,',
          alt: ['aquece mais rápido, e o ar quente sobe, atraindo ar do mar', 'esfria mais rápido, e o ar do mar sobe', 'tem maior calor específico que a água', 'não troca calor com o ar', 'tem sempre a mesma temperatura que o mar'],
          c: 0, dif: 'medio',
          exp: 'O menor calor específico da terra faz o ar sobre ela subir (convecção).'
        },
        {
          q: 'A garrafa térmica reduz as trocas de calor porque',
          alt: ['possui vácuo e superfícies espelhadas entre as paredes', 'é feita apenas de metal condutor', 'não possui tampa', 'aumenta a convecção interna', 'usa paredes totalmente transparentes'],
          c: 0, dif: 'medio',
          exp: 'O vácuo evita condução e convecção; o espelhamento reduz a irradiação.'
        },
        {
          q: 'Durante a fusão do gelo a 0 °C, a temperatura',
          alt: ['permanece constante enquanto houver gelo', 'aumenta continuamente', 'diminui', 'oscila sem regra', 'dobra'],
          c: 0, dif: 'medio',
          exp: 'O calor recebido é usado na mudança de estado, e não no aumento da temperatura.'
        },
        {
          q: 'Para aquecer 100 g de água em 10 °C (c = 1 cal/g·°C), são necessárias',
          alt: ['1.000 cal', '100 cal', '10 cal', '110 cal', '10.000 cal'],
          c: 0, dif: 'facil',
          exp: 'Q = 100 × 1 × 10 = 1.000 cal.'
        },
        {
          q: 'A principal forma de transmissão do calor do Sol até a Terra é a',
          alt: ['irradiação', 'condução', 'convecção', 'dilatação', 'evaporação'],
          c: 0, dif: 'facil',
          exp: 'Entre o Sol e a Terra há vácuo; só a radiação eletromagnética se propaga.'
        },
        {
          q: 'A geladeira mantém o interior frio porque',
          alt: ['retira calor do interior e o libera fora, usando trabalho externo', 'produz frio a partir do nada, sem gasto', 'cria energia térmica negativa no interior', 'viola a segunda lei da termodinâmica', 'impede a entrada de qualquer calor externo'],
          c: 0, dif: 'dificil',
          exp: 'O calor só passa do frio para o quente com realização de trabalho.'
        },
        {
          q: 'Por que as pontes e os trilhos possuem juntas de dilatação?',
          alt: ['para permitir o aumento de comprimento com a temperatura', 'para reduzir a massa total de toda a estrutura', 'para evitar a corrosão causada pela chuva ácida', 'para aumentar o atrito entre as peças metálicas', 'para conduzir melhor a eletricidade nos trilhos'],
          c: 0, dif: 'medio',
          exp: 'Sem folgas, a dilatação causaria tensões e deformações.'
        },
        {
          q: 'Segundo a segunda lei da termodinâmica, uma máquina térmica',
          alt: ['nunca converte todo o calor recebido em trabalho', 'pode ter rendimento de 100%', 'funciona sem fonte fria', 'cria energia continuamente', 'transfere calor do frio para o quente espontaneamente'],
          c: 0, dif: 'dificil',
          exp: 'Parte do calor é sempre rejeitada para a fonte fria.'
        }
      ],
      pares: [
        { a: 'Calor', b: 'Energia em trânsito' },
        { a: 'Temperatura', b: 'Agitação das partículas' },
        { a: 'Condução', b: 'Contato direto' },
        { a: 'Convecção', b: 'Correntes de fluido' },
        { a: 'Irradiação', b: 'Ondas eletromagnéticas' },
        { a: 'Calor específico', b: 'Facilidade de variar temperatura' },
        { a: 'Kelvin', b: 'Escala absoluta' },
        { a: 'Segunda lei', b: 'Rendimento menor que 100%' }
      ]
    },

    /* ============ 6. ELETROMAGNETISMO E FÍSICA MODERNA ============ */
    {
      id: 'eletromagnetismo-moderna',
      nome: 'Eletromagnetismo, usinas e física moderna',
      incidencia: 'media',
      resumo: 'Campo magnético, indução eletromagnética, transformadores, geração de energia, radiação, radioatividade e noções de relatividade e quântica.',
      conceitos: [
        {
          titulo: 'Magnetismo e indução',
          texto: '- **Ímãs** têm polos norte e sul (iguais se repelem, diferentes se atraem); **inseparáveis**. A **bússola** alinha-se ao campo magnético da Terra.\n- **Corrente elétrica gera campo magnético** (Oersted); **campo magnético variável gera corrente** (**indução de Faraday**).\n- **Geradores** (usinas): movimento de bobina/ímã gera tensão. **Motores**: corrente em campo magnético produz movimento.\n- **Transformadores** só funcionam em **corrente alternada** e alteram a tensão, usados para **transmitir energia em alta tensão** com menos perdas por efeito Joule.'
        },
        {
          titulo: 'Radiações e radioatividade',
          texto: '**Radioatividade**: emissão de partículas/radiação por núcleos instáveis (**alfa**, **beta**, **gama**). **Meia-vida**: tempo para a metade dos núcleos decair. Aplicações: **medicina nuclear**, radioterapia, datação por **carbono-14**, usinas nucleares (fissão). Riscos: acidentes (Chernobyl, Goiânia/Césio-137), rejeitos radioativos. **Radiação ionizante** (X, gama) × **não ionizante** (micro-ondas, celular).'
        },
        {
          titulo: 'Física moderna',
          texto: '**Relatividade** (Einstein): velocidade da luz constante; dilatação do tempo; E = m·c² (massa e energia). **Quântica**: energia em pacotes (**fótons**); **efeito fotoelétrico** (luz arranca elétrons de metais) explica **painéis solares** e sensores. **Dualidade onda-partícula**. Tecnologias: lasers, LEDs, semicondutores, GPS (corrige efeitos relativísticos).'
        }
      ],
      pegadinhas: [
        'Achar que transformador funciona com **corrente contínua**: precisa de variação (alternada).',
        'Confundir radiação **ionizante** (perigosa em doses) com a emitida por celular ou Wi-Fi (**não ionizante**).',
        'Dizer que "ímãs podem ter só um polo": os polos são **inseparáveis**.',
        'Esquecer que a transmissão em alta tensão **reduz** a corrente e, portanto, as perdas.'
      ],
      dicas: [
        'Associe: **Oersted** (corrente → campo), **Faraday** (campo variável → corrente).',
        'Em usinas, identifique qual **fonte move a turbina** (água, vapor, vento).',
        'Em radioatividade, calcule a meia-vida por **divisões sucessivas por 2**.'
      ],
      exemplo: {
        enunciado: 'Uma amostra radioativa de 80 g tem meia-vida de 5 dias. Quanto restará após 15 dias?',
        resolucao: '15 dias = 3 meias-vidas. 80 → 40 → 20 → **10 g**.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.halliday, F.gref],
      flashcards: [
        { f: 'O que é indução eletromagnética?', v: 'Geração de corrente por variação de fluxo magnético (Faraday).' },
        { f: 'Para que serve um transformador?', v: 'Aumentar ou diminuir a tensão em corrente alternada.' },
        { f: 'Por que transmitir energia em alta tensão?', v: 'Reduz a corrente e as perdas por efeito Joule.' },
        { f: 'O que é meia-vida?', v: 'Tempo para que metade dos núcleos radioativos de uma amostra decaia.' },
        { f: 'Tipos de radiação nuclear', v: 'Alfa, beta e gama.' },
        { f: 'O que é efeito fotoelétrico?', v: 'Emissão de elétrons por um metal ao ser iluminado; base das células solares.' },
        { f: 'E = m·c² relaciona...', v: 'Massa e energia.' },
        { f: 'Os polos de um ímã podem ser separados?', v: 'Não; ao partir um ímã, surgem novos polos norte e sul.' }
      ],
      quiz: [
        {
          q: 'A geração de energia elétrica em usinas baseia-se em',
          alt: ['variação do fluxo magnético em bobinas (indução)', 'reações químicas entre metais', 'atrito entre fios condutores', 'conversão direta do som em corrente', 'resfriamento de materiais isolantes'],
          c: 0, dif: 'medio',
          exp: 'O movimento relativo entre ímã e bobina induz corrente elétrica.'
        },
        {
          q: 'A transmissão de energia em alta tensão é preferida porque',
          alt: ['reduz a corrente e, assim, as perdas por efeito Joule', 'aumenta a corrente e a potência perdida', 'dispensa o uso de fios condutores', 'elimina a necessidade de transformadores', 'aumenta o aquecimento dos cabos'],
          c: 0, dif: 'medio',
          exp: 'Para a mesma potência, maior tensão significa menor corrente e menor perda.'
        },
        {
          q: 'Uma amostra radioativa de 40 g com meia-vida de 2 anos terá, após 6 anos,',
          alt: ['5 g', '20 g', '10 g', '2,5 g', '0 g'],
          c: 0, dif: 'medio',
          exp: '6 anos = 3 meias-vidas: 40 → 20 → 10 → 5 g.'
        },
        {
          q: 'Os painéis solares fotovoltaicos baseiam-se no',
          alt: ['efeito fotoelétrico', 'efeito Doppler', 'efeito Joule', 'princípio de Arquimedes', 'princípio da inércia'],
          c: 0, dif: 'facil',
          exp: 'A luz libera elétrons em semicondutores, gerando corrente.'
        },
        {
          q: 'Se um ímã de barra for partido ao meio, obtêm-se',
          alt: ['dois ímãs completos, cada um com polo norte e polo sul', 'um polo norte isolado e um polo sul isolado', 'dois pedaços sem magnetismo', 'um ímã com dois polos norte', 'um ímã apenas'],
          c: 0, dif: 'medio',
          exp: 'Os polos magnéticos são inseparáveis.'
        },
        {
          q: 'O transformador só funciona com corrente alternada porque',
          alt: ['precisa de um fluxo magnético variável para induzir tensão', 'a corrente contínua é fraca demais para uso', 'a corrente alternada não possui polos', 'a tensão alternada é sempre menor que a contínua', 'a corrente contínua não existe nas instalações'],
          c: 0, dif: 'dificil',
          exp: 'Sem variação do fluxo, não há indução.'
        },
        {
          q: 'A radiação emitida pelo telefone celular é classificada como não ionizante, ou seja,',
          alt: ['não tem energia suficiente para arrancar elétrons dos átomos', 'é idêntica aos raios gama em todos os aspectos', 'é mais energética que os raios X', 'sempre destrói o DNA das células', 'é produzida por núcleos atômicos instáveis'],
          c: 0, dif: 'dificil',
          exp: 'Micro-ondas e rádio têm baixa energia por fóton.'
        },
        {
          q: 'O acidente com o césio-137 em Goiânia (1987) ilustra o risco de',
          alt: ['manuseio inadequado de fontes radioativas', 'excesso de energia solar', 'poluição sonora', 'falta de saneamento básico', 'doenças transmitidas por mosquitos'],
          c: 0, dif: 'dificil',
          exp: 'Uma cápsula de césio foi aberta sem conhecimento do perigo, contaminando pessoas e o ambiente.'
        }
      ],
      pares: [
        { a: 'Oersted', b: 'Corrente gera campo magnético' },
        { a: 'Faraday', b: 'Indução eletromagnética' },
        { a: 'Transformador', b: 'Altera a tensão alternada' },
        { a: 'Meia-vida', b: 'Metade dos núcleos decai' },
        { a: 'Efeito fotoelétrico', b: 'Painel solar' },
        { a: 'Raios gama', b: 'Radiação ionizante' },
        { a: 'Einstein', b: 'E = m·c²' },
        { a: 'Césio-137', b: 'Acidente de Goiânia' }
      ]
    },

    /* ============ 7. HIDROSTÁTICA E GRAVITAÇÃO ============ */
    {
      id: 'hidrostatica-gravitacao',
      nome: 'Hidrostática e gravitação',
      incidencia: 'media',
      resumo: 'Densidade, pressão, empuxo, princípio de Pascal e Arquimedes; gravitação universal, satélites e marés.',
      conceitos: [
        {
          titulo: 'Densidade, pressão e empuxo',
          texto: '- **Densidade**: d = m/V (g/cm³ ou kg/m³). A água tem 1 g/cm³.\n- **Pressão**: p = F/A (pascal). Mesma força em área menor → maior pressão (faca afiada, prego, salto alto).\n- **Pressão hidrostática**: p = p₀ + d·g·h; aumenta com a **profundidade** (por isso paredes de barragens são mais largas na base).\n- **Princípio de Pascal**: pressão aplicada a um fluido se transmite integralmente (**prensa hidráulica**, freios).\n- **Princípio de Arquimedes**: o empuxo E = d_líquido·V_deslocado·g. Um corpo **flutua** se sua densidade média for menor que a do líquido.'
        },
        {
          titulo: 'Gravitação',
          texto: '**Lei da gravitação universal** (Newton): F = G·M·m/d²; a força diminui com o **quadrado da distância**. **Leis de Kepler**: órbitas elípticas; velocidade maior quando o planeta está mais perto do Sol. **Satélites** estão em queda livre contínua ao redor da Terra (por isso há "ausência de peso aparente"). As **marés** resultam principalmente da atração da Lua (e do Sol).'
        }
      ],
      pegadinhas: [
        'Achar que astronautas "flutuam" por falta de gravidade: estão em **queda livre**, com gravidade ainda atuante.',
        'Confundir **densidade** com **peso** ou **massa**.',
        'Dizer que a pressão depende do **formato** do recipiente: depende da **profundidade** e da densidade.',
        'Esquecer que um navio de aço flutua porque sua **densidade média** é menor que a da água.'
      ],
      dicas: [
        'Para flutuação, compare **densidades** (objeto × líquido).',
        'Para pressão, pense em **força ÷ área**.',
        'Em gravitação, lembre: **dobrando a distância, a força cai a um quarto**.'
      ],
      exemplo: {
        enunciado: 'Por que um navio de aço, muito mais denso que a água, não afunda?',
        resolucao: 'Porque seu **volume interno é grande** (ocupado por ar), tornando a **densidade média** menor que a da água; assim, o empuxo equilibra o peso.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.halliday, F.gref],
      flashcards: [
        { f: 'Fórmula da densidade', v: 'd = m/V.' },
        { f: 'Fórmula da pressão', v: 'p = F/A.' },
        { f: 'Princípio de Pascal', v: 'A pressão aplicada em um fluido é transmitida integralmente a todos os pontos.' },
        { f: 'Princípio de Arquimedes', v: 'O empuxo é igual ao peso do fluido deslocado.' },
        { f: 'Quando um corpo flutua?', v: 'Quando sua densidade média é menor que a do líquido.' },
        { f: 'Como a pressão varia com a profundidade?', v: 'Aumenta proporcionalmente à profundidade.' },
        { f: 'Lei da gravitação universal', v: 'A força é proporcional às massas e inversamente proporcional ao quadrado da distância.' },
        { f: 'Causa principal das marés', v: 'Atração gravitacional da Lua (e do Sol).' }
      ],
      quiz: [
        {
          q: 'Um navio de aço flutua porque',
          alt: ['sua densidade média é menor que a da água', 'o aço é menos denso que a água', 'o peso do navio é nulo', 'o empuxo é sempre menor que o peso', 'a água não exerce força sobre ele'],
          c: 0, dif: 'facil',
          exp: 'O volume ocupado por ar reduz a densidade média do conjunto.'
        },
        {
          q: 'Uma faca afiada corta melhor porque, para a mesma força, ela',
          alt: ['tem menor área de contato e maior pressão', 'tem maior área de contato', 'reduz a força aplicada', 'aumenta a massa do alimento', 'diminui a densidade do material'],
          c: 0, dif: 'facil',
          exp: 'Como p = F/A, menor área significa maior pressão.'
        },
        {
          q: 'A pressão em um ponto no fundo de um lago depende da',
          alt: ['profundidade, da densidade do líquido e da gravidade', 'forma do lago, apenas', 'área da superfície do lago, apenas', 'cor da água', 'temperatura do ar, apenas'],
          c: 0, dif: 'medio',
          exp: 'p = p₀ + d·g·h.'
        },
        {
          q: 'A prensa hidráulica baseia-se no princípio de',
          alt: ['Pascal', 'Arquimedes', 'Ohm', 'Faraday', 'Bernoulli apenas'],
          c: 0, dif: 'medio',
          exp: 'A pressão aplicada em um êmbolo é transmitida ao outro, que multiplica a força.'
        },
        {
          q: 'Se a distância entre dois corpos dobra, a força gravitacional entre eles',
          alt: ['cai a um quarto', 'dobra', 'cai à metade', 'quadruplica', 'permanece igual'],
          c: 0, dif: 'medio',
          exp: 'A força é inversamente proporcional ao quadrado da distância.'
        },
        {
          q: 'Os astronautas na estação espacial parecem flutuar porque',
          alt: ['estão em queda livre ao redor da Terra, em movimento orbital', 'não há gravidade alguma no espaço sideral', 'sua massa se anula fora da atmosfera', 'a Terra deixa de atrair corpos distantes', 'o ar da estação sustenta seus corpos'],
          c: 0, dif: 'dificil',
          exp: 'A gravidade ainda atua; o conjunto estação e astronautas cai continuamente.'
        },
        {
          q: 'Um objeto de 200 g tem volume de 100 cm³. Sua densidade é de',
          alt: ['2 g/cm³', '0,5 g/cm³', '20 g/cm³', '200 g/cm³', '100 g/cm³'],
          c: 0, dif: 'dificil',
          exp: 'd = m/V = 200/100 = 2 g/cm³; como é maior que 1, afunda na água.'
        },
        {
          q: 'As marés estão associadas principalmente à',
          alt: ['atração gravitacional da Lua sobre as águas', 'rotação do Sol ao redor da Terra', 'ação dos ventos alísios', 'evaporação dos oceanos', 'pressão atmosférica sobre as montanhas'],
          c: 0, dif: 'medio',
          exp: 'A Lua, e em menor grau o Sol, deforma a distribuição das águas.'
        }
      ],
      pares: [
        { a: 'Densidade', b: 'Massa por volume' },
        { a: 'Pressão', b: 'Força por área' },
        { a: 'Arquimedes', b: 'Empuxo' },
        { a: 'Pascal', b: 'Prensa hidráulica' },
        { a: 'Kepler', b: 'Órbitas elípticas' },
        { a: 'Gravitação', b: 'Inverso do quadrado da distância' },
        { a: 'Marés', b: 'Atração da Lua' },
        { a: 'Satélite', b: 'Queda livre orbital' }
      ]
    }
  ]);
})();
