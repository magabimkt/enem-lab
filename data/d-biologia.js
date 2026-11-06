/* Biologia — Ciências da Natureza e suas Tecnologias.
   Incidência (Estratégia, 1998–2020, levantamento de terceiros): Ecologia ~37%, Citologia ~9%, Fisiologia humana ~9%, Evolução ~7%.
   O ENEM valoriza interpretação de texto, gráfico e tabela, e a relação entre ciência, saúde, ambiente e tecnologia. */
(function () {
  var F = {
    inep: { titulo: 'INEP — Matrizes de Referência do Enem (Ciências da Natureza e suas Tecnologias)', url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem' },
    estrategia: { titulo: 'Estratégia Vestibulares — Assuntos que mais caem no Enem (análise de 1998 a 2020)', url: 'https://vestibulares.estrategia.com/portal/enem/assuntos-que-mais-caem-no-enem/' },
    querobolsa: { titulo: 'Quero Bolsa — Esquenta Enem: o que mais cai na prova de Ciências da Natureza', url: 'https://querobolsa.com.br/revista/esquenta-enem-o-que-mais-cai-na-prova-de-ciencias-da-natureza' },
    amabis: { titulo: 'AMABIS, J. M.; MARTHO, G. R. Biologia das células / dos organismos / das populações (obras de referência)', url: '' },
    odum: { titulo: 'ODUM, E. P.; BARRETT, G. W. Fundamentos de Ecologia (obra de referência)', url: '' }
  };

  ENEM.temas('biologia', [
    /* ============ 1. ECOLOGIA: CADEIAS E CICLOS ============ */
    {
      id: 'ecologia-cadeias-ciclos',
      nome: 'Ecologia: cadeias alimentares, fluxo de energia e ciclos',
      incidencia: 'alta',
      resumo: 'O tema mais cobrado de Biologia. Entenda como energia e matéria circulam nos ecossistemas e como as espécies se relacionam.',
      conceitos: [
        {
          titulo: 'Cadeias, teias e níveis tróficos',
          texto: '- **Produtores** (plantas, algas, cianobactérias) fazem fotossíntese e iniciam a cadeia.\n- **Consumidores** (primários, secundários, terciários) e **decompositores** (fungos e bactérias), que reciclam a matéria.\n- A **energia flui em sentido único** (Sol → produtores → consumidores) e diminui a cada nível: só cerca de **10%** passa ao nível seguinte. Por isso as pirâmides de energia são sempre "triangulares" e as cadeias, curtas.\n- **Teia alimentar**: várias cadeias interligadas, o que dá estabilidade ao ecossistema.'
        },
        {
          titulo: 'Ciclos biogeoquímicos e relações ecológicas',
          texto: 'A **matéria circula** (ciclo fechado), diferentemente da energia.\n\n- **Carbono**: fotossíntese retira CO₂; respiração, queima e decomposição devolvem. O excesso de CO₂ intensifica o efeito estufa.\n- **Nitrogênio**: bactérias **fixadoras** (em raízes de leguminosas), nitrificantes e desnitrificantes; adubos nitrogenados em excesso poluem a água.\n- **Água** e **fósforo**.\n\n**Relações ecológicas**: harmônicas (mutualismo, protocooperação, comensalismo) e desarmônicas (predação, parasitismo, competição, amensalismo). Entre **espécies diferentes** ou da **mesma espécie** (colônia, sociedade, canibalismo).'
        },
        {
          titulo: 'Populações e comunidades',
          texto: '**Nicho ecológico** (o "papel" da espécie) e **habitat** (o "endereço"). **Sucessão ecológica**: comunidades pioneiras → clímax. **Crescimento populacional** é limitado pela **resistência do meio** (alimento, predadores, doenças), formando uma curva em "S". **Bioacumulação**: substâncias não degradáveis (mercúrio, DDT) se concentram ao longo da cadeia, atingindo mais os **últimos níveis**.'
        }
      ],
      pegadinhas: [
        'Dizer que a energia "recicla": ela **não recicla**, é perdida como calor. A matéria é que circula.',
        'Confundir **habitat** (local) com **nicho** (função).',
        'Achar que decompositores são "consumidores comuns": eles **reciclam** a matéria orgânica.',
        'Trocar **bioacumulação** (acúmulo em um organismo) por **biomagnificação** (aumento da concentração ao longo da cadeia): em questões os dois aparecem juntos.'
      ],
      dicas: [
        'Em cadeias, sempre pergunte: **quem produz, quem come, o que se perde?**',
        'Em gráficos de populações, procure **crescimento, estabilização e causa da queda**.',
        'Relacione qualquer ciclo a **ação humana**: queimadas (C), adubos (N), esgoto (P).'
      ],
      exemplo: {
        enunciado: 'Um pesticida não degradável é encontrado em baixa concentração na água, mas em alta concentração em aves que comem peixes. Como explicar?',
        resolucao: 'Pela **biomagnificação**: a substância se acumula nos tecidos e a concentração aumenta a cada nível trófico, atingindo mais os **predadores de topo**, como as aves.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.odum, F.amabis],
      flashcards: [
        { f: 'Quanto da energia passa de um nível trófico ao seguinte?', v: 'Cerca de 10%; o restante é perdido como calor e na respiração.' },
        { f: 'A energia circula ou flui?', v: 'Flui em sentido único; a matéria é que circula.' },
        { f: 'Papel dos decompositores', v: 'Decompõem a matéria orgânica e devolvem nutrientes ao ambiente.' },
        { f: 'Habitat x nicho ecológico', v: 'Habitat é o local onde vive; nicho é o papel da espécie no ecossistema.' },
        { f: 'O que é mutualismo?', v: 'Relação em que ambas as espécies se beneficiam e dependem uma da outra.' },
        { f: 'O que é biomagnificação?', v: 'Aumento da concentração de uma substância ao longo da cadeia alimentar.' },
        { f: 'Quem fixa o nitrogênio do ar?', v: 'Bactérias fixadoras, como as das raízes de leguminosas.' },
        { f: 'O que é sucessão ecológica?', v: 'Substituição gradual de comunidades até o estágio clímax.' }
      ],
      quiz: [
        {
          q: 'Em uma cadeia alimentar, a energia diminui a cada nível trófico porque',
          alt: ['grande parte é perdida como calor e consumida na respiração', 'os consumidores produzem energia nova a cada nível', 'os decompositores devolvem toda a energia aos produtores', 'a energia é reciclada de forma completa no ecossistema', 'os produtores deixam de realizar fotossíntese à noite'],
          c: 0, dif: 'facil',
          exp: 'A energia flui em sentido único e é dissipada em cada transferência.'
        },
        {
          q: 'Uma relação em que uma espécie é beneficiada e a outra prejudicada, mas sem morte imediata, é o',
          alt: ['parasitismo', 'mutualismo', 'protocooperação', 'comensalismo', 'sucessão primária'],
          c: 0, dif: 'facil',
          exp: 'No parasitismo, o parasita se beneficia à custa do hospedeiro.'
        },
        {
          q: 'O uso excessivo de adubos nitrogenados pode causar impacto ambiental porque',
          alt: ['o excesso chega à água e provoca eutrofização', 'o nitrogênio deixa de ser absorvido pelas plantas', 'os adubos eliminam os microrganismos do ar', 'o solo perde totalmente a capacidade de infiltração', 'o nitrogênio se transforma em oxigênio puro'],
          c: 0, dif: 'medio',
          exp: 'Nutrientes em excesso estimulam algas, reduzem o oxigênio e matam peixes.'
        },
        {
          q: 'A substância tóxica não degradável tende a se concentrar mais em',
          alt: ['predadores de topo da cadeia alimentar', 'plantas aquáticas microscópicas', 'organismos decompositores do solo', 'produtores terrestres de pequeno porte', 'bactérias fixadoras de nitrogênio'],
          c: 0, dif: 'medio',
          exp: 'A biomagnificação aumenta a concentração ao longo dos níveis tróficos.'
        },
        {
          q: 'No ciclo do carbono, o processo que devolve CO₂ à atmosfera é a',
          alt: ['respiração, a decomposição e a queima de combustíveis', 'fotossíntese realizada pelos produtores', 'fixação do nitrogênio nas leguminosas', 'precipitação das chuvas ácidas', 'sedimentação dos nutrientes no mar'],
          c: 0, dif: 'facil',
          exp: 'Respiração, decomposição e queima liberam CO₂; a fotossíntese o retira.'
        },
        {
          q: 'A diferença entre habitat e nicho ecológico é que o nicho refere-se',
          alt: ['ao papel que a espécie exerce no ecossistema', 'ao local físico onde a espécie é encontrada', 'à quantidade de indivíduos de uma população', 'ao número de espécies presentes na região', 'ao tempo médio de vida da espécie'],
          c: 0, dif: 'medio',
          exp: 'Habitat é o "endereço"; nicho é a "profissão" da espécie.'
        },
        {
          q: 'O crescimento de uma população em curva de "S" estabiliza porque',
          alt: ['a resistência do meio limita alimento, espaço e outros recursos', 'o ambiente oferece recursos infinitos', 'a taxa de natalidade aumenta sem limites', 'todos os predadores deixam de existir', 'não há competição entre os indivíduos'],
          c: 0, dif: 'dificil',
          exp: 'Fatores limitantes definem a capacidade de suporte do ambiente.'
        },
        {
          q: 'Na sucessão ecológica, as espécies pioneiras caracterizam-se por',
          alt: ['colonizar ambientes nus e preparar o terreno para outras espécies', 'dominar apenas as florestas já maduras e estáveis', 'depender de solo profundo e muito rico', 'surgir somente após a comunidade clímax', 'ser sempre árvores de grande porte'],
          c: 0, dif: 'dificil',
          exp: 'Liquens e musgos, por exemplo, iniciam a formação do solo.'
        }
      ],
      pares: [
        { a: 'Produtor', b: 'Faz fotossíntese' },
        { a: 'Decompositor', b: 'Recicla a matéria orgânica' },
        { a: 'Mutualismo', b: 'Ambos se beneficiam' },
        { a: 'Parasitismo', b: 'Um se beneficia, o outro é lesado' },
        { a: 'Nicho ecológico', b: 'Papel da espécie' },
        { a: 'Biomagnificação', b: 'Concentração cresce na cadeia' },
        { a: 'Bactéria fixadora', b: 'Incorpora o N₂ do ar' },
        { a: 'Eutrofização', b: 'Excesso de nutrientes na água' }
      ]
    },

    /* ============ 2. ECOLOGIA AMBIENTAL ============ */
    {
      id: 'ecologia-ambiental',
      nome: 'Impactos ambientais, biodiversidade e sustentabilidade',
      incidencia: 'alta',
      resumo: 'Poluição, desmatamento, perda de biodiversidade, espécies invasoras, unidades de conservação e soluções (reciclagem, energia limpa).',
      conceitos: [
        {
          titulo: 'Problemas ambientais',
          texto: '- **Efeito estufa e aquecimento global**: excesso de CO₂ e metano.\n- **Camada de ozônio**: reduzida pelos **CFCs**; protege contra radiação UV (acordo: **Protocolo de Montreal**).\n- **Chuva ácida**: óxidos de enxofre e nitrogênio.\n- **Eutrofização**: excesso de nutrientes → proliferação de algas → baixa de O₂ → morte de peixes.\n- **Poluição por plásticos e microplásticos**, **metais pesados**, **agrotóxicos**.\n- **Desmatamento, queimadas e fragmentação** de habitats.'
        },
        {
          titulo: 'Biodiversidade e conservação',
          texto: '**Biodiversidade** é a variedade de espécies, genes e ecossistemas. Ameaças: perda de habitat, caça, **espécies invasoras** (competem com nativas), poluição, mudanças climáticas.\n\n- **Unidades de conservação**: proteção integral (parques) e uso sustentável (reservas extrativistas, APAs).\n- **Corredores ecológicos**: ligam fragmentos e permitem fluxo gênico.\n- **Convenção sobre Diversidade Biológica**; **biopirataria**.\n- **Serviços ecossistêmicos**: polinização, regulação do clima, água limpa.'
        },
        {
          titulo: 'Soluções e consumo',
          texto: '**Reduzir, reutilizar, reciclar**; **compostagem**; **tratamento de esgoto**; **energias renováveis**; **agricultura orgânica e controle biológico** (uso de inimigos naturais no lugar de agrotóxicos); **biorremediação** (microrganismos que degradam poluentes); **pegada ecológica** e consumo consciente.'
        }
      ],
      pegadinhas: [
        'Confundir **camada de ozônio** (CFCs) com **efeito estufa** (CO₂ e metano).',
        'Dizer que toda introdução de espécie é benéfica: **espécies invasoras** podem causar desequilíbrio.',
        'Achar que reciclagem resolve tudo: o primeiro passo é **reduzir** o consumo.',
        'Atribuir a chuva ácida ao CO₂: ela decorre de óxidos de **enxofre e nitrogênio**.'
      ],
      dicas: [
        'Em textos sobre ambiente, identifique **causa, efeito e medida de solução**.',
        'Associe cada problema ao **poluente principal**: ozônio–CFC; chuva ácida–SOx/NOx; eutrofização–N e P.',
        'Em questões de conservação, valorize **corredores, unidades de conservação e manejo sustentável**.'
      ],
      exemplo: {
        enunciado: 'Um lago recebe esgoto doméstico em grande quantidade e apresenta mortandade de peixes. Qual processo explica?',
        resolucao: 'A **eutrofização**: o excesso de nutrientes estimula o crescimento de algas; ao morrerem, sua decomposição consome oxigênio e os peixes morrem por falta de O₂.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.odum],
      flashcards: [
        { f: 'Qual gás destrói a camada de ozônio?', v: 'Os CFCs (clorofluorcarbonos).' },
        { f: 'Causa da chuva ácida', v: 'Óxidos de enxofre e de nitrogênio na atmosfera.' },
        { f: 'O que é eutrofização?', v: 'Excesso de nutrientes na água que leva à proliferação de algas e queda de oxigênio.' },
        { f: 'O que é uma espécie invasora?', v: 'Espécie introduzida que se multiplica e prejudica as nativas.' },
        { f: 'Para que servem corredores ecológicos?', v: 'Ligar fragmentos de habitat e permitir o fluxo de genes e espécies.' },
        { f: 'O que é controle biológico?', v: 'Uso de inimigos naturais para controlar pragas.' },
        { f: 'O que é biorremediação?', v: 'Uso de organismos para degradar poluentes.' },
        { f: 'O que é biopirataria?', v: 'Exploração ilegal de recursos genéticos e saberes tradicionais.' }
      ],
      quiz: [
        {
          q: 'A redução da camada de ozônio é causada principalmente por',
          alt: ['compostos clorados como os CFCs', 'excesso de gás oxigênio na atmosfera', 'liberação de vapor de água pelas florestas', 'emissão natural de nitrogênio pelos solos', 'queda de meteoritos sobre os polos'],
          c: 0, dif: 'facil',
          exp: 'Os CFCs liberam cloro na estratosfera, que destrói o ozônio.'
        },
        {
          q: 'O controle biológico de pragas agrícolas tem a vantagem de',
          alt: ['reduzir o uso de agrotóxicos e a contaminação ambiental', 'eliminar todos os organismos do ecossistema', 'aumentar a dependência de produtos químicos', 'impedir o crescimento das culturas', 'ampliar a poluição das águas subterrâneas'],
          c: 0, dif: 'medio',
          exp: 'Inimigos naturais mantêm as pragas sob controle com menor impacto ambiental.'
        },
        {
          q: 'A introdução de uma espécie exótica em um ecossistema pode causar danos quando ela',
          alt: ['não tem predadores naturais e compete com as espécies nativas', 'passa a ser consumida por todos os predadores', 'não consegue se reproduzir no novo ambiente', 'depende de habitat que não existe na região', 'morre rapidamente por falta de alimento'],
          c: 0, dif: 'medio',
          exp: 'Sem controle natural, pode se multiplicar e eliminar espécies nativas.'
        },
        {
          q: 'Os corredores ecológicos são importantes porque',
          alt: ['conectam fragmentos de mata e favorecem o fluxo gênico', 'isolam definitivamente as populações animais', 'impedem a dispersão de sementes', 'aumentam a fragmentação do habitat', 'substituem as unidades de conservação'],
          c: 0, dif: 'medio',
          exp: 'Ligando áreas isoladas, reduzem o risco de extinção local.'
        },
        {
          q: 'A chuva ácida em regiões industriais deve-se, sobretudo, à emissão de',
          alt: ['óxidos de enxofre e de nitrogênio', 'gás hélio e argônio', 'vapor de água em excesso', 'oxigênio liberado pelas plantas', 'ozônio estratosférico'],
          c: 0, dif: 'facil',
          exp: 'Esses óxidos reagem com a água da atmosfera e formam ácidos.'
        },
        {
          q: 'A perda de habitat é considerada a principal ameaça à biodiversidade porque',
          alt: ['elimina o local de abrigo, alimento e reprodução das espécies', 'aumenta o número de alimentos disponíveis', 'favorece o aparecimento de novas espécies em curto prazo', 'não altera as interações ecológicas', 'amplia a variabilidade genética das populações'],
          c: 0, dif: 'dificil',
          exp: 'Sem habitat, as populações diminuem e podem se extinguir.'
        },
        {
          q: 'A biorremediação consiste em',
          alt: ['usar microrganismos para degradar poluentes do ambiente', 'queimar o lixo em usinas a céu aberto', 'enterrar resíduos sem tratamento', 'lançar esgoto direto em rios', 'substituir florestas por plantações'],
          c: 0, dif: 'dificil',
          exp: 'Bactérias e fungos podem decompor petróleo e outros contaminantes.'
        },
        {
          q: 'Entre as medidas de consumo sustentável, o primeiro passo recomendado é',
          alt: ['reduzir o consumo e o desperdício', 'reciclar apenas ao final do uso', 'aumentar a produção de embalagens', 'descartar tudo no mesmo recipiente', 'trocar os produtos com frequência'],
          c: 0, dif: 'facil',
          exp: 'A hierarquia é reduzir, reutilizar e só então reciclar.'
        }
      ],
      pares: [
        { a: 'CFCs', b: 'Destroem o ozônio' },
        { a: 'SOx e NOx', b: 'Chuva ácida' },
        { a: 'CO₂ e metano', b: 'Efeito estufa' },
        { a: 'Espécie invasora', b: 'Desequilíbrio ecológico' },
        { a: 'Corredor ecológico', b: 'Liga fragmentos' },
        { a: 'Compostagem', b: 'Adubo de resíduos orgânicos' },
        { a: 'Controle biológico', b: 'Inimigos naturais' },
        { a: 'Biopirataria', b: 'Exploração ilegal de genes' }
      ]
    },

    /* ============ 3. CITOLOGIA E METABOLISMO ============ */
    {
      id: 'citologia-metabolismo',
      nome: 'Citologia e metabolismo energético',
      incidencia: 'alta',
      resumo: 'Estrutura celular, organelas, membrana, fotossíntese, respiração e fermentação, divisão celular.',
      conceitos: [
        {
          titulo: 'A célula e suas organelas',
          texto: '- **Procariontes** (bactérias): sem núcleo definido. **Eucariontes**: com núcleo.\n- **Membrana plasmática**: seletiva; transporte **passivo** (difusão, osmose) e **ativo** (gasta ATP).\n- **Mitocôndria**: respiração celular (ATP). **Cloroplasto**: fotossíntese. **Ribossomos**: síntese de proteínas. **Retículo endoplasmático**, **complexo golgiense** (secreção), **lisossomos** (digestão intracelular), **parede celular** (plantas, fungos, bactérias).\n- **DNA** no núcleo; mitocôndrias e cloroplastos têm DNA próprio (teoria endossimbiótica).'
        },
        {
          titulo: 'Fotossíntese, respiração e fermentação',
          texto: '**Fotossíntese**: CO₂ + H₂O + luz → glicose + O₂ (nos cloroplastos). **Respiração aeróbica**: glicose + O₂ → CO₂ + H₂O + **muito ATP** (mitocôndria). **Fermentação** (sem O₂): **pouco ATP**, produz etanol (leveduras, pães, bebidas) ou ácido lático (iogurte, músculos em esforço intenso).\n\nA fotossíntese é a base das cadeias alimentares e do oxigênio atmosférico; é influenciada por **luz, CO₂ e temperatura**.'
        },
        {
          titulo: 'Ciclo celular e câncer',
          texto: '**Mitose**: divisão que gera células idênticas (crescimento e reparo). **Meiose**: gera gametas (variabilidade). O **câncer** resulta de multiplicação descontrolada por mutações; fatores de risco: tabaco, radiação, alimentação e exposição a agentes mutagênicos. **Células-tronco**: capazes de se diferenciar em vários tipos.'
        }
      ],
      pegadinhas: [
        'Dizer que a mitocôndria "produz energia": ela **converte energia química em ATP**.',
        'Achar que **toda célula** tem parede celular ou cloroplasto: células animais não têm.',
        'Confundir **mitose** (idênticas) com **meiose** (gametas, variabilidade).',
        'Dizer que a fermentação rende tanto ATP quanto a respiração: rende **muito menos**.'
      ],
      dicas: [
        'Monte uma tabela mental: **organela → função**.',
        'Em questões de transporte, ligue **difusão/osmose = sem gasto de ATP** e **transporte ativo = com ATP**.',
        'Em gráficos de fotossíntese, procure o **fator limitante** (luz, CO₂ ou temperatura).'
      ],
      exemplo: {
        enunciado: 'Por que o pão cresce durante o preparo da massa?',
        resolucao: 'Porque as leveduras realizam **fermentação alcoólica**, liberando **CO₂** que forma bolhas na massa, e etanol, que evapora no forno.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.amabis],
      flashcards: [
        { f: 'Função da mitocôndria', v: 'Respiração celular aeróbica, produção de ATP.' },
        { f: 'Função do cloroplasto', v: 'Realizar a fotossíntese.' },
        { f: 'Função dos ribossomos', v: 'Síntese de proteínas.' },
        { f: 'Função dos lisossomos', v: 'Digestão intracelular.' },
        { f: 'Difusão e osmose gastam ATP?', v: 'Não, são transportes passivos.' },
        { f: 'Produtos da fermentação alcoólica', v: 'Etanol e CO₂.' },
        { f: 'Mitose x meiose', v: 'Mitose gera células idênticas; meiose gera gametas variados.' },
        { f: 'O que é câncer?', v: 'Multiplicação celular descontrolada causada por mutações.' }
      ],
      quiz: [
        {
          q: 'A organela responsável pela maior parte do ATP produzido na respiração aeróbica é',
          alt: ['a mitocôndria', 'o ribossomo', 'o lisossomo', 'o complexo golgiense', 'o cloroplasto'],
          c: 0, dif: 'facil',
          exp: 'A cadeia respiratória ocorre nas cristas mitocondriais.'
        },
        {
          q: 'A diferença entre o transporte passivo e o ativo é que o ativo',
          alt: ['ocorre contra o gradiente e consome ATP', 'ocorre a favor do gradiente sem gasto de energia', 'só acontece em células mortas', 'depende apenas da difusão do oxigênio', 'não envolve proteínas de membrana'],
          c: 0, dif: 'medio',
          exp: 'O transporte ativo move substâncias para onde há maior concentração, usando ATP.'
        },
        {
          q: 'Em um exercício muito intenso, as células musculares sem oxigênio suficiente produzem',
          alt: ['ácido lático por fermentação', 'etanol e gás carbônico', 'apenas oxigênio livre', 'glicose por fotossíntese', 'grande quantidade de água'],
          c: 0, dif: 'medio',
          exp: 'A fermentação lática fornece pouco ATP quando falta oxigênio.'
        },
        {
          q: 'A fotossíntese contribui para o equilíbrio atmosférico porque',
          alt: ['consome CO₂ e libera O₂', 'consome O₂ e libera CO₂', 'libera metano e vapor de água', 'consome apenas nitrogênio', 'não altera os gases da atmosfera'],
          c: 0, dif: 'facil',
          exp: 'Plantas, algas e cianobactérias retiram CO₂ e liberam oxigênio.'
        },
        {
          q: 'A meiose é importante para a reprodução sexuada porque',
          alt: ['origina gametas com metade dos cromossomos e variabilidade genética', 'gera células idênticas à célula original', 'duplica o número de cromossomos dos filhos', 'impede a recombinação do material genético', 'ocorre apenas em bactérias'],
          c: 0, dif: 'medio',
          exp: 'A meiose reduz o número cromossômico e promove a recombinação.'
        },
        {
          q: 'A teoria endossimbiótica sugere que mitocôndrias e cloroplastos',
          alt: ['vieram de procariontes que passaram a viver dentro de outras células', 'surgiram do núcleo de células vegetais antigas', 'são exclusivos das células de bactérias', 'não possuem nenhum material genético próprio', 'foram formados pela fusão de vários lisossomos'],
          c: 0, dif: 'dificil',
          exp: 'Ambas possuem DNA próprio e se dividem de modo semelhante às bactérias.'
        },
        {
          q: 'Em uma planta mantida em local de pouca luz, mas com bastante CO₂ e água, o fator limitante da fotossíntese é',
          alt: ['a luz', 'o CO₂', 'a água', 'o oxigênio', 'a glicose'],
          c: 0, dif: 'dificil',
          exp: 'O fator em menor disponibilidade é o que limita o processo.'
        },
        {
          q: 'O câncer pode ser entendido como uma doença em que',
          alt: ['mutações levam à multiplicação celular descontrolada', 'as células deixam de se dividir completamente', 'ocorre apenas infecção por bactérias', 'a mitose é substituída pela meiose', 'o DNA é totalmente eliminado'],
          c: 0, dif: 'medio',
          exp: 'Falhas no controle do ciclo celular geram tumores.'
        }
      ],
      pares: [
        { a: 'Mitocôndria', b: 'Respiração celular' },
        { a: 'Cloroplasto', b: 'Fotossíntese' },
        { a: 'Ribossomo', b: 'Síntese de proteínas' },
        { a: 'Lisossomo', b: 'Digestão intracelular' },
        { a: 'Osmose', b: 'Transporte passivo de água' },
        { a: 'Fermentação lática', b: 'Iogurte e músculos' },
        { a: 'Mitose', b: 'Células idênticas' },
        { a: 'Meiose', b: 'Formação de gametas' }
      ]
    },

    /* ============ 4. FISIOLOGIA ============ */
    {
      id: 'fisiologia-humana',
      nome: 'Fisiologia humana: sistemas do corpo',
      incidencia: 'alta',
      resumo: 'Digestão, circulação, respiração, excreção, sistema endócrino e nervoso. Foco em funções, hormônios e saúde.',
      conceitos: [
        {
          titulo: 'Nutrição, circulação e respiração',
          texto: '- **Digestório**: digestão mecânica e química (enzimas: amilase, pepsina, lipase); absorção no **intestino delgado** (vilosidades); fígado produz bile (emulsifica gorduras); pâncreas produz enzimas e insulina.\n- **Circulatório**: coração (4 câmaras), circulação **pulmonar** (pequena) e **sistêmica** (grande); sangue (hemácias, leucócitos, plaquetas, plasma).\n- **Respiratório**: trocas gasosas nos **alvéolos**; diafragma.\n- **Excretor**: rins filtram o sangue (néfrons) e formam a urina; controle de água e sais.'
        },
        {
          titulo: 'Controle: nervoso e endócrino',
          texto: '**Sistema nervoso**: neurônios, sinapses, SNC e SNP; ato reflexo. **Sistema endócrino** (hormônios):\n\n- **Insulina** (reduz glicemia) e **glucagon** (aumenta); **diabetes**.\n- **Adrenalina** (estresse), **tiroxina** (metabolismo), **ADH** (retenção de água), **hormônios sexuais** (testosterona, estrógeno, progesterona), **melatonina** (sono).\n- **Hipotálamo e hipófise** coordenam o sistema.'
        },
        {
          titulo: 'Imunidade, saúde e hábitos',
          texto: '**Imunidade inata e adquirida**; **anticorpos**; **vacina** (estimula memória imunológica; prevenção) × **soro** (anticorpos prontos; ação imediata). **Alergia** (resposta exagerada). **Doenças autoimunes**. Hábitos de vida: **alimentação, sono, atividade física**, **drogas** e saúde mental.'
        }
      ],
      pegadinhas: [
        'Confundir **vacina** (prevenção, imunização ativa) com **soro** (tratamento, imunização passiva).',
        'Dizer que a absorção ocorre no estômago: ocorre principalmente no **intestino delgado**.',
        'Achar que **insulina** aumenta a glicemia: ela **reduz**.',
        'Trocar a circulação **pulmonar** (coração → pulmões → coração) pela **sistêmica**.'
      ],
      dicas: [
        'Para cada sistema, memorize **órgãos-chave + função + doença comum**.',
        'Em questões de hormônio, procure o **órgão produtor e o efeito**.',
        'Em gráficos de glicemia, reconheça **jejum, refeição e ação da insulina**.'
      ],
      exemplo: {
        enunciado: 'Uma pessoa picada por cobra venenosa recebe soro antiofídico. Por que não basta aplicar a vacina?',
        resolucao: 'Porque a vacina estimula a **produção de anticorpos**, mas leva dias. O **soro** contém anticorpos prontos, que neutralizam o veneno imediatamente (imunização passiva).'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.amabis],
      flashcards: [
        { f: 'Onde ocorre a maior parte da absorção de nutrientes?', v: 'No intestino delgado.' },
        { f: 'Função da bile', v: 'Emulsificar gorduras, facilitando a ação da lipase.' },
        { f: 'Onde ocorrem as trocas gasosas?', v: 'Nos alvéolos pulmonares.' },
        { f: 'Função dos rins', v: 'Filtrar o sangue, eliminar excretas e controlar água e sais.' },
        { f: 'Função da insulina', v: 'Reduzir a glicemia, facilitando a entrada de glicose nas células.' },
        { f: 'Vacina x soro', v: 'Vacina estimula a memória imunológica; soro fornece anticorpos prontos.' },
        { f: 'O que é a sinapse?', v: 'Região de comunicação entre neurônios por neurotransmissores.' },
        { f: 'Função da hemácia', v: 'Transportar oxigênio pela hemoglobina.' }
      ],
      quiz: [
        {
          q: 'A principal função das vilosidades do intestino delgado é',
          alt: ['aumentar a superfície de absorção de nutrientes', 'produzir bile para digerir gorduras', 'armazenar alimentos por longos períodos', 'filtrar o sangue e eliminar excretas', 'produzir hormônios sexuais'],
          c: 0, dif: 'facil',
          exp: 'As vilosidades ampliam a área de contato e a absorção.'
        },
        {
          q: 'Em casos de picada de animais peçonhentos, o tratamento é feito com soro porque ele',
          alt: ['contém anticorpos prontos que agem imediatamente', 'estimula a produção de memória imunológica', 'contém o vírus enfraquecido do veneno', 'previne futuras picadas de forma permanente', 'age apenas como analgésico'],
          c: 0, dif: 'medio',
          exp: 'O soro oferece imunização passiva e rápida.'
        },
        {
          q: 'O hormônio que reduz o nível de glicose no sangue é a',
          alt: ['insulina', 'adrenalina', 'tiroxina', 'melatonina', 'testosterona'],
          c: 0, dif: 'facil',
          exp: 'A insulina, produzida no pâncreas, favorece a captação de glicose.'
        },
        {
          q: 'A grande circulação (sistêmica) leva o sangue',
          alt: ['do coração para o corpo e de volta ao coração', 'do coração aos pulmões e de volta', 'dos rins para o fígado apenas', 'do intestino diretamente ao cérebro', 'dos pulmões para o fígado'],
          c: 0, dif: 'medio',
          exp: 'A pequena circulação é a pulmonar; a grande leva o sangue oxigenado aos tecidos.'
        },
        {
          q: 'A bile, produzida no fígado, atua na digestão porque',
          alt: ['emulsiona as gorduras, aumentando a ação das enzimas', 'digere as proteínas dos alimentos no estômago', 'quebra o amido logo na cavidade da boca', 'neutraliza a acidez da urina nos rins', 'transporta o oxigênio pelo sangue até as células'],
          c: 0, dif: 'medio',
          exp: 'A bile não é enzima; fragmenta gotas de gordura.'
        },
        {
          q: 'A adrenalina prepara o corpo para situações de estresse ao',
          alt: ['aumentar a frequência cardíaca e a disponibilidade de energia', 'diminuir o ritmo respiratório e cardíaco', 'induzir o sono profundo', 'reduzir o fluxo de sangue aos músculos', 'inibir todas as funções corporais'],
          c: 0, dif: 'medio',
          exp: 'Ela acelera o coração e libera glicose para reações de luta ou fuga.'
        },
        {
          q: 'A principal função dos néfrons é',
          alt: ['filtrar o sangue e formar a urina', 'absorver gorduras da alimentação', 'produzir hemácias na medula', 'regular a temperatura por suor', 'armazenar glicogênio'],
          c: 0, dif: 'dificil',
          exp: 'Os néfrons, unidades dos rins, filtram, reabsorvem e secretam substâncias.'
        },
        {
          q: 'A vacinação coletiva protege mesmo quem não pode se vacinar porque',
          alt: ['reduz a circulação do agente infeccioso na população', 'cura todas as doenças existentes', 'substitui o saneamento básico', 'elimina todos os microrganismos do ambiente', 'torna os anticorpos permanentes em todos'],
          c: 0, dif: 'dificil',
          exp: 'A imunidade de rebanho diminui a transmissão e protege os vulneráveis.'
        }
      ],
      pares: [
        { a: 'Intestino delgado', b: 'Absorção de nutrientes' },
        { a: 'Fígado', b: 'Produz bile' },
        { a: 'Alvéolos', b: 'Trocas gasosas' },
        { a: 'Rins', b: 'Filtram o sangue' },
        { a: 'Insulina', b: 'Reduz a glicemia' },
        { a: 'Adrenalina', b: 'Resposta ao estresse' },
        { a: 'Vacina', b: 'Prevenção' },
        { a: 'Soro', b: 'Anticorpos prontos' }
      ]
    },

    /* ============ 5. GENÉTICA E BIOTECNOLOGIA ============ */
    {
      id: 'genetica-biotecnologia',
      nome: 'Genética, DNA e biotecnologia',
      incidencia: 'alta',
      resumo: 'Leis de Mendel, DNA e proteínas, mutações, transgênicos, CRISPR, clonagem e testes de DNA. O ENEM foca nas aplicações e na ética.',
      conceitos: [
        {
          titulo: 'Hereditariedade e DNA',
          texto: '- **Mendel**: 1ª lei (segregação dos alelos); 2ª lei (segregação independente). **Dominante × recessivo**; **genótipo × fenótipo**; cruzamentos com quadro de Punnett.\n- **Heranças**: grupos sanguíneos (ABO e Rh), ligada ao sexo (daltonismo, hemofilia), **codominância**.\n- **DNA**: dupla hélice (A–T, C–G); **replicação**; **transcrição** (DNA → RNA) e **tradução** (RNA → proteína, nos ribossomos); **código genético** quase universal.\n- **Mutação**: alteração no DNA (fonte de variabilidade; pode causar doenças).'
        },
        {
          titulo: 'Biotecnologia',
          texto: '**Engenharia genética**: cortar e unir DNA (enzimas de restrição, DNA recombinante). **Transgênicos (OGMs)**: organismos com genes de outras espécies (soja resistente a herbicida; insulina por bactérias). **CRISPR**: edição precisa de genes. **Clonagem** (ovelha Dolly). **Células-tronco**. **Teste de paternidade e perícia** por DNA. **Terapia gênica**. Debates: **ética, biossegurança, patentes, rotulagem**.'
        },
        {
          titulo: 'Genética de populações e saúde',
          texto: 'Doenças genéticas (fibrose cística, anemia falciforme, síndrome de Down — alteração cromossômica). **Aconselhamento genético**, **heredogramas** (símbolos e interpretação). A **variabilidade genética** é a base da evolução e da adaptação.'
        }
      ],
      pegadinhas: [
        'Confundir **genótipo** (conjunto de genes) com **fenótipo** (característica expressa).',
        'Achar que **dominante** é sempre "mais comum" ou "melhor": é só o alelo que se manifesta em heterozigose.',
        'Dizer que **transgênico** é igual a **clone**: transgênico recebe gene de outra espécie.',
        'Confundir **transcrição** (DNA→RNA) com **tradução** (RNA→proteína).'
      ],
      dicas: [
        'Em heredogramas, procure **pais normais com filho afetado** (indica recessivo).',
        'Faça o cruzamento no quadro de Punnett, mesmo que simples.',
        'Em questões de biotecnologia, identifique **benefício, risco e questão ética**.'
      ],
      exemplo: {
        enunciado: 'Dois pais de fenótipo normal têm um filho com albinismo (recessivo). Qual a probabilidade de terem outro filho albino?',
        resolucao: 'Ambos são **heterozigotos (Aa)**. O cruzamento Aa × Aa gera aa em **1/4 (25%)** dos casos. Cada gestação é independente.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.amabis],
      flashcards: [
        { f: 'Genótipo x fenótipo', v: 'Genótipo é a constituição genética; fenótipo é a característica expressa.' },
        { f: '1ª lei de Mendel', v: 'Cada característica é determinada por dois alelos que se separam na formação dos gametas.' },
        { f: 'Pareamento de bases no DNA', v: 'Adenina com timina e citosina com guanina.' },
        { f: 'Transcrição', v: 'Síntese de RNA a partir do DNA.' },
        { f: 'Tradução', v: 'Síntese de proteínas a partir do RNA mensageiro, nos ribossomos.' },
        { f: 'O que é um transgênico?', v: 'Organismo que recebeu gene de outra espécie.' },
        { f: 'Para que serve o CRISPR?', v: 'Editar genes de forma precisa.' },
        { f: 'Daltonismo e hemofilia são heranças...', v: 'Ligadas ao sexo (cromossomo X), mais frequentes em homens.' }
      ],
      quiz: [
        {
          q: 'A produção de insulina humana por bactérias é possível graças a',
          alt: ['técnicas de DNA recombinante, que inserem o gene humano na bactéria', 'cruzamentos entre bactérias e humanos', 'mutações espontâneas nas bactérias', 'seleção natural das bactérias em laboratório', 'clonagem de pessoas diabéticas'],
          c: 0, dif: 'medio',
          exp: 'O gene da insulina é inserido em bactérias, que passam a produzi-la.'
        },
        {
          q: 'Um casal com fenótipo normal tem filho com doença recessiva. Isso indica que os pais são',
          alt: ['heterozigotos portadores do alelo', 'homozigotos dominantes', 'ambos afetados pela doença', 'pessoas sem o alelo recessivo', 'portadores de mutação cromossômica'],
          c: 0, dif: 'medio',
          exp: 'Ambos carregam o alelo recessivo sem manifestá-lo.'
        },
        {
          q: 'O processo em que a informação do RNA mensageiro é convertida em proteína chama-se',
          alt: ['tradução', 'transcrição', 'replicação', 'mitose', 'fermentação'],
          c: 0, dif: 'facil',
          exp: 'Ocorre nos ribossomos, a partir dos códons do RNAm.'
        },
        {
          q: 'A principal preocupação ética em relação à edição genética de embriões é',
          alt: ['alterações herdáveis e uso para fins de seleção humana', 'a velocidade de crescimento das plantas', 'a escolha de adubos para lavouras', 'o aumento da produção de alimentos', 'a preservação de espécies marinhas'],
          c: 0, dif: 'dificil',
          exp: 'Mudanças em células germinativas passam às gerações futuras.'
        },
        {
          q: 'A diferença entre clone e transgênico é que o transgênico',
          alt: ['recebeu gene de outra espécie; o clone é cópia do original', 'é sempre idêntico ao organismo doador do gene', 'não possui DNA em nenhuma de suas células', 'resulta apenas da reprodução sexuada natural', 'surgiu somente por meio da seleção natural'],
          c: 0, dif: 'medio',
          exp: 'Clone é cópia; transgênico tem DNA modificado com gene externo.'
        },
        {
          q: 'No cruzamento Aa × Aa, a proporção esperada de fenótipo dominante é',
          alt: ['3/4', '1/4', '1/2', '100%', '0%'],
          c: 0, dif: 'facil',
          exp: 'AA, Aa e aA são dominantes; só aa é recessivo.'
        },
        {
          q: 'A anemia falciforme, doença recessiva, é um exemplo de como uma alteração no DNA',
          alt: ['pode modificar a proteína (hemoglobina) e causar doença', 'não interfere na produção de nenhuma proteína', 'altera apenas a cor dos olhos e da pele', 'ocorre somente em plantas e fungos', 'é causada exclusivamente por bactérias do solo'],
          c: 0, dif: 'dificil',
          exp: 'Uma única troca de base altera a hemoglobina e a forma da hemácia.'
        },
        {
          q: 'O teste de DNA é usado para comprovar paternidade porque',
          alt: ['metade do material genético do filho vem do pai', 'o DNA muda a cada geração por completo', 'todos os homens têm o mesmo DNA', 'o filho herda só o DNA da mãe', 'o DNA é idêntico em todos os humanos'],
          c: 0, dif: 'dificil',
          exp: 'A comparação de marcadores genéticos revela o parentesco.'
        }
      ],
      pares: [
        { a: 'Mendel', b: 'Leis da hereditariedade' },
        { a: 'Genótipo', b: 'Constituição genética' },
        { a: 'Fenótipo', b: 'Característica expressa' },
        { a: 'Transcrição', b: 'DNA → RNA' },
        { a: 'Tradução', b: 'RNA → proteína' },
        { a: 'Transgênico', b: 'Gene de outra espécie' },
        { a: 'CRISPR', b: 'Edição de genes' },
        { a: 'Heredograma', b: 'Árvore genealógica' }
      ]
    },

    /* ============ 6. EVOLUÇÃO ============ */
    {
      id: 'evolucao',
      nome: 'Evolução, seleção natural e origem da vida',
      incidencia: 'alta',
      resumo: 'Lamarck x Darwin, seleção natural, especiação, evidências evolutivas e resistência a antibióticos. Costuma explorar textos e esquemas.',
      conceitos: [
        {
          titulo: 'Teorias evolutivas',
          texto: '- **Lamarck** (lei do uso e desuso; herança dos caracteres adquiridos): hoje **refutada**.\n- **Darwin e Wallace** (seleção natural): indivíduos de uma população **variam**; os mais **adaptados** sobrevivem e se reproduzem mais, transmitindo seus genes. A variabilidade vem de **mutações e recombinação**.\n- **Teoria sintética**: une Darwin e genética. **Seleção natural atua sobre o fenótipo; a evolução ocorre nas populações**, não nos indivíduos.'
        },
        {
          titulo: 'Evidências e especiação',
          texto: '**Fósseis**, **órgãos homólogos** (mesma origem: braço humano e asa de morcego), **análogos** (mesma função, origem diferente: asa de inseto e de ave), **vestigiais**, **semelhanças moleculares**, **embriologia**. **Especiação**: formação de novas espécies, geralmente por **isolamento geográfico** e reprodutivo. **Deriva genética**, **migração**, **mutação**, **seleção** e **acasalamento** alteram as frequências gênicas.'
        },
        {
          titulo: 'Origem da vida e aplicações',
          texto: 'Hipóteses: **abiogênese** (Oparin–Haldane; experimento de Miller), **biogênese** (Redi, Pasteur refutaram a geração espontânea). **Resistência de bactérias a antibióticos** e de pragas a inseticidas ilustra a seleção natural: o uso do antibiótico seleciona as resistentes. **Evolução humana**: hominídeos, bipedalismo, cultura.'
        }
      ],
      pegadinhas: [
        'Dizer que o indivíduo "evolui" para se adaptar: quem evolui é a **população**.',
        'Atribuir a Darwin a herança de caracteres adquiridos (isso é **Lamarck**).',
        'Confundir **órgãos homólogos** (origem comum) com **análogos** (função comum).',
        'Pensar que a seleção cria a mutação: ela apenas **seleciona** a variabilidade existente.'
      ],
      dicas: [
        'Para explicar uma adaptação, siga: **variação → pressão do ambiente → sobrevivência diferencial → herança**.',
        'Em esquemas de especiação, procure a **barreira de isolamento**.',
        'Em questões de resistência a antibióticos, a resposta é **seleção natural**, não "o antibiótico criou a resistência".'
      ],
      exemplo: {
        enunciado: 'Por que o uso indevido de antibióticos favorece o surgimento de bactérias "superresistentes"?',
        resolucao: 'Porque o antibiótico elimina as bactérias sensíveis e **seleciona as que já têm mutações de resistência**. Elas se reproduzem e, em poucas gerações, a população passa a ser predominantemente resistente.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.amabis],
      flashcards: [
        { f: 'Ideia central de Lamarck', v: 'Uso e desuso e herança de caracteres adquiridos (refutada).' },
        { f: 'Ideia central de Darwin', v: 'Seleção natural: os mais adaptados deixam mais descendentes.' },
        { f: 'Quem evolui: indivíduo ou população?', v: 'A população.' },
        { f: 'Órgãos homólogos', v: 'Têm a mesma origem evolutiva, podendo ter funções diferentes.' },
        { f: 'Órgãos análogos', v: 'Têm a mesma função, mas origens diferentes.' },
        { f: 'Fonte da variabilidade genética', v: 'Mutações e recombinação gênica.' },
        { f: 'O que é isolamento geográfico?', v: 'Barreira física que separa populações e pode levar à especiação.' },
        { f: 'Quem refutou a geração espontânea?', v: 'Redi e Pasteur.' }
      ],
      quiz: [
        {
          q: 'Segundo a seleção natural de Darwin, a girafa de pescoço longo se tornou comum porque',
          alt: ['indivíduos com pescoço mais longo sobreviveram e se reproduziram mais', 'o uso constante esticou o pescoço e foi transmitido', 'o ambiente criou o pescoço longo em cada indivíduo', 'todas as girafas sempre tiveram o mesmo pescoço', 'o pescoço cresce por vontade do animal'],
          c: 0, dif: 'facil',
          exp: 'A variação preexistente foi selecionada pelo ambiente.'
        },
        {
          q: 'Uma asa de ave e uma asa de inseto são exemplos de órgãos',
          alt: ['análogos, com mesma função e origens distintas', 'homólogos, com mesma origem evolutiva', 'vestigiais, sem função atual', 'embrionários, sem estrutura definida', 'geneticamente idênticos'],
          c: 0, dif: 'medio',
          exp: 'Convergência adaptativa: função semelhante sem ancestral comum da estrutura.'
        },
        {
          q: 'A resistência de bactérias a antibióticos é explicada pela seleção natural porque',
          alt: ['o antibiótico elimina as sensíveis e favorece as resistentes', 'a bactéria decide se tornar resistente', 'o antibiótico produz mutações benéficas', 'as bactérias herdam características do uso', 'o corpo humano transmite resistência'],
          c: 0, dif: 'medio',
          exp: 'Mutantes resistentes sobrevivem e se reproduzem.'
        },
        {
          q: 'A principal diferença entre Lamarck e Darwin é que Lamarck propunha',
          alt: ['a herança de características adquiridas pelo uso e desuso', 'a seleção natural sobre variações hereditárias', 'a evolução por deriva genética', 'a ausência de evolução', 'a origem da vida por biogênese'],
          c: 0, dif: 'medio',
          exp: 'Hoje se sabe que características adquiridas não alteram o DNA germinativo.'
        },
        {
          q: 'A formação de novas espécies a partir do isolamento geográfico ocorre quando',
          alt: ['populações separadas acumulam diferenças até não se cruzarem mais', 'todas as populações se misturam livremente', 'o ambiente permanece sempre igual', 'não há mutações nas populações', 'os indivíduos escolhem se transformar'],
          c: 0, dif: 'medio',
          exp: 'O isolamento reprodutivo consolida a especiação.'
        },
        {
          q: 'A principal fonte de variabilidade genética sobre a qual a seleção natural atua é',
          alt: ['a mutação e a recombinação gênica', 'o uso e desuso de órgãos', 'o esforço dos indivíduos', 'a vontade dos organismos', 'a idade dos indivíduos'],
          c: 0, dif: 'dificil',
          exp: 'Sem variação hereditária, não há o que selecionar.'
        },
        {
          q: 'Os experimentos de Pasteur com frascos de pescoço de cisne contribuíram para',
          alt: ['refutar a geração espontânea', 'confirmar a abiogênese atual', 'demonstrar a herança dos caracteres adquiridos', 'comprovar a deriva genética', 'explicar a origem das espécies'],
          c: 0, dif: 'dificil',
          exp: 'Mostraram que microrganismos vêm de outros microrganismos.'
        },
        {
          q: 'O fato de o braço humano, a asa do morcego e a nadadeira da baleia terem os mesmos ossos indica',
          alt: ['uma origem evolutiva comum (homologia)', 'convergência adaptativa de funções', 'ausência de parentesco entre as espécies', 'criação independente das estruturas', 'ação exclusiva do ambiente'],
          c: 0, dif: 'dificil',
          exp: 'A estrutura básica foi herdada de um ancestral e modificada.'
        }
      ],
      pares: [
        { a: 'Lamarck', b: 'Uso e desuso' },
        { a: 'Darwin', b: 'Seleção natural' },
        { a: 'Órgãos homólogos', b: 'Mesma origem' },
        { a: 'Órgãos análogos', b: 'Mesma função' },
        { a: 'Mutação', b: 'Fonte de variabilidade' },
        { a: 'Isolamento geográfico', b: 'Pode gerar novas espécies' },
        { a: 'Pasteur', b: 'Refutou geração espontânea' },
        { a: 'Fóssil', b: 'Evidência do passado' }
      ]
    },

    /* ============ 7. SAÚDE E DOENÇAS ============ */
    {
      id: 'saude-doencas',
      nome: 'Saúde pública, doenças e saneamento',
      incidencia: 'media',
      resumo: 'Doenças virais, bacterianas, por protozoários e verminoses; ciclo, transmissão e prevenção; vacinas, epidemias, saneamento.',
      conceitos: [
        {
          titulo: 'Agentes e doenças',
          texto: '- **Viroses**: dengue, zika, chikungunya (*Aedes aegypti*), febre amarela, gripe, covid-19, HIV, sarampo, hepatites.\n- **Bacterioses**: tuberculose, cólera, leptospirose, tétano, sífilis, meningite.\n- **Protozooses**: malária (*Anopheles*), doença de Chagas (barbeiro), leishmaniose (flebotomíneo), toxoplasmose, amebíase.\n- **Verminoses**: esquistossomose (caramujo), teníase, ascaridíase, ancilostomose ("amarelão").\n- **Micoses**: candidíase, pé de atleta.'
        },
        {
          titulo: 'Prevenção e saneamento',
          texto: 'A prevenção depende de **saneamento básico** (água tratada, esgoto, lixo), **higiene**, **controle de vetores** (evitar água parada), **vacinação**, **uso de preservativo** (ISTs) e **educação em saúde**. Termos: **endemia** (constante em uma região), **epidemia** (surto crescente), **pandemia** (várias regiões do mundo). **Vetor** transmite o agente; **hospedeiro** o abriga.'
        },
        {
          titulo: 'Ciência, política pública e desinformação',
          texto: 'O **SUS** garante atendimento universal e vacinação; **campanhas** reduziram doenças como a poliomielite. A **desinformação** (fake news) e a queda na cobertura vacinal ameaçam o retorno de doenças. **Resistência a antimicrobianos** e **medicamentos genéricos** são temas comuns.'
        }
      ],
      pegadinhas: [
        'Confundir **vetor** (transmite) com **hospedeiro** (abriga o parasita).',
        'Dizer que dengue é transmitida de pessoa a pessoa: o vetor é o **mosquito**.',
        'Atribuir leptospirose a vírus: é **bactéria** (urina de ratos, enchentes).',
        'Confundir **epidemia** com **pandemia** (escala geográfica).'
      ],
      dicas: [
        'Para cada doença, memorize **agente, vetor/transmissão e prevenção**.',
        'Nas questões, a prevenção costuma passar por **saneamento, vacina e controle do vetor**.',
        'Em gráficos de casos, diferencie **endemia, surto e epidemia**.'
      ],
      exemplo: {
        enunciado: 'Por que eliminar recipientes com água parada ajuda a controlar a dengue?',
        resolucao: 'Porque o *Aedes aegypti* **deposita ovos e se desenvolve em água parada**. Sem criadouros, reduz-se a população do vetor e, assim, a transmissão do vírus.'
      },
      fontes: [F.inep, F.estrategia, F.querobolsa, F.amabis],
      flashcards: [
        { f: 'Vetor da dengue', v: 'Mosquito Aedes aegypti.' },
        { f: 'Agente da malária e vetor', v: 'Protozoário Plasmodium; mosquito Anopheles.' },
        { f: 'Agente da doença de Chagas e vetor', v: 'Trypanosoma cruzi; barbeiro.' },
        { f: 'Causa da leptospirose', v: 'Bactéria presente na urina de ratos, em água de enchentes.' },
        { f: 'Vetor da esquistossomose', v: 'Caramujos aquáticos (hospedeiro intermediário).' },
        { f: 'Endemia x epidemia x pandemia', v: 'Constante local; surto em crescimento; disseminação em vários continentes.' },
        { f: 'Medidas de saneamento básico', v: 'Água tratada, esgoto, coleta de lixo e drenagem.' },
        { f: 'Como se previne a ancilostomose?', v: 'Usando calçados e com saneamento adequado.' }
      ],
      quiz: [
        {
          q: 'A eliminação de criadouros de água parada previne principalmente doenças transmitidas por',
          alt: ['mosquitos, como dengue e chikungunya', 'água contaminada por ratos, como cólera', 'contato sexual, como a sífilis', 'ar contaminado, como a tuberculose', 'alimentos mal cozidos, como a teníase'],
          c: 0, dif: 'facil',
          exp: 'O Aedes se reproduz em água parada.'
        },
        {
          q: 'A leptospirose costuma ocorrer após enchentes porque',
          alt: ['a bactéria da urina de ratos contamina a água e entra pela pele', 'o vírus é transmitido por mosquitos da região', 'a água carrega protozoários vindos do solo', 'os vermes penetram pelas vias aéreas', 'o ar fica saturado de esporos de fungos'],
          c: 0, dif: 'medio',
          exp: 'O contato com água contaminada permite a entrada da bactéria.'
        },
        {
          q: 'Uma doença que ocorre de forma constante, com número de casos estável em uma região, é chamada de',
          alt: ['endemia', 'epidemia', 'pandemia', 'surto isolado', 'zoonose'],
          c: 0, dif: 'facil',
          exp: 'Endemia é a presença regular de uma doença em determinada área.'
        },
        {
          q: 'O saneamento básico previne verminoses porque',
          alt: ['interrompe o ciclo de contaminação por fezes na água e no solo', 'elimina os anticorpos do organismo', 'mata os mosquitos adultos', 'impede a circulação do ar', 'aumenta o contato com o solo contaminado'],
          c: 0, dif: 'medio',
          exp: 'Esgoto tratado e água potável evitam a ingestão de ovos de parasitas.'
        },
        {
          q: 'A queda da cobertura vacinal pode levar à volta de doenças como o sarampo porque',
          alt: ['aumenta o número de pessoas suscetíveis na população', 'reduz a circulação do vírus no ambiente', 'faz o vírus desaparecer', 'torna as pessoas naturalmente imunes', 'impede a transmissão pelo ar'],
          c: 0, dif: 'medio',
          exp: 'Sem imunização suficiente, o vírus encontra hospedeiros e se espalha.'
        },
        {
          q: 'Na doença de Chagas, o barbeiro atua como',
          alt: ['vetor do Trypanosoma cruzi', 'hospedeiro definitivo do vírus', 'agente causador bacteriano', 'reservatório de verminoses', 'produtor de toxinas alimentares'],
          c: 0, dif: 'dificil',
          exp: 'O parasita é eliminado nas fezes do inseto e penetra pela pele ou mucosa.'
        },
        {
          q: 'A pandemia difere da epidemia por',
          alt: ['atingir diversos países e continentes', 'ocorrer sempre em uma única cidade', 'envolver apenas doenças crônicas', 'ser causada por poluentes químicos', 'não ser transmissível'],
          c: 0, dif: 'dificil',
          exp: 'A pandemia é uma epidemia em escala global.'
        },
        {
          q: 'Na esquistossomose, o caramujo é importante porque',
          alt: ['é hospedeiro intermediário do parasita no ciclo da doença', 'transmite o vírus por meio de sua picada', 'produz anticorpos que combatem o verme', 'é consumido como alimento seguro e nutritivo', 'elimina os ovos do parasita do ambiente'],
          c: 0, dif: 'dificil',
          exp: 'A larva se desenvolve no caramujo e depois infecta o ser humano pela pele.'
        }
      ],
      pares: [
        { a: 'Dengue', b: 'Aedes aegypti' },
        { a: 'Malária', b: 'Anopheles e Plasmodium' },
        { a: 'Doença de Chagas', b: 'Barbeiro' },
        { a: 'Leptospirose', b: 'Urina de rato' },
        { a: 'Esquistossomose', b: 'Caramujo' },
        { a: 'Endemia', b: 'Presença constante' },
        { a: 'Pandemia', b: 'Escala mundial' },
        { a: 'Saneamento', b: 'Água, esgoto e lixo' }
      ]
    }
  ]);
})();
